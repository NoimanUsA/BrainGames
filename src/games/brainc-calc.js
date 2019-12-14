import { makeRandNum } from '../index';
import engine from '../engine';


const calc = (sign, num1, num2) => {
  let rigthAnswer;
  switch (sign) {
    case '+':
      rigthAnswer = num1 + num2;
      break;
    case '*':
      rigthAnswer = num1 * num2;
      break;
    case '-':
      rigthAnswer = num1 - num2;
      break;
    default:
  }

  return rigthAnswer;
};

const signs = ['+', '-', '*'];
const gameData = () => {
  const sign = signs[makeRandNum(signs.length - 1)];
  const num1 = makeRandNum(25);
  const num2 = makeRandNum(25);
  const questionText = `${num1} ${sign} ${num2}`;
  const rigthAnswer = `${calc(sign, num1, num2)}`;

  return [rigthAnswer, questionText];
};


const startBrainCalc = () => {
  const greeting = 'What is the result of the expression?';
  const gameCounter = 3;

  return engine(greeting, gameCounter)(gameData);
};

export default startBrainCalc;
