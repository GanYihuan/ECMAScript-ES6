'use strict';

// Map
let food = new Map();
let fruit = {}, cook = function () {}, dessert = 'a';

food.set(fruit, 'b');
food.set(cook, 'c');
food.set(dessert, 'd');

console.log(food); // Map{Object {}=>'b', function => 'c', 'a' => 'd'
console.log(food.size); // 3
console.log(food.get(fruit)); // 'b'
console.log(food.get(cook)); // 'c'
food.delete(dessert);
console.log(food.has(dessert)); // false


food.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});

food.clear();
console.log(food); // ''