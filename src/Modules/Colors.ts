import { BaseModule } from "../Base/BaseModule";
import { Subscreen } from "../Base/SettingDefinitions";
import { ColorsSettingsModel } from "../Models/Colors";
import { GuiColors } from "../Screens/Colors";

export class ColorsModule extends BaseModule {
  get settingsScreen(): Subscreen | null {
    return GuiColors;
  }

  get settings(): ColorsSettingsModel {
    return super.settings as ColorsSettingsModel;
  }

  get defaultSettings() {
    return <ColorsSettingsModel>{
      primaryColor: "#202020",
      accentColor: "#440171",
      textColor: "#ccc"
    };
  }

  Load(): void {}

  Run(): void {}
}
