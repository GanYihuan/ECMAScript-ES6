# summary

## 1.变量

1. var 重复声明、函数级
2. let 不能重复声明、块级、变量
3. const 不能重复声明、块级、常量

## 2.箭头函数

1. 方便 __如果只有一个参数，()可以省__ __如果只有一个 return，{}也可以省__
2. 修正 this __this 相对正常点__

## 参数扩展

1. 收集
2. 扩展
3. 默认参数
    function show(a, b=5){

    }

## 数组方法

1. map 映射
2. reduce 汇总：一堆->一个
3. filter 过滤：一堆->剩下的
4. forEach 循环

## 字符串

1. startsWith/endsWith
2. 字符串模板：`${a}xxx${b}`

## Promise

1. 封装异步操作
2. Promise.all([]);

## generator

```js
function* show() {
  yield
}
```

## JSON

```js
  JSON.stringify({a:12,b:5})  =>  '{"a":12,"b":5}'
  JSON.parse('{"a":12,"b":5}')=>  {a:12,b:5}
```

## 解构赋值

> let [a,b,c]=[12,5,8];
> 左右结构一样
> 右边是个合法的东西
> 声明、赋值一次完成

## 面向对象

```js
class Test{
  constructor(){
    this.xxx=
  }

  方法1(){

  }
  方法2(){

  }
}

class Cls2 extends Cls1{
  constructor(){
    super();
  }
}
```
