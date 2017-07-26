---
layout: post
title: "捡起JavaScript(1)"
date: "2017-03-10 09:28:40 +0800"
categories: JS
tags: JS
excerpt: JS原型
mathjax: true
---

# JS原型介绍

## 原型的作用是什么？

> 大家知道的JS不是面向对象的语言，就没有面向对象的继承的概念。那么原型就是用来弥补JS继承功能的。

#### **下面有三个思想需要明确**
- 在JavaScript世界中一切都是对象。
- 一切对象都是由方法new出来的。
- 所有的JavaScript的变量最终都会变成Null。
- JavaScript修改任何数据，都可以随心所欲。

## JavaScript的数据类型
### 分为值类型和引用类型
值类型名 | 特别说明
---|---|---
number | NaN
boolean |  
string |
object | null
function |
undefined | 默认初始化
symbol | Symbol() ES6引入

---
> #### 一切引用类型都是Object
#### 我们都知道JS判断类型有两种typeof和instanceof，但是这两个有什么区别么？

```js
// 代码1
console.log(typeof(x));    // undefined
console.log(typeof(10));   // number
console.log(typeof('abc')); // string
console.log(typeof(true));  // boolean
console.log(typeof(function () { }));  //function
console.log(typeof([1, 'a', true]));  //object
console.log(typeof ({ a: 10, b: 20 }));  //object
console.log(typeof (null));  //object
console.log(typeof (new Number(10)));  //object
```

```js
// 代码2
function ABC() {}
var abc = new ABC()
console.log(abc instanceof ABC)  //true
console.log(abc instanceof Object)  //true
console.log(ABC instanceof Function)  //true
console.log(ABC instanceof Object)  //true
console.log(Function instanceof Object)  //true
console.log(abc instanceof Function)  //false
console.log(Object instanceof Function)  //true
```
> 由代码1和代码2可知：
typeof是用来判断值类型，
instanceof是用来追寻祖宗血脉的。

---

本来看着代码2，可以寻迹这一条线，用来理清JavaScript对象的实例关系。
abc -> ABC -> Function -> Object -> Function ? 怎么最后出现循环实例化链？这不是要死循环？

其实，Function和Object的关系有点像鸡和鸡蛋的关系。(那就下一个笔记再来讨论)
