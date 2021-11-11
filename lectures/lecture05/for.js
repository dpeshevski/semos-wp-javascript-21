const arguments = ['+', '-', '*', '/', '?', '.', '^', '-', '*', '-'];

// 6

// 0, 1, 2, 3, 4, 5

// i =  i++ === i+=1 === i + 1
// i = 2, i = 2 + 1, i = 3

for (let i = 0; i < arguments.length; i++) {
  // i = 0, arguments[0], '+'
  // i = 1, arguments[1], '-',
  // i = 2, argumnets[2], '*', ... 
  console.log(arguments[i]);
}


const filteredArgs = arguments.filter((argument) => argument === '-');
console.log(filteredArgs);

const findResult = arguments.find((argument) => argument === '-');
console.log(findResult);


const users = [
  {
    name: 'John Smith',
    age: 24
  }, {
    name: "Adele",
    age: 18
  },
  {
    name: 'James Hetfield',
    age: 54
  }
];

const filteredUsers = users.filter(user => user.age > 18);
console.log(filteredUsers);


// John X
// Tom E
// John Z
// Joe P
// John P
// Tom E

