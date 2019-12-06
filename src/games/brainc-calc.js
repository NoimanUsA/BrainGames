import { greeting, makeRandNum, calc } from '../index.js';
import { engine } from '../engine';

const answerData = () => {
    const signs = ['+', '-', '*'];
    const sign = signs[makeRandNum(signs.length - 1)]
    const nums = [makeRandNum(25), makeRandNum(25)];
    console.log(`Question: ${nums[0]} ${sign} ${nums[1]}`);
    const rightAnswer = calc(sign, nums);

    return rightAnswer;
}


const startBrainCalc = () => {
    const name = greeting('What is the result of the expression?');
    return engine(answerData, name);
}

export { startBrainCalc };

