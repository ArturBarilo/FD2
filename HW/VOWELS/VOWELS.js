'use strict';

function vowelsCounter() {
    const text = prompt('Введите строку');

    const textInLowerCase = text.toLowerCase();

    const letters = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];

    const textArr = textInLowerCase.split('');

    const result = [];

    for (const letter of textArr) {
        if (letters.includes(letter)) {
            result.push(letter);
        }
    }
    return console.log('Количество гласных букв в строке:', result.length);

}

vowelsCounter();
