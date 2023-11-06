import { BaseSettingsModel } from "./Global";

export type ColorsSettingsModel = BaseSettingsModel & {
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  textShadowColor: string;
  accentColor1: string;
  accentColor2: string;
};
