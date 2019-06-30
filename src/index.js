import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const greeting = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}`);
  return playerName;
};

export const getRandomInt = (lowerValue, upperValue) => {
  const randomInt = (Math.floor(Math.random() * (upperValue - lowerValue)) + lowerValue);
  return randomInt;
};

const gameLauncher = (rules, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rules}`);
  const playerName = greeting();
  const succesAttempts = 3;
  let successAttemptCounter = 0;
  while (successAttemptCounter <= succesAttempts) {
    const round = game();
    const number = car(round);
    const correctAnswer = cdr(round);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      successAttemptCounter += 1;
      if (successAttemptCounter === 3) {
        console.log(`Congratulations, ${playerName}!`);
        return;
      }
    }
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${playerName}!`);
      return;
    }
  }
};

export default gameLauncher;
