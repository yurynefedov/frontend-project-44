export default (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  const randomValueFromArray = array[randomIndex];
  return randomValueFromArray;
};
