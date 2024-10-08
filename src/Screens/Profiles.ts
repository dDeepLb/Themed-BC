import { GuiSubscreen } from '../Base/BaseSetting';
import { getModule } from '../Base/Modules';
import { ProfileEntryModel, ProfileNames, ProfileSaveModel, ProfilesSettingsModel } from '../Models/Profiles';
import { ColorsModule } from '../Modules/Colors';
import { getText } from '../Translation';
import { conWarn } from '../Utilities/Console';
import { PlayerStorage } from '../Utilities/Data';
import { ModName } from '../Utilities/ModDefinition';

export class GuiProfiles extends GuiSubscreen {
  private PreferenceText = '';
  private ProfileNames: ProfileNames = ['', '', ''];

  get name(): string {
    return 'Profiles';
  }

  get icon(): string {
    return 'Icons/Title.png';
  }

  get settings(): ProfilesSettingsModel {
    return super.settings as ProfilesSettingsModel;
  }

  tmpGlbl = GuiSubscreen.START_X;

  Load() {
    super.Load();

    for (let i = 0; i < 3; i++) {
      const profileIndex = i + 1;
      this.ProfileNames[i] = PlayerStorage()?.ProfilesModule?.[profileIndex]?.name ?? '';
    }

    CharacterAppearanceForceUpCharacter = Player.MemberNumber ?? -1;
  }

  Run() {
    MainCanvas.save();
    super.Run();
    MainCanvas.textAlign = 'left';

    for (let i = 0; i < 3; i++) {
      const profileIndex = i + 1;

      if (this.ProfileNames[i] === '')
        DrawText(getText('profiles.text.profile') + ` ${profileIndex}`, this.getXPos(profileIndex), this.getYPos(profileIndex), 'Black', 'Gray');
      if (this.ProfileNames[i] !== '')
        DrawText(this.ProfileNames[i] as string, this.getXPos(profileIndex), this.getYPos(profileIndex), 'Black', 'Gray');

      this.drawButton('profiles.button.save', 'white', profileIndex, 250);
      this.drawButton('profiles.button.load', 'white', profileIndex, 500);
      this.drawButton('profiles.button.delete', 'IndianRed', profileIndex, 750);
    }

    if (this.PreferenceText)
      DrawText(this.PreferenceText, GuiSubscreen.START_X + 250, GuiSubscreen.START_Y - GuiSubscreen.Y_MOD, 'Black', 'Gray');

    MainCanvas.restore();
  }

  Click() {
    super.Click();

    for (let i = 0; i < 3; i++) {
      const profileIndex = i + 1;

      this.handleProfilesSaving(profileIndex);
      this.handleProfilesLoading(profileIndex);
      this.handleProfilesDeleting(profileIndex);
    }
  }

  Exit() {
    CharacterAppearanceForceUpCharacter = -1;
    CharacterLoadCanvas(Player);
    this.PreferenceText = '';
    super.Exit();
  }

  saveProfile(profileId: number, profileName: string) {
    if (profileId < 1 || profileId > 3) {
      conWarn(`Invalid profile id ${profileId}`);
      return false;
    }

    if (!Object.keys(PlayerStorage()?.ProfilesModule?.[profileId]).length) {
      Player[ModName].ProfilesModule[profileId] = <ProfileEntryModel>{};
    }

    const saveData: ProfileSaveModel = {
      GlobalModule: PlayerStorage().GlobalModule,
      ColorsModule: PlayerStorage().ColorsModule,
      IntegrationModule: PlayerStorage().IntegrationModule
    };

    Player[ModName].ProfilesModule[profileId] = {
      name: profileName,
      data: saveData
    };

    return true;
  }

