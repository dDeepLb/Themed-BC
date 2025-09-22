import { BaseMigrator } from 'bc-deeplib/deeplib';
import { ColorsModule } from '../modules/colors';

export class DeeplibMigrator extends BaseMigrator {
  get migrationVersion(): string {
    return '1.6.0';
  }

  migrate() {
    // @ts-expect-error migration
    Player.Themed.GlobalModule.modEnabled = Player.Themed.GlobalModule.themedEnabled;
    // @ts-expect-error migration
    delete Player.Themed.GlobalModule.themedEnabled;

    ColorsModule.reloadTheme();
  }
}