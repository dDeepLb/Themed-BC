import BC from "../Static/Styles/BC.css";
import FBC from "../Static/Styles/FBC.css";
import FUSAM from "../Static/Styles/FUSAM.css";
import Themed from "../Static/Styles/Themed.css";
import TTS from "../Static/Styles/TTS.css";
import { _Color, colors } from "./Color";
import { PlayerStorage } from "./Data";

const styles = {
  BC: BC,
  FBC: FBC,
  FUSAM: FUSAM,
  Themed: Themed,
  TTS: TTS,
  Root: composeRootStyle()
};

export class _Style {
  static inject(id: keyof typeof styles | string) {
    if (id == "Root") updateRootStyle();

    const styleSource = styles[id];
    const isStyleLoaded = document.getElementById(id);

    if (isStyleLoaded) return;
    if (!PlayerStorage().IntegrationModule[id] && id != "Themed" && id != "Root") return;

    const styleElement = document.createElement("style");
    styleElement.id = id;
    styleElement.appendChild(document.createTextNode(styleSource));
    document.head.appendChild(styleElement);
  }

  static eject(id: keyof typeof styles | string) {
    const style = document.getElementById(id);
    if (!style) return;

    style.remove();
  }

  static reload(id: keyof typeof styles | string) {
    _Style.eject(id);
    _Style.inject(id);
  }

  static injectAll() {
    const styleIDs = Object.keys(styles);
    styleIDs.forEach((id) => {
      _Style.inject(id);
    });
  }

  static ejectAll() {
    const styleIDs = Object.keys(styles);
    styleIDs.forEach((id) => {
      _Style.eject(id);
    });
  }

  static reloadAll() {
    const styleIDs = Object.keys(styles);
    styleIDs.forEach((id) => {
      _Style.reload(id);
    });
  }
}

export function composeRootStyle() {
  return /*css*/ `
    :root {
      --primaryColor: ${colors?.background ?? "#202020"}; /*background*/
      --secondaryColor: ${colors?.element ?? "#303030"}; /*inputs, buttons and shit*/
      --textColor: ${colors?.text ?? "#eeeeee"}; /*text obviously*/
      --textShadowColor: ${_Color.darken(colors?.text ?? "#eeeeee", 50)};
      --accentColor1: ${colors?.border ?? "#440171"}; /*borders for html and game drawn elements*/
      --accentColor2: ${colors?.elementHover ?? "#57276e"}; /*elements that should stand out, like thing on slider or button when hovered over*/

      --scrollbar: ${_Color.darken(colors?.element, 20)};
    }
    `;
}

export function updateRootStyle() {
  styles.Root = composeRootStyle();
}
