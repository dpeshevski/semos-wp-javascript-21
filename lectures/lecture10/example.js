function withCallback(callback, firstArgument, secondArgument) {
  return callback(firstArgument, secondArgument);
}

function fullName(fristName, lastName) {
  return `${fristName} ${lastName}`; 
}

function sum(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

const fullNameWithCallback = withCallback(fullName, 'Joe', 'Doe');
console.log(fullNameWithCallback);

const sumWithCallback = withCallback(sum, 6, 2);
console.log(sumWithCallback);

const fullNameWithAnonymous = withCallback(
  function (firstName, secondName) {
    return firstName + ' ' + secondName;
  },
  'Test',
  'Anonymous');

console.log(fullNameWithAnonymous);

function grade (points) {};

function gpa (grades) {};

const promiseToBuyPlayStation = (gpa, target) => {
  return new Promise((resolve, reject) => {
    if (gpa > target) {
      resolve('Congrats!');
    } else {
      reject('Unfortunately..');
    }
  })
}

promiseToBuyPlayStation(9.5, 9).then(data => console.log(data)).catch(err => console.log(err));