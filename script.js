document.addEventListener("DOMContentLoaded", function() {
  var elements = document.querySelectorAll(".section-scroll");

  function fadeInOnScroll() {
    elements.forEach(function(element) {
      if (isElementInViewport(element)) {
        element.classList.add("show");
      }
    });
  }

  function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  window.addEventListener("scroll", fadeInOnScroll);
  fadeInOnScroll();
});
