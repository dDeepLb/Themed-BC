import { Setting } from '../../.types/setting';
import { GuiSubscreen } from '../Base/BaseSetting';
import { IntegrationSettingsModel } from '../Models/Integration';

export class GuiIntegration extends GuiSubscreen {
  get name(): string {
    return 'Integration';
  }

  get icon(): string {
    return 'Icons/Preference.png';
  }

  get settings(): IntegrationSettingsModel {
    return super.settings as IntegrationSettingsModel;
  }

  get structure(): Setting[] {
    return [
      <Setting>{
        type: 'checkbox',
        label: 'integration.setting.BC.name',
        description: 'integration.setting.BC.desc',
        setting: () => this.settings?.BC ?? true,
        setSetting: (val) => (this.settings.BC = val)
      },
      <Setting>{
        type: 'checkbox',
        label: 'integration.setting.BC_Chat.name',
        description: 'integration.setting.BC_Chat.desc',
        setting: () => this.settings?.BC_Chat ?? true,
        setSetting: (val) => (this.settings.BC_Chat = val)
      },
      <Setting>{
        type: 'checkbox',
        label: 'integration.setting.BC_FriendList.name',
        description: 'integration.setting.BC_FriendList.desc',
        setting: () => this.settings?.BC_FriendList ?? true,
        setSetting: (val) => (this.settings.BC_FriendList = val)
      },
      <Setting>{
        type: 'checkbox',
        label: 'integration.setting.BC_Other.name',
        description: 'integration.setting.BC_Other.desc',
        setting: () => this.settings?.BC_Other ?? true,
        setSetting: (val) => (this.settings.BC_Other = val)
      },
      <Setting>{
        type: 'checkbox',
        label: 'integration.setting.FBC.name',
        description: 'integration.setting.FBC.desc',
        setting: () => this.settings?.FBC ?? true,
        setSetting: (val) => (this.settings.FBC = val)
      },
      <Setting>{
        type: 'checkbox',
        label: 'integration.setting.FUSAM.name',
        description: 'integration.setting.FUSAM.desc',
        setting: () => this.settings?.FUSAM ?? true,
        setSetting: (val) => (this.settings.FUSAM = val)
      },
      <Setting>{
        type: 'checkbox',
        label: 'integration.setting.TTS.name',
        description: 'integration.setting.TTS.desc',
        setting: () => this.settings?.TTS ?? true,
        setSetting: (val) => (this.settings.TTS = val)
      }
    ];
  }

  Load(): void {
    super.Load();
  }
}
