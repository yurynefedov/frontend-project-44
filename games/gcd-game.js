import gameEngine from '../src/index.js';
import getRandomNumber from '../src/get-random-number.js';

export default () => {
  const gameDescription = 'Find the greatest common divisor of given numbers';

  const generateContent = () => {
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();

    const question = `${firstNumber} ${secondNumber}`;
    // Функция, выполняющая поиск наибольшего общего делителя
    // С использованием рекурсивного подхода
    const getGreatestCommonDivisor = (firstNum, secondNum) => {
      if (firstNum === 0) {
        return secondNum;
      } return getGreatestCommonDivisor(secondNum % firstNum, firstNum);
    };

    const greatestCommonDivisor = getGreatestCommonDivisor(firstNumber, secondNumber);
    const correctAnswer = greatestCommonDivisor.toString();

    return [question, correctAnswer];
  };

  gameEngine(gameDescription, generateContent);
};