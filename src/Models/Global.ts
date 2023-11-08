export type BaseSettingsModel = {
  themedEnabled: boolean;
};

export type GlobalSettingsModel = BaseSettingsModel & {
  doVanillaGuiOverhaul: boolean;
  doUseChatSpecialStyling: boolean;
  doShowLocaleTime: boolean;
  doShowNewVersionMessage: boolean;
};
