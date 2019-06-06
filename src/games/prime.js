import {
  answer, greeting, getRandomInt,
} from '../index';

greeting();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const userName = answer('May i have your name?');
console.log(`Hello, ${userName}!`);

const brainPrime = () => {
  let attemptCounter = 0;
  const succesAttempts = 3;

  while (attemptCounter < succesAttempts) {
    const isPrime = getRandomInt();
    console.log(`Question: ${isPrime}`);
    const getPrime = (num) => {
      let prime = num !== 1;
      for (let i = 2; i < num; i += 1) {
        if (num % i === 0) {
          prime = false;
        }
      }
      return prime ? 'yes' : 'no';
    };
    const result = getPrime(isPrime);

    const userAnswer = answer('Your answer');
    if (userAnswer === result) {
      console.log('Correct!');
      attemptCounter += 1;
      if (attemptCounter === succesAttempts) {
        console.log(`Congratulations, ${userName}!`);
        return;
      }
    }
    if (userAnswer !== result) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.\n Let's try again, ${userName}`);
      return;
    }
  }
};

export default brainPrime;
