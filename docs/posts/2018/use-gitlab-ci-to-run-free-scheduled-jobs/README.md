---
title: "Use GitLab-CI to run free scheduled jobs"
date: 2018-07-23
description: "Use GitLab-CI to run free scheduled jobs"
---

# Use GitLab-CI to run free scheduled jobs

In this topic, I'll introduce how to run scheduled job with GitLab-CI, without the need to have a server running cron job or other application.

GitLab-CI is a continuous integration/deployment tool, it will trigger some scripts (such as build, test, deployment) when there is new deployment or defined interval. GitLab-CI has a free quota of 2,000 minutes running time, which is 1 hour everyday.

If you prefer GitHub than GitLab, Travis CI also offers similar tool for free.

GitLab-CI 和 Travis CI都支持定时执行脚本，但是GitLab-CI最多可以支持每小时运行一次，而Travis只支持最多每天运行一次。
GitLab-CI and Travis CI both support scheduled jobs, however, GitLab-CI supports as often as every hour, while Travis supports as often as every day.

So, why we need to run scheduled job? Here are the use cases:

1. I need a job to monitor Bitcoin price, when the price is higher or lower than some price, it will notify me to make transaction
1. I need a job to monitor price of a product, when it's lower than a certain price, it will notify me to make order
1. I need a job to keep Heroku app up and running (Prevent it to sleep)

First, create a `.gitlab-ci.yml` file in your repo

```yml
test:
  script:
    - bash scripts/script_a.sh
```

This file defined a task called `test`, and specified it to run `script_a.sh` file under `scripts` folder with bash

Now, let's create the `script_a.sh` file under `scripts` folder:

```sh
#!/bin/sh
curl curl http://ip-api.com/json
```

> Note: job name, script file, script file folder can all be changed with your own need.

Upload the repo including `.gitlab-ci.yml` to GitLab, it will trigger the job automatically, and you can go to `CI/CD - Jobs` on the repo admin.

You can set schedule in `CI/CD - Schedules` section. It provides options as every day, every week, every month, or customize like cron interval. You can go to https://crontab.guru to test out cron interval syntax. Technically you can set it to every minute, however, GitLab is only able to run it every hour.

Now, the job will only run based on your schedule settings.

If you go to `CI/CD - Jobs` to check logs, you will find something like this:

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