// ES7
// 与 generator,yield 等价 , 使其按顺序执行
// 区别 : 可以使用箭头函数 , 不用引入 runner.js
// 1: *  :  aysnc() => {}
// 2: yield  :  await
let readData = async () => {
  let data1 = await $.ajax({
    url: 'data/1.txt',
    dataType: 'json'
  })
  let data2 = await $.ajax({
    url: 'data/2.txt',
    dataType: 'json'
  })
  console.log(data1, data2)
}
readData()
