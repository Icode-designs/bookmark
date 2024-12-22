//VARIABLES
const btnOpen = document.querySelector(".btn--open");
const btnClose = document.querySelector(".btn--close");

let menuOpen = false;

btnOpen.addEventListener("click", toggleMenuOpen);
btnClose.addEventListener("click", toggleMenuClose);

function toggleMenuOpen() {
  btnOpen.classList.add("inactive");
  btnClose.classList.remove("inactive");

  menuOpen == !menuOpen;
}

function toggleMenuClose() {
  btnOpen.classList.remove("inactive");
  btnClose.classList.add("inactive");

  menuOpen == !menuOpen;
}
