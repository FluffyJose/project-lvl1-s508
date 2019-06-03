import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even, otherwise answer "no".');

const userName = readlineSync.question('May i have your name? ');
console.log(`Hello, ${userName}!`);

const getRandomInt = () => (Math.floor(Math.random() * (100 + 100)) - 100);

const brainEven = () => {
  let successAttemptCounter = 1;
  while (successAttemptCounter <= 3) {
    const randomInt = getRandomInt();
    const isEven = randomInt % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${randomInt}`);
    const answer = readlineSync.question('Your answer: ');
    if (isEven === answer) {
      console.log('Correct!');
      successAttemptCounter += 1;
      if (successAttemptCounter === 4) {
        console.log(`Congratulations, ${userName}!`);
        return;
      }
    }
    if (isEven !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven}'. Let's try again, ${userName}!`);
      return;
    }
  }
};

export default brainEven;
