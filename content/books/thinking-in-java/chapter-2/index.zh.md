---
title: 第二章 - 一切都是对象
date: 2019-03-31
toc: true
---

Java 语言假定你只想使用面向对象编程，所以基本上 Java 的一切都是对象。

## 用引用操作对象

你把一切都当作对象来看待，使用一种统一的语法。尽管一切都是对象，你操作对象的标识符实际上是引用了一个对象。

例如:

```java
String s;
```

## 必须由你创建所有对象

当你创建一个引用时，你希望把它和一个对象关联起来。你（大部分情况）可以通过**new**操作符。**new**关键字的意思是，创建一个新的这个类型的对象。

例如:

```java
String s = new String("asdf");
```

### 存储到什么地方

有五种不同的地方可以存储数据：

1. **寄存器**，这是最快的存储，在处理器内部
2. **栈**，这是存在随机访问内存，但是有处理器通过 _栈指针_ 的直接支持
3. **堆**，这是通用的存储区域，所有 Java 对象都存储在这
4. **常量存储**，常量值一般都直接放置于程序代码内
5. **非随机访问内存存储**，完全存储在程序外的数据，和该程序是否在运行无关，且不受该程序控制

### 特例：基本数据类型

下列是基本数据类型的列表，它们是一组由常用的数据类型简化而来的特殊数据类型。

| 基本数据类型      | 位长    | 封装类    |
| ----------------- | ------- | --------- |
| boolean (布尔型)  | -       | Boolean   |
| char (字符型)     | 16 bits | Character |
| byte (字节型)     | 8 bits  | Byte      |
| short (短整型)    | 16 bits | Short     |
| int (整型)        | 32 bits | Integer   |
| long (长整型)     | 64 bits | Long      |
| float (浮点型)    | 32 bits | Float     |
| double (双精度型) | 64 bits | Double    |
| void ()           | -       | Void      |

例如:

```java
char c = 'x';
```

或者通过封装类：

```java
Character ch = new Character('x');
```

### 高精度数字类型

- **BigInteger** 支持任意精度的整数，可以精确表示任何大小的整数值，而不会丢失任何信息
- **BigDecimal** 支持任意精度的定点数，例如，你可以使用它进行高精度货币计算

### Java 中的数组

Java 数组一定会被初始化并且无法访问其区间之外的部分，位置索引在运行时会被确认是否有效。

## 永远不需要销毁对象

### 作用域

作用域是由花括号 **{}** 的位置决定。作用域之内定义的变量在花括号结束前都可以被访问。例如：

```java
{
    int x = 12;
    // 只有 x 可被访问
    {
        int q = 96;
        // x 和 q 都可被访问
    }
    // 只有 x 可被访问
    // q 在 ”作用域之外“
}
```

### 对象的作用域

使用 **new** 创建的 Java 对象在作用域结束后都还存在。Java 有 _垃圾回收_ 机制，它观察所有使用 **new** 创建的对象，判断哪些对象不再被引用，并释放那些不再被引用的对象。你可以只管创建对象，当你不使用他们时，他们会自行被释放。

## 创建新的数据类型: **类**

_class_ 关键字后面接着的是新类的名称。通过如下方式创建一个新类：

```java
class ATypeName { /* 这里包含类的成员和方法 */ }
```

然后你就可以使用 **new** 创建一个这个类的对象:

```java
ATypeName a = new ATypeName();
```

### 字段和方法

你可以在类当中定义两种元素：_字段_, 和 _方法_.

字段是一个任何类型的对象，你可以通过它的引用或者基本类型来和它交互。如果这个字段引用的是一个对象，你必须先初始化(如前文所说的使用 **new**)这个引用来使它指向一个具体的对象。 例如：

```java
class DataOnly {
    int i;
    double d;
    boolean b;
}
```

然后你就可以创建一个这个类型的对象，并给这些字段赋值：

```java
DataOnly data = new DataOnly();

data.i = 47;
```

#### 基本数据类型的默认值

当一个基本数据类型作为类的字段时，即使你不初始化，它也会有一个初值值：

