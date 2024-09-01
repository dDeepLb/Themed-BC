import { doRedraw } from '../../Modules/GuiRedraw';
import { _Color, colors, isBlack } from '../../Utilities/Color';
import { HookPriority, ModuleCategory, hookFunction } from '../../Utilities/SDK';

export function hookDrawTextFit() {
  hookFunction(
    'DrawTextFit',
    HookPriority.Observe,
    (args: Parameters<typeof DrawTextFit>, next: (args: Parameters<typeof DrawTextFit>) => ReturnType<typeof DrawTextFit>) => {
      if (!doRedraw()) return next(args);

      if (isBlack(args[4])) {
        args[4] = colors.text;
      } else {
        args[4] = _Color.toDarkMode(args[4], colors.mainBackground);
      }

      return next(args);
    },
    ModuleCategory.GuiRedraw
  );
}
