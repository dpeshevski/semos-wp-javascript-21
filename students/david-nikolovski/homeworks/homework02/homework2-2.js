function grade(points) {
    let grade = null;
      switch (true){
      case (points < 59): 
      grade = 1;
      break;
     case (points >= 60 && points <= 69):
      grade = 2;
      break;
     case (points >= 70 && points <= 79):
      grade = 3;
      break;
     case (points >= 80 && points <= 89):
      grade = 4;
      break;
      case (points >= 90 && points <= 100): 
      grade = 5;
      break;
}
    return grade;
  }
  
  const math = grade(63);
  const prog = grade(95);
  const dizajn = grade(74);
  const php = grade(99);
  const prosek = (math + prog + dizajn + php)/4;
  
  console.log('Math: ', math);
  console.log('Prog: ', prog);
  console.log('Dizajn: ', dizajn);
  console.log('PhP: ', php);
  console.log('Prosek: ', prosek );
  