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

//---------------------------------------------do while loop-------------------------------------------------------------------
console.log("do while loop");
let w = 1;
do {
  console.log(w);
  w++;
} while (w <= 10);

/*  Get student marks and provide pass of fail acording their marks
let stdMarks = [];

for (let i = 0; i < 5; i++) {
  stdMarks.push(prompt(`Enter Student ${i + 1} Marks`));
}

console.log(stdMarks);

for (let i = 0; i < 5; i++) {
  let mark1 = stdMarks[i];
  if (100 > mark1 && mark1 > 0) {
    if (mark1 > 40) {
      console.log(`Student ${i + 1} is Pass`);
    } else {
      console.log(`Student ${i + 1} is Fail`);
    }
  }
}
*/
console.log("While loop");
let a = 0;
while (a < 5) {
  console.log(a);

  a++;
}
