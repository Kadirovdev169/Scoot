const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav");
const link = document.querySelector(".header__link");
const button = document.querySelector(".faqs__item-button-active");
const text = document.querySelector(".faqs__item-toggle-text-active");

burger.addEventListener("click", () => {
  burger.classList.toggle("header__burger--opened");
  nav.classList.toggle("header__nav--opened");
  link.classList.toggle("header__link--opened");
})

button.addEventListener("click", () => {
  text.classList.toggle("faqs__item--opened")
})

 