var a = 200
{
  // console.log(a) 不受外部影响
  console.log(a) // a is not defined
  // let a之前称为暂时性死区 console.log(a) 不是 let a
  let a = 100
  // let a 后面的 a 都是 let a
  console.log(a) // 100
}
