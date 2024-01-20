import { BaseModule } from '../Base/BaseModule';
import { Subscreen } from '../Base/SettingDefinitions';
import { IntegrationSettingsModel } from '../Models/Integration';
import { GuiIntegration } from '../Screens/Integration';
import { hookFunction, HookPriority, ModuleCategory } from '../Utilities/SDK';
import { _Style } from '../Utilities/Style';

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
      BC_Chat: true,
      BC_FriendList: true,
      BC_Other: true,
      FBC: true,
      FUSAM: true,
      TTS: true
    };
  }

  Load(): void {
    hookFunction(
      'ChatRoomSync',
      HookPriority.Observe,
      (args, next) => {
        next(args);
        _Style.reloadAll();
      },
      ModuleCategory.Integration
    );
  }
}
