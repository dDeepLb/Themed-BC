import { SettingsModel as DL_SettingsModel } from 'bc-deeplib/deeplib';
import { ColorsSettingsModel } from './Colors';
import { GlobalSettingsModel } from './Global';
import { IntegrationSettingsModel } from './Integration';
import { ProfilesSettingsModel } from './Profiles';

export interface SettingsModel extends DL_SettingsModel {
  GlobalModule: GlobalSettingsModel;
  ColorsModule: ColorsSettingsModel;
  IntegrationModule: IntegrationSettingsModel;
  ProfilesModule: ProfilesSettingsModel;
}
