import { Input, Setting } from '../../.types/setting';
import { GuiSubscreen } from '../Base/BaseSetting';
import { ColorsSettingsModel } from '../Models/Colors';
import { GlobalSettingsModel } from '../Models/Global';
import { getText } from '../Translation';
import { _Image } from '../Utilities/Drawing';
import { _Style } from '../Utilities/Style';

export class GuiColors extends GuiSubscreen {
  get name(): string {
    return 'Colors';
  }

  get icon(): string {
    return 'Icons/ColorChange.png';
  }

  get settings(): ColorsSettingsModel {
    return super.settings as ColorsSettingsModel;
  }

  get multipageStructure(): Setting[][] {
    return [
      [
        <Input>{
          type: 'color',
          id: 'primaryColor',
          label: 'colors.setting.primaryColor.name',
          description: 'colors.setting.primaryColor.desc',
          setting: () => this.settings?.primaryColor ?? '',
          setSetting: (val) => (this.settings.primaryColor = val)
        },
        <Input>{
          type: 'color',
          id: 'accentColor',
          label: 'colors.setting.accentColor.name',
          description: 'colors.setting.accentColor.desc',
          setting: () => this.settings?.accentColor ?? '',
          setSetting: (val) => (this.settings.accentColor = val)
        },
        <Input>{
          type: 'color',
          id: 'textColor',
          label: 'colors.setting.textColor.name',
          description: 'colors.setting.textColor.desc',
          setting: () => this.settings?.textColor ?? '',
          setSetting: (val) => (this.settings.textColor = val)
        }
      ]
    ];
  }

  Run(): void {
    DrawButton(1715, 75, 90, 90, '', 'White', 'Icons/Reset.png', getText('colors.button.change_input_type'));
    super.Run();
  }

  Click(): void {
    if (MouseIn(1715, 75, 90, 90)) {
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
    }

    super.Click();
  }
}
