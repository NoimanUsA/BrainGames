import readlineSync from 'readline-sync';

const gameCount = 3;
const engine = (greetText, gameData) => {
  console.log(`Welcome to Brain the Games!\n${greetText}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}! \n`);

  const iter = (iterCount = 0) => {
    if (iterCount === gameCount) {
      console.log(`Congratulations, ${name}!`);
      return true;
    }

    const [rigthAnswer, question] = gameData();
    console.log(`Question : ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== rigthAnswer) {
      console.log(`\n'${answer}' is wrong answer, corrent answer was '${rigthAnswer}'`);
      console.log(`Let's try again, ${name}`);
      return false;
    }

    console.log('Correct!\n');
    return iter(iterCount + 1);
  };
  return iter();
};

export default engine;
