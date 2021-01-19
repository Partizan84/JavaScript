'use strict';
let a = 0, b = 0, c, d;
if (a >= 0 && b >= 0) {
    console.log(c = a - b);
}
if (a <0 && b < 0) {
    console.log(c = a * b);
}
//Первый вариант задания со *, мне кажется не комбинации a и b учтены мной.
if (Math.sign(a) != Math.sign(b)) {
    console.log(c = a + b);
}
//Второй вариант задания со * Для сравнения ниже создал более простое, но большее условие
if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
    console.log(d = a + b);
}