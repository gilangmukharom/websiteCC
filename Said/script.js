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

//Search
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    
    
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.visibility = "visible";
            li[i].style.display = "";
            
        } else {
            li[i].style.display = "none";
        }
    }
}