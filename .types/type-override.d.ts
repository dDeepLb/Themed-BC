interface PlayerCharacter extends Character {
  Themed: import('../src/models/settings').SettingsModel;
  BCT: any;
}

interface OtherCharacter extends Character {
  Themed: import('../src/models/settings').SettingsModel;
}

interface ExtensionSettings {
  Themed: string;
}
