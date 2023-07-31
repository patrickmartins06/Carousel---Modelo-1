// Seu código JavaScript anterior

// Selecionar os elementos corretos para os carrosséis
const slidesContainers = document.querySelectorAll(".carousel-slides");
const slides = document.querySelectorAll(".carousel-slide");
const slideWidth = slides[0].clientWidth + 10;

// Funções de controle dos carrosséis
function showSlide(slideContainer, index) {
    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }

    slideContainer.style.transform = `translateX(-${slideWidth * index}px)`;
}

function nextSlide(event) {
    const slideContainer = event.target.previousElementSibling;
    const currentIndex = Array.from(slidesContainers).indexOf(slideContainer);
    showSlide(slideContainer, currentIndex + 1);
}

function prevSlide(event) {
    const slideContainer = event.target.previousElementSibling.previousElementSibling;
    const currentIndex = Array.from(slidesContainers).indexOf(slideContainer);
    showSlide(slideContainer, currentIndex - 1);
}

// Adicionar eventos de clique aos botões de navegação dos carrosséis
document.querySelectorAll(".carousel-prev").forEach(button => button.addEventListener("click", prevSlide));
document.querySelectorAll(".carousel-next").forEach(button => button.addEventListener("click", nextSlide));

// Seu código JavaScript anterior
