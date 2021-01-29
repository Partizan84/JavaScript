'use strict';

let leader = {
    askQuestion(questions) {
        let variants = "";
        for (let key in question.variants) {
            variants += `${key}: ${question.variants[key]}\n`;
        }
        let answer = prompt(`${questions.text},варианты ответа:\n${variantions}`)
        return answer === question.correctAnswerIndex;
    }
};