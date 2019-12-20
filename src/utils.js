const makeRandNum = (minNum, maxNum) => Math.floor(minNum + Math.random() * (maxNum + 1 - minNum));

export default makeRandNum;