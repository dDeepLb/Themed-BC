import { GuiSubscreen } from '../Base/BaseSetting';
import { getModule } from '../Base/Modules';
import { getText } from '../Translation';
import { _Color } from '../Utilities/Color';
import { settingsReset } from '../Utilities/Data';
import { BcStyle } from '../Utilities/Style';

export class GuiReset extends GuiSubscreen {
  get name(): string {
    return 'Reset';
  }

  get icon(): string {
    return '';
  }

  private allowedConfirmTime: number | null = 0;

  Load() {
    this.allowedConfirmTime = Date.now() + 5_000;
    super.Load();
  }

  Run() {
    GuiSubscreen.POS_BAK = GuiSubscreen.START_X;
    GuiSubscreen.START_X = 180;

    MainCanvas.save();
    MainCanvas.textAlign = 'center';

    DrawText(getText('reset.label.perma_reset_of_mod_data'), 1000, 125, 'Black');

    DrawText(getText('reset.label.warning'), 1000, 225, 'Black', 'Black');
    DrawText(getText('reset.label.if_u_confirm_perma_reset'), 1000, 325, 'Black');

    DrawText(getText('reset.label.youll_able_to_use_mod'), 1000, 550, 'Gray');

    DrawText(getText('reset.label.action_cannot_be_undone'), 1000, 625, 'Red', 'Black');

    const now = Date.now();
    if (now < this.allowedConfirmTime) {
      DrawButton(
        300,
        720,
        200,
        80,
        `${getText('reset.button.confirm')} (${Math.floor((this.allowedConfirmTime - now) / 1000)})`,
        '#ddd',
        undefined,
        undefined,
        true
      );
    } else {
      DrawButton(300, 720, 200, 80, getText('reset.button.confirm'), 'White');
    }

    DrawButton(1520, 720, 200, 80, getText('reset.button.cancel'), 'White');

    MainCanvas.restore();
  }

  Click() {
    if (this.allowedConfirmTime === null) return;

    if (MouseIn(300, 720, 200, 80) && Date.now() >= this.allowedConfirmTime) return this.Confirm();
    if (MouseIn(1520, 720, 200, 80)) return this.Exit();
  }

  Confirm() {
    this.allowedConfirmTime = null;

    settingsReset();
    getModule('ColorsModule').registerDefaultSettings();

    _Color.composeRoot();
    BcStyle.reloadAll();

    this.setSubscreen(null);
    PreferenceSubscreenExtensionsClear();
  }
}
