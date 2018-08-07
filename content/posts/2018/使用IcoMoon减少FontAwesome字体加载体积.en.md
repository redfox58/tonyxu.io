---
title: "Use IcoMoon to reduce 98% FontAwesome load size"
date: 2018-07-22T19:38:46-07:00
draft: false
categories: [technology]
tags: [FontAwesome,optimization]
slug: "use-icomoon-to-reduce-fontawesome-size"
---

[FontAwesome](https://fontawesome.com) is an awesome font library. With fontawesome, it will be super easy to inject icon into your html page. Although the default method is very simple, it has the drawback of taking too much load by loading full set of icons.

In this article, I'll share how I reduce the fontawesome library size by using [IcoMoon](https://icomoon.io) to generate icon library that only has what I need.

<!--more-->

## FontAwesome Default Usage

1. Include FontAwesome Icon Library:

    ```html
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.1/css/all.css">
    ```

2. Use HTML tag to inject your icon:

    ```html
    <i class="fas fa-home"></i>
    ```

## IcoMoon Approach

1. Visit [IcoMoon](https://icomoon.io/app/#/select) and select the icons you need, then click `Generate Font`
   ![](https://s3-us-west-1.amazonaws.com/tonyxu-img/2018_07_22_20_13_05.png)

2. Download the assets
   ![](https://s3-us-west-1.amazonaws.com/tonyxu-img/2018_07_22_20_14_27.png)

3. Copy `style.css` and `fonts` folder in the assets to your website directory and include it in the HTML page header (Remove previous fontawesome assets)

4. Mouse over to the icon in demo page, and click "Get Code"
   ![](https://s3-us-west-1.amazonaws.com/tonyxu-img/2018_07_22_21_11_31.png)

5. Copy the code to your webpage where you want to show the icon
   ![](https://s3-us-west-1.amazonaws.com/tonyxu-img/2018_07_22_21_13_09.png)

Congratulations! Now your website doesn't have to load the complete version of icon library, but only load what you need.

## Comparison

Below is the comparison between the change

### With IcoMoon

![](https://s3-us-west-1.amazonaws.com/tonyxu-img/2018_07_22_22_15_58.png)

### FontAwesome Default

![](https://s3-us-west-1.amazonaws.com/tonyxu-img/2018_07_22_22_05_23.png)

### Summary

The size reduced: `(132 - 2.4) / 132 = 0.98%`, and the overall size dropped from 157KB to 38.7KB，pretty amazing!