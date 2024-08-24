import { BaseSettingsModel } from './Global';

export type IntegrationSettingsModel = BaseSettingsModel & {
  inputs: boolean;
  BC_Chat: boolean;
  BC_FriendList: boolean;
  FriendListBlur: boolean;
  BC_Other: boolean;
  FBC: boolean;
  FUSAM: boolean;
  TTS: boolean;
  MBS: boolean;
};
