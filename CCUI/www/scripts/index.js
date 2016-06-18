// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    var wall = [{ Wallpaper: "wallLink", Vote: "votelink", Download: "downloadlink" },
                { Wallpaper: "wallLink2", Vote: "votelink2", Download: "downloadlink2" }]
    var imp = '<li><h2> [[=data.Wallpaper]]</h2><h4> Vote :[[=data.Vote]]</h4><h4>Download :[[=data.Download]]</h4></li>';
    var runl = $.template(imp);
    wall.forEach(function (item) {
        $('#uolist').append(runl(item));

    })

    if ($.isWin) {
        document.getElementById('themeStylesheet').setAttribute('href', './css/chui-win-3.9.2.css');
    }
    else if  ($.isAndroid) {
        document.getElementById('themeStylesheet').setAttribute('href', './css/chui-android-3.9.2.css');
    }
    else if ($.isiOS) {
        document.getElementById('themeStylesheet').setAttribute('href', './css/chui-ios-3.9.2.css');
    }
    else { document.getElementById('themeStylesheet').setAttribute('href', './css/chui-android-3.9.2.css'); }
    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();