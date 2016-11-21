var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        cordova.plugins.diagnostic.isLocationAvailable(function(available){
            if(!available){
              cordova.dialogGPS();
            }
        }, function(error){
             alert("The following error occurred: "+error);
        });
    },
};

app.initialize();

document.getElementById('locateBtn').onclick=app.onDeviceReady;