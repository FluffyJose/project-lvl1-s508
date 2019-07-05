import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const succesAttempts = 3;
const runGame = (description, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}`);
  let successAttemptCounter = 0;
  while (successAttemptCounter <= succesAttempts) {
    const roundData = game();
    const question = car(roundData);
    const correctAnswer = cdr(roundData);
    console.log(`Question: ${question}`);
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
