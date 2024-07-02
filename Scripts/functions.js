//-----------------------------------------Functions------------------------------------------------------------
/*we used function in
when we need to repeat same code
when we need to divide code*/

function displayname1(name, age = 28) {
  console.log("Hello I am Thilan " + name + " Age is:" + age);
}
function displayname2(name, age) {
  console.log(`Your name is ${name} and you are ${age}`);
  return age; //not compulsary
}
console.log(displayname1("Kavishka"));
console.log(displayname2("Kavishka", 24));

function displayname3(age) {
  let name = prompt("Enter your name");
  console.log(`Your name is ${name} and Your age is ${age}`);
}

//displayname3();

//-----------------------------------------function can create as variable--------------------------------------

let display = function () {
  console.log(`Function Type 2 `);
};

display();

//-----------------------------------------Arrow Function--------------------------------------
const functionname = (name) => {
  console.log(` Arrow Function`);
};
functionname();

const newFun = (name) => {
  console.log(name);
};
const newFun2 = (name) => console.log(name); //Whe we have one statement we can write function without curly braces
const newFun3 = (name) => `name is ${name}`; // When we have one return statement we can return any value like this
newFun("Thilan");
newFun2("Thilan Kavi");
newFun2("Thilan Kavishka");
