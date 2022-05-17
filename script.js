console.log('Hello Bengi, please don\'t sleep yet');

const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-nav');
const mobileLinks = document.querySelectorAll('.mobile-links');
const body = document.querySelector('body');
const burgerField = document.querySelector('.burger-nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    body.classList.toggle('fixed');
    burgerField.classList.toggle('active');
});

mobileLinks.forEach((link) => link.addEventListener('click', () => {
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    body.classList.toggle('fixed');
    burgerField.classList.toggle('active');
}));





console.log('Ok, you can sleep now')