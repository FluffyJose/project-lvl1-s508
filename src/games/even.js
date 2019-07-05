import { cons } from 'hexlet-pairs';
import runGame from '..';
import getNumber from '../utils';

const description = 'Answer "yes" if number even, otherwise answer "no".';
const isEven = number => number % 2 === 0;
const getQuestion = () => {
  const randomInt = getNumber(1, 10);
  const correctAnswer = isEven(randomInt) ? 'yes' : 'no';
  return cons(randomInt, correctAnswer);
};
export default () => runGame(description, getQuestion);
