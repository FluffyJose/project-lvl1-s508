import { cons } from 'hexlet-pairs';
import runGame from '..';
import getRandomInt from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num <= 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomInt(-10, 20);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};
export default () => runGame(description, getQuestionAndAnswer);
