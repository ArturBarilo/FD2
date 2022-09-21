'use strict';

const text = prompt('Введите строку');

function vowelsCounter(text) {

    const textInLowerCase = text.toLowerCase();

    const letters = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];

    const textArr = textInLowerCase.split('');

    const result = [];

    for (const letter of textArr) {
        if (letters.includes(letter)) {
            result.push(letter);
        }
    }
    return result.length;

}

console.log(vowelsCounter(text));
