import gameBase from '../src/index.js';

export default () => {
  const isEven = (num) => num % 2 === 0;
  const getRandomNumber = () => Math.floor(Math.random() * 100);

  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  gameBase(gameDescription, question, correctAnswer);
};
