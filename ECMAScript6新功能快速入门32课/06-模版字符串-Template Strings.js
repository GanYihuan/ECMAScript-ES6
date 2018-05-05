'use strict';

let dessert = 'a', drink = 'b';
// es5
let breakfast = 'Today breakfast it is ' + dessert + ' and ' + drink + ' !';
console.log(breakfast);


// 6.模版字符串-Template Strings
// es6
let breakfast2 = `Today breakfast it is ${dessert} and ${drink} !`;
// 8.判断字符串里是否包含其他字符串
console.log(breakfast2.startsWith('T')); // true
console.log(breakfast2.endsWith('!')); // true
console.log(breakfast2.includes('i')); // ture


// 7.带标签的模版字符串-Tagged Templates
// carry Tags template strings
let breakfast3 = kitchen`Today breakfast it is ${dessert} and ${drink} !`;

function kitchen(strings, ...values) {
  console.log(strings);
  console.log(values);
  let result = '';
  for (let i = 0; i < values.length; i++) {
    result += strings[i];
    result += values[i];
  }
  result += strings[strings.length - 1];
  return result;
}

console.log(breakfast3);


// 9.默认参数 - Default Parameter Values
function breakfast4(dessert = 'A', drink = 'B') {
  return `${dessert} ${drink}`;
}

console.log(breakfast4('a', 'b'));