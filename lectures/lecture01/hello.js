// String
const message = 'Welcome! Hello World.';

console.log('Message is', message);

// User registration
const firstName = 'John';
const lastName = 'Doe';
const email = 'doe@example.com';
const password = 'pass1234*';
const username = 'john.doe';


const city = 'New York';
const state = 'NY';
const country = 'USA';
const zip = 1000454;
const street = 'Mountain View';
const number = '33A/55';


const address = `
  Street: ${street}, Building Number ${number}, 
  Zip Code: ${zip},
  City: ${city}, State: ${state}, Country: ${country}`;

console.log('Address', address);

// Number
const age = 55;

console.log('Age', age);

console.log('TYPE -- age', typeof age); // number
console.log('TYPE -- firstName', typeof firstName); // string

console.log('First Name:', firstName);
console.log('Last Name:', lastName);


console.log('Full Name', firstName, lastName); // John Doe // John, Doe
console.log('Full Name', firstName + lastName); // JohnDoe -> John Doe
console.log('Full Name', firstName + ' ' + lastName + ' ksksks ' + lastName + ' 892 ' + username); // John Doe

console.log(`Full Name: ${firstName} ${lastName}; Email Address: ${email}`); // John Doe

const fullName = `${firstName} ${lastName}`; // John Doe
console.log('Full name -----', fullName);

const text = 'Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. ${firstName} Lorem ipsum dolor sit amet hdhdhdhdhdhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh';

const textLonger = `Lorem ipsum dolor sit am lorem.
 Lorem ipsum dolor
 sit am
 ${firstName}
  lore lorem. Lorem ipsum
  
  ${age}
  
  
  dolor sit am lore lore lorem. Lore
lorem ipsum d ${lastName}

olor lorem. Lorem ipsum dolor lorem. Lorem`;


let name = 'Tom';
console.log('Default name', name); // Tom

name = 'James';
console.log('Name', name); // James

name = 77;
console.log('Name - number', name); // 77

// Boolean: true/false
let isTruthy = false;

let hasValue = true;


let isValid = true;
console.log('Default value of boolean property - isValid', isValid); // true

isValid = false;
console.log('Changed value of boolean property - isValid', isValid); // false

isValid = true;
console.log('Changed value of boolean property - isValid', isValid); // true
