import { LocalSettingsModel } from '../Models/local';
import { SettingsModel } from '../Models/Settings';
import { ModName } from './ModDefinition';

export function settingsReset() {
  Player[ModName] = <SettingsModel>{};
  settingsSave();
}

export function localSettingsLoad() {
  const data = localStorage.getItem('ThemedLocalData');

  if (data) {
    window.ThemedLocalData = JSON.parse(data);
  } else {
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
  localStorage.setItem('ThemedLocalData', JSON.stringify(window.ThemedLocalData));
}