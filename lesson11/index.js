'use strict';

function example1() {
    console.log('start example1');
    

    console.log('');
    console.log('end example1');
}

function example2() {
    console.log('start example2');

    //RegEx - regular expression

    /h/;
    /hello/;
    /[hello]/;
    /[a-zA-Z0-9]/;
    /[\w]/;
    /[\s]/;
    /[\d]/;
    /./;
    /a?/;
    /a*/;
    /a+/;
    /a{4}/;
    /a{2,6}/;
    /a{0,6}/;
    /a{2,}/;
    /a{,6}/;
    /^регулярное выражение/;
    /регулярное выражение$/;
    /\.com$/; // адреса сайтов, оканчивающиеся на .com
    /(.*)\.com$/;
    /(ab{3}) | (a{3}b)/;


    console.log("/hello/.test('123 hello 123')", /hello/.test('123 hello 123'));
    console.log("/[hello]/.test('123 hello 123')", /[hello]/.test('123 hello 123'));
    console.log("'123 hello 123'.match(/hello/)", Array.from('123 hello 123'.match(/hello/g)));
    console.log("'123 hello 123'.match(/[hello]/)", Array.from('123 hello 123'.match(/[hello]/g)));
    console.groupCollapsed('matchAll')
    console.log("'123 hello 123'.match(/hello/)", Array.from('123 hello 123'.matchAll(/hello/g)));
    console.log("'123 hello 123'.match(/[hello]/)", Array.from('123 hello 123'.matchAll(/[hello]/g)));
    console.log("'123 hello 123'.match(/[\\w]/)", Array.from('123 hello 123'.matchAll(/[\w]/g)));
    console.log("'123 hello 123'.match(/[\\W]/)", Array.from('123 hello 123'.matchAll(/[\W]/g)));
    console.log("'123 hello 123'.match(/[\\s]/)", Array.from('123 hello 123'.matchAll(/[\s]/g)));
    console.log("'123 hello 123'.match(/[\\S]/)", Array.from('123 hello 123'.matchAll(/[\S]/g)));
    console.log("'123 hello 123'.match(/[\\d]/)", Array.from('123 hello 123'.matchAll(/[\d]/g)));
    console.log("'123 hello 123'.match(/[\\D]/)", Array.from('123 hello 123'.matchAll(/[\D]/g)));
    console.log("'123 hello 123'.match(/[\\w]/)", Array.from('123 hello 123'.matchAll(/([\w]{2})[\w]*/g)));
    
    
    console.log('');
    console.log('end example2');
}

function example3() {
    console.log('start example3');

    function isEmailOld(str) {
        const parts = str.split('@');
        if(parts.length !== 2) {
            return false
        }

        const name = parts[0];
        if(name.length === 0) {
            return false;
        }

        const otherParts = parts[1].split('.');

        if(otherParts[0].length === 0 || otherParts[1].length === 0) {
            return false;
        }
        return true;
    }

    function isEmail(str = '') {
        const regex = /^[a-zA-Z0-9\$\-]+@\[a-zA-Z0-9]\.\[a-zA-Z0-9]$/;
        return regex.test(str);
    }

    console.log('isEmail(\'asgdsfgh\')', isEmail('asgdsfgh'));
    console.log('isEmail(\'12345668\')', isEmail('12345668'));
    console.log('isEmail(\'asdas fgrt\')', isEmail('asdas fgrt'));
    console.log('isEmail(\'test@email.com\')', isEmail('test@email.com'));
    console.log('isEmail(\'@email.com\')', isEmail('@email.com'));
    console.log('isEmail(\'test@emailcom\')', isEmail('test@emailcom'));
    console.log('isEmail(\'te.st@\')', isEmail('te.st@'));
    console.log('isEmail(\'test@email.com\')', isEmail('test@email.com'));
    console.log('isEmail(\'te-st@email.com\')', isEmail('te-st@email.com'));
    console.log('isEmail(\'te$st@email.com\')', isEmail('te$st@email.com'));

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