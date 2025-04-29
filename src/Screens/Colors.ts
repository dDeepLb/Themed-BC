import { Input } from '../../.types/setting';
import { GuiSubscreen } from '../Base/BaseSetting';
import { getModule } from '../Base/Modules';
import { BaseColorsModel, ColorsSettingsModel } from '../Models/Colors';
import { ColorsModule } from '../Modules/Colors';
import { getText } from '../Translation';
import { _Color } from '../Utilities/Color';

export class GuiColors extends GuiSubscreen {
  settingsBackup: ColorsSettingsModel;

  get name(): string {
    return 'Colors';
  }

  get icon(): string {
    return 'Icons/ColorChange.png';
  }

  get settings(): ColorsSettingsModel {
    return super.settings as ColorsSettingsModel;
  }

  get multipageStructure(): Input[][] {
    const defaultSettings = getModule<ColorsModule>('ColorsModule').defaultSettings;
    const isBaseMode = !Player.Themed.GlobalModule.doUseAdvancedColoring;
    const baseModeKey = (key: keyof BaseColorsModel) => ['main', 'accent', 'text'].includes(key);

    return [Object.entries(this.settings.base).map(([key, value]: [keyof BaseColorsModel, string]) => ({
      type: 'color',
      id: key,
      label: `colors.setting.${key}.name`,
      description: `colors.setting.${key}.desc`,
      setting: () => value ?? defaultSettings.base[key],
      disabled: isBaseMode && !baseModeKey(key)
    })).sort((a, b) => (a.disabled ? 1 : 0) - (b.disabled ? 1 : 0)) as Input[],
    Object.entries(this.settings.special).map(([key, value]) => ({
      type: 'color',
      id: key,
      label: `colors.setting.${key}.name`,
      description: `colors.setting.${key}.desc`,
      setting: () => value ?? defaultSettings.special[key],
    }))];
  }

  Load(): void {
    super.Load();

    this.settingsBackup = CommonCloneDeep(this.settings);

    const settings = getModule<ColorsModule>('ColorsModule').settings;

    Object.entries(this.settings.base).forEach(([key]) => {
      (document.getElementById(key) as HTMLInputElement).addEventListener('input', function(ev) {
        if(!_Color.isValidHex(this.value)) {
          this.setCustomValidity('Invalid hex color');
        } else {
          this.setCustomValidity('');
          settings.base[key] = this.value;
        }
        
        getModule<ColorsModule>('ColorsModule').reloadTheme();
      });
    }),

    Object.entries(this.settings.special).forEach(([key]) => {
      (document.getElementById(key) as HTMLInputElement).addEventListener('input', function(ev) {
        if(!_Color.isValidHex(this.value)) {
          this.setCustomValidity('Invalid hex color');
        } else {
          this.setCustomValidity('');
          settings.special[key] = this.value;
        }
        
        getModule<ColorsModule>('ColorsModule').reloadTheme();
      });
    });
  }

  Run(): void {
    DrawButton(1495, 75, 90, 90, '', 'White', 'Icons/Swap.png', getText('colors.button.change_input_type'));
    super.Run();
  }

  Click(): void {
    if (MouseIn(1495, 75, 90, 90)) {
      this.multipageStructure.forEach((page) => {
        page.forEach((elm) => {
          if (elm.type == 'color' || elm.type == 'text') {
            const e = document.getElementById(elm.id);
            const elementType = e.getAttribute('type');

            if (elementType == 'color') {
              e.setAttribute('type', 'text');
            } else {
              e.setAttribute('type', 'color');
            }
          }
        });
      });
      return;
    }

    super.Click();
  }

  Exit(): void {
    const settings = getModule<ColorsModule>('ColorsModule').settings;

    Object.entries(this.settings.base).forEach(([key]) => {
      const input = document.getElementById(key) as HTMLInputElement;

      if(!_Color.isValidHex(input.value)) {
        settings.base[key] = this.settingsBackup.base[key];
      }
    }),

    Object.entries(this.settings.special).forEach(([key]) => {
      const input = document.getElementById(key) as HTMLInputElement;

      if(!_Color.isValidHex(input.value)) {
        settings.special[key] = this.settingsBackup.special[key];
      }
    });

    super.Exit();
  }
}
