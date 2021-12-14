(() => {
  const refs = {
    toggleLinkBird: document.querySelector("[data-link-bird-toggle]"),
    toggleBtnBird: document.querySelector("[data-btn-bird-toggle]"),
    // openBird: document.querySelector("[data-bird-open]"),
    // closeBird: document.querySelector("[data-bird-close]"),
    bird: document.querySelector("[data-bird]"),
  };

  refs.toggleLinkBird.addEventListener("mouseover", toggleBird);
  refs.toggleLinkBird.addEventListener("mouseout", toggleBird);
  refs.toggleBtnBird.addEventListener("mouseover", toggleBird);
  refs.toggleBtnBird.addEventListener("mouseout", toggleBird);

  function toggleBird() {
    refs.bird.classList.toggle("is-hidden");
  }
})();
