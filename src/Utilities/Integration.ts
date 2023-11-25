import { colors } from "./Color";
import { doRedraw } from "../Modules/GuiRedraw";

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
