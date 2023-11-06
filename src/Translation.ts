import { DebugMode } from "./Utilities/Definition";
import { conDebug } from "./Utilities/Console";

/*
"": "",
*/

export type TextMapKeys = keyof typeof ENTextMap;

const ENTextMap = {
  "infosheet.button_popup": "Themed Settings",

  "MainMenu.title": "- Themed BC -",
  "mainmenu.button.Settings": "Settings",
  "mainmenu.button.Colors": "Color Settings",

  "Settings.title": "- Settings -",
  "settings.setting.themedEnabled.name": "Enable Themed:",
  "settings.setting.themedEnabled.desc": "Enables features of Themed.",
  "settings.setting.doUseChatSpecialStyling.name": "Enable chat styling:",
  "settings.setting.doUseChatSpecialStyling.desc": "Enables chat messages styling like italic, bold, underlined, etc.",
  "settings.setting.doShowLocaleTime.name": "Enable locale-based time format:",
  "settings.setting.doShowLocaleTime.desc": "Displays time according to your PC's locale settings. Like 20:25 or 08:25 PM.",
  "settings.setting.doShowNewVersionMessage.name": "Enable new version message:",
  "settings.setting.doShowNewVersionMessage.desc": "Show message about new version of Themed, when it's out.",

  "Colors.title": "- Color Settings -",
  "settings.setting.primaryColor.name": "Primary color:",
  "settings.setting.primaryColor.desc": "",
  "settings.setting.secondaryColor.name": "Secondary color:",
  "settings.setting.secondaryColor.desc": "",
  "settings.setting.textColor.name": "Text color:",
  "settings.setting.textColor.desc": "",
  "settings.setting.textShadowColor.name": "Text shadow color:",
  "settings.setting.textShadowColor.desc": "",
  "settings.setting.accentColor1.name": "First accent color:",
  "settings.setting.accentColor1.desc": "",
  "settings.setting.accentColor2.name": "Second accent color:",
  "settings.setting.accentColor2.desc": "",

  // Support
  "support.title": "- Support -",
  "support.button.ko-fi": "Ko-fi",
  "support.button.patreon": "Patreon",
  "support.other.thankyou": "Thank you"
};

export function getText(translationTag: TextMapKeys): string {
  if (DebugMode) logSrcTags(translationTag);
  return [`${TranslationLanguage}TextMap`][translationTag] || ENTextMap[translationTag] || translationTag;
}

function logSrcTags(translationTag: TextMapKeys) {
  if (![`${TranslationLanguage}TextMap`][translationTag]) {
    conDebug(`${String(translationTag)} is not translated for ${TranslationLanguage}`);
  }
}
