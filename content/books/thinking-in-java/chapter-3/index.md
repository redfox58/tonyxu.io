---
title: Chapter 3 - Controlling Execution
date: 2019-05-24
toc: true
---

Control statements:

- `if`-`else`
- `while`
- `do`-`while`
- `for`
- `return`
- `break`

## `true` and `false`

All conditional statements use truth or falsehood of a conditional expression to determine the execution path.

Number can't be used as boolean, alternative way: `if (a!=0)`

## `if`-`else`

Two forms of using `if`:

```java
if(Boolean-expression)
  statement
```

or

```java
if(Boolean-express)
  statement
else
  statement
```

## Iteration

Iteration statements (looping):

- `while`
- `do`-`while`
- `for`

### `while`

```java
while(Boolean-expression)
  statement
```

### `do-while`

```java
do
  statement
while(Boolean-expression)
```

### `for`

```java
for(initialization; Boolean-expression; step)
  statement
```

### The comma operator

Using the comma operator, you can define multiple variables within a `for` statement, but they must be of the same type.

## Foreach syntax

```java
for(float x : f){
}
```

This defines a variable `x` of type `float` and sequentially assigns each element of `f` to `x`.

Foreach will work with any object that is **Iterable**.

## `return`

The `return` keyword has two purposes:

- It specifies what value a method will return (if it doesn't have a `void` return value)
- It causes the current method to exit, returning that value

## `break` and `continue`

- `break`: Quits the loop without executing the rest of the statements in the loop
- `continue`: Stops the execution of the current iteration and goes back to the beginning of the loop to begin the next iteration

## The infamous "goto"

Place a label right before an iteration statement to determine "goto":

```
label1:
```

The _only_ reason to use labels in Java is when you have nested loops and you want to `break` or `continue` through more than one nested level:

```java
label1:
outer-iteration {
    inner-iteration {
        // ...
        break;
        //...
        continue;
        //...
        continue label1;
        //...
        break label1;
    }
}
```

## `switch`

The general form of `switch` is:

```java
switch(integral-selector) {
    case integral-value1 : statement; break;
    case integral-value2 : statement; break;
    case integral-value3 : statement; break;
    case integral-value4 : statement; break;
    case integral-value5 : statement; break;
    // ...
    default: statement;
}
```

- `break` causes execution to jump to the end of the `switch` body
- `break` is optional, if it is missing, the code for the following `case` statements executes until a `break` is encountered