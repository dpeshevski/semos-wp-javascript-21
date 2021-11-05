const listOfNumbers = [1, 2, 3, 4, 5, 6];
console.log(listOfNumbers);

const users = [
  {
    name: 'John',
    age: 21,
    isAdult: false,
  }, {
    name: 'James',
    age: 28,
    isAdult: true,
  }, {
    name: 'Eric',
    age: 44,
    isAdult: true,
  }
];
console.log(users);


const firstItemOfUsers = users[0];
console.log(firstItemOfUsers);

// users.

const lastItemOfUsers = users[users.length - 1];
console.log(lastItemOfUsers);

// push
users.push({
  name: 'New user',
  age: 16,
  isAdult: false,
});
console.log(users);

console.log(users[users.length - 1]);

const newUser = {
  name: 'Second new user',
  age: 88,
  isAdult: true,
}

users.push(newUser, newUser, newUser, firstItemOfUsers, lastItemOfUsers, 5, ['A', 'B', 'C', 'D']);
console.log(users);

// // pop 
// users.pop();
// console.log(users);