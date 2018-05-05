'use strict';

let desserts = new Set('abc');
desserts.add('d');
desserts.add('d');

console.log(desserts); // abcd
console.log(desserts.size); // 4
console.log(desserts.has('c')); // true
desserts.delete('d');
console.log(desserts); // abc
desserts.forEach(dessert => {
  console.log(dessert); // abc
});
desserts.clear();
console.log(desserts); // ''
