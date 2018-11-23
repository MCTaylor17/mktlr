(function($) {
  
  var $tools = $(".tools");
  var $tech = $(".tech");
  var techWidth = $tech.width();
  var techHeight = $tech.outerHeight();
  var techOffset = $tech.offset().top;
  
  
  $(window).resize(function() {
    techWidth = $tech.width();
    techHeight = $tech.outerHeight();
    techOffset = $tech.offset().top;
  });
  
  $tech.mousemove(function(e) {
    var percentX = e.pageX / techWidth * 100;
    var deltaX50 = percentX - 50;
    var degreesX = deltaX50/100 * 10 * -1;
    
    if(degreesX === 10) {
      console.log(percentX);
      console.log(deltaX50);
    }
    
    //console.log(degreesX);
    var percentY = (e.pageY - techOffset) / techHeight * 100;
    var deltaY50 = percentY - 50;
    var degreesY = deltaY50/100 * 15;
    
    $tools.css({transform: "rotateY("+ degreesX +"deg) rotateX("+ degreesY +"deg)"})
  });
  
  
}(jQuery));