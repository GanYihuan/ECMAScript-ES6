'use strict';

// 13.函数的名字-name属性
function breakfast() {}
console.log(breakfast.name); // breakfast


let breakfast2 = function (args) {};
console.log(breakfast2.name); // breakfast2


let breakfast3 = function superBreakfast(args) {};
console.log(breakfast3.name); // superBreakfast