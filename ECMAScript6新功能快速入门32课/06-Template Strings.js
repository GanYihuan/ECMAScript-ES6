'use strict';

let dessert = 'a', drink = 'b';
// es5
let breakfast = 'Today breakfast it is ' + dessert + ' and ' + drink + ' !';
console.log(breakfast);


// es6
let breakfast2 = `Today breakfast it is \n ${dessert} and ${drink} !`;
// methods
console.log(breakfast2.startsWith('T'));
console.log(breakfast2.endsWith('!'));
console.log(breakfast2.includes('i'));


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


// default value
function breakfast4(dessert = 'A', drink = 'B') {
  return `${dessert} ${drink}`;
}

console.log(breakfast4('a', 'b'));