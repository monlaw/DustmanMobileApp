cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova.plugins.diagnostic.Diagnostic",
        "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.js",
        "pluginId": "cordova.plugins.diagnostic",
        "clobbers": [
            "cordova.plugins.diagnostic"
        ]
    },
    {
        "id": "cl.rmd.cordova.dialoggps.DialogGPS",
        "file": "plugins/cl.rmd.cordova.dialoggps/www/DialogGPS.js",
        "pluginId": "cl.rmd.cordova.dialoggps",
        "clobbers": [
            "cordova.dialogGPS"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.geolocation",
        "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.PositionError",
        "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
        "pluginId": "cordova-plugin-geolocation",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.0",
    "cordova.plugins.diagnostic": "3.2.2",
    "cl.rmd.cordova.dialoggps": "0.0.2",
    "cordova-plugin-compat": "1.0.0",
    "cordova-plugin-geolocation": "2.4.0"
};
// BOTTOM OF METADATA
});