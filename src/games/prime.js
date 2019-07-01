import { cons } from 'hexlet-pairs';
import gameLauncher, { getRandomInt } from '../index';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const question = () => {
  const number = getRandomInt(1, 20);
  const getPrime = (num) => {
    let prime = num !== 1;
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        prime = false;
      }
    }
    return prime ? 'yes' : 'no';
  };
  const result = getPrime(number);
  return cons(number, result);
};
const brainPrime = () => gameLauncher(gameRules, question);
export default brainPrime;
