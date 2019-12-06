import { setAnswer } from './index';

const engine = (setRightAnswer, name, count = 0) => {
    if (count === 3) {
        console.log(`Congratulations, ${name}!`);
        return true;
    }

    const rigthAnswer = String(setRightAnswer());
    const answer = setAnswer();

    if (answer !== rigthAnswer) {
        console.log(`'${answer}' is wrong answer, corrent answer was '${rigthAnswer}' \n` + `Let's try again, ${name}`);
        return false;
    };

    console.log('Correct!');
    return engine(setRightAnswer, name, count + 1);
};

export { engine };