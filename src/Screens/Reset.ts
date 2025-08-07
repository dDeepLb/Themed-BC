import { BaseSubscreen, getText, modules } from 'bc-deeplib/deeplib';
import { _Color } from '../Utilities/Color';
import { settingsReset } from '../Utilities/Data';
import { BcStyle } from '../Utilities/Style';

export class GuiReset extends BaseSubscreen {
  get name(): string {
    return 'reset';
  }

  get icon(): string {
    return '';
  }

  private allowedConfirmTime: number | null = 0;

  load() {
    this.allowedConfirmTime = Date.now() + 5_000;
    super.load();
  }

  run() {
    MainCanvas.save();
    MainCanvas.textAlign = 'center';

    DrawText(getText('reset.label.perma_reset_of_mod_data'), 1000, 125, 'Black');

    DrawText(getText('reset.label.warning'), 1000, 225, 'Black', 'Black');
    DrawText(getText('reset.label.if_u_confirm_perma_reset'), 1000, 325, 'Black');

    DrawText(getText('reset.label.youll_able_to_use_mod'), 1000, 550, 'Gray');

    DrawText(getText('reset.label.action_cannot_be_undone'), 1000, 625, 'Red', 'Black');

    const now = Date.now();
    if (now < (this.allowedConfirmTime ?? 0)) {
      DrawButton(
        300,
        720,
        200,
        80,
        `${getText('reset.button.confirm')} (${Math.floor((this.allowedConfirmTime ?? 0 - now) / 1000)})`,
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

  click() {
    if (this.allowedConfirmTime === null) return;

    if (MouseIn(300, 720, 200, 80) && Date.now() >= this.allowedConfirmTime) return this.Confirm();
    if (MouseIn(1520, 720, 200, 80)) return this.exit();
  }

  Confirm() {
    this.allowedConfirmTime = null;

    settingsReset();
    
    for (const module of modules()) {
      module.registerDefaultSettings();
    }

    _Color.composeRoot();
    BcStyle.reloadAll();

    this.setSubscreen(null);
    PreferenceSubscreenExtensionsClear();
  }
}
