---
title: My Productivity Tools and Development Setup Recommended to Software Engineers
description: My Productivity Tools and Development Setup Recommended to Software Engineers
date: 2019-02-01
lang: en-US
type: post
---

# My Productivity Tools and Development Setup Recommended to Software Engineers

## Hardware

### Laptop

👉 [Apple MacBook Pro (13-inch, 2017, Four Thunderbolt 3 Ports)](https://support.apple.com/kb/SP755?locale=en_US)
- 13-inch
- 2017 Year
- 3.5 GHz Intel Core i7 Processor
- 16 GB Memory
- 256 GB Storage

My MacBook Pro (company provided) is the top 1 productivity tool for me. I use it to code, write blogs, and everything.

### Mobile Phone

👉 [Apple iPhone X](https://support.apple.com/kb/SP770?locale=en_US)

I'm using iPhone X as my mobile phone. I have been an iPhone person ever since 2013 from an iPhone 4. Before iPhone, I have been playing with Android phones (Nexus S) for a while. The iOS ecosystem, better notification system and app quality are the key reasons I stick with iOS devices.

### Desktop

I don't actually have a desktop machine. Since my employer has $150 Azure credits for employees so I just created a [Windows VM in Azure](https://azure.microsoft.com/en-us/pricing/details/virtual-machines/windows/) to use as a Windows desktop machine. I used the VM to install/test any software that is only available for Windows, for example, [Power BI Desktop](https://powerbi.microsoft.com/en-us/desktop/).

### Work Station (where I work)

👉 [ThinkVision P27h](https://www.lenovo.com/us/en/accessories-and-monitors/monitors/professional/P27h-10-27inch-Monitor-HDMI/p/61AFGAR1US) (Dual-monitors)

Provided for me to use at work. I connect my laptop to two external monitors and I usually have my laptop open slack window, one external monitor open Chrome browser, and one monitor open Outlook/VS Code. It also supports USB Type-C so you can get display output and charging with just one cable.

👉 [Herman Miller - Renew Sit-to-Stand Desk Rectangular](http://store.hermanmiller.com/office/desks-%7C-sit-to-stand-%7C-tables/renew-sit-to-stand-desk/7090.html?lang=en_US)

Provided for me to use at work. Although it's cool and encourages you to stand to work to keep healthy, I felt more comfortable sitting behind it.

👉 [Apple Magic Keyboard with Numeric Keypad](https://support.apple.com/kb/SP763?locale=en_US)

The external keyboard allows me to put my laptop farther from me and more close to other monitors so the three screens can be almost in the same surface.

👉 [Apple Magic Trackpad 2](https://support.apple.com/kb/SP729?locale=en_US)

I'm really a fan of trackpad. I can never go back to the old time when I was using a mouse. When I'm using an external keyboard, I have to have an external trackpad as well since I can't get to the trackpad of the MacBook.

### Accessories

👉 [Apple AirPods](https://support.apple.com/kb/SP750?locale=en_US)

AirPods is my favorites accessory as it is really convenient and I often forget I was actually wearing them. Unlike wearing in-ear earphones when you can hardly hear others talking to you, you will definitely know if someone is trying to talk to you without patting you for attention.

👉 [Apple Watch (1st generation)](https://support.apple.com/kb/sp735?locale=en_US)

I have been using Apple Watch since 2014 when its first generation was released. Apple Watch is great for people like me who don't bother taking out iPhone from pocket to just read notifications. Apple Watch does this one job for me and does it well.

## Software

### macOS Apps

👇
- [Chrome](https://www.google.com/chrome/): It's the most popular browsers in the world. I use it for web related development. Great debugging experience.
- [Slack](https://www.slack.com): The most popular team collaboration app, great for developers. It integrates with almost all your development tools and services to streamline your development workflow and team collaboration experience.
- [VS Code](https://code.visualstudio.com/): I used to be a Sublime Text fan, but switch over to VS Code from 2016 just because it's active development/extension community. Refer to [VS Code Extensions](#vs-code-extensions) for what extensions I love.
- [Sketch](https://www.sketchapp.com/): Most popular web/app design software (macOS only). Very easy to create web/app design without professional design knowledge. I used it to design web/app prototypes and read design spec from designers.
- [GitHub Desktop](https://desktop.github.com/): An official desktop client for GitHub. I use it as an alternative for Git commands when I want to get visualized diffs.
- [Paw](https://paw.cloud/): An advanced REST API desktop client for macOS. I feel it much better compared with Postman client which is more of a Web app. Paw has macOS native UI, and more extensions for advanced need. I use it to troubleshoot REST API requests.
- [Microsoft Remote Desktop](https://itunes.apple.com/us/app/microsoft-remote-desktop-10/id1295203466): A Windows remote desktop client. I use it to connect to Azure Windows VM.
- [Alfred 3](https://www.alfredapp.com/): A shortcut tool. There are many great plugins that allow you to trigger automation from shortcut. I use it for searching, clipboard history, snippet, and uploading images from pasteboard.
- [Bear](https://bear.app/): A markdown note app. Element UI and smooth typing experience.
- [BlueJeans](www.bluejeans.com/‎)/[Zoom](www.zoom.us/‎)/[WebEx](www.webex.com/‎): Online meeting, to have video meeting with your team members without having to meet in person.
- [Charles](https://www.charlesproxy.com/): It's a web proxy that allows you to debug network traffic. I use it to inspect network requests made outside Chrome browser.
- [FileZilla](https://filezilla-project.org/): A FTP tool that help you upload/download files to/from your remote host through FTP protocol.
- [GIF Brewery 3](https://gfycat.com/gifbrewery): A GIF maker app for macOS. I use it to record screen as a GIF so that when I share it with others it's easier to be viewed compared with a video clip.
- [Magnet](http://magnet.crowdcafe.com/): A macOS window manager. I usually have multiple apps opened in multiple monitors, it's really helpful to use shortcut to move and resize apps between monitors.
- [Microsoft Office Word/Excel/Outlook/PowerPoint/Teams](https://www.office.com/): Classic office productivity suite provided by Microsoft.
- [Monosnap](https://monosnap.com/): A free advanced screenshot tool. You can make annotations with the screenshot and it has integration with cloud storage so you can get a sharable link immediately.
- [Reeder](http://reederapp.com): An RSS reader. You can also login with third-party RSS manager account. I subscribed engineering blogs from major tech companies so that I can get latest technology trend update from major tech companies.
- [Sequal Pro](https://www.sequelpro.com/): A database management tool that help you manage database with UI.
- [ShadowsocksX-NG](https://github.com/shadowsocks/ShadowsocksX-NG): A Shadowsocks client. It helps me to get access to some apps that were blocked (e.g. Google in China).
- [Typora](https://typora.io/): A markdown editor that render as you type. You don't need to look at raw text on the left and rendered on the right anymore.

### Mac Terminal

Terminal is probably one of the most used app for software engineers. Check out [Ultimate way to beautify Mac terminal (oh-my-zsh) and plugin recommendations](/posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/) for a complete guide on improving your productivity on your terminal.

### VS Code Extensions

One reason I'm choosing VS Code as my preferred code editor (IDE) is the rich extensions marketplace. Here are a list of VS Code extensions I use:

👇
- [Atom One Dark Theme](https://marketplace.visualstudio.com/items?itemName=akamud.vscode-theme-onedark): A theme based on Atom's One Dark theme.
- [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify): Beautify Javascript, JSON, CSS, Sass, and HTML in Visual Studio Code.
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker): A basic spell checker help with catching common spelling errors
- [Copy without formatting](https://marketplace.visualstudio.com/items?itemName=bmaupin.copy-without-formatting): Prevent background/font format being pasted
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): An essential tool that help me write clean Javascript code
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Format your Javascript/TypeScript/CSS code
- [Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv): Highlight CSV columns
- [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight): Highlight `TODO`, `FIXME` in code

### iOS Apps

👇
- [Slack](https://itunes.apple.com/us/app/slack/id618783545): Same as on macOS, used just for quickly read and respond to messages.
- [PPHub](https://itunes.apple.com/us/app/pphub-for-github/id1314212521): A third-party GitHub mobile client. You can view trending projects/developers and updates from your following account.
- [Eudic](https://itunes.apple.com/us/app/eudic-欧路词典/id434350458): A simple dictionary that has little to no ads.
- [Google](https://itunes.apple.com/us/app/google/id284815942): Google anything you want to know.
- [Scanbot](https://itunes.apple.com/us/app/scanbot-scanner-app-scan-pdf/id834854351): A free scanner app that has great user experience

### Chrome Extensions

👇
- [Grammarly](https://www.grammarly.com/): Fixes grammar issues for me. Really helpful when writing emails or documentations.
- [Save Page WE](https://chrome.google.com/webstore/detail/save-page-we/dhhpefjklgkmgeafimnjhojgjamoafof?hl=en-US): When I use _Save Page As_ feature provided by Chrome, it actually exported html with lots of assets files. This extension actually exported as a single HTML file, which makes it easier to share.
- [Awesome Screenshot](https://chrome.google.com/webstore/detail/awesome-screenshot-screen/nlipoenfbbikpbjkfpfillcgkoblgpmj?hl=en): Take screenshot from web pages
- [JSONView](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?utm_source=chrome-ntp-icon): Format JSON response in a more readable format
- [BuiltWith](https://chrome.google.com/webstore/detail/builtwith-technology-prof/dapjbgnjinbpoindlpdmhochffioedbn?utm_source=chrome-ntp-icon): Tells you what technology the current website uses

## Cloud-based Service

👇
- [IFTTT](http://ifttt.com) (If This Then That): Setup automation between apps and services. I personally use it to automate the smart lights at home when I arrive/leave home.
- [GitHub](https://github.com): GitHub is a community all developers love. I use GitHub to manage my code, knowledge, and projects, and static websites. I also discover/contribute to trending and interesting open source projects. Check out [Use GitHub for Knowledge Base and Projects Management](/posts/2019/use-github-to-mange-personal-knowledge-base/) for how I use it to manage my knowledge and projects.
- [Firebase](http://firebase.google.com): Firebase gives you lots of out-of-the-box cloud solution for free, for example, [real time database](https://firebase.google.com/products/database), [cloud storage](https://firebase.google.com/products/storage/), [cloud functions](https://firebase.google.com/products/functions/), and [hosting](https://firebase.google.com/products/hosting/). It makes it almost 0 cost to spin up a demo app.
- [Heroku](http://heroku.com): Heroku is a cloud platform to deploy apps. It is free for experimental use. I use it to deploy Node.js app where free static hosting services like [Github Pages](http://pages.github.com) or [Firebase Hosting](https://firebase.google.com/products/hosting/) can't support.
- [Google Cloud](https://cloud.google.com/), [Amazon Web Services (AWS)](https://aws.amazon.com/), [Microsoft Azure](https://azure.microsoft.com/en-us/): These are major cloud computing service provider, some services are even free for developers to get started with. For example, [Google Cloud - Always Free](https://cloud.google.com/free/docs/gcp-free-tier#always-free), [AWS - Always Free](https://aws.amazon.com/free/free-tier/?awsf.Free%20Tier%20Types=categories%23alwaysfree&awsm.page=1), [Azure - Free Account](https://azure.microsoft.com/en-us/free/free-account-faq/).
- [JSFiddle](http://jsfiddle.net): An online HTML/JS/CSS editor, where you can test and run your code. I use it to test and share JS/HTML/CSS code snippet.
- [Travis CI](https://travis-ci.org/), [Circle CI](https://circleci.com/): Continuous integration services used to build and test software projects hosted at GitHub. I use them to build and deploy static websites hosted on GitHub.