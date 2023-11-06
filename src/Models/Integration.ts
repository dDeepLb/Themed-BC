import { BaseSettingsModel } from "./Global";

export type IntegrationSettingsModel = BaseSettingsModel & {
  BC: boolean;
  FBC: boolean;
  FUSAM: boolean;
  TTS: boolean;
};
