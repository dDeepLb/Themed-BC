let cachedImages = {};

export class _Image {
  static doNotDrawImageFolders = ["Assets/Female3DCG/", "Backgrounds/"];

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
    "Icons/Small/ColorBlocked.png",
    "Icons/Small/ColorChange.png",
    "Icons/Small/ColorChangeMulti.png",
    "Icons/Small/Naked.png",
    "Icons/Small/Use.png",
    "data:image/png;base64,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"
  ];

  static drawColorized(source: string, x: number, y: number, hexColor: string, { newWidth = null, newHeight = null }) {
    const img = DrawGetImage(source);

    // Check if the colorized image is already cached
    if (!!_Image.getCache(source)) {
      _Image.drawCached(source, x, y, img, { newWidth, newHeight });
      return true;
    }

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
