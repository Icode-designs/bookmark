//VARIABLES
const btnOpen = document.querySelector(".btn--open");
const btnClose = document.querySelector(".btn--close");
const navMenu = document.querySelector(".header__menu");
const header = document.querySelector("header");
const logoDark = document.querySelector(".logo--dark");
const logoWhite = document.querySelector(".logo--white");
const featBtn = document.querySelectorAll(".feature__btn");
const feat = document.querySelectorAll(".feature");
const accBtn = document.querySelectorAll(".acc__button");
const ans = document.querySelectorAll(".answer");
const angleDown = document.querySelectorAll(".fa-angle-down");
const angleUp = document.querySelectorAll(".fa-angle-up");
const body = document.body;

let menuOpen = false;
let accOpen_1 = false;
let accOpen_2 = false;
let accOpen_3 = false;
let accOpen_4 = false;

btnOpen.addEventListener("click", toggleMenuOpen);
btnClose.addEventListener("click", toggleMenuClose);
featBtn[0].addEventListener("click", showActive_1);
featBtn[1].addEventListener("click", showActive_2);
featBtn[2].addEventListener("click", showActive_3);
accBtn[0].addEventListener("click", toggleAcc_1);
accBtn[1].addEventListener("click", toggleAcc_2);
accBtn[2].addEventListener("click", toggleAcc_3);
accBtn[3].addEventListener("click", toggleAcc_4);

function toggleMenuOpen() {
  btnOpen.classList.add("inactive");
  btnClose.classList.remove("inactive");
  navMenu.classList.remove("inactive");
  header.classList.add("header--active");
  logoWhite.classList.remove("inactive");
  logoDark.classList.add("inactive");
  body.classList.add("no-scroll");

  menuOpen == !menuOpen;
}

function toggleMenuClose() {
  btnOpen.classList.remove("inactive");
  btnClose.classList.add("inactive");
  navMenu.classList.add("inactive");
  header.classList.remove("header--active");
  logoWhite.classList.add("inactive");
  logoDark.classList.remove("inactive");
  body.classList.remove("no-scroll");

  menuOpen == !menuOpen;
}

function showActive_1() {
  featBtn[0].classList.add("btn--active");
  featBtn[1].classList.remove("btn--active");
  featBtn[2].classList.remove("btn--active");

  feat[0].classList.remove("inactive");
  feat[1].classList.add("inactive");
  feat[2].classList.add("inactive");
}

function showActive_2() {
  featBtn[0].classList.remove("btn--active");
  featBtn[1].classList.add("btn--active");
  featBtn[2].classList.remove("btn--active");

  feat[0].classList.add("inactive");
  feat[1].classList.remove("inactive");
  feat[2].classList.add("inactive");
}

function showActive_3() {
  featBtn[0].classList.remove("btn--active");
  featBtn[1].classList.remove("btn--active");
  featBtn[2].classList.add("btn--active");

  feat[0].classList.add("inactive");
  feat[1].classList.add("inactive");
  feat[2].classList.remove("inactive");
}

function toggleAcc_1() {
  if (!accOpen_1) {
    ans[0].classList.remove("inactive");
    angleUp[0].classList.remove("inactive");
    angleDown[0].classList.add("inactive");

    accOpen_1 = !accOpen_1;
  } else {
    ans[0].classList.add("inactive");
    angleUp[0].classList.add("inactive");
    angleDown[0].classList.remove("inactive");

    accOpen_1 = !accOpen_1;
  }
}

function toggleAcc_2() {
  if (!accOpen_2) {
    ans[1].classList.remove("inactive");
    angleUp[1].classList.remove("inactive");
    angleDown[1].classList.add("inactive");

    accOpen_2 = !accOpen_2;
  } else {
    ans[1].classList.add("inactive");
    angleUp[1].classList.add("inactive");
    angleDown[1].classList.remove("inactive");

    accOpen_2 = !accOpen_2;
  }
}

function toggleAcc_3() {
  if (!accOpen_3) {
    ans[2].classList.remove("inactive");
    angleUp[2].classList.remove("inactive");
    angleDown[2].classList.add("inactive");

    accOpen_3 = !accOpen_3;
  } else {
    ans[2].classList.add("inactive");
    angleUp[2].classList.add("inactive");
    angleDown[2].classList.remove("inactive");

    accOpen_3 = !accOpen_3;
  }
}

function toggleAcc_4() {
  if (!accOpen_4) {
    ans[3].classList.remove("inactive");
    angleUp[3].classList.remove("inactive");
    angleDown[3].classList.add("inactive");

    accOpen_4 = !accOpen_4;
  } else {
    ans[3].classList.add("inactive");
    angleUp[3].classList.add("inactive");
    angleDown[3].classList.remove("inactive");

    accOpen_4 = !accOpen_4;
  }
}
