//--------------------------------------Local Variables and Global Variables-----------------------------------------------------------
let age = 23; //global variables
let newfun = (name) => {
  age = 20; //local variables
  return `Your age is ${name} and you are ${age}`;
};

console.log(age);
console.log(newfun("thila"));
