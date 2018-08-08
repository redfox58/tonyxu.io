---
title: "使用Firebase云函数统计网站访问数"
date: 2018-08-07T22:17:54-07:00
draft: false
categories: [技术]
tags: [Firebase]
slug: "use-firebase-cloud-function-to-count-website-visitors"
---

现在越来越多人喜欢用Firebase托管静态页面，类似选择还有GitHub Pages。如果你想给Firebase托管的静态页面添加后端代码，那么恭喜你云函数就是为你准备的。其中使用云函数的场景可以是连接Firebase实时数据库并存取数据。

我在这给大家分享一个最简单的例子就是借助云函数实现访问统计，每次云函数被触发，就更新实时数据库里的网站访问统计。

<!--more-->

## 计划

我们大致需要这么几步实现这个功能

1. 部署静态页面至Firebase云托管
2. 创建Firebase云函数用来更新Firebase实时数据库的统计数字
3. 为静态页面添加访问云函数的请求

## 部署静态页面至Firebase云托管

Firebase云托管非常适合托管静态页面，它比GitHub Pages搭建起来更简单，同时它也提供更多为网站/移动开发而设计的功能。如果你的静态网页文件已经准备好了，那么就可以直接运行`firebase deploy`上传至Firebase并可以在全球任意地方访问。

参考[Quickstart](https://firebase.google.com/docs/hosting/quickstart)学习如何在Firebase部署你的第一个静态网站

## 创建Firebase云函数

现在，我们来创建Firebase云函数来执行后端代码处理统计数字的更新。在这段代码中，我们将云函数连接实时数据库，并让它能够更新存储在数据库里的统计数字。

1. 初始化云函数
    ```
    firebase init functions
    ```
2. 在实时数据库创建`hit_counter`节点并把值设为0
    ```json
    {
        "hit_counter": 0
    }
    ```
3. 编辑云函数代码 (`Index.js`)
    ```
    const functions = require("firebase-functions");
    const admin = require("firebase-admin");
    admin.initializeApp();
    
    exports.hitCounter = functions.https.onRequest((req, res) => {
        const counterRef = admin.database().ref("/hit_counter");
        return counterRef
            .transaction(current => {
            return (current || 0) + 1;
            })
      });
    ```
4. 部署云函数
    ```
    firebase deploy
    ```

部署完成后你会得到一个云函数网址，你可以尝试在浏览器打开它，观察实时数据库里的数据是否加了1。

## 为静态页面添加访问云函数的请求

如果你的云函数可以顺利更新实时数据库里的数据，那么接下来，你就可以把如下这段代码添加到你的网页里，使网页加载时会自动访问云函数。

```html
<html>
    <script>
    fetch("//https://<Region>-<YOUR-APP-ID>.cloudfunctions.net/hitCounter")
    </script>
</html>
```

当网页成功访问到你的云函数网址时，云函数就会去更新实时数据库里的统计数字了。

恭喜你，你的静态网页现在已经有了后端代码来做访问统计的工作，下一步你还可以进一步在静态网页请求实时数据库里的统计数字并展示给访客。