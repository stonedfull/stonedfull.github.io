'use strict';
document.addEventListener('DOMContentLoaded', () => {

    const main = document.querySelector('.portfolio'),
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

            const { link, name, text, thumb, small, medium } = item;

            const card = document.createElement('div');
            card.className = 'portfolio-item';
            card.innerHTML = `
                <span class="side1"></span>
                <div class="portfolio-info">
                    <div class="portfolio-links">
                        <a href="sites/${link}" title="${name}" class="portfolio-link">
                            <div class="portfolio-thumb wow fadeInLeft">
                                <img src="sites/${link}/img/preview/thumb.jpg" />
                            </div>
                            <span class="portfolio-name wow fadeInLeft" data-wow-delay=".2s">
                                <span class="arrow"></span>${name}
                            </span>
                        </a>
                    </div>
                    <div class="portfolio-except wow fadeInLeft" data-wow-delay=".5s">
                        <p>${text}</p>
                    </div>
                </div>
                <span class="side2"></span>
                <a href="sites/${link}" title="${name}" class="portfolio-preview-medium wow fadeIn" data-wow-delay="1s">
                    <img src="sites/${link}/img/preview/medium.jpg" />
                </a>
                <a href="sites/${link}" title="${name}" class="portfolio-preview-small wow fadeIn" data-wow-delay="1s">
                    <img src="sites/${link}/img/preview/small.jpg" />
                </a>
            `;

            main.append(card);
        });
    };

    new DB().getData().then(renderCard);

});