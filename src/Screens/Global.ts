import { Setting } from "../../.types/setting";
import { GuiSubscreen } from "../Base/BaseSetting";
import { GlobalSettingsModel } from "../Models/Global";

export class GuiGlobal extends GuiSubscreen {
  get name(): string {
    return "Settings";
  }

  get icon(): string {
    return "Icons/Preference.png";
  }

  get settings(): GlobalSettingsModel {
    return super.settings as GlobalSettingsModel;
  }

  get structure(): Setting[] {
    return [
      <Setting>{
        type: "checkbox",
        label: "settings.setting.themedEnabled.name",
        description: "settings.setting.themedEnabled.desc",
        setting: () => this.settings?.themedEnabled ?? true,
        setSetting: (val) => (this.settings.themedEnabled = val)
      },
      <Setting>{
        type: "checkbox",
        label: "settings.setting.doVanillaGuiOverhaul.name",
        description: "settings.setting.doVanillaGuiOverhaul.desc",
        setting: () => this.settings?.doVanillaGuiOverhaul ?? true,
        setSetting: (val) => (this.settings.doVanillaGuiOverhaul = val)
      },
      <Setting>{
        type: "checkbox",
        label: "settings.setting.doShowLocaleTime.name",
        description: "settings.setting.doShowLocaleTime.desc",
        setting: () => this.settings?.doShowLocaleTime ?? true,
        setSetting: (val) => (this.settings.doShowLocaleTime = val)
      },
      <Setting>{
        type: "checkbox",
        label: "settings.setting.doShowNewVersionMessage.name",
        description: "settings.setting.doShowNewVersionMessage.desc",
        setting: () => this.settings?.doShowNewVersionMessage ?? true,
        setSetting: (val) => (this.settings.doShowNewVersionMessage = val)
      }
    ];
  }

  Load(): void {
    super.Load();
  }
}
