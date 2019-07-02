import { cons, car, cdr } from 'hexlet-pairs';
import runGame from '../index';
import getRandomInt from '../utils';

const description = 'What number is missing in the progression?';
const getProgression = () => {
  const firstElement = getRandomInt(1, 10);
  const progressionDiff = getRandomInt(1, 10);
  const progressionLength = 10;
  const hiddenElementPosition = getRandomInt(1, progressionLength);
  const hiddenElementValue = firstElement + hiddenElementPosition * progressionDiff;
  let positionCounter = 0;
  let progression = '';
  for (let i = 0; i < progressionLength; i += 1) {
    let nextElement = firstElement + positionCounter * progressionDiff;
    if (positionCounter === hiddenElementPosition) {
      nextElement = '..';
    }
    progression = `${progression} ${nextElement}`;
    positionCounter += 1;
  }
  return cons(progression, hiddenElementValue);
};
const getQuestion = () => {
  const progression = getProgression();
  return cons(car(progression), String(cdr(progression)));
};

export default () => runGame(description, getQuestion);
