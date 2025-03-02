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

// Show slide function
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });

    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Next/Previous slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Autoplay
let autoplay = setInterval(nextSlide, 5000);
function resetAutoplay() {
    clearInterval(autoplay);
    autoplay = setInterval(nextSlide, 5000);
}

// Attach event listeners
nextButton.addEventListener('click', () => {
    nextSlide();
    resetAutoplay();
});

prevButton.addEventListener('click', () => {
    prevSlide();
    resetAutoplay();
});

// Initialize
showSlide(currentIndex);

// MOBILE NAVIGATION TOGGLE
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.navigation-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
