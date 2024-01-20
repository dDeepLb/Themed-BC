import { BaseModule } from '../Base/BaseModule';
import { PlayerStorage } from '../Utilities/Data';
import { ModName, ModVersion } from '../Utilities/ModDefinition';
import { sendLocalSmart } from '../Utilities/Other';
import { hookFunction, HookPriority, ModuleCategory } from '../Utilities/SDK';
import { _Style } from '../Utilities/Style';
import { GlobalModule } from './Global';
import Changelog from '../Static/HTML/Changelog.html';

export class VersionModule extends BaseModule {
  static isItNewVersion: boolean = false;

  Load(): void {
    hookFunction(
      'ChatRoomSync',
      HookPriority.Observe,
      (args, next) => {
        next(args);
        VersionModule.sendNewVersionMessage();
      },
      ModuleCategory.Version
    );
  }

  static isNewVersion(current: string | undefined, candidate: string) {
    if (current !== undefined) {
      const CURRENT_ = current.split('.'),
        CANDIDATE_ = candidate.split('.');
      for (let i = 0; i < 3; i++) {
        if (CURRENT_[i] === CANDIDATE_[i]) {
          continue;
        }
        return CANDIDATE_[i] > CURRENT_[i];
      }
    }
    if (current === undefined || current === '' || !current) {
      return true;
    }
    return false;
  }

  static sendNewVersionMessage() {
    if (PlayerStorage().GlobalModule.doShowNewVersionMessage && VersionModule.isItNewVersion) {
      sendLocalSmart('ThemedNewVersion', Changelog);
    }
  }

  static saveVersion() {
    if (PlayerStorage()) {
      Player[ModName].Version = ModVersion;
    }
  }

  static loadVersion() {
    if (PlayerStorage()?.Version) {
      return PlayerStorage().Version;
    }
    return;
  }

  static checkIfNewVersion() {
    let LoadedVersion = VersionModule.loadVersion();
    if (VersionModule.isNewVersion(LoadedVersion, ModVersion)) {
      VersionModule.isItNewVersion = true;
    }
    VersionModule.saveVersion();
  }

  Run(): void {}
}
