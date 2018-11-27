(function ($) {

  // jQuery UI Standalone Easing functions

  $.extend(jQuery.easing, {
    easeOutBounce: function (x, t, b, c, d) {
      if ((t /= d) < (1 / 2.75)) {
        return c * (7.5625 * t * t) + b;
      } else if (t < (2 / 2.75)) {
        return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
      } else if (t < (2.5 / 2.75)) {
        return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
      } else {
        return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
      }
    }
  });
  
  var $testimonials = $(".testimonials");
  var $body = $("body, html");

  var $button = $(".testimonials-button");

  $button.on("click", function () {
    var $thisButton = $(this);
    var scrollTop = $(window).scrollTop();
    var isClosed = $testimonials.is(".closed");
    var height;
    var newScrollTop;

    $testimonials.stop();
    $body.stop();

    if (isClosed) {
      $testimonials.css({
        height: "auto",
        display: "absolute"
      });

      height = $testimonials.height();
      newScrollTop = scrollTop + height / 2;

      $testimonials.css({
        height: 0,
        display: "relative"
      });
    } else {
      height = $testimonials.height();
      newScrollTop = scrollTop - height / 2;
    }

    $testimonials.animate({
      height: isClosed ? height : 0
    }, 1000, "easeOutBounce", function () {
      $testimonials.css({
        height: isClosed ? "auto" : 0
      });
    });

    $body.animate({
      scrollTop: newScrollTop
    }, 1000, "easeOutBounce");

    if (isClosed) {
      $testimonials.removeClass("closed");
      $thisButton.text("Alright, I've got it!");
    } else {
      $testimonials.addClass("closed");
      $thisButton.text("Still Not Convinced?");
    }
  })

}(jQuery));

(function ($) {
  var $wrapper = $(".testimonials");
  var $buttonBox = $("<div>", {
    "class": "button-box"
  });
  var $testimonials = $(".testimonials blockquote");

  // add buttons
  $testimonials.each(function (index) {
    var $this = $(this);
    var $button = $("<button>", {
      "class": "indicator"
    });
    var $img = $(this).find("img");
    var author = $(this).find("footer").text().split(",")[0].split(" ")[0];

    $button.attr("title", author);
    $button.append($img.clone());
    $button.on("click", function () {
      if ($this.is(":visible")) {
        return;
      }
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
      $testimonials.slideUp()
      $this.slideDown();
    });
    
    if(index === 0) {
      $button.addClass("active");
    }
    
    $buttonBox.append($button);
  });

  $wrapper.prepend($buttonBox);

  $testimonials.not(":first").hide();

}(jQuery));
