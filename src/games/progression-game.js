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

  // Скроем один из элементов массива с помощью обращения по случайно сгенерированному индексу
  const randomIndex = getRandomNumber(0, progression.length - 1);
  const hiddenElement = progression[randomIndex];
  progression[randomIndex] = '..';

  const question = progression.join(' ');
  const correctAnswer = hiddenElement.toString();

  return [question, correctAnswer];
};

export default () => {
  gameEngine(gameDescription, generateRoundsData);
};
