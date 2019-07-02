import { cons } from 'hexlet-pairs';
import runGame from '../index';
import getRandomInt from '../utils';

const description = 'Find the greatest common divisor of given numbers.';
const getGcd = (x, y) => (x ? getGcd(y % x, x) : y);

const getQuestion = () => {
  const firstOperand = getRandomInt(1, 20);
  const secondOperand = getRandomInt(1, 20);
  const numbers = `${firstOperand}  ${secondOperand}`;
  const gcd = String(getGcd(firstOperand, secondOperand));
  return cons(numbers, gcd);
};

export default () => runGame(description, getQuestion);
