// Constructor
const user = {
  firstName: 'John',
  lastName: 'Doe',
  person: {
    firstName: 'X',
    a: {
      b: 'C',
    },
    phoneNumber: '155',
  },
  age: 55,
  password: 'pass85144d',
  username: 'john.doe',
  email: 'john@doe.com',
  gender: 'male',
  isFullyConnected: false,
  hasAdminRole: true,
  phoneNumber: '123'
};

const userFristName = user.firstName;
console.log(`User's first name: ${userFristName}`);

const userLastName = user['lastName'];
console.log(`User's last name: ${userLastName}`);

// Destruction
const {
  firstName,
  lastName,
  hasAdminRole
} = user;

console.log(`First name: ${firstName}`);

const userAge = user.age;



const heading = {
  color: '#FFFFFF',
  backgroundColor: '#000000',
  paddingBottom: 10,
  paddingTop: 10,
  paddingLeft: 30,
  paddingRight: 30,
}

const car = {
  type: 'suv',
  model: 'toyota',
  color: 'black',
  year: 2021
}

let userService = {};

userService = {
  carWashing: true,
  daysPerWeek: 3,
}

