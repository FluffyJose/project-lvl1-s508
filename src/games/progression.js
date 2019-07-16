import { cons } from 'hexlet-pairs';
import runGame from '..';
import getRandomInt from '../utils';

const description = 'What number is missing in the progression?';
const progressionLength = 10;
const getQuestion = (first, diff, hiddenElement, length) => {
  let question = '';
  for (let i = 0; i < length; i += 1) {
    const nextElement = (i === hiddenElement) ? '..' : first + i * diff;
    question = `${question} ${nextElement}`;
    if (i === 0) {
      question = `${nextElement}`;
    }
  }
  return question;
};
const getQuestionAndAnswer = () => {
  const progressionFirstElement = getRandomInt(1, 10);
  const progressionDiff = getRandomInt(1, 10);
  const hiddenElementPosition = getRandomInt(0, progressionLength - 1);
  const answer = progressionFirstElement + hiddenElementPosition * progressionDiff;
  const question = getQuestion(
    progressionFirstElement, progressionDiff, hiddenElementPosition, progressionLength,
  );
  return cons(question, String(answer));
};

export default () => runGame(description, getQuestionAndAnswer);
