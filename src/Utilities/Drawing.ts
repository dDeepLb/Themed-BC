let cachedImages = {};

export function drawImageColorize(source: string, x: number, y: number, hexColor: string) {
  // Check if the colorized image is already cached
  if (cachedImages[source]) {
    drawCachedImage(source, x, y);
    return true;
  }

  // If not cached, load the original image
  const Img = DrawGetImage(source);

  // Make sure that the starting image is loaded
  if (!Img.complete) return false;
  if (!Img.naturalWidth) return true;

  // Continue with the colorization process
  const width = Img.width;
  const height = Img.height;

  // Prepares a canvas to draw the colorized image
  ColorCanvas.canvas.width = width;
  ColorCanvas.canvas.height = height;
  ColorCanvas.globalCompositeOperation = "copy";
  ColorCanvas.drawImage(Img, 0, 0);

  const imageData = ColorCanvas.getImageData(0, 0, width, height);
  const data = imageData.data;

  // Get the RGB color used to transform
  const rgbColor = DrawHexToRGB(hexColor);

  // We transform each non-transparent pixel based on the RGB value
  for (let p = 0, len = data.length; p < len; p += 4) {
    if (data[p + 3] == 0) continue;
    const trans = (data[p] + data[p + 1] + data[p + 2]) / 383;
    data[p + 0] = rgbColor.r * trans;
    data[p + 1] = rgbColor.g * trans;
    data[p + 2] = rgbColor.b * trans;
  }

  // Replace the source image with the modified canvas
  ColorCanvas.putImageData(imageData, 0, 0);

  // Cache the colorized image
  cachedImages[source] = ColorCanvas.canvas;

  // Draw the colorized image
  drawCachedImage(source, x, y);

  return true;
}

function drawCachedImage(source: string, x: number, y: number) {
  const colorizedImage = cachedImages[source];

  MainCanvas.save();
  MainCanvas.globalAlpha = 1;
  MainCanvas.globalCompositeOperation = "source-over";
  MainCanvas.drawImage(colorizedImage, x, y);
  MainCanvas.restore();
}
