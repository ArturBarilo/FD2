'use strict';


function example1() {
    console.log('start example1');

    const dictionary = {
        'истоки': 1,
        'рок-музыки': 2,
        'лежат': 3,
        'в': 4,
        'блюзе': 5,
        'из': 6,
        'которого': 7,
    }


    for (const item of ['str1', 'str2', 'str3']) {
        console.log('of', item);
    }

    for (const item in ['str1', 'str2', 'str3']) {
        console.log('in',item);
    }

    let sum = 0;
    for (const key in dictionary) {
        // console.log(key);
        sum += dictionary[key];
        console.log(`слово ${key} встречается в тексте ${dictionary[key]} раз`);   
    }

    console.log(sum);

    const keys = Object.keys(dictionary);
    const value = Object.values(dictionary);
    const entries = Object.entries(dictionary);
    console.log('keys', keys);
    console.log('value', value);
    console.log('entries', entries);


    let sum1 = 0;
    for (const value of Object.values(dictionary)) {
        // console.log(key);
        sum1 += value;
        // console.log(`слово ${key} встречается в тексте ${dictionary[key]} раз`);   
    }
    console.log('sum1', sum1);


    const reduceResult = [1, 2, 3, 4].reduce((acc, item) => acc + item);
    console.log('reduceResult', reduceResult);

    let sum3 = Object.values(dictionary).reduce((acc, item) => acc + item);
    console.log(sum3);

    console.log('end example1');

    const fullString = Object
    .entries(dictionary)
    .reduce((acc, item) => {
        // const newValue = `слово ${item[0]} встречается в тексте ${item[1]} раз\n`
        return acc + `слово ${item[0]} встречается в тексте ${item[1]} раз\n`; // !!!!!!!!!!!!!!!!!!!!!!!!
    }, '');
    console.log('fullString\n', fullString);

    const createObj = Object.fromEntries([['привет', 123], ['пока', 987], ['как дела', 555]]);//!!!!!!!!!!!!!!!!!!!
    console.log('createObj', createObj);



    
}


function example2() {
    console.log('start example2');

    const object1 = new Object();
    const object2 = {};

    const array1 = new Array();
    const array2 = [];

    const number1 = new Number();
    const number2 = 0;

    const string1 = new String();
    const string2 = '';

    // Array.from(array);  приводит аргумент к массиву

    for (const letter of '1235446457564') {
        console.log(letter);
    }
    

    // Object.create();
    // Object.defineProperty(obj, key, value);
    // Object.freeze();
    // Object.is();
    // Object.isExtensible();
    // Object.isFrozen();
    // ({name: 123}).toString();
    // Object.assign({name: 'name'}, {age: 20}) -> {name: 'name', age: 20}

    Array. isArray();
    // Array.from();
    [1, 2, 3, 4].toString();

    Number.NaN, NaN;
    Number.isInteger();
    Number.parseFloat();
    Number.parseInt();

    String.fromCharCode();
    ''.endsWith('.com');
    ''.startsWith('https://');
    ''.trim(); // убирает пробелы
    //''.match();
    ''.repeat(); 
    ''.replace('что хотим заменить', 'на что хотим заменить');
    ''.substring(0, 23); // вернёт срез строки между 0 и 23 символом
    ''.includes('substr');
    ''.split('');
    ''.concat(); 

    console.log('');

    console.log('Date');

    const now = new Date();
    console.log('now', now);

    function diff(date1, date2) {
        const sub = +date2 - +date1;

        const sec = Number(sub / 1000).toFixed(1);
        const min = Number(sub / (1000 * 60)).toFixed(1);
        const hours = Number(sub / (1000 * 60 * 60)).toFixed(1);
        const days = Number(sub / (1000 * 60 * 60 * 24)).toFixed(1);
        const years = Number(sub / (1000 * 60 * 60 * 24 * 365)).toFixed(1);
        
        const obj = {
            years,
            days,
            hours,
            min,
            sec,
        };

        const measure = Object.entries(obj).find(item => item[1] > 0.5);
        return `${measure[1]} ${measure[0]}`;
    }
    console.log('diff(new Date(0), now)', diff(new Date(0), now));


    Math.abs(); // берёт число по модулю
    Math.round(); // округление 
    Math.max(); // возвращает максимум
    Math.min(); // возвращает минимум
    Math.pow(2, 3); // возведение в степень(2^3) 
    Math.random(); //

    console.log(Math.random());
    console.log(Math.random());
    console.log(Math.random());

    function randomInt(n) {
        return Math.trunc(n * Math.random()); // Math.trunc - отбрасывает дробную часть
    }

    console.log('randomInt(10)',randomInt(10));

    console.log('end example2');
}

const colors = [ 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];

(function () {
    // example1();
    example2();
})()


