import { greeting, makeRandNum, findGCD } from '../index.js';
import { engine } from '../engine';
const answerData = () => {
    const num1 = makeRandNum(25);
    const num2 = makeRandNum(25);
    console.log(`Question: ${num1} ${num2}`);
    const rightAnswer = findGCD(num1, num2);

    return rightAnswer;
}

const startBrainGCD = () => {
    const name = greeting('Find the greatest common divisor of given numbers');;
    return engine(answerData, name)
};

export { startBrainGCD };