"use strict";

/* Element toggle function */
const elementToggleFunction = (elem) => {
    elem.classList.toggle("active");
};

/* Navbar variables */
const $navbar = document.querySelector("[data-nav]");
const $navOpenBtn = document.querySelector("[data-nav-open-btn]");
const $navCloseBtn = document.querySelector("[data-nav-close-btn]");
const $overlay = document.querySelector("[data-overlay]");

const navElemArr = [$navOpenBtn, $navCloseBtn, $overlay];

for (const elem of navElemArr) {
    elem.addEventListener("click", () => {
        elementToggleFunction($navbar);
        elementToggleFunction($overlay);
        elementToggleFunction(document.body);
    });
}
