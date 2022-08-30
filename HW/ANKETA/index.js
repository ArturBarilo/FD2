'use strict';

let yourFirstName;

function firstName() {
    yourFirstName = prompt('Напишите Ваше имя');
    if (!(yourFirstName === null) && yourFirstName.length >= 2 && isNaN(yourFirstName)) {
        return;
    }

    return firstName();
}


let yourLastName;

function lastName() {
    yourLastName = prompt('Напишите Вашу фамилию');
    if (!(yourLastName === null) && yourLastName.length >= 2 && isNaN(yourLastName)) {
        return;
    }

    return lastName();
}

let yourMidName;

function midName() {
    yourMidName = prompt('Напишите Ваше отчество');
    if (!(yourMidName === null) && yourMidName.length >= 2 && isNaN(yourMidName)) {
        return;
    }

    return midName();
}

let age;

function ageInYears() {
    age = +prompt('Укажите Ваш возраст в годах');
    if (!(age === null) && !isNaN(age) && age > 18 && age < 100) {
        return;
    }

    return ageInYears();
}

firstName();
lastName();
midName();
ageInYears();

let sex = confirm('Ваш пол мужской?');

let retried;

if ((sex && age > 63) || (!sex && age > 58)) {
    retried = 'да';
} else {
    retried = 'нет';
}

if (sex) {
    sex = 'мужской';
} else {
    sex = 'женский';
}

alert(
    'ваше ФИО: ' + yourFirstName + ' ' + yourLastName + ' ' + yourMidName + '\n'
    + 'ваш возраст в годах: ' + age + '\n'
    + 'ваш возраст в днях: ' + age * 365 + '\n'
    + 'через 5 лет вам будет: ' + (age + 5) + '\n'
    + 'ваш пол: ' + sex + '\n'
    + 'вы на пенсии: ' + retried
);




