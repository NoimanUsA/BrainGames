import { greeting, makeRandNum, makeProgress } from '../index.js';
import { engine } from '../engine';


const answerData = () => {
    const arr = makeProgress(10);
    const switchedIndex = makeRandNum(arr.length - 2);
    const rigthAnswer = arr[switchedIndex];
    arr[switchedIndex] = '...';

    console.log(`Question: ${arr.join(' ')}`);

    return rigthAnswer;
}

const startBrainProgression = () => {
    const name = greeting('What number is missing in the progression?');;

    return engine(answerData, name);
}

export { startBrainProgression };