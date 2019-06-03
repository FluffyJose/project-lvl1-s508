import {
  answer, greeting, getRandomOperator, getRandomInt,
} from '../index';

greeting();
console.log('What is the result of the expression?');
const userName = answer('May i have your name? ');
console.log(`Hello, ${userName}!`);

const brainCalc = () => {
  let attemptCounter = 0;
  const succesAttempts = 3;

  while (attemptCounter < succesAttempts) {
    getRandomOperator();

    const randomOperator = getRandomOperator();

    getRandomInt();

    const firstOperand = getRandomInt();
    const secondOperand = getRandomInt();

    console.log(`Question: ${firstOperand} ${randomOperator} ${secondOperand}`);
    let resultOfExpression = 0;
    switch (randomOperator) {
      case '+': resultOfExpression = firstOperand + secondOperand;
        break;

      case '-': resultOfExpression = firstOperand - secondOperand;
        break;

      default: resultOfExpression = firstOperand * secondOperand;
    }
    // console.log(result);
    const userAnswer = answer('Your answer: ');
    if (Number(userAnswer) === resultOfExpression) {
      console.log('Correct!');
      attemptCounter += 1;
      if (attemptCounter === succesAttempts) {
        console.log(`Congratulations, ${userName}!`);
        return;
      }
    }
    if (Number(userAnswer) !== resultOfExpression) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${resultOfExpression}'`);
      return;
    }
  }
};

brainCalc();