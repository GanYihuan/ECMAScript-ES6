'use strict';

let fruit = 'a';
let dessert = 'b';

function dinner(fruit, dessert) {
  console.log(`dinner it's ${fruit} and ${dessert}`);
}


// A
// rename: dinner as supper
export {fruit, dessert, dinner as supper}


// C
// export default function sex(fruit, dessert) {
//    console.log(`dinner it's ${fruit} and ${dessert}`);
// }


// export {dinner as default};