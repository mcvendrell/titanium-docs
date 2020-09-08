(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{1172:function(e,t,o){"use strict";o.r(t);var i=o(21),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"android-titanium-sdk-development-setup"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#android-titanium-sdk-development-setup"}},[e._v("#")]),e._v(" Android Titanium SDK Development Setup")]),e._v(" "),i("h2",{attrs:{id:"overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),i("p",[e._v("This is a guide to setup the Android development environment to develop for Titanium Mobile.")]),e._v(" "),i("h2",{attrs:{id:"getting-started"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting started")]),e._v(" "),i("div",{staticClass:"danger custom-block"},[i("p",{staticClass:"custom-block-title"},[e._v("❗️ Warning")]),e._v(" "),i("p",[e._v("ADT has been discontinued and we don't recommend using it.")])]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Make sure you have the environment setup to build Titanium Mobile: "),i("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/Platform_Development/Building_the_Titanium_SDK_From_Source/"}},[e._v("Building the Titanium SDK From Source")])],1)]),e._v(" "),i("li",[i("p",[e._v("Download Eclipse IDE: "),i("a",{attrs:{href:"http://www.eclipse.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.eclipse.org/downloads/"),i("OutboundLink")],1)])]),e._v(" "),i("li",[i("p",[e._v("After download finishes, unzip and run it. You'll need to create a new workspace if you don't have one already.")])]),e._v(" "),i("li",[i("p",[e._v("Uninstall CDT plug-in if you have it installed in Eclipse. Our setup will not work with CDT.")])]),e._v(" "),i("li",[i("p",[e._v("Install ADT by following the instruction on "),i("a",{attrs:{href:"http://developer.android.com/sdk/eclipse-adt.html#installing",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://developer.android.com/sdk/eclipse-adt.html#installing"),i("OutboundLink")],1)]),e._v(" "),i("ul",[i("li",[e._v('If you see a warning message of "installing unsigned content" during installation, click OK')])])]),e._v(" "),i("li",[i("p",[e._v("Restart Eclipse after installation complete.")])])]),e._v(" "),i("h2",{attrs:{id:"set-up-eclipse-environment"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#set-up-eclipse-environment"}},[e._v("#")]),e._v(" Set up Eclipse environment")]),e._v(" "),i("p",[e._v("After completing the "),i("a",{attrs:{href:"#GettingStarted"}},[e._v("getting started")]),e._v(" section:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Import Projects by launching Eclipse and go to "),i("strong",[e._v("File")]),e._v(" > "),i("strong",[e._v("Import")]),e._v(" > "),i("strong",[e._v("General")]),e._v(" > "),i("strong",[e._v("Existing Projects into Workspace")]),e._v(".")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Click "),i("strong",[e._v("Next")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v("Click "),i("strong",[e._v("Browse")]),e._v(", then go into this directory: "),i("code",[e._v("titanium_mobile/android")])]),e._v(" "),i("ul",[i("li",[e._v("Note: this path will vary (depends on where you clone the directory).")])])]),e._v(" "),i("li",[i("p",[e._v("Click "),i("strong",[e._v("Open")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v("Now you should see a number of projects under "),i("code",[e._v("Projects")]),e._v(' directory. You can enable "Copy projects into workspace", but I prefer not to, b/c if this is enabled, every time you pull from master, or rebuild titanium_mobile, your eclipse workspace will not get updated.')])]),e._v(" "),i("li",[i("p",[e._v("Click "),i("strong",[e._v("Finish")]),e._v(".")])])])]),e._v(" "),i("li",[i("p",[e._v("Create a Java project named "),i("code",[e._v("titanium-dist")]),e._v(" by navigating to "),i("strong",[e._v("File")]),e._v(" > "),i("strong",[e._v("New")]),e._v(" > "),i("strong",[e._v("Java Project")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v("After you name the project, click "),i("strong",[e._v("Finish")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v("Create a "),i("code",[e._v("lib")]),e._v(" directory inside "),i("code",[e._v("titanium-dist")]),e._v(" and link it with "),i("code",[e._v("titanium_mobile/dist/android")]),e._v(" directory. Right-click on titanium-dist project and go to "),i("strong",[e._v("New")]),e._v(" > "),i("strong",[e._v("directory")]),e._v(" > enter name. Next, click "),i("strong",[e._v("Advanced")]),e._v(" > select "),i("strong",[e._v("Link to Alternate Location")]),e._v(" > "),i("strong",[e._v("Browse")]),e._v(" > select "),i("code",[e._v("titanium_mobile/dist/android")]),e._v(" directory (titanium_mobile is the directory you cloned from above).")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("Run SCons")]),e._v(" from terminal, then refresh your workspace. At this point, you should NOT see any errors. If you see odd errors, regarding DDMS or similar, try restarting Eclipse/ADB.")]),e._v(" "),i("ul",[i("li",[e._v("NOTE: If you encounter an error to do with ANDROID_NDK not found, go to Eclipse > About Eclipse > Installation Details, and remove the Android Native Development item.")])])])]),e._v(" "),i("h2",{attrs:{id:"create-test-projects-in-eclipse"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#create-test-projects-in-eclipse"}},[e._v("#")]),e._v(" Create test projects in Eclipse")]),e._v(" "),i("p",[e._v("After the "),i("a",{attrs:{href:"#SetUpEclipseEnvironment"}},[e._v("Eclipse environment")]),e._v(" is set-up, we are now ready to create a test project in Eclipse for debugging purposes.")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Create a new Android project named TitaniumTest:")]),e._v(" "),i("ol",[i("li",[i("p",[i("strong",[e._v("File")]),e._v(" > "),i("strong",[e._v("New")]),e._v(" > "),i("strong",[e._v("Project...")]),e._v(" > "),i("strong",[e._v("Android")]),e._v(" > "),i("strong",[e._v("Android Project")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v("Click "),i("strong",[e._v("Next")]),e._v(" > Select "),i("strong",[e._v("Google API 2.2 (API 8)")]),e._v(". Note: you may see two copies of the google APIs, pick one.")])]),e._v(" "),i("li",[i("p",[e._v("Hit "),i("strong",[e._v("Next")]),e._v(" > enter "),i("strong",[e._v("Package Name")]),e._v(": "),i("code",[e._v("com.titanium.test")])])]),e._v(" "),i("li",[i("p",[e._v("Click "),i("strong",[e._v("Finish")]),e._v(".")])])])]),e._v(" "),i("li",[i("p",[e._v("Create a new Titanium Project via Titanium Studio with the exact same credentials:")]),e._v(" "),i("ol",[i("li",[i("p",[i("strong",[e._v("File")]),e._v(" > "),i("strong",[e._v("New")]),e._v(" > "),i("strong",[e._v("Titanium Mobile Project")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v("Enter "),i("strong",[e._v("name")]),e._v(": "),i("code",[e._v("TitaniumTest")]),e._v(", with the "),i("strong",[e._v("app Id")]),e._v(": "),i("code",[e._v("com.titanium.test")])])]),e._v(" "),i("li",[i("p",[e._v("Click "),i("strong",[e._v("Finish")]),e._v(".")])])])]),e._v(" "),i("li",[i("p",[e._v("Under "),i("code",[e._v("src/com.titanium.test/")]),e._v(", rename the class "),i("code",[e._v("TitaninumTestActivity.java")]),e._v(" to "),i("code",[e._v("TitaniumtestActivity.java")]),e._v(". If Eclipse doesn't automatically update the classname, update it yourself. (This is necessary for the generated files in the next step.)")])]),e._v(" "),i("li",[i("p",[e._v("Run the project you just created via "),i("strong",[e._v("Titanium Studio")]),e._v(" on an "),i("strong",[e._v("Android device/emulator")]),e._v(". This should generate a build directory in your Filesystem.")])]),e._v(" "),i("li",[i("p",[e._v("Navigate to the Filesystem: "),i("strong",[e._v("Build")]),e._v(" > "),i("strong",[e._v("Android")]),e._v(" > "),i("strong",[e._v("gen")]),e._v(" > "),i("strong",[e._v("com")]),e._v(" > "),i("strong",[e._v("titanium")]),e._v(" > "),i("strong",[e._v("test.")])])]),e._v(" "),i("li",[i("p",[e._v("Copy all the "),i("code",[e._v(".java")]),e._v(" files except for "),i("code",[e._v("R.java")]),e._v(" over to your Eclipse project. These files go to "),i("strong",[e._v("src/com/titanium/test")]),e._v(" on your Filesystem.")])]),e._v(" "),i("li",[i("p",[e._v("Replace the contents of your "),i("code",[e._v("AndroidManfiest.xml")]),e._v(" in Eclipse with the one in Titanium Studio, precisely build>Android>AndroidManifest.xml. If you see any errors like missing themes or icons, just delete those fields from your xml.")])]),e._v(" "),i("li",[i("p",[e._v("In your Eclipse Filesystem, create a directory named "),i("code",[e._v("Resources")]),e._v(" in "),i("code",[e._v("/assets")]),e._v(", and "),i("strong",[e._v("copy Resources")]),e._v(" directory from your Titanium Studio project to "),i("code",[e._v("/assets/Resources")]),e._v(". Creating a symlink between two directories "),i("strong",[e._v("will not")]),e._v(" work.")])]),e._v(" "),i("li",[i("p",[e._v("In your Eclipse project, add necessary libraries to it. You can do this by right clicking on the project, go to Properties > Android, then under the Library section, click Add on the right side. You should see a list of options, add ALL of them (you can only add one at a time). This won't actually work anymore with the latest Android SDK. The problem is that you won't be able to breakpoint in the Library project. In your Eclipse project, add necessary libraries to it: go to "),i("strong",[e._v("Properties")]),e._v(" > "),i("strong",[e._v("Java Build Path")]),e._v(" > "),i("strong",[e._v("Projects")]),e._v('. Add all the Titanium projects. Now go to the next tab "Libraries". Add JARS... select all the projects libraries (each time under bin directory). You have to do them one by one. Finally go to the last tab "Order and Export", Select all the titanium projects + jars')]),e._v(" "),i("ul",[i("li",[e._v("If you updated to ADT 22, there's an existing bug that will cause Eclipse environment to stop working. Here's the link to the issue: "),i("a",{attrs:{href:"https://code.google.com/p/android/issues/detail?id=55304",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://code.google.com/p/android/issues/detail?id=55304"),i("OutboundLink")],1),e._v(". To fix this, right-click on the project you want to run (NOT the library projects), "),i("strong",[e._v("Properties")]),e._v(" > "),i("strong",[e._v("Java Build Path")]),e._v(" > "),i("strong",[e._v("Order and Export")]),e._v(" > check "),i("strong",[e._v("Android Private Libraries")]),e._v(" box.")])])]),e._v(" "),i("li",[i("p",[e._v("In your Eclipse project, locate "),i("code",[e._v("TitaniumtestApplication.java")]),e._v(", and remove the "),i("strong",[e._v("content")]),e._v(" inside "),i("code",[e._v("verifyCustomModules")]),e._v(" method, but "),i("strong",[e._v("DO NOT")]),e._v(" remove the method.")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("Refresh")]),e._v(" your workspace, full clean, and re-build.")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("Run/Debug")]),e._v(" the project.")])])]),e._v(" "),i("h2",{attrs:{id:"setting-up-intellij-idea-environment"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-intellij-idea-environment"}},[e._v("#")]),e._v(" Setting up IntelliJ IDEA environment")]),e._v(" "),i("ol",[i("li",[i("p",[i("strong",[e._v("Download")]),e._v(" and install IntelliJ IDEA here: "),i("a",{attrs:{href:"https://www.jetbrains.com/idea/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.jetbrains.com/idea/download/"),i("OutboundLink")],1)])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("Import Projects")]),e._v(" > Select your "),i("strong",[e._v("source")]),e._v(" ("),i("code",[e._v("~/Titanium_Mobile/android")]),e._v(") > choose "),i("strong",[e._v("Eclipse")]),e._v(" box, and hit "),i("strong",[e._v("Next")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v("Make sure format is "),i("code",[e._v(".idea")]),e._v(" and hit "),i("strong",[e._v("Next")]),e._v(" > "),i("strong",[e._v("Now")]),e._v(". All the projects should be selected and you want to "),i("strong",[e._v("unselect")]),e._v(" the "),i("code",[e._v("android-build")]),e._v(" and "),i("code",[e._v("TitaniumTest")]),e._v(" projects. Then hit "),i("strong",[e._v("Next")]),e._v(".")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("Select Android 6.0 SDK")]),e._v(" and click "),i("strong",[e._v("Finish")]),e._v(".")]),e._v(" "),i("ul",[i("li",[e._v("Note: if this is your first time running InteillJ, you may need to set Android home path. If you don't see Android 6.0, you'll need to install Android 6.0.")])])]),e._v(" "),i("li",[i("p",[e._v('Now you may see a "Locate Eclipse Information" dialog window, click '),i("strong",[e._v("Cancel")]),e._v('. A dialog window called "Import from Eclipse" may pop up in which case you click '),i("strong",[e._v("Cancel")]),e._v(". This will result in an error says unknown JDKs. If you're seeing this, one or more projects imported is using the JDK that is not configured in IntelliJ. For instance, if you have JDK 1.7 on IntelliJ, and kroll-apt project is using 1.6, you'll see this. Click "),i("strong",[e._v("Ok")]),e._v(" for now.")])]),e._v(" "),i("li",[i("p",[e._v('Now you may see the dialog window "Import Android dependencies from property files", check all, and click '),i("strong",[e._v("Ok")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v("This step assumes you have JDK 1.7 configured on IntelliJ. Do a quick "),i("strong",[e._v("Build")]),e._v(" > "),i("strong",[e._v("Make Project")]),e._v('. You should see the error "Cannot start compiler... SDK is not specified for module kroll-apt". Click '),i("strong",[e._v("Ok")]),e._v(', this should take you to Project Structure of kroll-apt, where you\'ll see "JavaSE-1.6" and "ECLIPSE" boxes red. Remove ECLIPSE by right-clicking and selecting '),i("strong",[e._v("remove")]),e._v('. Then change "Module SDK" to '),i("strong",[e._v("1.7")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v("In the same window, go through each module and remove "),i("code",[e._v("com.android.ide.eclipse.adt.DEPENDENCIES")]),e._v(". Click "),i("strong",[e._v("Ok")]),e._v(" once you're done.")])]),e._v(" "),i("li",[i("p",[e._v("Right-click on "),i("strong",[e._v("titanium")]),e._v(" "),i("strong",[e._v("module")]),e._v(" > "),i("strong",[e._v("Open Modules Settings")]),e._v(" > "),i("strong",[e._v('Remove "kroll-apt.jar"')]),e._v(' > click on the "+" button at bottom left corner, choose '),i("strong",[e._v("Module Dependencies")]),e._v(', then choose "'),i("strong",[e._v("kroll-apt")]),e._v('". Now check the export box for '),i("code",[e._v("kroll-apt")]),e._v(", "),i("code",[e._v("kroll-common")]),e._v(", "),i("code",[e._v("android-support-v7-cardview")]),e._v(" and "),i("code",[e._v("android-support-v7-appcompat")]),e._v(". Now change the scope of "),i("code",[e._v("android-support-v7-cardview")]),e._v(' to "Provided". Then go to each modules, and remove '),i("code",[e._v("kroll-apt.jar")]),e._v(" if present.")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("Build")]),e._v(" > "),i("strong",[e._v("Rebuild Module")]),e._v(". It should compile successfully. If the build fails due to map, right-click the "),i("strong",[e._v("map module")]),e._v(" > "),i("strong",[e._v("Open Module Settings")]),e._v(', and make sure the Module SDK is "Android 6.0 Google APIs".')])])]),e._v(" "),i("h2",{attrs:{id:"create-test-projects-in-intellij"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#create-test-projects-in-intellij"}},[e._v("#")]),e._v(" Create test projects in IntelliJ")]),e._v(" "),i("p",[e._v("These steps assumes you already have a working test project for Eclipse, if not please follow the procedure for creating one above.")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Import your Eclipse project over: "),i("strong",[e._v("File")]),e._v(" > "),i("strong",[e._v("New")]),e._v(" > "),i("strong",[e._v("Module")]),e._v(" from existing sources. For first timers, import "),i("code",[e._v("titanium_mobile/android/dev/TitaniumTest")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v('Right-click on your newly imported module, go to module settings, click on the "+" button on the bottom left, select "Module Dependency" and add everything on that list EXCEPT for '),i("code",[e._v("kroll-common")]),e._v(", "),i("code",[e._v("appcompat")]),e._v(", and "),i("code",[e._v("cardview")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v("Run "),i("strong",[e._v("SCons")]),e._v(" if you haven't already. Forgetting to run SCons will result in runtime error. To run SCons for Titanium SDK versions 5.4.0+, navigate to "),i("code",[e._v("titanium_mobile/build")]),e._v(" directory then run this in the terminal: "),i("code",[e._v("npm install && node scons.js build && node scons.js package && node scons.js install")]),e._v(". Ensure you have latest stable version of Node and npm installed for this to work.")])]),e._v(" "),i("li",[i("p",[e._v("Go to "),i("strong",[e._v("Build")]),e._v(" > "),i("strong",[e._v("Rebuild Project")]),e._v(".")])])]),e._v(" "),i("h2",{attrs:{id:"setting-up-intelij-idea-environment-on-windows"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-intelij-idea-environment-on-windows"}},[e._v("#")]),e._v(" Setting up InteliJ IDEA environment on Windows")]),e._v(" "),i("h3",{attrs:{id:"requirements"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),i("ul",[i("li",[i("p",[i("a",{attrs:{href:"https://www.jetbrains.com/idea/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("InteliJ IDEA"),i("OutboundLink")],1)])]),e._v(" "),i("li",[i("p",[i("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Java Development Kit"),i("OutboundLink")],1)])]),e._v(" "),i("li",[i("p",[i("a",{attrs:{href:"https://developer.android.com/studio/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Android SDK"),i("OutboundLink")],1)])]),e._v(" "),i("li",[i("p",[i("a",{attrs:{href:"https://developer.android.com/ndk/downloads/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Android NDK"),i("OutboundLink")],1)])]),e._v(" "),i("li",[i("p",[i("a",{attrs:{href:"http://ant.apache.org/bindownload.cgi",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ant"),i("OutboundLink")],1)])])]),e._v(" "),i("h3",{attrs:{id:"environment-variables"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#environment-variables"}},[e._v("#")]),e._v(" Environment variables")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("ANDROID_SDK - Location of Android SDK with no spaces: "),i("code",[e._v("(C:\\PROGRA~2\\Android\\ANDROI~1)")])])]),e._v(" "),i("li",[i("p",[e._v("ANDROID_NDK - Location of Android NDK with no spaces: "),i("code",[e._v("(C:\\PROGRA~2\\Android\\ANDROI~2)")])])]),e._v(" "),i("li",[i("p",[e._v("ANT_HOME - Location of Ant: "),i("code",[e._v("(C:\\ant)")])])]),e._v(" "),i("li",[i("p",[e._v("JAVA_HOME - Location of JDK: "),i("code",[e._v("(C:\\Program Files (x86)\\Java\\jdk1.8.0_102\\)")])])])]),e._v(" "),i("h3",{attrs:{id:"importing-android-titanium-project-into-intelij"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#importing-android-titanium-project-into-intelij"}},[e._v("#")]),e._v(" Importing Android Titanium project into InteliJ")]),e._v(" "),i("p",[i("img",{attrs:{src:o(721),alt:"import_titanium_android"}})]),e._v(" "),i("h3",{attrs:{id:"fix-dependencies"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#fix-dependencies"}},[e._v("#")]),e._v(" Fix dependencies")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Right-click on the "),i("code",[e._v("android")]),e._v(" project and click "),i("strong",[e._v("Open Module Settings")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v('Click the "+" to add a '),i("strong",[e._v("New Project Library")]),e._v(", and click "),i("strong",[e._v("Java")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v("Navigate to "),i("code",[e._v("titanium\\lib\\aps-analytics.jar")]),e._v(" and click "),i("strong",[e._v("OK")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v("Add this library to "),i("strong",[e._v("app")]),e._v(", "),i("strong",[e._v("locale")]),e._v(", "),i("strong",[e._v("network")]),e._v(", and "),i("strong",[e._v("platform")]),e._v(" modules.")])]),e._v(" "),i("li",[i("p",[e._v("In the library list you should also see "),i("code",[e._v("lib3")]),e._v(", right-click, and select "),i("strong",[e._v("Add to Modules...")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v("Add this library to "),i("code",[e._v("calendar")]),e._v(", "),i("code",[e._v("contacts")]),e._v(", "),i("code",[e._v("geolocation")]),e._v(", "),i("code",[e._v("gesture map")]),e._v(", and "),i("code",[e._v("TitaniumTest")]),e._v(" modules.")])]),e._v(" "),i("li",[i("p",[e._v("Again, right-click "),i("code",[e._v("lib1")]),e._v(", and select "),i("strong",[e._v("Add to Modules...")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v("Add this library to "),i("strong",[e._v("TitaniumTest")]),e._v(".")])])]),e._v(" "),i("h3",{attrs:{id:"compiling-kroll-v8-on-windows"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#compiling-kroll-v8-on-windows"}},[e._v("#")]),e._v(" Compiling kroll-v8 on Windows")]),e._v(" "),i("h4",{attrs:{id:"additional-requirements"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#additional-requirements"}},[e._v("#")]),e._v(" Additional Requirements")]),e._v(" "),i("ul",[i("li",[i("p",[i("a",{attrs:{href:"http://gnuwin32.sourceforge.net/packages/gzip.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("gzip"),i("OutboundLink")],1)])]),e._v(" "),i("li",[i("p",[i("a",{attrs:{href:"http://gnuwin32.sourceforge.net/packages/gperf.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("gperf"),i("OutboundLink")],1)])])]),e._v(" "),i("p",[e._v("Download the binaries, rename "),i("em",[e._v("gzip")]),e._v(" into "),i("em",[e._v("gunzip")]),e._v(" and place both into "),i("code",[e._v("C:\\Windows\\System32")])]),e._v(" "),i("h4",{attrs:{id:"scons"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#scons"}},[e._v("#")]),e._v(" SCons")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Open a command prompt and navigate to "),i("code",[e._v("titanium_mobile/build")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v("Execute "),i("code",[e._v("node scons.js build")])])])]),e._v(" "),i("h2",{attrs:{id:"formatting"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#formatting"}},[e._v("#")]),e._v(" Formatting")]),e._v(" "),i("p",[e._v("For formatting, we follow Android's formatting style. You can follow the eclipse formatting rules at "),i("a",{attrs:{href:"https://source.android.com/source/using-eclipse.html#eclipse-formatting",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://source.android.com/source/using-eclipse.html#eclipse-formatting"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("p",[e._v("You can download the formatting file here: "),i("a",{attrs:{href:"./attachments_39846449_1_android-formatting.xml"}},[e._v("android-formatting.xml")])])])}),[],!1,null,null,null);t.default=n.exports},721:function(e,t,o){e.exports=o.p+"assets/img/import_titanium_android.e3696ee2.gif"}}]);