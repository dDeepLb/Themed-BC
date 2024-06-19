import { doRedraw } from '../../Modules/GuiRedraw';
import { colors } from '../../Utilities/Color';
import { hookFunction, HookPriority, ModuleCategory } from '../../Utilities/SDK';

export function hookDrawPreviewBox() {
  hookFunction(
    'DrawPreviewBox',
    HookPriority.Observe,
    (args: Parameters<typeof DrawPreviewBox>, next: (args: Parameters<typeof DrawPreviewBox>) => ReturnType<typeof DrawPreviewBox>) => {
      if (!doRedraw()) return next(args);

      const [X, Y, Path, Description, Options] = args;

      const { Vibrating, Disabled, Icons } = Options || {};
      let { Background, Foreground, Border, Hover, Width, Height } = Options || {};
      Width = Width || DrawAssetPreviewDefaultWidth;
      Height = Height || DrawAssetPreviewDefaultHeight;

      const Padding = 2;
      const TextGutter = Description ? 44 : 0;

      Foreground = colors.text;
      Border = true;
      Hover = MouseHovering(X, Y, Width, Height);

      let ImageX = X + Padding;
      let ImageY = Y + Padding;
      let ImageWidth = Width;
      let ImageHeight = Height - TextGutter;

      if (ImageWidth > ImageHeight) {
        const Ratio = ImageHeight / ImageWidth;
        ImageWidth *= Ratio;
        ImageX += (Width - ImageWidth) / 2;
      } else if (ImageWidth < ImageHeight) {
        const Ratio = ImageWidth / ImageHeight;
        ImageHeight *= Ratio;
        ImageY += (Height - ImageHeight - TextGutter) / 2;
      }

      ImageWidth -= 2 * Padding;
      ImageHeight -= 2 * Padding;

      if (Vibrating) {
        ImageX += 1 + Math.floor(Math.random() * 3);
        ImageY += 1 + Math.floor(Math.random() * 3);
      }

      DrawRect(X, Y, Width, Height, Background);
      ControllerAddActiveArea(X, Y);
      if (Border) DrawEmptyRect(X, Y, Width, Height, Hover ? colors.elementBorderHover : colors.elementBorder);
      if (Path !== '') DrawImageResize(Path, ImageX, ImageY, ImageWidth, ImageHeight);
      DrawPreviewIcons(Icons, X, Y);
      if (Description) DrawTextFit(Description, X + Width / 2, Y + Height - 25, Width - 2 * Padding, Foreground);
    },
    ModuleCategory.GuiRedraw
  );
}
