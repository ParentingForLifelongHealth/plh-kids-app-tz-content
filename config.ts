import { extendDeploymentConfig } from "scripts";
import sheets from "scripts/src/commands/app-data/postProcess/sheets";

const config = extendDeploymentConfig({ name: "plh_kids_tz", parent: "plh_kids" });

config.git = {
  content_repo: "https://github.com/IDEMSInternational/plh-kids-app-tz-content.git",
  content_tag_latest: "1.1.77",
};

config.google_drive.sheets_folder_ids = [
  "19wSspWYMbRc75een-kS0q0aq24--75u8", // library_app_menu
  "1UXVz71HniwdtklFnGUEBzzj8ZHI9oQVo", // library_field_values
  "1Y8uC9-rqQtsjQgUfeX9qp-vNzsFDUQFU", // kids_global
  "1xY6e3-VuMiTsVYBV4tPG_CYHoFx1Yq19" // kids_tz
];

config.google_drive.assets_folder_ids = ["1abaL1QGd33NqqLoKuo2t9fVWKmh5ouM9", "1kLl5t3o4A2ssC2iC-lT2bp4u8BZZneSE"];

config.api.db_name = "plh_kids_tz";

// Hacky fix to point extended deployment to translations within its own repo
config.translations.translated_strings_path = "./app_data/translations_source/translated_strings";

// Hacky fix to point extended deployment to content within its own repo
config.app_data.output_path = "./app_data";

// To reduce app size, exclude draft and uncompressed assets
config.app_data.assets_filter_function = (fileEntry) => !fileEntry.relativePath.includes("draft") && !fileEntry.relativePath.includes("uncompressed")

config.app_config.APP_LANGUAGES.default = "gb_en";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "ParentApp for Kids TZ";
config.app_config.APP_HEADER_DEFAULTS.title = "ParentApp for Kids TZ";
config.app_config.NOTIFICATION_DEFAULTS.title = "New message from ParentApp for Kids TZ";
config.app_config.NOTIFICATION_DEFAULTS.text = "You have a new message from ParentApp for Kids TZ";

config.error_logging = { dsn: "https://a371085a8bc146a3a45bb4e5d2d013ef@app.glitchtip.com/6036"};


export default config;
