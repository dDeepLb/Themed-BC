import { doRedraw } from '../../Modules/GuiRedraw';
import { colors } from '../../Utilities/Color';
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

      const [Source, Canvas, X, Y, Options] = args;
      const color = args[4].HexColor ?? colors.icon;
      const colorizedImage = _Image.getColorized(Source, color);

      if (!colorizedImage) return next(args);

      const imageSource = _Image.turnToBase64(colorizedImage, `${Source}${args[4].HexColor}`);
      next([imageSource ?? Source, Canvas, X, Y, Options]);
    },
    ModuleCategory.GuiRedraw
  );
}
