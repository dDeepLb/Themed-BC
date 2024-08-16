import Color from 'color';
import { BaseModule } from '../Base/BaseModule';
import { getModule } from '../Base/Modules';
import { Subscreen } from '../Base/SettingDefinitions';
import { ColorsSettingsModel } from '../Models/Colors';
import { GuiColors } from '../Screens/Colors';
import { _Color } from '../Utilities/Color';
import { _Image } from '../Utilities/Drawing';
import { changeModColors } from '../Utilities/Integration';
import { deepMergeMatchingProperties } from '../Utilities/Other';
import { BcStyle } from '../Utilities/Style';
import { GuiRedrawModule } from './GuiRedraw';

const primaryColor = Color('#202020');
const elementColor = primaryColor.lighten(0.2);
const accentColor = Color('#440171');
const textColor = Color('#cccccc');
const specialColors = {
  equipped: Color('#ADD8E6'),
  disabled: Color('#808080'),
  crafted: Color('#FFFFAF'),
  blocked: Color('#b81010'),
  limited: Color('#ffA500'),
  allowed: Color('#00FF00'),
  friendRoom: Color('#00FF00'),
};

export class ColorsModule extends BaseModule {
  get settingsScreen(): Subscreen | null {
    return GuiColors;
  }

  get settings(): ColorsSettingsModel {
    return super.settings as ColorsSettingsModel;
  }

  set settings(val) {
    super.settings = val;
  }

  get defaultSettings() {
    return <ColorsSettingsModel>{
      base: {
        main: primaryColor.hex(),
        accent: accentColor.hex(),
        text: textColor.hex(),
      },
      advanced: {
        main: primaryColor.hex(),
        element: elementColor.hex(),
        elementHover: elementColor.lighten(0.2).hex(),
        elementDisabled: elementColor.darken(0.2).hex(),
        elementHint: elementColor.lighten(0.2).hex(),
        accent: accentColor.hex(),
        accentHover: accentColor.lighten(0.2).hex(),
        accentDisabled: accentColor.darken(0.2).hex(),
        text: textColor.hex(),
      },
      special: {
        equipped: specialColors.equipped.hex(),
        disabled: specialColors.disabled.hex(),
        crafted: specialColors.crafted.hex(),
        blocked: specialColors.blocked.hex(),
        limited: specialColors.limited.hex(),
        allowed: specialColors.allowed.hex(),
        friendRoom: specialColors.friendRoom.hex(),
      },
    };
  }

  Load(): void {
    this.settings = deepMergeMatchingProperties(this.defaultSettings, this.settings) as ColorsSettingsModel;
  }

  reloadTheme(): void {
    _Color.composeRoot();
    BcStyle.reloadAll();
    changeModColors();
    _Image.clearCache();
    getModule<GuiRedrawModule>('GuiRedrawModule').toggleGuiPatches();
  }
}
