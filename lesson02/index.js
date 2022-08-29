'use strict';

console.log('Hello');

function inputOutputExample1() {
    const alertResult = alert('alert');
    const promptResult1 = prompt('prompt');
    const promptResult2 = prompt('prompt', 'default');
    const confirmResult = confirm('confirm');

    console.log('alertResult: ', alertResult);
    console.log('promptResult1: ', promptResult1);
    console.log('promptResult2: ', promptResult2);
    console.log('confirmResult: ', confirmResult);
}

function inputOutputExample2() {

    console.log('alertResult: ', alert('alert'));
    console.log('promptResult1: ', prompt('prompt'));
    console.log('promptResult2: ', prompt('prompt', 'default'));
    console.log('confirmResult: ', confirm('confirm'));
}

function example1() {
    console.log('example1');

    inputOutputExample1();

    console.log('');
    console.log('call 2');
    console.log('');

    inputOutputExample2();

    console.log('end of example1');
}

function example2() {
    console.log('example2');

    const a = 32;
    const b = 10;
    console.log('a =', a);
    console.log('b =', b);
    console.log('--------------');
    console.log('a + b=', a + b);
    console.log('a - b=', a - b);
    console.log('a * b=', a * b);
    console.log('a / b=', a / b);
    console.log('a % b=', a % b);
    console.log('--------------');
    console.log('b + a=', b + a);
    console.log('b - a=', b - a);
    console.log('b * a=', b * a);
    console.log('b / a=', b / a);
    console.log('b % a=', b % a);

    console.log('');
    console.log('');

    console.log('bin 0b1101 =', 0b1101); // 13
    console.log('bin 0b1010 =', 0b1010); // 10
    console.log('oct 010 =', parseInt('010', 8)); // 8
    console.log('oct 071 =', parseInt('071', 8)); // 57
    console.log('hex 0x1F =', 0x1F); // 31
    console.log('hex 0xFF =', 0xFF); // 255

    console.log('end of example2');
}

function example3() {
    console.log('example 3');

    console.log('AND');
    console.log('OR');
    console.log('NOT');

    console.log('end of example 3');
}

function main() {
    // example1();
    // example2();
    example3();
}

main();

console.log('Bye');