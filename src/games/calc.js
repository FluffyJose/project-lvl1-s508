import { cons } from 'hexlet-pairs';
import runGame from '..';
import getRandomInt from '../utils';

const description = 'What is the result of the expression?';
const operators = '+-*';
const getAnswer = (first, second, operation) => {
  switch (operation) {
    case '+': return first + second;
    case '-': return first - second;
    case '*': return first * second;
    default: return null;
  }
};
const getQuestionAndAnswer = () => {
  const operatorPosition = getRandomInt(0, operators.length - 1);
  const operator = operators[operatorPosition];
  const firstOperand = getRandomInt(0, 10);
  const secondOperand = getRandomInt(0, 10);
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const answer = getAnswer(firstOperand, secondOperand, operator);
  return cons(question, String(answer));
};

export default () => runGame(description, getQuestionAndAnswer);
