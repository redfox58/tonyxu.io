(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{257:function(t,v,_){"use strict";_.r(v);var a=_(47),e=Object(a.a)({},function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"rest-api-设计面试准备"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#rest-api-设计面试准备","aria-hidden":"true"}},[t._v("#")]),t._v(" REST API 设计面试准备")]),t._v(" "),_("p",[t._v("现在 REST API 已经越来越流行被用作前后端的借口。大多数平台都提供 REST API 作为兼容 Web 端和移动端通用接口。如果你即将面试一个要求对 REST API 非常熟悉的岗位，我推荐你多准备 REST API 相关知识。以下是我个人对 REST API 的面试准备。")]),t._v(" "),_("h2",{attrs:{id:"设计原则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#设计原则","aria-hidden":"true"}},[t._v("#")]),t._v(" 设计原则")]),t._v(" "),_("ul",[_("li",[t._v("自描述")]),t._v(" "),_("li",[t._v("简单")]),t._v(" "),_("li",[t._v("安全")])]),t._v(" "),_("h2",{attrs:{id:"准备"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#准备","aria-hidden":"true"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),_("ul",[_("li",[t._v("确定用户\n"),_("ul",[_("li",[t._v("来自内部或者外部")]),t._v(" "),_("li",[t._v("角色 (开发者, 管理员, 客户, 客服...)")])])]),t._v(" "),_("li",[t._v("确定使用场景")]),t._v(" "),_("li",[t._v("确定需要提供的功能")]),t._v(" "),_("li",[t._v("分析并确定上述，再开始设计")])]),t._v(" "),_("p",[t._v("注意:")]),t._v(" "),_("ul",[_("li",[t._v("不要猜想")]),t._v(" "),_("li",[t._v("不要杜撰")])]),t._v(" "),_("h2",{attrs:{id:"设计流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#设计流程","aria-hidden":"true"}},[t._v("#")]),t._v(" 设计流程")]),t._v(" "),_("ul",[_("li",[t._v("确定 REST API 要提供对哪些资源的操作")]),t._v(" "),_("li",[t._v("确定不同资源的关系")]),t._v(" "),_("li",[t._v("根据资源类型和关系决定资源名的定义方法")]),t._v(" "),_("li",[t._v("为资源确定必须的操作方法")])]),t._v(" "),_("h2",{attrs:{id:"接口设计"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#接口设计","aria-hidden":"true"}},[t._v("#")]),t._v(" 接口设计")]),t._v(" "),_("p",[t._v("设计如何提供资源的操作方法")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("HTTP 路径")]),t._v(" "),_("ul",[_("li",[t._v("https://"),_("code",[t._v("api_domain")]),t._v("/"),_("code",[t._v("version")]),t._v("/"),_("code",[t._v("collection")]),t._v("/")]),t._v(" "),_("li",[t._v("https://"),_("code",[t._v("api_domain")]),t._v("/"),_("code",[t._v("version")]),t._v("/"),_("code",[t._v("collection")]),t._v("/"),_("code",[t._v("resource")]),t._v("/")]),t._v(" "),_("li",[t._v("https://"),_("code",[t._v("api_domain")]),t._v(": 可以返回基本信息例如 API 版本、所有顶级资源集合，以及所有单个资源")]),t._v(" "),_("li",[t._v("使用名字作为资源名、而非动词")])])]),t._v(" "),_("li",[_("p",[t._v("HTTP 方法")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("GET")]),t._v("/"),_("code",[t._v("POST")]),t._v("/"),_("code",[t._v("PATCH")]),t._v("/"),_("code",[t._v("PUT")]),t._v("/"),_("code",[t._v("DELETE")])])])]),t._v(" "),_("li",[_("p",[t._v("请求头")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("Authorization")]),t._v(": Bearer "),_("code",[t._v("access_token")])]),t._v(" "),_("li",[_("code",[t._v("Accept")]),t._v(": 要求指定类型的返回")]),t._v(" "),_("li",[_("code",[t._v("Content-Type")]),t._v(": 请求体的类型")]),t._v(" "),_("li",[t._v("...")])])]),t._v(" "),_("li",[_("p",[t._v("请求参数")]),t._v(" "),_("ul",[_("li",[t._v("Filtering (过滤): "),_("code",[t._v("type")]),t._v("=news,photo&"),_("code",[t._v("days")]),t._v("=sunday")]),t._v(" "),_("li",[t._v("Sorting (排序): "),_("code",[t._v("sort")]),t._v("=create_time,-creator")]),t._v(" "),_("li",[t._v("Paging (分页): "),_("code",[t._v("offset")]),t._v("=100&"),_("code",[t._v("limit")]),t._v("=100")]),t._v(" "),_("li",[t._v("Search/Query (关键词): "),_("code",[t._v("q")]),t._v("=AI")]),t._v(" "),_("li",[t._v("Access Token (认证令牌): "),_("code",[t._v("access_token")]),t._v("=")])])]),t._v(" "),_("li",[_("p",[t._v("响应状态码")]),t._v(" "),_("ul",[_("li",[t._v("应该使用标准 HTTP 状态码")])])]),t._v(" "),_("li",[_("p",[t._v("响应头")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("Content-Type")])]),t._v(" "),_("li",[_("code",[t._v("ETag")])]),t._v(" "),_("li",[t._v("...")])])]),t._v(" "),_("li",[_("p",[t._v("响应体 (JSON 格式)")])]),t._v(" "),_("li",[_("p",[t._v("错误处理")])])]),t._v(" "),_("h2",{attrs:{id:"示例"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),_("h3",{attrs:{id:"资源模型-gmail"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#资源模型-gmail","aria-hidden":"true"}},[t._v("#")]),t._v(" 资源模型 (Gmail)")]),t._v(" "),_("ul",[_("li",[t._v("API 路径: "),_("code",[t._v("gmail.googleapis.com")])]),t._v(" "),_("li",[t._v("用户资源集合: "),_("code",[t._v("users/*")]),t._v(". 每个用户资源集合含有下列子资源或子资源集合.\n"),_("ul",[_("li",[t._v("消息资源集合: "),_("code",[t._v("users/*/messages/*")]),t._v(".")]),t._v(" "),_("li",[t._v("会话资源集合: "),_("code",[t._v("users/*/threads/*")]),t._v(".")]),t._v(" "),_("li",[t._v("标签资源集合: "),_("code",[t._v("users/*/labels/*")]),t._v(".")]),t._v(" "),_("li",[t._v("历史信息资源集合: "),_("code",[t._v("users/*/history/*")]),t._v(".")]),t._v(" "),_("li",[t._v("用户资料资源: "),_("code",[t._v("users/*/profile")]),t._v(".")]),t._v(" "),_("li",[t._v("用户设置资源: "),_("code",[t._v("users/*/settings")]),t._v(".")])])])]),t._v(" "),_("h3",{attrs:{id:"相应"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#相应","aria-hidden":"true"}},[t._v("#")]),t._v(" 相应")]),t._v(" "),_("h4",{attrs:{id:"成功响应"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#成功响应","aria-hidden":"true"}},[t._v("#")]),t._v(" 成功响应")]),t._v(" "),_("div",{staticClass:"language-json extra-class"},[_("pre",{pre:!0,attrs:{class:"language-json"}},[_("code",[_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lwj2lk3jlk2"')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),_("div",{staticClass:"language-json extra-class"},[_("pre",{pre:!0,attrs:{class:"language-json"}},[_("code",[_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pagination"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"offset"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"limit"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"total"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("3464")]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    //...\n  "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),_("h4",{attrs:{id:"错误响应"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#错误响应","aria-hidden":"true"}},[t._v("#")]),t._v(" 错误响应")]),t._v(" "),_("div",{staticClass:"language-json extra-class"},[_("pre",{pre:!0,attrs:{class:"language-json"}},[_("code",[_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ERROR_CODE"')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"INVALID-REQUEST"')]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"longer error description"')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"link"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"An documentation url for error details and solutions"')]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),_("h2",{attrs:{id:"常用状态码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用状态码","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用状态码")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("状态码")]),t._v(" "),_("th",[t._v("名称")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("200")]),t._v(" "),_("td",[_("code",[t._v("OK")])]),t._v(" "),_("td",[t._v("请求成功。一般用于 GET 与 POST 请求")])]),t._v(" "),_("tr",[_("td",[t._v("201")]),t._v(" "),_("td",[_("code",[t._v("Created")])]),t._v(" "),_("td",[t._v("已创建。成功请求并创建了新的资源")])]),t._v(" "),_("tr",[_("td",[t._v("204")]),t._v(" "),_("td",[_("code",[t._v("No Content")])]),t._v(" "),_("td",[t._v("无内容。服务器成功处理，但未返回内容")])]),t._v(" "),_("tr",[_("td",[t._v("301")]),t._v(" "),_("td",[_("code",[t._v("Moved Permanently")])]),t._v(" "),_("td",[t._v("请求的资源已被永久的移动到新 URI")])]),t._v(" "),_("tr",[_("td",[t._v("302")]),t._v(" "),_("td",[_("code",[t._v("Found")])]),t._v(" "),_("td",[t._v("请求的资源被临时的移动到新 URI")])]),t._v(" "),_("tr",[_("td",[t._v("400")]),t._v(" "),_("td",[_("code",[t._v("Bad Request")])]),t._v(" "),_("td",[t._v("客户端请求的语法错误，服务器无法理解")])]),t._v(" "),_("tr",[_("td",[t._v("401")]),t._v(" "),_("td",[_("code",[t._v("Unauthorized")])]),t._v(" "),_("td",[t._v("请求要求用户的身份认证")])]),t._v(" "),_("tr",[_("td",[t._v("403")]),t._v(" "),_("td",[_("code",[t._v("Forbidden")])]),t._v(" "),_("td",[t._v("服务器理解请求客户端的请求，但是拒绝执行此请求")])]),t._v(" "),_("tr",[_("td",[t._v("404")]),t._v(" "),_("td",[_("code",[t._v("Not Found")])]),t._v(" "),_("td",[t._v("服务器无法根据客户端的请求找到资源")])]),t._v(" "),_("tr",[_("td",[t._v("405")]),t._v(" "),_("td",[_("code",[t._v("Method Not Allowed")])]),t._v(" "),_("td",[t._v("客户端请求中的方法被禁止")])]),t._v(" "),_("tr",[_("td",[t._v("408")]),t._v(" "),_("td",[_("code",[t._v("Request Timeout")])]),t._v(" "),_("td",[t._v("服务器等待客户端发送的请求时间过长，超时")])]),t._v(" "),_("tr",[_("td",[t._v("409")]),t._v(" "),_("td",[_("code",[t._v("Conflict")])]),t._v(" "),_("td",[t._v("服务器处理请求时发生了冲突")])]),t._v(" "),_("tr",[_("td",[t._v("411")]),t._v(" "),_("td",[_("code",[t._v("Length Required")])]),t._v(" "),_("td",[t._v("服务器无法处理客户端发送的不带 Content-Length 的请求信息")])]),t._v(" "),_("tr",[_("td",[t._v("414")]),t._v(" "),_("td",[_("code",[t._v("URI Too Long")])]),t._v(" "),_("td",[t._v("请求的 URI 过长（URI 通常为网址），服务器无法处理")])]),t._v(" "),_("tr",[_("td",[t._v("415")]),t._v(" "),_("td",[_("code",[t._v("Unsupported Media Type")])]),t._v(" "),_("td",[t._v("服务器无法处理请求附带的媒体格式")])]),t._v(" "),_("tr",[_("td",[t._v("429")]),t._v(" "),_("td",[_("code",[t._v("Too Many Requests")])]),t._v(" "),_("td",[t._v("用户发送了过多的请求(请求频率限制)")])]),t._v(" "),_("tr",[_("td",[t._v("500")]),t._v(" "),_("td",[_("code",[t._v("Internal Server Error")])]),t._v(" "),_("td",[t._v("服务器内部错误，无法完成请求")])]),t._v(" "),_("tr",[_("td",[t._v("502")]),t._v(" "),_("td",[_("code",[t._v("Bad Gateway")])]),t._v(" "),_("td",[t._v("服务器从远端服务器接收到了一个无效的请求")])]),t._v(" "),_("tr",[_("td",[t._v("503")]),t._v(" "),_("td",[_("code",[t._v("Service Unavailable")])]),t._v(" "),_("td",[t._v("服务器暂时的无法处理客户端的请求")])]),t._v(" "),_("tr",[_("td",[t._v("504")]),t._v(" "),_("td",[_("code",[t._v("Gateway Timeout")])]),t._v(" "),_("td",[t._v("充当网关或代理的服务器，未及时从远端服务器获取请求")])])])]),t._v(" "),_("h2",{attrs:{id:"其他考虑事项"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其他考虑事项","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他考虑事项")]),t._v(" "),_("ul",[_("li",[t._v("安全\n"),_("ul",[_("li",[t._v("HTTPS: 必须全程使用 HTTPS")]),t._v(" "),_("li",[t._v("访问控制\n"),_("ul",[_("li",[t._v("认证")]),t._v(" "),_("li",[t._v("JWT")]),t._v(" "),_("li",[t._v("API Key")])])]),t._v(" "),_("li",[t._v("用户权限")]),t._v(" "),_("li",[t._v("输入验证\n"),_("ul",[_("li",[t._v("长度、范围、格式、类型")]),t._v(" "),_("li",[t._v("大小限制")])])]),t._v(" "),_("li",[t._v("跨域访问\n"),_("ul",[_("li",[t._v("公开 API 必须包含跨域访问头并允许任意来源 "),_("code",[t._v("*")])])])])])]),t._v(" "),_("li",[t._v("分页")]),t._v(" "),_("li",[t._v("监控\n"),_("ul",[_("li",[_("code",[t._v("/heath")]),t._v(": "),_("code",[t._v("200 OK")]),t._v(" or "),_("code",[t._v("503 Service Unavailable")]),t._v(", 用于负载均衡及服务发现")]),t._v(" "),_("li",[_("code",[t._v("/version")]),t._v(": 版本")]),t._v(" "),_("li",[_("code",[t._v("/status")]),t._v(": "),_("code",[t._v("200 OK")]),t._v(" or "),_("code",[t._v("500 Internal Server Error")])]),t._v(" "),_("li",[_("code",[t._v("/metrics")]),t._v(": 持续运行时间(秒), 平均响应时间，500 错误个数")])])])])])},[],!1,null,null,null);e.options.__file="README.md";v.default=e.exports}}]);