const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.right');
const prevButton = document.querySelector('.carousel-button.left');
const indicatorsContainer = document.querySelector('.carousel-indicators');

let currentSlide = 0;
let autoSlideInterval = null;

function updateCarousel() {
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  document.querySelectorAll('.carousel-indicators button').forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateCarousel();
}

slides.forEach((_, index) => {
  const dot = document.createElement('button');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => {
    goToSlide(index);
    resetAutoSlide();
  });
  indicatorsContainer.appendChild(dot);
});

nextButton.addEventListener('click', () => {
  nextSlide();
  resetAutoSlide();
});

prevButton.addEventListener('click', () => {
  prevSlide();
  resetAutoSlide();
});

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 5000);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

window.addEventListener('resize', updateCarousel);

updateCarousel();
startAutoSlide();