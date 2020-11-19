(window.webpackJsonp=window.webpackJsonp||[]).push([[1025],{1181:function(e,t,a){"use strict";a.r(t);var s=a(21),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"supporting-multiple-platforms-in-a-single-codebase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supporting-multiple-platforms-in-a-single-codebase"}},[e._v("#")]),e._v(" Supporting Multiple Platforms in a Single Codebase")]),e._v(" "),a("h2",{attrs:{id:"objective"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#objective"}},[e._v("#")]),e._v(" Objective")]),e._v(" "),a("p",[e._v("In this section, you will explore the ways you can support both Android and iOS within a single Titanium project. Through a combination of platform specific feature abstraction and usage of conditional code branching, Titanium provides you with a powerful mechanism for creating cross platform, native mobile apps with a maximum amount of code reuse.")]),e._v(" "),a("h2",{attrs:{id:"contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),a("p",[e._v("Titanium is not a write once, run anywhere framework. It's more aptly referred to as a \""),a("em",[e._v('write once, adapt everywhere"')]),e._v(" framework. Your business logic, networking, database, and event handling logic will be close to 100% cross-platform compatible. The user interfaces on iOS and Android differ so significantly that in most cases you'll have to do at least a little platform specific coding. That said, it's not uncommon for cross platform apps to reuse 80, 90, or even 100% of their UI code as well.")]),e._v(" "),a("h3",{attrs:{id:"embrace-the-platform"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#embrace-the-platform"}},[e._v("#")]),e._v(" Embrace the platform")]),e._v(" "),a("p",[e._v("Best of breed, native apps take full advantage of the platforms on which they run. Your Titanium apps should do more than just run on iOS and Android. When running on an iOS device, your app should feel like an iOS app. Your Android app should feel like an Android app. By this, we mean apps that:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Follow platform UI conventions, such as tabs at the top (Android) or bottom (iOS).")])]),e._v(" "),a("li",[a("p",[e._v("Use hardware-specific features, such as the Android Menu button.")])]),e._v(" "),a("li",[a("p",[e._v("Use OS-specific controls, such left and right navigation buttons in title bars on iOS.")])]),e._v(" "),a("li",[a("p",[e._v("Participate in the platform ecosystem, such as using platform-appropriate notification mechanisms.")])])]),e._v(" "),a("p",[e._v("The best approach when creating cross-platform apps is to develop and test for both iOS and Android right from the start. Designing and developing your app with multiple platforms in mind right away will be significantly more efficient than developing for one, then porting to the next.")]),e._v(" "),a("h3",{attrs:{id:"cross-platform-mechanics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cross-platform-mechanics"}},[e._v("#")]),e._v(" Cross-platform mechanics")]),e._v(" "),a("p",[e._v("Before we get into the strategies you should adopt, let's look at the mechanics of handling cross-platform coding within Titanium. This includes:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Platform identification")])]),e._v(" "),a("li",[a("p",[e._v("Recognizing platform-specific APIs and properties")])]),e._v(" "),a("li",[a("p",[e._v("Handling platform-specific resources")])])]),e._v(" "),a("h4",{attrs:{id:"platform-identification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#platform-identification"}},[e._v("#")]),e._v(" Platform identification")]),e._v(" "),a("p",[e._v("Titanium provides platform-identification properties in the "),a("code",[e._v("Ti.Platform")]),e._v(" namespace that you can use for conditional branching within your code. These are:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[e._v("Property")])]),e._v(" "),a("th",[a("strong",[e._v("Description")])]),e._v(" "),a("th",[a("strong",[e._v("Sample values")])])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("Ti.Platform.name")])]),e._v(" "),a("td",[e._v("Returns the name of the platform returned by the device")]),e._v(" "),a("td",[a("code",[e._v("iPhone OS")]),e._v(" for iPhone or iPod, "),a("code",[e._v("android")]),e._v(" for Android, returns the "),a("code",[e._v("navigator.userAgent")]),e._v(" string on Mobile Web")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("Ti.Platform.osname")])]),e._v(" "),a("td",[e._v("Returns an abbreviated identifier of the platform")]),e._v(" "),a("td",[a("code",[e._v("iphone")]),e._v(" for iPhone or iPod, "),a("code",[e._v("ipad")]),e._v(" for iPad, "),a("code",[e._v("android")]),e._v(" for Android, and "),a("code",[e._v("mobileweb")]),e._v(" on Mobile Web")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("Ti.Platform.model")])]),e._v(" "),a("td",[e._v("Returns device model identifier")]),e._v(" "),a("td",[a("code",[e._v("iPhone 3GS")]),e._v(" or "),a("code",[e._v("iPod Touch 2G")]),e._v(" or "),a("code",[e._v("Droid")]),e._v(" (unsupported on Mobile Web)")])])])]),e._v(" "),a("h4",{attrs:{id:"platform-specific-apis-and-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#platform-specific-apis-and-properties"}},[e._v("#")]),e._v(" Platform-specific APIs and properties")]),e._v(" "),a("p",[e._v("Many of the Titanium APIs are separated according to the platform on which they are supported. For example, the Ti.UI.iPhone namespace includes user interface components that are supported on only on the iOS operating system. The same is true of the Ti.UI.iOS, Ti.UI.iPad, and Ti.UI.Android namespaces. By segmenting such platform-specific functionality, we help make it clear what will and won't work on the various platforms.")]),e._v(" "),a("p",[e._v("As you explore the API docs, you will find also many platform-specific properties and values. For example, the Ti.UI.Window object has an Android-specific property called "),a("code",[e._v("softInputMode")]),e._v(". That property's value must be one of the constants in the Ti.UI.Android namespace. These platform-specific properties are labeled as such. To avoid crashing and errors, don't try to use them on other platforms.")]),e._v(" "),a("p",[e._v("Another concern is platform-specific constants. Explore the API docs and you'll see lots of constants that define button appearance, media file type, and so forth. When these are platform specific, they are generally put into their own sub-namespace. (If they're not in a platform-specific namespace, expect that we'll be moving them there as we clear up platform parity issues.) For example, Titanium.UI.iOS.ANIMATION_CURVE_EASE_IN defines an iOS-specific animation property. Don't use one platform's constants on another platform or your code will throw an error.")]),e._v(" "),a("h4",{attrs:{id:"platform-specific-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#platform-specific-resources"}},[e._v("#")]),e._v(" Platform-specific resources")]),e._v(" "),a("p",[e._v('Titanium gives you various ways to include platform-specific resources, like images, stylesheets, and scripts, in your project. Titanium uses an "overrides" system to make it easy to use platform-specific resources. Any file in the platform-specific Resources directories ('),a("code",[e._v("Resources/android")]),e._v(", "),a("code",[e._v("Resources/iphone")]),e._v(", or "),a("code",[e._v("Resources/mobileweb")]),e._v(") will override, or be used in place of, those in the "),a("code",[e._v("Resources")]),e._v(" directory. You don't have to use any special notation in your code to specify that these files should be used.")]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" img "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("UI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("createImageView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  image"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'logo.png'")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* Resources/android/logo.png or Resources/iphone/logo.png  or\n  *  Resources/mobileweb/logo.png will be used automatically if they exist\n  *  when you build for those platforms, respectively\n  */")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("You can maintain a hierarchy of folders within the Resources or platform-specific folder. For example, let's say you put most of your images into the "),a("code",[e._v("Resources/images")]),e._v(" folder. To include platform-specific overrides, you would duplicate that folder hierarchy in the platform folders. Thus, you'd need to put the images into the "),a("code",[e._v("Resources/android/images")]),e._v(", "),a("code",[e._v("Resources/iphone/images")]),e._v(", and "),a("code",[e._v("Resources/mobileweb/images")]),e._v(" folders.")]),e._v(" "),a("p",[e._v("Here's an example that shows this feature in action with a CommonJS require() module. The code simply calls the base name of the file. Titanium grabs the platform-specific version at build time, which you can see in the Android emulator, iPhone simulator, and Chrome running the Mobile Web preview.")]),e._v(" "),a("h3",{attrs:{id:"strategies-and-recommendations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#strategies-and-recommendations"}},[e._v("#")]),e._v(" Strategies and recommendations")]),e._v(" "),a("h4",{attrs:{id:"branching"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#branching"}},[e._v("#")]),e._v(" Branching")]),e._v(" "),a("p",[e._v("Branching in code is useful when your code will be "),a("em",[e._v("mostly the same")]),e._v(" across platforms, but vary here and there. Long blocks of"),a("code",[e._v("if...then")]),e._v(" code are difficult to read and maintain. Also, excessive branching will slow your app's execution. If you must use this technique, try to group as much code as you can within a branch and defer loading as much as possible to mitigate the performance penalty of branching.")]),e._v(" "),a("p",[e._v('It\'s best practice to query the platform value once, then store it in a globally accessible variable. Each time you request one of those properties, Titanium has to query the operating system for the value. This "trip across the bridge" takes a few cycles and if used too frequently could possibly slow your program. Something like the following would be more efficient:')]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// create a JavaScript alias to the platform-specific property")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" osname "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Platform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("osname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Booleans identifying the platforms are handy too")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" isAndroid "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("osname "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'android'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("isAndroid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// do Android specific stuff")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("else")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// do iOS, mobileweb, or other platform stuff")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("You can use JavaScript's "),a("a",{attrs:{href:"http://en.wikipedia.org/wiki/Ternary_operation#C.2C_Java.2C_JavaScript",target:"_blank",rel:"noopener noreferrer"}},[e._v("ternary operator"),a("OutboundLink")],1),e._v(" when you need to branch on a specific property, like this:")]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" isAndroid "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Platform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("osname "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'android'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" win "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("UI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("createWindow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  softInputMode"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("isAndroid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),e._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("UI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Android"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("SOFT_INPUT_ADJUST_PAN")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("Keep in mind the growing list of supported platforms and don't fall prey to coding in an if/else relationship that won't support new platforms. For example, don't do the following:")]),e._v(" "),a("p",[a("strong",[e._v("Anti-pattern!")])]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" osname "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Platform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("osname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("osname "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!==")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'android'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// don't assume this means iOS! It could be mobile web or some future-supported platform.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("h4",{attrs:{id:"platform-specific-js-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#platform-specific-js-files"}},[e._v("#")]),e._v(" Platform-specific JS files")]),e._v(" "),a("p",[e._v("Using platform-specific JS files is likely to be most useful when your code is "),a("em",[e._v("mostly different")]),e._v(" across platforms. This removes long if...then blocks from your main code. Separating platform-specific code reduces the chances of an error that comes from accidentally using the wrong platform's API or property. However, you'll have to remember to apply changes and fixes to "),a("em",[e._v("each")]),e._v(" of the platform-specific files. So this approach could increase your work rather than reduce it.")]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" label2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'ui'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("label"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// will include /android/ui.js on Android")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// and /iphone/ui.js on iOS")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// there doesn't even need to be a /ui.js file!")]),e._v("\n")])])]),a("h4",{attrs:{id:"references-and-further-reading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references-and-further-reading"}},[e._v("#")]),e._v(" References and Further Reading")]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Platform-module",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ti.Platform reference"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"http://developer.appcelerator.com/blog/2011/06/new-defaults-for-android-layouts-in-1-7.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Android UI scaling"),a("OutboundLink")],1)])])]),e._v(" "),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),a("p",[e._v("In this section, you learned how to support both Android and iOS within a single set of files. You learned programming strategies as well as the ways Titanium eases the process of working with platform-specific resources. In the final section of this chapter, we'll see how we can use Titanium's integrated internationalization capabilities to make out app's global accessible.")])])}),[],!1,null,null,null);t.default=o.exports}}]);