# Promise

> 异步：操作之间没啥关系，同时进行多个操作
> 同步：同时只能做一件事

## 异步回调地狱

```js
ajax('/banners', function (banner_data){
  ajax('/hotItems', function (hotitem_data){
    ajax('/slides', function (slide_data){
      ajax('/slides', function (slide_data){
        alert('处理');
      }, function (){
        alert('读取失败');
      });
    }, function (){
      alert('读取失败');
    });
  }, function (){
    alert('读取失败');
  });
}, function (){
  alert('读取失败');
});
```

## 有了Promise之后的异步

```js
Promise
  .all([$.ajax(), $.ajax()])
  .then(results=>{
    // 对了
  }, err=>{
    // 错了
  });
```

## 同步

```js
let banner_data=ajax_async('/banners');
let hotitem_data=ajax_async('/hotItems');
let slide_data=ajax_async('/slides');
let banner_data=ajax_async('/banners');
```

## Promise——消除异步操作

> 用同步一样的方式，来书写异步代码

### Promise.all

### Promise.race

```js
Promise.race([
  $.ajax({url: 'http://a2.taobao.com/data/users'}),
  $.ajax({url: 'http://a15.taobao.com/data/users'}),
  $.ajax({url: 'http://a3.taobao.com/data/users'}),
  $.ajax({url: 'http://a7.taobao.com/data/users'})
]);
```