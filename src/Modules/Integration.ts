import { BaseModule } from "../Base/BaseModule";
import { Subscreen } from "../Base/SettingDefinitions";
import { IntegrationSettingsModel } from "../Models/Integration";
import { GuiIntegration } from "../Screens/Integration";

export class IntegrationModule extends BaseModule {
  get settingsScreen(): Subscreen | null {
    return GuiIntegration;
  }

  get settings(): IntegrationSettingsModel {
    return super.settings as IntegrationSettingsModel;
  }

  get defaultSettings() {
    return <IntegrationSettingsModel>{
      BC: true,
      FBC: true,
      FUSAM: true,
      TTS: true
    };
  }

  Load(): void {}

  Run(): void {}
}
