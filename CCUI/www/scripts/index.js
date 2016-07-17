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
        document.addEventListener('resume', onResume.bind(this), false);

     
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
    //Sign up Button Action
    $('#signupButton').on('singletap', function () {
        $.UIGoToArticle("#signupArticle");
    });
    //Special Character restrictor
    $('input').bind('keypress', function (event) {
        var regex = new RegExp("^[a-zA-Z0-9]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
    });

    
    //Login 
    $('#loginButton').on('singletap', function () {
        
        $('#busy1').UIBusy({ 'color': ' #0b5394', 'size': 50 });
        $('#busy1').find('.busy').UICenter();
        var username = $('#loginUsername').val();
        var password = $('#loginPassword').val();
        $.ajax({
            type: 'POST',
            url: 'http://wallplay.site88.net/php/check.php',
            timeout: 5000,
            data:
            {
                loginUsername: username,
                loginPassword: password
            },

            success: function (response) {
                $('#busy1').hide();
                if (response == 1) {
                    alert("Your Login ID or Password is Invalid");
                }
                else {
                    $("#hMsg").html("<center>" + response + "</center>");
                    $.UIGoToArticle("#homeArticle");
                }
            },
            error: function (errorThrow) {
                $('#busy1').hide()
                alert('Unknown error has occured,please try after sometime');
                console.log(errorThrown);
            }

        });
    });
    //Signup
    $('#signupSubmitButton').on('singletap', function () {
        $('#busys').UIBusy({ 'color': ' #0b5394', 'size': 50 });
        $('#busys').find('.busy').UICenter();
        var username = $('#signupUsername').val();
        var password = $('#signupPassword').val();
        $.ajax({
            type: 'POST',
            url: 'http://wallplay.site88.net/php/insert.php',
            timeout: 5000,
            data:
            {
                signupUsername: username,
                signupPassword: password
            },

            success: function (response) {
                $('#busys').hide();
                alert(response);
                $.UIGoBackToArticle('#mainArticle');
            },
            error: function (errorThrow) {
                $('#busys').hide();
                alert('Unknown error has occured,please try after sometime');
                console.log(errorThrown);
            }

        });
    });   
            
        
    
})();

