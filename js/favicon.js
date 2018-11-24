(function($) {
  var $favicon = $("link[rel='icon']");
  var happyIcon = "img/favicons/favicon-happy.png?v=1";
  var sadIcon = "img/favicons/favicon-sad.png?v=1";
  
  function updateFavicon(iconPath) {
    return function() {
      $favicon.attr("href", iconPath);
    }
  }
  
  $(window).blur(updateFavicon(sadIcon));
  $(window).focus(updateFavicon(happyIcon));

}(jQuery));