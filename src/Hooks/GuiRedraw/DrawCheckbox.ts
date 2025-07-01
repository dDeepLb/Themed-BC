import { HookPriority } from 'bc-deeplib/deeplib';
import { doRedraw } from '../../Modules/GuiRedraw';
import { sdk } from '../../Themed';
import { ModuleCategory } from '../../Utilities/ModDefinition';

export function hookDrawCheckbox() {
  sdk.hookFunction(
    'DrawCheckbox',
    HookPriority.Observe,
    (args: Parameters<typeof DrawCheckbox>, next: (args: Parameters<typeof DrawCheckbox>) => ReturnType<typeof DrawCheckbox>) => {
      if (!doRedraw()) return next(args);

      const [Left, Top, Width, Height, Text, IsChecked, Disabled = false, TextColor = 'Black', CheckImage = 'Icons/Checked.png'] = args;

      const backgroundColor = Disabled ? '%disabled' : '%background';

      DrawText(Text, Left + 100, Top + 33, TextColor, '');
      DrawButton(Left, Top, Width, Height, '', backgroundColor, IsChecked ? CheckImage : '', undefined, Disabled);
    },
    ModuleCategory.GuiRedraw
  );
}
