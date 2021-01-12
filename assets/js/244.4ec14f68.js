(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{1100:function(t,e,s){"use strict";s.r(e);var a=s(21),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"modules-facebook-messengerbutton"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modules-facebook-messengerbutton"}},[t._v("#")]),t._v(" Modules.Facebook.MessengerButton")]),t._v(" "),s("TypeHeader"),t._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),s("p",[t._v("Use the "),s("type-link",{attrs:{type:"Modules.Facebook.createMessengerButton"}},[t._v("createMessengerButton()")]),t._v(" method to create a Messenger button.\nYou must set the "),s("type-link",{attrs:{type:"Modules.Facebook.MessengerButton.mode"}},[t._v("Modules.Facebook.MessengerButton.mode")]),t._v(" and "),s("type-link",{attrs:{type:"Modules.Facebook.MessengerButton.style"}},[t._v("Modules.Facebook.MessengerButton.style")]),t._v("\nbefore the button is rendered.")],1),t._v(" "),s("p",[t._v("The messenger button differences between a rectangular and a circular button mode. In addition, you can set\ndifferent styles by using the constants "),s("type-link",{attrs:{type:"Modules.Facebook.MESSENGER_BUTTON_STYLE_BLUE"}},[t._v("Modules.Facebook.MESSENGER_BUTTON_STYLE_BLUE")]),t._v(", "),s("type-link",{attrs:{type:"Modules.Facebook.MESSENGER_BUTTON_STYLE_WHITE"}},[t._v("Modules.Facebook.MESSENGER_BUTTON_STYLE_WHITE")]),t._v(",\nor "),s("type-link",{attrs:{type:"Modules.Facebook.MESSENGER_BUTTON_STYLE_WHITE_BORDERED"}},[t._v("Modules.Facebook.MESSENGER_BUTTON_STYLE_WHITE_BORDERED")]),t._v(' to personalize the button. Note: The mode and style property can only be set\non creation. The title of the button can be localized by setting a localization for the key "Send".')],1),t._v(" "),s("p",[t._v("The messenger button has a click event to interact with the Facebook messenger. This can for example be done by\ncalling "),s("type-link",{attrs:{type:"Modules.Facebook.presentMessengerDialog"}},[t._v("Modules.Facebook.presentMessengerDialog")]),t._v(".")],1),t._v(" "),s("p",[t._v("This functionality is currently iOS-only.")]),t._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("h3",{attrs:{id:"messenger-button-to-share-the-appcelerator-website"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#messenger-button-to-share-the-appcelerator-website"}},[t._v("#")]),t._v(" Messenger button to share the Appcelerator website.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fb "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"facebook"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" messengerButton "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createMessengerButton")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" fb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MESSENGER_BUTTON_MODE_RECTANGULAR")]),t._v("\n    style"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" fb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MESSENGER_BUTTON_STYLE_BLUE")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmessengerButton"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("presentMessengerDialog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Appcelerator Titanium rocks!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The title of the link")]),t._v("\n        description"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Shared from my Titanium application"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The description of the link")]),t._v("\n        link"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://appcelerator.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The link you want to share")]),t._v("\n        to"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The user id's you want to preselect in the dialog")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nwin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("messengerButton"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ApiDocs")],1)}),[],!1,null,null,null);e.default=n.exports}}]);