// es5
// var a = 1;
// var b = 2;
// var c = 3;
// console.log(a);
// console.log(b);
// console.log(c);

// es6
var [a, b, c] = [1, 2, 3];
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

let [foo, [[bar], base]] = [1, [[2], 3]];
console.log(foo); // 1
console.log(bar); // 2
console.log(base); // 3

let [, , third] = ["first", "second", "third"];
console.log(third); // third

let [head, ...tail] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(head); // 0
console.log(tail); // 1, 2, 3, 4, 5, 6, 7, 8, 9

var [temp] = [];
console.log(temp); // undefind

var [first, second] = [100];
console.log(first); // 100
console.log(second); // undefind
