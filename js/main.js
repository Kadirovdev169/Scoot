let burger = document.querySelector(".header__burger");
let list = document.querySelector(".header__list");
let header__link = document.querySelector(".header__link");
let main = document.querySelector(".main");
let intro = document.querySelector(".intro");

burger.addEventListener("click", () => {
  burger.classList.toggle("header__burger--opened");
  list.classList.toggle("header__list--opened");
  header__link.classList.toggle("header__link--opened");
  main.classList.toggle("main--opened");
  intro.classList.toggle("intro--opened");
})


