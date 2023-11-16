import BC from "../Static/Styles/BC.css";
import FBC from "../Static/Styles/FBC.css";
import FUSAM from "../Static/Styles/FUSAM.css";
import Themed from "../Static/Styles/Themed.css";
import TTS from "../Static/Styles/TTS.css";
import { _Color, color } from "./Color";
import { PlayerStorage } from "./Data";

const styles = {
  BC: BC,
  FBC: FBC,
  FUSAM: FUSAM,
  Themed: Themed,
  TTS: TTS,
  Root: composeRoot()
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

export function composeRoot() {
  return /*css*/ `
    :root {
      /*accent color*/
      --accentColor: ${color?.elementBorder ?? "#440171"};
      /*background*/
      --backgroundColor: ${color?.mainBackground ?? "#202020"}; 
      /*inputs, buttons and shit*/
      --elementBackgroundColor: ${color?.elementBackground ?? "#303030"}; 
       /*elements that should stand out, like thing on slider or button when hovered over*/
      --elementBackgroundHover: ${color?.elementBackgroundHover ?? "#57276e"};
      /*borders for html and game drawn elements*/
      --elementBorder: var(--accentColor);
      /*text obviously*/
      --textColor: ${color?.text ?? "#eeeeee"}; 

      --scrollbar: ${_Color.darken(color?.elementBackground, 20)};
    }
    `;
}

export function updateRootStyle() {
  styles.Root = composeRoot();
}
