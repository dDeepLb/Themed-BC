import { BaseMigrator, BaseModule, GUI, GuiImportExport, initMod, modStorage, VersionModule } from 'bc-deeplib/deeplib';
import { loadLoginOptions } from './Hooks/login_options';
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
import { GuiReset } from './Screens/Reset';

(async () => {
  const changelog = await fetch(`${PUBLIC_URL}/text/changelog.txt`)
    .then((res) => res.text())
    .then((text) => text.replace(/\r\n/g, '\n'));

  const modules: Array<BaseModule> = [
    new GUI({
      ButtonText: 'Themed',
      Identifier: 'Themed',
      Image: `${PUBLIC_URL}/images/mod.png`,
    }),
    new GlobalModule(),
    new ColorsModule(),
    new GuiRedrawModule(),
    new IntegrationModule(),
    new ProfilesModule(),
    new CommandsModule(),
    new ShareModule(),
    new VersionModule({
      newVersionMessage: changelog
    })
  ];

  const migrators: Array<BaseMigrator> = [
    new V140Migrator(),
    new DeeplibMigrator(),
  ];

  const initFunction = () => {
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
    mainMenuOptions: {
      importExportSubscreen: new GuiImportExport({
        customFileExtension: '.tmd',
        onImport() {
          modStorage.save();
          ColorsModule.reloadTheme();
        },
      }),
      repoLink: 'https://github.com/dDeepLb/Themed-BC',
      wikiLink: 'https://github.com/dDeepLb/Themed-BC/wiki',
      resetSubscreen: new GuiReset()
    },
    modules,
    migrators,
    translationOptions: {
      pathToTranslationsFolder: `${PUBLIC_URL}/translations/`,
    }
  });
})();
