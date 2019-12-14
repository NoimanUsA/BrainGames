import { makeRandNum } from '../index';
import engine from '../engine';


const isEven = (num) => num % 2 === 0;

const gameData = () => {
  const num = makeRandNum(500);
  const rigthAnswer = isEven(num) ? 'yes' : 'no';

  return [rigthAnswer, num];
};

const startBrainEven = () => {
  const greeting = 'Answer "yes" if the number is even, otherwise answer "no"';
  const gameCounter = 3;

  return engine(greeting, gameCounter)(gameData);
};

export default startBrainEven;
