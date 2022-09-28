'use strict';

class People {
    constructor(name, surname, birthDate) {
        this.name = name;
        this.surname = surname;
        this.birthDate = birthDate;
    }

    getFullName() {
        return this.name + ' ' + this.surname;
    }

    introduction() {  
        console.log(this.getFullName());
    }

    calcAges() {
        const arr = this.birthDate.split('.');
        const date = new Date();
        console.log('Возраст в годах:' , date.getFullYear() - arr[2]);
    }

    say(message) {
        console.log(this.name + ` говорит "${message}"`);
    }
}

class Student extends People {
    constructor(name, surname, birthDate, dateOfStartEducation) {
        super(name, surname, birthDate);
        this.dateStart = dateOfStartEducation;
    }

    introduction() {  
        console.log(`Студент: ${this.getFullName()}`);
    }

    calcMonthsOfEducation() {
        const arr = this.dateStart.split('.');
        const date = new Date();
        console.log('Длительность обучения в годах:', date.getFullYear() - arr[2]);
    }

    learn(subject) {
        return console.log(`Студент ${this.name} сейчас учит ${subject}`);
    }
}

 class Theacher extends People {
    constructor(name, surname, birthDate, dateOfStartTeaching) {
        super(name, surname, birthDate);
        this.dateStartT = dateOfStartTeaching;
    }

    introduction() {  
        console.log(`Преподаватель: ${this.getFullName()}`);
    }

    calcMonthsOfTeaching() {
        const arr = this.dateStartT.split('.');
        const date = new Date();
        console.log('Длительность преподавания в годах:', date.getFullYear() - arr[2]);
    }

    teach(subject) {
        console.log(`${this.getFullName()} преподаёт "${subject}"`)
    }

    ask(question, student) {
        console.log(`Студент ${student.getFullName()} задаёт вопрос "${question}"`)
    }
 }

 class LearningGroup {
    constructor(name, theacher) {
        this.name = name;
        this.theacher = theacher;
        this.storage = [];
    }
   
    
    addStudent(student) {
        return this.storage.push(student.getFullName());
    }

    printGroupInfo() {
        console.log(`
        Название группы: ${this.name} 
        Преподаватель: ${this.theacher.getFullName()} 
        Список студентов: ${this.storage}`);
    }
 }


function check1() {
    const people1 = new People('Имя1', 'Фамилия1', '06.04.1989');
    const people2 = new People('Имя2', 'Фамилия2', '26.07.1997');
    console.log(people1.getFullName());
    people1.introduction();
    people1.calcAges();
    people1.say('Что-то важное1');
    console.log('---');
    console.log(people2.getFullName());
    people2.introduction();
    people2.calcAges();
    people2.say('Что-то важное2');
    console.log('------------------');
    const student1 = new Student('Студент1', 'Фамилия1', '25.09.1978', '01.09.2018');
    const student2 = new Student('Студент2', 'Фамилия2', '25.09.1976', '01.09.2014');
    student1.introduction();
    student1.calcMonthsOfEducation();
    student1.calcAges();
    student1.say('Слова студента1');
    student1.learn('js');
    console.log('---');
    student2.introduction();
    student2.calcMonthsOfEducation();
    student2.calcAges();
    student2.say('Слова студента2');
    student2.learn('javascript');
    console.log('------------------');
    const teacher1 = new Theacher('Учитель1', 'Фамилия1', '25.09.1978', '01.09.2015');
    const teacher2 = new Theacher('Учитель2', 'Фамилия2', '25.09.1988', '01.09.2019');
    teacher1.introduction();
    teacher1.calcMonthsOfTeaching();
    teacher1.calcAges();
    teacher1.say('Слова учителя1');
    teacher1.teach('программирование');
    teacher1.ask('Вопрос студента1', student1);
    console.log('---');
    teacher2.introduction();
    teacher2.calcMonthsOfTeaching();
    teacher2.calcAges();
    teacher2.say('Слова учителя2');
    teacher2.teach('дискретную математику');
    teacher2.ask('Вопрос студента2', student2);
    console.log('------------------');
}

function check2() {
    const student1 = new Student('Студент1', 'Фамилия1', '25.09.1978', '01.09.2018');
    const student2 = new Student('Студент2', 'Фамилия2', '25.09.1976', '01.09.2014');
    const student3 = new Student('Студент3', 'Фамилия3', '25.09.1973', '01.09.2013');
    const student4 = new Student('Студент4', 'Фамилия4', '25.09.1974', '01.09.2014');
    const student5 = new Student('Студент5', 'Фамилия5', '25.09.1975', '01.09.2015');
    const student6 = new Student('Студент6', 'Фамилия6', '25.09.1976', '01.09.2016');
    const student7 = new Student('Студент7', 'Фамилия7', '25.09.1977', '01.09.2017');
    const student8 = new Student('Студент8', 'Фамилия8', '25.09.1978', '01.09.2018');
    const student9 = new Student('Студент9', 'Фамилия9', '25.09.1979', '01.09.2019');
    const student10 = new Student('Студент10', 'Фамилия10', '25.09.1971', '01.09.2011');
    
    const teacher1 = new Theacher('Учитель1', 'Фамилия1', '25.09.1978', '01.09.2015');
    const teacher2 = new Theacher('Учитель2', 'Фамилия2', '25.09.1988', '01.09.2019');

    const firstGroup = new LearningGroup('Group1', teacher1);
    const secondGroup = new LearningGroup('Group2', teacher2);

    firstGroup.addStudent(student1);
    firstGroup.addStudent(student2);
    firstGroup.addStudent(student3);
    firstGroup.addStudent(student4);
    firstGroup.addStudent(student5);
    secondGroup.addStudent(student6);
    secondGroup.addStudent(student7);
    secondGroup.addStudent(student8);
    secondGroup.addStudent(student9);
    secondGroup.addStudent(student10);

    firstGroup.printGroupInfo();
    secondGroup.printGroupInfo();
}


(function () {
    check1();
    check2();
})()







