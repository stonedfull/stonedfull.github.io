new WOW().init();

const
    burger = document.querySelector('.burger'),
    menu = document.querySelector('.menu'),
    body = document.querySelector('body');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    body.classList.toggle('show');
    menu.classList.toggle('vis');
});