import readlineSync from 'readline-sync';

const gamesCount = 3;
const engine = (gameDescription, getGameData) => {
  console.log('Welcome to Brain the Games!\n');
  console.log(`${gameDescription}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const iter = (iterCount) => {
    if (iterCount === gamesCount) {
      console.log(`Congratulations, ${name}!`);
      return true;
    }

    const [rigthAnswer, question] = getGameData();
    console.log(`Question : ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== rigthAnswer) {
      console.log(`\n'${answer}' is wrong answer, corrent answer was '${rigthAnswer}'`);
      console.log(`Let's try again, ${name}`);
      return false;
    }

    console.log('Correct!\n');
    return iter(iterCount);
  };
  return iter(0);
};

export default engine;
