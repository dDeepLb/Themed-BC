import { BaseModule } from "../Base/BaseModule";
import { Subscreen } from "../Base/SettingDefinitions";
import { ModVersion } from "../Utilities/Definition";
import { GlobalSettingsModel } from "../Models/Global";
import { GuiGlobal } from "../Screens/Global";
import { sendLocalSmart } from "../Utilities/Other";
import { hookFunction, HookPriority, ModuleCategory } from "../Utilities/SDK";
import Changelog from "../Static/HTML/Changelog.html";
import { PlayerStorage } from "../Utilities/Data";
import { Style } from "../Utilities/Style";
import { loadCommands } from "../Utilities/Commands";

export class GlobalModule extends BaseModule {
  static isItNewVersion: boolean = false;

  static isOrgasm_CT: boolean = false;
  static doAnimate_CT: boolean = true;

  get settingsScreen(): Subscreen | null {
    return GuiGlobal;
  }

  get settings(): GlobalSettingsModel {
    return super.settings as GlobalSettingsModel;
  }

  get defaultSettings() {
    return <GlobalSettingsModel>{
      themedEnabled: true,
      doUseChatSpecialStyling: true,
      doShowNewVersionMessage: true
    };
  }

  Load(): void {
    hookFunction(
      "ChatRoomSync",
      HookPriority.Observe,
      (args, next) => {
        next(args);
        Style.reloadAll();
        GlobalModule.sendNewVersionMessage();
      },
      ModuleCategory.Global
    );

    loadCommands();
  }

  Run(): void {}

  static isNewVersion(current: string | undefined, candidate: string) {
    if (current !== undefined) {
      const CURRENT_ = current.split("."),
        CANDIDATE_ = candidate.split(".");
      for (let i = 0; i < 3; i++) {
        if (CURRENT_[i] === CANDIDATE_[i]) {
          continue;
        }
        return CANDIDATE_[i] > CURRENT_[i];
      }
    }
    if (current === undefined || current === "" || !current) {
      return true;
    }
    return false;
  }

  static sendNewVersionMessage() {
    if (PlayerStorage().GlobalModule.doShowNewVersionMessage && GlobalModule.isItNewVersion) {
      sendLocalSmart("ResponsiveNewVersion", Changelog);
    }
  }

  static saveVersion() {
    if (PlayerStorage()) {
      PlayerStorage().Version = ModVersion;
    }
  }

  static loadVersion() {
    if (PlayerStorage()?.Version) {
      return PlayerStorage().Version;
    }
    return;
  }

  static checkIfNewVersion() {
    let LoadedVersion = GlobalModule.loadVersion();
    if (GlobalModule.isNewVersion(LoadedVersion, ModVersion)) {
      GlobalModule.isItNewVersion = true;
    }
    GlobalModule.saveVersion();
  }
}
