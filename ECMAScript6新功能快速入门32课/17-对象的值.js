'use strict';

// 对比两个值是否相等-Object.is()
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(+0, -0)); // false


// 把对象的值复制到另一个对象里 - Object.assign()
let breakfast = {};
Object.assign(
    breakfast,
    {drink: 'a'}
);
console.log(breakfast);
