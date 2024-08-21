import { Setting } from '../../.types/setting';
import { GuiSubscreen } from '../Base/BaseSetting';
import { getModule } from '../Base/Modules';
import { IntegrationSettingsModel } from '../Models/Integration';
import { IntegrationModule } from '../Modules/Integration';

export class GuiIntegration extends GuiSubscreen {
  get name(): string {
    return 'Integration';
  }

  get icon(): string {
    return 'Icons/Scripts.png';
  }

  get settings(): IntegrationSettingsModel {
    return super.settings as IntegrationSettingsModel;
  }

  get structure(): Setting[] {
    const defaultSettings = getModule<IntegrationModule>('IntegrationModule').defaultSettings;

    return Object.entries(this.settings).map(([key, value]) => ({
      type: 'checkbox',
      label: `integration.setting.${key}.name`,
      description: `integration.setting.${key}.desc`,
      setting: () => value ?? defaultSettings[key],
      setSetting: (val) => (this.settings[key] = val)
    }));
  }

  Load(): void {
    super.Load();
  }
}
