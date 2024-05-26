import { BaseModule } from '../Base/BaseModule';
import { getModule } from '../Base/Modules';
import { Subscreen } from '../Base/SettingDefinitions';
import { ColorsSettingsModel } from '../Models/Colors';
import { GuiColors } from '../Screens/Colors';
import { _Color } from '../Utilities/Color';
import { _Image } from '../Utilities/Drawing';
import { changeModColors } from '../Utilities/Integration';
import { BcStyle } from '../Utilities/Style';
import { GuiRedrawModule } from './GuiRedraw';

export class ColorsModule extends BaseModule {
  get settingsScreen(): Subscreen | null {
    return GuiColors;
  }

  get settings(): ColorsSettingsModel {
    return super.settings as ColorsSettingsModel;
  }

  get defaultSettings() {
    return <ColorsSettingsModel>{
      primaryColor: '#202020',
      accentColor: '#440171',
      textColor: '#ccc'
    };
  }

  reloadTheme(): void {
    _Color.composeRoot();
    BcStyle.reloadAll();
    changeModColors();
    _Image.clearCache();
    getModule<GuiRedrawModule>('GuiRedrawModule').toggleGuiPatches();
  }
}
