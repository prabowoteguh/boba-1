const slides = document.querySelectorAll('.carousel-item img');
const btnright = document.querySelector('.right');
const btnLeft = document.querySelector('.left');
const widthSlide = 500;
const maxSlide = slides.length - 1
let curSlide = 0;

const slideRight = () => {
    if (curSlide == maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }

    slides.forEach((slide, idx) => {
        slide.style.transform = `translateX(${widthSlide * (-curSlide)}px)`
    });
}

const slideLeft = () => {
    if (curSlide == 0) {
        curSlide = maxSlide
    } else {
        curSlide--;
    }

    console.log(curSlide)

    slides.forEach((slide, idx) => {
        slide.style.transform = `translateX(${widthSlide * (-curSlide)}px)`
    });
}

btnright.addEventListener('click', slideRight)
btnLeft.addEventListener('click', slideLeft)

setInterval(slideRight, 3000)