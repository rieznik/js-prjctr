const checkFizzBuzz = (n) => {
  if (!(n % 3)) return 'Fizz';
  if (!(n % 5)) return 'Buzz';
  if (!(n % 15)) return 'FizzBuzz';
  return n;
};

//! Iterator solution

const fizzBuzzIterator = () => {
  let index = 1;
  const iterationCount = 101;

  const iterator = {
    next: () => {
      const value = checkFizzBuzz(index);
      index++;

      return {
        value,
        done: index > iterationCount,
      };
    },
  };

  return iterator;
};

const iterator = fizzBuzzIterator();
let result = iterator.next();
while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}

//! Generator solution

function* fizzBuzzGenerator(start = 1, end = 100) {
  let i = start;
  while (i <= end) {
    yield checkFizzBuzz(i);
    i++;
  }
  return checkFizzBuzz(i);
}

const fizzBuzz = fizzBuzzGenerator();

// Print
for (const item of fizzBuzz) {
  console.log(item);
}
