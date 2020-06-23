(window.webpackJsonp=window.webpackJsonp||[]).push([[338],{530:function(e,r,a){"use strict";a.r(r);var t=a(4),i=Object(t.a)({},function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"titanium-app-windows-backgroundservice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#titanium-app-windows-backgroundservice","aria-hidden":"true"}},[e._v("#")]),e._v(" Titanium.App.Windows.BackgroundService")]),e._v(" "),a("TypeHeader"),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("BackgroundService provides a basic way to register background tasks.")]),e._v(" "),a("pre",[a("code",[e._v("// Clear all tasks that is associated with this app\nTi.App.Windows.BackgroundService.unregisterAllTasks();\n\n// Register new task that is invoked for each 15 minutes interval.\nvar task = Ti.App.Windows.BackgroundService.registerTimerTask('ComExampleTest.BackgroundServiceTask', 15, false);\nif (task) {\n  Ti.API.info(\"Background task is registered: task id=\" + task.taskId);\n}\n")])]),e._v(" "),a("p",[e._v("For more information see "),a("a",{attrs:{href:"http://docs.appcelerator.com/platform/latest/#!/guide/Windows_Background_Service_Quick_Start",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows Background Service Quick Start"),a("OutboundLink")],1)]),e._v(" "),a("ApiDocs")],1)},[],!1,null,null,null);r.default=i.exports}}]);