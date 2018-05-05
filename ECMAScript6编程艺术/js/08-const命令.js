// const声明后不能去修改
const Pi = 3.1415;
console.log(Pi);
// Pi = 3; // can 't change
console.log(Pi);


if (true) {
  console.log(Pii); // undefined
  // const Temporary Dead Zone
  const Pii = 3.14;
}
// 块级作用域
console.log(Pii); // can't get


{
  var a = 100;
  const a = 200; // can't duplicate
  console.log(a);
}
