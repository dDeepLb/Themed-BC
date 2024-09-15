import { doRedraw } from '../../Modules/GuiRedraw';
import { _Color, colors } from '../../Utilities/Color';
import { drawButtonRect } from '../../Utilities/Drawing';
import { HookPriority, ModuleCategory, hookFunction } from '../../Utilities/SDK';

export function hookDrawButton() {
  hookFunction(
    'DrawButton',
    HookPriority.Observe,
    (args: Parameters<typeof DrawButton>, next: (args: Parameters<typeof DrawButton>) => ReturnType<typeof DrawButton>) => {
      if (!doRedraw()) return next(args);

      const [x, y, width, height, label, color, image, hoveringText, isDisabled] = args;
      const isHovering = MouseHovering(x, y, width, height);

      ControllerAddActiveArea(x, y);

      switch (_Color.getHexComputed(color).toLowerCase()) {
        case '#ffffff':
        case '#dddddd':
        case '#eeeeee':
          drawButtonRect(
            x,
            y,
            width,
            height,
            colors.elementBackground,
            colors.elementBackgroundHover,
            colors.elementBackgroundDisabled,
            colors.elementBorder,
            colors.elementBorderHover,
            colors.elementBorder,
            isHovering,
            isDisabled
          );
          break;

        default:
          drawButtonRect(
            x,
            y,
            width,
            height,
            _Color.darken(_Color.toDarkMode(color, colors.elementBackground), 20),
            _Color.darken(_Color.toDarkMode(color, colors.elementBackgroundHover), 30),
            _Color.darken(_Color.toDarkMode(color, colors.elementBackground), 40),
            colors.elementBorder,
            colors.elementBorderHover,
            colors.elementBorder,
            isHovering,
            isDisabled
          );
          break;
      }

      DrawTextFit(label, x + width / 2, y + height / 2 + 1, width - 4, colors.text);

      if (image != null && image != '') {
        DrawImage(image, x + 2, y + 2);
      }

      if (hoveringText != null && isHovering) {
        DrawHoverElements.push(() => DrawButtonHover(x, y, width, height, hoveringText));
      }
    },
    ModuleCategory.GuiRedraw
  );
}
