
//jQuery for page scrolling feature - requires jQuery Easing plugin
'use strict';

$(function () {
	$('a.page-scroll').bind('click', function (event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
});

// first-flexslider
$(window).load(function () {
	$('.firstSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		start: function start() {
			$('.flex-control-nav li a').on('mouseover', function () {
				$(this).trigger('click');
			});
		}
	});
});
/*
  Slidemenu
*/
(function () {
	var $body = document.body,
	    $menu_trigger = $body.getElementsByClassName('navbar-toggle')[0];

	if (typeof $menu_trigger !== 'undefined') {
		$menu_trigger.addEventListener('click', function () {
			$body.className = $body.className == 'menu-active' ? '' : 'menu-active';
		});
	}
}).call(undefined);

// /***************** Smooth Scrolling ******************/
//
// $(function() {
//
//   $('a[href*=#]:not([href=#])').click(function() {
//     if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
//
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       if (target.length) {
//         $('html,body').animate({
//           scrollTop: target.offset().top
//         }, 2000);
//         return false;
//       }
//     }
//   });
//
// });
$(function () {

	var $window = $(window); //Window object

	var scrollTime = 1.2; //Scroll time
	var scrollDistance = 170; //Distance. Use smaller value for shorter scroll and greater value for longer scroll

	$window.on("mousewheel DOMMouseScroll", function (event) {

		event.preventDefault();

		var delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta * scrollDistance);

		TweenMax.to($window, scrollTime, {
			scrollTo: { y: finalScroll, autoKill: true },
			ease: Power1.easeOut, //For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
			autoKill: true,
			overwrite: 5
		});
	});
});
/***************** Toggle Collapsed On Navbar ******************/
$('.navbar-toggle').click(function () {
	$('.navbar-toggle').toggleClass('collapsed');
});

/***************** Slideout ******************/
if ($('#menu').length) {

	var slideout = new Slideout({
		'panel': document.getElementById('panel'),
		'menu': document.getElementById('menu'),
		'padding': 256,
		'tolerance': 70,
		'side': 'right',
		'touch': true
	});

	// Toggle button
	document.querySelector('.navbar-toggle').addEventListener('click', function () {
		slideout.toggle();
	});
}
/***************** Trigger Click For Closing Menu ******************/
function clickClosingMenu() {
	$('#menu').on('click', function (e) {
		$('.navbar-toggle').trigger('click');
		mobileMenuClick();
	});
}
clickClosingMenu();
//# sourceMappingURL=main.js.map
