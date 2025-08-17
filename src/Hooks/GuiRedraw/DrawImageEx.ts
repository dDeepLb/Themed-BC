import { HookPriority, sdk } from 'bc-deeplib/deeplib';
import { doRedraw } from '../../Modules/GuiRedraw';
import { plainColors } from '../../Utilities/Color';
import { _Image } from '../../Utilities/Drawing';
import { ModuleCategory } from '../../Utilities/ModDefinition';

export function hookDrawImageEx() {
  sdk.hookFunction(
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

      return next([Source, Canvas, X, Y, Options]);
    },
    ModuleCategory.GuiRedraw
  );
}
