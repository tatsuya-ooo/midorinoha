const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-active");
    hamburger.classList.toggle("is-active", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen);
  });
}

const form = document.querySelector(".contact-form form");
const result = document.querySelector(".contact-form__result");

if (form && result) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    result.hidden = false;
    form.reset();
  });
}
