---
title: 我的生产效率工具和开发环境（推荐给软件工程师们）
description: 我的生产效率工具和开发环境（推荐给软件工程师们）
date: 2019-02-01
lang: zh-CN
type: post
---

# 我的生产效率工具和开发环境（推荐给软件工程师们）

## 硬件

### 笔记本

👉 [苹果 MacBook Pro (13-inch, 2017, Four Thunderbolt 3 Ports)](https://support.apple.com/kb/SP755?locale=en_US)
- 13 英寸
- 2017年
- 3.5 GHz Intel Core i7 Processor
- 16 GB 内存
- 256 GB 存储

我的苹果笔记本是我的第一生产力工具。我用它来写代码，写博客，和很多其他事情。

### 手机

👉 [苹果 iPhone X](https://support.apple.com/kb/SP770?viewlocale=zh_CN&locale=en_US)

我目前使用iPhone X作为手机。我从2013年的iPhone 4开始成为iPhone用户。在使用iPhone之前我还用过Nexus S安卓手机一段时间。iOS生态系统，更好的通知系统和应用质量是我一直追随iOS设备的主要原因。

### 台式机

我其实并没有台式机。我的雇主Microsoft为员工提供了每个月150美元的使用额度，所以我创建了一个[Azure Windows 虚拟机](https://azure.microsoft.com/zh-cn/pricing/details/virtual-machines/windows/)作为Windows台式机的替代。 我使用这个虚拟机安装和测试只在Windows能用的软件，例如[Power BI Desktop](https://powerbi.microsoft.com/zh-cn/desktop/).

### 工作站（公司工位）

👉 [联想 ThinkVision P27h](http://b2b.lenovo.com.cn/ThinkVisionP27h/) (双外接显示器)

作为LinkedIn软件工程师员工的标配，我从笔记本外接到这两台显示器。我通常在主屏幕开Slack窗口，其中一个外接显示器开浏览器，另一个外接显示器开代码编辑器VS Code或者邮箱客户端Outlook。

👉 [Herman Miller - Renew Sit-to-Stand Desk Rectangular](http://store.hermanmiller.com/office/desks-%7C-sit-to-stand-%7C-tables/renew-sit-to-stand-desk/7090.html?lang=en_US)

作为LinkedIn员工的标配。尽管这款工作台电动调节高度的功能很酷，鼓励人们少坐多站，但我还是喜欢坐着用电脑的时候更舒服。

👉 [苹果 Magic Keyboard（带数字键盘）](https://support.apple.com/kb/SP763?viewlocale=zh_CN)

有了这款外接键盘我就可以把电脑放的离我远一些，更靠近两台外接显示器，这样他们就可以在一个平面上。

👉 [苹果 Magic Trackpad 2](https://support.apple.com/kb/SP729?viewlocale=zh_CN)

我是苹果Trackpad的重度用户，我已经无法再重新适应鼠标了。由于我使用外接键盘，使用机身自带的Trackpad非常不方便，因此我也配了一个外接Trackpad。

### 配件

👉 [苹果 AirPods](https://support.apple.com/kb/SP750?viewlocale=zh_CN)

AirPods是我最爱用的配件，使用非常方便，戴在耳朵上没什么感觉，时常会让我忘记我还戴着耳机。另外，不像其他入耳式耳机或者包裹式耳机非常隔音让你听不见其他人向你说话，这款耳机可以放心戴着而不怕工作时有人找也听不见不得不拍你的肩膀。

👉 [苹果] Apple Watch (第1代)](https://support.apple.com/kb/SP735?viewlocale=zh_CN)

我从2014年苹果Apple Watch第一次发布就开始使用Apple Watch了。它对于我这种不愿意每次消息都要掏出手机读消息的人来说非常棒。Apple Watch对我来说只有这一个有用的功能，我也非常喜欢这个功能。

## 软件

### macOS应用

👇
- [Chrome](https://www.google.com/chrome/): 全球最流行的浏览器。Web开发必备浏览器，非常优秀的调试工具。
- [Slack](https://www.slack.com): 最流行的团队协作应用，非常适合开发者、软件工程师。它可以和你的很多开发平台集成，融合你的开发流程和团队协作体验。
- [VS Code](https://code.visualstudio.com/): 我曾经很爱用Sublime Text，但是从2016年就切换到了VS Code，因为它是目前开发最活跃的编辑器。阅读[VS Code 拓展](#vs-code-extensions) 了解我爱用的VS Code拓展。
- [Sketch](https://www.sketchapp.com/): 最流行的Web和App设计工具（只支持macOS）。即使没有专业的设计知识也可以很方便快捷的创建Web和App的设计搞。我使用它来做Web或者App的设计原型，以及阅读设计师提供的设计稿。
- [GitHub Desktop](https://desktop.github.com/): GitHub官方的桌面客户端。我在需要可视化的查看代码变更的时候会作为Git命令行工具的替代品。
- [Paw](https://paw.cloud/): macOS平台上非常高级的REST API客户端。相比于Postman我更喜欢它，Postman客户端由于是基于Web制作的，没有原生应用的流畅体验。Paw使用macOS原生的视觉组件，以及丰富的插件满足定制需求。我使用它来调试REST API请求。
- [Microsoft Remote Desktop](https://itunes.apple.com/us/app/microsoft-remote-desktop-10/id1295203466): Windows远程桌面客户端，我用它来远程连接我在Azure创建的Windows虚拟机。
- [Alfred 3](https://www.alfredapp.com/): 一个快捷键效率神器。有非常丰富的插件，可以通过快捷命令进行搜索，查看剪切板历史，以及其他自定义操作。
- [Bear](https://bear.app/): 一个支持markdown语法的笔记应用，界面和操作非常舒服。
- [BlueJeans](www.bluejeans.com/‎)/[Zoom](www.zoom.us/‎)/[WebEx](www.webex.com/‎): 在线会议工具，有了它基本不需要出差面对面开会。
- [Charles](https://www.charlesproxy.com/): 一个网络代理工具，可以用来查看网络请求。我用它来调试从Chrome浏览器以外发出的网络请求。
- [FileZilla](https://filezilla-project.org/): 一个FTP的可视化工具，可以用来上传下载服务器上的文件。
- [GIF Brewery 3](https://gfycat.com/gifbrewery): 一个macOS上的GIF制作工具。当我需要录制桌面操作的时候我用它来录制视频转成GIF文件。GIF文件分享给其他人更方便浏览。
- [Magnet](http://magnet.crowdcafe.com/): 一个macOS上的窗口管理器。我一般会在多个显示器上开很几个窗口，因此用它的快捷键快速调整窗口在显示器的位置。
- [Microsoft Office Word/Excel/Outlook/PowerPoint/Teams](https://www.office.com/): 微软出品的经典办公应用套件，不用多说。
- [Monosnap](https://monosnap.com/): 一款免费的截图工具，截完图可以立刻做标注。你也可以设置图床账号，截完图可以立刻上传图床获得可以分享的图片链接。
- [Reeder](http://reederapp.com): RSS阅读器，可以登录第三方RSS管理器账号。我用它来订阅科技公司的技术博客，了解最新的技术趋势和应用。
- [Sequal Pro](https://www.sequelpro.com/): 数据库管理工具，可以连接到MySQL数据库进行可视化增删查改。
- [ShadowsocksX-NG](https://github.com/shadowsocks/ShadowsocksX-NG): Shadowsocks客户端，在国内的时候访问Google等服务必备。
- [Typora](https://typora.io/): Markdown编辑器，合并编辑和预览，不用再左边编辑右边预览了。

### Mac 终端

终端可能是软件工程师用得最多的应用了，浏览[程序员的Mac终端(oh-my-zsh)终极美化及必备插件推荐](/posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/)了解如何提升终端的使用体验和效率。

### VS Code 插件

我选择使用VS Code作为编辑器的一个重要原因就是它有非常丰富的插件市场，下面是我常用的一些插件:

👇
- [Atom One Dark Theme](https://marketplace.visualstudio.com/items?itemName=akamud.vscode-theme-onedark):一个基于Atom's One Dark的主题。
- [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify): 美化Javascript, JSON, CSS, Sass, 以及HTML代码。
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker): 一个简单的拼写检查工具，帮助你在写代码或者文档的时候纠正拼写错误。
- [Copy without formatting](https://marketplace.visualstudio.com/items?itemName=bmaupin.copy-without-formatting): 当你需要复制代码到其他地方时你可能会把背景色和文字色一同复制过去，这个插件帮助你只复制文本。
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): 一个非常重要的工具，帮我检查Javascript代码整洁。
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): 格式化你的Javascript/TypeScript/CSS代码。
- [Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv): 高亮CSV不同列。
- [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight): 高亮`TODO`, `FIXME`标记。

### iOS Apps

👇
- [Slack](https://itunes.apple.com/us/app/slack/id618783545): 同macOS, 用来在不用电脑的时候快速阅读和回复消息。
- [PPHub](https://itunes.apple.com/us/app/pphub-for-github/id1314212521): 一个第三方GitHub移动客户端，你可以浏览流行的项目和账号，以及查看关注账号的动态。
- [Eudic](https://itunes.apple.com/us/app/eudic-欧路词典/id434350458): 厌倦了某些大厂词典的广告，你可以试试这个无广告的词典。
- [Google](https://itunes.apple.com/us/app/google/id284815942): Google一下你就知道
- [Scanbot](https://itunes.apple.com/us/app/scanbot-scanner-app-scan-pdf/id834854351): 一个免费的优雅的扫描应用。

### Chrome Extensions

👇
- [Grammarly](https://www.grammarly.com/): 拼写纠正插件，帮我在写邮件和文档时纠正拼写错误。
- [Save Page WE](https://chrome.google.com/webstore/detail/save-page-we/dhhpefjklgkmgeafimnjhojgjamoafof?hl=en-US): 当我使用浏览器_保存网页_功能时，它实际上是导出为一个包含许多文件的文件夹。这款插件能导出为一个单个HTML文件，非常便于分享。
- [Awesome Screenshot](https://chrome.google.com/webstore/detail/awesome-screenshot-screen/nlipoenfbbikpbjkfpfillcgkoblgpmj?hl=en): 将网页截图，并支持标注工具
- [JSONView](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?utm_source=chrome-ntp-icon): 格式化JSON提高可读性
- [BuiltWith](https://chrome.google.com/webstore/detail/builtwith-technology-prof/dapjbgnjinbpoindlpdmhochffioedbn?utm_source=chrome-ntp-icon): 告诉你打开的网页使用了哪些技术

## Cloud-based Service

👇
- [IFTTT](http://ifttt.com) (If This Then That): 创建可以连接不同应用和服务的自动化流程。我设置的其中一个自动化是当我到家时自动打开家里的Wi-Fi灯。
- [GitHub](https://github.com): GitHub是所有开发者都热爱的社区，我不仅使用它存放我的代码，还使用它管理我的知识、项目、和静态网站。我还喜欢在GitHub上寻找有趣的项目和开发者。阅读[Use GitHub for Knowledge Base and Projects Management](/posts/2019/use-github-to-mange-personal-knowledge-base/)了解我是如何使用GitHub管理知识和项目的。
- [Firebase](http://firebase.google.com): Firebase免费提供很多云服务，例如[实时数据库](https://firebase.google.com/products/database), [云存储](https://firebase.google.com/products/storage/), [云函数](https://firebase.google.com/products/functions/), and [云托管](https://firebase.google.com/products/hosting/). 这些云服务让你可以非常方便的借用它们搭建一个基于云的应用
- [Heroku](http://heroku.com): Heroku是一个可以部署应用的云服务。它为实验用途提供免费服务。当我需要部署带后台的Node.js应用时，[Github Pages](http://pages.github.com)或者[Firebase Hosting](https://firebase.google.com/products/hosting/)提供的静态托管服务就满足不了我的需求。
- [Google云](https://cloud.google.com/), [Amazon云服务(AWS)](https://aws.amazon.com/), [微软Azure](https://azure.microsoft.com/en-us/): 这些是主要的云计算提供商，他们提供一些永久免费的云服务，例如[Google Cloud - Always Free](https://cloud.google.com/free/docs/gcp-free-tier#always-free), [AWS - Always Free](https://aws.amazon.com/free/free-tier/?awsf.Free%20Tier%20Types=categories%23alwaysfree&awsm.page=1), [Azure - Free Account](https://azure.microsoft.com/en-us/free/free-account-faq/).
- [JSFiddle](http://jsfiddle.net): 一个在线HTML/JS/CSS编辑器,你可以在上面快速测试代码，并用链接分享。
- [Travis CI](https://travis-ci.org/), [Circle CI](https://circleci.com/): 持续集成服务，可以和GitHub集成用来打包部署你托管在GitHub上的代码。我用它来打包部署我托管在GitHub上的静态网站。