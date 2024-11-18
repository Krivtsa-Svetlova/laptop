let screenPrice; 
const percentage = 15; 
let titleProject;
let screensValue;
let responsive; 
let allServicePrices = 0;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;




function asking() {
    titleProject = prompt('Название проекта?', 'Название');
    screensValue = prompt('Шаблонные, с уникальным дизайном, с анимациями', 'Шаблонные');
    responsive = prompt('Нужен ли респонсивный сайт?', 'Нужен');
    do {
        screenPrice = prompt('Введите цену страницы');
    } while (!checkIsNumber(screenPrice) || screenPrice.includes(' ') || (screenPrice === null));
    screenPrice = Number(screenPrice);
}









function getTitle() {
    let a = titleProject[0].toUpperCase();
    let b = (titleProject.substring(1)).toLowerCase();
    return a + b;
}

let getAllServicePrices = function() {
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt('Какой сервис нужен?', 'Название1');
        }
        else if (i === 1) {
            service2 = prompt('Какой еще сервис нужен?', 'Название2');
        }
        let textFromPrompt;
        do {
            textFromPrompt = prompt('Сколько это будет стоить?');
        } while (!checkIsNumber(textFromPrompt) || textFromPrompt.includes(' ') || (textFromPrompt === null));
        allServicePrices += Number(textFromPrompt);
    }   
    return allServicePrices;
};

function getFullPrice() {
    return allServicePrices + screenPrice;    
};

let getServicePercentPrices = function() {
    return Math.round(fullPrice - ((fullPrice/100)*percentage));    
}

let getPercentageMessage = function(price) {
    if (price >= 50000) {
        return 'Сделаем скидку в 10%';
    } else if (price < 50000 & price >= 20000) {
        return 'Сделаем скидку в 5%';
    } else if (price < 20000 & price > 0) {
        return 'Скидка не предоставляется';
    } else if (price == 0) {
        return 'За спасибо не работаем :)';
    } else {
        return 'Что-то пошло не так';
    }
}

function checkIsNumber (number) {
    return (!isNaN(parseFloat(number)) && isFinite(number));     
}




asking();
titleProject = getTitle();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();






console.log('Название проекта — ', titleProject);
console.log('Тип — ', screensValue);
console.log('Респонсивность — ', responsive);
console.log('Стоимость всех услуг — ', allServicePrices);
console.log('Стоимость всех услуг с вёрсткой — ', fullPrice);
console.log('Итоговая стоимость за вычетом процента подрядчику — ', servicePercentPrice);
console.log(getPercentageMessage(fullPrice));