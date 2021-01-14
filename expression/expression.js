"use strict";
/*
1. 10 плюс 10 получаем 20, строка "10" переводится в число и складывается с 20 получаем 30
2. 10 плюс 10 переведённые из строки плюс 10 получаем 30
3. 
4. 
5. 
*/
let result1 = 10 + 10 + "10";
let result2 = 10 + "10" + 10;
let result3 = 10 + 10 + +"10";
let result4 = 10 / -"";
let result5 = 10 / +"2,5";
console.log(result1,result2,result3,result4,result5);