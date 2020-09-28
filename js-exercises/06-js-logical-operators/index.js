"use strict"
let hour = prompt( "enter the current hour (Valid value number betwen 0 and 23)", 0)
if(Number(hour) < 0 || Number(hour) > 23){
    alert(`${hour} is not a valid value x(`);
}else if( Number(hour) < 8 || Number(hour) >= 18){
    alert(`${hour} hour is outside of office hours =(`);
}else if(Number(hour) >= 8 && Number(hour) < 18){
    alert(`${hour} we are open =)`);
}
