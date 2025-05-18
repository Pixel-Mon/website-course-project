// Переключение бургер-меню
function toggleMenu() {
  const nav = document.querySelector('.header-nav');
  nav.classList.toggle('active');

  // Меняем внешний вид бургер-иконки
  const burger = document.querySelector('.burger');
  burger.classList.toggle('open');
}

// Автоматическое закрытие меню при клике вне навигации
document.addEventListener('click', function (event) {
  const nav = document.querySelector('.header-nav');
  const burger = document.querySelector('.burger');

  if (
    !nav.contains(event.target) &&
    !burger.contains(event.target) &&
    nav.classList.contains('active')
  ) {
    nav.classList.remove('active');
    burger.classList.remove('open');
  }
});
function toggleMenu() {
  document.querySelector('.header-nav').classList.toggle('show');
}