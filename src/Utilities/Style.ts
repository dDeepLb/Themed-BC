import { IntegrationSettingsModel } from '../Models/Integration';
import { _Color, plainColors, specialColors } from './Color';
import { PlayerStorage } from './Data';

type styles = {
  [key in keyof Omit<IntegrationSettingsModel, 'themedEnabled' | 'MBS'>]: string;
};
const styles: styles = {
  inputs: '',
  chat: '',
  friendList: '',
  friendListBlur: '',
  WCE: '',
  FUSAM: '',
  TTS: '',
};

export const Style = {
  injectInline(styleId: string, styleSource: string) {
    const isStyleLoaded = document.getElementById(styleId);

    if (isStyleLoaded) return;

    const styleElement = document.createElement('style');
    styleElement.id = styleId;
    styleElement.appendChild(document.createTextNode(styleSource));
    document.head.appendChild(styleElement);
  },

  injectEmbed(styleId: string, styleLink: string) {
    const isStyleLoaded = document.getElementById(styleId);

    if (isStyleLoaded) return;

    const styleElement = document.createElement('link');
    styleElement.id = styleId;
    styleElement.rel = 'stylesheet';
    styleElement.href = styleLink;
    document.head.appendChild(styleElement);
  },

  eject(id: string) {
    const style = document.getElementById(id);
    if (!style) return;

    style.remove();
  },

  reload(styleId: string, styleSource: string) {
    Style.eject(styleId);
    Style.injectInline(styleId, styleSource);
  },

  async fetch(link: string) {
    return fetch(link).then((res) => res.text());
  }
};

export const BcStyle = {
  injectAll() {
    const isEnabled = PlayerStorage().GlobalModule.themedEnabled;

    Style.injectInline('root', composeRoot());
    Style.injectEmbed('themed', `${PUBLIC_URL}/styles/themed.css`);
    
    if (!isEnabled) return;

    const styleIDs = Object.keys(styles) as (keyof typeof styles)[];
    styleIDs.forEach((id) => {
      if (!PlayerStorage().IntegrationModule[id]) return;
      Style.injectEmbed(id, `${PUBLIC_URL}/styles/${id}.css`);
    });
  },

  ejectAll() {
    Style.eject('root');
    Style.eject('themed');

    const styleIDs = Object.keys(styles) as (keyof typeof styles)[];
    styleIDs.forEach((id) => {
      Style.eject(id);
    });
  },

  reloadAll() {
    BcStyle.ejectAll();
    BcStyle.injectAll();
  }
};

export function composeRoot() {
  let genedColors = '';

  Object.keys(plainColors).forEach((key) => {
    genedColors += `--${key}: ${plainColors[key]};\n\t`;
  });
  Object.keys(specialColors).forEach((key) => {
    genedColors += `--${key}: ${specialColors[key][0]};\n\t`;
    genedColors += `--${key}Hover: ${specialColors[key][1]};\n\t`;
  });
  
  return /*css*/ `
    :root {
      ${genedColors}
      --scrollbar: ${_Color.darken(plainColors?.element, 20) || '#454545'};
      --friendlistBackground: ${plainColors?.element + '80' || '#30303080'};
    }
    `.replace(/\t+/g, '\t').replace(/\n\s*/g, '\t');
}
