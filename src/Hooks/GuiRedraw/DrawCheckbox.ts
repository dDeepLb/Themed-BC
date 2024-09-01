import { doRedraw } from '../../Modules/GuiRedraw';
import { HookPriority, ModuleCategory, hookFunction } from '../../Utilities/SDK';

export function hookDrawCheckbox() {
  hookFunction(
    'DrawCheckbox',
    HookPriority.Observe,
    (args: Parameters<typeof DrawCheckbox>, next: (args: Parameters<typeof DrawCheckbox>) => ReturnType<typeof DrawCheckbox>) => {
      if (!doRedraw()) return next(args);

      const [Left, Top, Width, Height, Text, IsChecked, Disabled = false, TextColor = 'Black', CheckImage = 'Icons/Checked.png'] = args;

      DrawText(Text, Left + 100, Top + 33, TextColor, '');
      DrawButton(Left, Top, Width, Height, '', 'White', IsChecked ? CheckImage : '', null, Disabled);
    },
    ModuleCategory.GuiRedraw
  );
}
