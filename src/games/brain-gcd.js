
import { greeting, makeRandNum } from '../index';
import engine from '../engine';

const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGCD(b, a % b);
};


const answerData = () => {
  const num1 = makeRandNum(25);
  const num2 = makeRandNum(25);
  const question = `${num1} ${num2}`;
  const rightAnswer = findGCD(num1, num2);

  return [rightAnswer, question];
};

const startBrainGCD = () => {
  const name = greeting('Find the greatest common divisor of given numbers');
  return engine(answerData, name);
};

export default startBrainGCD;
