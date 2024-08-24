import { BaseSettingsModel } from './Global';

export type IntegrationSettingsModel = BaseSettingsModel & {
  inputs: boolean;
  chat: boolean;
  WCE: boolean;
  FUSAM: boolean;
  TTS: boolean;
  MBS: boolean;
};
