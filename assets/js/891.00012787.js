(window.webpackJsonp=window.webpackJsonp||[]).push([[891],{2105:function(e,t,o){"use strict";o.r(t);var s=o(21),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"themes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#themes"}},[e._v("#")]),e._v(" Themes")]),e._v(" "),o("p",[e._v('Studio 3 uses a new "theming" system to define the coloring of the IDE across the various editors and views. We tried to follow the convention of token names used by TextMate in our coloring so that porting existing themes over would be relatively easy.')]),e._v(" "),o("h2",{attrs:{id:"scopes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#scopes"}},[e._v("#")]),e._v(" Scopes")]),e._v(" "),o("p",[e._v("Scopes are similar to CSS selectors in that they describe a pattern which is matched against the current location of the cursor in the document. Multiple scopes may apply simultaneously at different levels of specificity. As an example, if we take the following piece of CSS:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("body {\n    background: #000000;\n}\n")])])]),o("p",[e._v("The entire snippet in a CSS file will have the scope 'source.css'. Individual tokens will have the following scopes applied:")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Token")]),e._v(" "),o("th",[e._v("Full Scope")]),e._v(" "),o("th",[e._v('Theme Scope Selector Rule that matches ("Aptana Studio" Theme)')])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("body")]),e._v(" "),o("td",[e._v("source.css entity.name.tag.css")]),e._v(" "),o("td",[e._v("entity.name.tag.css")])]),e._v(" "),o("tr",[o("td",[e._v("{}")]),e._v(" "),o("td",[e._v("source.css punctuation.section.property-list.css")]),e._v(" "),o("td",[e._v("punctuation.section")])]),e._v(" "),o("tr",[o("td",[e._v("background")]),e._v(" "),o("td",[e._v("source.css support.type.property-name.css")]),e._v(" "),o("td",[e._v("support.type.property-name.css")])]),e._v(" "),o("tr",[o("td",[e._v(":")]),e._v(" "),o("td",[e._v("source.css punctuation.separator.key-value.css")]),e._v(" "),o("td",[e._v("source")])]),e._v(" "),o("tr",[o("td",[e._v("#000000")]),e._v(" "),o("td",[e._v("source.css constant.other.color.rgb-value.css")]),e._v(" "),o("td",[e._v("constant.other.color.rgb-value.css")])]),e._v(" "),o("tr",[o("td",[e._v(";")]),e._v(" "),o("td",[e._v("source.css punctuation.terminator.rule.css")]),e._v(" "),o("td",[e._v("source")])])])]),e._v(" "),o("p",[e._v('You can double-check this yourself by placing the cursor at a particular location, and choosing "Commands > Bundle Development > Show Scope". You will see each of the pieces of text above has "source.css" and the specific scope in question applied.')]),e._v(" "),o("p",[e._v('If you open up Preferences > Aptana > Themes, you will see a list of scopes. When applying colors, it will choose the scope closest in match to the one above by following a prefix match, for example, "punctuation.section.blah.blah" matches "punctuation.section" for which a color is defined.')]),e._v(" "),o("p",[e._v("Many of the scopes defined in themes are relatively general across languages. You can add scopes if you like to specifically modify things to your taste. Some examples:")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Desired Effect")]),e._v(" "),o("th",[e._v("Action")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Colorize semicolons in CSS.")]),e._v(" "),o("td",[e._v("Add scope 'punctuation.terminator.rule.css' and choose colors.")])]),e._v(" "),o("tr",[o("td",[e._v("Colorize the background of CSS source.")]),e._v(" "),o("td",[e._v("Add scope 'source.css' and choose colors.")])]),e._v(" "),o("tr",[o("td",[e._v("Colorize the background of CSS source, but only when embedded in any language.")]),e._v(" "),o("td",[e._v("Add scope 'source.css.embedded' and choose colors.")])]),e._v(" "),o("tr",[o("td",[e._v("Colorize the background of CSS source, but only when embedded inside an HTML document (for example, a "),o("strong",[e._v("style")]),e._v(" tag).")]),e._v(" "),o("td",[e._v("Add scope 'text.html source.css' and choose colors.")])])])]),e._v(" "),o("p",[e._v("There is a longer discussion about creating scopes here: "),o("a",{attrs:{href:"http://manual.macromates.com/en/scope_selectors.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://manual.macromates.com/en/scope_selectors.html"),o("OutboundLink")],1)]),e._v(" "),o("h2",{attrs:{id:"token-names"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#token-names"}},[e._v("#")]),e._v(" Token names")]),e._v(" "),o("p",[e._v("A good starting point for token naming conventions is the TextMate documentation on the subject: "),o("a",{attrs:{href:"http://manual.macromates.com/en/language_grammars#naming_conventions",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://manual.macromates.com/en/language_grammars#naming_conventions"),o("OutboundLink")],1),e._v("\nGenerally speaking, tokens follow a convention of "),o("em",[e._v("category.sub-category.language-extension")]),e._v(', for example, "comment.line.js".')]),e._v(" "),o("p",[e._v("See "),o("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Themes/Current_Theme_Scopes/"}},[e._v("Current Theme Scopes")]),e._v(" for a complete list of currently available scopes.")],1),e._v(" "),o("h2",{attrs:{id:"themes-in-rubles"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#themes-in-rubles"}},[e._v("#")]),e._v(" Themes in Rubles")]),e._v(" "),o("p",[e._v('Rubles may contribute to themes. Use a hash from the token name to a string containing the fg, bg (optional), and font styles (optional). Place the theme addition in a file that will get loaded when the ruble does (for example, bundle.rb). The overall theme color keys of foreground, background, selection, caret, and line highlight are expected to be present as keys, as is the "name" key for the theme name. The rest of the keys are interpreted as token names (if using symbols, "_" will be changed to "." under the hood for you). Here\'s an example:')]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("require 'ruble/theme'\n\nRuble::Theme.add({\n  :name => 'example',\n  :foreground => '#ffffff',\n  :background =>  '#000000',\n  :selection => '#999999',\n  :caret => '#cccccc',\n  :lineHighlight => '#cccccc',\n  :string_quoted_single => ['#ff0000', '#00ff00', 'bold', 'italic']\n})\n")])])]),o("h2",{attrs:{id:"themes-in-java"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#themes-in-java"}},[e._v("#")]),e._v(" Themes in Java")]),e._v(" "),o("p",[e._v("In our Java code, we contribute themes via properties files. The key used is the token name, and the values are a list of colors and font styles with the order being significant. The first color in hex is the fg; the second (optional) is the background. We also then take optional font style names such as bold, italic, or underline. A few examples:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("comment.line=#ffff00,#333333,italic\nstring=#00ff00\ninvalid.illegal=#521c93,#fffb00,bold\n")])])]),o("h2",{attrs:{id:"related-topics"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#related-topics"}},[e._v("#")]),e._v(" Related topics")]),e._v(" "),o("ul",[o("li",[o("p",[o("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Themes/Creating_a_New_Theme/"}},[e._v("Creating a New Theme")])],1)]),e._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Themes/Current_Theme_Scopes/"}},[e._v("Current Theme Scopes")])],1)]),e._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Themes/User_Themes/"}},[e._v("User Themes")])],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);