import { LocalSettingsModel } from '../Models/local';
import { modStorage } from 'bc-deeplib/deeplib';
import { SettingsModel } from '../Models/Settings';

export function settingsReset() {
  modStorage.playerStorage = <SettingsModel>{};
  modStorage.save();
}

export function localSettingsLoad() {
  const data = modStorage.getLocalStorage('ThemedLocalData');

  if (!data) {
    window.ThemedLocalData = <LocalSettingsModel>{
      loginOptions: {
        hideDummy: false,
        hideCredits: false
      }
    };

    localSettingsSave();
  }
}

export function localSettingsSave() {
  modStorage.setLocalStorage('ThemedLocalData', window.ThemedLocalData);
}