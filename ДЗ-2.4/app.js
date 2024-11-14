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


let getAllServicePrices = function() {
    return servicePrice1 + servicePrice2;    
};

let allServicePrices = getAllServicePrices();
console.log('Стоимость всех услуг — ', allServicePrices);


function getFullPrice() {
    return allServicePrices + screenPrice;    
};

let fullPrice = getFullPrice();
console.log('Стоимость всех услуг с вёрсткой — ', fullPrice);


let getServicePercentPrices = function() {
    return Math.round(fullPrice - ((fullPrice/100)*percentage));    
}

let servicePercentPrice = getServicePercentPrices();
console.log('Итоговая стоимость за вычетом процента подрядчику — ', servicePercentPrice);


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