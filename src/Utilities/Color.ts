// Define a type for RGB color
type RGBColor = {
  r: number;
  g: number;
  b: number;
};

export class _Color {
  static darken(hexColor: string, percentage: number): string {
    if (!hexColor) return;

    const color = _Color.extractFromRGB(_Color.getComputed(hexColor));

    // Calculate the new RGB values after darkening
    const newRgbColor: RGBColor = { r: 0, g: 0, b: 0 };
    newRgbColor.r = Math.max(0, color.r - Math.round((percentage / 100) * color.r));
    newRgbColor.g = Math.max(0, color.g - Math.round((percentage / 100) * color.g));
    newRgbColor.b = Math.max(0, color.b - Math.round((percentage / 100) * color.b));

    // Convert the new RGB values back to a hex string
    return _Color.rgbToHex(newRgbColor);
  }

  static lighten(hexColor: string, percentage: number): string {
    if (!hexColor) return;

    const color = _Color.extractFromRGB(_Color.getComputed(hexColor));

    // Calculate the new RGB values after lightening
    const newRgbColor: RGBColor = { r: 0, g: 0, b: 0 };
    newRgbColor.r = Math.min(255, color.r + Math.round((percentage / 100) * (255 - color.r)));
    newRgbColor.g = Math.min(255, color.g + Math.round((percentage / 100) * (255 - color.g)));
    newRgbColor.b = Math.min(255, color.b + Math.round((percentage / 100) * (255 - color.b)));

    // Convert the new RGB values back to a hex string
    return _Color.rgbToHex(newRgbColor);
  }

  static toDarkMode(colorHex: string, backgroundColorHex: string) {
    const lightColor = _Color.extractFromRGB(_Color.getComputed(colorHex));
    const backgroundColor = _Color.extractFromRGB(_Color.getComputed(backgroundColorHex));

    // Calculate the contrast ratio
    const contrastRatio = _Color.getContrastRatio(lightColor, backgroundColor);

    // If the contrast is too low, adjust the light color
    if (contrastRatio < 4.5) {
      lightColor.r = Math.min(lightColor.r + 30, 255);
      lightColor.g = Math.min(lightColor.g + 30, 255);
      lightColor.b = Math.min(lightColor.b + 30, 255);
    }

    return _Color.rgbToHex(lightColor);
  }

  static getContrastRatio(color1: RGBColor, color2: RGBColor) {
    const luminance1 = _Color.calculateLuminance(color1);
    const luminance2 = _Color.calculateLuminance(color2);

    return (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05);
  }

  static calculateLuminance(color: RGBColor) {
    const r = color.r / 255;
    const g = color.g / 255;
    const b = color.b / 255;

    const gammaCorrectedR = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
    const gammaCorrectedG = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
    const gammaCorrectedB = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);

    return 0.2126 * gammaCorrectedR + 0.7152 * gammaCorrectedG + 0.0722 * gammaCorrectedB;
  }

  static hexToRgb(hex: string): RGBColor {
    hex = hex.replace(/^#/, ""); // Remove the "#" symbol if it exists

    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return { r, g, b };
  }

  static rgbToHex(color: RGBColor): string {
    const { r, g, b } = color;
    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`;
  }

  static extractFromRGB(rgbString: string): RGBColor {
    // Regular expression to match the RGB string format
    const rgbRegex = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/;

    const match = rgbString.match(rgbRegex);

    if (match) {
      const [, tempR, tempG, tempB] = match;
      const r = parseInt(tempR, 10);
      const g = parseInt(tempG, 10);
      const b = parseInt(tempB, 10);
      return {
        r,
        g,
        b
      };
    } else {
      // Return null or handle invalid input as needed
      return null;
    }
  }

  static getComputed(color: string) {
    const div = document.createElement("div");
    div.style.color = color;
    document.body.appendChild(div);
    const computedColor = getComputedStyle(div).color;
    div.remove();

    const ret = computedColor;

    return ret;
  }
}
