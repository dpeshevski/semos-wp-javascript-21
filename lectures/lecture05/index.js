if (5 > 3) {
  console.log('5 e pogolemo od 3');
} else {
  console.log('5 e pomalo od 3');
}

// && AND
// || OR 

// true && true => true
// true && false => false
// false && true => false
// false && false => false

// true || true => true
// true || false => true
// false || true => true
// false || false => false

// if ((5 > 3) && (4 == 4) && (2 < 3) && (5 > 7)) { // true && true && true && false => false

// } else if ((5 > 3) || (5 > 7)) { // true || false => true

// }


// return ocena

// matematika => 10/E
// programiranje => 9/D
// dizajn => 9/D

// prosek
// a + b + c / n
// 7 + 10 + 10 / 3 = 27 / 3 => 9


// poeni: 77 => C (8)
// poeni: 49 => nepolozil
// poeni: 95 => E (10)

// nepolozil(5) => < 50 
// A(6) => 51-60, 
// B(7) => 61-70
// C(8) => 71-80
// D(9) => 81-90
// E(10) => 91-100

function grade(value) {
  let grade = null;

  if (value > 90 && value <= 100) { // 91, 92, ... , 100
    grade = 10;
  } else if (value >= 81 && value <= 90) { // 81, 82, ... , 90
    grade = 9;
  } else if (value >= 71 && value <= 80) { // 71, 82, ... , 80}
    grade = 8;
  } else if (value >= 61 && value <= 70) {
    grade = 7;
  } else if (value >= 51 && value <= 60) {
    grade = 6; 
  } else {
    grade = 5;
  }

  // switch case

  return grade;
}

const math = grade(91);
const progamming = grade(80);
const design = grade(90);
const php = grade(89);

console.log('Math:', math);
console.log('Progamming:', progamming);
console.log('Design:', design);
console.log('PHP:', php);

const avgGrade = (math + progamming + design + php) / 4;
console.log('Average grade:', avgGrade);

// if (username === true && password === true) {
//   console.log('Prodolzi so najavuvanje');
// } else if (username === false) {
//   console.log('Korisnickoto ime e nevalidno.');
// } else if (password === false) {
//   console.log('Lozinka e nevalidna');
// } else {
//   console.log('Nevalidna lozinka i korisnicko ime.');
// }

// if (username === false || password === false) {
//   console.log('Nevalidna lozinka ILI korisnicko ime.');
// }
