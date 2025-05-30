import { LocalSettingsModel } from '../Models/local';
import { localSettingsLoad, localSettingsSave } from '../Utilities/Data';
import { hookFunction, HookPriority, patchFunction, unpatchFunction } from '../Utilities/SDK';
import { Style } from '../Utilities/Style';

const ids = {
  optionsOpen: 'tmd-login-options-open',
  optionsClose: 'tmd-login-options-dialog-close',
  optionsSheet: 'tmd-login-options-dialog',
  optionsContent: 'tmd-login-options-dialog-content',
  optionsStyle: 'tmd-login-options-style',
};

const options: Record<keyof LocalSettingsModel['loginOptions'], string> = {
  hideCredits: 'Hide Credits',
  hideDummy: 'Hide Dummy',
};

export function loadLoginOptions() {
  localSettingsLoad();
  patchLoginPage();

  Style.injectEmbed(ids.optionsStyle, `${PUBLIC_URL}/styles/login-options.css`);
  createUI();

  const cleanup = hookFunction('LoginRun', HookPriority.Observe, (args, next) => {
    next(args);

    ElementSetPosition(ids.optionsOpen, 2000, 1000, 'bottom-right');
    ElementSetSize(ids.optionsOpen, 90, 90);

    ElementSetSize(ids.optionsSheet, 1000, 500);
  });

  return () => {
    cleanup();
    unpatchLoginPage();
    Style.eject(ids.optionsStyle);
  };
}

function createUI() {
  const loginOptions = window.ThemedLocalData.loginOptions;

  const optionsButton = ElementButton.Create(ids.optionsOpen, () => optionsSheet.showModal(), {
    tooltip: '[Themed] Login Options',
    image: './Icons/Preference.png',
  });
  document.body.appendChild(optionsButton);

  const optionsSheet = ElementCreate({
    tag: 'dialog',
    attributes: {
      id: ids.optionsSheet,
    },
    children: [
      ElementCreate({
        tag: 'div',
        attributes: {
          id: ids.optionsContent
        },
        children: [
          ...Array.from(Object.entries(options)).map(([key, value]) => {
            return {
              tag: 'label',
              classList: ['tmd-login-options-label'],
              children: [
                ElementCheckbox.Create(`tmd-login-options-${key}`, () => {
                  loginOptions[key] = !loginOptions[key];
                  localSettingsSave();
                  repatchLoginPage();
                },
                {
                  checked: loginOptions[key],
                }),
                value
              ]
            } as HTMLOptions<keyof HTMLElementTagNameMap>;
          })
        ]
      }),
      ElementButton.Create(ids.optionsClose, () => optionsSheet.close(),
        {
          label: 'Close',
        },
      )
    ],
    parent: document.body
  });
}

function patchLoginPage() {
  const loginOptions = window.ThemedLocalData.loginOptions;

  if (loginOptions.hideDummy) {
    patchFunction('LoginRun', {
      'DrawCharacter(LoginCharacter, 1400, 100, 0.9);': '',
    });

    patchFunction('LoginDoNextThankYou', {
      'CharacterRelease(LoginCharacter, false);': '',
      'CharacterAppearanceFullRandom(LoginCharacter);': '',
      'if (InventoryGet(LoginCharacter, "ItemNeck") != null) InventoryRemove(LoginCharacter, "ItemNeck", false);': '',
      'CharacterFullRandomRestrain(LoginCharacter)': '',
    });
  }

  if (loginOptions.hideCredits) {
    patchFunction('LoginRun', {
      'if (LoginCredits) LoginDrawCredits();': 'if (false) LoginDrawCredits();',
      'DrawImage("Screens/" + CurrentModule + "/" + CurrentScreen + "/Bubble.png", 1400, 16);': '',
      'DrawText(TextGet("ThankYou") + " " + LoginThankYou, 1625, 53, "Black", "Gray");': '',
    });

    patchFunction('LoginDoNextThankYou', {
      'LoginThankYou = CommonRandomItemFromList(LoginThankYou, LoginThankYouList)': '',
    });
  }
}

function unpatchLoginPage() {
  unpatchFunction('LoginRun');
  unpatchFunction('LoginDoNextThankYou');
}

function repatchLoginPage() {
  unpatchLoginPage();
  patchLoginPage();
}