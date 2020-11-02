const anchors = document.querySelectorAll('.to-top'),
    order = document.querySelector('.order'),
    header = document.querySelector('.header'),
    radio = document.querySelectorAll('input[type="radio"]'),
    submit = document.querySelector('input[type="submit"]'),
    select = document.querySelector('.order-select'),
    selectList = document.querySelector('.select-list'),
    tabs = document.querySelectorAll('.tabs-link'),
    tables = document.querySelectorAll('.table-tabs-right table'),
    toggle = document.querySelector('.toggle-wrap');

window.addEventListener('scroll', () => {
    if (pageYOffset > 300 && !header.classList.contains('small')) {
        header.classList.add('small');
    } else if (pageYOffset < 280 && header.classList.contains('small')) {
        header.classList.remove('small');
    }
});

for (let anchor of anchors) {
    anchor.addEventListener('click', e => {
        e.preventDefault();

        order.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    })
}

for (let child of radio) {
    child.addEventListener('click', (e) => {
        const target = e.target;
        const parent = target.closest('.order-radio');
        const titles = document.querySelectorAll('.order-radio h3');
        const title = parent.children[2].children[0];

        for (let node of titles) {
            node.style.color = '#000';
        }
        title.style.color = '#36c1ba';
        if (title.textContent === 'Subscribe') {
            submit.value = 'Subscribe';
        } else {
            submit.value = 'Add to cart';
        }
    })
}

select.addEventListener('click', () => {
    selectList.classList.toggle('show');

    document.addEventListener('click', e => {
        if (selectList.classList.contains('show')) {
            if (!e.target.closest('.select-wrap')) {
                selectList.classList.remove('show');
            }
        }
    })
})

selectList.addEventListener('click', e => {
    const target = e.target;

    for (let item of selectList.children) {
        item.classList.remove('chose');
    }

    target.classList.add('chose');
    select.value = target.textContent;
    document.querySelector('.result-title').textContent = '€' + Math.ceil(parseInt(target.textContent) * 2.6);
    selectList.classList.remove('show');
})

for (let tab of tabs) {
    tab.addEventListener('click', e => {
        e.preventDefault();
        const target = e.target;

        for (let tab of tabs) {
            tab.classList.remove('active');
        }
        target.classList.add('active');

        for (let table of tables) {
            table.style.display = 'none';
        }
        tables[target.dataset.num].style.display = 'table';
    })
}

toggle.addEventListener('click', () => {
    document.querySelector('.header-nav-links').classList.toggle('visible');
})