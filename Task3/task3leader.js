'use strict';

let leader = {
    askQuestion(question) {
        let variantions = "";
        for (let key in question.variants) {
            variantions += `${key}: ${question.variants[key]}\n`;
        }
        let answer = prompt(`${question.text},варианты ответа:\n${variantions}`)
        return answer === question.correctAnswerIndex;
    }
};