import { greeting, makeRandNum, isPrime } from '../index.js';
import { engine } from '../engine';

const answerData = () => {
    const num = makeRandNum(409)
    console.log(`Question: ${num}`);
    const rightAnswer = isPrime(num);

    return rightAnswer;
}

const startBrainPrime = () => {
    const name = greeting('Answer "yes" if given number is prime. Otherwise answer "no".');;
    return engine(answerData, name);
};


export { startBrainPrime };