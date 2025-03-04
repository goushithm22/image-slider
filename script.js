document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const dotsContainer = document.querySelector('.pagination-dots');
    let currentIndex = 0;

    // Create pagination dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);

        dot.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
            resetAutoplay();
        });
    });

    // Show slide function (syncs slides & dots)
    function showSlide(index) {
        slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
        document.querySelectorAll('.dot').forEach((dot, i) => dot.classList.toggle('active', i === index));
    }

    // FIX: Make arrows move in the correct direction
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // FIX: Ensure buttons are correctly assigned
    nextButton.addEventListener('click', () => {
        nextSlide();
        resetAutoplay();
    });

    prevButton.addEventListener('click', () => {
        prevSlide();
        resetAutoplay();
    });

    // FIX: Auto-play slides (correct order)
    let autoplay = setInterval(nextSlide, 5000);
    
    function resetAutoplay() {
        clearInterval(autoplay);
        autoplay = setInterval(nextSlide, 5000);
    }

    // Toggle menu (for mobile)
    document.querySelector('.menu-toggle').addEventListener('click', function () {
        document.querySelector('.navigation-menu').classList.toggle('active');
    });

    // Initialize first slide
    showSlide(currentIndex);
});
