document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.caroussel-box-modeemploi > div');
    let currentSectionIndex = 0;

    function showSection(index) {
        sections.forEach((section, i) => {
            section.classList.remove('active');
            section.style.transform = 'translateX(100%)'; // Position initiale hors de la vue à droite
            if (i === index) {
                section.classList.add('active');
                section.style.transform = 'translateX(0)'; // Position active au centre
            }
        });
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

    document.querySelector('.carousel-nav .next').addEventListener('click', nextSection);
    document.querySelector('.carousel-nav .prev').addEventListener('click', prevSection);

    // Initialiser la section active
    showSection(currentSectionIndex);
});
