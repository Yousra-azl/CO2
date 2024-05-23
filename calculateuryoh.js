// script.js
function calculerCO2() {
    // Récupérer les valeurs des champs
    var distanceParJour = parseFloat(document.getElementById('nb-km').value);
    var joursParSemaine = parseInt(document.getElementById('nb-jr').value);

    // Calculer la distance totale par semaine
    var distanceTotaleSemaine = distanceParJour * joursParSemaine;
    var facteurEmission = 0.12;
    var emissionsCO2 = distanceTotaleSemaine * facteurEmission;

    // Afficher le résultat
    document.getElementById('resultat').innerText = "Les émissions de CO2 estimées sont de " + emissionsCO2.toFixed(2) + " kg par semaine.";
}
