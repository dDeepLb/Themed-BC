import { advancedElement, BaseSubscreen, getModule, getText, layoutElement, modStorage } from 'bc-deeplib/deeplib';
import { ProfileEntryModel, ProfilesSettingsModel } from '../Models/Profiles';
import { ColorsModule } from '../Modules/Colors';
import { conWarn } from '../Utilities/Console';
import { ModName } from '../Utilities/ModDefinition';
import { BaseColorsModel } from '../Models/Colors';

export class GuiProfiles extends BaseSubscreen {

  get name(): string {
    return 'profiles';
  }

  get icon(): string {
    return `${PUBLIC_URL}/images/users_group.svg`;
  }

  get settings(): ProfilesSettingsModel {
    return super.settings as ProfilesSettingsModel;
  }

  load() {
    super.load();

    const profilesContainer = ElementCreate({
      tag: 'div',
      classList: ['tmd-profiles-container'],
      attributes: {
        id: 'tmd-profiles-container'
      },
      parent: layoutElement.getSubscreenDiv()
    });

    for (let i = 0; i < 3; i++) {
      const profileId = i + 1;
      const profileName = this.settings[profileId].name || getText('profiles.text.profile') + ` ${profileId}`;

      const profileElement = ElementCreate({
        tag: 'div',
        attributes: {
          id: `tmd-profile-${profileId}`,
        },
        classList: ['tmd-profile'],
        children: [
          advancedElement.createLabel({
            id: `tmd-profile-label-${profileId}`,
            label: profileName
          }),
          this.createColorShowcase(profileId),
          {
            tag: 'div',
            classList: ['tmd-profile-buttons'],
            children: [
              advancedElement.createButton({
                id: `tmd-profiles-profile-save-${profileId}`,
                onClick: () => this.handleProfilesSaving(profileId),
                label: getText('profiles.button.save'),
              }),

              advancedElement.createButton({
                id: `tmd-profiles-profile-load-${profileId}`,
                onClick: () => this.handleProfilesLoading(profileId),
                label: getText('profiles.button.load'),
                htmlOptions: {
                  options: {
                    disabled: !this.profileExists(profileId)
                  }
                }
              }),

              advancedElement.createButton({
                id: `tmd-profiles-profile-delete-${profileId}`,
                onClick: () => this.handleProfilesDeleting(profileId),
                label: getText('profiles.button.delete'),
                htmlOptions: {
                  options: {
                    disabled: !this.profileExists(profileId)
                  }
                }
              }),
            ]
          }
        ]
      });

      profilesContainer.appendChild(profileElement);
    }

    CharacterAppearanceForceUpCharacter = Player.MemberNumber ?? -1;
  }

  resize(onLoad?: boolean): void {
    super.resize(onLoad);
  }

  private handleProfilesSaving(profileId: number): void {
    if (!this.profileCanBeSaved(profileId)) return;

    const name = prompt(getText('profiles.prompt'));
    if (name === null) return;

    const storage = modStorage.playerStorage;
    const profile = this.settings[profileId];

    if (!profile || Object.keys(profile).length === 0) {
      this.settings[profileId] = {} as ProfileEntryModel;
    }

    this.settings[profileId] = {
      name: name,
      data: {
        GlobalModule: storage.GlobalModule,
        ColorsModule: storage.ColorsModule,
        IntegrationModule: storage.IntegrationModule,
      },
    };

    const display = name ? `"${name}"` : profileId;
    ToastManager.success(`${getText('profiles.text.profile')} ${display} ${getText('profiles.text.has_been_saved')}`);

    this.updateProfileLabel(profileId);
    this.updateProfileButtons(profileId);
    this.updateProfileColorShowcase(profileId);
  }

  private handleProfilesLoading(profileId: number): void {
    if (!this.profileExists(profileId)) {
      ToastManager.error(`${getText('profiles.text.profile')} ${profileId} ${getText('profiles.text.doesnt_exist')}`);
      return;
    }

    const data = modStorage.playerStorage.ProfilesModule[profileId].data;

    Player[ModName] = {
      ...Player[ModName],
      GlobalModule: data.GlobalModule,
      ColorsModule: data.ColorsModule,
      IntegrationModule: data.IntegrationModule,
    };

    const name = this.settings[profileId].name;
    const display = name ? `"${name}"` : profileId;
    ToastManager.success(`${getText('profiles.text.profile')} ${display} ${getText('profiles.text.has_been_loaded')}`);

    getModule<ColorsModule>('ColorsModule').reloadTheme();
  }

