interface PlayerCharacter extends Character {
  Themed: import("../src/Models/Settings").SettingsModel;
}

interface OtherCharacter extends Character {
  Themed: import("../src/Models/Settings").SettingsModel;
}

type PlayerOnlineSettings = {
  Themed: import("../src/Models/Settings").SettingsModel;
};
