'use strict';
document.addEventListener('DOMContentLoaded', () => {

    const main = document.querySelector('main'),
        url = 'db/db.json';

    class DB {
        getData = async () => {
            const res = await fetch(url);
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(`Не удалось получить данные по адресу ${url}`);
            }
        }

    };

    const renderCard = response => {
        main.textContent = '';

        response.forEach(item => {

            const { img, title, subTitle } = item;

            const card = document.createElement('div');
            card.className = 'post';
            card.innerHTML = `
                <div class="carousel">
                    <img src="db/img/${img}.jpg" alt="${title}" onerror="this.src='db/img/default.jpg'" />
                </div>
                <i class="fab fa-bitcoin"></i>
                <h3>${title}</h3>
                <p>${subTitle}</p>
                <a href=""><i class="fa fa-sign-in-alt"></i> Узнать больше</a>
            `;

            main.append(card);
        });
    };

    new DB().getData().then(renderCard);

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        nav.classList.toggle('show');
    });

});