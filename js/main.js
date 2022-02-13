const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav");
const link = document.querySelector(".header__link");
const button = document.querySelectorAll(".faqs__item-button");
const text = document.querySelectorAll(".faqs__item-toggle-text");

burger.addEventListener("click", () => {
  burger.classList.toggle("header__burger--opened");
  nav.classList.toggle("header__nav--opened");
  link.classList.toggle("header__link--opened");
})

 