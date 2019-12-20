import makeRandNum from '../utils';
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
const gameData = () => {
  const sign = signs[makeRandNum(0, signs.length - 1)];
  const firstNum = makeRandNum(minNum, maxNum);
  const secondNum = makeRandNum(minNum, maxNum);
  const questionText = `${firstNum} ${sign} ${secondNum}`;
  const rigthAnswer = String(calc(sign, firstNum, secondNum));

  return [rigthAnswer, questionText];
};


const greeting = 'What is the result of the expression?';
const startBrainCalc = () => engine(greeting)(gameData);

export default startBrainCalc;
