import { BaseSettingsModel } from "../Models/Global";
import { SettingsModel } from "../Models/Settings";
import { Subscreen } from "./SettingDefinitions";

export abstract class BaseModule {
  get settingsScreen(): Subscreen | null {
    return null;
  }

  /** Allows changing the subkey for that module settings storage */
  get settingsStorage(): string | null {
    return this.constructor.name;
  }

  get settings(): BaseSettingsModel {
    if (!this.settingsStorage) return {} as BaseSettingsModel;
    if (!Player.Themed) {
      Player.Themed = <SettingsModel>{};
      this.registerDefaultSettings();
    } else if (!(<any>Player.Themed)[this.settingsStorage]) this.registerDefaultSettings();
    return Player.Themed[this.settingsStorage];
  }

  set settings(val) {
    if (!Player.Themed) {
      Player.Themed = <SettingsModel>{};
      this.registerDefaultSettings();
    } else if (!(<any>Player.Themed)[this.settingsStorage]) this.registerDefaultSettings();
    Player.Themed[this.settingsStorage] = val;
  }

  get enabled(): boolean {
    if (!Player?.Themed?.GlobalModule) return false;
    return (
      Player.Themed.GlobalModule.themedEnabled &&
      this.settings.themedEnabled &&
      (ServerPlayerIsInChatRoom() || (CurrentModule == "Room" && CurrentScreen == "Crafting"))
    );
  }

  Init() {
    this.registerDefaultSettings();
  }

  registerDefaultSettings(): void {
    const storage = this.settingsStorage;
    const defaults = this.defaultSettings;
    if (!storage || !defaults) return;

    (<any>Player.Themed)[storage] = Object.assign(defaults, (<any>Player.Themed)[storage] ?? {});
  }

  get defaultSettings(): BaseSettingsModel | null {
    return null;
  }

  Load() {}

  Run() {
    // Empty
  }

  Unload() {
    // Empty
  }
}
