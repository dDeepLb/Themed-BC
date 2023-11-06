export class Color {
  static darken(hexColor: string, percentage: number): string {
    if (!hexColor) return;
    if (hexColor === "Default") return "#000000";

    // Remove the '#' symbol if it exists
    hexColor = hexColor.replace(/^#/, "");

    // Parse the hex color into RGB components
    const r = parseInt(hexColor.slice(0, 2), 16);
    const g = parseInt(hexColor.slice(2, 4), 16);
    const b = parseInt(hexColor.slice(4, 6), 16);

    // Calculate the new RGB values after darkening
    const newR = Math.max(0, r - Math.round((percentage / 100) * r));
    const newG = Math.max(0, g - Math.round((percentage / 100) * g));
    const newB = Math.max(0, b - Math.round((percentage / 100) * b));

    // Convert the new RGB values back to a hex string
    const newHexColor = `#${newR.toString(16).padStart(2, "0")}${newG.toString(16).padStart(2, "0")}${newB.toString(16).padStart(2, "0")}`;

    return newHexColor;
  }

  static lighten(hexColor: string, percentage: number): string {
    if (!hexColor) return;
    if (hexColor === "Default") return "#000000";

    // Remove the '#' symbol if it exists
    hexColor = hexColor.replace(/^#/, "");

    // Parse the hex color into RGB components
    const r = parseInt(hexColor.slice(0, 2), 16);
    const g = parseInt(hexColor.slice(2, 4), 16);
    const b = parseInt(hexColor.slice(4, 6), 16);

    // Calculate the new RGB values after lightening
    const newR = Math.min(255, r + Math.round((percentage / 100) * (255 - r)));
    const newG = Math.min(255, g + Math.round((percentage / 100) * (255 - g)));
    const newB = Math.min(255, b + Math.round((percentage / 100) * (255 - b)));

    // Convert the new RGB values back to a hex string
    const newHexColor = `#${newR.toString(16).padStart(2, "0")}${newG.toString(16).padStart(2, "0")}${newB.toString(16).padStart(2, "0")}`;

    return newHexColor;
  }
}
