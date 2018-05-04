// let 不能在作用域外调用
{
  var a = 100;
  let b = 200;
}
console.log(a); // 100
// let Valid within code block
console.log(b); // b is not defined -- Error
