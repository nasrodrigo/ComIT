"use strict";

let user = {
    name : "Rodrigo",
    age : "36",
    phoneNumber : "(204)9999-9090",
    street : "Street fighter alpha",
    postalCode : "M2C 1N3",
    married : true
}

let isMarried = (user.married == true)? "is married <3" : "is not married </3";

function evenCount(){
    for(let i = 1; i <= 100; i++){
        if(i % 2 == 0){
            console.log(i);
        }
    }
}

function showUser(){
    console.log(user.name + " - " + user.age + " - " + user.phoneNumber + " - " + user.street + " - " + user.postalCode + " - " + isMarried );
}

showUser();

let evenNumbers = evenCount;

for(let i = 0; i < 5; i++){
    evenNumbers();
}

let fibonacci =  function(val) {
    let fib = 0;
    let x = 1;
    let y;
    
    for (let i = 0; i < val; i++) {
        if(i == 0) {
            console.log(0);
        } else {
            y = x;
            x = x + fib;
            fib = y;
            console.log(fib);
        }
    }
    
}

fibonacci(10);

let showName = function(name){
    let sign = "";
    for (let index = 0; index < name.length + 6; index++) {
        sign += "=";
    }
    console.log(sign);
    console.log(`=  ${name}  =`);
    console.log(sign);
}

showName("Rodrigo");
showName("Sofia");