import { BaseModule } from "../Base/BaseModule";
import { Subscreen } from "../Base/SettingDefinitions";
import { IntegrationSettingsModel } from "../Models/Integration";
import { GuiIntegration } from "../Screens/Integration";
import { hookFunction, HookPriority, ModuleCategory } from "../Utilities/SDK";
import BC_Inputs from "../Static/Styles/BC_Inputs.css";
import BC_Chat from "../Static/Styles/BC_Chat.css";
import BC_FriendList from "../Static/Styles/BC_FriendList.css";
import BC_Other from "../Static/Styles/BC_Other.css";
import FBC from "../Static/Styles/FBC.css";
import FUSAM from "../Static/Styles/FUSAM.css";
import Themed from "../Static/Styles/Themed.css";
import Markdown from "../Static/Styles/Markdown.css";
import TTS from "../Static/Styles/TTS.css";
import { _Color, colors } from "../Utilities/Color";
import { PlayerStorage } from "../Utilities/Data";
import { _Style } from "../Utilities/Style";

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
      "ChatRoomSync",
      HookPriority.Observe,
      (args, next) => {
        next(args);
        _Style.reloadAll();
      },
      ModuleCategory.Integration
    );
  }
}
