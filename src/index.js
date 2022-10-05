import readlineSync from 'readline-sync';

export default (gameDescription, question, correctAnswer) => {
  const tryCount = 3;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameDescription);

  for (let i = 1; i <= tryCount; i += 1) {
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
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
