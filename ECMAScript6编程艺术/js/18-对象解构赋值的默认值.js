var { x = 3 } = {}
console.log(x) // 3

var { x, y = 5 } = { x: 1 }
console.log(x) // 1
console.log(y) // 5

var { message: msg = 'hello' } = {}
console.log(msg) // hello

var { m = 3 } = { m: undefined }
console.log(m) // 3

// null 也是有值的一种
var { n = 3 } = { n: null }
console.log(n) // null
