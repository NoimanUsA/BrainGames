
import makeRandNum from '../utils';
import engine from '../engine';

const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGCD(b, a % b);
};

const minNum = 1;
const maxNum = 25;
const gameData = () => {
  const firstNum = makeRandNum(minNum, maxNum);
  const secondNum = makeRandNum(minNum, maxNum);
  const questionText = `${firstNum} ${secondNum}`;
  const rightAnswer = String(findGCD(firstNum, secondNum));

  return [rightAnswer, questionText];
};

const greeting = 'Find the greatest common divisor of given numbers';
const startBrainGCD = () => engine(greeting)(gameData);

export default startBrainGCD;
