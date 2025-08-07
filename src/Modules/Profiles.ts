import { BaseModule, deepMergeMatchingProperties, getModule, modStorage, Subscreen } from 'bc-deeplib/deeplib';
import { ProfileSaveModel, ProfilesSettingsModel } from '../Models/Profiles';
import { GuiProfiles } from '../Screens/Profiles';
import { ModName } from '../Utilities/ModDefinition';
import { ColorsModule } from './Colors';
import { GlobalModule } from './Global';
import { IntegrationModule } from './Integration';

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
    return <ProfilesSettingsModel>{};
  }

  load(): void {
    const profileDefaults: ProfileSaveModel = {
      GlobalModule: getModule<GlobalModule>('GlobalModule').defaultSettings,
      ColorsModule: getModule<ColorsModule>('ColorsModule').defaultSettings,
      IntegrationModule: getModule<IntegrationModule>('IntegrationModule').defaultSettings
    };
    
    for (let i = 0; i < 3; i++) {
      const profileIndex = i + 1;
      if (!modStorage.playerStorage.ProfilesModule[profileIndex] || Object.keys(modStorage.playerStorage.ProfilesModule[profileIndex]).length === 0) {
        Player[ModName].ProfilesModule[profileIndex] = {
          data: <ProfileSaveModel>{},
          name: ''
        };
      }
      
      if (Object.keys(Player[ModName].ProfilesModule[profileIndex].data).length > 0) Player[ModName].ProfilesModule[profileIndex].data = deepMergeMatchingProperties<ProfileSaveModel>(profileDefaults, Player[ModName].ProfilesModule[profileIndex].data);
    }
  }
}
