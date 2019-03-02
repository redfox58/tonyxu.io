---
title: Cloud Computing Explorations
date: 2018-07-11
---

Talking about my experience with cloud computing, the first experience is when I'm in 11th grade, deploying a proxy application in Google App Engine to get over the Great Fire Wall in China. Later when I'm a freshman in college, I built a website for fun and subscribed shared hosting online. However, I found out that shared hosting has too many restrictions such as you have no control over softwares, so I switched to VPS. I also deployed some instances in AWS for the course project when I'm studying in University of Missouri for master's. After graduation, I tried Heroku as well, for running small demo apps. Although I'm not expert in cloud computing, I had some experiences and knows something about it.

Overall, for regular developers like me, the trend is clear. If you just need to run some simple back-end application, in beginning, you need to have physical server, then subscribe to virtual server online, then AWS instance, and now it's even serverless for back-end application. In short, you only need to care about the code and much less about the environment.

I have a flask application running in Google App Engine, I'm using it simply because its standard edition is free (with enough quota). This flask application used to server both front-end and back-end of [https://tonyxu.io](https://tonyxu.io), but now I have migrated the front-end over to firebase hosting and I also plan to migrate the back-end over to firebase cloud functions. I'll share more details when it comes.