  loadProfile(profileId: number) {
    if (profileId < 1 || profileId > 3) {
      conWarn(`Invalid profile id ${profileId}`);
      return false;
    }

    if (Object.keys(PlayerStorage()?.ProfilesModule?.[profileId]).length < 1) {
      return false;
    }

    const data = PlayerStorage().ProfilesModule[profileId].data;
    if (Object.keys(data).length < 1) {
      return false;
    }

    if (data) {
      Player[ModName].GlobalModule = data.GlobalModule;
      Player[ModName].ColorsModule = data.ColorsModule;
      Player[ModName].IntegrationModule = data.IntegrationModule;
    }

    return true;
  }

  deleteProfile(profileId: number) {
    if (profileId < 1 || profileId > 3) {
      conWarn(`Invalid profile id ${profileId}`);
      return false;
    }

    if (!Object.keys(PlayerStorage()?.ProfilesModule?.[profileId]).length) {
      return false;
    }

    Player[ModName].ProfilesModule[profileId] = <ProfileEntryModel>{};
    return true;
  }

  handleProfilesSaving(profileIndex: number) {
    const formerIndex = profileIndex - 1;
    if (MouseIn(this.getXPos(profileIndex) + 250, this.getYPos(profileIndex) - 32, 200, 64)) {
      const promptedName = prompt(getText('profiles.prompt'));

      if (promptedName === null) return;
      this.ProfileNames[formerIndex] = promptedName;
      if (this.ProfileNames[formerIndex] === '') {
        this.saveProfile(profileIndex, '');
        this.PreferenceText = `${getText('profiles.text.profile')} ${profileIndex} ${getText('profiles.text.has_been_saved')}`;
      }

      if (this.ProfileNames[formerIndex] !== '') {
        this.saveProfile(profileIndex, this.ProfileNames[formerIndex] as string);
        this.PreferenceText = `${getText('profiles.text.profile')} "${this.ProfileNames[formerIndex]}" ${getText(
          'profiles.text.has_been_saved'
        )}`;
      }

      return;
    }
  }

  handleProfilesLoading(profileIndex: number) {
    const formerIndex = profileIndex - 1;
    if (MouseIn(this.getXPos(profileIndex) + 500, this.getYPos(profileIndex) - 32, 200, 64)) {
      if (!this.loadProfile(profileIndex)) {
        this.PreferenceText = `${getText('profiles.text.profile')} ${profileIndex} ${getText('profiles.text.needs_to_be_saved')}`;
        return;
      }

      if (this.ProfileNames[formerIndex] === '')
        this.PreferenceText = `${getText('profiles.text.profile')} ${profileIndex} ${getText('profiles.text.has_been_loaded')}`;
      if (this.ProfileNames[formerIndex] !== '')
        this.PreferenceText = `${getText('profiles.text.profile')} "${this.ProfileNames[formerIndex]}" ${getText(
          'profiles.text.has_been_loaded'
        )}`;

      getModule<ColorsModule>('ColorsModule').reloadTheme();

      return;
    }
  }

  handleProfilesDeleting(profileIndex: number) {
    const formerIndex = profileIndex - 1;
    if (MouseIn(this.getXPos(profileIndex) + 750, this.getYPos(profileIndex) - 32, 200, 64)) {
      if (!this.ProfileNames[formerIndex]) return;

      if (this.deleteProfile(profileIndex)) {
        if (this.ProfileNames[formerIndex] === '') {
          this.PreferenceText = `${getText('profiles.text.profile')} ${profileIndex} ${getText('profiles.text.has_been_deleted')}`;
          return;
        }
        if (this.ProfileNames[formerIndex] !== '') {
          this.PreferenceText = `${getText('profiles.text.profile')} "${this.ProfileNames[formerIndex]}" ${getText(
            'profiles.text.has_been_deleted'
          )}`;
          this.ProfileNames[formerIndex] = '';
          return;
        }
      }

      if (!this.deleteProfile(profileIndex)) {
        this.PreferenceText = `${getText('profiles.text.profile')} ${profileIndex} ${getText('profiles.text.not_saved_or_already_deleted')}`;
        return;
      }
      return;
    }
  }
}
