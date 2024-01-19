import { Colors } from '../Models/Colors';

// Define a type for RGB color
type RGBAColor = {
  r: number;
  g: number;
  b: number;
  a?: number;
};

let cachedColors = {};

export const colors: Colors = {
  mainBackground: '',
  elementBackground: '',
  elementBackgroundHover: '',
  elementBackgroundDisabled: '',
  elementHoverHint: '',
  elementBorder: '',
  elementBorderHover: '',
  text: '',
  icon: ''
};

export class _Color {
  static darken(hexColor: string, percentage: number): string {
    if (!hexColor) return;

    // Return color if it's cached
    let cacheColor = _Color.getCache(`darker${hexColor}${percentage}`);
    if (cacheColor) return cacheColor;

    const color = _Color.extractFromRGBA(_Color.getComputed(hexColor));

    // Calculate the new RGB values after darkening
    const newRgbColor: RGBAColor = { r: 0, g: 0, b: 0 };
    newRgbColor.r = Math.max(0, color.r - Math.round((percentage / 100) * color.r));
    newRgbColor.g = Math.max(0, color.g - Math.round((percentage / 100) * color.g));
    newRgbColor.b = Math.max(0, color.b - Math.round((percentage / 100) * color.b));
    newRgbColor.a = color.a;

    // Convert the new RGB values back to a hex string and cache it
    const ret = _Color.rgbaToHex(newRgbColor);
    _Color.setCache(`darker${hexColor}${percentage}`, ret);

    return ret;
  }

  static lighten(hexColor: string, percentage: number): string {
    if (!hexColor) return;

    // Return color if it's cached
    let cacheColor = _Color.getCache(`lighter${hexColor}${percentage}`);
    if (cacheColor) return cacheColor;

    const color = _Color.extractFromRGBA(_Color.getComputed(hexColor));

    // Calculate the new RGB values after lightening
    const newRgbColor: RGBAColor = { r: 0, g: 0, b: 0 };
    newRgbColor.r = Math.min(255, color.r + Math.round((percentage / 100) * (255 - color.r)));
    newRgbColor.g = Math.min(255, color.g + Math.round((percentage / 100) * (255 - color.g)));
    newRgbColor.b = Math.min(255, color.b + Math.round((percentage / 100) * (255 - color.b)));
    newRgbColor.a = color.a;

    // Convert the new RGB values back to a hex string and cache it
    const ret = _Color.rgbaToHex(newRgbColor);
    _Color.setCache(`lighter${hexColor}${percentage}`, ret);

    return ret;
  }

  static toDarkMode(colorHex: string, backgroundColorHex: string) {
    // Return color if it's cached
    let cacheColor = _Color.getCache(`darkMode${colorHex}${backgroundColorHex}`);
    if (cacheColor) return cacheColor;

    const lightColor = _Color.extractFromRGBA(_Color.getComputed(colorHex));
    const backgroundColor = _Color.extractFromRGBA(_Color.getComputed(backgroundColorHex));

    // Calculate the contrast ratio
    const contrastRatio = _Color.getContrastRatio(lightColor, backgroundColor);

    // If the contrast is too low, adjust the light color
    if (contrastRatio < 4.5) {
      lightColor.r = Math.min(lightColor.r + 30, 255);
      lightColor.g = Math.min(lightColor.g + 30, 255);
      lightColor.b = Math.min(lightColor.b + 30, 255);
      lightColor.a = lightColor.a;
    }

    // Convert the new RGB values back to a hex string and cache it
    const ret = _Color.rgbaToHex(lightColor);
    _Color.setCache(`darkMode${colorHex}${backgroundColorHex}`, ret);

    return ret;
  }

  static getContrastRatio(color1: RGBAColor, color2: RGBAColor) {
    const luminance1 = _Color.calculateLuminance(color1);
    const luminance2 = _Color.calculateLuminance(color2);

    return (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05);
  }

  static calculateLuminance(color: RGBAColor) {
    const r = color.r / 255;
    const g = color.g / 255;
    const b = color.b / 255;

    const gammaCorrectedR = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
    const gammaCorrectedG = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
    const gammaCorrectedB = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);

    return 0.2126 * gammaCorrectedR + 0.7152 * gammaCorrectedG + 0.0722 * gammaCorrectedB;
  }

  static hexToRgba(hex: string): RGBAColor {
    hex = hex.replace(/^#/, ''); // Remove the "#" symbol if it exists

    if (hex.length === 6) {
      // If no alpha value exists, default alpha to fully opaque (1.0 or 255 in decimal)
      return {
        r: parseInt(hex.slice(0, 2), 16),
        g: parseInt(hex.slice(2, 4), 16),
        b: parseInt(hex.slice(4, 6), 16),
        a: 1.0 // Fully opaque alpha
      };
    } else if (hex.length === 8) {
      // If alpha value exists
      return {
        r: parseInt(hex.slice(0, 2), 16),
        g: parseInt(hex.slice(2, 4), 16),
        b: parseInt(hex.slice(4, 6), 16),
        a: parseInt(hex.slice(6, 8), 16) / 255 // Convert alpha to range between 0 and 1
      };
    }

    // If the input format is invalid, return black with full opacity
    return { r: 0, g: 0, b: 0, a: 1.0 };
  }

  static rgbaToHex(color: RGBAColor): string {
    const { r, g, b, a } = color;

    if (a !== undefined && a !== 1) {
      const alphaHex = Math.round(a * 255)
        .toString(16)
        .toUpperCase()
        .padStart(2, '0');
      return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}${alphaHex}`;
    }

    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`;
  }

  static extractFromRGBA(rgbaString: string) {
    const rgbaRegex = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/;
    const match = rgbaString.match(rgbaRegex);

    if (match) {
      const [, tempR, tempG, tempB, tempA] = match;
      const r = parseInt(tempR, 10);
      const g = parseInt(tempG, 10);
      const b = parseInt(tempB, 10);
      const a = tempA ? parseFloat(tempA) : 1.0; // If alpha is not provided, default to 1.0
      return {
        r,
        g,
        b,
        a
      };
    } else {
      return null;
    }
  }

  static getComputed(color: string): string {
    let cachedColor = _Color.getCache(`comp${color}`);
    if (cachedColor) return cachedColor;

    const div = document.createElement('div');
    div.style.color = color;
    document.body.appendChild(div);
    const computedColor = getComputedStyle(div).color;
    div.remove();

    const ret = computedColor;

    _Color.setCache(`comp${color}`, ret);

    return ret;
  }

  static getHexComputed(color: string) {
    color = _Color.getComputed(color);
    const RGBA = _Color.extractFromRGBA(color);
    const ret = _Color.rgbaToHex(RGBA);

    return ret;
  }

  static composeRoot() {
    const data = Player.Themed.ColorsModule;

    const primaryColor = _Color.getHexComputed(data.primaryColor);
    const accentColor = _Color.getHexComputed(data.accentColor);
    const textColor = _Color.getHexComputed(data.textColor);

    colors.mainBackground = primaryColor;
    colors.elementBackground = _Color.lighten(primaryColor, 10);
    colors.elementBackgroundDisabled = primaryColor;
    colors.elementBackgroundHover = accentColor;
    colors.elementHoverHint = _Color.lighten(colors.elementBackground, 20);
    colors.elementBorder = accentColor;
    colors.elementBorderHover = _Color.lighten(accentColor, 20);
    colors.text = textColor;
    colors.icon = accentColor;
  }

  static setCache(key: string, value: string) {
    cachedColors[key] = value;
  }

  static getCache(key: string) {
    return cachedColors[key];
  }

  static clearCache() {
    cachedColors = {};
  }
}
