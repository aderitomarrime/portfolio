
let body = document.querySelector("body");
let buttonDesktop = document.querySelector("nav button");
let buttonMobile = document.querySelector(".nav-mobile button:last-child");
let buttonMenu = document.querySelector(".menu");
let buttonClose = document.querySelector(".close");
let navMobile = document.querySelector(".nav-mobile")
let thisYear = document.querySelector(".year");

let realDate = new Date();

thisYear.textContent = `${realDate.getFullYear()}`;

buttonMobile.addEventListener("click", toggleMode);
buttonDesktop.addEventListener("click", toggleMode);
buttonMenu.addEventListener("click", showNav);
buttonClose.addEventListener("click", closeNav)

function toggleMode() {
    body.classList.toggle("dark");
}

function showNav() {
    navMobile.setAttribute("style", "left: 0")
}

function closeNav() {
    navMobile.setAttribute("style", "left: -100%")
}