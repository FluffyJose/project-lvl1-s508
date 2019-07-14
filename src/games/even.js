import { cons } from 'hexlet-pairs';
import runGame from '..';
import getRandomInt from '../utils';

const description = 'Answer "yes" if number even, otherwise answer "no".';
const isEven = number => number % 2 === 0;
const getQuestionAndAnswer = () => {
  const randomInt = getRandomInt(1, 4);
  const answer = isEven(randomInt) ? 'yes' : 'no';
  return cons(randomInt, answer);
};
export default () => runGame(description, getQuestionAndAnswer);
