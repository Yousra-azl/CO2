document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.caroussel-box-modeemploi > div');
    let currentSectionIndex = 0;

    showSection(currentSectionIndex);

    function showSection(index) {
        // Cacher toutes les sections
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Afficher la section à l'index spécifié
        sections[index].classList.add('active');
    }

    function nextSection() {
        currentSectionIndex++;
        if (currentSectionIndex >= sections.length) {
            currentSectionIndex = 0; // Revenir au début
        }
        showSection(currentSectionIndex);
    }

    function prevSection() {
        currentSectionIndex--;
        if (currentSectionIndex < 0) {
            currentSectionIndex = sections.length - 1; // Aller à la fin
        }
        showSection(currentSectionIndex);
    }

    // Ajouter des gestionnaires d'événements aux boutons de navigation
    document.querySelector('.carousel-nav .next').addEventListener('click', nextSection);
    document.querySelector('.carousel-nav .prev').addEventListener('click', prevSection);
});
