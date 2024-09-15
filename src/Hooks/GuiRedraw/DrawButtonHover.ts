import { doRedraw } from '../../Modules/GuiRedraw';
import { plainColors } from '../../Utilities/Color';
import { drawRect } from '../../Utilities/Drawing';
import { hookFunction, HookPriority, ModuleCategory } from '../../Utilities/SDK';

export function hookDrawButtonHover() {
  hookFunction(
    'DrawButtonHover',
    HookPriority.Observe,
    (args: Parameters<typeof DrawButtonHover>, next: (args: Parameters<typeof DrawButtonHover>) => ReturnType<typeof DrawButtonHover>) => {
      if (!doRedraw()) return next(args);

      const [, , Width, Height, HoveringText] = args;
      let [Left, Top] = args;

      if (HoveringText == null || HoveringText == '') return next(args);

      Left = MouseX > 1000 ? Left - 475 : Left + Width + 25;
      Top = Top + (Height - 65) / 2;
      MainCanvas.save();
      MainCanvas.textAlign = 'center';
      drawRect(Left, Top, 450, 65, plainColors.elementHint, plainColors.accent);
      DrawTextFit(HoveringText, Left + 225, Top + 33, 444, 'Black');
      MainCanvas.restore();
    },
    ModuleCategory.GuiRedraw
  );
}
