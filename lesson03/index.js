'use strict';

//(0.1 + 0.2).toFixed(2) == (0.3).toFixed(2)
//(0.1 + 0.2).toFixed(2) = '0.3'

console.log('Hello');

function example1() {
    console.log('example1');
    console.log('');

    
    // function calcTriangleSquare(a, h) {
    //     return a * h / 2;
    // }
    
    // console.log('calcTriangleSquare(1, 2) = ' ,calcTriangleSquare(1, 2));
    // console.log('calcTriangleSquare(2, 1) = ' ,calcTriangleSquare(2, 1));
    // console.log('calcTriangleSquare(3.14, 2.7) = ' ,calcTriangleSquare(3.14, 2.7));
    // console.log('calcTriangleSquare(0, -10) = ' ,calcTriangleSquare(0, -10));
    
    
    // console.log('calcTriangleSquare(21) =', calcTriangleSquare(21)); //NaN
    // console.log('calcTriangleSquare() =', calcTriangleSquare()); //NaN

    // console.log('calcTriangleSquare() =', calcTriangleSquare(21, undefined)); //NaN
    // console.log('calcTriangleSquare() =', calcTriangleSquare(undefined, undefined)); //NaN



    
    // function calcCircleSquare(r) {
    //     return 3.14 * r * r;
    // }

    // console.log('calcCircleSquare(1):', calcCircleSquare(1));
    // console.log('calcCircleSquare(2):', calcCircleSquare(2));
    // console.log('calcCircleSquare(3):', calcCircleSquare(3));
    // console.log('calcCircleSquare(-10):', calcCircleSquare(-10));
    // console.log('calcCircleSquare(1.45):', calcCircleSquare(1.45));


    // function calcPerimetr(a, b, c) {
    //     return a + b + c;
    // }

    // console.log('calcPerimetr(1, 2, 3)', calcPerimetr(1, 2, 3));
    // console.log('calcPerimetr(3, 4, 5)', calcPerimetr(3, 4, 5));

    // function calc4Perimeter(a, b, c, d) {
    //     return a + b + c + d;
    // }

    // console.log('calc4Perimeter(1, 2, 3, 4)', calc4Perimeter(1, 2, 3, 4));
    // console.log('calc4Perimeter(3, 4, 5, 5)', calc4Perimeter(3, 4, 5, 6));
    // console.log('');

    function calcNPerimeter() {
        arguments;

        let sum = 0;
        for (let index = 0; index < arguments.length; index += 1) {
            console.log(`номер = ${index}; значение = ${arguments[index]}`);
            sum += arguments[index];
        }
        console.log(arguments);

        return sum;
    }

    console.log(calcNPerimeter(10, 20, 30, 40, 50));
    console.log('');    

    function calcNPerimeterAnother(...rest) {
        
        let sum = 0;
        for (let index = 0; index < rest.length; index += 1) {
            console.log(`номер = ${index}; значение = ${rest[index]}`);
            sum += rest[index];
        }
        console.log(rest);

        return sum;
    }

    console.log(calcNPerimeterAnother(10, 20, 30, 40, 50));

    console.log('');
    console.log('end example1');
}

function example3() {
    console.log('example3');

    function fib(n) {
        // console.log('вызвана функция fib c n=', n);
        if (n === 0) {
            return 1;
        }
        if (n === 1) {
            return 1;
        }
        return fib(n - 1) + fib(n - 2);
    }

    console.log('fib(10)', fib(10));

    console.log('end example3');

}

function main() {
    // example1();
    example3();
}

main();

console.log('Bye');