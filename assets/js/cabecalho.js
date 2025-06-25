// Seleciona todos os itens <li> dentro de <ul> no documento
document.querySelectorAll('ul li').forEach(function(item) {
  let timer;

  // Quando o mouse entra em um item da lista
  item.addEventListener('mouseenter', function() {
    // Inicia um temporizador de 250ms antes de mostrar o submenu
    timer = setTimeout(function() {
      // Procura um submenu com a classe 'dropdown' dentro do item atual
      const dropdown = item.querySelector('ul.dropdown');
      if (dropdown) dropdown.classList.add('show'); // Adiciona a classe para mostrar o submenu
    }, 250);
  });

  // Quando o mouse sai do item da lista
  item.addEventListener('mouseleave', function() {
    clearTimeout(timer); // Cancela o temporizador, se necessário
    const dropdown = item.querySelector('ul.dropdown');
    if (dropdown) dropdown.classList.remove('show'); // Remove a classe para esconder o submenu
  });
});

// Adiciona evento para quando o usuário rolar a página
window.addEventListener('scroll', function() {
  const header = document.querySelector('.cabecalho-principal'); // Cabeçalho principal
  const nav = document.querySelector('nav'); // Barra de navegação

  // Se a rolagem for maior que 10px, aplica estilo de fundo com classe "scrolled"
  if (window.scrollY > 10) {
    if(header) header.classList.add('scrolled');
    if(nav) nav.classList.add('scrolled');
  } else {
    // Caso contrário, remove a classe para manter fundo transparente
    if(header) header.classList.remove('scrolled');
    if(nav) nav.classList.remove('scrolled');
  }
});
