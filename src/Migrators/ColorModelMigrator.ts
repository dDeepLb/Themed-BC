import { BaseMigrator } from './BaseMigrator';

export class ColorModelMigrator extends BaseMigrator {
  get MigrationVersion(): string {
    return '1.3.5';
  }

  Migrate(): boolean {
    if (!Player.Themed.ColorsModule) return false;

    if (Player.Themed.ColorsModule['primaryColor']) {
      Player.Themed.ColorsModule.base.mainBackground = Player.Themed.ColorsModule['primaryColor'];
      delete Player.Themed.ColorsModule['primaryColor'];
    }

    if (Player.Themed.ColorsModule['accentColor']) {
      Player.Themed.ColorsModule.base.icon = Player.Themed.ColorsModule['accentColor'];
      delete Player.Themed.ColorsModule['accentColor'];
    }

    if (Player.Themed.ColorsModule['textColor']) {
      Player.Themed.ColorsModule.base.text = Player.Themed.ColorsModule['textColor'];
      delete Player.Themed.ColorsModule['textColor'];
    }

    return true;
  }
}
