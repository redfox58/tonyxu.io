---
title: "用GitLab-CI免费运行定时任务"
date: 2018-07-23T13:30:58-07:00
draft: false
categories: [技术]
tags: [定时任务,GitLab,持续集成]
slug: "use-gitlab-ci-to-run-free-scheduled-jobs"
aliases: [/zh/posts/用gitlab-ci免费运行定时任务/]
---

本文介绍我是如何使用GitLab-CI免费地运行一些需要定时执行的脚本，而不需要在本地/服务器上使用cron job或者一直跑一个后台程序运行中间sleep。

<!--more-->

GitLab-CI是GitLab提供的持续集成/部署的工具。当有新代码提交或者其他条件触发时，它就会自动运行脚本执行编译、测试、部署等活动。GitLab-CI每个月提供2,000分钟的免费运行时间，平均一天可以大概跑一个小时。

如果你不用GitLab而是用GitHub的话，Travis CI也免费提供类似功能。

GitLab-CI 和 Travis CI都支持定时执行脚本，但是GitLab-CI最多可以支持每小时运行一次，而Travis只支持最多每天运行一次。

那么什么情况下你会需要定试运行脚本呢？比如:

1. 我需要一个脚本每隔一段时间去查询当前比特币价格，当高于指定价格时卖出或者提醒我
2. 我需要一个脚本每隔一段时间查询一个商品的价格，当低于制定价格时提醒我购买
3. 我需要一个脚本每隔一段时间访问一次某个网址（例如为了保持Heroku应用处于激活状态)

下面为了方便起见，我就以情况3举例。

首先在你的repo目录创建一个`.gitlab-ci.yml`文件:

```yml
test:
  script:
    - bash scripts/script_a.sh
```

上述示例定义了一个`test`任务，并指定了用bash执行`scripts`目录下的`script_a.sh`脚本文件

接下来就在`scripts`目录下创建一个`script_a.sh`文件:

```sh
#!/bin/sh
curl curl http://ip-api.com/json
```

> 注: job名，脚本目录，脚本名，脚本内容都可以根据具体需要修改，这里只是举例。

将包含`.gitlab-ci.yml`和脚本的代码上传至GitLab，即会自动触发任务，去GitLab管理界面左侧的`CI/CD - Jobs`可以查看任务状态。

进入`CI/CD - Schedules`可以给任务设置定时，默认提供每天/每周/每月，或者自定义。自定义的设置语法格式和cron一样，不熟悉的可以去 https://crontab.guru 调试。假如你设置`* * * * 1-5`就是每周一到周五每分钟都运行，但是GitLab貌似有限制，导致实际上只会每周一到周五每小时执行一次。

接下来你的脚本就会按照你设置的时间定时执行了。

如果你去`CI/CD - Jobs`查看运行日志，可以看到类似如下日志:

```shell
Running with gitlab-runner 11.1.0 (081978aa)
  on docker-auto-scale 0277ea0f
Using Docker executor with image ruby:2.5 ...
Pulling docker image ruby:2.5 ...
Using docker image sha256:1d8640b852eb145393da754ec38a4153edcf473a249448b7a271cea5f06016fa for ruby:2.5 ...
Running on runner-0277ea0f-project-7572283-concurrent-0 via runner-0277ea0f-srm-1532409609-e458cf74...
Cloning repository...
Cloning into '/builds/example/scheduled-jobs'...
Checking out 67e03220 as master...
Skipping Git submodules setup
$ bash scripts/script_a.sh
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
100   463  100   463    0     0    717      0 --:--:--
{"as":"AS15169 Google LLC","city":"Mountain View","country":"United States","countryCode":"US","isp":"Googlebot","lat":37.4192,"lon":-122.0574,"org":"Googlebot","query":"66.249.64.149","region":"CA","regionName":"California","status":"success","timezone":"America/Los_Angeles","zip":"94043"}
 --:--:-- --:--:--   716
Job succeeded
```