---
title: "Why we need to deprecate x prefix for HTTP headers?"
date: 2018-08-01
description: "In June, 2012, Internet Engineering Task Force released a new RFC([RFC-6648](https://tools.ietf.org/html/rfc6648)), recommending deprecation of `X-` prefix. As LinkedIn also use this type of prefix, I was interested to read this RFC, and explain to you why we need to deprecate it."
---

# Why we need to deprecate x prefix for HTTP headers?

In June, 2012, Internet Engineering Task Force released a new RFC([RFC-6648](https://tools.ietf.org/html/rfc6648)), recommending deprecation of `X-` prefix. As LinkedIn also use this type of prefix, I was interested to read this RFC, and explain to you why we need to deprecate it.

## X- prefix background

HTTP header is used to transmit additional information between client and server.

Some standard HTTP header:

- `Authorization`: Often used to transmit OAuth access token or other authorization information. e.g. `Authorization: Bearer ABCDEFG`
- `Content-Type`: Often used to represent media type in request body. e.g. `application/x-www-form-urlencoded` or `application/json`)
- `User-Agent`: Browser identifier. e.g. `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.84 Safari/537.36`

If people want to have custom header, `X-` prefix is suggested to avoid conflict. This recommendation is raised in 1982 for Email standard([RFC-822](https://tools.ietf.org/html/rfc822))，working fine for decades。

## Usage of X- prefix

Among all non-standard HTTP headers, some become very popular:

- `X-Forwarded-For`: Mark origin IP of client connecting to server through proxy
- `X-Forwarded-Host`: Mark origin host of client connecting to server through proxy
- `X-Forwarded-Proto`: Mark protocol of client connecting to server through proxy
- `X-Powered-By`: Mark framework, technology, environment, etc.

## X- prefix issues

When these `X-` prefix become more and more popular, it's tough to handle it when we need to standardize them. In theory, we should remove the `X-` prefix after standardize it, but it will apparently affect existing applications. To avoid backward-compatibility issues, we have to keep it. In summary, the `X-` prefix can't identify between standard and non-standard headers anymore.

## Solutions

1. No longer recommend `X-` for new custom headers, and no longer use `X-` prefix to distinguish standard and non-standard headers
2. If it's possible for new custom header to be standardized, use a non-used and meaningful header name
3. If it's not possible for new custom header to be standardized, include organization name (e.g. reverse domain name `com.example.foo`)
4. No recommendation to keep/drop for existing custom HTTP headers
5. `X-` prefix can't be used to assume safety of headers