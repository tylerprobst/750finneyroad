/*
	Author: BestPixels
	Template: Home | Single Property HTML Template
	Version: 1.0
*/
	
"use strict";

/*global jQuery, $*/
jQuery(document).ready(function(){
	
	// One Page navigation
	jQuery('#navigation').onePageNav({
		'scrollOffset': 90,
	});
	
	// navigation collapse
	jQuery('.navbar-collapse').on("click", 'li', function() {
        jQuery('.navbar-collapse').collapse('hide');
    });
	
	// parallax
	jQuery('.header-section').parallax("50%", 0.1);
	jQuery('.video-section').parallax("50%", 0.1);
	jQuery('.cta-section').parallax("50%", 0.1);
	
	//magnificPopup	Video
	jQuery('.embaded-popup').magnificPopup({
		type: 'iframe',
		removalDelay: 160,
		preloader: true,
		fixedContentPos: false,
		callbacks: {
		beforeOpen: function() {
			  // just a hack that adds mfp-anim class to markup 
			  this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
			  this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
	});
	
	jQuery('.large-view').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside:true,
		image: {
			verticalFit: false
		},			
		removalDelay: 500, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function() {
		  // just a hack that adds mfp-anim class to markup 
			this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
			this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.		
	});	
	
	// Item Sliders
	jQuery('.testimonials-list').slick({
		dots: true,
		fade: true,
		adaptiveHeight: true,
		autoplay: true,
		arrows: false,
	});
	
	jQuery('.floor-list').slick({
		dots: true,
		adaptiveHeight: true,
		autoplay: true,
		arrows: false,
	});
	
	
});

