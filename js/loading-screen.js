  (function($) {
    $("main").hide();
    var particles = Particles.init({
      selector: '.particles'
    });
    
    var interval = setInterval(loadingMessage,1000);
    
    var $dots = $(".loading-screen .dots");
    var count = 0;
    function loadingMessage() {
      var dots;
      switch (count) {
        case 0:
          dots = "&nbsp;&nbsp;&nbsp;";
          break;
        case 1:
          dots = ".&nbsp;&nbsp;";
          break;
        case 2:
          dots = "..&nbsp;";
          break;
        case 3:
          dots = "...";
          break;
      }
            
      count++;
      
      if(count === 4) {
        count = 0;
      }
      
      $dots.html(dots);
    }
    
    $(window).on("load",removeLoadingScreen);

    function removeLoadingScreen() {
      clearInterval(interval);
      $("main").fadeIn(function() {
        $(".loading-screen").remove();  
        particles.destroy();
      });
    }
  }(jQuery));
