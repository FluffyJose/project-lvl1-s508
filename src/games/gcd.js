import { cons } from 'hexlet-pairs';
import runGame from '..';
import getNumber from '../utils';

const description = 'Find the greatest common divisor of given numbers.';
const getGcd = (x, y) => (x ? getGcd(y % x, x) : y);

const getQuestion = () => {
  const firstOperand = getNumber(1, 20);
  const secondOperand = getNumber(1, 20);
  const question = `${firstOperand} ${secondOperand}`;
  const correctAnswer = String(getGcd(firstOperand, secondOperand));
  return cons(question, correctAnswer);
};

export default () => runGame(description, getQuestion);
