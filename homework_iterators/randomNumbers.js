function* generateRandomNumbers(max, quantity) {
  const getRandomNum = () => Math.floor(Math.random() * max);
  let i = 0;
  while (i < quantity) {
    yield getRandomNum();
    i++;
  }
  return getRandomNum();
}

const randomNumbers = generateRandomNumbers(100, 10);

for (const number of randomNumbers) {
  console.log(number);
}
