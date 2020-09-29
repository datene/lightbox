document.addEventListener("DOMContentLoaded", (event) => {
  const lightboxInputs = document.querySelectorAll(".lightbox-image input");
  const lightboxNav = document.querySelector("#lightbox-nav");
  const previousButton = document.querySelector("#previous");
  const nextButton = document.querySelector("#next");
  const buttons = [previousButton, nextButton];

  const handleClick = (event) => {
    const button = event.currentTarget;
    const indexToActivate = button.dataset.target;
    const input = lightboxInputs[indexToActivate];
    input.checked = true;
    handleNav(input);
  };

  const handleChange = (event) => {
    const input = event.currentTarget;
    handleNav(input);
  };

  const handleNav = (input) => {
    if (!input.checked) {
      lightboxNav.classList.add("collapsed");
      document.body.style.overflow = "scroll";
    } else {
      lightboxNav.classList.remove("collapsed");
      document.body.style.overflow = "hidden";
    }

    const currentIndex = [...lightboxInputs].findIndex(
      (item) => item === input
    );
    const nextIndex =
      currentIndex >= lightboxInputs.length - 1 ? 0 : currentIndex + 1;
    const previousIndex =
      currentIndex <= 0 ? lightboxInputs.length - 1 : currentIndex - 1;

    previousButton.dataset.target = previousIndex;
    nextButton.dataset.target = nextIndex;
    [...lightboxInputs]
      .filter((lightboxInput) => lightboxInput !== input)
      .forEach((lightboxInput) => (lightboxInput.checked = false));
  };

  lightboxInputs.forEach((lightboxInput) => {
    lightboxInput.addEventListener("change", handleChange);
  });
  buttons.forEach((button) => {
    button.addEventListener("click", handleClick);
  });
  document.addEventListener("keyup", (event) => {
    if (lightboxNav.classList.contains("collapsed")) return;
    switch (event.key) {
      case "ArrowLeft":
        previousButton.click();
        break;
      case "ArrowRight":
        nextButton.click();
        break;
      case "Escape":
        lightboxInputs.forEach(
          (lightboxInput) => (lightboxInput.checked = false)
        );
        break;
    }
  });
});
