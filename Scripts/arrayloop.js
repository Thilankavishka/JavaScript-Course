let a = [12, "thilan", 3.5, true, "kavishka", "colombo"];

/*for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}
*/

//..............................................for each loop................................................

/*a.forEach((element, i) => {
  console.log(element, i);
});
//we cannot get return value with for each loop

//when we using map we can use return
console.log(
  a.map((element, i) => {
    return [element, i];
  })
);
*/
//..........................................................................................
//another way using for loop in array
for (index in a) {
  console.log(a[index], index);
}
//..........................................................................................

let obj = {
  name: "thila",
  age: 23,
  city: "colombo",
};

for (key in obj) {
  //when we use object we can get object
  console.log(obj[key]);
}
