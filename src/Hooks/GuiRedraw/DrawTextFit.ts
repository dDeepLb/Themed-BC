import Color from 'color';
import { doRedraw } from '../../Modules/GuiRedraw';
import { plainColors } from '../../Utilities/Color';
import { HookPriority, ModuleCategory, hookFunction } from '../../Utilities/SDK';

export function hookDrawTextFit() {
  hookFunction(
    'DrawTextFit',
    HookPriority.Observe,
    (args: Parameters<typeof DrawTextFit>, next: (args: Parameters<typeof DrawTextFit>) => ReturnType<typeof DrawTextFit>) => {
      if (!doRedraw()) return next(args);
      if (!args[0]) return next(args);
      if (!args[4]) return next(args);

      let parsedColor = args[4];
      try {
        parsedColor = Color(args[4].toLowerCase()).hex();
      } catch (e) {
        parsedColor = args[4];
      }

      if (parsedColor === '#000000') {
        args[4] = plainColors.text;
      }

      return next(args);
    },
    ModuleCategory.GuiRedraw
  );
}
