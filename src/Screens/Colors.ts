import { Input, Setting } from "../../.types/setting";
import { GuiSubscreen } from "../Base/BaseSetting";
import { ColorsSettingsModel } from "../Models/Colors";
import { GlobalSettingsModel } from "../Models/Global";
import { _Image } from "../Utilities/Drawing";
import { _Style } from "../Utilities/Style";

export class GuiColors extends GuiSubscreen {
  get name(): string {
    return "Colors";
  }

  get icon(): string {
    return "Icons/ColorChange.png";
  }

  get settings(): ColorsSettingsModel {
    return super.settings as ColorsSettingsModel;
  }

  get multipageStructure(): Setting[][] {
    return [
      [
        <Input>{
          type: "color",
          id: "primaryColor",
          label: "settings.setting.primaryColor.name",
          description: "settings.setting.primaryColor.desc",
          setting: () => this.settings?.primaryColor ?? "",
          setSetting: (val) => (this.settings.primaryColor = val)
        },
        <Input>{
          type: "color",
          id: "accentColor",
          label: "settings.setting.accentColor.name",
          description: "settings.setting.accentColor.desc",
          setting: () => this.settings?.accentColor ?? "",
          setSetting: (val) => (this.settings.accentColor = val)
        },
        <Input>{
          type: "color",
          id: "textColor",
          label: "settings.setting.textColor.name",
          description: "settings.setting.textColor.desc",
          setting: () => this.settings?.textColor ?? "",
          setSetting: (val) => (this.settings.textColor = val)
        }
      ]
    ];
  }

  Load(): void {
    super.Load();
  }
}
