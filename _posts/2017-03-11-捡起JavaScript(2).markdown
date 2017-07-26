---
layout: post
title: "捡起JavaScript(2)"
date: "2017-03-11 09:28:40 +0800"
categories: JS
tags: JS
excerpt: JS面向对象思想
mathjax: true
---

# 如何在JavaScript中使用面向对象思想

在ES6标准出现之前，所有想在JavaScript中使用面向对象思想来定义变量，唯一的途经就是使用new XXX()，其中XXX是一个方法名。例如：

```js
function ABC() {}
var abc = new ABC()
```
有的小伙伴会想：咦？我明明可以使用的是var obj = {}来声明一个对象变量啊，怎么能说new 方法名是唯一途经呢？
> 其实JS提供了一个语法糖，var obj = {} 和 var abc = new Object()是一个意思。同时，说明了一个问题Object是一个方法名。通过如下的代码，证明了我们的猜想。

```js
Object instanceof Function
// true
```

好了，我们再次回来，我们定义了一个方法ABC，那么JS帮我们对这个ABC做了哪些操作了？
![image](../../../../public/img/js/add_ABC_动画.gif)

可以很显然地发现JS内核对方法ABC添加了很多属性，其中最重要的就是prototype，它也是一个对象。
![image](../../../../public/img/js/show_prototype.png)

我们发现ABC.prototype中有constructor属性就是之前声明的ABC方法。

### ok!现在我在草稿纸上画一下ABC和ABC.prototype之间的关系。
![image](../../../../public/img/js/show_proto_relation.jpg)

你会问这个有什么用？我们先抛开这个问题，引入一个问题在JavaScript面向对象思想里，如何定义变量和方法？
```js
function ABC() {
    this.name = 'hello',
    this.say = function() {
        console.log('ABC say... ')
    }
}
var abc = new ABC()
------
console.log(abc.name) // hello
abc.say()  // ABC say...
```
如果你回答结束，我会问还有呢？
```js
function ABC() {}
ABC.prototype .name = 'hello'
ABC.prototype.say = () => { console.log('ABC say... ')}
------
console.log(abc.name) // hello
abc.say()  // ABC say...
```
我们发现这是两个相同的结果。通过这个例子就可以发现方法ABC的prototype的作用。
> 用于来补充扩展之前定义的类，即定义的方法。

#### 这里有个问题，为什么变量 var abc会调用到ABC的name和say属性？这就是下一节来补充的。
