---
title: Chapter 2 - Everything Is an Object
date: 2019-03-25
---

The Java language assumes that you want to do only object-oriented programming, so (almost) everything in Java is an object.

## You manipulate objects with references

You treat everything as an object, using a single consistent syntax. Although you treat everything as an object, the identifier you manipulate is actually a "reference" to an object.

For example:

```java
String s;
```

## You must create all the objects

When you create a reference, you want to connect it with a new object. You do so, in general, with the **new** operator. The keyword **new** says, "Make me a new one of these objects.".

For example:

```java
String s = new String("asdf");
```

### Where storage lives

There are five different places to store data:

1. **Registers**. This is the fastest storage, it's inside the processor.
2. **The stack**. This lives in the general random-access memory (RAM) area, but has direct support from the processor via its _stack pointer_.
3. **The heap**. This is a general-purpose pool of memory (also in the RAM area) where all Java objects live.
4. **Constant storage**. Constant values are often places directly in the program code.
5. **Non-RAM storage**. Data that lives completely outside a program, no matter the program is running or not-, and outside the control of the program.

### Special case: primitive types

Below are list of primitive types, which is a group of special types that were simplified from a group of frequently used types.

| Primitive type | Size    | Wrapper type |
| -------------- | ------- | ------------ |
| boolean        | -       | Boolean      |
| char           | 16 bits | Character    |
| byte           | 8 bits  | Byte         |
| short          | 16 bits | Short        |
| int            | 32 bits | Integer      |
| long           | 64 bits | Long         |
| float          | 32 bits | Float        |
| double         | 64 bits | Double       |
| void           | -       | Void         |

For example:

```java
char c = 'x';
```

Or with wrapper primitives:

```java
Character ch = new Character('x');
```

### High-precision numbers

- **BigInteger** supports arbitrary-precision integers; you can accurately represent integral values of any size without losing any information during operations.
- **BigDecimal** is for arbitrary-precision fixed-point numbers; you can use these for accurate monetary calculations, for example.

### Arrays in Java

A Java array is guaranteed to be initialized and cannot be accessed outside of its range. The index will be verified in the range at run time.

You must assign an object to each reference before you use it, and if you try to use a reference that's not assigned with an object, the problem will be reported at run time.

**...TO BE CONTINUED**