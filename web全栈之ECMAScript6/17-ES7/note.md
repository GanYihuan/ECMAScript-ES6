# ES7 & ES8 预览

## 数组 includes

> 数组是否包含某个东西

## 数组 keys/values/entries

```js
                  数组          json
  for...in        下标(key)     key
  for...of        值(value)     ×

  keys=>所有的key拿出来               0,1,2,3,4,...
  values=>所有的values拿出来          12,5,8,99,...
  entries=>所有的key-value对拿出来    {key: 0, value: 12}, {key: 1, value: 5}, ...
    *entry实体
```

## 幂

```js
alert(3 ** 8)
```

## startsWith/endsWith

## padStart/padEnd

- 语法容忍度

```js
ES6
[12,6,8] => [12,6,8,]
ES7
function show(a,b,c,) {}
```

## generator yield

## async await

- 不依赖于外部的 runner 了——统一、性能
- 可以用箭头函数
