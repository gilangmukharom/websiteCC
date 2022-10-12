// SCROLL
const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    const positionWindows = window.scrollY > 0;
    navBar.classList.toggle("scrolling-active", positionWindows);
    sideBar.classList.remove("menu-active");
})

// MENUBAR ON
const menuBar = document.querySelector(".ri-menu-line");
const sideBar = document.querySelector(".navigation");

menuBar.addEventListener("click", () => {
    sideBar.classList.toggle("menu-active");
})

// MENUBAR OFF
const iconClose = document.querySelector(".ri-close-line");

iconClose.addEventListener("click", () => {
    sideBar.classList.remove("menu-active");
})