'use strict';
let i;
for (i = 0; i < 11; i++) {
    if (i === 0) {
        console.log("0 - это ноль.");
    } else {
    if (i %2 ===0) {
        console.log(i + " - четное число");
    } else {
        console.log(i + " - не четное число");
    }
    }
}