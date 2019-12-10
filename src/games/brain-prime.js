import { greeting, makeRandNum } from '../index';
import engine from '../engine';

const isPrime = (num) => {
  if (num === 1) {
    return 'no';
  } if (num === 2) {
    return 'yes';
  }

  for (let i = 2; i < num; i + 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const answerData = () => {
  const num = makeRandNum(409);
  const rigthAnswer = isPrime(num);
  const question = `${num}`;
  return [rigthAnswer, question];
};

const startBrainPrime = () => {
  const name = greeting('Answer "yes" if given number is prime. Otherwise answer "no".');
  return engine(answerData, name);
};

export default startBrainPrime;
