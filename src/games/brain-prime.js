import { makeRandNum } from '../index';
import engine from '../engine';

const isPrime = (num) => {
  if (num === 1) {
    return false;
  } if (num === 2) {
    return true;
  }

  let i = 2;
  while (i < num) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }

  return true;
};

const gameData = () => {
  const num = makeRandNum(409);
  const rigthAnswer = isPrime(num) ? 'yes' : 'no';

  return [rigthAnswer, num];
};

const startBrainPrime = () => {
  const greeting = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const gameCounter = 3;
  return engine(greeting, gameCounter)(gameData);
};

export default startBrainPrime;
