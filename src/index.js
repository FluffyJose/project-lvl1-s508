import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const runGame = (description, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}`);
  const succesAttempts = 3;
  let successAttemptCounter = 0;
  while (successAttemptCounter <= succesAttempts) {
    const round = game();
    const numberOrExpression = car(round);
    const correctAnswer = cdr(round);
    console.log(`Question: ${numberOrExpression}`);
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
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}.'`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
};

export default runGame;
