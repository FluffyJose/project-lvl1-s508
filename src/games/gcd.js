import {
  answer, greeting, getRandomInt,
} from '../index';

greeting();
console.log('Find the greatest common divisor of given numbers.');
const userName = answer('May i have your name?');
console.log(`Hello, ${userName}!`);

const brainGcd = () => {
  let attemptCounter = 0;
  const succesAttempts = 3;

  while (attemptCounter < succesAttempts) {
    const firstOperand = getRandomInt();
    const secondOperand = getRandomInt();

    console.log(`Question: ${firstOperand} ${secondOperand}`);
    const getGcd = (x, y) => {
      const firstNumber = x;
      const secondNumber = y;
      return firstNumber ? getGcd(secondNumber % firstNumber, firstNumber) : secondNumber;
    };
    const result = getGcd(firstOperand, secondOperand);

    const userAnswer = answer('Your answer');
    if (Number(userAnswer) === result) {
      console.log('Correct!');
      attemptCounter += 1;
      if (attemptCounter === succesAttempts) {
        console.log(`Congratulations, ${userName}!`);
        return;
      }
    }
    if (Number(userAnswer) !== result) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.\n Let's try again, ${userName}`);
      return;
    }
  }
};

export default brainGcd;
