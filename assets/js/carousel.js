// Seleciona o contêiner das imagens do carrossel
const track = document.querySelector('.carousel-track');

// Cria um array com todos os slides (filhos do contêiner)
const slides = Array.from(track.children);

// Botões de navegação direita e esquerda
const nextButton = document.querySelector('.carousel-button.right');
const prevButton = document.querySelector('.carousel-button.left');

// Contêiner dos indicadores (bolinhas de navegação)
const indicatorsContainer = document.querySelector('.carousel-indicators');

// Índice atual do slide visível
let currentSlide = 0;

// Variável para armazenar o intervalo de mudança automática de slides
let autoSlideInterval = null;

// Atualiza o carrossel para mostrar o slide atual
function updateCarousel() {
  // Move o track para a esquerda proporcionalmente ao slide atual
  track.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Atualiza os indicadores, ativando apenas o correspondente ao slide atual
  document.querySelectorAll('.carousel-indicators button').forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

// Muda para um slide específico
function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
}

// Avança para o próximo slide (com loop para o primeiro slide ao fim)
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
}

// Volta para o slide anterior (com loop para o último slide)
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateCarousel();
}

// Cria os botões de indicadores dinamicamente, com evento de clique
slides.forEach((_, index) => {
  const dot = document.createElement('button');
  if (index === 0) dot.classList.add('active'); // Ativa o primeiro por padrão

  // Quando o botão for clicado, vai para o slide correspondente
  dot.addEventListener('click', () => {
    goToSlide(index);
    resetAutoSlide(); // Reinicia o timer do carrossel automático
  });

  indicatorsContainer.appendChild(dot); // Adiciona o botão ao contêiner
});

// Quando o botão "próximo" for clicado
nextButton.addEventListener('click', () => {
  nextSlide();
  resetAutoSlide(); // Reinicia o carrossel automático
});

// Quando o botão "anterior" for clicado
prevButton.addEventListener('click', () => {
  prevSlide();
  resetAutoSlide();
});

// Inicia o carrossel automático (troca de slides a cada 5 segundos)
function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 5000);
}

// Reinicia o carrossel automático após interação manual
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

// Atualiza a posição do carrossel se a tela for redimensionada
window.addEventListener('resize', updateCarousel);

// Inicia o carrossel com slide correto e ativa o modo automático
updateCarousel();
startAutoSlide();
