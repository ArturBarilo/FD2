'use strict';

function example1() {
    console.log('start example1');
    

    console.log('');
    console.log('end example1');
}

function example2() {
    console.log('start example2');

    function Car(carNumber) {
        const self = this;

        self.number = carNumber;

        self.signal = function() {
            console.log('self', self);
            console.log('this', this);
            console.log(`машина <${self ? self.number : 'unknown'}> издаёт сигнал`);
            console.log(`машина <${this ? this.number : 'unknown'}> издаёт сигнал`);
        }

        self.toString = function () {
            return `Car<${self.number}>`
        } 
     }

     const myCar = new Car('AAA-BBB-111');
     console.log(myCar)
     console.log('myCar', myCar.number);
     myCar.signal();
     console.log('---');
     
     const myCar2 = new Car('BBB-CCC-222');
     console.log(myCar2)
     console.log('myCar', myCar2.number);
     myCar2.signal();
     myCar.signal();
     console.log('---');
     
     
     console.log('car: ' + myCar);
     console.log('car: ' + myCar.toString());
     console.log('car: ', myCar.toString());
     console.log('car: ', myCar);
     console.log('---');
     
     
     const carFunction = new Car;
     console.log('carFunction', carFunction);
     const signal = carFunction.signal;
     console.log('signal', signal);
     signal();
     console.log('---');
     signal.call({ number: 'my-custom-number'});
     signal.apply({ number: 'my-custom-number'});
     console.log('bind');
     const myCustomThis = { number: 'my-custom-number'}
     const myCustomSignal = signal.bind(myCustomThis);
     myCustomSignal();
     myCustomThis.number = 'my-another-number';
     myCustomSignal();
     console.log('')
    





    console.log('end example2');
}

function example3() {
    console.log('start example3');

    function CustomSet() {
        const self = this;
        let storage = [];

        function sort() {
            storage = storage.sort();
        }

        self.has = function (value) {
            return storage.includes(value);
        }
    
        self.add = function (value) {
            if (!self.has(value)) {
                storage.push(value);
                sort();
            }
        }
    
        self.delete = function (value) {
            storage = storage.filter(item => item !== value);
        }

        self.toString = function () {
            return `CustomSet{${storage}}`
        }
     }

     const set1 = new CustomSet();
     set1.add('first');
     set1.add('second');
     set1.add('third');
     console.log('set1' + set1);
     
     set1.add('2d');
     set1.add('4d');
     console.log('set1' + set1);
     console.log('---');

     const set2 = new CustomSet();
     set2.add('4d');
     set2.add('3d');
     set2.add('6d');
     set2.add('8d');
     set2.add('1d');
     set2.add('7d');

     set2.delete('1d');
     console.log('set1' + set1);
     console.log('set2' + set2);
    
    console.log('end example3');
}

function example4() {
    console.log('start example4');

    class CustomSet {

        constructor() {
            this.storage = [];
        }
        
        sort() {
            this.storage = this.storage.sort();
        }

        has(value) {
            return this.storage.includes(value);
        }
    
        add(value) {
            if (!this.has(value)) {
                this.storage.push(value);
                this.sort();
            }
        }
    
        delete (value) {
            this.storage = this.storage.filter(item => item !== value);
        }

        toString () {
            return `CustomSet{${this.storage}}`
        }
     }

     const set1 = new CustomSet();
     set1.add('first');
     set1.add('second');
     set1.add('third');
     console.log('set1' + set1);
     
     set1.add('2d');
     set1.add('4d');
     console.log('set1' + set1);
     console.log('---');

     const set2 = new CustomSet();
     set2.add('4d');
     set2.add('3d');
     set2.add('6d');
     set2.add('8d');
     set2.add('1d');
     set2.add('7d');

     set2.delete('1d');
     console.log('set1' + set1);
     console.log('set2', set2.toString());

    
    
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