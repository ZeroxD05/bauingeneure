// Burger menu and sticky header logic
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector('.burger');
  const mobileNav = document.getElementById('mobile-nav');
  const backdrop = document.querySelector('.mobile-nav-backdrop');
  const siteHeader = document.querySelector('.site-header');
  let lastScroll = 0;

  // Burger menu open/close
  if (burger && mobileNav && backdrop) {
    const closeMenu = () => {
      burger.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('hidden', '');
      backdrop.setAttribute('hidden', '');
      document.body.style.overflow = '';
    };
    burger.addEventListener('click', () => {
      const expanded = burger.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        closeMenu();
      } else {
        burger.setAttribute('aria-expanded', 'true');
        mobileNav.removeAttribute('hidden');
        backdrop.removeAttribute('hidden');
        document.body.style.overflow = 'hidden';
      }
    });
    backdrop.addEventListener('click', closeMenu);
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  // Sticky header reduction on scroll
  if (siteHeader) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY > 36;
      siteHeader.classList.toggle('header--compact', scrolled);
      // Hide nav and show only logo + button when scrolling down
      if (scrolled) {
        siteHeader.querySelector('.main-nav')?.classList.add('is-hidden');
        siteHeader.querySelector('.burger')?.classList.add('is-hidden');
      } else {
        siteHeader.querySelector('.main-nav')?.classList.remove('is-hidden');
        siteHeader.querySelector('.burger')?.classList.remove('is-hidden');
      }
    });
  }
});
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
