// Функция-генератор возвращает случайное целое число
// В диапазоне переданных аргументов (включительно)
// Параметры по умолчанию установлены для получения чисел до 100
export default (min = 1, max = 99) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
};
