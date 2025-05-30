import { modules, registerModule } from './Base/Modules';
import { GUI } from './Base/SettingUtils';
import { loadLoginOptions } from './Hooks/login_options';
import { V140Migrator } from './Migrators/V140Migrator';
import { ColorsModule } from './Modules/Colors';
import { CommandsModule } from './Modules/Commands';
import { GlobalModule } from './Modules/Global';
import { GuiRedrawModule } from './Modules/GuiRedraw';
import { IntegrationModule } from './Modules/Integration';
import { ProfilesModule } from './Modules/Profiles';
import { ShareModule } from './Modules/Share';
import { VersionModule } from './Modules/Version';
import { Localization } from './Translation';
import { _Color } from './Utilities/Color';
import { conDebug, conLog } from './Utilities/Console';
import { settingsLoad } from './Utilities/Data';
import { MOD_VERSION_CAPTION } from './Utilities/ModDefinition';
import { deepMergeMatchingProperties, hasSetter } from './Utilities/Other';
import { hookFunction } from './Utilities/SDK';
import { BcStyle } from './Utilities/Style';

function initWait() {
  if (window.ThemedLoaded) return;
  
  conLog('Init wait');
  if (CurrentScreen == null || CurrentScreen === 'Login') {
    const cleanup = loadLoginOptions();
    
    hookFunction('LoginResponse', 0, (args, next) => {
      conDebug('Init! LoginResponse caught: ', args);
      next(args);
      const response = args[0];
      if (response && typeof response.Name === 'string' && typeof response.AccountName === 'string') {
        cleanup();
        init();
      }
    });
  } else {
    conLog('Already logged in, init');
    init();
  }
}

export async function init() {
  await Localization.load();

  settingsLoad();

  if (!initModules()) {
    unload();
    return;
  }

  VersionModule.registerMigrator(new V140Migrator);
  VersionModule.check();

  for (const m of modules()) {
    if (m.defaultSettings && hasSetter(m, 'defaultSettings'))
      m.settings = deepMergeMatchingProperties(m.defaultSettings, m.settings);
  }

  _Color.composeRoot();
  BcStyle.injectAll();

  window.ThemedLoaded = true;
  conLog(`Loaded! Version: ${MOD_VERSION_CAPTION}`);
}

function initModules(): boolean {
  registerModule(new GUI());
  registerModule(new GlobalModule());
  registerModule(new ColorsModule());
  registerModule(new GuiRedrawModule());
  registerModule(new IntegrationModule());
  registerModule(new ProfilesModule());
  registerModule(new CommandsModule());
  registerModule(new ShareModule());
  registerModule(new VersionModule());

  for (const m of modules()) {
    m.Init();
  }

  for (const m of modules()) {
    m.Load();
  }

  for (const m of modules()) {
    m.Run();
  }

  conLog('Modules Loaded.');
  return true;
}

export function unload(): true {
  unloadModules();

  delete window.ThemedLoaded;
  conLog('Unloaded.');
  return true;
}

function unloadModules() {
  for (const m of modules()) {
    m.Unload();
  }
}

initWait();
