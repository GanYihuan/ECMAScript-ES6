# 函数的参数

1. 参数扩展/数组展开
2. 默认参数

## 参数扩展

1. 收集参数
  function show(a, b, ...args){}
  ...args 必须是最后一个
2. 展开数组
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];
  let arr = [...arr1, ...arr2];
  ...arr => 1,2,3,4,5,6
3. 不能赋值
  let a;
  let arr = [1, 2];
  a = ...arr;

## 默认参数

```js
function show(a, b = 5, c = 12) {
  console.log(a, b, c);
}
```
