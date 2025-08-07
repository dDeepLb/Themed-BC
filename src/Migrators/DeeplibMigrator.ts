import { BaseMigrator } from 'bc-deeplib/deeplib';

export class DeeplibMigrator extends BaseMigrator {
  get MigrationVersion(): string {
    return '1.6.0';
  }

  Migrate(): boolean {
    // @ts-expect-error migration
    Player.Themed.GlobalModule.modEnabled = Player.Themed.GlobalModule.themedEnabled;
    // @ts-expect-error migration
    delete Player.Themed.GlobalModule.themedEnabled;

    return true;
  }
}