import { BaseModule } from '../Base/BaseModule';
import { hookAppearanceGetPreviewImageColor } from '../Hooks/GuiRedraw/AppearanceGetPreviewImageColor';
import { hookDrawBackNextButton } from '../Hooks/GuiRedraw/DrawBackNextButton';
import { hookDrawButton } from '../Hooks/GuiRedraw/DrawButton';
import { hookDrawButtonHover } from '../Hooks/GuiRedraw/DrawButtonHover';
import { hookDrawCheckbox } from '../Hooks/GuiRedraw/DrawCheckbox';
import { hookDrawEmptyRect } from '../Hooks/GuiRedraw/DrawEmptyRect';
import { hookDrawImageEx } from '../Hooks/GuiRedraw/DrawImageEx';
import { hookDrawPreviewBox } from '../Hooks/GuiRedraw/DrawPreviewBox';
import { hookDrawRect } from '../Hooks/GuiRedraw/DrawRect';
import { hookDrawRoomBackground } from '../Hooks/GuiRedraw/DrawRoomBackground';
import { hookDrawText } from '../Hooks/GuiRedraw/DrawText';
import { hookDrawTextFit } from '../Hooks/GuiRedraw/DrawTextFit';
import { hookDrawTextWrap } from '../Hooks/GuiRedraw/DrawTextWrap';
import { PlayerStorage } from '../Utilities/Data';
import { patchFunction, unpatchFuntion } from '../Utilities/SDK';

export const doRedraw = () => {
  return PlayerStorage()?.GlobalModule?.themedEnabled && PlayerStorage().GlobalModule?.doVanillaGuiOverhaul && CurrentScreen !== 'ClubCard';
};

export class GuiRedrawModule extends BaseModule {
  patched: boolean = false;

  Load(): void {
    hookDrawRoomBackground();
    hookDrawButton();
    hookDrawCheckbox();
    hookDrawBackNextButton();
    hookDrawImageEx();
    hookDrawRect();
    hookDrawEmptyRect();
    hookDrawButtonHover();
    hookDrawPreviewBox();
    hookAppearanceGetPreviewImageColor();
    hookDrawTextWrap();
    hookDrawTextFit();
    hookDrawText();

    if (doRedraw()) this.patchGui();
  }

  patchGui() {
    if (this.patched) return false;

    patchFunction('ChatSearchNormalDraw', {
      // isBlocked
      'bgColor = isFull ? "#884444" : "#FF9999";':
        'bgColor = isFull ? "%searchFullBlock" : "%searchBlock";',
      // hasFriends
      'bgColor = isFull ? "#448855" : "#CFFFCF";':
        'bgColor = isFull ? "%searchFullFriend" : "%searchFriend";',
      // else
      'bgColor = isFull ? "#666" : "White";':
        'bgColor = isFull ? "%searchFull" : "White";',

      'blocksText.push({ text: friendsText, color: "#FFFF88"});':
        'blocksText.push({ text: friendsText, color: "%friendhint"});',

      'blocksText.push({ text: blockedText, color: "#FF9999" });':
        'blocksText.push({ text: blockedText, color: "%searchBlock" });',

      'blocksText.push({ text: gameText, color: "#9999FF"});':
        'blocksText.push({ text: gameText, color: "%searchGame"});',
    });

    patchFunction('ChatSearchPermissionDraw', {
      'bgColor = Hover ? "red" : "pink";':
        'bgColor = "%allowed";',

      'bgColor = Hover ? "green" : "lime";':
        'bgColor = "%searchBlock";'
    });

    patchFunction('DialogDraw', {
      'DrawRect(1087 + offset, 550, 225, 275, bgColor);':
        'DrawRect(1087 + offset, 550, 225, 275, disabled ? "%disabled" : (hover ? "%hover" : "%background"));DrawEmptyRect(1087 + offset, 550, 225, 275, "%border");'
    });

    patchFunction('DrawProcessScreenFlash', {
      'DrawRect(0, 0, 2000, 1000, "#ffffff" + DrawGetScreenFlashAlpha(FlashTime/Math.max(1, 4 - DrawLastDarkFactor)));':
        'DrawRect(0, 0, 2000, 1000, "!#ffffff" + DrawGetScreenFlashAlpha(FlashTime/Math.max(1, 4 - DrawLastDarkFactor)));',

      'DrawRect(0, 0, 2000, 1000, DrawScreenFlashColor + PinkFlashAlpha);':
        'DrawRect(0, 0, 2000, 1000, "!" + DrawScreenFlashColor + PinkFlashAlpha);'
    });
    this.patched = true;
  }

  unpatchGui() {
    if (!this.patched) return false;

    unpatchFuntion('ChatSearchNormalDraw');
    unpatchFuntion('ChatSearchPermissionDraw');
    unpatchFuntion('DialogDraw');

    this.patched = false;
  }

  toggleGuiPatches() {
    if (!doRedraw()) {
      return this.unpatchGui();
    } else {
      return this.patchGui();
    }
  }
}
