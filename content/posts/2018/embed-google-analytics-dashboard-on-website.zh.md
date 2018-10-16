---
title: "嵌入Google Analytics图表到你的网站"
date: 2018-10-15T21:58:13-07:00
draft: false
categories: [技术]
tags: [google-analytics]
slug: "embed-google-analytics-dashboard-on-website"
---

如果你正在使用Google Anlaytics工具来分析网站访问数据，你可能会想将它提供的各种酷炫图表嵌入到网站页面以供用户浏览。尽管Google Analytics并不提供简单的iframe方式来嵌入图表，它还是提供了[Google Analytics Embed API](https://developers.google.com/analytics/devguides/reporting/embed/v1/)这种需要稍微多一点技术基础的方式让你能够嵌入它们的图表。我会在这篇文章里详细地告诉你该如何一步一步实现一个和我的网站提供的一样的Google Analytics图表: https://tonyxu.io/analytics。

<!--more-->

### 1. 在[Google Developers Console](https://console.developers.google.com/)创建云项目

_(如果你已经有项目了请忽略这一步)_

### 2. 创建服务账号(service account)并下载`.json`密钥文件

![create-service-account-1](https://s3-us-west-1.amazonaws.com/tonyxu-img/Credentials_-_api-tonyxu-io_-_Google_Cloud_Platform_2018-10-15_22-39-04.png)

![create-service-account-2](https://s3-us-west-1.amazonaws.com/tonyxu-img/2018_10_15_22_43_12.png)

### 3. 启用Google Analytics API权限

![enable-analytics-api](https://s3-us-west-1.amazonaws.com/tonyxu-img/Overview__APIs__Services__api-tonyxu-io__Google_Cloud_Platform_2018-10-15_22-45-05.png)

### 4. 允许云服务账号(service account)访问Google Analytics数据

获取云服务账号邮箱地址

![obtain-service-account-email](https://s3-us-west-1.amazonaws.com/tonyxu-img/IAM__IAM__admin__api-tonyxu-io__Google_Cloud_Platform_2018-10-15_22-48-01.png)

添加为Google Analytics只读用户

![add-service-account-email-to-analytics-account](https://s3-us-west-1.amazonaws.com/tonyxu-img/Analytics_2018-10-15_22-50-34.png)

### 5. 在服务器生成访问令牌(access token)

我们在服务器生成访问令牌并返回给前端，因此用户不需要在浏览器登录Google获取访问令牌。

#### Node.js服务器部分实现

Install Google API Client Library

```bash
npm install --save googleapis
```

Import service account key

```javascript
let privateKey = require("./google_key.json");
```

Return Google access token to client

```javascript
// https://your-domain/accessTokens 将会返回Google访问令牌给前段
app.get("/accessTokens", (req,res) => {

  let {google} = require('googleapis');
  let privateKey = require("./google_key.json");

  // JWT认证
  let jwtClient = new google.auth.JWT(
    privateKey.client_email,
    null,
    privateKey.private_key,
    'https://www.googleapis.com/auth/analytics.readonly');
  
    jwtClient.authorize(function (err, token) {
    if (err) {
      console.log(err);
      return res.status(500).send('Error');
    } else {
      return res.json({"google_access_token":token.access_token});
    }
  });
})
```

#### Python服务器部分实现

安装Google API Client Library

```bash
sudo pip install --upgrade google-api-python-client
```

返回Google访问令牌到前端

```python
# service-account.py

from oauth2client.service_account import ServiceAccountCredentials

# 获取Google Analytics数据权限
SCOPE = 'https://www.googleapis.com/auth/analytics.readonly'

# json密钥文件的路径
KEY_FILEPATH = 'path/to/json-key.json'

# 定义一个方法从服务账号对象获取访问令牌(access token)
def get_access_token():
  return ServiceAccountCredentials.from_json_keyfile_name(
      KEY_FILEPATH, SCOPE).get_access_token().access_token
```

### 6. 加载Google Analytics Embed API库

```html
<script>
(function(w,d,s,g,js,fs){
  g=w.gapi||(w.gapi={});g.analytics={q:[],ready:function(f){this.q.push(f);}};
  js=d.createElement(s);fs=d.getElementsByTagName(s)[0];
  js.src='https://apis.google.com/js/platform.js';
  fs.parentNode.insertBefore(js,fs);js.onload=function(){g.load('analytics');};
}(window,document,'script'));
</script>
```

### 7. 添加HTML容器用来加载图表

```html
<div id="chart-1-container"></div>
<div id="chart-2-container"></div>
```

### 8. 获取Google访问令牌并加载图表

```html
<script>

gapi.analytics.ready(function () {

  fetch('/api/accessTokens')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.google_access_token)
      gapi.analytics.auth.authorize({
        'serverAuth': {
          'access_token': data.google_access_token
        }
      });
      dataChart1.execute();
      dataChart2.execute();
    });

  var dataChart1 = new gapi.analytics.googleCharts.DataChart({
    query: {
      'ids': 'ga:00000000', // <-- 替换为你的统计报告ID
      'start-date': '90daysAgo',
      'end-date': 'today',
      'metrics': 'ga:sessions,ga:users',
      'dimensions': 'ga:date'
    },
    chart: {
      'container': 'chart-1-container',
      'type': 'LINE',
      'options': {
        'width': '100%'
      }
    }
  });

  var dataChart2 = new gapi.analytics.googleCharts.DataChart({
    query: {
      'ids': 'ga:00000000', // <-- 替换为你的统计报告ID
      'start-date': '90daysAgo',
      'end-date': 'today',
      'metrics': 'ga:pageviews,ga:uniquePageviews,ga:timeOnPage,ga:bounces,ga:entrances,ga:exits',
      'sort': '-ga:pageviews',
      'dimensions': 'ga:pagePath',
      'max-results': 10
    },
    chart: {
      'container': 'chart-2-container',
      'type': 'PIE',
      'options': {
        'width': '100%',
        'pieHole': 0.4,
      }
    }
  });

});
</script>
```

参考资料:

- [Google Analytics Embed API - Server-side Authorization](https://ga-dev-tools.appspot.com/embed-api/server-side-authorization/)
- [Google Analytics Embed API - Built-in Components Reference](https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference)
