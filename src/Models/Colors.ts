import { BaseSettingsModel } from './Global';

export type ColorsSettingsModel = BaseSettingsModel &  {
  base: BaseColors;
  advanced: AdvancedColors;
  special: SpecialColorsModel;
};

export type BaseColors = Pick<ColorsModel, 'main' | 'text' | 'accent'>;

export type AdvancedColors = Pick<ColorsModel, keyof ColorsModel>;

export type ColorsModel = {
  main: string;
  accent: string;
  accentHover: string;
  accentDisabled: string;
  element: string;
  elementHover: string;
  elementDisabled: string;
  elementHint: string;
  text: string;
  textShadow: string;
};

export type SpecialColorsModel = {
  equipped: string;
  crafted: string;
  blocked: string;
  limited: string;
  allowed: string;
  roomFriend: string;
  roomBlocked: string;
  roomGame: string;
};
