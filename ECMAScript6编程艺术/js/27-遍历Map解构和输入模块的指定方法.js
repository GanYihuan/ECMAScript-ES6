var map = new Map()
map.set('id', '007')
map.set('name', 'Conan')

console.log(map) // Map(2) {"id" => "007", "name" => "Conan"}
console.log(typeof map) // object

for (let [key, value] of map) {
  console.log(key + ' is ' + value)
  // id is 007
  // name is Conan
}

for (let [key] of map) {
  console.log(key)
  // id
  // name
}

// key 省略了
for (let [, value] of map) {
  console.log(value)
  // 007
  // Conan
}

// 输入模块的指定方法
const { A, B } = require('../constantize')
