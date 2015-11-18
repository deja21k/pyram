// first-flexslider
'use strict';

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

      $.waypoints('refresh');
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
//# sourceMappingURL=main.js.map
