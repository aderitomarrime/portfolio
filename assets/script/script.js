
let body = document.querySelector("body");
let buttonDesktopDark = document.querySelector("nav > .dark-button");
let buttonDesktopLight = document.querySelector("nav > .light-button");
let buttonMobileDark = document.querySelector(".nav-mobile .dark-button");
let buttonMobileLight = document.querySelector(".nav-mobile .light-button");
let buttonMobile = document.querySelector(".nav-mobile button:last-child");
let buttonMenu = document.querySelector(".menu");
let buttonClose = document.querySelector(".close");
let navMobile = document.querySelector(".nav-mobile")
let navLinksMobile = document.querySelectorAll(".bottom-elements ul")
let thisYear = document.querySelector(".year");

let realDate = new Date();

thisYear.textContent = `${realDate.getFullYear()}`;

buttonDesktopDark.addEventListener("click", toggleDark);
buttonDesktopLight.addEventListener("click", toggleLight);
buttonMobileDark.addEventListener("click", toggleDark);
buttonMobileLight.addEventListener("click", toggleLight);
buttonMenu.addEventListener("click", showNav);
buttonClose.addEventListener("click", closeNavByCloseButton)

navLinksMobile.forEach(closeNavByLinks);

function toggleDark() {
    body.classList.remove("light");
    body.classList.add("dark");
}

function toggleLight() {
    body.classList.remove("dark");
    body.classList.add("light");
}

function showNav() {
    navMobile.setAttribute("style", "left: 0")
}

function closeNavByCloseButton() {
    navMobile.setAttribute("style", "left: -100%")
}

function closeNavByLinks(item) {
    item.addEventListener("click", ()=> {
        navMobile.setAttribute("style", "left: -100%")
    })
}