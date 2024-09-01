import { SettingsModel } from '../Models/Settings';
import { ModName } from './ModDefinition';
import { _String } from './String';

export const PlayerStorage = () => (typeof Player?.[ModName] === 'object' ? CommonCloneDeep(Player?.[ModName]) : undefined);
export const ExtensionStorage = () => Player.ExtensionSettings[ModName];

export function settingsLoad() {
  if (ExtensionStorage()) {
    Player[ModName] = JSON.parse(LZString.decompressFromBase64(ExtensionStorage())) as SettingsModel;
  } else if (Player.OnlineSettings[ModName]) {
    Player[ModName] = JSON.parse(LZString.decompressFromBase64(Player.OnlineSettings[ModName]));

    delete Player.OnlineSettings[ModName];
    window.ServerAccountUpdate.QueueData({ OnlineSettings: Player.OnlineSettings });
  } else {
    Player[ModName] = <SettingsModel>{};
  }
}

export function settingsSave() {
  if (!ExtensionStorage()) Player.ExtensionSettings[ModName] = '';
  const Data: SettingsModel = {
    Version: PlayerStorage().Version,
    GlobalModule: PlayerStorage().GlobalModule,
    ColorsModule: PlayerStorage().ColorsModule,
    IntegrationModule: PlayerStorage().IntegrationModule,
    ProfilesModule: PlayerStorage().ProfilesModule
  };
  Player.ExtensionSettings[ModName] = _String.encode(Data);
  ServerPlayerExtensionSettingsSync(ModName);
}

export function settingsReset() {
  Player[ModName] = <SettingsModel>{};
  settingsSave();
}
