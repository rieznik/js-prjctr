//* add all arguments passed to a function

const addThemAll = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);

console.log(addThemAll(2, 4)); // 6
console.log(addThemAll(1, 2, 3, 4)); // 10
console.log(addThemAll(5, 5, 10)); // 20

//* multiply with closure

const multiply = (a) => (b) => a * b;

console.log(multiply(5)(5)); // 25
console.log(multiply(2)(-2)); // -4
console.log(multiply(4)(3)); // 12

//* movie sorting

const movies = [
  {
    movieName: 'The Thing',
    releaseYear: 1982,
    directedBy: 'Carpenter',
    runningTimeInMinutes: 109,
  },
  {
    movieName: 'Aliens',
    releaseYear: 1986,
    directedBy: 'Cameron',
    runningTimeInMinutes: 137,
  },
  {
    movieName: 'Men in Black',
    releaseYear: 1997,
    directedBy: 'Sonnenfeld',
    runningTimeInMinutes: 98,
  },
  {
    movieName: 'Predator',
    releaseYear: 1987,
    directedBy: 'McTiernan',
    runningTimeInMinutes: 107,
  },
];

const byProperty = (property, direction) => {
  const sortAscending = (movie1, movie2) => {
    if (movie1[property] < movie2[property]) {
      return -1;
    }
    if (movie1[property] > movie2[property]) {
      return 1;
    }
    return 0;
  };

  const sortDescending = (movie1, movie2) => {
    if (movie1[property] > movie2[property]) {
      return -1;
    }
    if (movie1[property] < movie2[property]) {
      return 1;
    }
    return 0;
  };

  if (direction === '<') {
    return sortDescending;
  }

  return sortAscending;
};

console.log(movies.sort(byProperty('releaseYear', '>'))); // виведе масив фільмів посортованих по року випуску, від старішого до новішого*
console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого*
console.log(movies.sort(byProperty('movieName', '>'))); // виведе масив фільмів посортованих по назві, в алфавітному порядку*
