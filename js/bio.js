(function($) {
  var $headshot = $(".headshot");
    
  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    
    if(scrollTop > windowHeight * .75) {
      $headshot.removeClass("pixel");
    } else {
      $headshot.addClass("pixel");
    }
    
    if(scrollTop > windowHeight) {
      $headshot.removeClass("line");    
    } else {
      $headshot.addClass("line");
    }
  });
}(jQuery));