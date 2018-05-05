// ES5
console.log("ES5:");
var a = 100;
var b = 200;
console.log("before:");
console.log("a= " + a);
console.log("b= " + b);
// before: a = 100 b = 200
var temp;
temp = a;
a = b;
b = temp;
console.log("after:");
console.log("a= " + a);
console.log("b= " + b);
// after: a = 200 b = 100


// ES6
console.log("ES6:");
var x = 100;
var y = 200;
console.log("before:");
console.log("x= " + x);
console.log("y= " + y);
// before: a = 100 b = 200
[x, y] = [y, x];
console.log("after:");
console.log("x= " + x);
console.log("y= " + y);
// after: a = 200 b = 100
