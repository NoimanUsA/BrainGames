import { greeting, makeRandNum } from '../index';
import engine from '../engine';

const makeProgress = (count) => {
  const startNum = makeRandNum(10);
  const progressNum = makeRandNum(10);
  const progressArr = [startNum];
  for (let i = 0; i < count; i += 1) {
    progressArr.push(progressArr[i] + progressNum);
  }

  return progressArr;
};

const answerData = () => {
  const arr = makeProgress(10);
  const switchedIndex = makeRandNum(arr.length - 2);
  const rigthAnswer = arr[switchedIndex];
  arr[switchedIndex] = '...';
  const question = `${arr.join(' ')}`;
  return [rigthAnswer, question];
};

const startBrainProgression = () => {
  const name = greeting('What number is missing in the progression?');

  return engine(answerData, name);
};

export default startBrainProgression;
