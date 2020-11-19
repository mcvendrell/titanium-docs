(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{1166:function(t,a,s){"use strict";s.r(a);var e=s(21),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"communication-between-webviews-and-titanium"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#communication-between-webviews-and-titanium"}},[t._v("#")]),t._v(" Communication Between WebViews and Titanium")]),t._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),e("p",[t._v("With Titanium SDK 8.0.0, we now use "),e("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/WKWebView/"}},[t._v("WKWebView")]),t._v(" to implement Ti.UI.WebView (as Apple has deprecated "),e("a",{attrs:{href:"https://developer.apple.com/documentation/uikit/uiwebview",target:"_blank",rel:"noopener noreferrer"}},[t._v("UIWebView"),e("OutboundLink")],1),t._v(").")],1)]),t._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),e("p",[t._v("You can use features of the "),e("code",[t._v("Ti.UI.WebView")]),t._v(" component to interact with local and remote web content. However, as you'll see, most of this functionality is limited to local web content (HTML you load from the device rather than from a web server). In this section, you'll examine how to use the Titanium logging and event APIs with local HTML content. And, you'll see how you can use the "),e("code",[t._v("evalJS()")]),t._v(" method to inject JavaScript code into remote HTML content.")]),t._v(" "),e("h2",{attrs:{id:"contents"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),e("p",[t._v("Because capabilities vary, we'll look at local and remote web interactions separately. We'll begin with seeing how you can use logging and events with local content. Then, we'll see how to inject JavaScript code and get data back from remote HTML content.")]),t._v(" "),e("h3",{attrs:{id:"local-web-content"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#local-web-content"}},[t._v("#")]),t._v(" Local web content")]),t._v(" "),e("h4",{attrs:{id:"logging"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#logging"}},[t._v("#")]),t._v(" Logging")]),t._v(" "),e("p",[t._v("You can use the "),e("code",[t._v("Ti.API")]),t._v(" logging methods within HTML content loaded from the device. Just as a quick refresher, let's take a look at the logging functions available:")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("debug(message) -")]),t._v("Creates a Titanium log out of the"),e("code",[t._v("message")]),t._v(" parameter and assigns it the log level of "),e("code",[t._v("debug")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("error(message)")]),t._v(" - Creates a Titanium log out of the "),e("code",[t._v("message")]),t._v(" parameter and assigns it the log level of "),e("code",[t._v("error")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("info(message)")]),t._v(" - Creates a Titanium log out of the "),e("code",[t._v("message")]),t._v(" parameter and assigns it the log level of "),e("code",[t._v("info")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("log(type, message)")]),t._v(" - Creates a Titanium log out of the "),e("code",[t._v("message")]),t._v(" parameter and assigns it the log level of the given parameter "),e("code",[t._v("type")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("warn(message)")]),t._v(" - Creates a Titanium log out of the "),e("code",[t._v("message")]),t._v(" parameter and assigns it the log level of "),e("code",[t._v("warn")])])])]),t._v(" "),e("p",[t._v("These functions are great for adding logging to our native Titanium code, but they can also be used to add logging to web content in "),e("code",[t._v("WebViews")]),t._v(". Let's take a look at a simple example. Here will we add Titanium logging to a "),e("code",[t._v("WebView")]),t._v(" to let us know when the "),e("code",[t._v("<body>")]),t._v(" element of the web content has loaded.")]),t._v(" "),e("p",[e("strong",[t._v("logging.html")])]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onload")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Ti.API.info("),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("body loaded!"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(");"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[e("strong",[t._v("app.js")])]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" win "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWindow")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" webview "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWebView")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'logging.html'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("webview"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("When the above app runs and the "),e("code",[t._v("<body>")]),t._v(" of the "),e("code",[t._v("WebView")]),t._v(' is loaded, it will put an informational message in the Titanium logging console that says "body loaded!". This is a very simple case, but shows that you can use the logging capabilities of Titanium even when executing Javascript from the context of a '),e("code",[t._v("WebView")]),t._v("'s content. These API calls can be made anywhere in your web content's Javascript.")]),t._v(" "),e("h4",{attrs:{id:"ti-app-events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ti-app-events"}},[t._v("#")]),t._v(" Ti.App Events")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("Ti.API")]),t._v(" module gives your "),e("code",[t._v("WebView")]),t._v(" the ability to send messages to the Titanium logging console, but application level events via the "),e("code",[t._v("Ti.App")]),t._v(" module provide a much higher level of integration. Application level events are events that are not fired or handled by Titanium components, but by the app itself. If you are not already familiar with them, check out the "),e("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/User_Interface_Fundamentals/Event_Handling/"}},[t._v("Event Handling")]),t._v(" chapter of this book.")],1),t._v(" "),e("p",[t._v("So how do application level events help us communicate with "),e("code",[t._v("WebViews")]),t._v("? Well they are available to all execution contexts of our Titanium apps, and this includes a "),e("code",[t._v("WebView")]),t._v("'s Javascript execution context. By using calls to "),e("code",[t._v("Ti.App.fireEvent()")]),t._v(" and "),e("code",[t._v("Ti.App.addEventListener()")]),t._v(", we can establish bidirectional communication between our native Titanium code and our "),e("code",[t._v("WebView's")]),t._v(" Javascript code.")]),t._v(" "),e("p",[t._v("Let's take a look at an example of how we can use application level events to communicate bidirectionally with a "),e("code",[t._v("WebView")]),t._v(". We will create an app with a native UI button and a button rendered in a "),e("code",[t._v("WebView")]),t._v(". The "),e("code",[t._v("WebView")]),t._v(" will listen for events fired from the native button, and the native Titanium code will listen for events fired from the "),e("code",[t._v("WebView")]),t._v(" button. Whenever one of these events is received, the appropriate execution context will popup an alert notifying us that the event was received.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DOCTYPE")]),t._v(" html"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("html"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("head"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("meta name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"viewport"')]),t._v(" content"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"width=device-width, user-scalable=no"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Send event from the web-view to the app")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendEventToApp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("App"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("fireEvent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app:fromWebView'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      message"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Event fired from WebView, handled in Titanium'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Subscribe to global event")]),t._v("\n      Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("App"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app:fromTitanium"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("head"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("body"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button onclick"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sendEventToApp()"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("From WebView "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Titanium"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("body"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" win "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWindow")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" webView "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWebView")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'logging.html'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" button "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createButton")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'From Titanium -> WebView'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbutton"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("App"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("fireEvent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app:fromTitanium'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        message"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Event fired from Titanium, handled in WebView'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nTi"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("App"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app:fromWebView'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("webView"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("button"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("With the above app, we would see the following application flow when testing its functionality:")]),t._v(" "),e("p",[e("img",{attrs:{src:s(757),alt:"WEBVIEW"}})]),t._v(" "),e("p",[t._v("As demonstrated above, we can both fire and listen for application level events in content of the "),e("code",[t._v("WebView")]),t._v(". This gives Titanium the ability to react to interactions that occur in the web content. For example, you can set up application level events in your "),e("code",[t._v("WebView")]),t._v(" such that your Titanium code can respond to button clicks, page loads, mouse overs, or any other event the "),e("code",[t._v("WebView")]),t._v(" can handle.")]),t._v(" "),e("h3",{attrs:{id:"remote-web-content"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remote-web-content"}},[t._v("#")]),t._v(" Remote web content")]),t._v(" "),e("p",[t._v("You cannot use any Titanium statements within HTML content loaded from a remote host. The techniques described above will not work with remote content. However, you're not without means to interact with remote content. The WebView component includes the "),e("code",[t._v("evalJS()")]),t._v(" method that you can use to inject JavaScript into a WebView. A few things to keep in mind:")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("You should call "),e("code",[t._v("evalJS()")]),t._v(" from the webview's "),e("code",[t._v("load")]),t._v(" event so you're sure the page is done loading before you attempt to inject your code.")])]),t._v(" "),e("li",[e("p",[t._v("You must pass in the code to run as a single "),e("em",[t._v("string")]),t._v(". (Hint: You'll have to JSON.stringify any complex data types you pass into the webview.)")])]),t._v(" "),e("li",[e("p",[t._v("This method returns a string, so make sure any data you retrieve is a string or it will be treated as a "),e("code",[t._v("null")]),t._v(".")])])]),t._v(" "),e("p",[t._v("Let's see an example. The following loads a remote web page, then uses "),e("code",[t._v("evalJS()")]),t._v(" to retrieve the cookies set by that server:")]),t._v(" "),e("p",[e("strong",[t._v("app.js")])]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" webView "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWebView")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://google.com'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nwebView"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'load'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cookies "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" webview"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("evalJS")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'document.cookie'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("';'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'# of cookies -> '")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" cookies"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" cookies"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Cookie -> '")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" cookies"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("As noted, the use of "),e("code",[t._v("evalJS()")]),t._v(" is nested within the WebView's "),e("code",[t._v("load")]),t._v(" event so we're sure the page is loaded before injecting our code. You'll see we're passing in a single string (\"document.cookie\") which in this case simply retrieves the string of the cookies set by the site. The rest of the code is within Titanium and extracts the cookie values and logs them to the console.")]),t._v(" "),e("h2",{attrs:{id:"summary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),e("p",[t._v("In this section, you learned that with local HTML content in a WebView, you can use the "),e("code",[t._v("Ti.API")]),t._v(" module to log informational and debugging data to the Titanium logging console. You also saw how to use application level events via the "),e("code",[t._v("Ti.App")]),t._v(" module to establish bidirectional communication between local HTML in WebViews and native Titanium code.")]),t._v(" "),e("p",[t._v("Then, you looked at how to interact with remote HTML content in a WebView by calling the "),e("code",[t._v("evalJS()")]),t._v(" method. You learned that you pass in, and get back, simple strings, and that you cannot use any Titanium-specific statements within remote content in a WebView.")])])}),[],!1,null,null,null);a.default=n.exports},757:function(t,a,s){t.exports=s.p+"assets/img/WEBVIEW.159ef7de.jpg"}}]);