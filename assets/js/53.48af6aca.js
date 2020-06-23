(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{310:function(e,t,n){"use strict";n.r(t);var i=n(4),a=Object(i.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"modules-nfc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#modules-nfc","aria-hidden":"true"}},[e._v("#")]),e._v(" Modules.Nfc")]),e._v(" "),n("TypeHeader"),e._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v('This module provides access to Near Field Communication (NFC) functionality,\nallowing applications to read and write (Android-only) NFC tags.\nA "tag" may actually be another device that appears as a tag.')]),e._v(" "),n("h3",{attrs:{id:"nfc-resources"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nfc-resources","aria-hidden":"true"}},[e._v("#")]),e._v(" NFC Resources")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Android")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"http://developer.android.com/guide/topics/connectivity/nfc/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Near Field Communication"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"http://developer.android.com/reference/android/nfc/package-summary.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("android.nfc"),n("OutboundLink")],1)])])]),e._v(" "),n("li",[n("strong",[e._v("iOS")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://developer.apple.com/documentation/corenfc",target:"_blank",rel:"noopener noreferrer"}},[e._v("CoreNFC"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://developer.apple.com/videos/play/wwdc2017/718/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Introduction to CoreNFC at WWDC17"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/hansemannn/iOS11-NFC-Example",target:"_blank",rel:"noopener noreferrer"}},[e._v("Native example"),n("OutboundLink")],1)])])])]),e._v(" "),n("h3",{attrs:{id:"requirements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),n("ul",[n("li",[n("p",[n("strong",[e._v("Android")])]),e._v(" "),n("ul",[n("li",[e._v("Android 4.1 (API 16) and later")]),e._v(" "),n("li",[e._v("An NFC capable device")])])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("iOS")])]),e._v(" "),n("ul",[n("li",[e._v("iOS 11 and later")]),e._v(" "),n("li",[e._v("iPhone 7 / iPhone 7 Plus and later")])])])]),e._v(" "),n("h3",{attrs:{id:"getting-started"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),n("ul",[n("li",[e._v("View the "),n("a",{attrs:{href:"http://docs.appcelerator.com/platform/latest/#!/guide/Using_Titanium_Modules",target:"_blank",rel:"noopener noreferrer"}},[e._v("Using Titanium Modules"),n("OutboundLink")],1),e._v("\ndocument for instructions on getting started with using this module in your application.")])]),e._v(" "),n("h3",{attrs:{id:"configure-ios-capabilities-and-provisioning-profiles"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configure-ios-capabilities-and-provisioning-profiles","aria-hidden":"true"}},[e._v("#")]),e._v(" Configure iOS: Capabilities and Provisioning Profiles")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Required capabilities:")]),e._v(" "),n("pre",[n("code",[e._v("<key>com.apple.developer.nfc.readersession.formats</key>\n<array>\n    <string>NDEF</string>\n</array>\n")])])]),e._v(" "),n("li",[n("p",[e._v("Provisioning Profile entitled with the NFC Tag Reading capability")])])]),e._v(" "),n("h3",{attrs:{id:"configure-android-tag-dispatching-and-intent-filters"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configure-android-tag-dispatching-and-intent-filters","aria-hidden":"true"}},[e._v("#")]),e._v(" Configure Android: Tag Dispatching and Intent Filters")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("The Android "),n("a",{attrs:{href:"http://developer.android.com/guide/topics/connectivity/nfc/nfc.html#tag-dispatch",target:"_blank",rel:"noopener noreferrer"}},[e._v("tag dispatch system"),n("OutboundLink")],1),e._v("\nis responsible for dispatching NFC messages to the appropriate application. In the\nsituation where you are not using foreground dispatching, you will need to define intent-filters in the\ntiapp.xml file to specify which types of NFC messages the application wants to receive. By using intent-filters in\nthe tiapp.xml file, the application will be automatically started if a matching\nNFC message is dispatched.")]),e._v(" "),n("p",[e._v("Add code similar to the following to your tiapp.xml file:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Replace occurrences of the activity name ("),n("code",[e._v("Tagviewer")]),e._v(") with your activity name.")])]),e._v(" "),n("li",[n("p",[e._v("Add the NFC permissions to your Android configuration")])]),e._v(" "),n("li",[n("p",[e._v("Replace the NFC specific intent filters with filters appropriate for your application.")]),e._v(" "),n("pre",[n("code",[e._v('  <android xmlns:android="http://schemas.android.com/apk/res/android">\n      <manifest>\n          \x3c!-- Required NFC permissions --\x3e\n          <uses-permission android:name="android.permission.NFC" />\n          <uses-feature android:name="android.hardware.nfc" android:required="true" /> \n          \n          \x3c!-- NFC Intent filters --\x3e\n          <application>\n              <activity android:name=".TagviewerActivity"\n               android:label="TagViewer" android:theme="@style/Theme.Titanium"\n               android:configChanges="keyboardHidden|orientation">\n                  <intent-filter>\n                      <action android:name="android.nfc.action.TECH_DISCOVERED"/>\n                      <category android:name="android.intent.category.DEFAULT"/>\n                  </intent-filter>\n\n                  <intent-filter>\n                      <action android:name="android.nfc.action.NDEF_DISCOVERED"/>\n                      <category android:name="android.intent.category.DEFAULT"/>\n                      <data android:mimeType="text/plain" />\n                  </intent-filter>\n\n                  <intent-filter>\n                      <action android:name="android.nfc.action.TAG_DISCOVERED"/>\n                      <category android:name="android.intent.category.DEFAULT"/>\n                  </intent-filter>\n              </activity>\n          </application>\n      </manifest>\n  </android>\n')])])])]),e._v(" "),n("p",[e._v("Note that if you are using "),n("a",{attrs:{href:"http://developer.android.com/guide/topics/connectivity/nfc/advanced-nfc.html#foreground-dispatch",target:"_blank",rel:"noopener noreferrer"}},[e._v("foreground dispatching"),n("OutboundLink")],1),e._v("\nyou do not need to define intent filters in the application's tiapp.xml file.")])])]),e._v(" "),n("h3",{attrs:{id:"accessing-the-module"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#accessing-the-module","aria-hidden":"true"}},[e._v("#")]),e._v(" Accessing the Module")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Use "),n("code",[e._v("require")]),e._v(" to access this module from JavaScript:")]),e._v(" "),n("pre",[n("code",[e._v("var nfc = require('ti.nfc');\n")])]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("nfc")]),e._v(" variable is a reference to the Module object.")])])]),e._v(" "),n("h3",{attrs:{id:"creating-an-adapter"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-adapter","aria-hidden":"true"}},[e._v("#")]),e._v(" Creating an Adapter")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("The NFC adapter gives you access to the features of the NFC device. The NFC adapter proxy is always\nassociated with the activity that was the current activity when it was created. Therefore, the NFC\nAdapter should be created after the activity has been opened. You can use the window "),n("code",[e._v("open")]),e._v(" event to know\nwhen the activity has been opened.")]),e._v(" "),n("pre",[n("code",[e._v("$.index.addEventListener('open', function(e) {\n    nfcAdapter = nfc.createNfcAdapter({\n        onNdefDiscovered: handleDiscovery,\n        onTagDiscovered: handleDiscovery, // Android-only\n        onTechDiscovered: handleDiscovery // Android-only\n    });\n\n    if (!nfcAdapter.isEnabled()) {\n        Ti.API.error('NFC is not enabled on this device!');\n        return;\n    }\n});\n")])])])]),e._v(" "),n("h3",{attrs:{id:"handling-intents-android"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#handling-intents-android","aria-hidden":"true"}},[e._v("#")]),e._v(" Handling Intents (Android)")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("NFC Intents are dispatched to an activity by the Android tag dispatch system. When your activity receives a new intent,\nit must forward the intent to the "),n("code",[e._v("onNewIntent")]),e._v(" method of the NFC adapter for processing.")]),e._v(" "),n("pre",[n("code",[e._v("Ti.Android.currentActivity.addEventListener('newintent', function (e) {\n    nfcAdapter.onNewIntent(e.intent);\n});\n")])]),e._v(" "),n("p",[e._v("If your application is started as the result of an NFC intent, that intent will automatically be processed when the\nNFC module is loaded.")])])]),e._v(" "),n("h3",{attrs:{id:"foreground-dispatch"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#foreground-dispatch","aria-hidden":"true"}},[e._v("#")]),e._v(" Foreground Dispatch")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("The foreground dispatch system allows an activity to intercept an intent and claim priority over other activities that handle the same intent.\nWhen using foreground dispatching, you must process the "),n("code",[e._v("pause")]),e._v(" and "),n("code",[e._v("resume")]),e._v(" events on the activity and enable or disable\nforeground dispatching.")]),e._v(" "),n("pre",[n("code",[e._v("var currentActivity = Ti.Android.currentActivity;\n\ncurrentActivity.addEventListener('resume', function(e) {\n    nfcAdapter.enableForegroundDispatch(dispatchFilter);\n});\ncurrentActivity.addEventListener('pause', function(e) {\n    nfcAdapter.disableForegroundDispatch();\n});\n")])])])]),e._v(" "),n("h3",{attrs:{id:"example-applications"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-applications","aria-hidden":"true"}},[e._v("#")]),e._v(" Example applications")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Android example applications are located in the "),n("code",[e._v("example/android")]),e._v(" folder of the module:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("TagBeam")]),e._v(" demonstrates how to use Android Beam to send messages to another NFC capable device.")]),e._v(" "),n("li",[n("code",[e._v("TagForeground")]),e._v(" demonstrates how to read NFC tags only when the application is in the foreground.")]),e._v(" "),n("li",[n("code",[e._v("TagViewer")]),e._v(" demonstrates how to receive NFC tag intents even when the application is not running.")]),e._v(" "),n("li",[n("code",[e._v("TagWriter")]),e._v(" demonstrates how to write to an NFC tag using the Ndef tag technology data format.")])])]),e._v(" "),n("li",[n("p",[e._v("iOS example applications are located in the "),n("code",[e._v("example/ios")]),e._v(" folder of the module:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("TagViewer")]),e._v(" demonstrates how to receive NFC tags even when the application is running.")])])])]),e._v(" "),n("h2",{attrs:{id:"examples"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),n("h3",{attrs:{id:"creating-nfc-adapter-ios-android"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#creating-nfc-adapter-ios-android","aria-hidden":"true"}},[e._v("#")]),e._v(" Creating NFC Adapter (iOS & Android)")]),e._v(" "),n("p",[e._v("This example demonstrates the proper technique for creating an NFC adapter.\nThe NFC Adapter should be created after the window has been opened.")]),e._v(" "),n("pre",[n("code",[e._v("var nfc = require('ti.nfc');\nvar nfcAdapter = null;\n\n$.index.addEventListener('open', function(e) {\n    // Must wait until the activity has been opened before setting up NFC\n    // Create the NFC adapter to be associated with this activity. \n    // There should only be ONE adapter created per activity.\n    nfcAdapter = nfc.createNfcAdapter({\n        onNdefDiscovered: handleDiscovery,\n        onTagDiscovered: handleDiscovery, // Android-only\n        onTechDiscovered: handleDiscovery // Android-only\n    });\n\n    // It's possible that the device does not support NFC. Check it here\n    // before we go any further. For iOS, right now this is decided \n    // internally by the system. \n    if (OS_ANDROID) {\n        if (!nfcAdapter.isEnabled()) {\n            alert('NFC is not enabled on this device');\n            return;\n        }\n        Ti.Android.currentActivity.addEventListener('newintent', function (e) {\n            nfcAdapter.onNewIntent(e.intent);\n        });\n        \n    // iOS needs to be told to scan\n    } else if (OS_IOS) {\n        nfcAdapter.begin();\n    }\n});\n\nfunction handleDiscovery(e) {\n    alert(JSON.stringify(e, null, 2));\n}\n\n$.index.open();\n")])]),e._v(" "),n("ApiDocs")],1)},[],!1,null,null,null);t.default=a.exports}}]);