import { makeRandNum } from '../index';
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

const gameData = () => {
  const arr = makeProgress(10);
  const switchedIndex = makeRandNum(arr.length - 2);
  const rigthAnswer = `${arr[switchedIndex]}`;
  arr[switchedIndex] = '...';
  const questionText = arr.join(' ');

  return [rigthAnswer, questionText];
};

const startBrainProgression = () => {
  const greeting = 'What number is missing in the progression?';
  const gameCounter = 3;

  return engine(greeting, gameCounter)(gameData);
};

export default startBrainProgression;
