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
      secondaryColor: "#303030",
      textColor: "#eee",
      textShadowColor: "#999",
      accentColor1: "#440171",
      accentColor2: "#57276e"
    };
  }

  Load(): void {}

  Run(): void {}
}
