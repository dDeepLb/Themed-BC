import { advancedElement, BaseSubscreen, getModule, getText } from 'bc-deeplib/deeplib';
import { BaseColorsModel, ColorsSettingsModel, SpecialColorsModel } from '../Models/Colors';
import { ColorsModule } from '../Modules/Colors';
import { _Color } from '../Utilities/Color';
import { Input, SettingElement } from 'bc-deeplib/base/elements_typings';

export class GuiColors extends BaseSubscreen {
  settingsBackup: ColorsSettingsModel = {} as ColorsSettingsModel;

  get name(): string {
    return 'colors';
  }

  get icon(): string {
    return `${PUBLIC_URL}/images/palette.svg`;
  }

  get settings(): ColorsSettingsModel {
    return super.settings as ColorsSettingsModel;
  }

  get pageStructure(): SettingElement[][] {
    const defaultSettings = getModule<ColorsModule>('ColorsModule').defaultSettings;
    const isBaseMode = !Player.Themed.GlobalModule.doUseAdvancedColoring;
    const baseModeKey = (key: keyof BaseColorsModel) => ['main', 'accent', 'text'].includes(key);

    return [Object.entries(this.settings.base).map(([key, value]) => {
      const typedKey = key as keyof BaseColorsModel;

      return <Input>{
        id: key,
        type: 'color',
        label: getText(`colors.setting.${key}.name`),
        description: getText(`colors.setting.${key}.desc`),
        setElementValue: () => value ?? defaultSettings.base[typedKey],
        setSettingValue: () => value ?? defaultSettings.base[typedKey],
        disabled: isBaseMode && !baseModeKey(typedKey)
      };
    }).sort((a, b) => (a.disabled ? 1 : 0) - (b.disabled ? 1 : 0)) as Input[],
    Object.entries(this.settings.special).map(([key, value]) => {
      const typedKey = key as keyof SpecialColorsModel;

      return <Input>{
        id: key,
        type: 'color',
        label: getText(`colors.setting.${key}.name`),
        description: getText(`colors.setting.${key}.desc`),
        setElementValue: () => value ?? defaultSettings.special[typedKey],
        setSettingValue: () => value ?? defaultSettings.special[typedKey],
      };
    })];
  }

  load(): void {
    super.load();

    const typeToggleButton = advancedElement.createButton({
      id: 'tmd-inputs-type-toggle',
      onClick: () => {
        this.pageStructure.forEach((page) => {
          page.forEach((elm) => {
            if (elm.type == 'color' || elm.type == 'text') {
              const e = document.getElementById(elm.id);
              if (!e) return;
              const elementType = e.getAttribute('type');

              if (elementType == 'color') {
                e.setAttribute('type', 'text');
              } else {
                e.setAttribute('type', 'color');
              }
            }
          });
        });
      },
      image: `${PUBLIC_URL}/images/refresh.svg`,
      tooltip: getText('colors.button.change_input_type'),
      size: [90, 90],
    });

    const menu = document.getElementById('deeplib-nav-menu');
    if (menu) {
      ElementMenu.PrependItem(menu, typeToggleButton);
    }

    this.settingsBackup = CommonCloneDeep(this.settings);

    const settings = getModule<ColorsModule>('ColorsModule').settings;

    Object.entries(this.settings.base).forEach(([key]) => {
      (document.getElementById(key) as HTMLInputElement)?.addEventListener('input', function() {
        if(!_Color.isValidHex(this.value)) {
          this.setCustomValidity('Invalid hex color');
        } else {
          this.setCustomValidity('');
          const typedKey = key as keyof BaseColorsModel;
          settings.base[typedKey] = this.value;
        }
        
        getModule<ColorsModule>('ColorsModule').reloadTheme();
      });
    }),

    Object.entries(this.settings.special).forEach(([key]) => {
      (document.getElementById(key) as HTMLInputElement)?.addEventListener('input', function() {
        if(!_Color.isValidHex(this.value)) {
          this.setCustomValidity('Invalid hex color');
        } else {
          this.setCustomValidity('');
          const typedKey = key as keyof SpecialColorsModel;
          settings.special[typedKey] = this.value;
        }
        
        getModule<ColorsModule>('ColorsModule').reloadTheme();
      });
    });
  }

  exit(): void {
    const settings = getModule<ColorsModule>('ColorsModule').settings;

    Object.entries(this.settings.base).forEach(([key]) => {
      const input = document.getElementById(key) as HTMLInputElement;

      if (!input) return;

      if(!_Color.isValidHex(input.value)) {
        const typedKey = key as keyof BaseColorsModel;
        settings.base[typedKey] = this.settingsBackup.base[typedKey];
      }
    }),

    Object.entries(this.settings.special).forEach(([key]) => {
      const input = document.getElementById(key) as HTMLInputElement;

      if (!input) return;

      if(!_Color.isValidHex(input.value)) {
        const typedKey = key as keyof SpecialColorsModel;
        settings.special[typedKey] = this.settingsBackup.special[typedKey];
      }
    });

    super.exit();
  }
}
