const checkFizzBuzz = (n) => {
  if (!(n % 3)) return 'Fizz';
  if (!(n % 5)) return 'Buzz';
  if (!(n % 15)) return 'FizzBuzz';
  return n;
};

//! Iterator solution

const arr = [...Array(100).keys()].map((i) => i + 1);
const arrIter = arr[Symbol.iterator]();

// Print
for (const item of arrIter) {
  console.log(checkFizzBuzz(item));
}

//! Generator solution

function* fizzBuzzGenerator(start = 1, end = 100) {
  let i = start;
  while (i < end) {
    yield checkFizzBuzz(i);
    i++;
  }
  return checkFizzBuzz(i);
}

const fizzBuzz = fizzBuzzGenerator();

// Print
for (let i = 0; i < 100; i++) {
  console.log(fizzBuzz.next().value);
}
