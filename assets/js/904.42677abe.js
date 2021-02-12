(window.webpackJsonp=window.webpackJsonp||[]).push([[904],{2071:function(e,t,o){"use strict";o.r(t);var r=o(21),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"errors-while-starting-studio"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#errors-while-starting-studio"}},[e._v("#")]),e._v(" Errors While Starting Studio")]),e._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),o("p",[e._v("Occasionally you may experience errors starting Studio. Here are some suggested solutions.")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),o("p",[e._v("See "),o("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Basic_Concepts/Switching_your_Workspace/"}},[e._v("Switching your Workspace")]),e._v(" to help find your current workspace location")],1)]),e._v(" "),o("h2",{attrs:{id:"workspace-in-use-or-cannot-be-created-choose-a-different-one"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#workspace-in-use-or-cannot-be-created-choose-a-different-one"}},[e._v("#")]),e._v(" Workspace in use or cannot be created, choose a different one")]),e._v(" "),o("p",[e._v("This can happen as a result of an improper shutdown of Studio. To resolve the issue, you need to delete a .lock file.")]),e._v(" "),o("ol",[o("li",[e._v("Delete the file %WORKSPACE_PATH%/.metadata/.lock, and restart Studio")])]),e._v(" "),o("h2",{attrs:{id:"an-error-has-occurred"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#an-error-has-occurred"}},[e._v("#")]),e._v(" An Error Has Occurred")]),e._v(" "),o("p",[e._v("These are errors pop up a dialog box, asking you to look at a log file")]),e._v(" "),o("h3",{attrs:{id:"see-the-log-file-users"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#see-the-log-file-users"}},[e._v("#")]),e._v(" See the log file /Users/....")]),e._v(" "),o("p",[e._v("Open the log file at the specified location. If you see messages like:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("org.osgi.framework.BundleException: Exception in org.eclipse.core.resources.ResourcesPlugin.start() of bundle org.eclipse.core.resources.\n...\nCaused by: org.eclipse.core.internal.dtree.ObjectNotFoundException: Tree element 'XXX' not found.\n")])])]),o("p",[e._v("It is caused by "),o("a",{attrs:{href:"https://bugs.eclipse.org/bugs/show_bug.cgi?id=149121",target:"_blank",rel:"noopener noreferrer"}},[e._v("this"),o("OutboundLink")],1),e._v(" bug in Eclipse, most likely due to a case where Studio quit or was closed unexpectedly, corrupting a particular file.")]),e._v(" "),o("p",[e._v("Steps to fix:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Copy your whole workspace first, so that you are not risking your original files when you attempt these steps")])]),e._v(" "),o("li",[o("p",[e._v("Delete the file %WORKSPACE_PATH%/.metadata/.plugins/org.eclipse.core.resources/.snap, and restart Studio")])])]),e._v(" "),o("p",[e._v("This will start Studio, but your workspace will most likely be missing your projects. This is okay--you can quickly reimport them")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("File > Import > Existing Projects....")])]),e._v(" "),o("li",[o("p",[e._v("Select the workspace directory from above, and finish the wizard")])])]),e._v(" "),o("h2",{attrs:{id:"launching-the-studio-with-clean"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#launching-the-studio-with-clean"}},[e._v("#")]),e._v(" Launching the Studio with -clean")]),e._v(" "),o("p",[e._v("If Studio does not appear to work properly, you can try and launch it with a -clean option.")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Follow the instructions "),o("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Adding_Command-Line_Options/"}},[e._v("here")]),e._v(" for adding a launcher argument.")],1)]),e._v(" "),o("li",[o("p",[e._v("Add "),o("strong",[e._v("-clean")]),e._v(" to the launch arguments for Studio or Eclipse.")])])]),e._v(" "),o("h2",{attrs:{id:"how-to-stop-studio-from-loading-a-problem-file"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-stop-studio-from-loading-a-problem-file"}},[e._v("#")]),e._v(" How to stop Studio from loading a problem file")]),e._v(" "),o("p",[e._v("A file might be causing trouble when Studio is restarted because it is very large or in some way corrupted. There are a couple of ways you could prevent Studio from loading the file.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Rename the problem file. This means Studio can no longer find it and so will ignore the file on restart.")])]),e._v(" "),o("li",[o("p",[e._v("Delete the <studio_workspace>\\.metadata\\.plugins\\org.eclipse.ui.workbench\\workbench.xml file, where the state of workbench when exiting is saved. This means Studio will not preload any files that were open on the last exit.")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);