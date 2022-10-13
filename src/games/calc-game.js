import gameEngine from '../index.js';
import getRandomNumber from '../get-random-number.js';

const getRandomValueFromArray = (array) => {
  const randomIndex = getRandomNumber(0, array.length - 1);
  const randomValueFromArray = array[randomIndex];
  return randomValueFromArray;
};

export default () => {
  const gameDescription = 'What is the result of the expression?';

  const generateContent = () => {
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
    const operators = ['+', '-', '*'];
    const operator = getRandomValueFromArray(operators);

    const question = `${firstNumber} ${operator} ${secondNumber}`;

    let resultOfExpression;
    if (operator === '+') {
      resultOfExpression = firstNumber + secondNumber;
    }
    if (operator === '-') {
      resultOfExpression = firstNumber - secondNumber;
    }
    if (operator === '*') {
      resultOfExpression = firstNumber * secondNumber;
    }

    const correctAnswer = resultOfExpression.toString();

    return [question, correctAnswer];
  };

  gameEngine(gameDescription, generateContent);
};
