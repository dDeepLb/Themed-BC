import { BaseSettingsModel } from './Global';

export type ColorsSettingsModel = BaseSettingsModel &  {
  base: BaseColorsModel;
  special: SpecialColorsModel;
};

export type BaseColorsModel = {
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
