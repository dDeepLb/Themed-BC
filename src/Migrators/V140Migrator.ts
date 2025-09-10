import { BaseMigrator } from 'bc-deeplib/deeplib';

export class V140Migrator extends BaseMigrator {
  get migrationVersion(): string {
    return '1.4.0';
  }

  migrate(): boolean {
    const colorsData = Player.Themed.ColorsModule;
    const integrationsData = Player.Themed.IntegrationModule;

    if (colorsData) {
      // @ts-expect-error migration
      if (Player.Themed.ColorsModule['primaryColor']) {
      // @ts-expect-error migration
        Player.Themed.ColorsModule.base.main = Player.Themed.ColorsModule['primaryColor'];
        // @ts-expect-error migration
        delete Player.Themed.ColorsModule['primaryColor'];
      }

      // @ts-expect-error migration
      if (Player.Themed.ColorsModule['accentColor']) {
      // @ts-expect-error migration
        Player.Themed.ColorsModule.base.accent = Player.Themed.ColorsModule['accentColor'];
        // @ts-expect-error migration
        delete Player.Themed.ColorsModule['accentColor'];
      }

      // @ts-expect-error migration
      if (Player.Themed.ColorsModule['textColor']) {
      // @ts-expect-error migration
        Player.Themed.ColorsModule.base.text = Player.Themed.ColorsModule['textColor'];
        // @ts-expect-error migration
        delete Player.Themed.ColorsModule['textColor'];
      }
    }

    if (integrationsData) {
      // @ts-expect-error migration
      if (Player.Themed.IntegrationModule['BC']) {
      // @ts-expect-error migration
        Player.Themed.IntegrationModule.inputs = Player.Themed.IntegrationModule['BC'];
        // @ts-expect-error migration
        delete Player.Themed.IntegrationModule['BC'];
      }
      
      // @ts-expect-error migration
      if (Player.Themed.IntegrationModule['BC_Chat']) {
      // @ts-expect-error migration
        Player.Themed.IntegrationModule.chat = Player.Themed.IntegrationModule['BC_Chat'];
        // @ts-expect-error migration
        delete Player.Themed.IntegrationModule['BC_Chat'];
      }
      
      // @ts-expect-error migration
      if (Player.Themed.IntegrationModule['BC_FriendList']) {
      // @ts-expect-error migration
        Player.Themed.IntegrationModule.friendList = Player.Themed.IntegrationModule['BC_FriendList'];
        // @ts-expect-error migration
        delete Player.Themed.IntegrationModule['BC_FriendList'];
      }
      
      // @ts-expect-error migration
      if (Player.Themed.IntegrationModule['BC_Other']) {
      // @ts-expect-error migration
        Player.Themed.IntegrationModule.scrollbar = Player.Themed.IntegrationModule['BC_Other'];
        // @ts-expect-error migration
        Player.Themed.IntegrationModule.selection = Player.Themed.IntegrationModule['BC_Other'];
        // @ts-expect-error migration
        delete Player.Themed.IntegrationModule['BC_Other'];
      }
      
      // @ts-expect-error migration
      if (Player.Themed.IntegrationModule['FBC']) {
      // @ts-expect-error migration
        Player.Themed.IntegrationModule.WCE = Player.Themed.IntegrationModule['FBC'];
        // @ts-expect-error migration
        delete Player.Themed.IntegrationModule['FBC'];
      }
    }

    return true;
  }
}
