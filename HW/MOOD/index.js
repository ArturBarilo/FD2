'use strict';

const colors = [ 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];

function moodObject(numberOfColors) {
    const counter = colors.length - numberOfColors;
    const colorsObject = Object.assign({}, JSON.parse(JSON.stringify(colors)));
    const colorsKeysArray = Object.keys(colorsObject);

    for ( let index = 0; index < counter; index++) {
        const colorIndex = Math.trunc((colorsKeysArray.length) * Math.random());
        delete colorsObject[colorsKeysArray[colorIndex]];
        colorsKeysArray.splice(colorIndex, 1);
    }
    
    const result = Object.values(colorsObject);
    
    return result;
}

console.log('moodObject', moodObject(5));





