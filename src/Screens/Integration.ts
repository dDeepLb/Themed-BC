import { BaseSubscreen, getModule, getText } from 'bc-deeplib/deeplib';
import { IntegrationSettingsModel } from '../Models/Integration';
import { IntegrationModule } from '../Modules/Integration';
import { SettingElement } from 'bc-deeplib/base/elements_typings';
import { ColorsModule } from '../Modules/Colors';

export class GuiIntegration extends BaseSubscreen {
  get name(): string {
    return 'integration';
  }

  get icon(): string {
    return `${PUBLIC_URL}/images/stars.svg`;
  }

  get settings(): IntegrationSettingsModel {
    return super.settings as IntegrationSettingsModel;
  }

  get pageStructure(): SettingElement[][] {
    const defaultSettings = getModule<IntegrationModule>('IntegrationModule').defaultSettings;

    return [Object.entries(this.settings).map(([key, value]) => { 
      const typedKey = key as keyof IntegrationSettingsModel;

      return {
        id: `tmd-integration-${key}`,
        type: 'checkbox',
        label: getText(`integration.setting.${key}.name`),
        description: getText(`integration.setting.${key}.desc`),
        setElementValue: () => value ?? defaultSettings[typedKey],
        setSettingValue: (val) => {
          this.settings[typedKey] = val;
          ColorsModule.reloadTheme();
        }
      };
    })];
  }

  load(): void {
    super.load();
  }
}
