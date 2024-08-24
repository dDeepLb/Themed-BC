import { BaseModule } from '../Base/BaseModule';
import { Subscreen } from '../Base/SettingDefinitions';
import { IntegrationSettingsModel } from '../Models/Integration';
import { GuiIntegration } from '../Screens/Integration';
import { deepMergeMatchingProperties } from '../Utilities/Other';
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
      BC_Chat: true,
      BC_FriendList: true,
      FriendListBlur: false,
      BC_Other: true,
      FBC: true,
      FUSAM: true,
      TTS: true,
      MBS: true
    };
  }

  Load(): void {
    this.settings = deepMergeMatchingProperties(this.defaultSettings, this.settings) as IntegrationSettingsModel;
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
