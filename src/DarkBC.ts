import { DataManager } from './Data';
import { DarkBCVersion, mod, ModName } from './Definition';
import { GUISetting } from './GUI/GUI';
import { LoadHooks } from './Hooks';
import { onLogin } from './Utils';


(function () {
    if (window.DarkBC_Loaded) return;
    window.DarkBC_Loaded = false;

    if ( Player && Player.OnlineSettings ) {
        onLogin();
    }

    const GUI = new GUISetting;
    GUI.load(mod);

    DataManager.init();
    LoadHooks();

    window.DarkBC_Loaded = true;
    console.log(`${ModName} v${DarkBCVersion} loaded.`);
})()
