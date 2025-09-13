import { LocalSettingsModel } from '../models/local';
import { modStorage } from 'bc-deeplib/deeplib';
import { SettingsModel } from '../models/settings';

export function settingsReset() {
  modStorage.playerStorage = <SettingsModel>{};
  modStorage.save();
}

export function localSettingsLoad() {
  const data = modStorage.getLocalStorage('LocalData') as LocalSettingsModel | null;

  if (!data) {
    window.ThemedLocalData = <LocalSettingsModel>{
      loginOptions: {
        hideDummy: false,
        hideCredits: false
      }
    };

    localSettingsSave();
  } else {
    window.ThemedLocalData = data;
  }
}

export function localSettingsSave() {
  modStorage.setLocalStorage('LocalData', window.ThemedLocalData);
}