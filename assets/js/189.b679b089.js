(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{1019:function(t,a,s){"use strict";s.r(a);var e=s(21),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"api-reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-reference"}},[t._v("#")]),t._v(" API Reference")]),t._v(" "),s("p",[t._v("Welcome to the API documentation for Titanium Mobile!")]),t._v(" "),s("h2",{attrs:{id:"titanium"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#titanium"}},[t._v("#")]),t._v(" Titanium")]),t._v(" "),s("p",[t._v("Titanium SDK provides a root namespace object, "),s("RouterLink",{attrs:{to:"/api/titanium/"}},[t._v("Titanium")]),t._v(" as the base/root for the APIs.\nThis object is also frequently accessed by its alias, "),s("code",[t._v("Ti")]),t._v(".")],1),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" button "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Titanium"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createButton")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Send'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `Ti` convenience shorthand")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" win "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWindow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Home'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("You'll find all APIs arranged under this root namespace. Browse the full list of available APIs via the sidebar to the left or check out the most frequently used ones in the groups below.")]),t._v(" "),s("ModuleGroups"),t._v(" "),s("h2",{attrs:{id:"modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modules"}},[t._v("#")]),t._v(" Modules")]),t._v(" "),s("p",[t._v("Titanium SDK also has a concept of "),s("RouterLink",{attrs:{to:"/api/modules/"}},[t._v("Native Modules")]),t._v(" - these are 1st and 3rd-party APIs that may be added on/imported.")],1),t._v(" "),s("p",[t._v("Some of these modules get shipped with the SDK, but must be opted-in to be used in your app. Others you may need to download and install into your app or in your Titanium SDK global modules directory.")]),t._v(" "),s("p",[t._v("You opt-in to use of a module per-app by adding a reference to the module in your tiapp.xml file:")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- ... --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("modules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("module")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("ti.map"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("module")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("modules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- ... --\x3e")]),t._v("\n")])])]),s("h2",{attrs:{id:"globals"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#globals"}},[t._v("#")]),t._v(" Globals")]),t._v(" "),s("p",[t._v("In addition to the root "),s("code",[t._v("Titanium")]),t._v(" namespace hanging off the "),s("code",[t._v("global")]),t._v(", we also supplement the global object with additional APIs/extensions commonly used on Node.JS and on the web.")]),t._v(" "),s("p",[t._v("Most notable:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"/api/global/console"}},[t._v("console")]),t._v(" - a Node.JS and Web-compatible implementation of the "),s("code",[t._v("console")]),t._v(" object, used primarly for logging.")]),t._v(" "),s("li",[s("a",{attrs:{href:"/api/global"}},[t._v("global")]),t._v(" - The global object is hung off of itself to allow for typical explicit access, i.e. "),s("code",[t._v("global.console")]),t._v(".")])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);