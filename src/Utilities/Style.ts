import BC_Inputs from "../Static/Styles/BC_Inputs.css";
import BC_Chat from "../Static/Styles/BC_Chat.css";
import BC_FriendList from "../Static/Styles/BC_FriendList.css";
import BC_Other from "../Static/Styles/BC_Other.css";
import FBC from "../Static/Styles/FBC.css";
import FUSAM from "../Static/Styles/FUSAM.css";
import Themed from "../Static/Styles/Themed.css";
import TTS from "../Static/Styles/TTS.css";
import { _Color, colors } from "./Color";
import { PlayerStorage } from "./Data";

const styles = {
  Root: composeRoot(),
  Themed: Themed,
  BC: BC_Inputs,
  BC_Chat: BC_Chat,
  BC_FriendList: BC_FriendList,
  BC_Other: BC_Other,
  FBC: FBC,
  FUSAM: FUSAM,
  TTS: TTS
};

export class _Style {
  static inject(id: keyof typeof styles | string) {
    if (id == "Root") updateRootStyle();

    const styleSource = styles[id];
    const isStyleLoaded = document.getElementById(id);
    const isEnabled = PlayerStorage().GlobalModule.themedEnabled;

    if (isStyleLoaded) return;
    if (!isEnabled) return;
    if (!PlayerStorage().IntegrationModule[id] && id != "Themed" && id != "Root" && id != "Markdown") return;

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
      --accent: ${colors?.elementBorder || "#440171"};
      /*background*/
      --background: ${colors?.mainBackground || "#202020"}; 
      /*inputs, buttons and shit*/
      --elementBackground: ${colors?.elementBackground || "#303030"}; 
       /*elements that should stand out, like thing on slider or button when hovered over*/
      --elementBackgroundHover: ${colors?.elementBackgroundHover || "#57276e"};
      /*borders for html and game drawn elements*/
      --elementBorder: var(--accent);
      /*text obviously*/
      --text: ${colors?.text || "#eeeeee"}; 
      /*obviously as well*/
      --textShadow: ${_Color.darken(colors?.elementBackground, 50) || "#cccccc"};

      --scrollbar: ${_Color.darken(colors?.elementBackground, 20) || "#454545"};

      --friendlistBackground: ${colors?.elementBackground + "80" || "#30303080"};
      
      --codeBackground: ${_Color.lighten(colors?.elementBackground, 40) + "20" || "#aaaaaa20"};
    }
    `;
}

export function updateRootStyle() {
  styles.Root = composeRoot();
}
