//-------------------------------if-else---------------------------------------
let a = 34;

if (a > 30) {
  console.log("pass");
} else {
  console.log("fail");
}

let marks = 55;
if (100 >= marks > 0) {
  if (marks > 74) {
    console.log("A");
  } else if (marks > 64) {
    console.log("B");
  } else if (marks > 54) {
    console.log("C");
  } else if (marks > 35) {
    console.log("S");
  } else if (marks > 0) {
    console.log("E");
  }
}

//------------------------------------------------Switch-Case-------------------------------------------
let day = 5;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Enter Correct date number");
}

//-----------------------------------------tunery Operator-------------------------------------------
let marks2 = 55;
100 >= marks2 && marks2 > 0
  ? marks2 > 74
    ? console.log("A")
    : marks2 > 64
    ? console.log("B")
    : marks2 > 54
    ? console.log("C")
    : marks2 > 34
    ? console.log("S")
    : console.log("E")
  : console.log("Enter Correct Number");
