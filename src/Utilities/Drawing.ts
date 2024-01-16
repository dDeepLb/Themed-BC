let cachedImages = {};

export class _Image {
  static doNotDrawImageFolders = [
    "Assets/Female3DCG/",
    "Backgrounds/",
    "Icons/Struggle/",
    "Screens/",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyEAYAAABOr1TyAAABb2lDQ1BpY2MAACiRdZG9S0JRGMZ/", // FBC's "FBC" overlay icon
    "http" // Fix bug with recoloring of custom bgs
  ];

  static doNotDrawImages = [
    "Icons/Accept.png",
    "Icons/Activity.png",
    "Icons/Arousal.png",
    "Icons/Audio.png",
    "Icons/BlindToggle2.png",
    "Icons/Cancel.png",
    "Icons/Cell.png",
    "Icons/Checked.png",
    "Icons/ClubCard.png",
    "Icons/Controller.png",
    "Icons/Crafting.png",
    "Icons/Exit.png",
    "Icons/Explore.png",
    "Icons/Gavel.png",
    "Icons/Gender.png",
    "Icons/Infiltration.png",
    "Icons/Lock.png",
    "Icons/LockMenu.png",
    "Icons/MagicSchool.png",
    "Icons/Online.png",
    "Icons/Platform.png",
    "Icons/Poker.png",
    "Icons/Search.png",
    "Icons/Security.png",
    "Icons/ServiceBell.png",
    "Icons/Title.png",
    "Icons/Use.png",
    "Icons/WinkNone.png",
    "Icons/Color.png",
    "Icons/ColorChange.png",
    "Icons/ColorChangeMulti.png",
    "Icons/Small/ColorBlocked.png",
    "Icons/Small/ColorChange.png",
    "Icons/Small/ColorChangeMulti.png",
    "Icons/Small/Naked.png",
    "Icons/Small/Use.png",
    "Icons/Small/YouTube.png",
    "Assets/Female3DCG/ItemMisc/Preview/Best Friend Padlock.png",
    "Assets/Female3DCG/ItemMisc/Preview/Best Friend Timer Padlock.png"
  ];

  static drawColorized(source: string, x: number, y: number, hexColor: string, { newWidth = null, newHeight = null }) {
    const img = DrawGetImage(source);

    // Check if the colorized image is already cached
    if (!!_Image.getCache(source)) {
      _Image.drawCached(source, x, y, img, { newWidth, newHeight });
      return true;
    }

    try {
      // If not cached, load the original image
      // Make sure that the starting image is loaded
      if (!img.complete) return false;
      if (!img.naturalWidth) return true;

      // Continue with the colorization process
      const width = img.width;
      const height = img.height;

      // Prepare a canvas to draw the colorized image
      ColorCanvas.canvas.width = width;
      ColorCanvas.canvas.height = height;
      ColorCanvas.globalCompositeOperation = "copy";
      ColorCanvas.drawImage(img, 0, 0);

      const imageData = ColorCanvas.getImageData(0, 0, width, height);

      // Colorize the plain image
      _Image.colorize(imageData, hexColor);

      // Cache the colorized image
      _Image.setCache(source, imageData);

      // Draw the colorized image
      _Image.drawCached(source, x, y, img, { newWidth, newHeight });

      return true;
    } catch (e) {
      return false;
    }
  }

  static colorize(imageData: ImageData, color: string) {
    const data = imageData.data;

    // Get the RGB color used to transform
    const rgbColor = DrawHexToRGB(color);

    // We transform each non-transparent pixel based on the RGB value
    for (let p = 0, len = data.length; p < len; p += 4) {
      if (data[p + 3] == 0) continue;
      const trans = (data[p] + data[p + 1] + data[p + 2]) / 383;
      data[p + 0] = rgbColor.r * trans;
      data[p + 1] = rgbColor.g * trans;
      data[p + 2] = rgbColor.b * trans;
    }
  }

  static drawCached(source: string, x: number, y: number, img: HTMLImageElement, { newWidth = null, newHeight = null }) {
    const colorizedImage = cachedImages[source];
    const sizeChanged = newWidth != null || newHeight != null;

    const width = img.width;
    const height = img.height;

    ColorCanvas.canvas.width = width;
    ColorCanvas.canvas.height = height;

    ColorCanvas.putImageData(colorizedImage, 0, 0);

    MainCanvas.save();
    MainCanvas.globalAlpha = 1;
    MainCanvas.globalCompositeOperation = "source-over";
    if (!sizeChanged) MainCanvas.drawImage(ColorCanvas.canvas, 0, 0, img.width, img.height, x, y, img.width, img.height);
    else MainCanvas.drawImage(ColorCanvas.canvas, 0, 0, img.width, img.height, x, y, newWidth, newHeight);
    MainCanvas.restore();
  }

  static doDrawImage(source: string) {
    let skipDrawing = false;

    // Check if the image is in any excluded folder
    for (const folderPrefix of _Image.doNotDrawImageFolders) {
      if (typeof source !== "string") break;
      if (source.startsWith(folderPrefix)) {
        skipDrawing = true; // Do not draw if it starts with any excluded path
        break;
      }
    }

    // Check if the image is in the list of excluded images
    if (!skipDrawing && _Image.doNotDrawImages.includes(source)) {
      skipDrawing = true;
    }

    return !skipDrawing;
  }

  static setCache(key: string, data: ImageData) {
    cachedImages[key] = data;
  }

  static getCache(key: string) {
    return cachedImages[key];
  }

  static clearCache() {
    cachedImages = {};
  }
}

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
