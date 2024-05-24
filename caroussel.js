document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.caroussel-box-modeemploi > div');
    let currentSectionIndex = 0;

    function showSection(index) {
        sections.forEach((section, i) => {
            if (i === index) {
                section.classList.add('active');
                section.style.transform = 'translateX(0)';
                section.style.opacity = '1';
            } else {
                section.classList.remove('active');
                section.style.transform = 'translateX(100%)';
                section.style.opacity = '0';
            }
        });
    }

    function nextSection() {
        currentSectionIndex = (currentSectionIndex + 1) % sections.length; // Loop to start
        showSection(currentSectionIndex);
    }

    function prevSection() {
        currentSectionIndex = (currentSectionIndex - 1 + sections.length) % sections.length; // Loop to end
        showSection(currentSectionIndex);
    }

    document.querySelector('.carousel-nav .next').addEventListener('click', nextSection);
    document.querySelector('.carousel-nav .prev').addEventListener('click', prevSection);

    // Initialize the active section
    showSection(currentSectionIndex);
});
