/* selection les elements html pour affiché mes donnes dynamiser... */
let bodyvelibEl = document.getElementById("bodyvelib"); 
let minuteurvelibEl = document.getElementById("minuteurvelib"); 
let JoursEl = document.getElementById("jvelib"); 
let HeuresEl = document.getElementById("hvelib"); 
let MinutesEl = document.getElementById("mvelib"); 
let SecondesEl = document.getElementById("svelib"); 
let titlevelibEl = document.getElementById("titlevelib"); 
let paragraphevelibEl = document.getElementById("paragraphevelib"); 

/* constantes pour les durees en millisecondes*/
const unJourEnMs = 1000 * 60 * 60 * 24; /* Nb de millisecondes dans un jour*/
const uneHeureEnMs = 1000 * 60 * 60; /* idem dans une heure*/
const uneMinuteEnMs = 1000 * 60; /* idem dans une minute*/

/* date cible pour e décompte*/
const dateCible = new Date("2024-09-01T00:00:00");

/* fonction pour obtenir et mettre à jour le decompte*/
const getCountdown = function () {
    /* permet obtenir la date et l'heure actuelles en millisecondes depuis le 1er janvier 1970*/
    let nowDate = new Date().getTime();

    /* calcule du temps restant en millisecondes jusqu'a la date cible*/
    let tempsRestantEnMs = dateCible.getTime() - nowDate;

    /* si le temps restant est ecouler ça arrete le minuteur et affiche zero pour chaque unite de temps */
    if (tempsRestantEnMs <= 0) {
        clearInterval(countDownInterval); /* arrête le minuteur */
        JoursEl.textContent = 0; /* affiche zero pour les jours */
        HeuresEl.textContent = 0; /* affiche zero pour les heures */
        MinutesEl.textContent = 0; /* affiche zero pour les minutes */
        SecondesEl.textContent = 0; /* affiche zero pour les secondes */
        return; /* Sortir de la fonction */
    }

    /* calcule le nombre de jours restants */
    let nbJours = Math.floor(tempsRestantEnMs / unJourEnMs);

    /* calcule le reste du temps sans les jours */ 
    let resteTempsSansJoursMs = tempsRestantEnMs - nbJours * unJourEnMs;

    /* calcule le nombre d'heures restants */
    let nbHeures = Math.floor(resteTempsSansJoursMs / uneHeureEnMs);

    /* calcule le reste du temps sans les heures */
    let resteTempsSansHeuresMs = resteTempsSansJoursMs - nbHeures * uneHeureEnMs;

    /* calcule le nombre de minutes restantes */
    let nbMinutes = Math.floor(resteTempsSansHeuresMs / uneMinuteEnMs);

    /calcule le reste du temps sans les minutes */
    let resteTempsSansMinutesMs = resteTempsSansHeuresMs - nbMinutes * uneMinuteEnMs;

    /* calcule le nombre de secondes restantes */
    let nbSecondes = Math.floor(resteTempsSansMinutesMs / 1000);

    /* permet de mettre a jour l'affichage du decompte avec le calcule des valeurs */
    JoursEl.textContent = nbJours; /* affiche les jours qui reste */
    HeuresEl.textContent = nbHeures; /* affiche les heures qui reste */
    MinutesEl.textContent = nbMinutes; /* affiche les minutes ui reste */
    SecondesEl.textContent = nbSecondes; /* affiche les secondes qui reste */
};

/* demarre le minuteur les mise à jour ce font toutes les secondes (1000 MILLISECONDES) */
let countDownInterval = setInterval(getCountdown, 1000);

/* appel immediatement pour afficher le decompte sans attendre une seconde */
getCountdown();



