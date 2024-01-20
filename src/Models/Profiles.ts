import { BaseSettingsModel, GlobalSettingsModel } from './Global';
import { ColorsSettingsModel } from './Colors';
import { IntegrationSettingsModel } from './Integration';

export type ProfilesSettingsModel = BaseSettingsModel & {
  [index: number]: ProfileEntryModel;
  index: ProfileEntryModel[];
};

export type ProfileEntryModel = {
  [index: number]: ProfileEntryModel;
  name: string;
  data: ProfileSaveModel;
};

export type ProfileSaveModel = {
  GlobalModule: GlobalSettingsModel;
  ColorsModule: ColorsSettingsModel;
  IntegrationModule: IntegrationSettingsModel;
};

export type ProfileNames = {
  [index: number]: string | null;
};
