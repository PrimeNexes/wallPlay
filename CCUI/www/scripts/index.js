// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

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
        var random = Math.floor((Math.random() * 100000) + 1);
        document.getElementById('display').innerHTML = "<h2>Enter number given below</h2><br>" + random;
        $('#submit').on('singletap', function () {
            var inp = document.getElementById('num').valueAsNumber;
            if (inp == random)
            { document.getElementById('msg').innerHTML = "<h2>Correct</h2>"; }
            else if (inp != random)
            { document.getElementById('msg').innerHTML = "<h2>Incorrect,please reenter</h2>"; }
        });
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