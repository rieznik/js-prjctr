// Duration between dates

const durationBetweenDates = (start = '1 Jan 1970', end = Date(), units = 'days') => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const conversionDividers = {
    seconds: 1000,
    minutes: 60000,
    hours: 3600000,
    days: 86400000
  }

  if (conversionDividers[units]) {
    return (Math.abs(startDate - endDate) / conversionDividers[units]).toFixed() + ' ' + units;
  } else {
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
  let n = number;

  if (n <= 1) {
    return n;
  } else if (n % 2) {
    return n + recursiveOddSumTo(n - 2);
  } else {
    return recursiveOddSumTo(n - 1);
  }
}

console.log(recursiveOddSumTo(1)) // 1
console.log(recursiveOddSumTo(10)) // 25


// Iteratively find sum of odd positive numbers until a specified number

function iterativeOddSumTo(number) {
  let n = number;

  if (!(n % 2)) {
    n--;
  }

  let sum = 0;
  while (n > 0) {
    sum += n;
    n -= 2;
  }

  return sum;
}

console.log(iterativeOddSumTo(1)) // 1
console.log(iterativeOddSumTo(10)) // 25
