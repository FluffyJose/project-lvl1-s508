import { cons } from 'hexlet-pairs';
import runGame from '..';
import getRandomInt from '../utils';

const description = 'Find the greatest common divisor of given numbers.';
const getGcd = (x, y) => (x ? getGcd(y % x, x) : y);

const getQuestionAndAnswer = () => {
  const firstOperand = getRandomInt(1, 20);
  const secondOperand = getRandomInt(1, 20);
  const question = `${firstOperand} ${secondOperand}`;
  const answer = String(getGcd(firstOperand, secondOperand));
  return cons(question, answer);
};

export default () => runGame(description, getQuestionAndAnswer);
