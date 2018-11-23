(function($) {
  var $footer = $("#footer");
  var $gap = $(".footer-gap");
  
  function setPrevMargin() {
    $gap.css({"margin-bottom": $footer.outerHeight()})
  }
  setPrevMargin();
  $footer.css({position: "fixed", bottom: 0 })
  $(window).resize(setPrevMargin);
  
  var $flipContainer = $(".flip-container");
  var $icons = $(".flipper i");
  var iconLen = $icons.length;
  var iconNum = 0;
  setInterval(function() {
    $flipContainer.addClass("flip");
    
    setTimeout(function() {
      var $i = $icons.eq(iconNum++).addClass("hidden");
      if(iconNum === iconLen) {
        iconNum = 0;
      }
      $icons.eq(iconNum).removeClass("hidden");
      $flipContainer.removeClass("flip");
    },1100)
  },3000);  
  
}(jQuery));