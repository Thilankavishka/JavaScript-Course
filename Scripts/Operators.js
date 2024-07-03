//-----------------------------------------------------------------Comparison Operators-----------------------------------------------------
/* 
1. > 
2. <
3. >=
4. <=
5. ==
6. ===
7. !=
8. !==

*/

let a = 5,
  b = 6;
console.log(b > a); //true
console.log(b < a); //false
console.log(b >= a); //true
console.log(b <= a); //false
console.log(b == a); //false
console.log(b === a); //false checking values and types
console.log(b != a); //true
console.log(b !== a); //true checking values and types

console.log(Number(null)); //0
console.log(Number(undefined)); //NaN

//-----------------------------------------------------------------Logical Operators-----------------------------------------------------

/*
 1. AND -> &&
 2.  OR -> || 
 3. NOT -> !
*/
let c = 15,
  d = 20;

console.log(c > d && c < d); //false

console.log(c > d || c < d); //true
