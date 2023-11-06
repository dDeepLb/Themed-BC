import { BaseModule } from "./BaseModule";
import { GuiSubscreen } from "./BaseSetting";
import { GUI } from "./SettingUtils";

export const SETTING_FUNC_PREFIX: string = "PreferenceSubscreen";
export const SETTING_NAME_PREFIX: string = "Themed_";
export const SETTING_FUNC_NAMES: string[] = ["Load", "Run", "Click", "Unload", "Exit"];

export type Subscreen = new (module: BaseModule) => GuiSubscreen;

export function getCurrentSubscreen(): GuiSubscreen | null {
  return GUI.instance && GUI.instance.currentSubscreen;
}

export function setSubscreen(subscreen: GuiSubscreen | string | null): GuiSubscreen | null {
  if (!GUI.instance) {
    throw new Error("Attempt to set subscreen before init");
  }
  GUI.instance.currentSubscreen = subscreen;
  return GUI.instance.currentSubscreen;
}
