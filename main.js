// declarations
const bgColor = ["#a1eafb", "#fdfdfd", "#ffcef3", "#cabbe9"];
const allImages = [
  "./dist/images/pic-1.jpeg",
  "./dist/images/pic-2.jpeg",
  "./dist/images/pic-3.jpeg",
  "./dist/images/pic-4.jpeg",
];
var i = 0;
const currentImg = document.querySelector('.carousel__images');
const carousel = document.querySelector('.carousel');
const carouselWrapper = document.querySelector('.carousel-wrapper');
const optionNext = document.querySelector('.carousel__next');
const optionPrev = document.querySelector('.carousel__prev');

// data filling
currentImg.style.backgroundImage = `url(${allImages[i]})`;
carouselWrapper.style.background = bgColor[i];

// next function
optionNext.addEventListener('click', function () {
    i = i + 1;
    i = i % allImages.length;
    carouselWrapper.style.background = bgColor[i];
    carousel.classList.add('animate-next');
    setTimeout(() => {
        currentImg.style.backgroundImage = `url(${allImages[i]})`;
    }, 450);
    setTimeout(() => {
      carousel.classList.remove("animate-next");
    }, 650);
});

// prev function
optionPrev.addEventListener('click', function () {
    if (i === 0) {
        i = allImages.length
    }
    i = i - 1;
    carouselWrapper.style.background = bgColor[i];
    carousel.classList.add("animate-prev");
    setTimeout(() => {
      currentImg.style.backgroundImage = `url(${allImages[i]})`;
    }, 450);
    setTimeout(() => {
      carousel.classList.remove("animate-prev");
    }, 650);
});