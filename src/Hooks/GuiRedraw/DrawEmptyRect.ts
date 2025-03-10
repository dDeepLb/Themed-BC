import { doRedraw } from '../../Modules/GuiRedraw';
import { _Color, ColorType, plainColors } from '../../Utilities/Color';
import { HookPriority, ModuleCategory, hookFunction } from '../../Utilities/SDK';

export function hookDrawEmptyRect() {
  hookFunction(
    'DrawEmptyRect',
    HookPriority.Observe,
    (args: Parameters<typeof DrawEmptyRect>, next: (args: Parameters<typeof DrawEmptyRect>) => ReturnType<typeof DrawEmptyRect>) => {
      if (!doRedraw()) return next(args);

      const [Left, Top, Width, Height, Color, Thickness] = args;

      const drawEmptyRect = (color: string) => {
        MainCanvas.beginPath();
        MainCanvas.rect(Left, Top, Width, Height);
        MainCanvas.lineWidth = Thickness;
        MainCanvas.strokeStyle = color;
        MainCanvas.stroke();
      };

      if (Color?.startsWith(ColorType.Custom)) {
        switch (Color.substring(1).toLowerCase()) {
          case 'border':
            drawEmptyRect(plainColors.accent);
            break;

          case 'hover':
            drawEmptyRect(plainColors.accentHover);
            break;

          case 'disabled':
            drawEmptyRect(plainColors.accentDisabled);
            break;

          default:
            next(args);
            break;
        }
      } else {
        switch (_Color.getHexComputed(Color).toLowerCase()) {
          case '#ffffff':
          case '#dddddd':
          case '#000000':
            drawEmptyRect(plainColors.accent);
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
