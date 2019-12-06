import { greeting, makeRandNum } from '../index.js';
import { engine } from '../engine';

const answerData = () => {
    const num = makeRandNum(500);
    console.log(`Question: ${num}`);
    const rightAnswer = num % 2 === 0 ? 'yes' : 'no';

    return rightAnswer;
}

const startBrainEven = () => {
    const name = greeting('Answer "yes" if the number is even, otherwise answer "no"');
    return engine(answerData, name);
};

export { startBrainEven };