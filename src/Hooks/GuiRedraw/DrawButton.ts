import { doRedraw } from '../../Modules/GuiRedraw';
import { _Color, plainColors } from '../../Utilities/Color';
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
            plainColors.element,
            plainColors.elementHover,
            plainColors.elementDisabled,
            plainColors.accent,
            plainColors.accentHover,
            plainColors.accentDisabled,
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
            _Color.darken(_Color.toDarkMode(color, plainColors.element), 20),
            _Color.darken(_Color.toDarkMode(color, plainColors.elementHover), 30),
            _Color.darken(_Color.toDarkMode(color, plainColors.element), 40),
            plainColors.accent,
            plainColors.accentHover,
            plainColors.accentDisabled,
            isHovering,
            isDisabled
          );
          break;
      }

      DrawTextFit(label, x + width / 2, y + height / 2 + 1, width - 4, plainColors.text);

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