  private handleProfilesDeleting(profileId: number): void {
    if (!this.profileExists(profileId)) {
      ToastManager.info(`${getText('profiles.text.profile')} ${profileId} ${getText('profiles.text.doesnt_exist')}`);
      return;
    }

    const name = this.settings[profileId].name;

    Player[ModName].ProfilesModule[profileId] = {
      name: '',
      data: {}
    } as ProfileEntryModel;

    const display = name ? `"${name}"` : profileId;
    ToastManager.success(`${getText('profiles.text.profile')} ${display} ${getText('profiles.text.has_been_deleted')}`);

    this.updateProfileLabel(profileId);
    this.updateProfileButtons(profileId);
    this.updateProfileColorShowcase(profileId);
  }

  private updateProfileButtons(profileId: number): void {
    const profileSaveButton = ElementWrap(`tmd-profiles-profile-save-${profileId}`) as HTMLButtonElement;
    const profileLoadButton = ElementWrap(`tmd-profiles-profile-load-${profileId}`) as HTMLButtonElement;
    const profileDeleteButton = ElementWrap(`tmd-profiles-profile-delete-${profileId}`) as HTMLButtonElement;

    if (!profileSaveButton || !profileLoadButton || !profileDeleteButton) return;

    profileSaveButton.disabled = !this.profileCanBeSaved(profileId);
    profileLoadButton.disabled = !this.profileExists(profileId);
    profileDeleteButton.disabled = !this.profileExists(profileId);
  }

  private updateProfileLabel(profileId: number): void {
    const name = this.settings[profileId].name;
    const display = name ? name : `${getText('profiles.text.profile')} ${profileId}`;
    const profileLabel = ElementWrap(`tmd-profile-label-${profileId}`);
    if (!profileLabel) return;
    profileLabel.textContent = display;
  }

  private updateProfileColorShowcase(profileId: number): void {
    const colorShowcase = this.createColorShowcase(profileId);

    if (colorShowcase === null) {
      ElementWrap(`tmd-profile-color-showcase-${profileId}`)?.remove();
    } else {
      const label = ElementWrap(`tmd-profile-label-${profileId}`);
      if (!label) return;
      ElementWrap(`tmd-profile-color-showcase-${profileId}`)?.remove();
      label.after(colorShowcase);
    }
  }

  private createColorShowcase(profileId: number): HTMLDivElement | null {
    const exists = this.profileExists(profileId);

    if (!exists) return null;

    const colors = Object.entries(this.settings[profileId].data.ColorsModule.base);

    return ElementCreate({
      tag: 'div',
      classList: ['tmd-profile-color-showcase'],
      attributes: {
        id: `tmd-profile-color-showcase-${profileId}`
      },
      children:
        colors.map(([key, value]) => {
          const isBaseMode = !this.settings[profileId].data.GlobalModule.doUseAdvancedColoring;
          const baseModeKey = (key: keyof BaseColorsModel) => ['main', 'accent', 'text'].includes(key);

          if (isBaseMode && !baseModeKey(key as keyof BaseColorsModel)) {
            return;
          }

          return advancedElement.createButton({
            id: `tmd-profile-color-showcase-${profileId}-${key}`,
            tooltip: getText(`colors.setting.${key}.name`),
            htmlOptions: {
              htmlOptions: {
                button: {
                  style: {
                    '--background-color': value
                  },
                  classList: ['tmd-profile-color-showcase-button']
                }
              },
              options: {
                noStyling: true
              }
            }
          });
        })
    });
  }

  private isValidProfileId(id: number): boolean {
    if (id < 1 || id > 3) {
      conWarn(`Invalid profile id ${id}`);
      return false;
    }

    return true;
  }

  private profileCanBeSaved(profileId: number): boolean {
    if (!this.isValidProfileId(profileId)) return false;

    return true;
  }

  private profileExists(profileId: number): boolean {
    if (!this.isValidProfileId(profileId)) return false;

    const data = modStorage.playerStorage?.ProfilesModule?.[profileId]?.data || {};

    if (!data || Object.keys(data).length === 0) return false;

    return true;
  }
}
