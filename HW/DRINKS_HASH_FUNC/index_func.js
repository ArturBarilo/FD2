'use strict';

function HashStorageFunc() {
    const self = this;

    const storage = {};

    self.addValue = function(key, value) {
        storage[key] = value;
    }

    self.getValue = function(key) {
        return storage[key];
    }

    self.deleteValue = function(key) {
        if (key in storage) {
            delete storage[key];
            return true;
        } else {
            return false;
        }
    }

    self.getKeys = function() {
        const array = Object.keys(storage);
        return array;
    }

    self.showDrinks = function() {
        for (const key in storage) {
            console.log(`
            \nНазвание: ${key}
            \nакогольный: ${storage[key].alcoholic}
            \nрецепт приготовления:\n ${storage[key].recipe}`)
        }
    }
}

const drinkStorage = new HashStorageFunc();

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




