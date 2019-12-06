import readlineSync from 'readline-sync';

const greeting = (text = '') => {
  console.log(`Welcome to Brain the Games!\n${text}\n`)
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}! \n`);
  return name;
}

const makeRandNum = (maxNum) => {
  return Math.floor(Math.random() * maxNum + 1);
}

const setAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
}

const calc = (sign, nums) => {
  let rigthAnswer;
  switch (sign) {
    case '+':
      rigthAnswer = nums[0] + nums[1];
      break;
    case '*':
      rigthAnswer = nums[0] * nums[1];
      break
    case '-':
      rigthAnswer = nums[0] - nums[1];
      break;
  };

  return rigthAnswer;
}

const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGCD(b, a % b);
};


const makeProgress = (count) => {
  const startNum = makeRandNum(10);
  const progressNum = makeRandNum(10);
  const progressArr = [startNum];
  for (let i = 0; i < count; i++) {
    progressArr.push(progressArr[i] + progressNum);
  }

  return progressArr;

}

const isPrime = (num) => {
  if (num === 1) {
    return 'no';
  } else if (num === 2) {
    return 'yes';
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return 'no'
    };
  };
  return 'yes';
};

export { greeting, makeRandNum, setAnswer, calc, findGCD, makeProgress, isPrime };
