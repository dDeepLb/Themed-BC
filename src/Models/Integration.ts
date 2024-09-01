import { BaseSettingsModel } from './Global';

export type IntegrationSettingsModel = BaseSettingsModel & {
  inputs: boolean;
  chat: boolean;
  friendList: boolean;
  friendListBlur: boolean;
  scrollbar: boolean;
  selection: boolean;
  WCE: boolean;
  FUSAM: boolean;
  TTS: boolean;
  MBS: boolean;
};
