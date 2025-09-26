let currentSlide = 0;
const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");
const totalSlides = dots.length;
let autoScrollInterval;

function showSlide(index) {
  currentSlide = index;
  slides.style.transform = `translateX(-${index * 500}px)`;
  dots.forEach((dot, i) =>
    dot.classList.toggle("active", i === index)
  );
}

function goToSlide(index) {
  showSlide(index);
  resetAutoScroll();
}

function nextSlide() {
  let next = (currentSlide + 1) % totalSlides;
  showSlide(next);
}

function startAutoScroll() {
  autoScrollInterval = setInterval(nextSlide, 5000);
}

function resetAutoScroll() {
  clearInterval(autoScrollInterval);
  startAutoScroll();
}


showSlide(0);
startAutoScroll();