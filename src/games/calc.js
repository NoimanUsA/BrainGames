import makeRandomNumber from '../utils';
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
const minNum = 1;
const maxNum = 25;
const getGameData = () => {
  const sign = signs[makeRandomNumber(0, signs.length - 1)];
  const firstNum = makeRandomNumber(minNum, maxNum);
  const secondNum = makeRandomNumber(minNum, maxNum);
  const question = `${firstNum} ${sign} ${secondNum}`;
  const rigthAnswer = String(calc(sign, firstNum, secondNum));

  return [rigthAnswer, question];
};

const greeting = 'What is the result of the expression?';
const startBrainCalc = () => engine(greeting, getGameData);

export default startBrainCalc;
