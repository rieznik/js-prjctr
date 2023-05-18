const arr = [...Array(100).keys()].map((i) => i + 1);
const arrIter = arr[Symbol.iterator]();

const fizzBuzzIterator = (collection) => {
  for (let item of collection) {
    if (!(item % 3)) {
      console.log('Fizz');
      continue;
    }
    if (!(item % 5)) {
      console.log('Buzz');
      continue;
    }
    if (!(item % 15)) {
      console.log('FizzBuzz');
      continue;
    }
    console.log(item);
  }
};

fizzBuzzIterator(arrIter);
