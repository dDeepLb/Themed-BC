import { BaseSubscreen, getText, layout, modules, advElement } from 'bc-deeplib/deeplib';
import { _Color } from '../Utilities/Color';
import { settingsReset } from '../Utilities/Data';
import { BcStyle } from '../Utilities/Style';

export class GuiReset extends BaseSubscreen {
  get name(): string {
    return 'reset';
  }

  load() {
    super.load();
    let timeToConfirm = 5;

    ElementCreate({
      tag: 'div',
      classList: ['tmd-reset-container'],
      attributes: {
        id: 'tmd-reset-container'
      },
      children: [
        advElement.createLabel({
          id: 'themed-reset-label-perma_reset_of_mod_data',
          label: getText('reset.label.perma_reset_of_mod_data'),
        }),
        {
          tag: 'br'
        },
        advElement.createLabel({
          id: 'themed-reset-label-warning',
          label: getText('reset.label.warning'),
        }),
        advElement.createLabel({
          id: 'themed-reset-label-if_u_confirm_perma_reset',
          label: getText('reset.label.if_u_confirm_perma_reset'),
        }),
        {
          tag: 'br'
        },
        advElement.createLabel({
          id: 'themed-reset-label-youll_able_to_use_mod',
          label: getText('reset.label.youll_able_to_use_mod'),
        }),
        {
          tag: 'br'
        },
        advElement.createLabel({
          id: 'themed-reset-label-action_cannot_be_undone',
          label: getText('reset.label.action_cannot_be_undone'),
        }),
        {
          tag: 'br'
        },
        {
          tag: 'div',
          attributes: {
            id: 'tmd-reset-buttons-container'
          },
          children: [
            advElement.createButton({
              id: 'tmd-reset-button',
              onClick: () => {
                this.confirm();
                timer?.();
              },
              options: {
                label: `${getText('reset.button.confirm')} (${timeToConfirm})`,
              },
              disabled: true
            }),
            advElement.createButton({
              id: 'tmd-cancel-button',
              onClick: () => {
                this.exit();
                timer?.();
              },
              options: {
                label: getText('reset.button.cancel')
              }
            })
          ]
        }
      ],
      parent: layout.getSubscreen(),
    });

    const timer = TimerCreate(() => {
      timeToConfirm--;
      const button = ElementWrap('tmd-reset-button') as HTMLButtonElement | null;
      const buttonLabel = button?.querySelector('.button-label');

      if (buttonLabel) {
        buttonLabel.textContent = `${getText('reset.button.confirm')} (${timeToConfirm})`;
      }

      if (timeToConfirm <= 0) {
        if (button && buttonLabel) {
          button.disabled = false;
          buttonLabel.textContent = getText('reset.button.confirm');
        }

        timer();
      }
    }, 1000, true, 'universal');
  }

  resize(onLoad?: boolean): void {
    super.resize(onLoad);
    ElementSetPosition('tmd-reset-container', 500, 175, 'top-left');
    ElementSetSize('tmd-reset-container', 1000, null);
  }

  confirm() {
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
