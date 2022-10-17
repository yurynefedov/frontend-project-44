import gameEngine from '../index.js';
import getRandomNumber from '../get-random-number.js';

const generateProgression = (progressionLength, firstElement, progressionStep) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstElement + progressionStep * i);
  }

  return progression;
};

const gameDescription = 'What number is missing in the progression?';

const generateRoundsData = () => {
  const progressionLength = 10;
  const firstElement = getRandomNumber(1, 10);
  // Шаг прогрессии должен быть не меньше единицы.
  // В противном случае, при получении случайного значения равного нулю,
  // Сформированный массив будет представлять собой коллекцию из десяти одинаковых элементов
  const progressionStep = getRandomNumber(2, 10);

  const progression = generateProgression(progressionLength, firstElement, progressionStep);

  // Первый по счету элемент скрываться не должен
  // Это необходимо для корректной работы алгоритма определения значения скрытого элемента,
  // Поскольку она осуществляется с использованием значения предыдущего элемента
  progression[getRandomNumber(1, progression.length - 1)] = '..';

  const indexOfHiddenElement = progression.indexOf('..');
  const valueOfHiddenElement = progression[indexOfHiddenElement - 1] + progressionStep;

  const question = progression.join(' ');
  const correctAnswer = valueOfHiddenElement.toString();

  return [question, correctAnswer];
};

export default () => {
  gameEngine(gameDescription, generateRoundsData);
};
