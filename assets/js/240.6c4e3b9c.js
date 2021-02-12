(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{1102:function(e,t,s){"use strict";s.r(t);var a=s(21),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"modules-cloudpush"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modules-cloudpush"}},[e._v("#")]),e._v(" Modules.CloudPush")]),e._v(" "),s("TypeHeader"),e._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),s("p",[e._v("Push notifications for Android via Appcelerator Cloud Services. When push is enabled, this module persistently connects\nto the ACS servers using a long lived and very light TCP socket. Using this, push notifications can be sent to your\nusers.")]),e._v(" "),s("p",[e._v("Icons that are to be referenced by push notifications sent to the application should be placed in the\n"),s("code",[e._v("platform/android/res/drawable")]),e._v(" folder of the application. Icon file names are specified in the notification message\nwithout their file extension (e.g. "),s("code",[e._v("'logo'")]),e._v(").")]),e._v(" "),s("p",[e._v("Sound files that are to be played by push notifications sent to the application should be placed in the\n"),s("code",[e._v("Resources/android/sound")]),e._v(" folder of the application. Sound file names are specified in the notification message\nwith their file extension (e.g. "),s("code",[e._v("'mysound.mp3'")]),e._v(").")]),e._v(" "),s("p",[e._v("The default property values listed below are used until you set a property for the first time. Because the properties are\npersisted to the device settings (just like "),s("type-link",{attrs:{type:"Titanium.App.Properties"}},[e._v("Ti.App.Properties")]),e._v("), the most recent value you set will always be used.")],1),e._v(" "),s("h2",{attrs:{id:"tiapp-xml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tiapp-xml"}},[e._v("#")]),e._v(" TiApp.xml")]),e._v(" "),s("p",[e._v("The constants this module uses can be overridden in your "),s("code",[e._v("tiapp.xml")]),e._v(", as follows:")]),e._v(" "),s("h3",{attrs:{id:"acs-push-api-url-acs-push-api-url-production-acs-push-api-url-development"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#acs-push-api-url-acs-push-api-url-production-acs-push-api-url-development"}},[e._v("#")]),e._v(" acs-push-api-url, acs-push-api-url-production, acs-push-api-url-development")]),e._v(" "),s("p",[e._v("Specifies which ACS api url is used.")]),e._v(" "),s("h3",{attrs:{id:"acs-gcm-sender-id-acs-gcm-sender-id-production-acs-gcm-sender-id-development"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#acs-gcm-sender-id-acs-gcm-sender-id-production-acs-gcm-sender-id-development"}},[e._v("#")]),e._v(" acs-gcm-sender-id, acs-gcm-sender-id-production, acs-gcm-sender-id-development")]),e._v(" "),s("p",[e._v('Specifies the required GCM sender id. If you visit https://code.google.com/apis/console, and create an app (or use an existing one), the\nsender ID will be in your URL following "#project:". For example, it may look like '),s("code",[e._v('"801234118521"')]),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"acs-grouped-notification-message-acs-grouped-notification-message-production-acs-grouped-notification-message-development"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#acs-grouped-notification-message-acs-grouped-notification-message-production-acs-grouped-notification-message-development"}},[e._v("#")]),e._v(" acs-grouped-notification-message, acs-grouped-notification-message-production, acs-grouped-notification-message-development")]),e._v(" "),s("p",[e._v('Specifies grouped message when there are more than one unread messages in Android notification tray. Use "$number$" to represent number of unread message.\nFor example, if setting '),s("code",[e._v("acs-grouped-notification-message")]),e._v(" to "),s("code",[e._v('"You have $number$ unread messages."')]),e._v(', you will get "You have 3 unread messages." if there are 3 unread message.\nThis value also can be set by acs_grouped_notification_message under '),s("code",[e._v("i18n/specific_locale/string.xml")]),e._v(", to have an internationalization support.")]),e._v(" "),s("p",[e._v("For more information, please look at the Appcelerator Cloud Services documentation on "),s("a",{attrs:{href:"http://www.appcelerator.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.appcelerator.com/"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),s("h3",{attrs:{id:"callback-listener"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#callback-listener"}},[e._v("#")]),e._v(" callback listener")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("CloudPush"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'callback'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("evt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("API")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Received push! '")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" evt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("payload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("API")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'JSON: '")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("evt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("payload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("evt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("payload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("ApiDocs")],1)}),[],!1,null,null,null);t.default=n.exports}}]);