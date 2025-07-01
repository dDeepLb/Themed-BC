import { BaseMigrator, BaseModule, GUI, initMod, VersionModule } from 'bc-deeplib/deeplib';
import { loadLoginOptions, unloadLoginOptions } from './Hooks/login_options';
import { V140Migrator } from './Migrators/V140Migrator';
import { ColorsModule } from './Modules/Colors';
import { CommandsModule } from './Modules/Commands';
import { GlobalModule } from './Modules/Global';
import { GuiRedrawModule } from './Modules/GuiRedraw';
import { IntegrationModule } from './Modules/Integration';
import { ProfilesModule } from './Modules/Profiles';
import { ShareModule } from './Modules/Share';
import { _Color } from './Utilities/Color';
import { MOD_VERSION_CAPTION } from './Utilities/ModDefinition';
import { BcStyle } from './Utilities/Style';
import { DeeplibMigrator } from './Migrators/DeeplibMigrator';

export const { sdk } = (() => {
  const modules: Array<BaseModule> = [
    new GUI({
      ButtonText: 'Themed',
      Identifier: 'Themed',
      Image: `${PUBLIC_URL}/icons/mod.png`,
    }),
    new GlobalModule(),
    new ColorsModule(),
    new GuiRedrawModule(),
    new IntegrationModule(),
    new ProfilesModule(),
    new CommandsModule(),
    new ShareModule(),
    new VersionModule()
  ];

  const migrators: Array<BaseMigrator> = [
    new V140Migrator(),
    new DeeplibMigrator(),
  ];

  const initFunction = async () => {
    unloadLoginOptions();

    const changelog = await fetch(`${PUBLIC_URL}/html/Changelog.html`)
      .then((res) => res.text())
      .then((text) => text.replace(/\r\n/g, '\n'));

    VersionModule.setNewVersionMessage(changelog);

    _Color.composeRoot();
    BcStyle.injectAll();
  };

  return initMod({
    initFunction,
    beforeLogin: () => loadLoginOptions(),
    modInfo: {
      info: {
        name: 'Themed',
        fullName: 'Themed',
        version: MOD_VERSION_CAPTION
      }
    },
    modules,
    migrators,
    pathToTranslationsFolder: `${PUBLIC_URL}/i18n/`,
  });
})();
