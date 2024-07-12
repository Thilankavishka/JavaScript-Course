/*const call = () => {
  console.log("Callback");
};

setTimeout(call, 100);
*/

const names = ["thila", "kasun", "pasan"];

const myforeach = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    cb(element);
  }
};
myforeach(names, (name) => {
  console.log(name);
});
