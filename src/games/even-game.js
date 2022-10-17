import gameEngine from '../index.js';
import getRandomNumber from '../get-random-number.js';

const isEven = (number) => number % 2 === 0;

export default () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

  const generateContent = () => {
    const question = getRandomNumber();
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return [question, correctAnswer];
  };

  gameEngine(gameDescription, generateContent);
};
