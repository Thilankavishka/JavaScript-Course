//................................................................................DAY2............................................................

//unary
let a = +2;
console.log(a);

//binary
let b = 2 + 3;
console.log(b);

/*
  +,-,/,*,%,**
*/

let c = 20;
let d = 3;

console.log(c + d);
console.log(c - d);
console.log(c * d);
console.log(c / d);
console.log(c % d);
console.log(c ** d);

let e = "Thilan ";
let f = "5";
console.log(typeof e + 12); //whole output will be concatanate to string when operation is +
console.log(+f + 5); //10

let g = 23;
g += 1;
console.log(g);

console.log(`Your name is ${e} and your age is ${g}`);

//var,let and const
var yname = "Thilan kavishka perera";
console.log(yname);
var yname = "Thilan kavishka perera"; //let is more advanced than var
console.log(yname);

let h, i, j;
h = i = j = 20;
console.log(h, i, j);

const k = 15;
console.log(k);

let l = "Thilan kavishka";
console.log(l[5]); //n
console.log(l.substring(7, 11)); //kavi
console.log(l.split("i")); //[ 'Th', 'lan kav', 'shka' ]
console.log(l.lastIndexOf("a")); //14
console.log(l.charAt("8")); //a
console.log(l.endsWith("ka")); //true
console.log(l.replace("kavishka", "perera")); //Thilan perera
console.log(l.length);

//Arrays
let arr1 = ["Thila", 5, [55, 22, 555], 6, 8];
console.log(arr1[2][1]); //22
for (i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

console.log(arr1.reverse()); //[ 8, 6, [ 55, 22, 555 ], 5, 'Thila' ]

let arr2 = "Thilan kavishka".split(" ");
console.log(arr2);

console.log(arr1.concat(arr2)); //[ 8, 6, [ 55, 22, 555 ], 5, 'Thila', 'Thilan', 'kavishka' ]

arr1[1] = 88;
console.log(arr1);
