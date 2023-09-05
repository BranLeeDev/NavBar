const buttonMenuHam = document.querySelector(".title-button__button");
const iconMenu = document.querySelector(".title-button__icon");
const header = document.querySelector(".header");

buttonMenuHam.addEventListener("click", () => {
  header.classList.toggle("header--active");
  iconMenu.classList.toggle("bx-rotate-90");
});
