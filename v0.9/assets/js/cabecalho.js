document.querySelectorAll('ul li').forEach(function(item) {
  let timer;
  item.addEventListener('mouseenter', function() {
    timer = setTimeout(function() {
      const dropdown = item.querySelector('ul.dropdown');
      if (dropdown) dropdown.classList.add('show');
    }, 250);
  });
  item.addEventListener('mouseleave', function() {
    clearTimeout(timer);
    const dropdown = item.querySelector('ul.dropdown');
    if (dropdown) dropdown.classList.remove('show');
  });
});

// Scroll: header e nav transparentes
window.addEventListener('scroll', function() {
  const header = document.querySelector('.cabecalho-principal');
  const nav = document.querySelector('nav');
  if (window.scrollY > 10) {
    if(header) header.classList.add('scrolled');
    if(nav) nav.classList.add('scrolled');
  } else {
    if(header) header.classList.remove('scrolled');
    if(nav) nav.classList.remove('scrolled');
  }
});