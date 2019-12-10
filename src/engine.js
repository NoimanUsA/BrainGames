import readlineSync from 'readline-sync';

const engine = (data, name, count = 0) => {
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
    return true;
  }

  const answerData = data();
  const rigthAnswer = String(answerData[0]);
  console.log(`Question : ${answerData[1]}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer !== rigthAnswer) {
    console.log(`'${answer}' is wrong answer, corrent answer was '${rigthAnswer}' \nLet's try again, ${name}`);
    return false;
  }

  console.log('Correct!');
  return engine(data, name, count + 1);
};

export default engine;
