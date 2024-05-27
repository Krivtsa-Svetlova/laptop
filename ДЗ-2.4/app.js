const screenPrice = 10000; 
let percentage = 15; 


let titleProject = prompt('Название проекта?');

// let screensValue = prompt('Шаблонные, с уникальным дизайном, с анимациями');

// let responsive = prompt('Нужен ли респонсивный сайт?'); 

// if (responsive == 'да') {
//     responsive = true;
// } else if (responsive == 'нет') {
//     responsive = false;
// } else {
//     alert('Введите "да" или "нет"');
// }


let service1 = prompt('Какой сервис нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой ещё сервис тебе нужен?');
let servicePrice2 = +prompt('Сколько будет стоить второй сервис?');


function getTitle() {
    let a = titleProject[0].toUpperCase();
    let b = (titleProject.substring(1)).toLowerCase();
    return a + b;
}
titleProject = getTitle();
console.log('Название проекта — ', titleProject);


let allServicePrices;

let getAllServicePrices = function() {
    allServicePrices = servicePrice1 + servicePrice2;
    console.log('Стоимость всех услуг — ', allServicePrices);
};

getAllServicePrices();


let fullPrice; 

function getFullPrice() {
    fullPrice = allServicePrices + screenPrice;
    console.log('Стоимость всех услуг с вёрсткой — ', fullPrice);
};

getFullPrice();


let servicePercentPrice;

let getServicePercentPrices = function() {
    servicePercentPrice = Math.round(fullPrice - ((fullPrice/100)*percentage));
    console.log('Итоговая стоимость за вычетом процента подрядчику — ', servicePercentPrice);
}

getServicePercentPrices();



let getRollbackMessage = function() {
    if (fullPrice >= 50000) {
        console.log('Сделаем скидку в 10%');
    } else if (fullPrice < 50000 & fullPrice >= 20000) {
        console.log('Сделаем скидку в 5%');
    } else if (fullPrice < 20000 & fullPrice > 0) {
        console.log('Скидка не предоставляется');
    } else if (fullPrice == 0) {
        console.log('За спасибо не работаем :)');
    } else {
        console.log('Что-то пошло не так');
    }
}

getRollbackMessage();