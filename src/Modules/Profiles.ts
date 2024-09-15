import { BaseModule } from '../Base/BaseModule';
import { getModule } from '../Base/Modules';
import { Subscreen } from '../Base/SettingDefinitions';
import { ProfileSaveModel, ProfilesSettingsModel } from '../Models/Profiles';
import { GuiProfiles } from '../Screens/Profiles';
import { PlayerStorage } from '../Utilities/Data';
import { ModName } from '../Utilities/ModDefinition';
import { deepMergeMatchingProperties } from '../Utilities/Other';
import { ColorsModule } from './Colors';
import { GlobalModule } from './Global';
import { IntegrationModule } from './Integration';

export class ProfilesModule extends BaseModule {
  get settings(): ProfilesSettingsModel {
    return super.settings as ProfilesSettingsModel;
  }

  get settingsScreen(): Subscreen | null {
    return GuiProfiles;
  }

  get defaultSettings() {
    return <ProfilesSettingsModel>{};
  }

  Load(): void {
    const profileDefaults: ProfileSaveModel = {
      GlobalModule: getModule<GlobalModule>('GlobalModule').defaultSettings,
      ColorsModule: getModule<ColorsModule>('ColorsModule').defaultSettings,
      IntegrationModule: getModule<IntegrationModule>('IntegrationModule').defaultSettings
    };
    
    for (let i = 0; i < 3; i++) {
      const profileIndex = i + 1;
      if (!PlayerStorage()?.ProfilesModule?.[profileIndex] || Object.keys(PlayerStorage()?.ProfilesModule?.[profileIndex]).length === 0) {
        Player[ModName].ProfilesModule[profileIndex] = {
          data: <ProfileSaveModel>{},
          name: ''
        };
      }
      
      if (Object.keys(Player[ModName].ProfilesModule[profileIndex].data).length > 0) Player[ModName].ProfilesModule[profileIndex].data = deepMergeMatchingProperties<ProfileSaveModel>(profileDefaults, Player[ModName].ProfilesModule[profileIndex].data);
    }
  }
}
