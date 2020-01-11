import makeRandomNumber from '../utils';
import engine from '../engine';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  } if (num === 2) {
    return true;
  }

  let i = 2;
  while (i < (num / 2)) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }

  return true;
};

const minNum = 1;
const maxNum = 409;
const getGameData = () => {
  const question = makeRandomNumber(minNum, maxNum);
  const rigthAnswer = isPrime(question) ? 'yes' : 'no';

  return [rigthAnswer, question];
};

const greeting = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const startBrainPrime = () => engine(greeting, getGameData);

export default startBrainPrime;
