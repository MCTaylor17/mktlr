(function($) {
  var $banner = $(".banner");
  var $mktlr = $(".mktlr");
  var $title = $(".banner h2");
    
  setTimeout(function() {
    $mktlr.removeClass("collapsed");    
  },1000);
  
  function para() {
    var scrollTop = $(window).scrollTop();
    
    
    $title.css("top", -1 * scrollTop /15 + 20);
    $title.css("left", scrollTop /3 + 20 + 50);
    $banner.css("top", scrollTop / 3.8);
  }
  
  $(window).scroll(para);
}(jQuery));