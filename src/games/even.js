import { cons } from 'hexlet-pairs';
import gameLauncher, { getRandomInt } from '../index';

const gameRules = 'Answer "yes" if number even, otherwise answer "no".';
const isEven = number => number % 2 === 0;
const question = () => {
  const randomInt = getRandomInt(1, 10);
  const correctAnswer = isEven(randomInt) ? 'yes' : 'no';
  return cons(randomInt, correctAnswer);
};
const brainEven = () => gameLauncher(gameRules, question);
export default brainEven;
