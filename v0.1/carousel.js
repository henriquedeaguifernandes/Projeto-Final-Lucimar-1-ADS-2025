// Script do carrossel interativo (Precisa de maiores testes, com as imagens)

let indiceAtual = 0; // Posição inicial do carrossel
const carrossel = document.getElementById("carrossel");
const itens = carrossel.getElementsByClassName("item");
const indicadores = document.getElementById("indicadores");

// Cria os indicadores de navegação (bolinhas)
function criarIndicadores() {
  for (let i = 0; i < itens.length; i++) {
    const span = document.createElement("span");
    span.addEventListener("click", () => moverPara(i));
    indicadores.appendChild(span);
  }
  atualizarIndicadores();
}

// Atualiza o destaque do indicador atual
function atualizarIndicadores() {
  const spans = indicadores.getElementsByTagName("span");
  for (let i = 0; i < spans.length; i++) {
    spans[i].className = i === indiceAtual ? "ativo" : "";
  }
}

// Move o carrossel para a esquerda (-1) ou direita (+1)
function mover(direcao) {
  indiceAtual += direcao;
  if (indiceAtual < 0) indiceAtual = itens.length - 1;
  if (indiceAtual >= itens.length) indiceAtual = 0;
  carrossel.scrollTo({
    left: itens[indiceAtual].offsetLeft,
    behavior: "smooth"
  });
  atualizarIndicadores();
}

// Move para o índice específico (clicando nas bolinhas)
function moverPara(indice) {
  indiceAtual = indice;
  carrossel.scrollTo({
    left: itens[indice].offsetLeft,
    behavior: "smooth"
  });
  atualizarIndicadores();
}

// Inicialização
window.addEventListener("DOMContentLoaded", criarIndicadores);
