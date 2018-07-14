---
title: "利用Telegram和Flask打造私人通知服务器"
date: 2018-07-12T20:55:38-07:00
draft: false
categories: [技术]
tags: [Telegram,Flask,通知]
---

假如有如下这么几个场景:

1. 每天下班离开公司的时候和到家的时候都希望能自动通知到我的男朋友/女朋友
2. 页面有访问时立刻通知自己
3. 爬虫或其他任务执行完毕自动通知自己

以上场景特别需要一个能够便捷触发并把消息发送到手机上的机制。我的解决方案是：

实现一个Flask app，接收REST API的GET或者POST请求，根据不同需要拼装消息文本并发送到某个app (如Telegram, Slack等)。这个Flask app可以跑在Google App Engine (免费)， 并绑定自己的域名。

下面我就介绍一下大概的步骤：

1. 根据 Google App Engine 创建一个基本的Flask app
2. 去Telegram创建Bot: https://core.telegram.org/bots#3-how-do-i-create-a-bot
3. 和Telegram Bot对话，并获取chat id: `https://api.telegram.org/bot$TOKEN/getUpdates`
4. 为Flask创建一个route handle，让它通过如下地址向你的Telegram会话发送消息: `https://api.telegram.org/bot$TOKEN/sendMessage?chat_id=12345&text=Hello+World`
5. 上传到Google App Engine: `gcloud app deploy`

这样你就有了一个Flask app可以接收HTTP Request并根据需要向你的Telegram app发送通知，消息可以是预先准备的也可以是HTTP Request传给Flask app的。

那么回到开头的几个场景，我们要如何用Flask app解决这几个问题呢？可以针对他们分别尝试:

1. 手机上装IFTTT并允许后台定位，设置`进入`或者`离开`某个地理区间就出发webhook request到你的flask endpoint (并把消息内容传给通过Request Body传给Flask app)，你的Flask app就可以向你的Telegram发送通知了。你也可以直接让IFTTT向Telegram地址发送通知。
2. 在Flask app添加一个route接受页面访问触发的GET请求，并把来源IP发送给Telegram。你也可以在Flask app请求第三方IP地址库获取地理位置，一同发送给Telegram。
3. 在脚本结束的时候触发GET/POST请求到你的Flask app，Flask app再向你的Telegram发送通知。你也可以直接从脚本向Telegram发送通知。

一般如果没有额外的操作，其实也不用中途经过Flask，可以直接发送到Telegram。

我自己的Flask app的代码分享在GitHub，可以供大家参考：

https://github.com/tonyxu-io/my-api