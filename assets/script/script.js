
let body = document.querySelector("body");
let button = document.querySelector("nav button");

button.addEventListener("click", toggleMode);

function toggleMode() {
    body.classList.toggle("dark");
}