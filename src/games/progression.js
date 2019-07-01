import { cons } from 'hexlet-pairs';
import gameLauncher, { getRandomInt } from '../index';

const gameRules = 'What number is missing in the progression?';
const question = () => {
  const firstElement = getRandomInt(1, 10);
  const progressionDiff = getRandomInt(1, 10);
  const elementsAmount = 10;
  const hiddenElementPosition = getRandomInt(1, 10);
  const hiddenElementValue = firstElement + hiddenElementPosition * progressionDiff;
  let positionCounter = 0;
  const getProgression = () => {
    let progression = '';
    while (positionCounter < elementsAmount) {
      let nextElement = firstElement + positionCounter * progressionDiff;
      if (positionCounter === hiddenElementPosition) {
        nextElement = '..';
      }
      progression = `${progression} ${nextElement}`;
      positionCounter += 1;
    }
    return progression;
  };
  const progression = getProgression();
  return cons(progression, String(hiddenElementValue));
};

const brainProgression = () => gameLauncher(gameRules, question);
export default brainProgression;
