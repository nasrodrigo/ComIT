"use strict"

let sum = 0;
for(let i = 0; i <= 1000; i++){
    sum += i;
    if( sum > 400){
        console.log("Partial result: " + sum);
        break;
    }
}

for(let i = 0; i <= 10; i++){
    console.log(i);
}

let i = 100;
do{
    console.log(i);
    i--;
}while(i>0);

let x = 1;
while(x < 100){
    console.log(x);
    x++;
}

let star = '';
for(let i = 0; i < 13; i++){
    star = star + '*';
    console.log(star);    
}