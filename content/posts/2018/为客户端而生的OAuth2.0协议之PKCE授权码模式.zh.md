---
title: "为客户端而生的OAuth2.0协议之PKCE授权码模式"
date: 2018-07-24T22:27:21-07:00
draft: false
categories: [技术]
tags: [OAuth2.0,PKCE]
slug: "oauth2-pkce-flow"
aliases: [/zh/posts/为客户端而生的oauth2.0协议之pkce授权码模式/]
---

如果你正在做一款原生客户端软件，同时你又需要用到OAuth2.0登陆，那么使用OAuth2.0带PKCE支持的授权码模式是你的最佳选择。下面我就和大家分享一下带PKCE的授权码模式为什么最适合原生客户端。

<!--more-->

原生客户端软件一般是指没有后端服务器，所有代码都在用户本地设备上运行的软件（如Windows/Mac客户端或者iOS/Android客户端)，因此想让原生客户端软件安全存放密钥(client secret)是不现实的，很容易被破解。

那么原生客户端如果需要使用OAuth有哪些选择，这些选择又有哪些利弊呢？

1. 简化模式(Implicit Flow): 简化模式的Access Token会直接被传递给Redirect URL。假如你的原生客户端是跳转其他浏览器进行登陆授权，那么你要么是绑定URL Scheme通过类似`app-name://?access_token=`的方法把access token传递给原生客户端，要么是在本地起个HTTP服务器通过`http://localhost:{port}/?access_token=`的方法监听Access Token。这两种方式都有被第三方恶意应用占用URL Scheme或者localhost端口截取Access Token的风险，且Access Token过期无法更新，不建议使用。
2. 授权码模式(Authorization Code Flow): 授权码模式的Access Token不会被直接传递给Redirect URL，Redirect URL只会接收一个授权码，且授权码必须要和Client ID，Client Secret一同使用才能获取Access Token。然而原生客户端无法安全保存Client Secret，第三方恶意应用可以破解Client Secret，并按上述方法截取Authorization Code，同样不建议使用。有的认证提供商针对原生客户端允许不提供Client Secret获取Access Token，这其实并没有解决根本问题。

上面两种方法都被否决了，那么怎么才能让原生客户端安全使用OAuth2.0认证呢？答案就是使用带有PKCE支持的授权码模式。

PKCE, 全称Proof Key for Code Exchange, 微软翻译为保护授权代码授权。这其实是通过一种密码学手段确保恶意第三方即使截获Authorization Code或者其他密钥，也无法向认证服务器交换Access Token。

PKCE的流程大概如下:

1. 随机生成一串字符并作URL-Safe的Base64编码处理, 结果用作`code_verifier`
2. 将这串字符通过SHA256哈希，并用URL-Safe的Base64编码处理，结果用作`code_challenge`
3. 把`code_challenge`带上，跳转认证服务器，获取Authorization Code
1. 把`code_verifier`带上，换取Access Token

由于中间人不能由`code_challenge`逆推`code_verifier`，因此即使中间人截获了`code_challenge`, Authorization Code等，也无法换取Access Token, 避免了安全问题。

## 在线生成 PKCE Code Verifier and Code Challenge

<iframe width="100%" height="120" src="https://cdn.rawgit.com/tonyxu-io/21eb57ab2a4aeb2a3ee10f77542abe64/raw/3ba2cb13423417b8bb2844e883d7b0ecb4358a5e/pkce-generator.html" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 实现代码 (JavaScript)

<script src="https://gist.github.com/tonyxu-io/21eb57ab2a4aeb2a3ee10f77542abe64.js"></script>

## 支持PKCE的一些OAuth提供商

- [OAuth 2.0 for Mobile & Desktop Apps](https://developers.google.com/identity/protocols/OAuth2InstalledApp)
- [Authorize access to Azure Active Directory web applications using the OAuth 2.0 code grant flow](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-protocols-oauth-code)
- [Implementing the Authorization Code Flow with PKCE](https://developer.okta.com/authentication-guide/implementing-authentication/auth-code-pkce)

------

Reference:

- [RFC 7636 - OAuth PKCE](https://tools.ietf.org/html/rfc7636)
- [RFC 8252 - OAuth 2.0 for Native Apps](https://tools.ietf.org/html/rfc8252)