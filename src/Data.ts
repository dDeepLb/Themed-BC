import { DarkBCVersion } from "./Definition";
import { setSubscreen } from "./GUI/GUIMisc/GUIHelper";

export class DataManager {
	private static _instance: DataManager | undefined;
	private initFromNoData: boolean = false;

	static init() {
		if (this._instance === undefined) this._instance = new DataManager();
	}

	static get instance() {
		this.init();
		return DataManager._instance as DataManager;
	}

	modData: ResponsivePartialSetting = {};
	mergeData: ResponsiveSolidSetting | undefined;
	
	get data() {
		return this.modData as ResponsiveSolidSetting;
	}

	set data(d: ResponsiveSolidSetting) {
		this.modData = d;
	}

	static DefaultValue: ResponsiveSolidSetting = {
		settings: {
			enable: true,
		},
		isNewInput: {
			background: true,
    		buttonColor: true,
			buttonHoverColor: true,
			buttonBorderColor: true,
   	 		imageColor: true,
    		textColor: true,
    		textShadowColor: true,
		},
		background: "#222",
    	buttonColor: "#333",
		buttonHoverColor: "Gray",
		buttonBorderColor: "#440171",
    	imageColor: "#eee",
    	textColor: "#eee",
    	textShadowColor: "#eee",
	};

	private static ValidateString(object: any, key: string) {
		if (object === undefined || typeof object[key] !== "string") return null;
		return object[key];
	}

	private static ValidatorItem(
		key: keyof ResponsiveSolidSetting
	): [keyof ResponsiveSolidSetting, (d: ResponsivePartialSetting) => any] {
		return [
			key,
			(d: ResponsivePartialSetting): string =>
				DataManager.ValidateString(d, key),
		];
	}

	private static Validator = new Map<
		keyof ResponsiveSolidSetting,
		(d: ResponsivePartialSetting) => any
	>([
		[
			"settings",
			(d: ResponsivePartialSetting): ResponsiveSolidSetting["settings"] => {
				if (
					d.settings?.enable === undefined ||
					typeof d.settings.enable !== "boolean"
				)
					return { enable: true };
				return d.settings;
			},
		],
        [
			"isNewInput",
			(d: ResponsivePartialSetting): ResponsiveSolidSetting["isNewInput"] => {
				if (d.isNewInput === undefined || typeof d.isNewInput !== "object") {
					return this.DefaultValue.isNewInput;
				}
				return {
					...this.DefaultValue.isNewInput,
					...d.isNewInput,
				};
			},
		],
		DataManager.ValidatorItem("background"),
		DataManager.ValidatorItem("buttonBorderColor"),
		DataManager.ValidatorItem("buttonColor"),
		DataManager.ValidatorItem("buttonHoverColor"),
		DataManager.ValidatorItem("imageColor"),
		DataManager.ValidatorItem("textColor"),
		DataManager.ValidatorItem("textShadowColor"),
	]);

	private EncodeDataStr() {
		let data: { [k: string]: any } = {};
		for (const k in this.modData) {
			data[k] = this.modData[k as keyof ResponsiveSolidSetting];
		}
		return LZString.compressToBase64(JSON.stringify(data));
	}

	private DecodeDataStr(str: string | undefined) {
		if (str === undefined) {
			Object.assign(this.modData, DataManager.DefaultValue);
			return;
		}

		let d = LZString.decompressFromBase64(str);
		let data = {};

		try {
			let decoded = JSON.parse(d);
			data = decoded;
		} catch {}

		DataManager.Validator.forEach((v, k) => {
			this.modData[k as keyof ResponsiveSolidSetting] = v(data);
		});
	}

	ServerStoreData() {
		if (Player && Player.OnlineSettings) {
			if ( Player.OnlineSettings.BCResponsive ) {
				Player.OnlineSettings.BCResponsive.data =
				this.EncodeDataStr();
			}
			
			if (ServerAccountUpdate) {
				ServerAccountUpdate.QueueData({
					OnlineSettings: Player.OnlineSettings,
				});
			}
		}
	}

