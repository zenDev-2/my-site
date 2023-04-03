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
    mobileMenu_btn.style.backgroundColor = "#f63b10";
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

// Animate Binary Numbers turning into my name

const letter_c = document.querySelector(".letter-c");
const letter_o1 = document.querySelector(".letter-o1");
const letter_n = document.querySelector(".letter-n");
const letter_o2 = document.querySelector(".letter-o2");
const letter_r = document.querySelector(".letter-r");

// const letters = {
//   letter_c: "2#v6%T-9QaBcK*pL$nXc",
//   letter_o1: "&s@j1F!8zNw7fE^0Ggko",
//   letter_n: "h3xU6R#Yl@VbP2W)oZ$n",
//   letter_o2: "KfJ@9a0c^#xLsTt1yI*mo",
//   letter_r: "7#Np@C1%tL9bXx$Hk2Dr",
// };

const letters = [letter_c, letter_o1, letter_n, letter_o2, letter_r];
const hashes = [
  "1029384756102938475c",
  "9876543210987654321o",
  "3141592653589793238n",
  "1029384756102938475o",
  "9876543210987654321r",
];
const delay = [0, 200, 400, 600, 800];

const bin_to_letter = function (letter, binary, delay) {
  setTimeout(() => {
    let count = 0;
    const interval = setInterval(() => {
      if (count === binary.length) {
        clearInterval(interval);
      } else {
        letter.innerText = binary[count];
        count++;
      }
    }, 55);
  }, delay);
};

for (let i in letters) {
  bin_to_letter(letters[i], hashes[i], delay[i]);
}
