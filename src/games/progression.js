import { cons } from 'hexlet-pairs';
import runGame from '..';
import getRandomInt from '../utils';

const description = 'What number is missing in the progression?';
const progressionLength = 10;
const getQuestion = (first, diff, hidden) => {
  let question = '';
  for (let i = 0; i < progressionLength; i += 1) {
    let nextElement = first + i * diff;
    if (i === hidden) {
      nextElement = '..';
    }
    question = `${question} ${nextElement}`;
  }
  return question;
};
const getQuestionAndAnswer = () => {
  const firstElement = getRandomInt(1, 10);
  const progressionDiff = getRandomInt(1, 10);
  const hiddenElementPosition = getRandomInt(0, progressionLength - 1);
  const answer = firstElement + hiddenElementPosition * progressionDiff;
  const question = getQuestion(firstElement, progressionDiff, hiddenElementPosition);
  return cons(question, String(answer));
};

export default () => runGame(description, getQuestionAndAnswer);
