export type BaseSettingsModel = {
  themedEnabled: boolean;
};

export type GlobalSettingsModel = BaseSettingsModel & {
  doUseChatSpecialStyling: boolean;
  doShowLocaleTime: boolean;
  doShowNewVersionMessage: boolean;
};
