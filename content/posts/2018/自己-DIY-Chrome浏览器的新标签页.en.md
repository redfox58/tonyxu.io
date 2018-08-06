---
title: "DIY Chrome New Tab Page"
date: 2018-08-03T20:26:08-07:00
draft: false
categories: [技术]
tags: [Chrome,定制]
slug: "diy-your-chrome-new-tab-page"
aliases: [/posts/自己-diy-chrome浏览器的新标签页/]
---

Have you thought about customizing Chrome new tab page? If so, you must have tried the extensions in Chrome web store to customize your new tab page. If you are not satisfied with any of them, you have the option to build your own new tab page that meets all your expectations.

<!--more-->

## Chrome extension file structure

```
└── chrome-extention //你的Chrome拓展项目目录
    ├── manifest.json //Chrome拓展描述文件
    └── newTab.html //Chrome拓展新标签页页面文件
```

## Create Chrome extension manifest

Create a folder as the project folder for Chrome extension. Create `manifest.json` as below in the folder:

```json
{
    "name": "Chrome extension name here.",
    "version": "1.0",
    "manifest_version": 2,
    "description": "Chrome extension description written here.",
    "chrome_url_overrides" : {
        "newtab": "newTab.html"
    },
    "content_security_policy": "script-src 'self'; object-src 'self'"
}
```

## Create new tab page

In the project folder, create `newTab.html` file as your new new tab page. If you are not familiar with HTML/CSS, you can follow me and build the new tab page like below:

![20180803-1](/images/20180803-1.png)

`newTab.html` source code:

```html
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>New Tab</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css">
    </head>
    <body>
        <section class="section">
            <div class="container">
                <h1 class="title">
                    Hello Tony!
                </h1>
                <br>
                <p class="subtitle">
                    Resources
                </p>
                <div class="columns">
                    <div class="column">
                        <div class="menu">
                            <p class="heading">Company Resource</p>
                            <ul class="menu-list">
                                <li>
                                    <a href="">All Hands</a>
                                </li>
                                <li>
                                    <a href="">Helpin</a>
                                </li>
                                <li>
                                    <a href="">Book Room</a>
                                </li>
                                <li>
                                    <a href="">Inlife</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="column">
                        <div class="menu">
                            <p class="heading">Tech Resource</p>
                            <ul class="menu-list">
                                <li>
                                    <a href="">Fast Access</a>
                                </li>
                                <li>
                                    <a href="">Git</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="column">
                        <div class="menu">
                            <p class="heading">Team Resource</p>
                            <ul class="menu-list">
                                <li>
                                    <a href="">Sprint Board</a>
                                </li>
                                <li>
                                    <a href="">Zendesk</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="column">
                        <div class="menu">
                            <p class="heading">Docs</p>
                            <ul class="menu-list">
                                <li>
                                    <a href="https://docs.google.com/document">Google Docs</a>
                                </li>
                                <li>
                                    <a href="https://docs.google.com/spreadsheets">Google Sheets</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </body>
</html>
```

You can just use my code, but remember to replace my links with your favorite links.

## Load your extension in Chrome

Open Chrome extension management([chrome://extensions](chrome://extensions)), Enable `Developer mode`, load your extension in `LOAD UNPACKED`

![load_extension](https://developer.chrome.com/static/images/get_started/load_extension.png)

Congratulations, you now have your own new tab page.

## More

If you are familiar with HTML/CSS and want to build more fancy stuff, such as:

- Read time weather (If your local weather changes often): [https://weatherwidget.io](https://weatherwidget.io)
- World clock (If you need to have meeting with people from other timezone): [https://time.is/widgets](https://time.is/widgets)
- Google Calendar (If you want to monitor your daily schedule): [https://support.google.com/calendar/answer/41207?hl=en](https://support.google.com/calendar/answer/41207?hl=en)

## Reference

- [Getting Started Tutorial](https://developer.chrome.com/extensions/getstarted)
- [Override Pages](https://developer.chrome.com/extensions/override)