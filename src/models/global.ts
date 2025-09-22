import { BaseSettingsModel as DL_BaseSettingsModel } from 'bc-deeplib/deeplib';

export type GlobalSettingsModel = DL_BaseSettingsModel & {
  doVanillaGuiOverhaul: boolean;
  doUseAdvancedColoring: boolean;
  doUseFlatColor: boolean;
  doShowLocaleTime: boolean;
  doIndicateCharacterAbsence: boolean;
};
