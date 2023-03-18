/* eslint-disable no-console */
// Return sorted initials

const userNames = [
  'Петрик Ольга Іванівна',
  'Гнатюк Петро Антонович',
  'Рудко Андрій Опанасович',
];

const getInitials = (name) =>
  name
    .split(' ')
    .map((splittedName) => `${splittedName.charAt(0)}.`)
    .join(' ');

const getSortedInitials = (names) => {
  const unsortedInitials = names.map(getInitials);

  return unsortedInitials.sort();
};

const initials = getSortedInitials(userNames);

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]

// Reverse the number

const currentMaxValue = 4589;

const reverseNumber = (number) =>
  Number(number.toString().split('').reverse().join(''));

const reverseMaxValue = reverseNumber(currentMaxValue);

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'

// Find product of numbers in an array with unknown depth

const resultsArray = [1, 2, [3, [4]]];

const getProduct = (number1, number2) => number1 * number2;

const getProductOfArray = (array) => array.flat(Infinity).reduce(getProduct, 1);

const productOfArray = getProductOfArray(resultsArray);

console.log(productOfArray); // 24