	ServerTakeData() {
		if (Player && Player.OnlineSettings) {
			let rawData = (Player.OnlineSettings as ModSetting).DarkBC;
			rawData = this.CheckOldData(rawData);
			this.DefineResponsiveObj();
			this.DecodeDataStr(rawData);
		}
		if (this.mergeData !== undefined && this.modData.settings !== undefined) {
			this.modData.settings.enable = this.mergeData.settings.enable;
			this.modData.isNewInput = DataManager.DefaultValue.isNewInput;
			if (this.initFromNoData) {
				const rkeys: (keyof ResponsiveSetting)[] = [
					"background",
					"buttonBorderColor",
					"buttonColor",
					"buttonHoverColor",
					"imageColor",
					"textColor",
					"textShadowColor",
				];
				for (const t of rkeys) {
					this.modData[t] = this.mergeData[t];
				}
				this.initFromNoData = false;
			}
			this.ServerStoreData();
		}
	}
	DefineResponsiveObj() {
		if ( Player && Player.OnlineSettings && ( !Player.OnlineSettings.BCResponsive || !Player.OnlineSettings.BCResponsive.data ) )
		Player.OnlineSettings.BCResponsive = {
			data: "",
			Profiles: {
				"1": {
					data: "",
					name: "",
				},
				2: {
					data: "",
					name: "",
				},
				3: {
					data: "",
					name: "",
				},
			},
			SavedVersion: "",
		}
	}

	CheckOldData(data: string | undefined): string {
		if (Player && Player.OnlineSettings) {
			//Delete old profile instances if they been there
			delete Player.OnlineSettings.BCRProfile1;
			delete Player.OnlineSettings.BCRProfile2;
			delete Player.OnlineSettings.BCRProfile3;
			delete Player.OnlineSettings.BCRProfiles;
			ServerAccountUpdate.QueueData({ OnlineSettings: Player.OnlineSettings });
			if (data === undefined) {
				let oldData = Player.OnlineSettings as any as {
					BCMoanerReloaded?: string;
				};
				let rawData = oldData.BCMoanerReloaded;
				if (rawData !== undefined) {
					delete oldData.BCMoanerReloaded;
					return rawData;
				}
			}
			if ( data === undefined ) {
				let oldData = Player.OnlineSettings as any as {
				BCResponsive?: string;
				};
				let rawData = oldData.BCResponsive;
				if ( typeof rawData === "string") {
					delete oldData.BCResponsive;
					return rawData;
				}
			}
		}
		return data as string;
	}

	PushMergeData(data: ResponsiveSolidSetting) {
		this.mergeData = data;
		if (Player && Player.OnlineSettings) this.ServerTakeData();
	}

	//settings, inputs and other shit meant
	CheckNewThingies() {
		const defaultData = DataManager.DefaultValue;
        if ( this.modData.isNewInput === undefined ) this.modData.isNewInput = defaultData.isNewInput;

		const rkeys: (keyof ResponsiveSetting)[] = [
			"background",
			"buttonBorderColor",
			"buttonColor",
			"buttonHoverColor",
			"imageColor",
			"textColor",
			"textShadowColor",
		];

		if (this.modData.isNewInput !== undefined) {
			for (const t of rkeys) {
				if (
					(this.modData[t] === undefined || this.modData[t]?.length === 0) &&
					this.modData.isNewInput[t] === true
				) {
					this.modData[t] = defaultData[t];
					this.modData.isNewInput[t] = false;
				}
				this.modData.isNewInput[t] = false;
			}
		}
        this.ServerStoreData();
	}

	SaveVersion() {
		if ( Player && Player.OnlineSettings && Player.OnlineSettings.BCResponsive) {
			Player.OnlineSettings.BCResponsive.SavedVersion = DarkBCVersion;
			ServerAccountUpdate.QueueData({ OnlineSettings: Player.OnlineSettings });
		}
	}
	LoadVersion() {
		if ( Player && Player.OnlineSettings && Player.OnlineSettings.BCResponsive && Player.OnlineSettings.BCResponsive.SavedVersion) {
			return Player.OnlineSettings.BCResponsive.SavedVersion;
		}
		return;
	}
}
