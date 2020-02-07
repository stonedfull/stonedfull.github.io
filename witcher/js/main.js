var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.arrow',
    },
    breakpoints: {
        540: {
            slidesPerView: 2,    
        }
    },
});

let menuButton = document.querySelector('.menu-button');
let menu = document.querySelector('.header');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('header-active');
    menuButton.classList.toggle('menu-button-active');
});