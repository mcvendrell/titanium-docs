(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1649:function(t,a,s){"use strict";s.r(a);var n=s(21),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"titanium-ui-activityindicator"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-activityindicator"}},[t._v("#")]),t._v(" Titanium.UI.ActivityIndicator")]),t._v(" "),n("TypeHeader"),t._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Android")]),t._v(" "),n("th",[t._v("iOS")]),t._v(" "),n("th",[t._v("Windows")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("img",{attrs:{src:s(425),alt:"Android"}})]),t._v(" "),n("td",[n("img",{attrs:{src:s(426),alt:"iOS"}})]),t._v(" "),n("td",[n("img",{attrs:{src:s(427),alt:"Windows"}})])])])]),t._v(" "),n("p",[t._v("An activity indicator can be used to show the progress of an operation in the UI to let the\nuser know that some action is taking place. An activity indicator consists of a spinning\nanimation and an optional text message, and is used to indicate an ongoing activity of\nindeterminate length. To show progress, use "),n("type-link",{attrs:{type:"Titanium.UI.ProgressBar"}},[t._v("Titanium.UI.ProgressBar")]),t._v(" instead.")],1),t._v(" "),n("p",[t._v("Use the "),n("type-link",{attrs:{type:"Titanium.UI.createActivityIndicator"}},[t._v("Titanium.UI.createActivityIndicator")]),t._v(" method or "),n("strong",[n("code",[t._v("<ActivityIndicator>")])]),t._v(" Alloy element to\ncreate an "),n("code",[t._v("ActivityIndicator")]),t._v(" object.")],1),t._v(" "),n("p",[n("code",[t._v("ActivityIndicator")]),t._v(" is a view and, like any view, must be added to a window or other top-level\nview before it can be shown. Unlike most views, "),n("code",[t._v("ActivityIndicator")]),t._v(" is hidden by\ndefault and must be shown explicitly by calling its "),n("type-link",{attrs:{type:"Titanium.UI.ActivityIndicator.show"}},[t._v("Titanium.UI.ActivityIndicator.show")]),t._v(" method.")],1),t._v(" "),n("h2",{attrs:{id:"examples"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),n("h3",{attrs:{id:"simple-activity-indicator"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#simple-activity-indicator"}},[t._v("#")]),t._v(" Simple Activity Indicator")]),t._v(" "),n("p",[t._v("Open a yellow window immediately after a blue window. Show an activity indicator while\nsome code executes and hide it on completion. Then close the yellow window.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("backgroundColor "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'white'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" win1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWindow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  backgroundColor"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blue'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" win2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWindow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  backgroundColor"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yellow'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" activityIndicator "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createActivityIndicator")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  color"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'green'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  message"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Loading ...'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  style"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ActivityIndicatorStyle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DARK")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  top"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  left"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  height"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SIZE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  width"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SIZE")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The activity indicator must be added to a window or view for it to appear")]),t._v("\nwin2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("activityIndicator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// eventListeners must always be loaded before the event is likely to fire")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// hence, the open() method must be positioned before the window is opened")]),t._v("\nwin2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'open'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  activityIndicator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do some work that takes 6 seconds")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ie. replace the following setTimeout block with your code")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("source"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    activityIndicator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("hide")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nwin1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwin2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"alloy-xml-markup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#alloy-xml-markup"}},[t._v("#")]),t._v(" Alloy XML Markup")]),t._v(" "),n("p",[t._v("Previous example as two Alloy views.")]),t._v(" "),n("p",[t._v("win1.xml:")]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Alloy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Window")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onOpen")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("openWin2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("backgroundColor")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("blue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Alloy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("win1.js:")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("openWin2")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" win2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Alloy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createController")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'win2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getView")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    win2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("win2.xml:")]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Alloy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Window")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onOpen")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("showIndicator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("backgroundColor")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("yellow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Define the styling properties in the TSS file --\x3e")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ActivityIndicator")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("activityIndicator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("message")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Loading..."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Window")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Alloy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("win2.js:")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("showIndicator")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activityIndicator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do some work that takes 6 seconds")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ie. replace the following setTimeout block with your code")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("source"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activityIndicator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("hide")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("ApiDocs")],1)}),[],!1,null,null,null);a.default=e.exports},425:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABLCAMAAADgUuHmAAAAb1BMVEX////9/f35+fne3t7b29v7+/vOzs7Y2NjHx8f29vbV1dXS0tLx8fHg4OC4uLjLy8ujo6Pi4uLExMS1tbWwsLCpqanm5uampqa7u7vq6urk5OTo6Oi/v7/z8/Ps7OzBwcG9vb2ysrKtra3u7u6rq6sMyrvUAAADRklEQVRYw+2Y646bMBCF6xvGYJu1yXKzgRDy/s/YMVlVVWvAbKtKlfYoPyIl+jLnzNjY+falL/33QggxhtAfY4R0hlDOqWpWgdGnObgn2ayXW1CtfV4Y+Skanritn237vukZ9FjumZLsKqgv/OMdOC9tINBt0RW5BEOS+1v7qugJ5kALgALrtnTZgJNJbLCPdiM9aluSwU3rZGh117eXNB9Rojmj3zdSnXMntjkILzw2hX01oSunJJag+gWqzPhLKnglld7qynuWQOJL+9a2T6sEiniXJK9vy1Jbx05J5ePt7a09iEMW9wVkmxMW5guQ3u8EH6wA0kFLweNhXszULZDmBh/+Hr0HVikPWKj3bXAXaj9ndRwfBfUEews9SxSNPHj0+xbRoIF0K8V5n8cMWLoQu3VXIahcpkxfn+u6tg3aK+oGRekmbZkqr7XeMyCyMAfZ9mmSRa1tPC3kOkDVQ+qaN7PWHcVRlOkgqkp8S5SswGEVDZZNPL93Jn13pODQR4PHvVHEiGQUauyeQ9EopWAtJEtmXddFuyQGpYYrKFwAKjaFSBqlmnR/oYe+62AcYiiiwo5wIay56+YmgloVUT2g0tVbQA2/o1hPrqKm/H73iv0N1LqhIlVNhBB3GRUziALqWuw9oKyLxQ6oQVxBDdb76N4gFSFmvDKiZPb36EYpDCGXFo4oZu+zMboGwWHPLqReee+jTx3mroXFTD57a1gsxVVdcigKO/sqfqQRA6Xp44D6bJ7nIu4CO0ppclmY5POcD2znmUuA1eA0Vp9Za8txL8gGWGplKfYwza3NDds9zYayzJhirwlFFePBFyhoECmZh6IOeoRGE1in+wObikAqxOEVIlgkEz471uegk2NyGAjOgXVMqoCUnR7oHKA4bUa22ztX5IE0nB+RG8pBZo3PFxtNudWkIKhEFm0kQ7+BsONZICXec4Tjm+ggMfvZGhsdzaqqyqvSscTl5QgvgjhxchQYM4yxkL0pAATK6ASkRJYcaPESp0SZwShCizJ7kUol0JU786RCYeWHsg8F0OGkxHu+GvqDlX3ASq7kBroKk+6D9sIUXDn52Vs9w3JyIShC1NCvI0Z/+ocFBjF48+1LX/rn+g53JT4iuhGztwAAAABJRU5ErkJggg=="},426:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABLCAMAAAA/HJv5AAAAclBMVEX////h4eH8/Pzk5OTn5+f4+Pjq6ur6+vru7u7z8/Pw8PDW1tb19fXs7OzAwMC0tLSqqqrX19fJycnOzs6enp7R0dHGxsbDw8O5ubnZ2dne3t7Ly8vb29vFxcW8vLyvr6+3t7fT09OysrKlpaWtra2hoaHZSGi1AAAD+klEQVRYw+2X23abMBBFrdFodEFyDDLGxsS3NP//i5UQhDq1wbh5adqTh6wEstcZzRl5sviv//r7BABfyhOO10yLLyQa3uQ7buDr6qQ6z/Lawccj+VSl1n4gscmyLKeeI5SyMNuhdkRGQEfcZUGYiODCGTBl5zokzhgacYNom9LvS67mEpEFOS1/I0o6+33hmXuKiMp+JoJlvigKX9NMolQ8IT8TpSr3RbHP0MxuNUYkJ3tNFIbtI/GJvIOhFungVyIYLIto0T2RSK2SSdkT80CUjvkA9PUz8yMtsYg0Ms1MtiNYGJaHmv2ZHrYIVus+1pCaQwLauW4w+KI8NrqsdXpDKESnR4GCkJwWEj5SzjAQhSGOMZuY+VBzQylHjufe5yjGgIYzzlEln2Aw/EgiPgjeI4V2pfcZD1MNUkd8Ve13IzmSwrEo7CbaOkIM5zjIsN05Y0oGgwazahm0OdMYUbEkTjoihTafTimASLboxAvEjEYbgz0SqTUHv70Sz1jysnjtgCUXo5ExxHlCcrp7BwqTF8lhVWTMwEQKFQVkn8Tb0ug7nq9JT0UztFUhb4nqLpEXEfha1qjlI8MjdPTJUd+t2pVVtSmbaX9Dz0Ptzoj7dfA82/Epf9cNDbG515g0oBzDoXwDCe0IO5ESU1d8s990KvydjwjjUrhTvCfa6PL9YdvpsDzzm6dNmICJSeMmWbE8vfQ6VdlNYsur26/uWhxRXW1fBh38TaK78jiRDfTVaQAWuzvzT/hwZzTLi9dOm3sLhhRG9TIaJnqtsMl71c4uvoFAmLHCQbCyzLmYwYvXGZK9v+jvQ66LcHzwIFDFsHM0cLfRh+Pxcqpy1A8gpTU0dYe7/LQK+rHdlGjllL+eN+qRL4+rqOPLZod6HDh8bqET4RefoSCFDGEst5cfrc1TVaIcvbrx46YwFtLfX8kackIKXi5Pnc3DeXJLSQYttJuauS7d8nzjKTwzjT8cW5uXVzZFHBZ6TaHlTgxMaA7H97dtbuO75EPliThaNeeBlyDC9dteTKiR4Xt5fFuv3you2sfB5+WyzPRoZxyRs7IFgh32R01IVnbE99NZpzaysqr8xOyIoK5KOey4bfmkAZrtar1er7YIfdbo8X/nROo7j2PRsrmCRRi/dUSWT2z2oKnFECw6IgtEwXwwGequ7WykdBiB7UQMRKBdZ1KJuUSLyaK4Ii40Fu8RueR6tsUENItrYqh7FZE/PJtJFKnPRnwmgvFv8SSX+Vwitt21cE0MkvgSU75p5lfNGWqxuCZG6deX1dul5LP3KuWclnCDCJhtqjPpxVwNwzMkfIhqnPI/UT+FH/F/HjdsEBxD379OUjsk+y327n9ZPwFfsD1f2saZQQAAAABJRU5ErkJggg=="},427:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABLCAMAAADH/GAOAAAAllBMVEUDAwM+Zf8/Z/8DBAgEBgsGChkEBw87YfIJDiQ+Zvs9Y/k8Yvc6X+8zVNUIDSAGCRQkPZoZKmwSHUsNFjkyUs8eMX8UIFILEi4KDyg4W+YnQKIwT8kvTcMqRrEYKGYWJmAMFDQ3XOksSbgqQ6shOI0gNoksR7UjOpIeL3gcLXQVIlkRHEQQGT82WeE1V9swUcsfNIMoQaVRBTShAAABj0lEQVRYw+3X2WrrMBSF4a3Jkid5nu3YmZo0SYfz/i93pBb6AtkqFPRdLd/8CIPBAs97EmPghlBdpzl841nGAUv2mh+X0z34CuuyKEoBSNo6ojQ6bHb3zbx/+ygCpEPnkhJC5KvZQfNGKA3TFlD0L5FJ0/DTbLVIYiSXDDCIY0xtzp66O3yl5QlQBLs0pDSaKrN1vjdlOhRgiOpW9k+2i3FKx5LZXY3vUfx+1mZucxIPy+PJtto6xcHi3Xo67xQza7LvKRkVPIVxxn6+GNUL+3AfQmLUJaBrB2KlK6B71ObUNJpbQJc1QxQnaaMA3zZO9eFUMXAguLcPDd4vY+AG2675uQrAgWqRUtY3Aeh4HhNCwkML6MQLNWn6sWOALftO1w7S/JwQSqNjCehYOydSpkUP+ILy8m9cBTghlGDgeZ7neei4EOAE63d5XmjAx/Rnvd+njQB0WTnHhESTg2tHf02o/eFbA8DWNZLYdIGf1mtqb4/pjQM23uVDHCcXxQAdr5rleNXgROB/yjzP+4v+Aw8RFpeQWIfQAAAAAElFTkSuQmCC"}}]);