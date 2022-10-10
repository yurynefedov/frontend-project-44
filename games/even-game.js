import gameEngine from '../src/index.js';
import getRandomNumber from '../src/get-random-number.js';
import isEven from '../src/is-even.js';

export default () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

  const generateContent = () => {
    const question = getRandomNumber();
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return [question, correctAnswer];
  };

  gameEngine(gameDescription, generateContent);
};
