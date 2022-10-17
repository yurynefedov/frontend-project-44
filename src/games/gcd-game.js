import gameEngine from '../index.js';
import getRandomNumber from '../get-random-number.js';

// Функция, выполняющая поиск наибольшего общего делителя
// С использованием рекурсивного подхода
const getGreatestCommonDivisor = (firstNum, secondNum) => {
  if (firstNum === 0) {
    return secondNum;
  }

  return getGreatestCommonDivisor(secondNum % firstNum, firstNum);
};

export default () => {
  const gameDescription = 'Find the greatest common divisor of given numbers';

  const generateRoundsData = () => {
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();

    const question = `${firstNumber} ${secondNumber}`;
    const greatestCommonDivisor = getGreatestCommonDivisor(firstNumber, secondNumber);
    const correctAnswer = greatestCommonDivisor.toString();

    return [question, correctAnswer];
  };

  gameEngine(gameDescription, generateRoundsData);
};
