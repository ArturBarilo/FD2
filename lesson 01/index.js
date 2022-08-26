'use strict';

alert('Hello!!');

console.log('Hello');
console.log('Hello');

let a = 'notebook';
console.log(a);

a = 'apple';
console.log(a);

const bTrue = true;
const bFalse = false;

const arr = [1, 2, 3];

const user = {
    name: "John",
};

console.log(arr);
console.log(user);

let newVar;

if (bTrue) {
    newVar = 'test';
    console.log('здесь true')
};

console.log(newVar)

if (a === 'apple') {
    console.log('a === apple is true')
} else {
    console.log('False')
};



for (let index = 25;; index +=1 ) {
    console.log('index = ' + index);

    if (index % 17 === 0) {
        console.log('Нашли index ' + index);
        break;
    }
};
