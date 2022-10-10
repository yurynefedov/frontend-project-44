import gameEngine from '../src/index.js';
import getRandomNumber from '../src/get-random-number.js';
import getRandomValueFromArray from '../src/get-random-value-from-array.js';

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
