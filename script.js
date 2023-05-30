document.addEventListener("DOMContentLoaded", function() {
    console.log('hey');
    var scrollingTextElements = document.querySelectorAll(".scrolling-text");
  
    function handleScroll() {
      var windowHeight = window.innerHeight;
      var scrollPosition = window.pageYOffset;
  
      scrollingTextElements.forEach(function(element) {
        var elementPosition = element.getBoundingClientRect().top;
  
        if (elementPosition < windowHeight + scrollPosition) {
          var scrollPercentage = (windowHeight + scrollPosition - elementPosition) / (windowHeight + element.offsetHeight);
          var translateY = (1 - scrollPercentage) * 100;
  
          element.style.transform = "translateY(" + translateY + "%)";
          element.style.opacity = 1;
        }
      });
    }
  
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Handle initial scroll position
  });
  