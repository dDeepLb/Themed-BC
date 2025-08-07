import Color from 'color';
import { BaseColorsModel, SpecialColorsModel } from '../Models/Colors';

export const plainColors: BaseColorsModel = {
  main: '',
  element: '',
  elementHover: '',
  elementDisabled: '',
  elementHint: '',
  text: '',
  textShadow: '',
  accent: '',
  accentHover: '',
  accentDisabled: '',
};

export const specialColors = {
  equipped: ['', ''],
  crafted: ['', ''],
  blocked: ['', ''],
  limited: ['', ''],
  allowed: ['', ''],
  roomFriend: ['', ''],
  roomBlocked: ['', ''],
  roomGame: ['', ''],
};

export enum ColorType {
  Base = '~',
  Hover = '-',
  Disabled = '=',
  Active = '+',
  NoDraw = '!',
  Custom = '%',
  FromButton = '@',
}

export const _Color = {
  getComputed: CommonMemoize((color: string): string => {
    const div = document.createElement('div');
    div.style.color = color;
    document.body.appendChild(div);
    const computedColor = getComputedStyle(div).color;
    div.remove();

    return computedColor;
  }),

  getHexComputed: CommonMemoize((color: string): string => {
    return Color(_Color.getComputed(color)).hex();
  }),

  isValidHex(color: string) {
    return /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(color);
  },

  composeRoot() {
    const colorSettings = Player.Themed.ColorsModule;
    const globalSettings = Player.Themed.GlobalModule;

    Object.keys(colorSettings.special).forEach((key) => {
      const typedKey = key as keyof SpecialColorsModel;
      const clr = Color(colorSettings.special[typedKey]);
      specialColors[typedKey] = [clr.hex(), clr.lighten(0.2).hex()];
    });

    if (globalSettings.doUseAdvancedColoring) {
      Object.keys(colorSettings.base).forEach(key => {
        const typedKey = key as keyof BaseColorsModel;
        plainColors[typedKey] = colorSettings.base[typedKey];
      });
    } else {
      const primaryColor = _Color.getHexComputed(colorSettings.base.main);
      const elementColor = Color(primaryColor).lighten(0.2).hex();
      const accentColor = _Color.getHexComputed(colorSettings.base.accent);
      const textColor = _Color.getHexComputed(colorSettings.base.text);

      plainColors.main = primaryColor;
      plainColors.element = elementColor;
      plainColors.elementHover = Color(elementColor).lighten(0.2).hex();
      plainColors.elementDisabled = Color(elementColor).darken(0.2).hex();
      plainColors.elementHint = Color(elementColor).lighten(0.2).hex();
      plainColors.text = textColor;
      plainColors.accent = accentColor;
      plainColors.accentHover = Color(accentColor).lighten(0.2).hex();
      plainColors.accentDisabled = Color(accentColor).darken(0.2).hex();
    }
    plainColors.textShadow = _Color.getHexComputed('rgba(0,0,0,0.5)');
  },
};
