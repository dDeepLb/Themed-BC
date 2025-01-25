import Color from 'color';
import { doRedraw } from '../../Modules/GuiRedraw';
import { _Color, plainColors, specialColors } from '../../Utilities/Color';
import { HookPriority, ModuleCategory, hookFunction } from '../../Utilities/SDK';

export function hookDrawRect() {
  hookFunction(
    'DrawRect',
    HookPriority.Observe,
    (args: Parameters<typeof DrawRect>, next: (args: Parameters<typeof DrawRect>) => ReturnType<typeof DrawRect>) => {
      if (!doRedraw()) return next(args);

      const [Left, Top, Width, Height, color] = args;

      const drawRect = (color: string) => {
        next([Left, Top, Width, Height, color]);
      };

      const hover = MouseIn(Left, Top, Width, Height) ? 1 : 0;

      if (color?.startsWith('%')) {
        switch (color.substring(1)) {
          case 'disabled':
            drawRect(plainColors.elementDisabled);
            break;

          case 'hover':
            drawRect(plainColors.elementHover);
            break;

          case 'background':
            drawRect(plainColors.element);
            break;

          case 'accent':
            drawRect(plainColors.accent);
            break;

          case 'friendhint':
            drawRect(plainColors.elementHint);
            break;

          case 'searchFullBlock':
            drawRect(Color(specialColors.blocked[hover]).mix(Color(specialColors.roomBlocked[hover]), 0.5).hex());
            break;

          case 'searchBlock':
            drawRect(specialColors.roomBlocked[hover]);
            break;

          case 'searchFullFriend':
            drawRect(Color(specialColors.roomFriend[hover]).mix(Color(plainColors.elementDisabled), 0.5).hex());
            break;

          case 'searchFriend':
            drawRect(specialColors.roomFriend[hover]);
            break;

          case 'searchFull':
            drawRect(plainColors.elementDisabled);
            break;

          case 'searchGame':
            drawRect(specialColors.roomGame[hover]);
            break;

          case 'allowed':
            drawRect(specialColors.allowed[hover]);
            break;

          case 'equipped':
            drawRect(specialColors.equipped[hover]);
            break;

          case 'crafted':
            drawRect(specialColors.crafted[hover]);
            break;

          case 'limited':
            drawRect(specialColors.limited[hover]);
            break;

          case 'blocked':
            drawRect(specialColors.blocked[hover]);
            break;

          default:
            next(args);
            break;
        }
      } else {
        switch (_Color.getHexComputed(color).toLowerCase()) {
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
