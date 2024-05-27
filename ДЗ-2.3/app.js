let titleProject = 'Оценка стоимости'; 
let screensValue = 'Шаблонные, с уникальным дизайном, с анимациями'; 
const screenPrice = 1000; 
let percentage = 15; 
let fullPrice = 10000; 
let responsive = true; 

titleProject = prompt('Название проекта?');
screensValue = prompt('Какие типы экранов нужны?');

responsive = prompt('Нужен ли респонсивный сайт?'); 

if (responsive == 'да') {
    responsive = true;
} else if (responsive == 'нет') {
    responsive = false;
} else {
    alert('Введите "да" или "нет"');
}


// console.log(responsive);
// console.log(typeof responsive);


let service1 = prompt('Какой сервис нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой ещё сервис тебе нужен?');
let servicePrice2 = +prompt('Сколько будет стоить второй сервис?');

fullPrice = screenPrice + servicePrice1 + servicePrice2;

// console.log(fullPrice);
// console.log(typeof fullPrice);

let servicePercentPrice = Math.round(fullPrice - ((fullPrice/100)*percentage));

console.log('Итоговая сумма — ' + servicePercentPrice);

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