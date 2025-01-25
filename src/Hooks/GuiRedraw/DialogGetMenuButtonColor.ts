import { doRedraw } from '../../Modules/GuiRedraw';
import { hookFunction, ModuleCategory } from '../../Utilities/SDK';

export function hookDialogGetMenuButtonColor() {
  hookFunction('DialogGetMenuButtonColor', 0, (args, next) => {
    if (!doRedraw()) return next(args);

    const [buttonName] = args;

    if (DialogIsMenuButtonDisabled(buttonName)) {
      return '%disabled';
    } else if (buttonName === 'ColorDefault') {
      return DialogColorSelect || '%background';
    } else {
      return '%background';
    }
  }, ModuleCategory.GuiRedraw);
}
