import gameEngine from '../index.js';
import getRandomNumber from '../get-random-number.js';

const getResultOfExpression = (firstValue, operator, secondValue) => {
  switch (operator) {
    case '+':
      return firstValue + secondValue;
    case '-':
      return firstValue - secondValue;
    case '*':
      return firstValue * secondValue;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const operators = ['+', '-', '*'];

const gameDescription = 'What is the result of the expression?';

const generateRoundsData = () => {
  const firstNumber = getRandomNumber(1, 25);
  const secondNumber = getRandomNumber(1, 25);
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const resultOfExpression = getResultOfExpression(firstNumber, operator, secondNumber);
  const correctAnswer = resultOfExpression.toString();

  return [question, correctAnswer];
};

export default () => {
  gameEngine(gameDescription, generateRoundsData);
};
