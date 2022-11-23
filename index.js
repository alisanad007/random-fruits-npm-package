const {fruits} = require('./assets/fruits-data');

const {
  generateRandomFruitListData,
  generateRandomNumber,
} = require('./utils/helper');

const randomFruit = () => {
  let {fruitsList} = generateRandomFruitListData(fruits);
  return fruitsList[generateRandomNumber(fruitsList.length)];
};

const randomFruits = (N = 5) => {
  let {currentFruitAsciiNumber, currentFruitGroupLetter, fruitsList} =
    generateRandomFruitListData(fruits);

  while (fruitsList.length < N) {
    if (currentFruitAsciiNumber < 90) {
      currentFruitAsciiNumber++;
      currentFruitGroupLetter = String.fromCharCode(currentFruitAsciiNumber);
      fruitsList = [...fruitsList, ...fruits[currentFruitGroupLetter]];
    } else {
      currentFruitAsciiNumber = 65;
      currentFruitGroupLetter = String.fromCharCode(currentFruitAsciiNumber);
      fruitsList = [...fruitsList, ...fruits[currentFruitGroupLetter]];
    }
  }

  return fruitsList.slice(0, N);
};

module.exports = {
  randomFruit,
  randomFruits,
};
