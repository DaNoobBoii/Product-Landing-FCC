var navbar = document.querySelector('.nav-links');
var burger = document.querySelector('.burger');

burger.addEventListener('click', function() {
  navbar.classList.toggle('active');
  burger.classList.toggle('active');
});