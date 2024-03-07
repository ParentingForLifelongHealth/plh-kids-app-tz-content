import { extendDeploymentConfig } from "scripts";

const config = extendDeploymentConfig({ name: "plh_kids_tz", parent: "plh_kids" });

config.git = {
  content_repo: "https://github.com/IDEMSInternational/plh-kids-app-tz-content.git",
  content_tag_latest: "1.1.17",
};


config.google_drive.sheets_folder_ids = ["1Y8uC9-rqQtsjQgUfeX9qp-vNzsFDUQFU", "1xY6e3-VuMiTsVYBV4tPG_CYHoFx1Yq19"];
config.google_drive.assets_folder_ids = ["1abaL1QGd33NqqLoKuo2t9fVWKmh5ouM9", "1kLl5t3o4A2ssC2iC-lT2bp4u8BZZneSE"];

// Hacky fix to point extended deployment to translations within its own repo
config.translations.translated_strings_path = "./app_data/translations_source/translated_strings";

// Exclude picture books assets to reduce app size for formative workshop
config.app_data.assets_filter_function = (fileEntry) => !fileEntry.relativePath.includes("books")

config.api.db_name = "plh_kids_tz";

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
