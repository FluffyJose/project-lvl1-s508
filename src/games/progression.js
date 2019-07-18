import { cons } from 'hexlet-pairs';
import runGame from '..';
import getRandomInt from '../utils';

const description = 'What number is missing in the progression?';
const length = 10;
const getQuestion = (first, diff, hiddenElement, progLength) => {
  let question = '';
  for (let i = 0; i < progLength; i += 1) {
    const nextElement = (i === hiddenElement) ? '..' : first + i * diff;
    question = `${question} ${nextElement}`;
    if (i === 0) {
      question = `${nextElement}`;
    }
  }
  return question;
};
const getQuestionAndAnswer = () => {
  const firstElement = getRandomInt(1, 10);
  const diff = getRandomInt(1, 10);
  const hiddenElementPosition = getRandomInt(0, length - 1);
  const answer = firstElement + hiddenElementPosition * diff;
  const question = getQuestion(
    firstElement, diff, hiddenElementPosition, length,
  );
  return cons(question, String(answer));
};

export default () => runGame(description, getQuestionAndAnswer);
