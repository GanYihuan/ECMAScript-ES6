'use strict';

// 22.迭代器 - Iterators
function chef(foods) {
  let i = 0;
  return {
    next() {
      let done = (i >= foods.length);
      let value = !done ? foods[i++] : undefined;
      return {
        value: value,
        done: done
      }
    }
  }
}

let wangHao = chef(['a', 'b']);
console.log(wangHao.next()); // a
console.log(wangHao.next()); // b
console.log(wangHao.next()); // undefined


// 23.生成器 - Generators
let chef2 = function* (foods) {
  for (let i = 0; i < foods.length; i++) {
    yield foods[i];
  }
};

let wangHao2 = chef2(['a', 'b']);
console.log(wangHao2.next()); // a
console.log(wangHao2.next()); // b
console.log(wangHao2.next()); // undefined
