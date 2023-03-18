/* eslint-disable no-unused-vars */
// 1. Return Negative https://www.codewars.com/kata/55685cd7ad70877c23000102

function makeNegative(number) {
  return number <= 0 ? number : -number;
}

// 2. Opposite number https://www.codewars.com/kata/56dec885c54a926dcd001095

function opposite(number) {
  return -Math.abs(number);
}

// 3. Even or Odd https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

function evenOrOdd(number) {
  return number % 2 ? 'Odd' : 'Even';
}

// 4. Convert a Number to a String https://www.codewars.com/kata/5265326f5fda8eb1160004c8

function numberToString(number) {
  return `${number}`;
}

// 5. Convert boolean values to strings 'Yes' or 'No' https://www.codewars.com/kata/53369039d7ab3ac506000467

function boolToWord(bool) {
  return bool ? 'Yes' : 'No';
}

// 6. Reversed Strings https://www.codewars.com/kata/5168bb5dfe9a00b126000018

function reverseString(string) {
  let reversedString = '';
  let index = string.length;
  while (index) {
    reversedString += string.at(index - 1);
    index -= 1;
  }
  return reversedString;
}
