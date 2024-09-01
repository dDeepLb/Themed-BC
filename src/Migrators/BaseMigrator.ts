export abstract class BaseMigrator {
  abstract get MigrationVersion(): string;
  abstract Migrate(): boolean;
}
