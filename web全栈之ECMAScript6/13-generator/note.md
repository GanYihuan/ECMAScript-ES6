# generator

## 普通函数——一路到底

## generator函数——中间能停

## 踹一脚走一步

```js
function 函数(){
  代码...
  ajax(xxx, function (){
    代码...
  });
}
```

## yield

```js
function *函数(){
  代码...
  yield ajax(xxx);
  代码...
}
```