import { BaseSubscreen, getModule, getText } from 'bc-deeplib/deeplib';
import { GlobalSettingsModel } from '../Models/Global';
import { GlobalModule } from '../Modules/Global';
import { SettingElement } from 'bc-deeplib/base/elements_typings';
import { ColorsModule } from '../Modules/Colors';

export class GuiGlobal extends BaseSubscreen {
  get name(): string {
    return 'global';
  }

  get icon(): string {
    return `${PUBLIC_URL}/images/cog.svg`;
  }

  get settings(): GlobalSettingsModel {
    return super.settings as GlobalSettingsModel;
  }

  get pageStructure(): SettingElement[][] {
    const defaultSettings = getModule<GlobalModule>('GlobalModule').defaultSettings;

    return [Object.entries(this.settings).map(([key, value]) => {
      const typedKey = key as keyof GlobalSettingsModel;
      return {
        id: `tmd-global-${key}`,
        type: 'checkbox',
        label: getText(`settings.setting.${typedKey}.name`),
        description: getText(`settings.setting.${typedKey}.desc`),
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
