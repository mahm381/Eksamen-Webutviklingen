const slides = document.querySelectorAll('.slide');
const nextArrow = document.querySelector('.arrow.next');
const prevArrow = document.querySelector('.arrow.prev');
let currentSlide = 0;

const updateSlides = () => {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
    });
    slides[currentSlide].classList.add('active');
};

// Initial slide setup
updateSlides();

const changeSlide = (direction) => {
    if (direction === 'next') {
        currentSlide = (currentSlide + 1) % slides.length;
    } else if (direction === 'prev') {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    }
    updateSlides();
};

nextArrow.addEventListener('click', () => changeSlide('next'));
prevArrow.addEventListener('click', () => changeSlide('prev'));
