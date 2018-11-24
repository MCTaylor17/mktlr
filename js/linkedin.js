(function($) {
  var timeout = null;
  var $linkedIn = $(".linkedin");
  
  function hideIcon() {
    $linkedIn.addClass("hidden");
    clearTimeout(timeout);
    timeout = setTimeout(unhideIcon, 2500);
  }
  
  function unhideIcon() {
    $linkedIn.removeClass("hidden");
  }
  
  $(window).scroll(hideIcon);
}(jQuery));