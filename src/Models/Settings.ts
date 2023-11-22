import { ColorsSettingsModel } from "./Colors";
import { GlobalSettingsModel } from "./Global";
import { IntegrationSettingsModel } from "./Integration";

export type SettingsModel = {
  Version: string;
  GlobalModule: GlobalSettingsModel;
  ColorsModule: ColorsSettingsModel;
  IntegrationModule: IntegrationSettingsModel;
};
