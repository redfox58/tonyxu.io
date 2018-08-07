---
title: "REST API Design Interview Preparation"
date: 2018-07-03T22:00:00
draft: false
categories: [Career]
tags: [interview,rest-api]
aliases: [/posts/rest-api-设计面试/,/posts/rest-api-design/]
slug: "rest-api-design-interview-preparation/"
---

REST API has become a very popular concept for designing back-end service interface. Most platforms provide REST API as unified interface for web/native applications. If you are going to interview for a job that will require REST API knowledge, you are encouraged to be well prepared for it. Below is my own summary for REST API interview. Hopefully it's helpful for you as well.

<!--more-->

## Principle

- Self-describing
- Simple
- Safe

## Preparation

- (**WHO**) Identify users
  - Internal or External
  - Roles (Developer, Admin, Customer, Support...)
- (**HOW**) Identify scenario, use cases
- (**WHAT**) What functionality or resource will be exposed by API
- **Clarify and confirm above and continue to API design**

Note:

- Don't guess
- Don't make things up

## Design Flow

- Determine what types of resources an API provides
- Determine the relationships between resources
- Decide the resource name schemes based on types and relationships
- Decide the resource schemas
- Attach minimum set of methods to resources

## API Design

Design how to expose the functionality and resource

- End point

  - https://`api_domain`/`version`/`collection`/
  - https://`api_domain`/`version`/`collection`/`resource`/
  - https://`api_domain`: Can respond information such as API version, list of top level collections, list of singleton resources
  - Use `Noun` rather than `Verbs`

- Method

  - `GET`/`POST`/`PATCH`/`PUT`/`DELETE`

- Request Header

  - `Authorization`: Bearer `access_token`
  - `Accept`: To request for response in a specified content-type
  - `Content-Type`: Content type for the request body
  - ...

- Request Parameters

  - Filtering: `type`=news,photo&`days`=sunday
  - Sorting: `sort`=create_time,-creator
  - Paging: `offset`=100&`limit`=100
  - Search/Query: `q`=AI
  - Access Token: `access_token`=

- Response Status Codes

  - Standard HTTP status codes should be used

- Response Header

  - `Content-Type`
  - `ETag`
  - ...

- Response Body (in JSON format)

- Error Handling

## Example (Gmail)

### Resource Model Examples

- API service: `gmail.googleapis.com`
- A collection of users: `users/*`. Each user has the following resources.
  - A collection of messages: `users/*/messages/*`.
  - A collection of threads: `users/*/threads/*`.
  - A collection of labels: `users/*/labels/*`.
  - A collection of change history: `users/*/history/*`.
  - A resource representing the user profile: `users/*/profile`.
  - A resource representing user settings: `users/*/settings`.

### Response

#### Success Response

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

#### Error Response

```json
{
  "error": {
    "code": "ERROR_CODE", // "INVALID-REQUEST"
    "message": "longer error description",
    "link": "An documentation url for error details and solutions"
  }
}
```

## Most-used HTTP Status Code

| Code | Name                     | Description                                                           |
| ---- | ------------------------ | --------------------------------------------------------------------- |
| 200  | `OK`                     | The request has succeeded                                             |
| 201  | `Created`                | The request has succeeded and a new resource has been created         |
| 204  | `No Content`             | There is no content to send for this request                          |
| 301  | `Moved Permanently`      | the URI of the requested resource has been changed permanently        |
| 302  | `Found`                  | The URI of requested resource has been changed temporarily            |
| 400  | `Bad Request`            | The server could not understand the request due to invalid syntax     |
| 401  | `Unauthorized`           | The client must authenticate itself to get the requested response     |
| 403  | `Forbidden`              | The client does not have access rights to the content                 |
| 404  | `Not Found`              | The server can not find requested resource                            |
| 405  | `Method Not Allowed`     | The request method has been disabled and cannot be used               |
| 408  | `Request Timeout`        | The server would like to shut down this unused connection             |
| 409  | `Conflict`               | The request conflicts with the current state of the server            |
| 411  | `Length Required`        | Content-Length header field is not defined and the server requires it |
| 414  | `URI Too Long`           | The URI is longer than the server is willing to interpret             |
| 415  | `Unsupported Media Type` | The media format of the requested data is not supported               |
| 429  | `Too Many Requests`      | The user has sent too many requests ("rate limiting")                 |
| 500  | `Internal Server Error`  | The server has encountered a situation it doesn't know how to handle  |
| 502  | `Bad Gateway`            | The server got an invalid response                                    |
| 503  | `Service Unavailable`    | The server is not ready to handle the request                         |
| 504  | `Gateway Timeout`        | The server is acting as a gateway and cannot get a response in time   |

## What else

- Security
  - HTTPS: HTTPS everywhere
  - Access Control
    - Authentication
    - JWT
    - API Key
  - User Role
  - Input Validation
    - Length, Range, Format, Type
    - Define request size limit
  - CORS
    - Support CORS headers for all public facing APIs and allow origin of `*`
- Pagination
- Monitoring
  - `/heath`: `200 OK` or `503 Service Unavailable`, for load balancers and service discovery solutions
  - `/version`: Version
  - `/status`: `200 OK` or `500 Internal Server Error`
  - `/metrics`: Uptime in seconds, average response time, number of 500 errors
