'use strict';

function fibArray(n) {

    if (n === 1 || n ===0) {
        return 1;
    }

    const arr = [1, 1];
    for(let index = 2; index <= n; index += 1) {
        const nextFib = arr[index - 1] + arr[index - 2];
        arr.push(nextFib);
    }

    return arr[n];
}

function fibNumber(n) {
    let a = 1;
    let b = 1;

    for(let index = 2; index <= n; index += 1) {

        // [a, b] = [a + b, a];

        const nextA = a + b;
        const nextB = a;
        a = nextA;
        b = nextB;
    }
    return a;

}

// console.log(fibArray(100));
// console.log(fibNumber(100));


const arr = [];

function someF() {
    arr.push(1);
}

// console.log(arr);
// someF();
// console.log(arr);


function generate(start) {
    const inner = function(number) {
        console.log('inner', start + number)
    }

    return inner;
}

// const gen1000 = generate(1000);
// gen1000(1);
// gen1000(2);
// gen1000(1);
// gen1000(100);

// const gen5 = generate(5);
// gen5(1);
// gen5(2);
// gen5(1);
// gen5(100);


function generateFib() {
    const arr = [];

    const inner = function() {
        if (arr.length < 2) {
            arr.push(1);
            return 1;
        }

        const index = arr.length;
        const nextFib = arr[index - 1] + arr[index - 2]
        arr.push(nextFib);
        return nextFib;
    }

    return inner;
}

const fib1 = generateFib();
console.log(fib1());
console.log(fib1());
console.log(fib1());
console.log(fib1());
console.log(fib1());
console.log(fib1());

const fib2 = generateFib();
console.log(fib2());
console.log(fib2());
console.log(fib2());
console.log(fib2());
console.log(fib2());
console.log(fib2());