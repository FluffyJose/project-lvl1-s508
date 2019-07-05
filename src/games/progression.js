import { cons, car, cdr } from 'hexlet-pairs';
import runGame from '..';
import getNumber from '../utils';

const description = 'What number is missing in the progression?';
const progressionLength = 10;
const getProgression = () => {
  const firstElement = getNumber(1, 10);
  const progressionDiff = getNumber(1, 10);
  const hiddenElementPosition = getNumber(1, progressionLength);
  const hiddenElementValue = firstElement + hiddenElementPosition * progressionDiff;
  let progression = '';
  for (let i = 0; i < progressionLength; i += 1) {
    let nextElement = firstElement + i * progressionDiff;
    if (i === hiddenElementPosition) {
      nextElement = '..';
    }
    progression = `${progression} ${nextElement}`;
  }
  return cons(progression, hiddenElementValue);
};
const getQuestion = () => {
  const progression = getProgression();
  return cons(car(progression), String(cdr(progression)));
};

export default () => runGame(description, getQuestion);
