const makeGrade = grade => grade;

const grade = points => {
  let grade = null;

  if (points > 50 && points <= 60) {
    grade = makeGrade(6);
  } else if (points > 60 && points <= 70) {
    grade = makeGrade(7);
  } else if (points > 70 && points <= 80) {
    grade = makeGrade(8);
  } else if (points > 80 && points <= 90) {
    grade = makeGrade(9);
  } else if (points > 90 && points <= 100) {
    grade = makeGrade(10);
  }
  
  return grade;
}

const makeAvg = grades => {
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  return sum / grades.length;
}

const makeAvgGrade = (grades, makeAvg) => makeAvg(grades);

const math = grade(91);
const design = grade(84);
const programming = grade(95);
const softwareArchitecture = grade(92);
const oop = grade(92);

const student = {
  grades: [
    math,
    design,
    programming,
    softwareArchitecture,
    oop
  ],
  name: 'Student Name'
}

const avgGrade = makeAvgGrade(student.grades, makeAvg);

const promiseToBuyPlayStation = (avgGrade, target) => {
  return new Promise((resolve, reject) => {
    if (avgGrade > target) {
      resolve({ data: `Congrats ${student.name}! Your GPA is higher than ${target}, it is ${avgGrade} out of 10.` });
    } else {
      reject({ data: `Unfortunately! Your GPA is below ${target}, it is ${avgGrade} out of 10.`});
    }
  });
}

const onFulfilled = (data) => console.log(data);
const onRejected = (error) => console.error(error);
promiseToBuyPlayStation(avgGrade, 9).then(onFulfilled).catch(onRejected);

const asynchronousFunc = async (avgGrade, target) => {
  if (avgGrade > target) {
    return Promise.resolve({ data: 'PASSED!'})
    // return { data: 'PASSED!'}
  } else {
    return Promise.reject({ data: 'FAILED!'})
    // return { data: 'NOT PASSED.'}
  }
}

asynchronousFunc(avgGrade, 9).then(onFulfilled).catch(onRejected);