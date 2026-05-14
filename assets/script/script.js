
let body = document.querySelector("body");
let button = document.querySelector("nav button");
let thisYear = document.querySelector(".year");

let realDate = new Date();

thisYear.textContent = `${realDate.getFullYear()}`;

button.addEventListener("click", toggleMode);

function toggleMode() {
    body.classList.toggle("dark");
}