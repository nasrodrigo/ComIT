"use strict"

let arr = [];
let arr2 = [];
let arr3 = [];
let arr4 = [];

for(let i = 0; i <= 1000; i++){
    if(i <= 400){
        arr.push(i);
        console.log(arr.join(','));
    }else{
        break;
    }
}

for(let i = 0; i <= 10; i++){
    arr2.push(i);
    console.log(arr2.join(','));
}

let i = 100;
do{
    arr3.push(i);
    console.log(arr3.join(','));
    i--;
}while(i>0);

let x = 1;
while(x < 100){
    arr4.push(x);
    console.log(arr4.join(','));
    x++;
}
