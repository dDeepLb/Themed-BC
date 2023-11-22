import { ModName } from "./ModDefinition";
import { ColorsSettingsModel } from "../Models/Colors";
import { SettingsModel } from "../Models/Settings";
import { _String } from "./String";

export const PlayerStorage = () => Player?.[ModName];
export const ExtensionStorage = () => Player.ExtensionSettings[ModName];

export function dataTake() {
  try {
    Player[ModName] = JSON.parse(LZString.decompressFromBase64(ExtensionStorage())) as SettingsModel;
  } catch (error) {
    Player[ModName] = JSON.parse(LZString.decompressFromBase64(Player.OnlineSettings[ModName])) || <SettingsModel>{};
    if (Player.OnlineSettings[ModName]) {
      delete Player.OnlineSettings[ModName];
      window.ServerAccountUpdate.QueueData({ OnlineSettings: Player.OnlineSettings });
    }
  }
}

export function dataStore() {
  if (!ExtensionStorage()) Player.ExtensionSettings[ModName] = "";
  let Data: SettingsModel = {
    Version: PlayerStorage().Version,
    GlobalModule: PlayerStorage().GlobalModule,
    ColorsModule: PlayerStorage().ColorsModule,
    IntegrationModule: PlayerStorage().IntegrationModule
  };
  Player.ExtensionSettings[ModName] = _String.encode(Data);
  ServerPlayerExtensionSettingsSync(ModName);
}

export function dataErase() {
  Player[ModName].ColorsModule = <ColorsSettingsModel>{};
  dataStore();
}
