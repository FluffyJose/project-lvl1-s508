import { cons } from 'hexlet-pairs';
import runGame from '../index';
import getRandomInt from '../utils';

const description = 'What is the result of the expression?';
const operators = '+-*';
const generateOperator = (minimumValie = 0, maximumValue = operators.length) => {
  const operatorNumber = getRandomInt(minimumValie, maximumValue);
  return operators[operatorNumber];
};
const getQuestion = () => {
  const operator = generateOperator();
  const firstOperand = getRandomInt(0, 10);
  const secondOperand = getRandomInt(0, 10);

  const question = `${firstOperand} ${operator} ${secondOperand}`;
  let correctAnswer = 0;
  switch (operator) {
    case '+': correctAnswer = firstOperand + secondOperand;
      break;
    case '-': correctAnswer = firstOperand - secondOperand;
      break;
    case '*': correctAnswer = firstOperand * secondOperand;
      break;
    default: console.log('Unknown operatot!');
  }
  return cons(question, String(correctAnswer));
};

export default () => runGame(description, getQuestion);
