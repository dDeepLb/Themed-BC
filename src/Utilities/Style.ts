import { deepLibLogger, PlayerStorage, Style } from 'bc-deeplib/deeplib';
import { IntegrationSettingsModel } from '../Models/Integration';
import { plainColors, specialColors } from './Color';
import { camelToKebabCase } from './Other';

type styles = {
  [key in keyof Omit<IntegrationSettingsModel, 'modEnabled' | 'doShowNewVersionMessage' | 'MBS'>]: string;
};
const styles: styles = {
  inputs: '',
  chat: '',
  inventory: '',
  friendList: '',
  friendListBlur: '',
  scrollbar: '',
  selection: '',
  WCE: '',
  FUSAM: '',
  TTS: '',
};

export const BcStyle = {
  injectAll() {
    const isEnabled = PlayerStorage().GlobalModule.modEnabled;

    Style.injectEmbed('themed', `${PUBLIC_URL}/styles/themed.css`);
    
    if (!isEnabled) return;

    Style.injectInline('root', composeRoot());

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

  Object.keys(plainColors).forEach((key: string) => {
    const typedKey = key as keyof typeof plainColors;
    genedColors += `--tmd-${camelToKebabCase(key)}: ${plainColors[typedKey]};\n\t`;
  });
  Object.keys(specialColors).forEach((key) => {
    const typedKey = key as keyof typeof specialColors;
    genedColors += `--tmd-${camelToKebabCase(key)}: ${specialColors[typedKey][0]};\n\t`;
    genedColors += `--tmd-${camelToKebabCase(key)}-hover: ${specialColors[typedKey][1]};\n\t`;
  });

  return /*css*/ `
    :root {
      ${genedColors}
    }
    `.replace(/\t+|\n\s*/g, '\t');
}
