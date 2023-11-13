import { BaseSettingsModel } from "./Global";

export type ColorsSettingsModel = BaseSettingsModel & {
  primaryColor: string;
  textColor: string;
  accentColor: string;
};

export type Colors = {
  background: string;
  element: string; // Buttons and HTML Elements
  elementHover: string;
  elementDisabled: string;
  icon: string;
  border: string;
  borderHover: string;
  text: string;
};
