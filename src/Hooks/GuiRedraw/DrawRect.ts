import { doRedraw } from '../../Modules/GuiRedraw';
import { _Color, plainColors } from '../../Utilities/Color';
import { HookPriority, ModuleCategory, hookFunction } from '../../Utilities/SDK';

export function hookDrawRect() {
  hookFunction(
    'DrawRect',
    HookPriority.Observe,
    (args: Parameters<typeof DrawRect>, next: (args: Parameters<typeof DrawRect>) => ReturnType<typeof DrawRect>) => {
      if (!doRedraw()) return next(args);

      const [Left, Top, Width, Height, Color] = args;

      const drawRect = (color: string) => {
        MainCanvas.beginPath();
        MainCanvas.fillStyle = color;
        MainCanvas.fillRect(Left, Top, Width, Height);
        MainCanvas.fill();
      };

      if (Color?.startsWith('%')) {
        switch (Color.substring(1).toLowerCase()) {
          case 'disabled':
            drawRect(plainColors.elementDisabled);
            break;

          case 'hover':
            drawRect(plainColors.elementHover);
            break;

          case 'background':
            drawRect(plainColors.element);
            break;

          case 'friendhint':
            drawRect(plainColors.elementHint);
            break;

          default:
            next(args);
            break;
        }
      } else {
        switch (_Color.getHexComputed(Color).toLowerCase()) {
          case '#eeeeee':
          case '#dddddd':
          case '#cccccc':
          case '#ffffff':
          case '#ffff88':
          case '#ffffff88':
          case '#ffffffcc':
          case '#d7f6e9': // LSCG Version Tooltip
            drawRect(plainColors.element);
            break;

          default:
            next(args);
            break;
        }
      }
    },
    ModuleCategory.GuiRedraw
  );
}
