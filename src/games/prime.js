import { cons } from 'hexlet-pairs';
import runGame from '../index';
import getRandomInt from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  let prime = num !== 1;
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      prime = false;
    }
  }
  return prime;
};

const getQuestion = () => {
  const number = getRandomInt(1, 20);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return cons(number, correctAnswer);
};
export default () => runGame(description, getQuestion);
