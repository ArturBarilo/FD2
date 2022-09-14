'use strict';

function example1() {
    console.log('start example1');

    let storage = [];

    function has(value) {
        return storage.includes(value);
    }

    function add(value) {
        if (!has(value)) {
            storage.push(value);
        }
    }

    function remove(value) {
        storage = storage.filter(item => item !== value);
    }

    console.log('add(1)');
    add(1);
    console.log('add(2)');
    add(2);
    console.log('add(3)');
    add(3);
    console.log('add(2)');
    add(2);

    console.log('storage', storage.toString());

    console.log('');
    console.log('add(4)');
    add(4);
    console.log('remove(1)');
    remove(1);

    console.log('storage', storage.toString());

    console.log('remove(4)');
    remove(4);
    console.log('remove(3)');
    remove(3);
    console.log('storage', storage.toString());

    add(3);
    add(5);
    add(7);
    add(9);
    for (let number = 0; number <= 10; number += 1) {
        console.log(`is number "${number}" in storage? (${has(number)})`);
    }

    // console.log(storage.toString());

    console.log('');
    console.log('end example1');
}

function example2() {
    console.log('start example2');

    let storage = {};

    function has(value) {
        return value in storage; // true or false
    }

    function add(value) {
        storage[value] = value;
    }

    function remove(value) {
        delete storage[value];
    }

    console.log('add(1)');
    add('1');
    console.log('add(2)');
    add('2');
    console.log('add(3)');
    add('3');
    console.log('add(2)');
    add('2');

    console.log('storage', Object.assign({}, storage));

    console.log('');
    console.log('add(4)');
    add('4');
    console.log('remove(1)');
    remove('1');

    console.log('storage', Object.assign({}, storage));

    console.log('remove(4)');
    remove('4');
    console.log('remove(3)');
    remove('3');
    console.log('storage', Object.assign({}, storage));

    add('3');
    add('5');
    add('7');
    add('9');
    for (let number = 0; number <= 10; number += 1) {
        const numberStr = number.toString();
        console.log(`is number "${number}" in storage? (${has(numberStr)})`);
    }

    console.log('');
    console.log('end example2');
}

function example3() {
    console.log('start example3');

    const storage = new Set();

    storage.add(1);
    storage.add(2);
    storage.add(3);
    storage.add(3);
    storage.add(5);
    storage.add(7);


    storage.delete(2);
    storage.delete(3);

    for (let number = 0; number <= 10; number += 1) {
        const numberStr = number.toString();
        console.log(`is number "${number}" in storage? (${storage.has(number)})`);
    }
    console.log(storage.size);

    console.log('end example3');
}

function example4() {
    console.log('start example4');

    try {
        console.log('a', a);
    } catch (err) {
        console.log(err);
        // console.log(err.stack);
        // console.log(err.message);
        // console.log(err).toString();
        // console.log(err.name);
    }

    try {
        const myError = new Error('my custom error-message');
        console.log(myError);

        throw myError;
    } catch (err) {
        console.log(err);
    }

    function doError() {
        console.log(a);
    }

    try {
        doError();
    } catch (err) {
        console.log(err);
    }

    try {
        try {
            doError();
        } catch (err) {
            console.log(err);
            doError();
        }
    } catch (err) {
        console.log('level2', err);
    }

    try {
        throw 'my message';
    } catch (err) {
        console.log(err);
    }

    try {
        throw 'my message';
    } catch (err) {
        console.log(err);
    } finally {
        console.log('finally');
    }




    console.log('');
    console.log('end example4');
}

function example5() {
    console.log('start example5');

    function randomInt(n) {
        return Math.trunc(n * Math.random());
    }

    const variable = randomInt(3);

    if (variable === 0) {
        console.log('do when 0');
    } else if (variable === 1) {
        console.log('do when 1');
    } else if (variable === 2) {
        console.log('do when 2');
    } else {
        throw new Error('ERROR');
    }
    console.log('');

    switch (variable) {
        case (0):
            console.log('do when 0');
            break;
        case (1):
            console.log('do when 1');
            // break;
        case (2):
            console.log('do when 2');
            break;
        default:
            throw new Error('ERROR');
    }

    console.log('');
    console.log('end example5');
}


(function () {
    // example1();
    // example2();
    // example3();
    // example4();
    example5();
})()