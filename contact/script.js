// Navigating smaller screens


var navOpenEl = document.getElementById("nav-open");
navOpenEl.addEventListener("click", openNav);

var navExitEl = document.getElementById("nav-close");
navExitEl.addEventListener("click", closeNav);

var displayNavEl = document.querySelector("nav");
displayNavEl.addEventListener("click",displayNav);



function openNav(){
    navOpenEl.style.display = "none";
    displayNavEl.style.display = "contents";
    var screen = document.getElementById("small-scr");
    screen.style.backgroundColor = "forestgreen";

    var navListEl = document.getElementById("navList");
    navListEl.style.padding = "6%";
}

function closeNav(){
    displayNavEl.style.display = "none";
    navOpenEl.style.display = "block";
    var screen = document.getElementById("small-scr");
    screen.style.backgroundColor = "black";
}

function displayNav(){

}
