'use strict';

function numberDecomposition(num) {
    if (num < 0 || num > 999 || !Number.isInteger(num)) {
        console.log('Число должно быть целым и входить в диапазон [0 .. 999].');
        return {};
    }
    return {
        units: num % 10,
        tens: Math.floor(num / 10) % 10,
        hundereds: Math.floor(num / 100),
    }
}

console.log(numberDecomposition(Number(prompt('Введите целое число в диапазоне от 0 до 999.'))));