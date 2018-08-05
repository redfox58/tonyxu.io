---
title: "REST API Design Interview Preparation"
date: 2018-07-03T22:00:00
draft: false
categories: [Career]
tags: [interview,rest-api]
aliases: [/posts/rest-api-设计面试/]
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
    - Use `Noun` rather than `Verbs`
    - Can respond information such as API version list of top level collections, list of singleton resources

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

## Examples

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

Error Message Examples

| HTTP | RPC                   | Example Error Message                                        |
| ---- | --------------------- | ------------------------------------------------------------ |
| 400  | `INVALID_ARGUMENT`    | Request field x.y.z is xxx, expected one of [yyy, zzz].      |
| 400  | `FAILED_PRECONDITION` | Resource xxx is a non-empty directory, so it cannot be deleted. |
| 400  | `OUT_OF_RANGE`        | Parameter 'age' is out of range [0, 125].                    |
| 401  | `UNAUTHENTICATED`     | Invalid authentication credentials.                          |
| 403  | `PERMISSION_DENIED`   | Permission 'xxx' denied on file 'yyy'.                       |
| 404  | `NOT_FOUND`           | Resource 'xxx' not found.                                    |
| 409  | `ABORTED`             | Couldn’t acquire lock on resource ‘xxx’.                     |
| 409  | `ALREADY_EXISTS`      | Resource 'xxx' already exists.                               |
| 429  | `RESOURCE_EXHAUSTED`  | Quota limit 'xxx' exceeded.                                  |
| 499  | `CANCELLED`           | Request cancelled by the client.                             |
| 500  | `DATA_LOSS`           | See note.                                                    |
| 500  | `UNKNOWN`             | See note.                                                    |
| 500  | `INTERNAL`            | See note.                                                    |
| 501  | `NOT_IMPLEMENTED`     | Method 'xxx' not implemented.                                |
| 503  | `UNAVAILABLE`         | See note.                                                    |
| 504  | `DEADLINE_EXCEEDED`   | See note.                                                    |

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