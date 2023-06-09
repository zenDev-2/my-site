"use strict";

// DOM
const mobileMenu_btn = document.querySelector(".mobileMenu--btn");
const mobileMenu = document.querySelector(".collapsed");
const symbol_top = document.querySelector(".symbol-top");
const symbol_mid = document.querySelector(".symbol-mid");
const symbol_bottom = document.querySelector(".symbol-bottom");

mobileMenu_btn.addEventListener("click", () => {
  mobileMenu.classList.toggle("mobileMenu");
  if (mobileMenu.classList.contains("mobileMenu")) {
    mobileMenu_btn.style.backgroundColor = "#334153";
  } else {
    mobileMenu_btn.style.backgroundColor = "#046ef9";
  }
  if (
    !symbol_top.classList.contains("collapse-symbols") &&
    !symbol_bottom.classList.contains("collapse-symbols")
  ) {
    symbol_top.classList.remove("add-symbols");
    symbol_mid.classList.remove("add-symbols");
    symbol_bottom.classList.remove("add-symbols");
    symbol_top.classList.add("collapse-symbols");
    symbol_bottom.classList.add("collapse-symbols");
    symbol_mid.classList.add("animate-open");
  } else {
    symbol_top.classList.remove("collapse-symbols");
    symbol_bottom.classList.remove("collapse-symbols");
    symbol_top.classList.add("add-symbols");
    symbol_bottom.classList.add("add-symbols");
    symbol_mid.classList.remove("animate-open");
    symbol_mid.classList.add("add-symbols");
  }
});

// Handles pupil color when eyelid

const blDot = document.querySelector(".blDot");
const whDot = document.querySelector(".whDot");
const ball = document.querySelector(".ball");

// const lidDrop = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     whDot.style.opacity = 0;
//     ball.style.backgroundColor = "#242424";
//     blDot.style.opacity = 0;
//     resolve("#fff");
//   }, 3200);
// });

// const shiftColor = async function () {
//   const pupilColor = await lidDrop;
//   setTimeout(() => {
//     whDot.style.opacity = 1;
//     whDot.style.backgroundColor = pupilColor;
//   }, 400);
// };

// shiftColor();
