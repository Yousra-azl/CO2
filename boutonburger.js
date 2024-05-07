var navbar__burger = document.getElementById("lanavbar__burger");
var ouverture = document.getElementById("ouverture");
var fermeture = document.getElementById("fermeBtn");

ouverture.onclick = openNav;
fermeture.onclick = closeNav;

function openNav() {
    navbar__burger.classList.add("active");
}
function closeNav() {
    navbar__burger.classList.remove("active");
}
