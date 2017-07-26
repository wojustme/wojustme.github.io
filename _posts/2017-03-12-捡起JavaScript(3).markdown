---
layout: post
title: "捡起JavaScript(3)"
date: "2017-03-12 09:28:40 +0800"
tags: JS
excerpt: JS原型链
mathjax: true
---

## 原型链

> prototype和__proto__之间的关系。

```
function ABC() {}
var abc = new ABC()
```
我们知道ABC有个prototype属性，当new出一个新变量abc，其中abc含有__proto__属性，为了区别对待，借鉴大家的普遍认识，其中称prototype为显式原型、__proto__为隐式原型。


> **有几个概念需要描述一下。**

1. 隐式原型的对象数据不仅仅只和当前变量绑定，会更改类ABC的显式原型的对象数据。
2. 显式原型的改变会影响隐式原型，同样隐式原型也会显式原型。
3. 变量abc的隐式原型和ABC的显式原型是等效的。

OK，通过下面代码截图就很能说明问题。
![](http://images2015.cnblogs.com/blog/945399/201703/945399-20170318222449291-470989771.png)
![](http://images2015.cnblogs.com/blog/945399/201703/945399-20170318222501276-1202585171.png)
![](http://images2015.cnblogs.com/blog/945399/201703/945399-20170318222516323-1461918661.png)

## 方法调用顺序过程

1. 变量属性方法
2. __proto__属性方法
3. 沿着原型链查找对应的方法
4. 都没找到报错

```
function ABC () {}
var abc = new ABC()
// 显然具有如下的关系
// abc instanceof ABC instanceof Object

abc.say1 = () => {
    console.log('say1')
}
ABC.prototype.say2 = () => {
    console.log('say2')
}
Object.prototype.say3 = () => {
    console.log('say3')
}

abc.say1() // 调用自己的方法
abc.say2() // 查找自己的__proto__方法，即ABC的prototype原型方法
abc.say3() // 沿着原型链查找到Object的prototype原型方法
abc.say4() // 报错，Uncaught TypeError: abc.say4 is not a function
```

> 调用属性名，也是如此。。。

## 心情小记

> 终于有时间来写写我的JS点滴，工作事太多，最近因为工作原因还在学习Lua和Nginx，以及春哥的Openresty，哎😔。。。
