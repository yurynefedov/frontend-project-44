import gameEngine from '../index.js';
import getRandomNumber from '../get-random-number.js';

const isEven = (number) => number % 2 === 0;

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRoundsData = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  gameEngine(gameDescription, generateRoundsData);
};
