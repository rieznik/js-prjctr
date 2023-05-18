function* generateRandomNumbers(max, quantity) {
  const getRandomNum = () => Math.floor(Math.random() * max);
  let i = 0;
  while (i < quantity) {
    yield getRandomNum();
    i++;
  }
  return getRandomNum();
}

const MAX = 1000;
const QUANTITY = 10;

const randomNumber = generateRandomNumbers(MAX, QUANTITY);

for (let i = 0; i < QUANTITY; i++) {
  console.log(randomNumber.next().value);
}
