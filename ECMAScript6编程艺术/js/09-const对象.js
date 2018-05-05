// const person = {};
// person.name = 'lisi';
// person.age = 30;
// console.log(person.name); // lisi
// console.log(person.age); // 30
// console.log(person); // object {name: 'lisi', age: 30}
// person = {}; // person is read-only, error!

const arr = [];
console.log(arr);
console.log(arr.length); // 0
console.log("-----");
arr.push("hello");
console.log(arr);
console.log(arr.length); // 1
console.log("-----");
arr.length = 0;
console.log(arr);
console.log(arr.length); // 0
console.log("-----");
// arr = ["hi"]; // arr is read-only, error!
