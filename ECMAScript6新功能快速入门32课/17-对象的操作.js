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


// 设置对象的 prototype - Object.setPrototypeOf()
let braakfast = {
  getDrink() {
    return 'a'
  }
};
let dinner = {
  getDrink() {
    return 'b'
  }
};
let sunday = Object.create(breakfast);
console.log(sunday.getDrink()); // a
console.log(Object.getPrototypeOf(sunday) === breakfast); // true
Object.setPrototypeOf(sunday, dinner);
console.log(sunday.getDrink()); // b
console.log(Object.getPrototypeOf(sunday) === dinner); // true


// __proto__
let Friday = {
  __proto__: breakfast
};
console.log(Friday.getDrink()); // a
console.log(Object.getPrototypeOf(Friday) === breakfast); // true
Friday.__proto__ = dinner;
console.log(sunday.getDrink()); // b
console.log(Object.getPrototypeOf(sunday) === dinner); // true


// super
let Monday = {
  __proto__: breakfast,
  getDrink() {
    // run breakfast.getDrink()
    return super.getDrink() + 'c';
  }
};
console.log(Monday.getDrink()); // ac