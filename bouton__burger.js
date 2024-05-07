const navbar__burger = document.getElementById("lanavbar__burger");
const ouverture = document.getElementById("ouverture");
const fermeture = document.getElementById("fermebtn");

ouverture.onclick = openNav;
fermebtn.onclick = closeNav;

function openNav() {
    navbar__burger.classList.add("active");
}
function closeNav() {
    navbar__burger.remove("active");
}