import { Input, Setting } from "../../.types/setting";
import { GuiSubscreen } from "../Base/BaseSetting";
import { ColorsSettingsModel } from "../Models/Colors";
import { GlobalSettingsModel } from "../Models/Global";

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
          type: "text",
          id: "primaryColor",
          label: "settings.setting.primaryColor.name",
          description: "settings.setting.primaryColor.desc",
          setting: () => this.settings?.primaryColor ?? true,
          setSetting: (val) => (this.settings.primaryColor = val)
        },
        <Input>{
          type: "text",
          id: "secondaryColor",
          label: "settings.setting.secondaryColor.name",
          description: "settings.setting.secondaryColor.desc",
          setting: () => this.settings?.secondaryColor ?? true,
          setSetting: (val) => (this.settings.secondaryColor = val)
        },
        <Input>{
          type: "text",
          id: "textColor",
          label: "settings.setting.textColor.name",
          description: "settings.setting.textColor.desc",
          setting: () => this.settings?.textColor ?? true,
          setSetting: (val) => (this.settings.textColor = val)
        },
        <Input>{
          type: "text",
          id: "textShadowColor",
          label: "settings.setting.textShadowColor.name",
          description: "settings.setting.textShadowColor.desc",
          setting: () => this.settings?.textShadowColor ?? true,
          setSetting: (val) => (this.settings.textShadowColor = val)
        },
        <Input>{
          type: "text",
          id: "accentColor1",
          label: "settings.setting.accentColor1.name",
          description: "settings.setting.accentColor1.desc",
          setting: () => this.settings?.accentColor1 ?? true,
          setSetting: (val) => (this.settings.accentColor1 = val)
        },
        <Input>{
          type: "text",
          id: "accentColor2",
          label: "settings.setting.accentColor2.name",
          description: "settings.setting.accentColor2.desc",
          setting: () => this.settings?.accentColor2 ?? true,
          setSetting: (val) => (this.settings.accentColor2 = val)
        }
      ]
    ];
  }

  Load(): void {
    super.Load();
  }
}
