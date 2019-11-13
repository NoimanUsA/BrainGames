import readlineSync from 'readline-sync';


const userName = () => {
  console.log('Welcome to Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}! `);
  return true;
};

const even = () => {
  console.log('Welcome to Brain the Games! \n'
    + 'Answer "yes" if the number is even, otherwise answer "no" ');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}! \n`);

  const iter = (count) => {
    if (count === 3) {
      console.log(`Congratulations, ${name}!`);
      return true;
    }
    const num = Math.floor(Math.random() * 100 + 1);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    const rigthAnswer = num % 2 === 0 ? 'yes' : 'no';
    if (answer !== rigthAnswer) {
      console.log(`'${answer}' is wrong answer, corrent answer was '${rigthAnswer}' \n Let's try again, ${name}`);
      return false;
    }

    console.log('Correct!');
    return iter(count + 1);
  };

  iter(0);
};

export { userName, even };
