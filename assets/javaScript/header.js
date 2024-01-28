var hamburger = document.querySelector('.hamburger');
var blurContainer = document.querySelector('.blur-container');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open');
    blurContainer.classList.toggle('blur');
});

var burgerMenu = document.querySelector('.burger-menu');
burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('open');
});
