import { Setting } from '../../.types/setting';
import { GuiSubscreen } from '../Base/BaseSetting';
import { getModule } from '../Base/Modules';
import { GlobalSettingsModel } from '../Models/Global';
import { GlobalModule } from '../Modules/Global';

export class GuiGlobal extends GuiSubscreen {
  get name(): string {
    return 'Global';
  }

  get icon(): string {
    return 'Icons/Preference.png';
  }

  get settings(): GlobalSettingsModel {
    return super.settings as GlobalSettingsModel;
  }

  get structure(): Setting[] {
    const defaultSettings = getModule<GlobalModule>('GlobalModule').defaultSettings;

    return Object.entries(this.settings).map(([key, value]) => ({
      type: 'checkbox',
      label: `settings.setting.${key}.name`,
      description: `settings.setting.${key}.desc`,
      setting: () => value ?? defaultSettings[key],
      setSetting: (val) => (this.settings[key] = val)
    }));
  }

  Load(): void {
    super.Load();
  }
}
