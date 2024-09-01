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
  return PlayerStorage()?.GlobalModule?.themedEnabled && PlayerStorage().GlobalModule?.doVanillaGuiOverhaul;
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
      'DrawButton(X, Y, 630, 85, "", (HasBlock && IsFull ? "#884444" : HasBlock ? "#FF9999" : HasFriends && IsFull ? "#448855" : HasFriends ? "#CFFFCF" : IsFull ? "#666" : "White"), null, null, IsFull);':
        'DrawButton(X, Y, 630, 85, "", (HasBlock && IsFull ? "#4d1b1b" : HasBlock ? "#6e0c0c" : HasFriends && IsFull ? "#225c30" : HasFriends ? "#4d854d" : IsFull ? "#444" : "White"), null, null, IsFull);',
      'DrawTextWrap(ChatSearchMuffle(ChatSearchResult[C].Friends[F].MemberName + " (" + ChatSearchResult[C].Friends[F].MemberNumber + ")"), (X > 1000) ? 685 : X + 660, ListY, 630, Height, "black", "#FFFF88", 1);':
        'DrawTextWrap(ChatSearchMuffle(ChatSearchResult[C].Friends[F].MemberName + " (" + ChatSearchResult[C].Friends[F].MemberNumber + ")"), (X > 1000) ? 685 : X + 660, ListY, 630, Height, "black", "%friendhint", 1);',
      'DrawTextWrap(TextGet("FriendsInRoom") + " " + ChatSearchMuffle(ChatSearchResult[C].DisplayName), (X > 1000) ? 685 : X + 660, ListY, 630, Height, "black", "#FFFF88", 1);':
        'DrawTextWrap(TextGet("FriendsInRoom") + " " + ChatSearchMuffle(ChatSearchResult[C].DisplayName), (X > 1000) ? 685 : X + 660, ListY, 630, Height, "black", "%friendhint", 1);',
      'DrawTextWrap(Block, (X > 1000) ? 685 : X + 660, ListY, 630, Height, "black", "#FF9999", 1);':
        'DrawTextWrap(Block, (X > 1000) ? 685 : X + 660, ListY, 630, Height, "black", "#6e0c0c", 1);'
    });

    patchFunction('DialogDraw', {
      'DrawRect(1087 + offset, 550, 225, 275, bgColor);':
        'DrawRect(1087 + offset, 550, 225, 275, disabled ? "%disabled" : (hover ? "%hover" : "%background"));DrawEmptyRect(1087 + offset, 550, 225, 275, "%border");'
    });

    this.patched = true;
  }

  unpatchGui() {
    if (!this.patched) return false;

    unpatchFuntion('ChatSearchNormalDraw');
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
