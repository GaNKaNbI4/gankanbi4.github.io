const mediaQuery = window.matchMedia("(max-width: 768px)");

function deviseWidth(e) {
  // Check if the media query is true
  if (e.matches) {
    document.addEventListener("click", showMore);
    function showMore(e) {
      if (e.target.closest(".info-card__top")) {
        let currentBlock = e.target.closest(".info-card__top");
        currentBlock
          .querySelector(".info-card__cross")
          .classList.toggle("info-card__cross--active");
        currentBlock.nextElementSibling.classList.toggle(
          "info-card__text--active"
        );
      }
    }
  }
}

// Register event listener
mediaQuery.addListener(deviseWidth);

// Initial check
deviseWidth(mediaQuery);
