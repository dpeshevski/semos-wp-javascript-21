// Regular function
function greetingsFunction(message) {
  console.log(message);
  return `On return->: ${message}`;
}

const greetings = greetingsFunction('Welcome.');
console.log(greetings);

greetingsFunction('Welcome to our website!');

// Arrow function ES6+ features
const greetingsArrowFunction = (message) => {
  console.log(message);
}

greetingsArrowFunction('I am arrow function!!!');

// Callback functions

function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

function mul(numberOne, numberTwo) {
  return numberOne * numberTwo;
}

function calculator(numberOne, numberTwo, operation) {
  if (operation === '+') {
    return add(numberOne, numberTwo);
  } else if (operation === '*') {
    return mul(numberOne, numberTwo);
  }
}

console.log('ADD with regular function', calculator(5, 6, '+'));
console.log('MUL with regular function', calculator(5, 9, '*'));

function calculatorWithCallback(numberOne, numberTwo, callback) {
  return callback(numberOne, numberTwo);
}

const sum = calculatorWithCallback(7, 2, add);
console.log('Sum with callback function', sum);

const multiply = calculatorWithCallback(3, 5, mul);
console.log('Multiply with callback function', multiply);








