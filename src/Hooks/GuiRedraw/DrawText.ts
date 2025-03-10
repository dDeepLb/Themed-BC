import Color from 'color';
import { doRedraw } from '../../Modules/GuiRedraw';
import { plainColors } from '../../Utilities/Color';
import { HookPriority, ModuleCategory, hookFunction } from '../../Utilities/SDK';

export function hookDrawText() {
  hookFunction(
    'DrawText',
    HookPriority.Observe,
    (args: Parameters<typeof DrawText>, next: (args: Parameters<typeof DrawText>) => ReturnType<typeof DrawText>) => {
      if (!doRedraw()) return next(args);
      if (!args[0]) return next(args);
      if (!args[3]) return next(args);
      const color = args[3];


      let parsedColor = color;
      try {
        parsedColor = Color(color.toLowerCase()).hex();
      } catch (e) {
        parsedColor = color;
      }

      if (parsedColor === '#000000') {
        args[3] = plainColors.text;
        args[4] = '';
      } else {
        args[4] = '';
      }

      next(args);
    },
    ModuleCategory.GuiRedraw
  );
}
