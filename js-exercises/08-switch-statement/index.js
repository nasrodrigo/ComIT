"use strict"

let weekday = prompt(`Enter with weekday(Valid value is betwen 1 and 7)`, 100);
let msg;

if(weekday == 1) {
    console.log("Today is Monday");
}else if (weekday == 2) {
    console.log("Today is Tuesday");
}else if (weekday == 3) {
    console.log("Today is Wednesday");
}else if (weekday == 4) {
    console.log("Today is Thursday");
}else if (weekday == 5) {
    console.log("Today is Friday");
}else if (weekday == 6) {
    console.log("Today is Saturday");
}else if (weekday == 7) {
    console.log("Today is Sunday");
}else {
    console.log(`${weekday} is a invalide value`);
}

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