"use strict"

let weekday = prompt(`Enter with weekday(Valid value is betwen 1 and 7)`, 100);
let msg;

switch (Number(weekday)) {
    case 1:
        msg = "Today is Monday";
        break;

    case 2:
        msg = "Today is Tuesday";
        break;

    case 3:
        msg = "Today is Wednesday";
        break;

    case 4:
        msg = "Today is Thursday";
        break;

    case 5:
        msg = "Today is Friday";
        break;

    case 6:
        msg = "Today is Saturday";
        break;

    case 7:
        msg = "Today is Sunday";
        break;

    default:
        msg = `${weekday} is a invalide value`;
        break;
}

console.log(msg);