import { BaseMigrator } from './BaseMigrator';

export class V140Migrator extends BaseMigrator {
  get MigrationVersion(): string {
    return '1.4.0';
  }

  Migrate(): boolean {
    const colorsData = Player.Themed.ColorsModule;
    const integrationsData = Player.Themed.IntegrationModule;

    if (colorsData) {
      if (Player.Themed.ColorsModule['primaryColor']) {
        Player.Themed.ColorsModule.base.main = Player.Themed.ColorsModule['primaryColor'];
        delete Player.Themed.ColorsModule['primaryColor'];
      }

      if (Player.Themed.ColorsModule['accentColor']) {
        Player.Themed.ColorsModule.base.accent = Player.Themed.ColorsModule['accentColor'];
        delete Player.Themed.ColorsModule['accentColor'];
      }

      if (Player.Themed.ColorsModule['textColor']) {
        Player.Themed.ColorsModule.base.text = Player.Themed.ColorsModule['textColor'];
        delete Player.Themed.ColorsModule['textColor'];
      }
    }

    if (integrationsData) {
      if (Player.Themed.IntegrationModule['BC']) {
        Player.Themed.IntegrationModule.inputs = Player.Themed.IntegrationModule['BC'];
        delete Player.Themed.IntegrationModule['BC'];
      }
      
      if (Player.Themed.IntegrationModule['BC_Chat']) {
        Player.Themed.IntegrationModule.chat = Player.Themed.IntegrationModule['BC_Chat'];
        delete Player.Themed.IntegrationModule['BC_Chat'];
      }
      
      if (Player.Themed.IntegrationModule['BC_FriendList']) {
        Player.Themed.IntegrationModule.friendList = Player.Themed.IntegrationModule['BC_FriendList'];
        delete Player.Themed.IntegrationModule['BC_FriendList'];
      }
      
      if (Player.Themed.IntegrationModule['BC_Other']) {
        Player.Themed.IntegrationModule.scrollbar = Player.Themed.IntegrationModule['BC_Other'];
        Player.Themed.IntegrationModule.selection = Player.Themed.IntegrationModule['BC_Other'];
        delete Player.Themed.IntegrationModule['BC_Other'];
      }
      
      if (Player.Themed.IntegrationModule['FBC']) {
        Player.Themed.IntegrationModule.WCE = Player.Themed.IntegrationModule['FBC'];
        delete Player.Themed.IntegrationModule['FBC'];
      }
    }

    return true;
  }
}
