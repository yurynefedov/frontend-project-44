import gameEngine from '../src/index.js';
/* import getRandomNumber from '../src/get-random-number.js';
import getRandomValueFromArray from '../src/get-random-value-from-array.js'; */

export default () => {
  const gameDescription = 'What number is missing in the progression?';

  const contentGenerator = () => {
    const progression = [1, '..', 5, 7];
    const missingElement = 3;
    const correctAnswer = missingElement.toString();

    return [progression, correctAnswer];
  };

  gameEngine(gameDescription, contentGenerator);
};
