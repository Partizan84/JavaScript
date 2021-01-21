'use strict';
let arg1,arg2,operation="";
/**
 * Функция складывает переданные параметры.
 * @param {*} arg1 
 * @param {*} arg2 
 */
function Summa(arg1,arg2){
    let c;
    c = arg1 + arg2;
    return console.log(c);
}
/**
 * Функция вычитает переданные параметры.
 * @param {*} arg1 
 * @param {*} arg2
 */
function Difference(arg1,arg2){
    let c;
    c = arg1 - arg2;
    return console.log(c);
}
/**
 * Функция делит переданные параметры.
 * @param {number} arg1 
 * @param {number} arg2
 */
function Division(arg1,arg2){
    let c;
    c = arg1 / arg2;
    return console.log(c);
}
/**
 * Функция перемножает переданные параметры.
 * @param {number} arg1 
 * @param {number} arg2
 */
function Multiplication(arg1,arg2){
    let c;
    c = arg1 * arg2;
    return console.log(c);
}
/**
 * Функция выбора математической операции с переданными параметрами.
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation может быть "+","-","/","*".
 * @throw {Error} Если передана не предусмотренная операция, то будет выброшенна
 * ошибка в консоль.
 */
function mathOperation(arg1, arg2, operation){
    switch (operation) {
        case "+":
            return Summa(arg1, arg2);
        case "-":
            return Difference(arg1,arg2);
        case "/":
            return Division(arg1,arg2);
        case "*":
            return Multiplication(arg1,arg2);
        default:
            throw new Error("Операция " + operation + " не предусмотрена");
    }
    return
}
arg1 = Number(prompt("Введите первое число"));
arg2 = Number(prompt("Введите второе число"));
operation = prompt("Введите одну из перечисленных операций над числами: +, -, /, *");
mathOperation(arg1, arg2, operation);