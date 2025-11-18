import { BaseMigrator, BaseModule, GUI, GuiImportExport, initMod, modStorage, VersionModule } from 'bc-deeplib/deeplib';
import { loadLoginOptions } from './hooks/login_options';
import { V140Migrator } from './migrators/v140_migrator';
import { ColorsModule } from './modules/colors';
import { CommandsModule } from './modules/commands';
import { GlobalModule } from './modules/global';
import { GuiRedrawModule } from './modules/gui_redraw';
import { IntegrationModule } from './modules/integration';
import { ProfilesModule } from './modules/profiles';
import { ShareModule } from './modules/share';
import { MOD_VERSION_CAPTION } from './utilities/mod_definition';
import { DeeplibMigrator } from './migrators/deeplib_migrator';
import { GuiReset } from './screens/reset';

(async () => {
  const changelog = await fetch(`${PUBLIC_URL}/text/changelog.txt`)
    .then((res) => res.text())
    .then((text) => text.replace(/\r\n/g, '\n'));

  const migrators: Array<BaseMigrator> = [
    new V140Migrator(),
    new DeeplibMigrator(),
  ];

  const modules: Array<BaseModule> = [
    new GUI({
      buttonText: 'Themed',
      identifier: 'Themed',
      image: `${PUBLIC_URL}/images/mod.png`,
    }),
    new GlobalModule(),
    new ColorsModule(),
    new GuiRedrawModule(),
    new IntegrationModule(),
    new ProfilesModule(),
    new CommandsModule(),
    new ShareModule(),
    new VersionModule({
      newVersionMessage: changelog,
      migrators
    })
  ];

  return initMod({
    beforeLogin: () => loadLoginOptions(),
    initFunction: () => {
      ColorsModule.reloadTheme();
    },
    modInfo: {
      info: {
        name: 'Themed',
        fullName: 'Themed',
        version: MOD_VERSION_CAPTION,
        repository: 'https://github.com/dDeepLb/Themed-BC',
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
    translationOptions: {
      pathToTranslationsFolder: `${PUBLIC_URL}/translations/`,
    }
  });
})();
