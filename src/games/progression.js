import {
  answer, greeting, getRandomInt,
} from '../index';

greeting();
console.log('What number is missing in the progression?');
const userName = answer('May i have your name?');
console.log(`Hello, ${userName}!`);

const brainProgression = () => {
  let attemptCounter = 0;
  const succesAttempts = 3;
  while (attemptCounter < succesAttempts) {
    const firstElement = getRandomInt();
    const progressionDiff = getRandomInt();
    const elementsAmount = 10;
    const hiddenElementPosition = getRandomInt();
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
    console.log(`Question: ${getProgression()}`);
    const userAnswer = answer('Your answer');
    if (Number(userAnswer) === hiddenElementValue) {
      console.log('Correct!');
      attemptCounter += 1;
      if (attemptCounter === succesAttempts) {
        console.log(`Congratulations, ${userName}!`);
        return;
      }
    }
    if (Number(userAnswer) !== hiddenElementValue) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenElementValue}'.\n Let's try again, ${userName}`);
      return;
    }
  }
};

export default brainProgression;
