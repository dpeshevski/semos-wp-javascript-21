class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get firstName() {
    return `${this._firstName}`;
  }

  get lastName() {
    return `${this._lastName}`;
  }

  set firstName(firstName) {
    this._firstName = firstName;
  }

  set lastName(lastName) {
    this._lastName = lastName;
  }

  sayHi() {
    return `Hi ${this.firstName} ${this.lastName} there!`;
  }
}

const person = new Person('John', 'Doe');
// console.log(person);
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.fullName);
// console.log(person.sayHi());

// person.firstName = 'James';
// person.lastName = 'Jeff';
// console.log(`Full name of a new person - ${person.fullName}`);
// console.log(person.sayHi());

const personObj = {
  firstName: 'Fristname',
  lastName: 'Lastname',
  sayHi: function () {
    return `Hi ${this.firstName} ${this.lastName} there`;
  },
  sayHello() {
    return 'Hello method called';
  }
}

// console.log(personObj.sayHi());
// console.log(personObj.sayHello());


// parent
class Animal {
  constructor(name) {
    this.name = name;
  }

  static type = 'Static type';

  static speak(name) {
    return `${name} says..`;
  }

  eat() {
    console.log(`${this.name} eats.`);
  }
}

const animal = new Animal('Jonny');
animal.type;
animal.name;
animal.speak;
animal.eat();

console.log(Animal.type);
// animal.speak(); // the Animal object

console.log(Animal.speak('Jan'));

// child
class Bird extends Animal {
  constructor(name, numWings) {
    super(name);
    this.numWings = numWings;
  }
}

const bird = new Bird('Bob', 2);
console.log(bird.name);
console.log(bird.numWings);
bird.eat();

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  mweo() {
    console.log('mweo mweo...');
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}


const cat = new Cat('Foo');
const dog = new Dog('Boo');

cat.eat();
cat.mweo();

dog.eat();

const calculator = {
  numberOne: 1,
  numberTwo: 5,
  sum(a, b) {
    return a + b;
  }
}

class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  static c = 7;

  static sum(a, b) {
    return a + b;
  }

  mul(a, b) {
    return a * b;
  }

  calcSum() {
    sum(this.a, this.b);
  }

  calcMul() {
    this.mul(this.a, this.b);
  }
}

const calc1 = new Calculator(5, 6);
const calc2 = new Calculator(9, 3);

console.log(calc1);

calc1.c = 2;
Calculator.c = 6;
console.log(Calculator.c);

const sum = Calculator.sum(4, 3);
console.log('SUM', sum);

console.log(calc2.mul(4, 5));

// calc1.calcSum();
// console.log('MUL', calc1.calcMul());


