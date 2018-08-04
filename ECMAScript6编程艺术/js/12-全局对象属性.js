// 全局变量属性
var varName = 'varValue'
// browser
console.log(window.varName) // varValue
// node.js
console.log(global.varName) // varValue
// normal
console.log(this.varName) // varValue

let letName = 'letValue'
console.log(window.letName) // undefined -- use strict
console.log(this.letName) // undefined -- use strict
