import { sdk } from 'bc-deeplib/deeplib';
import { doRedraw } from '../../Modules/GuiRedraw';
import { ModuleCategory } from '../../Utilities/ModDefinition';

export function hookDialogGetMenuButtonColor() {
  sdk.hookFunction('DialogGetMenuButtonColor', 0, (args, next) => {
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
