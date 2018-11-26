(function($) {
  var $customers = $(".customers");
  var userOffset = $customers.offset().top;
  var userHeight = $customers.height();
  var userWidth = $customers.width();
  var lerping = false;
  
  var $foreground = $(".customers .foreground");
  var fgX = parseInt($foreground.css("background-position-x"));
  var fgXNow = fgX;
  
  var $background = $(".customers .background");
  var bgX = parseInt($background.css("background-position-x"));
  var bgY = parseInt($background.css("background-position-y"));
  var bgXNow = bgX;
  var bgYNow = bgY;
  
  function lerp() {
    var fgDeltaX = fgX - fgXNow;
    var bgDeltaX = bgX - bgXNow;
    var bgDeltaY = bgY - bgYNow;
    
    if(Math.abs(fgDeltaX) < 1 && Math.abs(bgDeltaX) < 1 && Math.abs(bgDeltaY) < 1) {
      lerping = false;
    } else {
      fgXNow += fgDeltaX * 0.025;
      bgXNow += bgDeltaX * 0.025;
      bgYNow += bgDeltaY * 0.025;
      
      requestAnimationFrame(function() {
        $foreground.css({
          "background-position-x": fgXNow + "%"
        });

        $background.css({
          "background-position-x": bgXNow + "%",
          "background-position-y": bgYNow + "%"
        });
      });
      
      setTimeout(lerp,1000/30);
    }
  }
  
  $customers.on("mousemove", function(e) {
    var percentX, percentY;
    
    percentX = e.pageX / userWidth * 100;
    percentY = (e.pageY - userOffset) / userHeight * 100;
    bgX = percentX;
    fgX = 100 - percentX;
    bgY = 100 - percentY;


    if(!lerping) {
      lerping = true;
      lerp();
    }
  });
  
  $(window).on("resize load", function() {
    userOffset = $customers.offset().top;
    userHeight = $customers.height();
    userWidth = $customers.width();
  });
  
  var left = true;
  $(window).scroll(function() {
    if(!lerping) {
      if(left) {
        fgX+= 0.05;
        bgX-= 0.05;
        
        if(fgX >= 80) {
          left = false; 
        }
      } else {
        fgX-= 0.05;
        bgX+= 0.05;
        
        if (fgX <= 20) {
          left = true;
        }
      }
      
      fgXNow = fgX;
      bgXNow = bgX;

      requestAnimationFrame(function() {
        $foreground.css({
          "background-position-x": fgX + "%"
        });

        $background.css({
          "background-position-x": bgX + "%"
        });
      });
    }
  });
  
}(jQuery));