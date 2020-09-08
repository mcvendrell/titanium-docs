(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{1070:function(t,a,e){"use strict";e.r(a);var s=e(21),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"webpack-guide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-guide"}},[t._v("#")]),t._v(" Webpack Guide")]),t._v(" "),s("p",[t._v("Starting with Titanium 9.1.0, you can use "),s("a",{attrs:{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack"),s("OutboundLink")],1),t._v(" as an alternative build pipeline for all your project's assets.")]),t._v(" "),s("p",[t._v("This guide walks you through the steps that are necessary to prepare your Titanium environment for development using webpack and quickly get started with the new webpack project template.")]),t._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[t._v("Using weback in Titanium enables a lot of great improvements, including:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Significantly faster build times for both clean and incremental builds, especially for larger projects.")])]),t._v(" "),s("li",[s("p",[t._v("Easily use your favorite modules from NPM. Just install them into the project root.")])]),t._v(" "),s("li",[s("p",[t._v("Pre-configured for your Titanium project, no need to deal with webpack configuration files to get up and running.")])]),t._v(" "),s("li",[s("p",[t._v("Highly customizable via a simple plugin API, which allows you to hook into the webpack configuration with "),s("a",{attrs:{href:"https://github.com/neutrinojs/webpack-chain",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-chain"),s("OutboundLink")],1),t._v(". Add new loaders and/or plugins to introduce new capabilites into your project.")])]),t._v(" "),s("li",[s("p",[t._v("Web UI to view build results and analyze your app bundle assets.")])])]),t._v(" "),s("p",[t._v("All webpack builds in Titanium are managed via "),s("code",[t._v("@appcd/plugin-webpack")]),t._v(", a plugin for the "),s("a",{attrs:{href:"https://github.com/appcelerator/appc-daemon",target:"_blank",rel:"noopener noreferrer"}},[t._v("Appcelerator Daemon"),s("OutboundLink")],1),t._v(" (or appcd for short), which starts them on demand and also makes sure to stop them after a certain amount of inactivity. This ensures fast build times while you are working on your project and automatically saves system resources when you stop and don't need the webpack build anymore.")]),t._v(" "),s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),s("p",[t._v("Since webpack support is implemented as a plugin for appcd you need have it installed to use webpack with Titanium. For "),s("code",[t._v("appc")]),t._v(" CLI versions 8.0.0+, appcd comes bundled with the CLI so you will already have it. If you use the "),s("code",[t._v("ti")]),t._v(" CLI you need to install appcd globally on your machine.")]),t._v(" "),s("p",[s("strong",[t._v("Install appcd")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -g appcd\n")])])]),s("p",[t._v("After appcd is installed you need to add the webpack plugin by running the following:")]),t._v(" "),s("p",[s("strong",[t._v("Install @appcd/plugin-webpack")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -g @appcd/plugin-webpack\n")])])]),s("p",[t._v("Appcd will automatically detect the new plugin and start it on demand. Now that all the necessary tooling for webpack is installed you can create your first Titanium project with webpack support enabled.")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("💡 Want to migrate an existing project?")]),t._v(" "),s("p",[t._v("Already have an existing Titanium project and want to opt-in to using webpack? No problem, just follow our "),s("a",{attrs:{href:"https://github.com/appcelerator/appcd-plugin-webpack/blob/develop/migration.md#webpack-migration-guide",target:"_blank",rel:"noopener noreferrer"}},[t._v("migration guide"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("h2",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),s("p",[t._v("There is a new template called "),s("code",[t._v("webpack-default")]),t._v(" available in SDK 9.1.0+ which can be specified using the "),s("code",[t._v("--template")]),t._v(" flag when you create a new Titanium project.")]),t._v(" "),s("p",[s("strong",[t._v("Create new Titanium project with webpack")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# appc-cli")]),t._v("\nappc new --template webpack-default\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ti-cli")]),t._v("\nti create --template webpack-default\n")])])]),s("p",[t._v("This will create a new Titanium project and automatically install all required project dependencies. After this you can start working on your Titanium project (almost) as usual.")]),t._v(" "),s("h2",{attrs:{id:"working-with-webpack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#working-with-webpack"}},[t._v("#")]),t._v(" Working with Webpack")]),t._v(" "),s("p",[t._v("When working with webpack in your Titanium project a few things are handled differently compared to a standard Titanium project. This section will go through the important changes and explain how things work with webpack. For more in-depth details visit the "),s("a",{attrs:{href:"https://github.com/appcelerator/appcd-plugin-webpack/blob/develop/migration.md#code-migration",target:"_blank",rel:"noopener noreferrer"}},[t._v("code migration"),s("OutboundLink")],1),t._v(" section in our migration guide for existing projects.")]),t._v(" "),s("h3",{attrs:{id:"module-resolution"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#module-resolution"}},[t._v("#")]),t._v(" Module Resolution")]),t._v(" "),s("p",[t._v("Modules are resolved at build time on your local machine, not from the root directory of your final app bundle. This is the most notable difference to non-webpack builds, where all requires will be resolved at runtime.")]),t._v(" "),s("p",[t._v("Most of the time you won't notice this difference since webpack is configured to resolve modules just like it would be done in a standard Titanium project. However, there is one exception which is when you use absolute paths. Using absolute paths you can quickly reference files from the source root directory of your app. This is especially useful if you are deep inside a nested folder structure so you don't have to type "),s("code",[t._v("../")]),t._v(" over and over again. But since webpack resolves modules at build time it will start looking at the root directory on your local machine, which obviously is not what you want. To solve this issue u se the "),s("code",[t._v("@")]),t._v(" "),s("a",{attrs:{href:"#aliases"}},[t._v("alias")]),t._v(" instead to refer to the source directory of your project.")]),t._v(" "),s("p",[s("strong",[t._v("Absolute module path")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// without webpack\n// import '/utils/file';\n\n// with webpack\nimport '@/utils/file';\n")])])]),s("h3",{attrs:{id:"aliases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aliases"}},[t._v("#")]),t._v(" Aliases")]),t._v(" "),s("p",[t._v("To make your life easier when dealing with relative imports throughout your project there is a pre-defined alias.")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("@")]),t._v(": project source directory")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Classic: "),s("code",[t._v("src")])])]),t._v(" "),s("li",[s("p",[t._v("Alloy: "),s("code",[t._v("app/lib")])])]),t._v(" "),s("li",[s("p",[t._v("Vue.js: "),s("code",[t._v("src")])])]),t._v(" "),s("li",[s("p",[t._v("Angular: "),s("code",[t._v("src")])])])])])]),t._v(" "),s("h3",{attrs:{id:"npm-dependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm-dependencies"}},[t._v("#")]),t._v(" NPM Dependencies")]),t._v(" "),s("p",[t._v("You can install NPM modules directly into your project root directory and require them in your Titanium code. Webpack takes care of the rest and makes sure to properly resolve and bundle them into your app.")]),t._v(" "),s("h3",{attrs:{id:"platform-specific-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#platform-specific-files"}},[t._v("#")]),t._v(" Platform specific files")]),t._v(" "),s("p",[t._v("To use different platform specific files for a module just add the platform name between the actual file name and the file extension.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// index.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" msg "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/utils'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// utils.ios.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" msg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'This is used on iOS'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// utils.android.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" msg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'This is used on Android'")]),t._v("\n")])])]),s("h3",{attrs:{id:"web-ui"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-ui"}},[t._v("#")]),t._v(" Web UI")]),t._v(" "),s("p",[t._v("The webpack build pipeline comes with a small web ui that lets you view general information, stats and all output of a webpack build task for each Titanium project. By default it is accessible at "),s("a",{attrs:{href:"http://localhost:1732/webpack/latest/web,",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:1732/webpack/latest/web,"),s("OutboundLink")],1),t._v(" which will redirect to the actual web ui server.")]),t._v(" "),s("p",[s("img",{attrs:{src:e(782),alt:"web-ui-overview"}})]),t._v(" "),s("h3",{attrs:{id:"global-settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#global-settings"}},[t._v("#")]),t._v(" Global Settings")]),t._v(" "),s("p",[t._v("You can change the global configuration settings for the webpack plugin in "),s("code",[t._v("~/.appcelerator/appcd/config.json")]),t._v(" . The timeout for build tasks and options for the web ui server can be changed via these settings. Have a look at the default "),s("a",{attrs:{href:"https://github.com/appcelerator/appcd-plugin-webpack/blob/develop/config/config.js",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("config.js")]),s("OutboundLink")],1),t._v(" file for detailed descriptions.")]),t._v(" "),s("p",[s("strong",[t._v("config.json")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  webpack"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    inactivityTimeout"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("600000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ui"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8084")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"project-plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#project-plugins"}},[t._v("#")]),t._v(" Project Plugins")]),t._v(" "),s("p",[t._v("Titanium comes with pre-defined webpack configurations to quickly get you started . The plugin system lets you hook into the webpack build process and modify it to fit your needs of every Titanium project and add new features. Currently a plugin can:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("change the webpack config to add new loaders / plugins")])]),t._v(" "),s("li",[s("p",[t._v("watch files for changes and automatically restart the webpack build")])])]),t._v(" "),s("h3",{attrs:{id:"introduction-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction-2"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[t._v("A plugin is an npm package or a local file that can add additional features to your project. You can author a new plugin by simply creating a file that exports a function. This function receives a plugin API object and an options object containing information about the current environment, build settings and other options.")]),t._v(" "),s("p",[t._v("The following is an example how you can register a project local plugin:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// <project-root>/my-plugin.js")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// your plugin code goes here")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Local plugins need to be activated in the project's "),s("code",[t._v("package.json")]),t._v(" so the webpack build knows about them :")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n  "appcdWebpackPlugins": [\n    "my-plugin.js"\n  ]\n}\n')])])]),s("p",[t._v("To easily share plugins they can be published as a module on NPM. Plugins installed from NPM will automatically be detected and activated if they follow the naming scheme for webpack plugins in Titanium.")]),t._v(" "),s("h3",{attrs:{id:"name-convention"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#name-convention"}},[t._v("#")]),t._v(" Name convention")]),t._v(" "),s("p",[t._v("For a plugin to be usable in a Titanium webpack project, it must follow the name convention "),s("code",[t._v("appcd-webpack")]),t._v(" "),s("code",[t._v("-plugin-<name>")]),t._v(" or "),s("code",[t._v("@scope/appcd-webpack-plugin-<name>")]),t._v(" .")]),t._v(" "),s("p",[t._v("Official plugins use an alternative shortened name convention of "),s("code",[t._v("@appcd/webpack-plugin-<name>")]),t._v(" or "),s("code",[t._v("@titanium-sdk/webpack-plugin-<name>")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("p",[t._v("The following examples demonstrate how to use the "),s("code",[t._v("chainWebpack")]),t._v(" function to modify the webpack configuration. Also check out the extensive list of "),s("a",{attrs:{href:"https://github.com/neutrinojs/webpack-chain#getting-started",target:"_blank",rel:"noopener noreferrer"}},[t._v("examples from webpack-chain"),s("OutboundLink")],1),t._v(" to see what else you can do with the "),s("code",[t._v("config")]),t._v(" object.")]),t._v(" "),s("h4",{attrs:{id:"add-alias"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-alias"}},[t._v("#")]),t._v(" Add Alias")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chainWebpack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resolve\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alias\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'~utils'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utils'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"add-loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-loader"}},[t._v("#")]),t._v(" Add loader")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chainWebpack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("module\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'txt'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.txt$/i")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file-loader'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("loader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file-loader'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("options")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[path][name].[ext]'")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"delete-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete-plugin"}},[t._v("#")]),t._v(" Delete plugin")]),t._v(" "),s("p",[t._v("Delete a named plugin from the configuration. Refer to the bundled "),s("a",{attrs:{href:"https://github.com/appcelerator/appcd-plugin-webpack/blob/develop/src/config",target:"_blank",rel:"noopener noreferrer"}},[t._v("configuration files"),s("OutboundLink")],1),t._v(" as well as the readme and code of the "),s("code",[t._v("@titanium-sdk/webpack-plugin-*")]),t._v(" packages to see what named plugins are configured.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chainWebpack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'copy-assets'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"official-plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#official-plugins"}},[t._v("#")]),t._v(" Official Plugins")]),t._v(" "),s("p",[t._v("We maintain a couple of official plugins which provide the core configuration for Titanium apps.")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://github.com/appcelerator/webpack-plugin-alloy",target:"_blank",rel:"noopener noreferrer"}},[t._v("@titanium-sdk/webpack-plugin-alloy"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://github.com/appcelerator/webpack-plugin-classic",target:"_blank",rel:"noopener noreferrer"}},[t._v("@titanium-sdk/webpack-plugin-classic"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://github.com/appcelerator/webpack-plugin-angular",target:"_blank",rel:"noopener noreferrer"}},[t._v("@titanium-sdk/webpack-plugin-angular"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://github.com/appcelerator/webpack-plugin-babel",target:"_blank",rel:"noopener noreferrer"}},[t._v("@titanium-sdk/webpack-plugin-babel"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://github.com/appcelerator/webpack-plugin-typescript",target:"_blank",rel:"noopener noreferrer"}},[t._v("@titanium-sdk/webpack-plugin-typescript"),s("OutboundLink")],1)])])]),t._v(" "),s("h2",{attrs:{id:"faq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("💡 Hint")]),t._v(" "),s("p",[t._v("For simplicity all CLI commands for the Appcelerator Daemon in the following section use the format of "),s("code",[t._v("appcd <command>")]),t._v(". However, this will only work when you have installed appcd globally. If you use the "),s("code",[t._v("appc")]),t._v(" CLI, you will have to proxy all command through it by prefixing them with "),s("code",[t._v("appc")]),t._v(". For example, "),s("code",[t._v("appcd stop")]),t._v(" would have to be run as "),s("code",[t._v("appc appcd stop")]),t._v(".")])]),t._v(" "),s("h3",{attrs:{id:"the-webpack-build-is-stuck-how-can-i-restart-it"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-webpack-build-is-stuck-how-can-i-restart-it"}},[t._v("#")]),t._v(" The webpack build is stuck, how can i restart it?")]),t._v(" "),s("p",[t._v("Building the app with the "),s("code",[t._v("--force")]),t._v(" flag will restart the whole webpack build process for the current project. You can also start/stop the build via the Web UI in the detail view for a specific build.")]),t._v(" "),s("p",[t._v("If nothing else helps, try stopping the daemon with "),s("code",[t._v("appcd stop")]),t._v(", which will automatically stop all currently active webpack builds as well.")]),t._v(" "),s("h3",{attrs:{id:"how-can-i-view-log-output"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-view-log-output"}},[t._v("#")]),t._v(" How can I view log output?")]),t._v(" "),s("p",[t._v("All output of the current webpack build will be streamed from the background task directly to the console when you build your app. You can also see the complete console output of all previous builds in the detail view of a build task in the web ui.")]),t._v(" "),s("p",[t._v("If you are interested in the log output from the webpack plugin itself and not from a single build, you can also stream the log output from the daemon with "),s("code",[t._v("appcd logcat")]),t._v(". To display messages from the webpack plugin only you can filter them using "),s("code",[t._v('appcd logcat "*webpack*"')]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"the-build-errors-with-not-found-what-should-i-do-now"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-build-errors-with-not-found-what-should-i-do-now"}},[t._v("#")]),t._v(' The build errors with "Not found", what should i do now?')]),t._v(" "),s("p",[t._v("Make sure that you have the webpack plugin installed and loaded. You can check the status of all currently installed plugins with "),s("code",[t._v("appcd status")]),t._v(".")]),t._v(" "),s("p",[t._v("If the webpack plugin shows up in that list but you still see the error, you may have to restart the Daemon. There is a known bug in the configuration system which can prevent the plugin from loading the first time after it was installed. In that case simply stop the daemon with "),s("code",[t._v("appcd stop")]),t._v(" and build your app again.")]),t._v(" "),s("h3",{attrs:{id:"how-long-will-the-webpack-build-run-in-the-background"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-long-will-the-webpack-build-run-in-the-background"}},[t._v("#")]),t._v(" How long will the webpack build run in the background?")]),t._v(" "),s("p",[t._v("To save system resources "),s("code",[t._v("@appcd/plugin-webpack")]),t._v(" has a built-in timeout to automatically stop unused webpack build tasks. By default it will stop a webpack build if it didn't receive any activity for more than 10 minutes. After the last webpack build stopped, and the "),s("code",[t._v("@appcd/plugin-webpack")]),t._v(" didn't receive any new requests for webpack build tasks for another 10 minutes, the plugin itself will also be deactivated by appcd.")]),t._v(" "),s("h2",{attrs:{id:"known-issues"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#known-issues"}},[t._v("#")]),t._v(" Known Issues")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Hyperloop is not yet compatible with Titanium projects that use webpack")])]),t._v(" "),s("li",[s("p",[t._v("Alloy.jmk makefiles are not supported and will be ignored")])])])])}),[],!1,null,null,null);a.default=n.exports},782:function(t,a,e){t.exports=e.p+"assets/img/web-ui-overview.beb80e94.png"}}]);