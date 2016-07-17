// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

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
    
    $("#signup").click(function () {
        var fullname = $("#fullname").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var dataString = "fullname=" + fullname + "&email=" + email + "&password=" + password + "&signup=";
        alert("Hi");
        if ($.trim(fullname).length > 0 & $.trim(email).length > 0 & $.trim(password).length > 0) {
            $.ajax({
                type: "POST",
                url: "http://wallplay.site88.net/signup.php",
                data: dataString,
                crossDomain: true,
                cache: false,
                beforeSend: function () { $("#signup").val('Connecting...'); },
                success: function (data) {
                    if (data == "success") {
                        alert("Thank you for Registering with us! you can login now");
                    }
                    else if (data = "exist") {
                        alert("Hey! You alreay has account! you can login with us");
                    }
                    else if (data = "failed") {
                        alert("Something Went wrong");
                    }
                }
            });
        } return false;
    });
} )();