import { GuiSubscreen } from "../Base/BaseSetting";
import { dataErase } from "../Utilities/Data";
import { getText } from "../Translation";

export class GuiReset extends GuiSubscreen {
  get name(): string {
    return "Reset";
  }

  get icon(): string {
    return "";
  }

  private allowedConfirmTime: number | null = 0;

  private doResetForManualSettings: boolean = false;

  private doResetSettings: boolean = true;
  private doResetResponses: boolean = true;
  private doResetProfiles: boolean = false;

  Load() {
    this.allowedConfirmTime = Date.now() + 10_000;
    super.Load();
  }

  Run() {
    GuiSubscreen.POS_BAK = GuiSubscreen.START_X;
    GuiSubscreen.TEXT_ALIGN_BAK = MainCanvas.textAlign;

    GuiSubscreen.START_X = 180;
    MainCanvas.textAlign = "center";

    DrawText(getText(`reset.label.perma_reset_of_bcr_data`), 1000, 125, "Black");

    DrawText(getText(`reset.label.warning`), 1000, 225, "Black", "Black");
    DrawText(getText(`reset.label.if_u_confirm_perma_reset`), 1000, 325, "Black");

    DrawText(getText(`reset.label.youll_able_to_use_bcr`), 1000, 375, "Gray");

    DrawText(getText(`reset.label.action_cannot_be_undone`), 1000, 425, "Red", "Black");

    const now = Date.now();
    if (now < this.allowedConfirmTime) {
      DrawButton(
        1000,
        690,
        200,
        80,
        `${getText("reset.button.confirm")} (${Math.floor((this.allowedConfirmTime - now) / 1000)})`,
        "#ddd",
        undefined,
        undefined,
        true
      );
    } else {
      DrawButton(1000, 690, 200, 80, getText("reset.button.confirm"), "White");
    }

    DrawButton(1520, 690, 200, 80, getText("reset.button.cancel"), "White");

    MainCanvas.textAlign = "left";

    MainCanvas.textAlign = GuiSubscreen.TEXT_ALIGN_BAK;
  }

  Click() {
    if (this.allowedConfirmTime === null) return;

    if (MouseIn(1520, 690, 200, 80)) return this.Exit();

    if (MouseIn(1000, 690, 200, 80) && Date.now() >= this.allowedConfirmTime) return this.Confirm();
  }

  Confirm() {
    this.allowedConfirmTime = null;

    dataErase();

    this.setSubscreen(null);
  }
}
