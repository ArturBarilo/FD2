'use strict';

const colors = [ 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];

function moodObject(numberOfColors) {
    let resultObj = {};
    let result = [];
    
    for(let index = 0; index != numberOfColors; index += 1){
        const colorIndex = Math.trunc((colors.length - 1) * Math.random());

        for(const value in resultObj) {
            if (value === colors[colorIndex]) {
                numberOfColors += 1;
                break;
            }
        }
        resultObj[colors[colorIndex]] = colorIndex;
    }

    for(const value in resultObj){
        result.push(value);
    }

    return result;
}

function moodArray(numberOfColors) {
    let result = [];
    
    for(let index = 0; index != numberOfColors; index += 1){
        const colorIndex = Math.trunc((colors.length - 1) * Math.random());
        if (result.includes(colors[colorIndex])) {
            numberOfColors += 1;
            continue;
        }
        result.push(colors[colorIndex]);
    }
    return result;
}

console.log('moodObject', moodObject(4));
console.log('moodArray', moodArray(4));