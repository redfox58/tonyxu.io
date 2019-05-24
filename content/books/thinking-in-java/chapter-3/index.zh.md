---
title: 第四章 - 执行控制
date: 2019-05-24
toc: true
---

控制语句:

- `if`-`else`
- `while`
- `do`-`while`
- `for`
- `return`
- `break`

## 真(`true`)和假(`false`)

所有的条件语句都使用条件表达式的真或假来决定执行路径

数字不可以被作为布尔值使用，替代方式：`if(a!=0)`

## `if`-`else`

`if`语句的两种形式:

```java
if(布尔表达式)
  语句
```

或者

```java
if(布尔表达式)
  语句
else
  语句
```

## 反复

反复语句 (循环):

- `while`
- `do`-`while`
- `for`

### `while`

```java
while(布尔表达式)
  语句
```

### `do-while`

```java
do
  语句
while(布尔表达式)
```

### `for`循环

```java
for(初始化; 布尔表达式; 步进)
  语句
```

### 逗号运算符

使用逗号运算符，你可以定义在`for`循环内定义多个变量，但是他们必须是同一个类型。

## `foreach` 语法

```java
for(float x : f){
}
```

这个定义了变量一个类型为`float`的变量`x`，并逐个把`f`的每个元素赋值给`x`。

`foreach` 适用与任何可以循环的对象

## 返回(`return`)

`return`关键字有两个作用:

- 它指定了一个方法返回什么值，如果这个方法不返回空(`void`)
- 它另当前方法退出执行，返回这个值

## 停止(`break`) 和 继续(`continue`)

- `break`: 退出循环，不执行循环剩下的语句
- `continue`: 停止执行当前循环并返回到循环的开头，执行下一个循环

## 不为人知的"goto"

在循环语句之前放置一个标签(label)来指定"goto":

```
标签1:
```

使用标签 _唯一_ 的理由是当你需要在不止一层的嵌套循环里使用停止(`break`)或继续(`continue`):

```java
标签1:
外循环 {
    内循环 {
        // ...
        break;
        //...
        continue;
        //...
        continue 标签1;
        //...
        break 标签2;
    }
}
```

## 开关(`switch`)

开关(`switch`)的通用形式是:

```java
switch(整数选择因子) {
    case 整数值1 : 语句; break;
    case 整数值2 : 语句; break;
    case 整数值3 : 语句; break;
    case 整数值4 : 语句; break;
    case 整数值5 : 语句; break;
    // ...
    default: 语句;
}
```

- `break`导致执行跳到开关的结束位置
- `break`是可选的，如果它不存在，代码会继续往下一个`case`的语句执行直到遇到`break`