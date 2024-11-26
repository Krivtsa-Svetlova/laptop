let attempts = 3;
let mysteryNumber;

let randomGenerate = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let checkIsNumber = function(number) {
    return (!isNaN(parseFloat(number)) && isFinite(number));
}

mysteryNumber = randomGenerate(1, 10);





const getBotFunction = function() {
    let textFromPrompt;
    let userAnswer = function() {
        textFromPrompt = prompt('Введите число от 1 до 10');
        if (textFromPrompt === null) {
            alert('Вы завершили игру');
            return;
        }
        while (!checkIsNumber(textFromPrompt) || textFromPrompt.includes(' ')) {
            return userAnswer();
        }
        return textFromPrompt;
        
    }
    let answerNumber = Number(userAnswer());
    
    if (answerNumber > mysteryNumber) {
        alert('Твое число больше, чем загаданное');        
    } else if (answerNumber < mysteryNumber) {
        alert('Твое число меньше, чем загаданное');        
    } else if (answerNumber == mysteryNumber) {
        if (confirm('Поздравляю, ты угадал! Хочешь сыграть ещё раз?')) {
            attempts = 3;
            mysteryNumber = randomGenerate(1, 10);
            getBotFunction(); 
        } else {
            attempts = 0;
        }
    }

    if (attempts > 0) {
        attempts -= 1;
        getBotFunction();
    } else if (confirm('Хотите попробовать снова?')) {
        attempts = 3;
        mysteryNumber = randomGenerate(1, 10);
        getBotFunction();
    } else {
        alert('Вы завершили игру');
        return;
    }
    
}

getBotFunction();
