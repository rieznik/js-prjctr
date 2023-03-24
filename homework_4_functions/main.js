//* 1. add all arguments passed to a function

const addThemAll = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);

console.log(addThemAll(2, 4)); // 6
console.log(addThemAll(1, 2, 3, 4)); // 10
console.log(addThemAll(5, 5, 10)); // 20

//* 2. multiply with closure

const multiply = (a) => (b) => a * b;

console.log(multiply(5)(5)); // 25
console.log(multiply(2)(-2)); // -4
console.log(multiply(4)(3)); // 12

//* 3. movie sorting

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
  const swap = 1;
  const skip = -1;
  const equal = 0;

  const sortAscending = (movie1, movie2) => {
    if (movie1[property] < movie2[property]) {
      return skip;
    }
    if (movie1[property] > movie2[property]) {
      return swap;
    }
    return equal;
  };

  const sortDescending = (movie1, movie2) => -sortAscending(movie1, movie2);

  return direction === '>' ? sortAscending : sortDescending;
};

console.log([...movies].sort(byProperty('releaseYear', '>'))); // виведе масив фільмів посортованих по року випуску, від старішого до новішого*
console.log([...movies].sort(byProperty('runningTimeInMinutes', '<'))); // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого*
console.log([...movies].sort(byProperty('movieName', '>'))); // виведе масив фільмів посортованих по назві, в алфавітному порядку*

//* 4.1 detonatorTimer via setInterval()

const detonatorTimer1 = (delay) => {
  let counter = delay;

  const count = () => {
    console.log(counter || 'BOOM!');
    counter -= 1;
    if (counter < 0) clearInterval(intervalId);
  };

  const intervalId = setInterval(count, 1000);
};

detonatorTimer1(3);
// 3
// 2
// 1
// BOOM!*

//* 4.2 detonatorTimer via setTimeout()

const detonatorTimer2 = (delay) => {
  if (delay < 0) return;

  setTimeout(() => {
    console.log(delay || 'BOOM!');
    detonatorTimer2(delay - 1);
  }, 1000);
};

detonatorTimer2(3);
// 3
// 2
// 1
// BOOM!*

//* 5. Me object and its methods

const me = {
  name: 'Katia',
  residency: 'Sumy',
  gender: 'female',
  age: 32,
  hobby: 'taking care of plants',
  defaultMood: 'dreamy',
  currentMood: 'focused',
  introduce() {
    console.log(`My name is ${this.name} and I live in ${this.residency}`);
  },
  getHobby() {
    console.log(`I like ${this.hobby}`);
  },
  describeMyMood() {
    console.log(
      `Mostly I'm ${this.defaultMood}, but now I'm ${this.currentMood}`
    );
  },
};

me.introduce();
me.getHobby();
me.describeMyMood();

//* 6. secure object methods
const securedSelfIntroduce = me.introduce.bind(me);
const securedSelfGetHobby = me.getHobby.bind(me);
const securedSelfDescribeMyMood = me.describeMyMood.bind(me);

setTimeout(securedSelfIntroduce, 1000);
setTimeout(securedSelfGetHobby, 2000);
setTimeout(securedSelfDescribeMyMood, 3000);

// *7. Decorator function that slows down execution of a callback function
const someFunction = (something) => console.log(`This is ${something}`);

function slower(func, seconds) {
  const chillOut = (arg) => {
    console.log(`Chill out, you will get you result in ${seconds} seconds`);
    setTimeout(() => func.call(this, arg), seconds * 1000);
  };

  return chillOut;
}

const slowedSomeFunction = slower(someFunction, 5);

slowedSomeFunction('success');
