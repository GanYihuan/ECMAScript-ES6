# generator

## 普通函数——一路到底

## generator 函数——中间能停

```js
function name(){
  ...
  ajax(xxx, function (){
    ...
  });
}
```

## yield

```js
function* name(){
  codeA...
  yield ajax(xxx);
  codeB...
}
let a = name()
a.next() // codeA run
a.next() // codeB run
```
