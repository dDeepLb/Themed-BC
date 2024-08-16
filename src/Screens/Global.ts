import { Checkbox, Setting } from '../../.types/setting';
import { GuiSubscreen } from '../Base/BaseSetting';
import { GlobalSettingsModel } from '../Models/Global';

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
    const struct: Checkbox[] = [];
    Object.keys(this.settings).forEach((key) => {
      struct.push({
        type: 'checkbox',
        label: `settings.setting.${key}.name`,
        description: `settings.setting.${key}.desc`,
        setting: () => this.settings[key] ?? true,
        setSetting: (val) => (this.settings[key] = val)
      });
    });
    return struct;
  }

  Load(): void {
    super.Load();
  }
}
