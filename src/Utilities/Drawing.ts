export const _Image = {
  doNotColorizeImageIncludes: [
    'Assets/Female3DCG/',
    'Backgrounds/',
    'Icons/Struggle/',
    'Screens/',
    'http'
  ],

  doColorizeImageIncludes: [
    PUBLIC_URL
  ],

  doNotColorizeImages: [
    'Icons/Accept.png',
    'Icons/Activity.png',
    'Icons/Arousal.png',
    'Icons/Audio.png',
    'Icons/BlindToggle2.png',
    'Icons/Cancel.png',
    'Icons/Cell.png',
    'Icons/Checked.png',
    'Icons/ClubCard.png',
    'Icons/Controller.png',
    'Icons/Crafting.png',
    'Icons/Exit.png',
    'Icons/Explore.png',
    'Icons/Gavel.png',
    'Icons/Gender.png',
    'Icons/Infiltration.png',
    'Icons/Lock.png',
    'Icons/LockMenu.png',
    'Icons/MagicSchool.png',
    'Icons/Online.png',
    'Icons/Platform.png',
    'Icons/Poker.png',
    'Icons/Search.png',
    'Icons/Security.png',
    'Icons/ServiceBell.png',
    'Icons/Title.png',
    'Icons/Use.png',
    'Icons/WinkNone.png',
    'Icons/Color.png',
    'Icons/ColorChange.png',
    'Icons/ColorChangeMulti.png',
    'Icons/Small/ColorBlocked.png',
    'Icons/Small/ColorChange.png',
    'Icons/Small/ColorChangeMulti.png',
    'Icons/Small/Naked.png',
    'Icons/Small/Use.png',
    'Icons/Small/YouTube.png',
  ],

  doColorizeImages: [
  ],

  getColorized: CommonMemoize((source: string, hexColor: string): ImageData | undefined => {
    if (typeof source != 'string') return;
    const img = DrawGetImage(source);

    try {
      if (!img.complete) return undefined;
      if (!img.naturalWidth) return undefined;

      const width = img.width;
      const height = img.height;

      ColorCanvas.canvas.width = width;
      ColorCanvas.canvas.height = height;
      ColorCanvas.globalCompositeOperation = 'copy';
      ColorCanvas.drawImage(img, 0, 0);

      const imageData = ColorCanvas.getImageData(0, 0, width, height);

      const colorizedData = _Image.colorize(imageData, hexColor);

      return colorizedData;
    } catch (e) {
      return undefined;
    }
  }),

  turnToBase64: CommonMemoize((imageData: ImageData) => {
    const canvas = document.createElement('canvas');
    canvas.width = imageData.width;
    canvas.height = imageData.height;
    const ctx = canvas.getContext('2d');
    ctx.putImageData(imageData, 0, 0);
    const base64Data = canvas.toDataURL('image/png');
    canvas.remove();

    return base64Data;
  }),

  colorize(imageData: ImageData, hexColor: string) {
    const data = imageData.data;

    const rgbColor = DrawHexToRGB(hexColor);

    for (let pixelData = 0, len = data.length; pixelData < len; pixelData += 4) {
      if (data[pixelData + 3] == 0) continue;
      const transparency = (data[pixelData] + data[pixelData + 1] + data[pixelData + 2]) / 383;
      data[pixelData + 0] = rgbColor.r * transparency;
      data[pixelData + 1] = rgbColor.g * transparency;
      data[pixelData + 2] = rgbColor.b * transparency;
    }

    return imageData;
  },

  doDrawImage(source: string) {
    if (!source) return false;
    if (typeof source !== 'string') return false;
    let doDraw = true;

    if (doDraw) {
      const includesFolder = _Image.doNotColorizeImageIncludes.some(prefix => source.startsWith(prefix));
      const includesFile = _Image.doNotColorizeImages.includes(source);
      if (includesFolder || includesFile) {
        doDraw = false;
      }
    }

    if (!doDraw) {
      const includesFolder = _Image.doColorizeImageIncludes.some(prefix => source.startsWith(prefix));
      const includesFile = _Image.doColorizeImages.includes(source);
      if (includesFolder || includesFile) {
        doDraw = true;
      }
    }

    return doDraw;
  },
};

export function drawRect(x: number, y: number, width: number, height: number, backgroundColor: string, borderColor: string) {
  DrawRect(x, y, width, height, backgroundColor);
  DrawEmptyRect(x, y, width, height, borderColor, 2);
}

export function drawButtonRect(
  x: number,
  y: number,
  width: number,
  height: number,
  backgroundColor: string,
  backgroundHoverColor: string,
  backgroundDisabledColor: string,
  borderColor: string,
  borderHoverColor: string,
  borderDisabledColor: string,
  isHovering: boolean,
  disabled: boolean
) {
  if (!isHovering && !disabled) drawRect(x, y, width, height, backgroundColor, borderColor);
  else if (isHovering && !disabled) drawRect(x, y, width, height, backgroundHoverColor, borderHoverColor);
  else if (disabled) drawRect(x, y, width, height, backgroundDisabledColor, borderDisabledColor);
}
