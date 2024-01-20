interface PlayerCharacter extends Character {
  Themed: import('../src/Models/Settings').SettingsModel;
  BCT: any;
}

interface OtherCharacter extends Character {
  Themed: import('../src/Models/Settings').SettingsModel;
}

interface ExtensionSettings {
  Themed: string;
}

type ThemedMessageDictionaryEntry = {
  ThemedMessage: ThemedMessageModel;
};

interface ThemedMessageModel {
  Theme: object;
}
