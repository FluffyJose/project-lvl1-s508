import { greeting, answer, getRandomInt } from '../index';

greeting();
console.log('Answer "yes" if number even, otherwise answer "no".');

const userName = answer('May i have your name? ');
console.log(`Hello, ${userName}!`);

const brainEven = () => {
  let successAttemptCounter = 1;
  while (successAttemptCounter <= 3) {
    const randomInt = getRandomInt(1, 10);
    const isEven = randomInt % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${randomInt}`);
    const userAnswer = answer('Your answer: ');
    if (isEven === userAnswer) {
      console.log('Correct!');
      successAttemptCounter += 1;
      if (successAttemptCounter === 4) {
        console.log(`Congratulations, ${userName}!`);
        return;
      }
    }
    if (isEven !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven}'. Let's try again, ${userName}!`);
      return;
    }
  }
};

export default brainEven;
