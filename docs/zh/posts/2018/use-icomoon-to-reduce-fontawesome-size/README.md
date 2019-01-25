---
title: 使用IcoMoon减少98%的FontAwesome字体加载体积
date: 2018-07-22
description: FontAwesome是非常棒的图标字体库，引用了FontAwesome字体库后，仅需要通过HTML标签就可以把图标嵌入你的页面，非常之方便。然而默认使用方法虽然简单，但是会带来一个额外问题，就是加载的资源文件体积过大，如果你的页面本身就比较简单，字体库可能会让你的网页加载大小翻上好几倍。
lang: zh-CN
type: post
---

# 使用IcoMoon减少98%的FontAwesome字体加载体积

[FontAwesome](https://fontawesome.com)是非常棒的图标字体库，引用了FontAwesome字体库后，仅需要通过HTML标签就可以把图标嵌入你的页面，非常之方便。然而默认使用方法虽然简单，但是会带来一个额外问题，就是加载的资源文件体积过大，如果你的页面本身就比较简单，字体库可能会让你的网页加载大小翻上好几倍。

下面分享一下我通过使用[IcoMoon](https://icomoon.io)来生成只含有我需要的图标的图标库文件，瞬间减少大约98%文件大小的方法。

## FontAwesome的默认使用方法

1. 引用FontAwesome图标库:

    ```html
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.1/css/all.css">
    ```

2. 使用HTML标签嵌入特定图标

    ```html
    <i class="fas fa-home"></i>
    ```

## IcoMoon方法

1. 访问[IcoMoon主页](https://icomoon.io/app/#/select)选择所有你需要使用的图标并点击生成字体(Generate Font)
   ![2018_07_22_20_13_05.png](https://s3-us-west-1.amazonaws.com/tonyxu-img/2018_07_22_20_13_05.png)

2. 下载资源文件
   ![2018_07_22_20_14_27.png](https://s3-us-west-1.amazonaws.com/tonyxu-img/2018_07_22_20_14_27.png)

3. 把资源文件中的`style.css`文件和`fonts`文件夹复制到你的网站资源文件夹并在HTML页面的`<head></head>`区域引用`style.css`文件(之前引用的FontAwesome相关资源可以移除了)

4. 在示范页面，鼠标移至图标上方，点击 "Get Code"
   ![2018_07_22_21_11_31.png](https://s3-us-west-1.amazonaws.com/tonyxu-img/2018_07_22_21_11_31.png)

5. 复制图标嵌入代码，粘贴到你需要展示的HTML位置
   ![2018_07_22_21_13_09.png](https://s3-us-west-1.amazonaws.com/tonyxu-img/2018_07_22_21_13_09.png)

完成！现在你的网站不再需要加载完整的FontAwesome资源文件，而只是加载你使用的图标资源。

## 对比

没有对比就没有伤害，下面附上我个人网站使用上述两种方法的性能对比

### 使用IcoMoon

![2018_07_22_22_15_58.png](https://s3-us-west-1.amazonaws.com/tonyxu-img/2018_07_22_22_15_58.png)

### 使用FontAwesome默认方法

![2018_07_22_22_05_23.png](https://s3-us-west-1.amazonaws.com/tonyxu-img/2018_07_22_22_05_23.png)

### 对比总结

图标字体相关体积减少比例: `(132 - 2.4) / 132 = 0.98%`, 总资源也从157KB下降到了38.7KB，效果非常之明显!