'use strict';

function example1() {
    console.log('start example1');
    

    class Animal {
        constructor(name) {
            this. name = name;
        }

        say() {
            console.log(`Animal "${this.name}" says something`);
        }

        bite() {
            console.log(`Animal "${this.name}" bite`);
        }
    }

    class FlightAnimal {
        constructor(name) {
            this. name = name;
        }

        say() {
            console.log(`Animal "${this.name}" says something`);
        }

        bite() {
            console.log(`Animal "${this.name}" bite`);
        }

        fly() {
            console.log(`Animal "${this.name}" flying`);
        }
    }

    class WaterAnimal {
        constructor(name) {
            this. name = name;
        }

        say() {
            console.log(`Animal "${this.name}" says something`);
        }

        bite() {
            console.log(`Animal "${this.name}" bite`);
        }

        dive() {
            console.log(`Animal "${this.name}" diving`);
        }
    }


    const cat = new Animal('cat'); 
    const dog = new Animal('dog');
    const bird = new FlightAnimal('bird');
    const WateAnimal = new WaterAnimal('SomeAnimal');
    
    cat.say();
    dog.say();
    bird.fly();
    WateAnimal.dive();
    
    console.log('');
    console.log('end example1');
}

function example2() {
    console.log('start example2');

    class Animal {
        constructor(name) {
            this. name = name;
        }

        say() {
            console.log(`Animal "${this.name}" says something`);
        }

        bite() {
            console.log(`Animal "${this.name}" bite`);
        }
    }

    class FlightAnimal extends Animal{
        constructor(name) {
            super(name);
            this.myMewName = name;
        }

        fly() {
            console.log(`Animal "${this.name}" flying`);
        }
    }

    class WaterAnimal extends Animal{
        constructor(name) {
            super(name);
        }

        dive() {
            console.log(`Animal "${this.name}" diving`);
        }
    }


    const cat = new Animal('cat'); 
    const dog = new Animal('dog');
    const bird = new FlightAnimal('bird');
    const WateAnimal = new WaterAnimal('SomeAnimal');
    
    cat.say();
    dog.say();
    bird.fly();
    WateAnimal.dive();


    class Cat extends Animal {
        constructor() {
            super('cat');
        }

        say() {
            console.log(`Cat says "мяу"`);
        }
    }

    const cat1 = new Cat();
    cat1.say();

    
    console.log('');
    console.log('end example2');
}

function example3() {
    console.log('start example3');

    class MySortedArray extends Array {
        // constructor(...args) {
        //     super(...args);
        // }

        mySort() {
            this.sort((a, b) => a.length - b.length);
            
        }

        log(str) {
            console.log(str, this.toString());
        }
    }

    const myArray = new MySortedArray();
    myArray.push('str1');
    myArray.push('str4444');
    myArray.push('str333');
    myArray.push('str22');
    myArray.log('Before sort')
    myArray.mySort();
    myArray.log('After sort')

    console.log('end example3');
}

function example4() {
    console.log('start example4');

    class Figure {
        constructor(figureType) {
            this.type = figureType;
        }

        calcPerimetr() {
            throw new Error('calcPerimetr method is not implemented');            
        }

        calcSquare() {
            throw new Error('calcSquare method is not implemented');  
        }
    }

    const figure = new Figure('my-type');
    console.log('figure', figure);

    // figure.calcPerimetr();

    function calcPerimetrRatio(myFigure) {
        return myFigure.calcSquare() / myFigure.calcPerimetr();
    }

    class Triangle extends Figure {
        constructor(a, b, c) {
            super('triangle');
            this.a = a;
            this.b = b;
            this.c = c;
        }

        calcPerimetr() {
            return this.a + this.b + this.c;             
        }

        calcSquare() {
            return (this.a + this.b + this.c) / 3;
        }
    }

    class Rectangle extends Figure {
        constructor(a, b) {
            super('rectangle');
            this.a = a;
            this.b = b;
        }

        calcPerimetr() {
            return (this.a + this.b) * 2;             
        }

        calcSquare() {
            return this.a * this.b;
        }
    }

    calcPerimetrRatio(new Triangle(1, 2, 3));
    calcPerimetrRatio(new Rectangle(5, 4));

    
    
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
    // example3();
    example4();
    // example5();
})()