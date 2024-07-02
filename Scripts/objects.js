//Objects
//-------------------------------------Create objects-------------------------------------------------------
let a = {
  /*Key:Keyvalud*/
  name: "Thilan",
  age: "24",
  canWalk: true,
  languages: ["java", "javascript"],
  city: {
    address1: "colombo",
    address2: "kandy",
  },
};

//key cannot be dupplicated

//-------------------------------------access object items-------------------------------------------------------
console.log(a.languages[0]); //java
console.log(a.city.address2); //kandy

console.log(a["name"]); //Thilan
console.log(a["languages"][1]); //javascript
console.log(a["city"]["address1"]); //colombo

//-------------------------------------insert new elements to object-------------------------------------------------------
a.status = "Undergraduate";
a.favfoods = ["cake", "biriyani"];

console.log(a);

//-------------------------------------update object-------------------------------------------------------
a.favfoods = ["pizza", "cake"];
console.log(a);
