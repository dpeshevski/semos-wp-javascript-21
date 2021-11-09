function sayHi() {
  const message = 'Hello';
  const person = 'John';
  const text = 'Welcome to our website!';

  return `${message} ${person}! ${text} Have a nice day!`; // Hello John! Welcome to our website!
}

console.log(sayHi());

// x + y 
// 3 + 5 = 8
function sum(x, y) {
  console.log('X from a calculator function', x);
  const result = x + y; // 3 + 5
  return result; // 8

  // return x + y; // 3 + 5
}

// console.log(sum(3, 5)); // 8
// console.log(sum(5, 8)); // 13
// console.log(sum(6, 18)); // 24

// x - y
// 3 - 1 = 2

// x * y 
// 2 * 3 = 6 
function mul(x, y) {
  console.log('X =', x);
  return x * y;
}
// 0.5 = .5
// 1.5 = 1.5
console.log(mul(4, 5));
console.log(mul(.5, 12))

// x / y
// 6 / 3 = 2

// 3 == 3 => true
// 3 == '3' => true 
// 3 === 3 => true
// 3 === '3' => false

// x, y, operation
function calculator(operation, x, y) {
  if (operation === '+') {
    // return x + y;
    return sum(x, y);
  }
}

console.log('Calc sum', calculator('+', 15, 17));
console.log('Calc div', calculator('', 55, 11));
console.log('Cal sqrt', calculator('sqrt', 66, 2)); // Wrong operation, please try again with +, -, x or / 

// if - else statements
let isAdult = false;
const age = 39;

// if (condition) { 
  // if body statement
// } else {
  // else body statement
// }

if (age >= 18) {
  isAdult = true;
} else {
  isAdult = false;
}

console.log('Is adult? - ', isAdult);

let color = 'green';
let state = '';

if (color === 'red') {
  state = 'stop';
} else if (color === 'yello') {
  state = 'active';
} else if (color === 'green') {
  state = 'drive';
} else {
  state = 'wrong! police!';
}
