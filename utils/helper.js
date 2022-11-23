const generateRandomNumber = max => Math.floor(Math.random() * max);

const generateRandomFruitListData = list => {
  let currentFruitAsciiNumber = 65 + generateRandomNumber(26);
  let currentFruitGroupLetter = String.fromCharCode(currentFruitAsciiNumber);
  let fruitsList = list[currentFruitGroupLetter];

  return {
    currentFruitAsciiNumber,
    currentFruitGroupLetter,
    fruitsList,
  };
};

module.exports = {
  generateRandomNumber,
  generateRandomFruitListData,
};
