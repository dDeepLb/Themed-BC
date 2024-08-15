export type BaseSettingsModel = {
  themedEnabled: boolean;
};

export type GlobalSettingsModel = BaseSettingsModel & {
  doVanillaGuiOverhaul: boolean;
  doUseAdvancedColoring: boolean;
  doUseFlatColor: boolean;
  doShowLocaleTime: boolean;
  doIndicateCharacterAbsence: boolean;
  doShowNewVersionMessage: boolean;
};
