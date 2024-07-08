/*
1.while
2.do while
3.for
*/
//debugger; you can use debugger key for see how the for loop works
const x = 10;

for (let i = 1; i <= x; i++) {
  console.log(i);
}

let i = 1;
i++;
console.log(i++); //post increment

let j = 1;
++j;
console.log(++j); //pre increment

//-------------------------------------------while loop-----------------------------------------------------------------------
let z = 1;
while (z < 5) {
  console.log(z);
  z++;
}
