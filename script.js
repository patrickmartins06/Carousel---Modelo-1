let slideIndex = 0;
const slidesContainer = document.querySelector(".carousel-slides");
const slides = document.getElementsByClassName("carousel-slide");
const slideWidth = slides[0].clientWidth + 10;

showSlide(slideIndex);

function showSlide(index) {
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }

  slidesContainer.style.transform = `translateX(-${slideWidth * index}px)`;

  slideIndex = index;
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

document.querySelector(".carousel-prev").addEventListener("click", prevSlide);
document.querySelector(".carousel-next").addEventListener("click", nextSlide);

// script.js

