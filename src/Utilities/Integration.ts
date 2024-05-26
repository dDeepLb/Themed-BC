import { doRedraw } from "../Modules/GuiRedraw";
import { colors } from "./Color";
import { PlayerStorage } from './Data';

export function changeModColors() {
  if (doRedraw()) {
    changeBctColors();
  } else {
    resetBctColors();
  }
}

function changeBctColors() {
  if (!!Player.BCT) {
    BCT_API.HintBackColor = colors.elementBackground;
    BCT_API.HintBorderColor = colors.elementBorder;
    BCT_API.HintForeColor = colors.text;
  }
}

function resetBctColors() {
  if (!!Player.BCT) {
    BCT_API.HintBackColor = "yellow";
    BCT_API.HintBorderColor = "black";
    BCT_API.HintForeColor = "black";
  }
}

export function changeMbsColors() {
  if (typeof mbs !== 'undefined' && mbs.API_VERSION.major === 1 && mbs.API_VERSION.minor >= 3) {
    if (!PlayerStorage().IntegrationModule.MBS) return;
    return mbs.css.setStyle({
      backgroundColor: colors.mainBackground,
      buttonColor: colors.elementBackground,
      buttonHoverColor: colors.elementBackgroundHover,
      borderColor: colors.elementBorder,
      tooltipColor: colors.elementHoverHint,
      textColor: colors.text
    });
  }
}

export function resetMbsColors() {
  if (typeof mbs !== 'undefined' && mbs.API_VERSION.major === 1 && mbs.API_VERSION.minor >= 3) {
    if (!PlayerStorage().IntegrationModule.MBS)
      mbs.css.setStyle({
        backgroundColor: mbs.css.DEFAULT_STYLE.backgroundColor,
        buttonColor: mbs.css.DEFAULT_STYLE.buttonColor,
        buttonHoverColor: mbs.css.DEFAULT_STYLE.buttonHoverColor,
        borderColor: mbs.css.DEFAULT_STYLE.borderColor,
        tooltipColor: mbs.css.DEFAULT_STYLE.tooltipColor,
        textColor: mbs.css.DEFAULT_STYLE.textColor
      });
  }
}
