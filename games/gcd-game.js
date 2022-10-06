import gameEngine from '../src/index.js';
import getRandomNumber from '../src/get-random-number.js';

export default () => {
  const gameDescription = 'Find the greatest common divisor of given numbers';

  const contentGenerator = () => {
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();

    const expression = `${firstNumber} ${secondNumber}`;
    const getGreatestCommonDivisor = (firstNum, secondNum) => {
      if (firstNum === 0) {
        return secondNum;
      } return getGreatestCommonDivisor(secondNum % firstNum, firstNum);
    };

    const greatestCommonDivisor = getGreatestCommonDivisor(firstNumber, secondNumber);
    const correctAnswer = greatestCommonDivisor.toString();

    return [expression, correctAnswer];
  };

  gameEngine(gameDescription, contentGenerator);
};
