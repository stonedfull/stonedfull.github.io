$(document).ready(function() {

	$().UItoTop({ 
        easingType: 'easeOutQuart' 
    });
});

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.opacity = "0.85";
    } else {
        document.getElementById("navbar").style.opacity = "1";
    }
}


let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");
var weak = (new Date()).getDay();


let weaks = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let andMonth = document.getElementById("andMonth");
let andYear = document.getElementById("andYear");
showCalendar(currentMonth, currentYear);


function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}


function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay()-1;
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    andMonth.innerHTML = today.getDate() + ", " + weaks[weak];
    andYear.innerHTML = months[month] + " | " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                let cell = document.createElement("td");
                cell.classList.add("number");
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("active");
                } // color today's date
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }


        }

        tbl.appendChild(row); // appending each row into calendar body.
    }
}


var date = new Date();
var month = date.getMonth();
var photo = ["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
document.getElementById('img').style.background = "url(img/calendar/" + photo[month] + ".jpg)";
document.getElementById('img').style.backgroundSize = "cover";



$(window).scroll(function(){
if ($(window).scrollTop() > 1600) {
$('.calendar-container-f').addClass('fixed-right');
} else {
$('.calendar-container-f').removeClass('fixed-right');
}
})

$(window).scroll(function(){
if ($(window).scrollTop() > 1140) {
$('.calendar-container').addClass('fixed-right');
} else {
$('.calendar-container').removeClass('fixed-right');
}
})

var linkHeader = '<div class="mid" id="navbar"><ul><li><a href="index.html"><i class="fa fa-home"></i>Главная</a></li><li><a href="about.html"><i class="fa fa-school"></i>О школе</a><ul><li><a href="about.html#about-history">История школы</a></li><li><a href="about.html#about-tasks">Задачи школы</a></li><li><a href="about.html#about-progress">Наши достижения</a></li><li><a href="about.html#about-team">Коллектив</a><ul><li><a href="about.html#about-administration">Администрация</a></li><li><a href="about.html#about-teachers">Педагоги</a></li></ul></li><li><a href="about.html#about-contacts">Контакты</a></li></ul></li><li><a href="docs.html"><i class="fa fa-file-alt"></i>Документы</a><ul><li><a href="docs.html#docs-statutory">Уставные документы</a><ul><li><a href="docs.html#docs-statute">Устав ОО</a></li><li><a href="docs.html#docs-certificate">Свидетельство о <br>акредитовании</a></li></ul></li><li><a href="docs.html#docs-provisions">Положения</a></li><li><a href="docs.html#docs-regulatory">Нормативные документы</a></li></ul></li><li><a href="pupil.html"><i class="fa fa-graduation-cap"></i>Учащимся</a><ul><li><a href="pupil.html#pupil-regim">Режим работы</a><ul><li><a href="pupil.html#pupil-lesson">Расписание уроков</a></li><li><a href="pupil.html#pupil-bell">Расписание звонков</a></li><li><a href="pupil.html#pupil-behavior">Правила поведения</a></li></ul></li><li><a href="pupil.html#pupil-interim">Промежуточная аттестация</a><ul><li><a href="pupil.html#pupil-">Расписание</a></li><li><a href="pupil.html#pupil-">Билеты</a></li></ul></li><li><a href="pupil.html#pupil-final">Итоговая аттестация</a><ul><li><a href="pupil.html#pupil-">Приказ</a></li><li><a href="pupil.html#pupil-">Приказ</a></li><li><a href="pupil.html#pupil-">Демотиваторы</a></li><li><a href="pupil.html#pupil-">Билеты</a></li></ul></li><li><a href="pupil.html#pupil-сareer">Профориентация</a></li></ul></li><li><a href="parent.html"><i class="fa fa-user"></i>Родителям</a><ul><li><a href="parent.html#parent-reception">Прием и отчисления</a></li><li><a href="parent.html#parent-media">СМИ о нас</a></li><li><a href="parent.html#parent-clothes">Приказ о форме</a></li><li><a href="parent.html#parent-report">Публичный отчет</a><ul><li><a href="parent.html#parent-visits">Посещения</a></li><li><a href="parent.html#parent-marks">Оценки</a></li></ul></li><li><a href="parent.html#parent-advice">Советы психолога</a><ul><li><a href="parent.html#parent-">Какие</a></li><li><a href="parent.html#parent-">Нибудь</a></li><li><a href="parent.html#parent-">Советы</a></li><li><a href="parent.html#parent-">Психолога</a></li></ul></li></ul></li><li><a href="feedback.html"><i class="fa fa-envelope-open"></i>Обратная связь</a></li></ul></div><div class="hat"><img src="img/logo.png" alt="" class="logo"><div class="text"><h2 id="a">Муниципальное общеоразовательное учреждение</h2><h2 id="b">"Бендерская средняя общеоразовательная школа №15"</h2></div><img src="img/gerb.png" alt="" class="gerb"></div>';
var intoHeader = document.getElementById('heador');
intoHeader.innerHTML = linkHeader;

