
import { makeRandNum } from '../index';
import engine from '../engine';

const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGCD(b, a % b);
};


const gameData = () => {
  const num1 = makeRandNum(25);
  const num2 = makeRandNum(25);
  const questionText = `${num1} ${num2}`;
  const rightAnswer = `${findGCD(num1, num2)}`;

  return [rightAnswer, questionText];
};

const startBrainGCD = () => {
  const greeting = 'Find the greatest common divisor of given numbers';
  const gameCounter = 3;

  return engine(greeting, gameCounter)(gameData);
};

export default startBrainGCD;
