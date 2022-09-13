'use strict';

function example1() {

    console.log('start example1');

    const calcCircleSquare = (R) => 3.14 * R * R;

    const calcCircleSquare1 = (R) => {
        console.log('---');
        return 3.14 * R * R;
    }

    // console.log('объекты');

    const arr1 = [1, 2, 'str', null, [1, 2, 100], []];
    // console.log('arr1', arr1);

    arr1.slice(1, 3);  // получаем часть массива(новый массив)
    arr1.find((item) => item === 'str'); // вернёт элемент, подходящий под условие
    arr1.filter((item) => item === 2); // вернёт новый массив, с элементами, подходящими под условие
    arr1.map(item => item * 2); // вернёт новый преобразованный массив
    arr1[4][2]; // 100

    // console.log(arr1.slice(1, 3));
    // console.log(arr1.find((item) => item === 'str'));
    // console.log(arr1.filter((item) => Array.isArray(item)));
    // console.log(arr1.map(item => item * 2));
    // console.log(arr1[4][2]);


    Array.isArray([]); // true
    Array.isArray('str'); // false


    // console.log(typeof 1);
    // console.log(typeof '1');
    // console.log(typeof [1]);
    // console.log(typeof (() => { }));


    const arr2 = [];
    arr2.push('start');
    arr2.push('next');
    arr2.push('end');
    // console.log(arr2);

    const last = arr2.pop();

    arr2.unshift('new-start1'); // добавляет элемент в начало массива
    arr2.unshift('new-start2'); // добавляет элемент в начало массива
    const last2 = arr2.shift(); // достаёт первый элемент массива

    const merdegArray = arr2.concat([1, 2, 3]); // возвращает объеденённый массив


    const emptyHash = {};
    const hash = {
        hi: 'Привет',
        'hello': 'Привет',
        number: 123,
        number1: 23,
        a: [],
        h: {},
    };

    const line = {
        start: {
            x: 11,
            y: 12,
        },
        end: {
            x: 21,
            y: 22,
        },
    };

    console.log(hash);
    console.log(hash['hi']);
    console.log(hash['number']);

    console.log(hash.hello);
    console.log(hash.number1);

    console.log(line);
    console.log(line.start.x);
    console.log(line.end.y);

    line.start.y = 1000000;
    console.log(line);
    line.start.z = 1000000;
    console.log(line);
    delete line.start.z;
    console.log(line);


    line.start.options = {
        system: 'dec',
        pol: '+',
        char: [1, 2, 3, 4]
    }



    console.log('end example1');
}

function example2 () {
    console.log('start example2');

    const text='истоки рок-музыки лежат в блюзе из которого и вышли первые рок-жанры рок-н-ролл и рокабилли первые поджанры рок-музыки возникали в тесной связи с народной и эстрадной музыкой того времени в первую очередь это фолк кантри скиффл мюзик-холл за время своего существования были попытки соединить рок-музыку практически со всеми возможными видами музыки с академической музыкой арт-рок появляется в конце 60-х и более поздний симфо-метал джазом джаз-рок появляется в конце 60-х начале 70-х латинской музыкой латино-рок появляется в конце 60-х индийской музыкой рага-рок появляется в середине 60-х в 60-70-х годах появились практически все крупнейшие поджанры рок-музыки наиболее важными из которых помимо перечисленных являются хард-рок панк-рок рок-авангард в конце 70-х-начале 80-х появились такие жанры рок-музыки как пост-панк новая волна альтернативный рок хотя уже в конце 60-х годов появляются ранние представители этого направления хардкор крупный поджанр панк-рока а позже и брутальные поджанры метала дэт-метал блэк-метал в 90-х годах получили широкое развитие жанры гранж появился в середине 80-х брит-поп появляется в середине 60-х альтернативный метал появляется в конце 80-х';
    
    const words = text.split(' ');

    const wordsLengths = words.map( (word) => word.length);

    const dictionary = {};

    // for (const word of words) {
    //     dictionary[word] = 0;
    // }

    // for (const word of words) {
    //     dictionary[word] += 1;
    // }

    
    for (const word of words) {
        if (dictionary[word]) {
            dictionary[word] += 1;
        } else {
        dictionary[word] = 1;
        }
    }


    console.log('words', words);
    // console.log(wordsLengths);
    console.log('dictionary', dictionary);


    const notUnique = {}
   
    for (const word of words) {
        if (dictionary[word] > 1 ) {
            notUnique[word] = dictionary[word]; 
        }
    }
    
    console.log('notUnique' , notUnique);

    console.log('end example2');
}

(function () {
    // example1();
    example2();
})()
