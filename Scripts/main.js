//...................................................................................Day1.............................................................

console.log("External javascript");
/*alert("Alert");

let yname = prompt("Enter your name", "Name");
let confirming = confirm("Are You Student?");
console.log(yname);
console.log(confirming);*/

console.error("This is an error");
console.warn("This is an warn");

//...................................creating object.............................................
let a = {
  /*key*/ name: "Thilan" /*value*/,
  age: 23,
  city: "Colombo",
};
let b = {
  name: "Sahan",
  age: 23,
  city: "Gampaha",
};
let c = {
  name: "Kasun",
  age: 23,
  city: "Kaluthara",
};

console.log({ a, b, c });
console.table({ a, b, c });

let d = "Amila Upul Kumara"; //string
let e = 23; //Number
let f = true; //boolean
let g = 234n; //bigInt
let h;
let i = null;

console.log(typeof d); //string
console.log(typeof e); //number
console.log(typeof f); //boolean
console.log(typeof g); //bigint
console.log(typeof h); //undefined
console.log(typeof i); //object

e = String(e);
console.log(typeof e); //converts number to string

console.log(Number(d)); //NaN =>not a number then cannot convert to number
console.log(typeof Number(g)); //number=> bigint converts to number
console.log(Number(f)); //1=> boolean can converts to number
console.log(Number(h)); //NaN
console.log(Number(i)); //0

//parseInt
console.log(typeof parseInt(g)); //numebr

let j = 25.45;
console.log(Number(j)); //25.45
console.log(parseInt(j)); //25
console.log(parseFloat(j)); //25.45

let k = "245.5n";
console.log(Number(k)); //NaN
console.log(parseInt(k)); //245

//................................................................................DAY2............................................................
