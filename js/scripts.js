const buttonMenuHam = document.querySelector(".title-button__button");
const header = document.querySelector(".header");

buttonMenuHam.addEventListener("click", () => {
  header.classList.toggle("header--active");
});
