import { BaseModule, deepMergeMatchingProperties, getModule, modStorage, Subscreen } from 'bc-deeplib/deeplib';
import { ProfileSaveModel, ProfilesSettingsModel } from '../models/profiles';
import { GuiProfiles } from '../screens/profiles';
import { ColorsModule } from './colors';
import { GlobalModule } from './global';
import { IntegrationModule } from './integration';

export class ProfilesModule extends BaseModule {
  get settings(): ProfilesSettingsModel {
    return super.settings as ProfilesSettingsModel;
  }

  set settings(val) {
    super.settings = val;
  }

  get settingsScreen(): Subscreen | null {
    return GuiProfiles;
  }

  get defaultSettings() {
    const profileDefaults: ProfileSaveModel = {
      GlobalModule: getModule<GlobalModule>('GlobalModule').defaultSettings,
      ColorsModule: getModule<ColorsModule>('ColorsModule').defaultSettings,
      IntegrationModule: getModule<IntegrationModule>('IntegrationModule').defaultSettings
    };

    const data = modStorage.playerStorage?.ProfilesModule || {};
    
    for (let i = 0; i < 3; i++) {
      const profileIndex = i + 1;
      if (!data[profileIndex] || Object.keys(data[profileIndex]).length === 0) {
        data[profileIndex] = {
          data: <ProfileSaveModel>{},
          name: ''
        };
      }
      
      if (Object.keys(data[profileIndex].data).length > 0) 
        data[profileIndex].data = deepMergeMatchingProperties<ProfileSaveModel>(profileDefaults, data[profileIndex].data);
    }

    return data;
  }

  load(): void {
  }
}
