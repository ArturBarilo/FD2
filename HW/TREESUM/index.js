'use strict';


const array1 = [5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8];
const array2 = [5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8];
const array3 = [5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8];




function treesum1(array) {
    let sum = 0;
    while (array.length) {
        let element = array.shift();
        if (Array.isArray(element)) {
            array.unshift(...element);
            continue;
        }
        sum += element;
    }
    return sum;
}


function treesum2(array) {
    let sum = 0;
        const arr = array.flat(Infinity);
    for (const element of arr) {
        sum += element;
    }
    return sum;
}


function treesum3(array) {
    let sum = 0; 
    let element;
    for(let index = 0; index < array.length; index++) {
        if (Array.isArray(array[index])) {
            element = array[index];
            array[index] = 0;
            array.push(...element);
            return treesum3(array);
        }
        sum += array[index];
    }
    return sum;
}




console.log(treesum1(array1));
console.log(treesum2(array2));
console.log(treesum3(array3));









