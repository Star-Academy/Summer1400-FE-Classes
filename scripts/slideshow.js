// CONFIG
const COLORS = ['ff441f', 'ffb41f', '8fff1f', '1e90ff', 'ff1f7c'];

// sample url: https://via.placeholder.com/1920x1080/1a1a1a/fafafa?text=some_text

// MAIN
// variables
const leftButton = document.querySelector('.button--left');
const slide = document.querySelector('.slide');
const rightButton = document.querySelector('.button--right');

let slideIndex = 0;
let timeout;

// functions
const changeSlide = () => {
    slide.style.backgroundImage = `url(https://via.placeholder.com/1920x1080/${
        COLORS[slideIndex]
    }/fafafa?text=Slide+${slideIndex + 1})`;

    resetTimer();
};

const nextSlide = () => {
    slideIndex++;
    if (slideIndex >= COLORS.length) slideIndex = 0;

    changeSlide();
};

const prevSlide = () => {
    slideIndex--;
    if (slideIndex < 0) slideIndex = COLORS.length - 1;

    changeSlide();
};

const resetTimer = () => {
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(nextSlide, 3000);
};

// main
changeSlide();

leftButton.addEventListener('click', prevSlide);
rightButton.addEventListener('click', nextSlide);
