import { BaseModule } from "../Base/BaseModule";
import { Subscreen } from "../Base/SettingDefinitions";
import { ModVersion } from "../Utilities/Definition";
import { GlobalSettingsModel } from "../Models/Global";
import { GuiGlobal } from "../Screens/Global";
import { sendLocalSmart } from "../Utilities/Other";
import { hookFunction, HookPriority, ModuleCategory } from "../Utilities/SDK";
import Changelog from "../Static/HTML/Changelog.html";
import { PlayerStorage } from "../Utilities/Data";
import { _Style } from "../Utilities/Style";
import { loadCommands } from "../Utilities/Commands";
import { loadGuiHooks } from "../Utilities/GuiHooks";

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
      doVanillaGuiOverhaul: true,
      doUseChatSpecialStyling: true,
      doShowLocaleTime: true,
      doShowNewVersionMessage: true
    };
  }

  Load(): void {
    loadCommands();
    loadGuiHooks();

    hookFunction(
      "ChatRoomSync",
      HookPriority.Observe,
      (args, next) => {
        next(args);
        _Style.reloadAll();
        GlobalModule.sendNewVersionMessage();
      },
      ModuleCategory.Global
    );

    hookFunction(
      "ChatRoomCurrentTime",
      HookPriority.Observe,
      (args, next) => {
        if (!this.settings.doShowLocaleTime) return next(args);

        const currentTime = new Date(Date.now());

        return currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      },
      ModuleCategory.Global
    );
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
