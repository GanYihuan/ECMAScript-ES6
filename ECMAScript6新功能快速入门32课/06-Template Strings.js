'use strict';

let dessert = 'a', drink = 'b';
let breafast = 'Today breakfast it is ' + dessert + ' and ' + drink + ' !';
// es6
let breafast2 = `Today breakfast it is \n ${dessert} and ${drink} !`;

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