export type BaseSettingsModel = {
  themedEnabled: boolean;
};

export type GlobalSettingsModel = BaseSettingsModel & {
  doUseChatSpecialStyling: boolean;
  doShowNewVersionMessage: boolean;
};
