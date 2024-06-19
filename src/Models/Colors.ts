import { BaseSettingsModel } from './Global';

export type ColorsSettingsModel = BaseSettingsModel & {
  primaryColor: string;
  textColor: string;
  accentColor: string;
};

export type Colors = {
  mainBackground: string;
  elementBackground: string; // Buttons and HTML Elements
  elementBackgroundHover: string;
  elementBackgroundDisabled: string;
  elementBorder: string;
  elementBorderHover: string;
  // elementBorderDisabled: string;
  elementHint: string;
  text: string;
  icon: string;
  // iconHover: string;
  // iconDisabled: string;
};
