(function($) {
  $("a").on("click",scrollTo);
  
  function scrollTo(e) {
    var $link = $(this);
    var href = $link.attr("href");
    var $target;
    var duration;
    var targetTop;
    var windowTop;
    
    if(href.charAt(0) === "#") {
      e.preventDefault();
      $target = $(href);
      targetTop = $target.offset().top;
      windowTop = $(window).scrollTop();
      duration = Math.abs(windowTop - targetTop)/2;
      
      $("body,html").animate({
        scrollTop: targetTop
      },duration);
    }
  }
}(jQuery));