(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{2056:function(t,e,a){"use strict";a.r(e);var s=a(21),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"converting-editor-templates-to-snippets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#converting-editor-templates-to-snippets"}},[t._v("#")]),t._v(" Converting Editor Templates to Snippets")]),t._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),s("p",[t._v("In Aptana Studio 2, there was an option for users to have editor templates, which could be used to include multiple template tags. This functionality can be accomplished in Aptana Studio 3 through the use of snippets. This page will show how to convert existing editor templates to Aptana Studio 3.")]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),s("p",[t._v("We assume you've read through our section on "),s("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Snippets/Creating_a_New_Snippet/"}},[t._v("creating snippets")]),t._v(" before and have a basic understanding of how snippets work.")],1)]),t._v(" "),s("h2",{attrs:{id:"exporting-existing-editor-templates-from-aptana-studio-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exporting-existing-editor-templates-from-aptana-studio-2"}},[t._v("#")]),t._v(" Exporting Existing Editor Templates from Aptana Studio 2")]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),s("p",[t._v("You can also use editor templates that other users have already exported. In that case, you may not need to export them from your installation of Studio 2.")])]),t._v(" "),s("p",[t._v("The editor templates are located under Aptana Studio 2 preferences. For example, if you would like to export your javascript templates, try the following:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Navigate to Preferences and go to Aptana > Editors > JavaScript > Templates.")])]),t._v(" "),s("li",[s("p",[t._v("Highlight all the templates that you would like to export.")])]),t._v(" "),s("li",[s("p",[t._v("Click on Export...")])]),t._v(" "),s("li",[s("p",[t._v("Select the destination for your exported templates.")])])]),t._v(" "),s("p",[s("img",{attrs:{src:a(525),alt:"Export_Editor_Templates"}})]),t._v(" "),s("h2",{attrs:{id:"editor-template-format"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#editor-template-format"}},[t._v("#")]),t._v(" Editor Template Format")]),t._v(" "),s("p",[t._v("The editor template should be in an XML format. The top-level XML node should be a "),s("code",[t._v("<templates>")]),t._v(" node, with "),s("code",[t._v("<template>")]),t._v(" nodes as children.")]),t._v(" "),s("p",[t._v("Here is an example of an editor template with a single entry:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("templates"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template autoinsert"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.aptana.ide.editors.contextType.text/javascript"')]),t._v(" deleted"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),t._v(" description"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Function"')]),t._v(" enabled"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v("\n        id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.aptana.ide.editors.js.templates.function.tm"')]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fun"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("cursor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("templates"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h2",{attrs:{id:"converting-a-template-entry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#converting-a-template-entry"}},[t._v("#")]),t._v(" Converting a template entry")]),t._v(" "),s("p",[t._v("In this section, we will reference the editor template above and convert the template entry into a snippet. From the example above, each "),s("code",[t._v("<template>")]),t._v(" node would correspond to a snippet that will want to add to your ruble.")]),t._v(" "),s("p",[t._v("As you may know from the "),s("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Snippets/Creating_a_New_Snippet/"}},[t._v("Creating a New Snippet")]),t._v(" section, there are three key items for a snippet (trigger, expansion, and scope). The relationship between the template node and the key items are as follows:")],1),t._v(" "),s("ul",[s("li",[s("p",[t._v("trigger: The 'name' attribute.")])]),t._v(" "),s("li",[s("p",[t._v("expansion: The content inside the "),s("code",[t._v("<template>")]),t._v(" node.")])]),t._v(" "),s("li",[s("p",[t._v("scope: The editor scope where this snippet will be active (in this case, it would be javascript).")])])]),t._v(" "),s("p",[t._v('The description attribute of "Function" also corresponds to the description of the snippet.')]),t._v(" "),s("p",[t._v("The snippet for the template would look like:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("snippet "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Function"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("trigger "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fun"')]),t._v("\n  s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("expansion "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(' "'),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("cursor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v('"\nend\n')])])])])}),[],!1,null,null,null);e.default=r.exports},525:function(t,e,a){t.exports=a.p+"assets/img/Export_Editor_Templates.fa11e515.png"}}]);