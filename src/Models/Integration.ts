import { BaseSettingsModel } from './Global';

export type IntegrationSettingsModel = BaseSettingsModel & {
  inputs: boolean;
  chat: boolean;
  friendList: boolean;
  friendListBlur: boolean;
  WCE: boolean;
  FUSAM: boolean;
  TTS: boolean;
  MBS: boolean;
};
