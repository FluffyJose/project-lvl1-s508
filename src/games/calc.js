import { cons } from 'hexlet-pairs';
import gameLauncher, { getRandomInt } from '../index';

const gameRules = 'What is the result of the expression?';
const getRandomOperator = () => {
  const operatorsToString = '+-*';
  const minNumberOfOperators = 0;
  const maxNumberOfOperators = operatorsToString.length;
  const operatorNumber = getRandomInt(minNumberOfOperators, maxNumberOfOperators);
  return operatorsToString[operatorNumber];
};
const question = () => {
  const randomOperator = getRandomOperator();
  const firstOperand = getRandomInt(0, 10);
  const secondOperand = getRandomInt(0, 10);

  const expression = (`${firstOperand} ${randomOperator} ${secondOperand}`);
  let resultOfExpression = 0;
  switch (randomOperator) {
    case '+': resultOfExpression = firstOperand + secondOperand;
      break;

    case '-': resultOfExpression = firstOperand - secondOperand;
      break;

    default: resultOfExpression = firstOperand * secondOperand;
  }
  const resultToString = String(resultOfExpression);
  return cons(expression, resultToString);
};

const brainCalc = () => gameLauncher(gameRules, question);

export default brainCalc;
