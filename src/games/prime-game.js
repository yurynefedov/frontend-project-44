import gameEngine from '../index.js';
import getRandomNumber from '../get-random-number.js';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

export default () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const generateRoundsData = () => {
    const question = getRandomNumber();
    const correctAnswer = isPrime(question) ? 'yes' : 'no';

    return [question, correctAnswer];
  };

  gameEngine(gameDescription, generateRoundsData);
};
