import gameEngine from '../index.js';
import getRandomNumber from '../get-random-number.js';

const getResultOfExpression = (firstValue, operator, secondValue) => {
  let result;
  switch (operator) {
    case '+':
      result = firstValue + secondValue;
      break;
    case '-':
      result = firstValue - secondValue;
      break;
    case '*':
      result = firstValue * secondValue;
      break;
    default:
      result = null;
  }
  return result;
};

export default () => {
  const gameDescription = 'What is the result of the expression?';

  const generateContent = () => {
    const firstNumber = getRandomNumber(1, 25);
    const secondNumber = getRandomNumber(1, 25);
    const operators = ['+', '-', '*'];
    const operator = operators[getRandomNumber(0, operators.length - 1)];

    const question = `${firstNumber} ${operator} ${secondNumber}`;

    const resultOfExpression = getResultOfExpression(firstNumber, operator, secondNumber);
    const correctAnswer = resultOfExpression.toString();

    return [question, correctAnswer];
  };

  gameEngine(gameDescription, generateContent);
};
