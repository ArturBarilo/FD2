'use strict';

class HashStorageClass {
    
    constructor() {
        this.storage = {};
    }

    addValue(key, value) {
        this.storage[key] = value;
    }

    getValue(key) {
        return this.storage[key];
    }

    deleteValue(key) {
        if (key in this.storage) {
            delete this.storage[key];
            return true;
        } else {
            return false;
        }
    }

    getKeys() {
        const array = Object.keys(this.storage);
        return array;
    }

    showDrinks() {
        for (const key in this.storage) {
            console.log(`
            \nНазвание: ${key}
            \nакогольный: ${this.storage[key].alcoholic}
            \nрецепт приготовления:\n ${this.storage[key].recipe}`)
        }
    }
}

const drinkStorage = new HashStorageClass();

drinkStorage.addValue('Маргарита', {'alcoholic': 'да', 
'recipe': 'продукты для Маргариты - смешать'});
drinkStorage.addValue( 'Пина Колада', {'alcoholic': 'да',
 'recipe': 'продукты для Пина Колады - смешать'});
drinkStorage.addValue('Кровавая Мэри', {'alcoholic': 'да',
 'recipe': 'продукты для Кровавой Мэри - смешать'});



console.log('drinkStorage.getValue(\'Пина Колада\')', drinkStorage.getValue('Пина Колада'));
console.log('drinkStorage.getValue(\'Несуществующий коктейл\')', drinkStorage.getValue('Несуществующий коктейл'));

console.log('drinkStorage.deleteValue(\'Кровавая Мэри\')', drinkStorage.deleteValue('Кровавая Мэри'));
console.log('drinkStorage.deleteValue(\'Несуществующий коктейл\')', drinkStorage.deleteValue('Несуществующий коктейл'));

console.log('drinkStorage.getKeys()', drinkStorage.getKeys());

drinkStorage.showDrinks();




