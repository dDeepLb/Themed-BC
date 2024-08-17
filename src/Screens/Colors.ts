import { Setting } from '../../.types/setting';
import { GuiSubscreen } from '../Base/BaseSetting';
import { getModule } from '../Base/Modules';
import { ColorsSettingsModel } from '../Models/Colors';
import { ColorsModule } from '../Modules/Colors';
import { getText } from '../Translation';

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
    const defaultSettings = getModule<ColorsModule>('ColorsModule').defaultSettings;
    const isAdvMode = Player.Themed.GlobalModule.doUseAdvancedColoring;
    const settings = isAdvMode ? this.settings.advanced : this.settings.base;
    const modeDefaults = isAdvMode ? defaultSettings.advanced : defaultSettings.base;

    return [Object.entries(settings).map(([key, value]) => ({
      type: 'color',
      id: key,
      label: `colors.setting.${key}.name`,
      description: `colors.setting.${key}.desc`,
      setting: () => value ?? modeDefaults[key],
      setSetting: (val) => (settings[key] = val)
    })),
    Object.entries(this.settings.special).map(([key, value]) => ({
      type: 'color',
      id: key,
      label: `colors.setting.${key}.name`,
      description: `colors.setting.${key}.desc`,
      setting: () => value ?? defaultSettings.special[key],
      setSetting: (val) => (settings[key] = val)
    }))];
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
}
