// 冻结: 只能读取不能改变值
const person = Object.freeze({
  name: "zs",
  age: "20"
});
// Can't assign value below
person.name = "liSi";
person.age = 30;
console.log(person.name); // zs
console.log(person.age); // 30
console.log(person); // obj
