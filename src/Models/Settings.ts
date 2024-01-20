import { ColorsSettingsModel } from './Colors';
import { GlobalSettingsModel } from './Global';
import { IntegrationSettingsModel } from './Integration';
import { ProfilesSettingsModel } from './Profiles';

export type SettingsModel = {
  Version: string;
  GlobalModule: GlobalSettingsModel;
  ColorsModule: ColorsSettingsModel;
  IntegrationModule: IntegrationSettingsModel;
  ProfilesModule: ProfilesSettingsModel;
};