| 基本数据类型 | 默认值          |
| ------------ | --------------- |
| boolean      | false           |
| char         | '\u0000' (null) |
| byte         | (byte)0         |
| short        | (short)0        |
| int          | 0               |
| long         | 0L              |
| float        | 0.0f            |
| double       | 0.0d            |

## 方法、参数和返回值

Java中的方法确定了一个对象可以接收哪些消息。它的基本组成部分是：

- 方法名
- 参数类型
- 返回值类型
- 方法体

这是一个方法的基本的形式：

```java
返回值类型 方法名( /* 参数列表 */ ) {
    /* 方法体 */
}
```

### 参数列表

方法参数列表指定了你可以传递哪些信息（对象）给这个方法。你同时还需要指定这个对象的类型。例如：

```java
int storage(String s) {
    return s.length() * 2
}
```

如果你不需要返回任何信息，你可以把返回值类型指定为 **void**。

## 构建一个 Java 程序

### 名称可见性

使用互联网域名的颠倒形式作为你的包名。例如：**net.mindview.utility.foibles**。 句点可以被理解为子目录。

### 使用其他构建

- 使用同源文件当中定义的其他类：直接使用类名
- 使用其他源文件当中定义的类：使用 **import** 导入其他包，也就是一组类

例如：

```java
import java.util.ArrayList;
```

或者导入一组类：

```java
import java.util.*
```

### **static** 关键字

当你使用 **static** 关键字，它意味着这个字段或者方法不指向某个具体的对象实例。你不需要先创建一个对象才能访问它的字段和方法。

例如：

```java
class StaticTest {
    static int i = 47;
}

StaticTest st1 = new StaticTest();
StaticTest st2 = new StaticTest();
```

现在 **st1.i** 和 **st2.i** 的值都是47.你也可以通过类名访问：

```java
StaticTest.i++;
```

对于方法也是同样道理。

## 你的第一个 Java 程序

一个完整的示例程序：

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

### 编译和运行

为了编译和运行这段程序，你必须先有Java编程环境。Sun公司提供的Java开发者套件可以免费使用。

SDK安装配置好之后，在程序目录运行命令：

```shell
javac HelloDate.java
```

## 注释和嵌入式文档

第一种形式：

在`/*`和`*/`中间写注释。

```java
/* 这是一条
 * 跨越多行的
 * 注释
 */
```

或者

```java
/* 这是一条
跨越多行的注释*/
```

第二种形式：

使用`//`开头，注释在行末结束。

```java
// 这是一条单行注释
```

### 注释文档

一个自动提取注释的工具叫 _Javadoc_，它是安装JDK附带的。它使用Java编译器当中的一些技术，并查找程序中特殊的注释标签来生成文档。这样你就可以以最少的工作量来获得非常好的程序文档。

### 语法

所有 Javadoc 命令都只在`/**`注释内触发。一个简单的 Javadoc 注视：

```java
//: object.Documentation1.java
/** 类注视 */
public class Documentation1 {
    /** 字段注释 */
    public int i;
    /** 方法注释 */
    public void f() {}
}
```

### 嵌入 HTML

你可以在 Javadoc 注释内潜入 HTML 代码：

```java
//: object/Documentation2.java
/**
* <pre>
* System.out.println(new Date());
* </pre>
*/
public class Documentation2 {}
```

### 一些标签示例

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

### 文档示例

```java
//: object/HeloDate.java
import java.util.*;

/** 这是第一个 Thinking in Java 的示例程序
 * 它输出一段字符串和当前日期时间。
 * @author Bruce Eckel
 * @author www.MindView.net
 * @version 4.0
*/
public class HelloDate {
    /** 类和程序的入口
     * @param args 字符参数数组
     * @throws exceptions 无异常抛出
    */
    public static void main(String[] args) {
        System.out.println("Hello, it's: ");
        System.out.println(new Date());
    }
} /* 输出: (55% 匹配)
Hello. it's:
Wed Oct 05 14:39:36 MDT 2005
*/
```

## 编码风格

参考 _Code Conventions for the Java Programming Languages_ 介绍的代码风格。
