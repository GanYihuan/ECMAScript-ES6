// 给了默认值
var [temp = 'str'] = []
console.log(temp) // str

var [temp2 = 'string'] = ['tempString']
console.log(temp2) // tempString

var [x = 'aaa', y] = ['bbb']
console.log(x) // bbb
console.log(y) // undefind

var [m, n = 'aaa'] = ['bbb']
console.log(m) // bbb
console.log(n) // aaa

var [p, q = 'qqq'] = ['ppp', undefined]
console.log(p) // ppp
console.log(q) // qqq

// var [temp3] = 1 // 1 is not iterable
// var [temp4] = false // false is not iterable
// var [temp5] = NaN // NaN is not iterable
// var [temp6] = undefined // undefined is not iterable
// var [temp7] = null; // null is not iterable
