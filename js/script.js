;(function( $ ) {
	"use strict";

	/* =======================================
	 * Function: Detect Mobile Device
	 * =======================================
	 */
	
	// source: http://www.abeautifulsite.net/detecting-mobile-devices-with-javascript/
	var isMobile = {
		Android: function() {
			return navigator.userAgent.match( /Android/i );
		},
		BlackBerry: function() {
			return navigator.userAgent.match( /BlackBerry/i );
		},
		iOS: function() {
			return navigator.userAgent.match( /iPhone|iPad|iPod/i );
		},
		Opera: function() {
			return navigator.userAgent.match( /Opera Mini/i );
		},
		Windows: function() {
			return navigator.userAgent.match( /IEMobile/i );
		},
		any: function() {
			return ( isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows() );
		}
	};

	$( document ).on( 'ready', function() {

		/* =======================================
		 * Splash Screen Logo
		 * =======================================
		 */
		$( '#preloader .preloader-logo > img' ).on( 'load', function() {
			$( this ).show().addClass( 'bounceIn' ).next().show();
		});
		
		/* =======================================
		 * Detect Mobile Device
		 * =======================================
		 */
		if ( isMobile.any() ) {
			// add identifier class to <body>
			$( 'body' ).addClass( 'mobile-device' );
			// remove all element with class "remove-on-mobile-device"
			$( '.remove-on-mobile-device' ).remove();
		}
	});
	
	$( window ).on( 'load', function() {

		$( '#preloader' ).fadeOut( 1000, function() {
			$( 'body' ).addClass( 'preloader-done' );
		});

	});

})( jQuery );