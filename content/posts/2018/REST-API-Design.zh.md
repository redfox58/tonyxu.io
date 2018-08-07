---
title: "REST API 设计面试准备"
date: 2018-07-03T22:00:00
draft: false
categories: [职场]
tags: [面试,rest-api]
aliases: [/posts/rest-api-设计面试/]
slug: "rest-api-design-interview-preparation"
---

现在 REST API 已经越来越流行被用作前后端的借口。大多数平台都提供 REST API 作为兼容 Web 端和移动端通用接口。如果你即将面试一个要求对 REST API 非常熟悉的岗位，我推荐你多准备 REST API 相关知识。以下是我个人对 REST API 的面试准备。

<!--more-->

## 设计原则

- 自描述
- 简单
- 安全

## 准备

- 确定用户
  - 来自内部或者外部
  - 角色 (开发者, 管理员, 客户, 客服...)
- 确定使用场景
- 确定需要提供的功能
- 分析并确定上述，再开始设计

注意:

- 不要猜想
- 不要杜撰

## 设计流程

- 确定 REST API 要提供对哪些资源的操作
- 确定不同资源的关系
- 根据资源类型和关系决定资源名的定义方法
- 为资源确定必须的操作方法

## 接口设计

设计如何提供资源的操作方法

- HTTP 路径

  - https://`api_domain`/`version`/`collection`/
  - https://`api_domain`/`version`/`collection`/`resource`/
  - https://`api_domain`: 可以返回基本信息例如 API 版本、所有顶级资源集合，以及所有单个资源
  - 使用名字作为资源名、而非动词

- HTTP 方法

  - `GET`/`POST`/`PATCH`/`PUT`/`DELETE`

- 请求头

  - `Authorization`: Bearer `access_token`
  - `Accept`: 要求指定类型的返回
  - `Content-Type`: 请求体的类型
  - ...

- 请求参数

  - Filtering (过滤): `type`=news,photo&`days`=sunday
  - Sorting (排序): `sort`=create_time,-creator
  - Paging (分页): `offset`=100&`limit`=100
  - Search/Query (关键词): `q`=AI
  - Access Token (认证令牌): `access_token`=

- 响应状态码

  - 应该使用标准 HTTP 状态码

- 响应头

  - `Content-Type`
  - `ETag`
  - ...

- 响应体 (JSON 格式)

- 错误处理

## 示例

### 资源模型 (Gmail)

- API 路径: `gmail.googleapis.com`
- 用户资源集合: `users/*`. 每个用户资源集合含有下列子资源或子资源集合.
  - 消息资源集合: `users/*/messages/*`.
  - 会话资源集合: `users/*/threads/*`.
  - 标签资源集合: `users/*/labels/*`.
  - 历史信息资源集合: `users/*/history/*`.
  - 用户资料资源: `users/*/profile`.
  - 用户设置资源: `users/*/settings`.

### 相应

#### 成功响应

```json
{
  "data": {
    "id": "lwj2lk3jlk2",
    "title": "Hello World"
  }
}
```

```json
{
  "pagination": {
    "offset": 100,
    "limit": 10,
    "total": 3464
  },
  "data": {
    //...
  }
}
```

#### 错误响应

```json
{
  "error": {
    "code": "ERROR_CODE", // "INVALID-REQUEST"
    "message": "longer error description",
    "link": "An documentation url for error details and solutions"
  }
}
```

## 常用状态码

| 状态码 | 名称                     | 描述                                                     |
| ------ | ------------------------ | -------------------------------------------------------- |
| 200    | `OK`                     | 请求成功。一般用于 GET 与 POST 请求                      |
| 201    | `Created`                | 已创建。成功请求并创建了新的资源                         |
| 204    | `No Content`             | 无内容。服务器成功处理，但未返回内容                     |
| 301    | `Moved Permanently`      | 请求的资源已被永久的移动到新 URI                         |
| 302    | `Found`                  | 请求的资源被临时的移动到新 URI                           |
| 400    | `Bad Request`            | 客户端请求的语法错误，服务器无法理解                     |
| 401    | `Unauthorized`           | 请求要求用户的身份认证                                   |
| 403    | `Forbidden`              | 服务器理解请求客户端的请求，但是拒绝执行此请求           |
| 404    | `Not Found`              | 服务器无法根据客户端的请求找到资源                       |
| 405    | `Method Not Allowed`     | 客户端请求中的方法被禁止                                 |
| 408    | `Request Timeout`        | 服务器等待客户端发送的请求时间过长，超时                 |
| 409    | `Conflict`               | 服务器处理请求时发生了冲突                               |
| 411    | `Length Required`        | 服务器无法处理客户端发送的不带 Content-Length 的请求信息 |
| 414    | `URI Too Long`           | 请求的 URI 过长（URI 通常为网址），服务器无法处理        |
| 415    | `Unsupported Media Type` | 服务器无法处理请求附带的媒体格式                         |
| 429    | `Too Many Requests`      | 用户发送了过多的请求(请求频率限制)                       |
| 500    | `Internal Server Error`  | 服务器内部错误，无法完成请求                             |
| 502    | `Bad Gateway`            | 服务器从远端服务器接收到了一个无效的请求                 |
| 503    | `Service Unavailable`    | 服务器暂时的无法处理客户端的请求                         |
| 504    | `Gateway Timeout`        | 充当网关或代理的服务器，未及时从远端服务器获取请求       |

## 其他考虑事项

- 安全
  - HTTPS: 必须全程使用 HTTPS
  - 访问控制
    - 认证
    - JWT
    - API Key
  - 用户权限
  - 输入验证
    - 长度、范围、格式、类型
    - 大小限制
  - 跨域访问
    - 公开 API 必须包含跨域访问头并允许任意来源 `*`
- 分页
- 监控
  - `/heath`: `200 OK` or `503 Service Unavailable`, 用于负载均衡及服务发现
  - `/version`: 版本
  - `/status`: `200 OK` or `500 Internal Server Error`
  - `/metrics`: 持续运行时间(秒), 平均响应时间，500 错误个数
