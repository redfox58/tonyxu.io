---
title: Use Firebase Cloud Function to Count Website Visitors
date: 2018-08-07
description: It's getting popular to use Firebase hosting to host static website, however, you might not know you can still have server-side code hosted in Firebase for your static website, and that is the Firebase Cloud Function. Once of the case you might want to use the Cloud Function is to write something to Firebase database, for example, a hit counter. In this topic, I'll show you how to use Firebase Cloud Function and Firebase Realtime Database to count website visitor.
lang: en-US
type: post
---

# Use Firebase Cloud Function to Count Website Visitors

It's getting popular to use Firebase hosting to host static website, however, you might not know you can still have server-side code hosted in Firebase for your static website, and that is the Firebase Cloud Function. Once of the case you might want to use the Cloud Function is to write something to Firebase database, for example, a hit counter. In this topic, I'll show you how to use Firebase Cloud Function and Firebase Realtime Database to count website visitor.

## Overview

Here are the steps we will be doing to build this feature:

1. Deploy static page to Firebase Cloud Hosting
2. Create Firebase Cloud Function to update count number in Firebase Realtime Database
3. Add Get request in static page to trigger Firebase Cloud Function

## Deploy static page to Firebase Cloud Hosting

Firebase Cloud Hosting is a great place to host your static pages. It's easier to setup than GitHub Pages, and you get a set of functionalities that designed for web developers. Once you have your static pages ready, do `firebase deploy` and it will be deployed to the cloud and accessible from anywhere.

Refer to [Quickstart](https://firebase.google.com/docs/hosting/quickstart) from documentation to get started with Firebase Cloud Hosting.

## Create Firebase Cloud Function

Now, let's make use of Firebase Cloud Function to host some server-side logic to count website hit. In this piece of code, we will connect Cloud Function with Firebase Realtime Database so that the function can update hit counter stored in the database.

1. Initialize Cloud Function
    ```sh
    firebase init functions
    ```
2. Create `hit_counter` node in Firebase Realtime Database and set value to 0
    ```json
    {
        "hit_counter": 0
    }
    ```
3. Edit Cloud Function Code (`Index.js`)
    ```js
    const functions = require("firebase-functions");
    const admin = require("firebase-admin");
    admin.initializeApp();
    
    exports.hitCounter = functions.https.onRequest((req, res) => {
        const counterRef = admin.database().ref("/hit_counter");
        return counterRef
            .transaction(current => {
            return (current || 0) + 1;
            })
      });
    ```
4. Deploy Cloud Function
    ```sh
    firebase deploy
    ```

Now you should have a Cloud Function URL which you can make a request to. Try access it in a browser and see if the counter number in Realtime Database get incremented by 1.

## Add Get request to Cloud Function in static page

Now, in order to trigger the Cloud Function to update counter in Realtime Database, you need to make the static webpage to make a request to the Cloud Function.

You can do it like below:

```html
<html>
    <script>
    fetch("//<Region>-<YOUR-APP-ID>.cloudfunctions.net/hitCounter")
    </script>
</html>
```

This will fire a GET request to the Cloud Function endpoint, and trigger the Cloud Function code to update the counter number in Realtime Database.

Congratulations, your static page now has server-side code that helps you track the hit count. The next step for you could be retrieve the counter in static page and display the count number.