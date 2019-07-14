import { cons } from 'hexlet-pairs';
import runGame from '..';
import getRandomInt from '../utils';

const description = 'What is the result of the expression?';
const operators = '+-*';
const minimumValue = 0;
const maximumValue = operators.length - 1;
const getQuestionAndAnswer = () => {
  const operatorPosition = getRandomInt(minimumValue, maximumValue);
  const operator = operators[operatorPosition];
  const firstOperand = getRandomInt(0, 10);
  const secondOperand = getRandomInt(0, 10);
  const question = `${firstOperand} ${operator} ${secondOperand}`;

  const answer = () => {
    switch (operator) {
      case '+': return firstOperand + secondOperand;
      case '-': return firstOperand - secondOperand;
      case '*': return firstOperand * secondOperand;
      default: return '';
    }
  };

  return cons(question, String(answer()));
};

export default () => runGame(description, getQuestionAndAnswer);
