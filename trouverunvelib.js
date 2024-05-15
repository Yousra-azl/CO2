let bodyvelibEl = document.getElementsByTagName("bodyvelib")[0];
let minuteurvelibEl = document.getElementById("minuteurvelib");
let JoursEl = document.getElementById("jvelib");
let HeuresEl = document.getElementById("hvelib");
let MinutesEl = document.getElementById("mvelib");
let SecondesEl = document.getElementById("svelib");
let titlevelibEl = document.getElementById("titlevelib");
let paragraphevelibEl = document.getElementById("paragraphevelib");

let now = new Date();
const dateOffsetInMinutes = now.getTimezoneOffset();

const unJoursEnMs = 1000*60*60*24;
const uneHeuresEnMs = 1000*60*60;
const uneMinutesEnMs = 1000*60;

const newYear = new Date("2024-09-01");

// function
const getCountdown = function () {
let nowDate = Date.now();

let tempsRestantEnMs =
newYear - nowDate + dateOffsetInMinutes * uneMinutesEnMs;

//jours
let nbJours = Math.floor(tempsRestantEnMs / unJoursEnMs);

//heures
let resteTempsSansJoursMs = tempsRestantEnMs - nbJours * unJoursEnMs;
let nbHeures = Math.floor(resteTempsSansJoursMs / uneHeuresEnMs);

// minutes
let resteTempsSansHeuresMs = resteTempsSansJoursMs - nbHeures * uneHeuresEnMs;
let nbMinutes = Math.floor(resteTempsSansHeuresMs/ uneMinutesEnMs);

// secondes
let resteTempsSansMinutes = resteTempsSansHeuresMs - nbMinutes * uneMinutesEnMs;
let nbSecondes = Math.floor(resteTempsSansMinutes / 1000);

//texte décompte
JoursEl.textContent = nbJours;
HeuresEl.textContent = nbHeures;
MinutesEl.textContent = nbMinutes;
SecondesEl.textContent = nbSecondes;

console.log(nbJours);
console.log(nbHeures);
console.log(nbMinutes);
console.log(nbSecondes);
if ( tempsRestantEnMs < 0) {
}
}
let countDownInterval = setInterval(getCountdown, 1000)
// initialisation
getCountdown();


