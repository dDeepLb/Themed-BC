import BC_Chat from '../Static/Styles/BC_Chat.css';
import BC_FriendList from '../Static/Styles/BC_FriendList.css';
import BC_Inputs from '../Static/Styles/BC_Inputs.css';
import BC_Other from '../Static/Styles/BC_Other.css';
import FBC from '../Static/Styles/FBC.css';
import FUSAM from '../Static/Styles/FUSAM.css';
import TTS from '../Static/Styles/TTS.css';
import Themed from '../Static/Styles/Themed.css';
import { _Color, colors } from './Color';
import { PlayerStorage } from './Data';
import { changeMbsColors, resetMbsColors } from './Integration';

const styles = {
  Root: composeRoot(),
  Themed: Themed,
  BC: BC_Inputs,
  BC_Chat: BC_Chat,
  BC_FriendList: BC_FriendList,
  BC_Other: BC_Other,
  FBC: FBC,
  FUSAM: FUSAM,
  TTS: TTS,
  MBS: 'MBS'
};

export const Style = {
  inject(styleId: string, styleSource: string) {
    const isStyleLoaded = document.getElementById(styleId);

    if (isStyleLoaded) return;

    const styleElement = document.createElement('style');
    styleElement.id = styleId;
    styleElement.appendChild(document.createTextNode(styleSource));
    document.head.appendChild(styleElement);
  },

  eject(id: string) {
    const style = document.getElementById(id);
    if (!style) return;

    style.remove();
  },

  reload(styleId: string, styleSource: string) {
    Style.eject(styleId);
    Style.inject(styleId, styleSource);
  },
};

export const BcStyle = {
  inject(id: keyof typeof styles | string) {
    if (id == 'Root') updateRootStyle();
    else if (id == 'MBS') {
      changeMbsColors();
    }

    const styleSource = styles[id];
    const isEnabled = PlayerStorage().GlobalModule.themedEnabled;

    if (!isEnabled) return;
    if (!PlayerStorage().IntegrationModule[id] && id != 'Themed' && id != 'Root') return;

    Style.inject(id, styleSource);
  },

  eject(id: keyof typeof styles | string) {
    if (id == 'MBS') {
      resetMbsColors();
    }

    Style.eject(id);
  },

  reload(id: keyof typeof styles | string) {
    BcStyle.eject(id);
    BcStyle.inject(id);
  },

  injectAll() {
    const styleIDs = Object.keys(styles);
    styleIDs.forEach((id) => {
      BcStyle.inject(id);
    });
  },

  ejectAll() {
    const styleIDs = Object.keys(styles);
    styleIDs.forEach((id) => {
      BcStyle.eject(id);
    });
  },

  reloadAll() {
    const styleIDs = Object.keys(styles);
    styleIDs.forEach((id) => {
      BcStyle.reload(id);
    });
  }
};

export function composeRoot() {
  return /*css*/ `
    :root {
      /*accent color*/
      --accent: ${colors?.elementBorder || '#440171'};
      /*background*/
      --background: ${colors?.mainBackground || '#202020'}; 
      /*inputs, buttons and shit*/
      --elementBackground: ${colors?.elementBackground || '#303030'}; 
       /*elements that should stand out, like thing on slider or button when hovered over*/
      --elementBackgroundHover: ${colors?.elementBackgroundHover || '#57276e'};
      /*borders for html and game drawn elements*/
      --elementBorder: var(--accent);
      /*text obviously*/
      --text: ${colors?.text || '#eeeeee'}; 
      /*obviously as well*/
      --textShadow: ${'#eeeeee80'};

      --scrollbar: ${_Color.darken(colors?.elementBackground, 20) || '#454545'};

      --friendlistBackground: ${colors?.elementBackground + '80' || '#30303080'};
      
      --codeBackground: ${_Color.lighten(colors?.elementBackground, 40) + '20' || '#aaaaaa20'};
    }
    `;
}

export function updateRootStyle() {
  styles.Root = composeRoot();
}
