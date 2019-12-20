import makeRandNum from '../utils';
import engine from '../engine';


const isEven = (num) => num % 2 === 0;


const minNum = 1;
const maxNum = 500;
const gameData = () => {
  const question = makeRandNum(minNum, maxNum);
  const rigthAnswer = isEven(question) ? 'yes' : 'no';

  return [rigthAnswer, question];
};

const greeting = 'Answer "yes" if the number is even, otherwise answer "no"';
const startBrainEven = () => {
  return engine(greeting)(gameData);
};

export default startBrainEven;
