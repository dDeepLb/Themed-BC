import Color from 'color';
import { doRedraw } from '../../Modules/GuiRedraw';
import { _Color, plainColors } from '../../Utilities/Color';
import { HookPriority, ModuleCategory, hookFunction } from '../../Utilities/SDK';

export function hookDrawTextFit() {
  hookFunction(
    'DrawTextFit',
    HookPriority.Observe,
    (args: Parameters<typeof DrawTextFit>, next: (args: Parameters<typeof DrawTextFit>) => ReturnType<typeof DrawTextFit>) => {
      if (!doRedraw()) return next(args);

      if (Color(args[4].toLowerCase()).isDark()) {
        args[4] = plainColors.text;
      } else {
        args[4] = _Color.toDarkMode(args[4], plainColors.main);
      }

      return next(args);
    },
    ModuleCategory.GuiRedraw
  );
}
