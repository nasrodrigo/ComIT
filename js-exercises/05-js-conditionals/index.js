"use strict"
alert("Enter two numbers to see if the first is greater than the second");
let firstValue = prompt( "First value", 100)
let secondValue = prompt( "Second value", 100)
if(Number(firstValue) > Number(secondValue)){
    alert(`Result: First value is greater ${firstValue} > ${secondValue}`)
}else if(Number(firstValue) == Number(secondValue)){
    alert(`Result: Values are equal ${firstValue} = ${secondValue}`)
}else{
    alert(`Result: Second value is greater ${firstValue} < ${secondValue}`)
}
