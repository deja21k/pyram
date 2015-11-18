//jQuery to collapse the navbar on scroll
"use strict";

$(window).scroll(function () {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
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
    touch: false,
    start: function start() {
      $('.flex-control-nav li a').on('mouseover', function () {
        $(this).trigger('click');
      });
    }
  });
});
// fancyBox
$(document).ready(function () {
  $(".various").fancybox({
    maxWidth: 800,
    maxHeight: 450,
    fitToView: false,
    width: '70%',
    height: '70%',
    autoSize: false,
    closeClick: false,
    openEffect: 'none',
    closeEffect: 'none'
  });
});

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
//# sourceMappingURL=main.js.map
