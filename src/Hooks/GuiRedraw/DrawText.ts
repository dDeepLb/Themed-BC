import { doRedraw } from '../../Modules/GuiRedraw';
import { _Color, colors, isBlack } from '../../Utilities/Color';
import { HookPriority, ModuleCategory, hookFunction } from '../../Utilities/SDK';

export function hookDrawText() {
  hookFunction(
    'DrawText',
    HookPriority.Observe,
    (args: Parameters<typeof DrawText>, next: (args: Parameters<typeof DrawText>) => ReturnType<typeof DrawText>) => {
      if (!doRedraw()) return next(args);

      if (isBlack(args[3])) {
        args[3] = colors.text;
        args[4] = '';
      } else {
        args[3] = _Color.toDarkMode(args[3], colors.mainBackground);
        args[4] = '';
      }

      next(args);
    },
    ModuleCategory.GuiRedraw
  );
}
