---
title: Use Telegram and Flask to build personal notification server
date: 2018-07-12
description: Use Telegram and Flask to build personal notification server
lang: en-US
type: post
---

# Use Telegram and Flask to build personal notification server

Imagine if you are in these situations:

1. I want to notify my girl friend whenver I leave company or arrive home
2. I want to get notified when there is new visit to my website
3. I want get notified when a scraper or job finished

The solution to above situations is a mechanism to send message to your phone programmatically and here is my solution:

Build a Flask app to receive GET or POST request, and then compose different messages according to event type and send to some chat channel such as Telegram or Slack. This Flask app can be running in Google App Engine for free, and use your custom domain.

The steps to build this Flask app can be found below:

1. Follow Google App Engine tutorial to build a basic Flask app
2. Create a Telegram bot in: https://core.telegram.org/bots#3-how-do-i-create-a-bot
3. Talk with your bot and get the chat id: `https://api.telegram.org/bot$TOKEN/getUpdates`
4. Create a route handler in Flask app and make it be able to make GET request to send message like below: `https://api.telegram.org/bot$TOKEN/sendMessage?chat_id=12345&text=Hello+World`
5. Upload the Flask app to Google App Engine: `gcloud app deploy`

Now you have a Flask app to send you message whenever it gets a HTTP request. The message can be pre-defined or passed to it on the flight.

Back to the situations I talked about at the beginning, how this Flask app can solve the problems?

1. Install IFTTT app on your phone and allow it to monitor your location, create an action to make webhook request to your Flask endpoint whenever you leave a place or arrive a place.
2. Create a route in Flask app to receive website visit GET request, and then send a message with visitor information (e.g. origin IP) to your Telegram.
3. When a script/job finished, it can make a request to your Flask app endpoint and it can send you notification to notify you it's completed.

If you don't have additional logic, messages can be directly sent to Telegram channel without Flask app.

This is my Flask app, so for your reference:

https://github.com/tonyxu-io/my-api