'use strict';



function example1() {
    console.log('start example1');
    console.log('');
    
    class Singletone {
        constructor(name) {
            if (Singletone._instance) {
                return Singletone._instance;
            }

            this.name = name;
            Singletone._instance = this;
        }

        printName() {
            console.log('test', this.name);
        }

        test() {
            console.log('test');
        }
    }

    const s1 = new Singletone('something');
    const s2 = new Singletone('invisible');

    s1.test();
    s2.test();
    s1.printName();
    s2.printName();






    class Builder {
        constructor() {
            return this;
        }

        build() {
            console.log('builded next house', Object.assign({}, {
                numberOFWalls: this.numberOFWalls,
                numberOFWimdows: this.numberOFWimdows,
                houseHeight: this.houseHeight,
                houseWidth: this.houseWidth,
                houseLength: this.houseLength,
            }));
            return this;
        }

        setnumberOFWalls(value) {
            this.numberOFWalls = value;
            return this;
        }
        setnumberOFWimdows(value) {
            this.numberOFWimdows = value;
            return this;
        }
        sethouseHeight(value) {
            this.houseHeight = value;
            return this;
        }
        sethouseWidth(value) {
            this.houseWidth = value;
            return this;
        }
        sethouseLength(value) {
            this.houseLength = value;
            return this;
        }
    }

    new Builder()
        .sethouseLength(10)
        .setnumberOFWalls(4)
        .build();








    
    function logDecorator(func) {
        function inner(...args) {
            console.log(`logDecorator (${func.name}) input:`, args);
            const result = func(...args);
            console.log(`logDecorator (${func.name}) result:`, result);
            return result;
        }
        return inner;
    }

    function sum(a, b) {
        return a + b;
    }

    function multiply(a, b) {
        return a * b;
    }

    const divide = logDecorator(function divide(a, b) {
        return a / b;
    })

    const sumWithLog = logDecorator(sum);
    const multiplyWithLog = logDecorator(multiply);

    const r1 = sumWithLog(1, 2);
    const r2 = sumWithLog(100, -25);
    const r3 = multiplyWithLog(16, 16);
    const r4 = multiplyWithLog(32, 16);
    const r5 = divide(15, 4);
    const r6 = divide(100, 4);


    console.log('');
    console.log('end example1');
}

function example2() {
    console.log('start example2');

    function cslcSquareRoots1() {
        const a = parseFloat(prompt('введите a:'));
        const b = parseFloat(prompt('введите b:'));
        const c = parseFloat(prompt('введите c:'));

        const D = b * b - 4 * a * c;

        if(D < 0) {
            console.log('Нет корней');
            return;
        }

        if(D === 0) {
            const x1 = - b / (2 * a);
            console.log('Найдены 2 одинаковых корня:', [x1]);
            return;
        }

        const x1 = (-b + Math.sqrt(D)) / (2 * a);
        const x2 = (-b - Math.sqrt(D)) / (2 * a);
        console.log('Найденные корни:', [x1, x2]);
    }

    // cslcSquareRoots1();


    
    function cslcSquareRoots2(a, b, c) {

        const D = b * b - 4 * a * c;

        if(D < 0) {
            return [];
        }

        if(D === 0) {
            const x1 = - b / (2 * a);
            return [x1];
        }

        const x1 = (-b + Math.sqrt(D)) / (2 * a);
        const x2 = (-b - Math.sqrt(D)) / (2 * a);
        return [x1, x2];
    }

    function askSquareEquation() {
        const a = parseFloat(prompt('введите a:'));
        const b = parseFloat(prompt('введите b:'));
        const c = parseFloat(prompt('введите c:'));

        const result = cslcSquareRoots2(a, b, c);

        if (!result.length) {
            alert('нет корней');
        } else if (result.length == 1) {
            alert('Найдены 2 одинаковых корня:' + result);
        } else {
            alert('Найденные корни:' + result);
        }
    }

    
    function testCalcSquareRoots2() {
        const result1 = cslcSquareRoots2(1, 1, 1);
        if (result1 && !result1.length) {
            console.log('тест 1 пройден');
        } else {
            console.log(`тест 1 не пройден. Вход (1, 1, 1). Результат: ${result1}`);
        }

        const result2 = cslcSquareRoots2(1, 2, 1);
        if (result2 && result2.length == 1 && result2[0] === -1) {
            console.log('тест 2 пройден');
        } else {
            console.log(`тест 2 не пройден. Вход (1, 2, 1). Результат: ${result2}`);
        }
        
        const result3 = cslcSquareRoots2(1, 4, 4);
        if (result3 && result3.length == 1 && result3[0] === -2) {
            console.log('тест 3 пройден');
        } else {
            console.log(`тест 3 не пройден. Вход (1, 4, 4). Результат: ${result3}`);
        }

        const result4 = cslcSquareRoots2(1, -5, 6);
        if (result4 && result4.length == 2 && result4.includes(2) && result4.includes(3)) {
            console.log('тест 4 пройден');
        } else {
            console.log(`тест 4 не пройден. Вход (1, -5, 6). Результат: ${result4}`);
        }
    }
    
    testCalcSquareRoots2();
    
    askSquareEquation();

    console.log('');
    console.log('end example2');
}

function example3() {
    console.log('start example3');

    function calcRoots(a, b, c) {
    
        const D = b * b - 4 * a * c;
    
        if(D < 0) {
            return [];
        }
    
        if(D === 0) {
            const x1 = - b / (2 * a);
            return [x1];
        }
    
        const x1 = (-b + Math.sqrt(D)) / (2 * a);
        const x2 = (-b - Math.sqrt(D)) / (2 * a);
        return [x1, x2];
    }
    
    describe("calcRoots", function() {

        before(function () {
            console.log('defore');
        });
        after(function () {
            console.log('after');
        });
        beforeEach(function () {
            console.log('beforeEach');
        });
        afterEach(function () {
            console.log('afterEach');
        });

        describe('general cases', () => {
            const tests = [
                [1, 1, 1, []],
                [1, 2, 1, [-1]],
                [1, -5, 6, [3, 2]],
            ];
            tests.forEach(item => {
                it(`should return ${item[3]} for '${item[0]}x^2 + ${item[1]}x + ${item[2]}'`, function() {
                  assert.deepEqual(calcRoots(item[0], item[1], item[2]).sort(), item[3].sort());
                });
        })

        })

        describe('special cases', () => {
            
            it("should return [] for 'x^2 + x + 1'", function() {
              assert.deepEqual(calcRoots(1, 1, 1), []);
            });
    
            it("should return [-1] for 'x^2 + 2x + 1'", function() {
              assert.deepEqual(calcRoots(1, 2, 1), [-1]);
            });
    
            it("should return [NaN, NaN]", function() {
              assert.deepEqual(calcRoots(1, NaN, 6), [NaN, NaN]);
            });

            it("should throw error", function() {
                try {
                    throw new Error('some message')
                } catch(error) {
                    assert.equal(error.message, 'some message');
                }
            });

        })

      });

    console.log('end example3');
}

function example4() {
    console.log('start example4');

    
    console.log('');
    console.log('end example4');
}

function example5() {
    console.log('start example5');


    console.log('');
    console.log('end example5');
}


(function () {
    // example1();
    // example2();
    example3();
    // example4();
    // example5();
})()
