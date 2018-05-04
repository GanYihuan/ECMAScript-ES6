'use strict';

// es5
function breakfast() {
  return ['a', 'b', 'c']
}

var tmp = breakfast();
var dessert = tmp[0];
var drink = tmp[1];
var fruit = tmp[2];

console.log(dessert, drink, fruit);

// es6: destructuring
let [dessert, drink, fruit] = breakfast();
console.log(dessert, drink, fruit);


//
function breakfast2() {
  return {A: 'a', B: 'b', C: 'c'}
}

let {A: a, B: b, C: c} = breakfast2();
console.log(A, B, C);