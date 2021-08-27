console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i <= 100 ;i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

// FIZZBUZZ is a very common coding interview problem. Below are the instructions to solving the problem:

// 1. Create a `for loop` that evaluates numbers from 1 to 100 like the problem above.
// 2. Write a `if/else` selection statement inside the body of the the loop that checks the following:
//    - If the number is divisible by 3, then `console.log` 'FIZZ'
//    - If the number is divisible by 5, then `console.log` 'BUZZ'
//    - If the number is divisible by both 3 and 5, then `console.log` 'FIZZBUZZ'

// Ex: 15 would print 'FIZZBUZZ', 33 would print 'FIZZ', and 35 would print 'BUZZ'

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i, 'FIZZBUZZ');
  }
  else if (i % 3 === 0) {
    console.log(i, 'FIZZ');
  }
  else if (i % 5 === 0) {
    console.log(i, 'BUZZ');
  }
  else {
    console.log(i);
  }
}