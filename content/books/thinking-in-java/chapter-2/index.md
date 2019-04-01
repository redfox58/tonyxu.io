---
title: Chapter 2 - Everything Is an Object
date: 2019-03-31
toc: true
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

## You never need to destroy an object

### Scoping

Scope is determined by the placement of curly braces **{}**. A variable defined within a scope is available only to the end of that scope. For example:

```java
{
    int x = 12;
    // Only x available
    {
        int q = 96;
        // Both x & q available
    }
    // Only x available
    // q is "out of scope"
}
```

### Scope of objects

Java objects created using **new** hangs around past the end of the scope. Java has a _garbage collector_, which looks at all the objects that were created with **new** and figures out which ones are not being referenced anymore, and then it releases the memory for those objects. You simply create objects, and when you no longer need them, they will go away by themselves.

## Creating new data types: **class**

The _class_ keyword is followed by the name of the new type. Introduce a new type like below:

```java
class ATypeName { /* Class body goes here */ }
```

You can then create an object of this type using **new**:

```java
ATypeName a = new ATypeName();
```

### Fields and methods

You can put two types of elements in your class: _fields_, and _methods_.

A field is an object of any type that you can talk to via its reference, or a primitive type. If it is a reference to an object, you must initialize that reference to connect it to an actual object (using **new**, as seen earlier) like below:

```java
class DataOnly {
    int i;
    double d;
    boolean b;
}
```

You can then create an object of this type and assign values to the fields:

```java
DataOnly data = new DataOnly();

data.i = 47;
```

#### Default values for primitive members

When a primitive data type is a member of a class, it is guaranteed to get a default value if you do not initialize it:

| Primitive type | Default         |
| -------------- | --------------- |
| boolean        | false           |
| char           | '\u0000' (null) |
| byte           | (byte)0         |
| short          | (short)0        |
| int            | 0               |
| long           | 0L              |
| float          | 0.0f            |
| double         | 0.0d            |

## Methods, arguments, and return values

Methods in Java determine the messages an object can receive. The fundamental parts of a methods are:

- name
- arguments
- return type
- body

Here is the basic form:

```java
ReturnType methodName( /* Argument list */ ) {
    /* Method body */
}
```

### The argument list

The method argument list specifies what information (objects) you pass into the methods. You also need to specify the type of the object. For example:

```java
int storage(String s) {
    return s.length() * 2
}
```

If you don't want to return anything, you can do so by indicating that the method returns **void**.

## Building a Java program

### Name visibility

Use your domain name in reverse as your library name. For example: **net.mindview.utility.foibles**. The dots are intended to represent subdirectories.

### Using other components

- Use a class exists in the same source code file: simply use the class name
- Use a class exists in some other file: use **import** to bring in the package, which is a library of classes

For example:

```java
import java.util.ArrayList;
```

or import a collection of classes:

```java
import java.util.*
```

### The **static** keyword

When you specify something as **static**, it means that particular field or method is not tied to any particular object instance of that class. You can access the fields and methods without first create an object.

For example:

```java
class StaticTest {
    static int i = 47;
}

StaticTest st1 = new StaticTest();
StaticTest st2 = new StaticTest();
```

Now both **st1.i** and **st2.i** have the same value of 47. It can also be accessed by class name:

```java
StaticTest.i++;
```

Same thing for method.

## Your first Java program

An example complete program:

```java
// HelloDate.java
import java.util.*;

public class HelloDate {
    public static void main(Stringp[] args) {
        System.out.println("Hello, it's: ");
        System.outprintln(new Date());
    }
}
```

### Compiling and running

To compile and run this program, you must first have a Java programming environment. The Java Developer's Kit (JDK) from Sun is free.

Once the JDK is installed, move to the file directory and type:

```shell
javac HelloDate.java
```

## Comments and embedded documentation

The first form:

Put comment inside the `/*` and `*/`.

```java
/* This is a comment
 * that continues
 * across lines
 */
```

or

```java
/* This is a comment that
continues across lines */
```

The second form:

Starts with a `//` and continues until the end of the line.

```java
// This is a one-line comment
```

### Comment documentation

The tool to extract the comments is called _Javadoc_, and it is part of the JDK installation. It uses some of the technology from the Java compiler to look for special comment tags that you put in your programs for generating documentation. This way you can get away with the minimal amount of work to generate decent program documentation.

### Syntax

All of the Javadoc commands occur only within `/**` comments. One simple example for Javadoc comments:

```java
//: object.Documentation1.java
/** A class comment */
public class Documentation1 {
    /** A field comment */
    public int i;
    /** A method comment */
    public void f() {}
} ///:~
```

### Embedded HTML

You can embed HTML in Javadoc comment:

```java
//: object/Documentation2.java
/**
* <pre>
* System.out.println(new Date());
* </pre>
*/
public class Documentation2 {}
///:~
```

### Some example tags

- `@see`
- `{@link package.class#member label}`
- `{@docRoot}`
- `{@inheritDoc}`
- `{@version}`
- `{@author}`
- `@since`
- `@param`
- `@return`
- `@throws`
- `deprecated`

### Documentation example

```java
//: object/HeloDate.java
import java.util.*;

/** The first Thinking in Java example program.
 * Displays a string and today's date.
 * @author Bruce Eckel
 * @author www.MindView.net
 * @version 4.0
*/
public class HelloDate {
    /** Entry point to class & application.
     * @param args array of string arguments
     * @throws exceptions No exceptions thrown
    */
    public static void main(String[] args) {
        System.out.println("Hello, it's: ");
        System.out.println(new Date());
    }
} /* Output: (55% match)
Hello. it's:
Wed Oct 05 14:39:36 MDT 2005
*///:~
```

## Coding style

Refer to style described in the _Code Conventions for the Java Programming Languages_.
