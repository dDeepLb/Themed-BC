import { color } from "./Color";
import { doRedraw } from "./GuiHooks";

export function changeModColors() {
  if (doRedraw()) {
    changeBctColors();
  } else {
    resetBctColors();
  }
}

function changeBctColors() {
  if (!!Player.BCT) {
    BCT_API.HintBackColor = color.elementBackground;
    BCT_API.HintBorderColor = color.elementBorder;
    BCT_API.HintForeColor = color.text;
  }
}

function resetBctColors() {
  if (!!Player.BCT) {
    BCT_API.HintBackColor = "yellow";
    BCT_API.HintBorderColor = "black";
    BCT_API.HintForeColor = "black";
  }
}
