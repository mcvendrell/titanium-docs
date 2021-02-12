(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{1645:function(t,e,a){"use strict";a.r(e);var s=a(21),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"using-swift-to-build-native-modules-in-titanium"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-swift-to-build-native-modules-in-titanium"}},[t._v("#")]),t._v(" Using Swift to Build Native Modules in Titanium")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("💡 Hint")]),t._v(" "),s("p",[t._v("This document describes features available in Titanium SDK 8.0.0+.")])]),t._v(" "),s("p",[t._v("As a developer of native cross-platform apps, you may run into situations where you want to use a native API that is not exposed in Titanium. Luckily, there are two options available to integrate these functionalities into your app seamlessly:")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("Hyperloop")]),t._v(": Allows you to extend your existing JavaScript-based app with native code (iOS, Android & Windows) that is also available through JavaScript by generating native code from it. Learn more "),s("a",{attrs:{href:"https://github.com/appcelerator/hyperloop-examples",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v("!")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Native Modules")]),t._v(": Allows you to write a native library (Obj-C for iOS, Java for Android & C++ for Windows) that can be packaged as a module dependency to your project.")])])]),t._v(" "),s("p",[t._v("The choice of which of both solution should be used is always up to the developer and depends on the project-based needs. In general, both solutions are high performant and pluggable. If you are more into JavaScript, Hyperloop and the native docs (e.g. from Apple, Google and Microsoft) will help you getting started quickly. If you need a module for a project that uses low-level code (like C or C++), native modules will be the better choice because of the easier access to their API's.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(629),alt:"Djfx5NZW0AEhXn_"}})]),t._v(" "),s("h2",{attrs:{id:"history"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#history"}},[t._v("#")]),t._v(" History")]),t._v(" "),s("p",[t._v("When it comes to iOS, Titanium always relied on Objective-C based native modules. Over time, Swift was introduced and became more and more stable over the last years. That's why in Titanium SDK 8+, we moved our iOS core-system to an own framework, which allows developers like you to write full-featured and pure Swift frameworks. It does not only allow you to use external Swift libraries (like Alamofire or IGListKit), but also to write the modules themselves in Swift as well.")]),t._v(" "),s("h2",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),s("p",[t._v("To get started with Swift modules in Titanium, simply create a new module project from the CLI:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("appc new -p ios -t timodule\n")])])]),s("p",[t._v("It will prompt you to select a name, a module-identifier, project location and finally, the code-base. In Titanium 8+, you can select between Objective-C and Swift based modules. We are not planning to deprecate Objective-C anytime soon and leave it up the developer to select the best fit. Both module code-bases can be used together in one project without issues. And that's it! The generated module contains a "),s("code",[t._v("<ModuleID>Module.swift")]),t._v(" and a "),s("code",[t._v("<ModuleID>ExampleProxy.swift")]),t._v(" that are the 1:1 pardons of their Objective-C siblings. All required Titanium libraries are already included and you are ready to go.")]),t._v(" "),s("h2",{attrs:{id:"writing-swift-api-s-for-titanium"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#writing-swift-api-s-for-titanium"}},[t._v("#")]),t._v(" Writing Swift API's for Titanium")]),t._v(" "),s("p",[t._v("When it comes to method naming conventions, the concepts that you may be used to are the same as before. If you are completely new to native Titanium modules, we recommend you to read the "),s("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/Extending_Titanium_Mobile/iOS_Module_Development_Guide/iOS_Module_Quick_Start/"}},[t._v("iOS Module Quick Start")]),t._v(" guide before. This guide references some examples from the "),s("a",{attrs:{href:"https://github.com/hansemannn/titanium-swift-module-example",target:"_blank",rel:"noopener noreferrer"}},[t._v("titanium-swift-module-example"),s("OutboundLink")],1),t._v(" repository that you can clone and try yourself.")],1),t._v(" "),s("p",[t._v("Important to know is that every Swift-based method that you want to call from your Titanium application needs to be annotated with the "),s("code",[t._v("@objc()")]),t._v(" attribute:")]),t._v(" "),s("p",[s("strong",[t._v("TiTestModule.swift")])]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[t._v("@"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("objc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("post"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("guard")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" args "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("first")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" callback "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("KrollCallback")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fatalError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Invalid parameters provided!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Use the "url" and "callback" properties')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v('In the above example, we are writing a method named "'),s("code",[t._v("post()")]),t._v('" that can be accessed from the module (assuming it is called "ti.test") as the following:')]),t._v(" "),s("p",[s("strong",[t._v("index.js")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Test "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ti.test'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ES6+ imports!")]),t._v("\n\nTest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://httpbin.org/headers'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use the event")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("As you noticed, the "),s("code",[t._v("args")]),t._v(" parameter is an Optional and should be guarded before it's usage, since it can be "),s("code",[t._v("nil")]),t._v(" when calling it with arguments, e.g. "),s("code",[t._v("Test.post()")]),t._v(". The same goes for the first and second parameter of the method, which includes the URL of the method in the first parameter and the callback (an instance of the "),s("code",[t._v("KrollCallback")]),t._v(" class) as the second parameter. Once ready, you can pass the arguments to your native API's and return to your proxy (if necessary).")]),t._v(" "),s("h2",{attrs:{id:"type-conversion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type-conversion"}},[t._v("#")]),t._v(" Type Conversion")]),t._v(" "),s("p",[t._v("Just like between Objective-C and JavaScript, common types are converted automatically for you:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("JavaScript")]),t._v(" "),s("th",[t._v("Swift")]),t._v(" "),s("th",[t._v("Objective-C")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("String")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("NSString")])]),t._v(" "),s("tr",[s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("Dictionary")]),t._v(" "),s("td",[t._v("NSDictionary")])]),t._v(" "),s("tr",[s("td",[t._v("Array")]),t._v(" "),s("td",[t._v("Array")]),t._v(" "),s("td",[t._v("NSArray")])]),t._v(" "),s("tr",[s("td",[t._v("Date")]),t._v(" "),s("td",[t._v("Date")]),t._v(" "),s("td",[t._v("NSDate")])]),t._v(" "),s("tr",[s("td",[t._v("Function")]),t._v(" "),s("td",[t._v("KrollCallback")]),t._v(" "),s("td",[t._v("KrollCallback")])]),t._v(" "),s("tr",[s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("NSNumber")])]),t._v(" "),s("tr",[s("td",[t._v("null")]),t._v(" "),s("td",[t._v("nil")]),t._v(" "),s("td",[t._v("nil / NSNull")])])])]),t._v(" "),s("p",[t._v("As you may noticed, the difference between types in Swift and JavaScript is pretty small, improving the readability of your native for larger-scaled module projects as well.")]),t._v(" "),s("h2",{attrs:{id:"what-s-next"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-s-next"}},[t._v("#")]),t._v(" What's next?")]),t._v(" "),s("p",[t._v("Well, you learned how to create native Swift-based modules. Once your module is ready, you can package it ("),s("code",[t._v("appc run -p ios --build-only")]),t._v(") and deploy it to GitHub or "),s("a",{attrs:{href:"http://gitt.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gitt.io"),s("OutboundLink")],1),t._v(". If you have further questions, make sure to visit our "),s("a",{attrs:{href:"http://tislack.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("TiSlack"),s("OutboundLink")],1),t._v(" community or reach out to us via "),s("a",{attrs:{href:"https://jira.appcelerator.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("JIRA"),s("OutboundLink")],1),t._v(". Code strong!")])])}),[],!1,null,null,null);e.default=n.exports},629:function(t,e,a){t.exports=a.p+"assets/img/Djfx5NZW0AEhXn_.72b58fb1.jpg"}}]);