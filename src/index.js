import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const roundsCount = 3;
const runGame = (description, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}`);
  for (let i = 0; i < roundsCount; i += 1) {
    const roundData = getQuestionAndAnswer();
    const question = car(roundData);
    const correctAnswer = cdr(roundData);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

export default runGame;
