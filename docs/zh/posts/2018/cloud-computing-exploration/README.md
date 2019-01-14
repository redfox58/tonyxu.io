---
title: "云计算探索"
date: 2018-07-11
description: "说起和云的接触，最早可以追溯到高二的时候Google被墙，被迫学网上的教程自己用Google App Engine跑GoAgent翻墙代理。大一的时候曾经折腾过一阵自建网站(纯属娱乐)，在网上购买过共享空间(Shared Hosting)，后来觉得限制太多，无法安装软件，就又购买了独立主机(VPS)。在美国读CS期间学Cloud Computing课程又在AWS上建过一些instance放简单网页。毕业后还尝试过Heroku (和Google App Engine类似)等云平台用于跑小型demo程序。虽然没有高强度使用云计算的经历，但是或多或少用过一些，也对云计算的应用趋势略有所感。"
---

# 云计算探索

说起和云的接触，最早可以追溯到高二的时候Google被墙，被迫学网上的教程自己用Google App Engine跑GoAgent翻墙代理。大一的时候曾经折腾过一阵自建网站(纯属娱乐)，在网上购买过共享空间(Shared Hosting)，后来觉得限制太多，无法安装软件，就又购买了独立主机(VPS)。在美国读CS期间学Cloud Computing课程又在AWS上建过一些instance放简单网页。毕业后还尝试过Heroku (和Google App Engine类似)等云平台用于跑小型demo程序。虽然没有高强度使用云计算的经历，但是或多或少用过一些，也对云计算的应用趋势略有所感。

总体来说，对于普通的开发者，如果只是需要跑一个后端，从最早的要自己搭建物理服务器，到后来网上租虚拟服务器（Digital Ocean)以及更加专业的AWS等之后，现在更多的开始用Serverless架构的服务(AWS Lambda, Google Cloud Functions, Firebase Cloud Functions, Azure Functions)，也就是说只需要关心代码本身，而不需要关心维护环境。

我自己有跑一个Flask程序，目前放在Google App Engine上，主要是因为Google App Engine的Standard Environment版本是有免费额度的。这个Flask程序之前是Serve [https://tonyxu.io](https://tonyxu.io) 网站前端和后端(REST API)的请求。现在[https://tonyxu.io](https://tonyxu.io)的前端migrate到Firebase Hosting了，因此我打算重构在GAE上跑的后端。我会另外单独写一篇文章来记录我是如何搭建一个自用的后端REST API。