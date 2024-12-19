import { doRedraw } from '../../Modules/GuiRedraw';
import { plainColors } from '../../Utilities/Color';
import { _Image } from '../../Utilities/Drawing';
import { hookFunction, HookPriority, ModuleCategory } from '../../Utilities/SDK';

export function hookDrawImageEx() {
  hookFunction(
    'DrawImageEx',
    HookPriority.Observe,
    (args: Parameters<typeof DrawImageEx>, next: (args: Parameters<typeof DrawImageEx>) => ReturnType<typeof DrawImageEx>) => {
      if (!doRedraw()) return next(args);
      if (typeof args[0] !== 'string') return next(args);
      if (!_Image.doDrawImage(args[0])) return next(args);

      const [Source, Canvas, X, Y] = args;
      let Options = args[4];
      Options ??= {};
      Options.HexColor = plainColors.accent;
      Options.FullAlpha = true;

      next([Source, Canvas, X, Y, Options]);
    },
    ModuleCategory.GuiRedraw
  );
}
