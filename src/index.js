import readlineSync from 'readline-sync';

// greeting at the beginning of the game
export const greeting = () => console.log('Welcome to the Brain Games!');

// asks a question and returns the user's response
export const answer = question => readlineSync.question(`${question}: `);

// returns a random operator (+, - or *)
export const getRandomOperator = () => {
  const operatorsToString = '+-*';
  const minNumberOfOperators = 0;
  const maxNumberOfOperators = operatorsToString.length;
  const getOperatorNumber = (min, max) => (Math.floor(Math.random() * (max - min)) + min);
  const operatorNumber = getOperatorNumber(minNumberOfOperators, maxNumberOfOperators);
  return operatorsToString[operatorNumber];
};

// returns a random integer number in the range from 0 to 10
export const getRandomInt = () => {
  const lowerValue = 0;
  const upperValue = 11;
  return (Math.floor(Math.random() * (upperValue - lowerValue)) + lowerValue);
};
