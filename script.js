const form = document.getElementById("contactForm");
const statusText = document.getElementById("formStatus");
const yearEl = document.getElementById("year");
const heroSlider = document.querySelector("[data-hero-slider]");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (form && statusText) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      statusText.textContent = "Bitte alle Felder korrekt ausfuellen.";
      return;
    }

    statusText.textContent = "Danke! Ihre Nachricht wurde vorbereitet.";
    form.reset();
  });
}

if (heroSlider) {
  const slides = heroSlider.querySelectorAll("[data-hero-slide]");
  const indicators = heroSlider.querySelectorAll("[data-hero-indicator]");
  let activeIndex = 0;

  const setActiveSlide = (nextIndex) => {
    slides[activeIndex].classList.remove("is-active");
    indicators[activeIndex].classList.remove("is-active");

    activeIndex = nextIndex;

    slides[activeIndex].classList.add("is-active");
    indicators[activeIndex].classList.add("is-active");
  };

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      setActiveSlide(index);
    });
  });

  setInterval(() => {
    const nextIndex = (activeIndex + 1) % slides.length;
    setActiveSlide(nextIndex);
  }, 4200);
}
