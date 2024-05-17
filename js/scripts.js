console.log("Hello! Welcome to my Portfolio Site")
function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }

  // Smooth scrolling function
function smoothScrollTo(target) {
  var headerOffset = 43;

  $("html, body").animate(
    {
      scrollTop: target.offset().top - headerOffset,
    },
    1000,
    function () {
      // Callback after animation
      var $target = $(target);
      $target.focus();
      if ($target.is(":focus")) {
        return false;
      } else {
        $target.attr("tabindex", "-1");
        $target.focus();
      }
    }
  );
}