import { cons } from 'hexlet-pairs';
import runGame from '..';
import getNumber from '../utils';

const description = 'What is the result of the expression?';
const operators = '+-*';
const minimumValue = 0;
const maximumValue = operators.length;
const getQuestion = () => {
  const operatorPosition = getNumber(minimumValue, maximumValue);
  const operator = operators[operatorPosition];
  const firstOperand = getNumber(0, 10);
  const secondOperand = getNumber(0, 10);

  const question = `${firstOperand} ${operator} ${secondOperand}`;
  let correctAnswer = 0;
  switch (operator) {
    case '+': correctAnswer = firstOperand + secondOperand;
      break;
    case '-': correctAnswer = firstOperand - secondOperand;
      break;
    case '*': correctAnswer = firstOperand * secondOperand;
      break;
    default:
  }
  return cons(question, String(correctAnswer));
};

export default () => runGame(description, getQuestion);
