const promise1 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 1000, 'one');
});

const promise2 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 2000, 'two');
});

const promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 500, 'three');
});

Promise.all([promise1, promise2, promise3])
  .then(([result1, result2, result3]) => {
    console.log('Result 1', result1);
    console.log('Result 2', result2);
    console.log('Result 3', result3);
  })
  .catch((err) => console.error(err));
  
const arrayOfStrings = ['a', 'b', 'c', 'd', 'e'];
const arrayOfNumbers = [1, 2, 3];
// [{}, {}, {}]

Promise.race([promise1, promise2, promise3]).then(function (value) {
  console.log('Value of Promise race', value);
}).catch(err =>
  console.error(err));

Promise.allSettled([promise1, promise2]).then(([value1, value2]) => {
  console.log('Settled 1', value1);
  console.log('Settled 2', value2);
}).catch(err => console.error(err));

function thenMethod (value) {
  console.log('Value', value);
}

const thenMethodArrow = (value) => {
  console.log('Value', value);
}

const delay = (ms, text) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms, text);
  })
}

delay(50, '5 milliseconds have passed ..........')
  .then((value) => {
    console.log(value);
  });

delay(1000, 'new promise 1')
  .then(value => console.log(value));

Promise.race([
  delay(6000, 'promise 6'),
  delay(6500, 'promise 7')
])
.then(value => console.log(value))
.catch(err => console.log(err));