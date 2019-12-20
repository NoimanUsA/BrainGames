import makeRandNum from '../utils';
import engine from '../engine';

const minStartNum = 0;
const maxStartNum = 10;
const minProgNum = 0;
const maxProgNum = 10;
const makeProgress = (count) => {
  const startNum = makeRandNum(minStartNum, maxStartNum);
  const diffNum = makeRandNum(minProgNum, maxProgNum);
  const progressArr = [];
  for (let i = 0; i < count; i += 1) {
    progressArr.push(startNum + diffNum * i);
  }

  return progressArr;
};

const progressionLength = 10;
const gameData = () => {
  const arr = makeProgress(progressionLength);
  const switchedIndex = makeRandNum(0, arr.length - 2);
  const rigthAnswer = String(arr[switchedIndex]);
  arr[switchedIndex] = '...';
  const questionText = arr.join(' ');


  return [rigthAnswer, questionText];
};


const greeting = 'What number is missing in the progression?';
const startBrainProgression = () => engine(greeting)(gameData);

export default startBrainProgression;
