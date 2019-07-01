import { cons } from 'hexlet-pairs';
import gameLauncher, { getRandomInt } from '../index';

const gameRules = 'Find the greatest common divisor of given numbers.';

const question = () => {
  const firstOperand = getRandomInt(1, 20);
  const secondOperand = getRandomInt(1, 20);
  const numbers = `${firstOperand}  ${secondOperand}`;
  const getGcd = (x, y) => {
    const firstNumber = x;
    const secondNumber = y;
    return firstNumber ? getGcd(secondNumber % firstNumber, firstNumber) : secondNumber;
  };
  const gcd = String(getGcd(firstOperand, secondOperand));
  return cons(numbers, gcd);
};

const brainGcd = () => gameLauncher(gameRules, question);

export default brainGcd;
