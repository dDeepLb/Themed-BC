export type BaseSettingsModel = {
  themedEnabled: boolean;
};

export type GlobalSettingsModel = BaseSettingsModel & {
  doVanillaGuiOverhaul: boolean;
  doShowLocaleTime: boolean;
  doShowNewVersionMessage: boolean;
};
