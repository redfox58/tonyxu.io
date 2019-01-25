---
title: Write script to scrap house rent price and send to your phone
date: 2018-07-28
description: House rental is a critical thing if you are living in the silicon valley. I'm planning to move to a new apartment, but the price changes often. I want to monitor the price and book it when it drops. In order to do that, I wrote a script to monitor the house rental price and push the result to my phone like below.
lang: en-US
type: post
---

# Write script to scrap house rent price and send to your phone

House rental is a critical thing if you are living in the silicon valley. I'm planning to move to a new apartment, but the price changes often. I want to monitor the price and book it when it drops. In order to do that, I wrote a script to monitor the house rental price and push the result to my phone like below.

## Get Started

The apartment I'm looking at is a professional rental apartment, to not disclose the place I will be living in, I'm using another one for example.

The official website of the apartment is: 

https://www.avaloncommunities.com/california/mountain-view-apartments/avalon-mountain-view/floor-plans

The pricing section:

![](./2018_07_28_22_50_27.png)

## Analysis

To monitor the price, the script will need to:

1. Get the price, size, move-in-date, and other interesting information
2. Compose to a message and send to me(I personally use Telegram Bot, refer to:[Use Telegram and Flask to build personal notification server](/posts/2018/use-telegram-and-flask-to-build-notification-server/))

## Implementation

Originally, I plan to use spider to scrap html text and extract information, however, I discovered that the websiste use public REST API as interface for front-end client. To make sure the API works without authentication/authorization, I copied the GET request to an anonymous window and it works fine. So this API can be used to get all information I need.

Chrome Inspector:

![](./2018_07_28_23_02_23.png)

After further research, I found that this API even support additional parameters to set minimum price, maximum price, and move-in date, etc.

Now it's time to implement, as I have a Flask app running on Google App Engine, I will be writing Python code to do the job. The job will be triggered by a HTTP request to the Flask app. You can use GitLab to make the HTTP call to the Flask app as introduced here [Use GitLab-CI to run free scheduled jobs](/posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/)

## Code

### Flask App

```python
@app.route('/housing', methods=['GET'])
def housing():
    houseResponse = json.loads(urlfetch.fetch(url='https://api.avalonbay.com/json/reply/ApartmentSearch?communityCode=CA049&min=2000&max=3000&desiredMoveInDate=2018-09-01T07:00:00.000Z').content)
    availableFloorPlans = houseResponse["results"]["availableFloorPlanTypes"][0]["availableFloorPlans"]
    responseText = "*House Quotes:*%0A"
    for availableFloorPlan in availableFloorPlans:
        for apartment in availableFloorPlan["finishPackages"][0]["apartments"]:
            responseText += "Size:" + str(apartment["apartmentSize"]) + " Price:" + str(apartment["pricing"]["effectiveRent"]) + " Floor:" + str(apartment["floor"]) + " Date:" + time.strftime('%Y-%m-%d', time.localtime(float(filter(str.isdigit, str(apartment["pricing"]["availableDate"])))/1000)) + "%0A"
    requestUrl = config.telegramWebHookURI + "/sendMessage?parse_mode=Markdown&chat_id=123456789" + "&text=" + responseText
    urlfetch.fetch(url=requestUrl).content
    return responseText
```

### GitLab-CI

GitLab-CI Configuration (gitlab-ci.yml):


```yaml
test:
  script:
    - bash scripts/get_quotes.sh
```

GitLab-CI Script (get_quotes.sh):

```sh
#!/bin/sh
curl https://api.tonyxu.io/housing
```

## Demo

<img width="50%" style="min-width:300px" src="./2018_07_28_23_35_59.png">