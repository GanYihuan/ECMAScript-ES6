'use strict';

// expend
let fruit = ['a', 'b'];
let food = ['c', ...fruit];

console.log(...fruit);
console.log(...food);


// reset
function breakfast(dessert, drink, ...food) {
  console.log(dessert, drink, food);
}

breakfast('a', 'b', 'c', 'd');
