"use strict";

let siblings = ['Phillipe', 'Andre'];
let parents = new Array();
parents.push('Adalberto', 'Deise');

console.log(siblings);
console.log(parents);

siblings = siblings.concat(parents);
console.log(siblings);

siblings.push("Vedder");
console.log(siblings);

siblings.reverse();
console.log(siblings);

console.log(`${siblings[1]} is my Mother`);
console.log(`${siblings[2]} is my Father`);

siblings[1] = "Deise Do Nascimento Monteiro Pereira";
siblings[2] = "Adalberto Monteiro Pereira";
console.log(siblings);
console.log(`${siblings[1]} is my Mother`);
console.log(`${siblings[2]} is my Father`);

for (let i = 0; i < siblings.length; i++) {
    console.log(siblings[i]);
}

for (let item of siblings) {
    console.log(item);
}

function map(arr, func) {
    let arrReturn = new Array();
    
    for(let val of arr){
        arrReturn.push(func(val));
    }    

    return arrReturn;
}

const result = map([1, 2, 3], function(item) {
    return item * 2;
});

console.log(result); // [2, 4, 6]