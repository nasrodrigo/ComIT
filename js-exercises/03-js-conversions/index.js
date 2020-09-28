"use strict"
let age = 36;
let firstName = "Rodrigo";
let cursoCompleted = false;
let score = null;
let winningNumbers;

console.log(`Age: ${age}`);
console.log(`Name: ${firstName}`);
console.log(`Completed de course: ${cursoCompleted}`);
console.log(`Score: ${score}`);
console.log(`Winning numbers: ${winningNumbers}`);

console.log(`Age: ${String(age)}`);
console.log(`Name: ${Number(firstName)}`);
console.log(`Completed de course: ${Number(cursoCompleted)}`);
console.log(`Score: ${Boolean(score)}`);
console.log(`Winning numbers: ${Boolean(winningNumbers)}`);