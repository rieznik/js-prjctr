// //* Question 1

// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
// });

// promise1.then((res) => {
//   console.log(3);
//   console.log(res);
// });

// console.log('end');

// /* ❌
// start
// 1
// end
// 2
// */

//* Question 2

// const test = Promise.resolve(1)
//   .then((x) => {
//     console.log(test);
//     return x + 1;
//   })
//   .then((x) => {
//     console.log(test);
//     throw new Error('My Error');
//   });
// .catch(() => 1)
// .then((x) => x + 1)
// .then((x) => console.log(x))
// .catch(console.error);

// console.log(test);
/* ✅
2
*/

//* Question 3

const promise = new Promise((res) => res(2));
promise
  .then((v) => {
    console.log(v);
    return v * 2;
  })
  .then((v) => {
    console.log(v);
    return v * 2;
  })
  .finally((v) => {
    console.log(v);
    return v * 2;
  })
  .then((v) => {
    console.log(v);
  });

/* ❌
2
4
undefined
8
*/
