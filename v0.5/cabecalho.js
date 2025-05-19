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