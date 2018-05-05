'use strict';

// 展开操作符-Spread
let fruit = ['a', 'b'];
let food = ['c', ...fruit];

console.log(...fruit); // a, b
console.log(...food); // c, a, b


// 剩余操作符-Rest
function breakfast(dessert, drink, ...food) {
  console.log(dessert, drink, food);
}

breakfast('a', 'b', 'c', 'd');
