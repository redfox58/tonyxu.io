(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{251:function(t,s,a){"use strict";a.r(s);var n=a(47),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"使用-firebase-云函数统计网站访问数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-firebase-云函数统计网站访问数","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 Firebase 云函数统计网站访问数")]),t._v(" "),a("p",[t._v("现在越来越多人喜欢用 Firebase 托管静态页面，类似选择还有 GitHub Pages。如果你想给 Firebase 托管的静态页面添加后端代码，那么恭喜你云函数就是为你准备的。其中使用云函数的场景可以是连接 Firebase 实时数据库并存取数据。")]),t._v(" "),a("p",[t._v("我在这给大家分享一个最简单的例子就是借助云函数实现访问统计，每次云函数被触发，就更新实时数据库里的网站访问统计。")]),t._v(" "),a("h2",{attrs:{id:"计划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计划","aria-hidden":"true"}},[t._v("#")]),t._v(" 计划")]),t._v(" "),a("p",[t._v("我们大致需要这么几步实现这个功能")]),t._v(" "),a("ol",[a("li",[t._v("部署静态页面至 Firebase 云托管")]),t._v(" "),a("li",[t._v("创建 Firebase 云函数用来更新 Firebase 实时数据库的统计数字")]),t._v(" "),a("li",[t._v("为静态页面添加访问云函数的请求")])]),t._v(" "),a("h2",{attrs:{id:"部署静态页面至-firebase-云托管"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署静态页面至-firebase-云托管","aria-hidden":"true"}},[t._v("#")]),t._v(" 部署静态页面至 Firebase 云托管")]),t._v(" "),a("p",[t._v("Firebase 云托管非常适合托管静态页面，它比 GitHub Pages 搭建起来更简单，同时它也提供更多为网站/移动开发而设计的功能。如果你的静态网页文件已经准备好了，那么就可以直接运行"),a("code",[t._v("firebase deploy")]),t._v("上传至 Firebase 并可以在全球任意地方访问。")]),t._v(" "),a("p",[t._v("参考"),a("a",{attrs:{href:"https://firebase.google.com/docs/hosting/quickstart",target:"_blank",rel:"noopener noreferrer"}},[t._v("Quickstart"),a("OutboundLink")],1),t._v("学习如何在 Firebase 部署你的第一个静态网站")]),t._v(" "),a("h2",{attrs:{id:"创建-firebase-云函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-firebase-云函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建 Firebase 云函数")]),t._v(" "),a("p",[t._v("现在，我们来创建 Firebase 云函数来执行后端代码处理统计数字的更新。在这段代码中，我们将云函数连接实时数据库，并让它能够更新存储在数据库里的统计数字。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("初始化云函数")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("firebase init functions\n")])])])]),t._v(" "),a("li",[a("p",[t._v("在实时数据库创建"),a("code",[t._v("hit_counter")]),t._v("节点并把值设为 0")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hit_counter"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("编辑云函数代码 ("),a("code",[t._v("Index.js")]),t._v(")")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" functions "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"firebase-functions"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" admin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"firebase-admin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nadmin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initializeApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hitCounter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" functions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" counterRef "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" admin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ref")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/hit_counter"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" counterRef\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("transaction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("部署云函数")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("firebase deploy\n")])])])])]),t._v(" "),a("p",[t._v("部署完成后你会得到一个云函数网址，你可以尝试在浏览器打开它，观察实时数据库里的数据是否加了 1。")]),t._v(" "),a("h2",{attrs:{id:"为静态页面添加访问云函数的请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为静态页面添加访问云函数的请求","aria-hidden":"true"}},[t._v("#")]),t._v(" 为静态页面添加访问云函数的请求")]),t._v(" "),a("p",[t._v("如果你的云函数可以顺利更新实时数据库里的数据，那么接下来，你就可以把如下这段代码添加到你的网页里，使网页加载时会自动访问云函数。")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"//https://<Region>-<YOUR-APP-ID>.cloudfunctions.net/hitCounter"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  ")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("当网页成功访问到你的云函数网址时，云函数就会去更新实时数据库里的统计数字了。")]),t._v(" "),a("p",[t._v("恭喜你，你的静态网页现在已经有了后端代码来做访问统计的工作，下一步你还可以进一步在静态网页请求实时数据库里的统计数字并展示给访客。")])])},[],!1,null,null,null);e.options.__file="README.md";s.default=e.exports}}]);