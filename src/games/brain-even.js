import { greeting, makeRandNum } from '../index';
import engine from '../engine';


const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const answerData = () => {
  const num = makeRandNum(500);
  const question = `${num}`;
  const rigthAnswer = isEven(num) ? 'yes' : 'no';
  return [rigthAnswer, question];
};

const startBrainEven = () => {
  const name = greeting('Answer "yes" if the number is even, otherwise answer "no"');
  return engine(answerData, name);
};

export default startBrainEven;
