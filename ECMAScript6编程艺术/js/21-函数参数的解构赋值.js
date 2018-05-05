function sum([x, y]) {
  return x + y;
}
console.log(sum([1, 2])); // 3


function fun({ x = 0, y = 0 } = {}) {
  return [x + y];
}
console.log(fun({ x: 100, y: 200 })); // [300]
console.log(fun({ x: 100 })); // [100, 0]
console.log(fun({})); // [0, 0]
console.log(fun()); // [0, 0]


function fuck({ x, y } = { x: 0, y: 0 }) {
  return [x, y];
}
console.log(fuck({ x: 100, y: 200 })); // [100, 200]
// 没有给参数赋值 undefined
console.log(fuck({ x: 100 })); // [100, undefined]
// 没有给参数赋值 undefined
console.log(fuck({})); // [undefined, undefined]
// 没有传参数
console.log(fuck()); // [0, 0]
