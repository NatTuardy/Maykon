(() => {
  const refs = {
    toggleLinkBird: document.querySelector("[data-link-bird-toggle]"),
    toggleBtnBird: document.querySelector("[data-btn-bird-toggle]"),
    bird: document.querySelector("[data-bird]"),
  };

  refs.toggleLinkBird.addEventListener("mouseover", toggleBird);
  refs.toggleLinkBird.addEventListener("mouseout", toggleBird);
  refs.toggleLinkBird.addEventListener("touchstart", toggleBird);
  refs.toggleLinkBird.addEventListener("touchend", toggleBird);

  refs.toggleBtnBird.addEventListener("mouseover", toggleBird);
  refs.toggleBtnBird.addEventListener("mouseout", toggleBird);
  refs.toggleBtnBird.addEventListener("touchstart", toggleBird);
  refs.toggleBtnBird.addEventListener("touchend", toggleBird);

  function toggleBird() {
    refs.bird.classList.toggle("is-hidden");
  }
})();
