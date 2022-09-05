'use strict';

function generateCounter(operation, number = 0) {

    if (operation === 'increase') {

        const increase = function (entered = 1) {
            number += entered;
            return number;
        }
        return increase;
    }

    if (operation === 'decrease') {

        const decrease = function (entered = 1) {
            number -= entered;
            return number;
        }
        return decrease;
    }


}

const increase = generateCounter("increase");
console.log(increase());
console.log(increase(4));
console.log(increase(10));
console.log(increase(20));

const decrease = generateCounter("decrease", 100);
console.log(decrease());
console.log(decrease(5));
console.log(decrease(50));
console.log(decrease(100)); 