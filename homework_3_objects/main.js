// Duration between dates

const durationBetweenDates = (startDate = '1 Jan 1970', endDate = Date(), units = 'days') => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  switch (units) {
    case 'seconds':
      return (Math.abs(start - end) / 1000).toFixed() + ' ' + units;
    case 'minutes':
      return (Math.abs(start - end) / 1000 / 60).toFixed() + ' ' + units;
    case 'hours':
      return (Math.abs(start - end) / 1000 / 60 / 60).toFixed() + ' ' + units;
    case 'days':
      return (Math.abs(start - end) / 1000 / 60 / 60 / 24).toFixed() + ' ' + units;
    default:
      return 'Please, specify correct units. Available options: "seconds", "minutes", "hours", "days"';
  }
}

durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds'); // returns '86400 seconds'
durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days'); // returns '362 days'


// Optimize object data

const priceData = {
  Apples: '23.4',
  BANANAS: '48',
  oRAngGEs: '48.7584',
};

const optimizer = (data) => {
  const optimizedData = Object.entries(data)
    .map(([key, value]) => ([key.toLowerCase(), (+value).toFixed(2)]));

  return Object.fromEntries(optimizedData);
}

const updatedPriceData = optimizer(priceData);
console.log(updatedPriceData)    // {apples: '23.40', bananas: '48.00', oranges: '48.76'}


// Recursively find sum of odd positive numbers until a specified number

const recursiveOddSumTo = number => {
  if (!(number % 2)) {
    number = number - 1;
  }

  if (number <= 1) {
    return number;
  } else {
    return number + recursiveOddSumTo(number - 2);
  }
}

console.log(recursiveOddSumTo(1)) // 1
console.log(recursiveOddSumTo(10)) // 25


// Iteratively find sum of odd positive numbers until a specified number

function iterativeOddSumTo(number) {
  if (!(number % 2)) {
    number = number - 1;
  }

  let sum = 0;
  while (number > 0) {
    sum += number;
    number -= 2;
  }

  return sum;
}

console.log(iterativeOddSumTo(1)) // 1
console.log(iterativeOddSumTo(10)) // 25
