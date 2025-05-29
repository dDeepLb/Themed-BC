import { BaseModule } from '../Base/BaseModule';
import { hookAppearanceGetPreviewImageColor } from '../Hooks/GuiRedraw/AppearanceGetPreviewImageColor';
import { hookDialogGetMenuButtonColor } from '../Hooks/GuiRedraw/DialogGetMenuButtonColor';
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
import { patchFunction, unpatchFunction } from '../Utilities/SDK';

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
    hookDialogGetMenuButtonColor();

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
        'bgColor = isFull ? "%searchFull" : "%background";',

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
        'DrawRect(1087 + offset, 550, 225, 275, disabled ? "%disabled" : (hover ? "%hover" : "%background"));DrawEmptyRect(1087 + offset, 550, 225, 275, "%border");',

      'const bgColor = disabled ? "Gray" : (hover ? "aqua" : "white");':
        'const bgColor = disabled ? "%disabled" : (hover ? "%hover" : "%background");',
    });

    patchFunction('DrawProcessScreenFlash', {
      'DrawRect(0, 0, 2000, 1000, "#ffffff" + DrawGetScreenFlashAlpha(FlashTime / Math.max(1, 4 - DrawLastDarkFactor)));':
        'DrawRect(0, 0, 2000, 1000, "!#ffffff" + DrawGetScreenFlashAlpha(FlashTime / Math.max(1, 4 - DrawLastDarkFactor)));',

      'DrawRect(0, 0, 2000, 1000, DrawScreenFlashColor + PinkFlashAlpha);':
        'DrawRect(0, 0, 2000, 1000, "!" + DrawScreenFlashColor + PinkFlashAlpha);'
    });

    patchFunction('ChatAdminRun', {
      'const ButtonBackground = canEdit ? "White" : "#ebebe4";':
        'const ButtonBackground = canEdit ? "%background" : "%disabled";'
    });

    patchFunction('AppearanceRun', {
      'const ButtonColor = canAccess ? "White" : "#888";':
        'const ButtonColor = canAccess ? "%background" : "%disabled";',
      'DrawButton(1635, 145 + (A - CharacterAppearanceOffset) * 95, 65, 65, "", layeringEnabled ? "#fff" : "#aaa", "Icons/Small/Layering.png", TextGet("Layering"), !layeringEnabled);':
        'DrawButton(1635, 145 + (A - CharacterAppearanceOffset) * 95, 65, 65, "", layeringEnabled ? "%background" : "%disabled", "Icons/Small/Layering.png", TextGet("Layering"), !layeringEnabled);',
      'DrawButton(1725, 145 + (A - CharacterAppearanceOffset) * 95, 160, 65, ColorButtonText, CanCycleColors ? ColorButtonColor : "#aaa", null, null, !CanCycleColors);':
        'DrawButton(1725, 145 + (A - CharacterAppearanceOffset) * 95, 160, 65, ColorButtonText, CanCycleColors ? ColorButtonColor : "%disabled", null, null, !CanCycleColors);',
      'DrawButton(1910, 145 + (A - CharacterAppearanceOffset) * 95, 65, 65, "", CanPickColor ? "#fff" : "#aaa", CanPickColor ? ColorIsSimple ? "Icons/Small/ColorChange.png" : "Icons/Small/ColorChangeMulti.png" : "Icons/Small/ColorBlocked.png", null, !CanPickColor);':
        'DrawButton(1910, 145 + (A - CharacterAppearanceOffset) * 95, 65, 65, "", CanPickColor ? "%background" : "%disabled", CanPickColor ? ColorIsSimple ? "Icons/Small/ColorChange.png" : "Icons/Small/ColorChangeMulti.png" : "Icons/Small/ColorBlocked.png", null, !CanPickColor);',
    });

    patchFunction('ExtendedItemGetButtonColor', {
      'ButtonColor = "#888888";':
        'ButtonColor = "%accent";',
      'ButtonColor = Hover ? "red" : "pink";':
        'ButtonColor = "%blocked";',
      'ButtonColor = Hover ? "orange" : "#fed8b1";':
        'ButtonColor = "%limited";',
      'ButtonColor = Hover ? "green" : "lime";':
        'ButtonColor = "%allowed";',

      'ButtonColor = "Red";':
        'ButtonColor = "%blocked";',
      'ButtonColor = "Pink";':
        'ButtonColor = "%limited";',
      'ButtonColor = Hover ? "Cyan" : "LightGreen";':
        'ButtonColor = "%allowed";',
      'ButtonColor = Hover ? "Cyan" : "White";':
        'ButtonColor = Hover ? "%hover" : "%background";',
    });

    patchFunction('PreferenceSubscreenDifficultyRun', {
      'DrawButton(500, 320 + 150 * D, 300, 64, TextGet("DifficultyLevel" + D.toString()), (D == Player.GetDifficulty()) ? "#DDFFDD" : "White", "");':
        'DrawButton(500, 320 + 150 * D, 300, 64, TextGet("DifficultyLevel" + D.toString()), (D == Player.GetDifficulty()) ? "%accent" : "%background", "");',
      'DrawButton(500, 825, 300, 64, TextGet("DifficultyChangeMode") + " " + TextGet("DifficultyLevel" + PreferenceDifficultyLevel.toString()), PreferenceDifficultyAccept ? "White" : "#ebebe4", "");':
        'DrawButton(500, 825, 300, 64, TextGet("DifficultyChangeMode") + " " + TextGet("DifficultyLevel" + PreferenceDifficultyLevel.toString()), PreferenceDifficultyAccept ? "%background" : "%disabled", "");'
    });

    patchFunction('ChatAdminRoomCustomizationRun', {
      'DrawButton(725, 840, 250, 65, TextGet("Clear"), ChatRoomPlayerIsAdmin() ? "White" : "#ebebe4", null, null, !ChatRoomPlayerIsAdmin());':
        'DrawButton(725, 840, 250, 65, TextGet("Clear"), ChatRoomPlayerIsAdmin() ? "%background" : "%disabled", null, null, !ChatRoomPlayerIsAdmin());',
      'DrawButton(1025, 840, 250, 65, TextGet("Save"), ChatRoomPlayerIsAdmin() ? "White" : "#ebebe4", null, null, !ChatRoomPlayerIsAdmin());':
        'DrawButton(1025, 840, 250, 65, TextGet("Save"), ChatRoomPlayerIsAdmin() ? "%background" : "%disabled", null, null, !ChatRoomPlayerIsAdmin());',
    });

    patchFunction('Shop2._AssetElementDraw', {
      'options.Background = "cyan";':
        'options.Background = "%hover";',
      'options.Background = "white";':
        'options.Background = "%background";',
      'options.Background = "gray";':
        'options.Background = "%disabled";',
      'options.Background = "pink";':
        'options.Background = "%equipped";',
    });

    patchFunction('RelogRun', {
      'DrawButton(675, 750, 300, 60, TextGet("LogBackIn"), CanLogin ? "White" : "Grey", "");':
        'DrawButton(675, 750, 300, 60, TextGet("LogBackIn"), CanLogin ? "%background" : "%disabled", "", null, CanLogin);'
    });

    patchFunction('ChatRoomMenuDraw', {
      'let color = "White";': 'let color = "%background";',
      'color = "White";': 'color = "%background";',
      'color = "Pink";': 'color = "%blocked";',
      'color = "Yellow";': 'color = "%limited";',
      'color = ChatRoomGetUpTimer === 0 ? "Yellow" : "Pink";': 'color = ChatRoomGetUpTimer === 0 ? "%limited" : "%blocked";',
      'color = Player.IsSlow() ? "Yellow" : "White";': 'color = Player.IsSlow() ? "%limited" : "%background";',
    });

    this.patched = true;
  }

  unpatchGui() {
    if (!this.patched) return false;

    unpatchFunction('ChatSearchNormalDraw');
    unpatchFunction('ChatSearchPermissionDraw');
    unpatchFunction('DialogDraw');
    unpatchFunction('DrawProcessScreenFlash');
    unpatchFunction('ChatAdminRun');
    unpatchFunction('AppearanceRun');

    unpatchFunction('ExtendedItemGetButtonColor');
    unpatchFunction('PreferenceSubscreenDifficultyRun');
    unpatchFunction('ChatAdminRoomCustomizationRun');
    unpatchFunction('Shop2._AssetElementDraw');
    unpatchFunction('RelogRun');
    unpatchFunction('ChatRoomMenuDraw');

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
