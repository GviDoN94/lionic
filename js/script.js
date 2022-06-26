const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__nav");
const menuLinks = menu.querySelectorAll(".nav__link");
const articlesMore = document.querySelector(".articles__more");
const articles = document.querySelectorAll(".articles__item");

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

articlesMore.addEventListener("click", () => {
  articles.forEach((el) => {
    el.classList.add("articles__item-visible");
  });

  articlesMore
    .closest(".articles__center")
    .classList.add("articles__center-hidden");
});
