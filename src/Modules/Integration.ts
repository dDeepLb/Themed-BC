import { BaseModule } from '../Base/BaseModule';
import { Subscreen } from '../Base/SettingDefinitions';
import { IntegrationSettingsModel } from '../Models/Integration';
import { GuiIntegration } from '../Screens/Integration';
import { hookFunction, HookPriority, ModuleCategory } from '../Utilities/SDK';
import { BcStyle } from '../Utilities/Style';

export class IntegrationModule extends BaseModule {
  get settingsScreen(): Subscreen | null {
    return GuiIntegration;
  }

  get settings(): IntegrationSettingsModel {
    return super.settings as IntegrationSettingsModel;
  }

  set settings(val) {
    super.settings = val;
  }

  get defaultSettings() {
    return <IntegrationSettingsModel>{
      inputs: true,
      chat: true,
      friendList: true,
      friendListBlur: false,
      scrollbar: true,
      selection: true,
      WCE: true,
      FUSAM: true,
      TTS: true,
      MBS: true
    };
  }

  Load(): void {
    hookFunction(
      'ChatRoomSync',
      HookPriority.Observe,
      (args, next) => {
        next(args);
        BcStyle.reloadAll();
      },
      ModuleCategory.Integration
    );
  }
}
