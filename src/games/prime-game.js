import gameEngine from '../index.js';
import getRandomNumber from '../get-random-number.js';
import isEven from '../is-even.js';

export default () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const generateContent = () => {
    const isPrime = (num) => {
    // Исключаем числа до 1, а также все четные числа, кроме 2, которое является простым
    // Чтобы условие isEven(num) отработало корректно, первой должна выполняться проверка num === 2
    // Это позволит нам соркатить количество вычислений
    // И проверять остаток от деления только на нечетные числа
      if (num === 2) {
        return true;
      }
      if (num <= 1 || isEven(num)) {
        return false;
      }
      for (let i = 3; i < num; i += 2) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    };

    const question = getRandomNumber();
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    return [question, correctAnswer];
  };

  gameEngine(gameDescription, generateContent);
};
