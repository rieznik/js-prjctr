'use strict';

// Return sorted initials

const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];

const getSortedInitials = (userNames) => {

  const unsortedInitials = userNames.map(name =>
    name
      .split(' ')
      .map(splittedName => splittedName.charAt(0) + '.')
      .join(' ')
  );

  return unsortedInitials.sort();
}

const initials = getSortedInitials(userNames);

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]


// Reverse the number

const currentMaxValue = 4589;

const reverseNumber = number =>
  Number(
    currentMaxValue
      .toString()
      .split('')
      .reverse()
      .join('')
  )

const reverseMaxValue = reverseNumber(currentMaxValue);

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'

// Find product of numbers in an array with unknown depth

const resultsArray = [1, 2, [3, [4]]];

const getProductOfArray = array =>
  array
    .flat(Infinity)
    .reduce(multiply, 1)

const multiply = (accumulator, currentValue) => accumulator * currentValue

const productOfArray = getProductOfArray(resultsArray);

console.log(productOfArray); // 24
