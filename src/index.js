import readlineSync from 'readline-sync';

const greeting = (text = '') => {
  console.log(`Welcome to Brain the Games!\n${text}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}! \n`);
  return name;
};

const makeRandNum = (maxNum) => Math.floor(Math.random() * maxNum + 1);


export { greeting, makeRandNum };
