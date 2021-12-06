(() => {
  const refs = {
    toggleBird: document.querySelector("[data-bird-toggle]"),
    // openBird: document.querySelector("[data-bird-open]"),
    // closeBird: document.querySelector("[data-bird-close]"),
    bird: document.querySelector("[data-bird]"),
  };

  refs.toggleBird.addEventListener("mouseover", toggleBird);
  refs.toggleBird.addEventListener("mouseout", toggleBird);

  function toggleBird() {
    refs.bird.classList.toggle("is-hidden");
  }
})();
