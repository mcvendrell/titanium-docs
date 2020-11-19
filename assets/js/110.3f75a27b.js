(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{1641:function(t,e,a){"use strict";a.r(e);var s=a(21),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"enabling-hyperloop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enabling-hyperloop"}},[t._v("#")]),t._v(" Enabling Hyperloop")]),t._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[t._v("This page lists information on how to use Hyperloop with new and existing projects. Hyperloop works as a native module and is pre-packaged with the SDK 7.0.0 and later.")]),t._v(" "),s("p",[t._v("Each Titanium project that wants to use Hyperloop requires the Hyperloop service to be enabled. By default, Hyperloop is disabled and you can enable it for your projects via the CLI or within Studio.")]),t._v(" "),s("h3",{attrs:{id:"requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),s("p",[t._v("Refer to "),s("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Hyperloop/Hyperloop_Guides/Hyperloop_Requirements/"}},[t._v("Hyperloop Requirements")]),t._v(" for instructions on what and how to install the necessary requirements for Hyperloop.")],1),t._v(" "),s("p",[s("strong",[t._v("Please note:")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v('If you attempt to create an app that is called "Hyperloop" (the app-name in the '),s("strong",[t._v("tiapp.xml")]),t._v(") you may experience failures in the build process, because it is a reserved word. Please use a different project name for this case.")])]),t._v(" "),s("li",[s("p",[t._v("Hyperloop expects Xcode to be in "),s("strong",[t._v("/Applications/Xcode.app")]),t._v(" to reference system-libraries, so please ensure that Xcode is located at the this location.")])])]),t._v(" "),s("h2",{attrs:{id:"using-hyperloop-on-existing-projects"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-hyperloop-on-existing-projects"}},[t._v("#")]),t._v(" Using Hyperloop on existing projects")]),t._v(" "),s("p",[t._v("If you’d like to use Hyperloop in a new or existing Titanium project, add the following code to your tiapp.xml to configure the module:")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("modules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("module")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hyperloop"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("module")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("modules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"on-sdks-older-than-7-0-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#on-sdks-older-than-7-0-0"}},[t._v("#")]),t._v(" On SDKs older than 7.0.0")]),t._v(" "),s("p",[t._v("You need to change some additional values in your "),s("code",[t._v("tiapp.xml")]),t._v(" file to get Hyperloop working. Note that these changes are unnecessary in SDK 7.0.0 as the defaults will work.")]),t._v(" "),s("p",[t._v("For iOS, you’ll need to ensure that the "),s("code",[t._v("<use-jscore-framework>")]),t._v(" flag is enabled (This is enabled by default in Titanium SDK 7.0.0 and later, only will only be disabled if explicitly set to false here):")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ios")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("use-jscore-framework")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("use-jscore-framework")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ios")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v('_A_lso ensure to have the "run-on-main-thread" property set in the top-level of your tiapp.xml (It is enabled by default in Titanium SDK 7.0.0 and later, only will only be disabled if explicitly set to false here):')]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("run-on-main-thread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"enabling-via-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enabling-via-cli"}},[t._v("#")]),t._v(" Enabling via CLI")]),t._v(" "),s("p",[t._v('When creating a new project, the CLI will check if you are entitled to use Hyperloop. If you are, the CLI will prompt you with the following message: "Would you like to enable Hyperloop for this app (This may take a while...)". If you enable Hyperloop, it may take some time to retrieve the module and set up your project. Newer SDK versions ship the module and will not need to download it.')]),t._v(" "),s("p",[s("strong",[t._v("Note:")]),t._v(" If you have any issue enabling Hyperloop from the CLI, or, you are not asked if you want to enable Hyperloop, ensure you are logged into the platform with the appropriate subscription, use the "),s("code",[t._v("appc login")]),t._v(" command to confirm you are logged in.")]),t._v(" "),s("h3",{attrs:{id:"enabling-via-studio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enabling-via-studio"}},[t._v("#")]),t._v(" Enabling via Studio")]),t._v(" "),s("h3",{attrs:{id:"creating-new-hyperloop-enabled-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-new-hyperloop-enabled-project"}},[t._v("#")]),t._v(" Creating new Hyperloop-enabled project")]),t._v(" "),s("p",[t._v("With Appcelerator Studio open and logged in, follow these steps to create a new Hyperloop-enabled project:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Open "),s("strong",[t._v("New Mobile App")]),t._v(" "),s("strong",[t._v("Project")]),t._v(" wizard.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(622),alt:"enable-hyperloop"}})])]),t._v(" "),s("li",[s("p",[t._v("In the "),s("strong",[t._v("Enable AMPLIFY Appcelerator Platform Services")]),t._v(" section, you will see Hyperloop listed along with Cloud and Analytics (if you are entitled to use it). "),s("strong",[t._v("Check the Enable AMPLIFY Appcelerator Services")]),t._v(" toggle.")])]),t._v(" "),s("li",[s("p",[t._v("Click "),s("strong",[t._v("Finish")]),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("During the project creation, Studio will prompt you with a "),s("strong",[t._v("confirmation to enable Hyperloop")]),t._v('. The prompt should say something like this: "Would you like to enable Hyperloop for this app (This may take a while...)". Click '),s("strong",[t._v("Yes")]),t._v(" to confirm. You may also see the same confirmation request for Appcelerator Test in which case you can click No and continue on.")])])]),t._v(" "),s("p",[t._v("To confirm that Hyperloop was set up, you can open the "),s("code",[t._v("tiapp.xml")]),t._v(" file in the Service section.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(623),alt:"hyperloop-enabled"}})]),t._v(" "),s("p",[t._v("After enabling Hyperloop, the following tags should have been added to the "),s("code",[t._v("tiapp.xml")]),t._v(" file, you can validate them here:")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("modules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("module")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("platform")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hyperloop"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("module")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("module")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("platform")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("iphone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hyperloop"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("module")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ...\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("modules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"enabling-hyperloop-on-non-hyperloop-projects"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enabling-hyperloop-on-non-hyperloop-projects"}},[t._v("#")]),t._v(" Enabling Hyperloop on non-Hyperloop projects")]),t._v(" "),s("p",[t._v("If Hyperloop was disabled or not available when the project was created, you can enable Hyperloop from the "),s("code",[t._v("tiapp.xml")]),t._v(" editor service section by clicking on "),s("strong",[t._v("Enable Services")]),t._v(" and selecting "),s("strong",[t._v("Hyperloop")]),t._v(". Please note that this may also require the other changes mentioned above in "),s("strong",[s("a",{attrs:{href:"#Usingonexistingprojects"}},[t._v("Using Hyperloop on existing projects")])]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),s("p",[t._v("Make sure to follow the "),s("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Hyperloop/Hyperloop_Guides/"}},[t._v("Hyperloop Guides")]),t._v(" section for deep-dives on how to use the native platforms in Titanium.")],1)])}),[],!1,null,null,null);e.default=n.exports},622:function(t,e,a){t.exports=a.p+"assets/img/enable-hyperloop.bac11367.png"},623:function(t,e,a){t.exports=a.p+"assets/img/hyperloop-enabled.c4d8be62.png"}}]);