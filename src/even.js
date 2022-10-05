import readlineSync from 'readline-sync';

export default () => {
  const isEven = (num) => num % 2 === 0;

  const tryCount = 3;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= tryCount; i += 1) {
    const number = Math.floor(Math.random() * 100);
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');

    if (i === tryCount) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
  }
};
