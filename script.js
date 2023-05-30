document.addEventListener("DOMContentLoaded", function() {
    
    var sections = document.querySelectorAll(".scrolling-text");

    function handleScroll() {
      sections.forEach( sec => {
        if (isElementInViewport(sec)) {
          sec.classList.add('show-up');
        } else {
          sec.classList.remove('show-up');
        }
      });
    }

    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
    }
  
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  });
  