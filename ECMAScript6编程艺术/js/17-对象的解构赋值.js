// 不必在意顺序
var { name, age, id } = { id: "007", name: "Conan", age: "28" };
console.log(name); // Conan
console.log(age); // 28
console.log(id); // 007

// 不匹配
var { person_name, person_age } = { name: "Conan", age: "28" };
console.log(person_name); // undefind
console.log(person_age); // undefind

// 一一对应
var { name: person_name2, age: person_age2 } = { name: "Conan", age: "28" };
console.log(person_name2); // Conan
console.log(person_age2); // 28

// 一一对应
let object = { first: "hello", last: "world" };
let { first: firstName, last: lastName } = object;
console.log(firstName); // hello
console.log(lastName); // world
