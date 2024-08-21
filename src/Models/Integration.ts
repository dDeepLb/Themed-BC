import { BaseSettingsModel } from './Global';

export type IntegrationSettingsModel = BaseSettingsModel & {
  BC: boolean;
  BC_Chat: boolean;
  BC_FriendList: boolean;
  FriendListBlur: boolean;
  BC_Other: boolean;
  FBC: boolean;
  FUSAM: boolean;
  TTS: boolean;
  MBS: boolean;
};
