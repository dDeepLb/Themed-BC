import { HookPriority, modStorage } from 'bc-deeplib/deeplib';
import { doRedraw } from '../../Modules/GuiRedraw';
import { sdk } from '../../Themed';
import { plainColors } from '../../Utilities/Color';
import { ModuleCategory } from '../../Utilities/ModDefinition';

export function hookDrawRoomBackground() {
  sdk.hookFunction(
    'DrawRoomBackground',
    HookPriority.Observe,
    ([URL, ...args]: Parameters<typeof DrawRoomBackground>, next: (args: Parameters<typeof DrawRoomBackground>) => ReturnType<typeof DrawRoomBackground>) => {
      if (!doRedraw()) return next([URL, ...args]);

      if (URL.includes('Sheet.jpg')) {
        if (modStorage.playerStorage.GlobalModule.doUseFlatColor) {
          DrawRect(0, 0, 2000, 1000, plainColors.main);
        } else {
          next([URL, ...args]);
          MainCanvas.save();
          MainCanvas.globalCompositeOperation = 'multiply';
          DrawRect(0, 0, 2000, 1000, plainColors.main);
          MainCanvas.restore();
        }
      } else {
        next([URL, ...args]);
      }
    },
    ModuleCategory.GuiRedraw
  );
}
