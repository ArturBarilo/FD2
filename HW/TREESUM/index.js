'use strict';


const array = [5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8];


function treesum3(array) {
    let sum = 0; 
    const newArray = JSON.parse(JSON.stringify(array));
    for(let index = 0; index < newArray.length; index++) {
        if (Array.isArray(newArray[index])) {
            newArray[index] = treesum3(newArray[index]);
        }
        sum += newArray[index];
    }
    return sum;
}

console.log(treesum3(array));
console.log(array);









