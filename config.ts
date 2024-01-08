import { extendDeploymentConfig } from "scripts";

const config = extendDeploymentConfig({ name: "plh_kids_tz", parent: "plh_kids" });


config.android = {
  splash_asset_path: "./app_data/assets/android/splash.png",
  icon_asset_path: "./app_data/assets/android/icon.png",
  icon_asset_foreground_path: "./app_data/assets/android/icon-foreground.png",
  icon_asset_background_path: "./app_data/assets/android/icon-background.png",
};

config.git = {
  content_repo: "https://github.com/IDEMSInternational/plh-kids-app-tz-content.git",
  content_tag_latest: "1.0.0",
};

config.api.db_name = "plh_kids_tz"

config.app_data.output_path = "./app_data";

config.app_config.APP_LANGUAGES.default = "gb_en";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "ParentApp for Kids TZ";
config.app_config.APP_HEADER_DEFAULTS.title = "ParentApp for Kids TZ";
config.app_config.NOTIFICATION_DEFAULTS.title = "New message from ParentApp for Kids TZ";
config.app_config.NOTIFICATION_DEFAULTS.text = "You have a new message from ParentApp for Kids TZ";
config.app_config.APP_THEMES.available = ["default", "professional"];
config.app_config.APP_THEMES.defaultThemeName = "professional";
config.app_config.APP_UPDATES.enabled = true;
config.app_config.APP_UPDATES.completeUpdateTemplate = "app_update_complete";
config.app_config.APP_FOOTER_DEFAULTS.templateName = "footer";


export default config;
