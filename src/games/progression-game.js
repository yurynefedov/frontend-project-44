import gameEngine from '../index.js';
import getRandomNumber from '../get-random-number.js';
import getRandomValueFromArray from '../get-random-value-from-array.js';

export default () => {
  const gameDescription = 'What number is missing in the progression?';

  const generateContent = () => {
    const generateProgression = () => {
      const progression = [];
      const progressionLength = 10;
      // Шаг прогрессии должен быть не меньше единицы.
      // В противном случае, при получении случайного значения равного нулю,
      // Сформированный массив будет представлять собой коллекцию из десяти одинаковых элементов
      const progressionStep = getRandomNumber(10) + 1;
      const firstElement = getRandomNumber(10);

      for (let i = 0; i < progressionLength; i += 1) {
        progression.push(firstElement + progressionStep * i);
      }
      return progression;
    };

    const hideElementInProgression = (progression) => {
      const hiddenElement = getRandomValueFromArray(progression);
      const newProgression = [];
      for (let i = 0; i < progression.length; i += 1) {
        if (progression[i] === hiddenElement) {
          newProgression.push('..');
        } else newProgression.push(progression[i]);
      }
      const hiddenElementToString = hiddenElement.toString();
      const newProgressionToString = newProgression.join(' ');

      return [newProgressionToString, hiddenElementToString];
    };

    const generatedProgression = generateProgression();
    const progressionWithHiddenElement = hideElementInProgression(generatedProgression);
    const [question, correctAnswer] = progressionWithHiddenElement;

    return [question, correctAnswer];
  };

  gameEngine(gameDescription, generateContent);
};
