import { BaseModule } from '../Base/BaseModule';
import { Subscreen } from '../Base/SettingDefinitions';
import { GlobalSettingsModel } from '../Models/Global';
import { GuiGlobal } from '../Screens/Global';
import { changeModColors } from '../Utilities/Integration';
import { hookFunction, HookPriority, ModuleCategory } from '../Utilities/SDK';

export class GlobalModule extends BaseModule {
  get settingsScreen(): Subscreen | null {
    return GuiGlobal;
  }

  get settings(): GlobalSettingsModel {
    return super.settings as GlobalSettingsModel;
  }

  get defaultSettings() {
    return <GlobalSettingsModel>{
      themedEnabled: true,
      doVanillaGuiOverhaul: true,
      doUseChatSpecialStyling: true,
      doShowLocaleTime: true,
      doShowNewVersionMessage: true
    };
  }

  Load(): void {
    changeModColors();

    hookFunction(
      'ChatRoomCurrentTime',
      HookPriority.Observe,
      (args, next) => {
        if (!this.settings.doShowLocaleTime) return next(args);

        const currentTime = new Date(Date.now());

        return currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      },
      ModuleCategory.Global
    );
  }

  Run(): void {}
}
