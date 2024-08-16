import { _Color, colors } from './Color';
import { PlayerStorage } from './Data';

const styles = {
  Root: composeRoot(),
  Themed: '',
  BC_Inputs: '',
  BC_Chat: '',
  BC_FriendList: '',
  BC_Other: '',
  FBC: '',
  FUSAM: '',
  TTS: '',
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

  async fetch(link: string) {
    return fetch(link).then((res) => res.text());
  }
};

export const BcStyle = {
  async inject(id: keyof typeof styles): Promise<void> {

    const isEnabled = PlayerStorage().GlobalModule.themedEnabled;

    if (!isEnabled) return;
    if (!PlayerStorage().IntegrationModule[id] && id != 'Themed' && id != 'Root') return (() => {
      styles[id] = '';
    })();
    const styleSource = await (async () => {
      if (id === 'Root') return styles[id] = composeRoot();
      if (styles[id]) {
        return styles[id];
      } else {
        return styles[id] = await Style.fetch(`${PUBLIC_URL}/styles/${id}.css`);
      }
    })();

    Style.inject(id, styleSource);
  },

  eject(id: keyof typeof styles) {

    Style.eject(id);
  },

  reload(id: keyof typeof styles) {
    BcStyle.eject(id);
    BcStyle.inject(id);
  },

  injectAll() {
    const styleIDs = Object.keys(styles) as (keyof typeof styles)[];
    styleIDs.forEach((id) => {
      BcStyle.inject(id);
    });
  },

  ejectAll() {
    const styleIDs = Object.keys(styles) as (keyof typeof styles)[];
    styleIDs.forEach((id) => {
      BcStyle.eject(id);
    });
  },

  reloadAll() {
    const styleIDs = Object.keys(styles) as (keyof typeof styles)[];
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
