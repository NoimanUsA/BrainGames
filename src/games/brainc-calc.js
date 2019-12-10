/* eslint-disable no-undef */
import { greeting, makeRandNum } from '../index';
import engine from '../engine';


const calc = (sign, nums) => {
  let rigthAnswer;
  switch (sign) {
    case '+':
      rigthAnswer = nums[0] + nums[1];
      break;
    case '*':
      rigthAnswer = nums[0] * nums[1];
      break;
    case '-':
      rigthAnswer = nums[0] - nums[1];
      break;
    default:
  }

  return rigthAnswer;
};

const signs = ['+', '-', '*'];
const answerData = () => {
  const sign = signs[makeRandNum(signs.length - 1)];
  const nums = [makeRandNum(25), makeRandNum(25)];
  const question = `${nums[0]} ${sign} ${nums[1]}`;
  const rigthAsnwer = calc(sign, nums);

  return [rigthAsnwer, question];
};


const startBrainCalc = () => {
  const name = greeting('What is the result of the expression?');
  return engine(answerData, name);
};

export default startBrainCalc;
