const btn = document.querySelector(".header__nav__hamburger");
const menu = document.querySelector(".header__nav__mmenu");
const input = document.querySelector("input");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  menu.classList.toggle("hidden");
});
