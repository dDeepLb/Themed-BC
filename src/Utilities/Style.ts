import BC from "../Static/Styles/BC.css";
import FBC from "../Static/Styles/FBC.css";
import FUSAM from "../Static/Styles/FUSAM.css";
import Themed from "../Static/Styles/Themed.css";
import TTS from "../Static/Styles/TTS.css";
import { Color } from "./Color";
import { PlayerStorage } from "./Data";

const styles = {
  BC: BC,
  FBC: FBC,
  FUSAM: FUSAM,
  Themed: Themed,
  TTS: TTS,
  Root: composeRootStyle()
};

export class Style {
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
    Style.eject(id);
    Style.inject(id);
  }

  static injectAll() {
    const styleIDs = Object.keys(styles);
    styleIDs.forEach((id) => {
      Style.inject(id);
    });
  }

  static ejectAll() {
    const styleIDs = Object.keys(styles);
    styleIDs.forEach((id) => {
      Style.eject(id);
    });
  }

  static reloadAll() {
    const styleIDs = Object.keys(styles);
    styleIDs.forEach((id) => {
      Style.reload(id);
    });
  }
}

export function composeRootStyle() {
  const colors = PlayerStorage()?.ColorsModule;
  return /*css*/ `
    :root {
      --primaryColor: ${colors?.primaryColor ?? "#202020"}; /*background*/
      --secondaryColor: ${colors?.secondaryColor ?? "#303030"}; /*inputs, buttons and shit*/
      --textColor: ${colors?.textColor ?? "#eee"}; /*text obviously*/
      --accentColor1: ${colors?.accentColor1 ?? "#440171"}; /*borders for html and game drawn elements*/
      --accentColor2: ${colors?.accentColor2 ?? "#57276e"}; /*elements that should stand out, like thing on slider or button when hovered over*/

      --scrollbar: ${Color.darken(colors?.primaryColor, 20)};
    }
    `;
}

export function updateRootStyle() {
  styles.Root = composeRootStyle();
}
