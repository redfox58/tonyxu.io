---
title: "HTTP头字段为何要弃用X前缀"
date: 2018-08-01T20:35:47-07:00
draft: false
categories: [技术]
tags: [HTTP, Header]
slug: "http-deprecate-x-prefix"
aliases: [/posts/http头字段为何要弃用x前缀]
---

2012年6月，互联网工程任务小组(IETF)发布了新的征求意见稿([RFC-6648](https://tools.ietf.org/html/rfc6648))，要求自定义HTTP头字段应放弃使用`X-`前缀。由于我所在的LinkedIn也在使用这类自定义头字段，因此特意阅读了这份征求意见稿，给大家解释以下为什么我们需要弃用它。

<!--more-->

## X前缀诞生背景

HTTP头的作用是为了让客户端和服务器传送信息时能够附加一些额外信息。

HTTP Header（HTTP头) 有一些标准字段，如:

- `Authorization`: 常用于传OAuth的Access Token或其他认证信息, 如`Authorization: Bearer ABCDEFG`
- `Content-Type`: 常用于表明Request Body 请求体的多媒体类型, 如`application/x-www-form-urlencoded`或`application/json`)
- `User-Agent`: 浏览器标识符, 如`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.84 Safari/537.36`

如果想在HTTP头里添加自定义的字段，为了和标准字段区分，之前是建议加上`X-`前缀的(`X`代表Extension)。这个建议是在1982年为Email标准提出(参考[RFC-822](https://tools.ietf.org/html/rfc822))，行之有效了几十年。

## X前缀的使用

在众多非标准HTTP头中，有一些变得越来越普遍，如:

- `X-Forwarded-For`: 标记通过代理访问服务器的原始客户端IP地址
- `X-Forwarded-Host`: 标记通过代理访问服务器的原始客户端Host名
- `X-Forwarded-Proto`: 标记原始客户端通过代理访问服务器时用的协议
- `X-Powered-By`: 标记框架、技术、环境等

## X前缀的问题

这些带`X-`前缀的HTTP头变得越来越普遍后，当需要把他们标准化时，如何处理这个`X-`前缀就变得比较棘手。按理说标准化HTTP头后应该拿掉`X-`前缀，但是拿掉后显然会对一些依赖原来HTTP头的程序造成影响。为了保证兼容性，我们无法彻底拿掉`X-`前缀。总结来说，使用`X-`前缀本意是区分标准化和自定义HTTP头，但是却越来越无法达到这一目标。

## 解决方案

1. 不再建议新自定义HTTP头采用`X-`前缀，`X-`前缀也不再作为标准与非标准的标记
2. 如果新的自定义HTTP头有可能被标准化，则选取当前未被占用的有意义的HTTP头字段名
3. 如果新的自定义HTTP头不可能被标准化，完全是私有HTTP头，则建议包含组织名(如反域名`com.example.foo`)
4. 已有的自定义HTTP头，保留使用或者放弃使用都可，不做推荐
5. 是否包含`X-`前缀不能作为HTTP头是否安全的判断因素