import gameEngine from '../src/index.js';
import getRandomNumber from '../src/get-random-number.js';
import isEven from '../src/is-even.js';

export default () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

  const contentGenerator = () => {
    const number = getRandomNumber();
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    return [number, correctAnswer];
  };

  gameEngine(gameDescription, contentGenerator);
};
