import { ModName } from "./Definition";
import { ColorsSettingsModel } from "../Models/Colors";
import { GlobalSettingsModel } from "../Models/Global";
import { SettingsModel } from "../Models/Settings";
import { _String } from "./String";

export const PlayerStorage = () => Player?.[ModName];
export const OnlineStorage = () => Player.OnlineSettings[ModName];

export function dataTake() {
  try {
    // @ts-ignore
    Player[ModName] = JSON.parse(LZString.decompressFromBase64(Player.OnlineSettings?.Themed as string) as string);
  } catch (error) {
    Player[ModName] = (OnlineStorage() as SettingsModel) || <SettingsModel>{};
  }
}

export function dataStore() {
  if (!OnlineStorage()) Player.OnlineSettings[ModName] = <PlayerOnlineSettings>{};
  let Data: SettingsModel = {
    Version: PlayerStorage().Version,
    GlobalModule: Player.Themed.GlobalModule,
    ColorsModule: Player.Themed.ColorsModule,
    IntegrationModule: Player.Themed.IntegrationModule
  };
  Player.OnlineSettings[ModName] = _String.encode(Data);
  window.ServerAccountUpdate.QueueData({ OnlineSettings: Player.OnlineSettings });
}

export function dataErase() {
  Player[ModName].ColorsModule = <ColorsSettingsModel>{};
  dataStore();
}
