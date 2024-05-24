// Attend que le DOM soit entièrement chargé avant d'exécuter le code suivant
/* Attente du chargement du DOM: Le code commence par attendre que le DOM soit entièrement chargé. Cela garantit que le code JavaScript 
ne s'exécutera pas avant que tous les éléments de la page ne soient disponibles. */
document.addEventListener('DOMContentLoaded', () => {

    // Récupère les références vers les éléments DOM nécessaires
    /* Sélection des éléments DOM: Les boutons "Suivant" et "Précédent", ainsi que le conteneur 
    des diapositives, sont sélectionnés à l'aide de leurs identifiants de classe ou d'attribut. */
    const nextButton = document.getElementById('nextSlide'); // Sélectionne le bouton "Suivant"
    const prevButton = document.getElementById('prevSlide'); // Sélectionne le bouton "Précédent"
    const slides = document.querySelector('.slides'); // Sélectionne le conteneur des diapositives
    const totalSlides = document.querySelectorAll('.slide').length;// Compte le nombre total de diapositives dans le carrousel
// Initialise l'index de la diapositive actuelle à 0
    /* Initialisation de l'index: La variable currentSlide est initialisée à 0 pour indiquer que la première diapositive est affichée initialement */
    let currentSlide = 0;

    // Ajoute un écouteur d'événement pour le bouton "Suivant"
    nextButton.addEventListener('click', () => {
        // Vérifie si ce n'est pas la dernière diapositive
        if (currentSlide < totalSlides - 1) {
            // Passe à la diapositive suivante
            currentSlide++;
            // Met à jour la position des diapositives
            updateSlidePosition();
        }
    });

    // Ajoute un écouteur d'événement pour le bouton "Précédent"
    /* Écouteurs d'événements pour les boutons: Des écouteurs d'événements sont ajoutés
     aux boutons "Suivant" et "Précédent" pour détecter les clics des utilisateurs. */
    prevButton.addEventListener('click', () => {
        // Vérifie si ce n'est pas la première diapositive
        if (currentSlide > 0) {
            // Passe à la diapositive précédente
            currentSlide--;
            // Met à jour la position des diapositives
            updateSlidePosition();
        }
    });

    // Fonction pour mettre à jour la position des diapositives
    /* Fonction de mise à jour de la position des diapositives: Une fonction est définie pour mettre à jour 
    la position des diapositives en fonction de la diapositive actuellement affichée. Cette fonction ajuste la valeur
     de la propriété transform du conteneur des diapositives pour déplacer horizontalement les diapositives visibles dans le carrousel. */
    function updateSlidePosition() {
        // Déplace les diapositives horizontalement pour montrer la diapositive actuelle
        slides.style.transform = `translateX(-${currentSlide 100}%)`;
    }
});
