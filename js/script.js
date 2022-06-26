const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__nav");
const menuLinks = menu.querySelectorAll(".nav__link");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger-active");
  menu.classList.toggle("header__nav-active");
  document.body.classList.toggle("stop-scroll");
});

menuLinks.forEach((el) =>
  el.addEventListener("click", () => {
    burger.classList.remove("burger-active");
    menu.classList.remove("header__nav-active");
    document.body.classList.remove("stop-scroll");
  })
);
