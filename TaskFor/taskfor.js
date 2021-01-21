'use strict';
let a = 2, b = 5;
/**
 * Функция складывает переданные параметры.
 * @param {*} a 
 * @param {*} b 
 */
function Summa(a,b){
    let c;
    c = a + b;
    return console.log(c);
}
/**
 * Функция вычитает переданные параметры.
 * @param {*} a 
 * @param {*} b 
 */
function Difference(a,b){
    let c;
    c = a - b;
    return console.log(c);
}
/**
 * Функция делит переданные параметры.
 * @param {*} a 
 * @param {*} b 
 */
function Division(a,b){
    let c;
    c = a / b;
    return console.log(c);
}
/**
 * Функция перемножает переданные параметры.
 * @param {*} a 
 * @param {*} b 
 */
function Multiplication(a,b){
    let c;
    c = a * b;
    return console.log(c);
}
Summa(a,b);
Difference(a,b);
Division(a,b);
Multiplication(a,b);