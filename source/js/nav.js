var header = document.querySelector('.header');
var nav = header.querySelector('.nav');
var humburger = header.querySelector('.humburger');

nav.classList.add('nav--closed');
humburger.classList.add('humburger--open');

humburger.addEventListener('click', function () {
  nav.classList.toggle('nav--closed');
  humburger.classList.toggle('humburger--open');
  humburger.classList.toggle('humburger--close');
});
