(window.webpackJsonp=window.webpackJsonp||[]).push([[1103],{1386:function(t,a,e){"use strict";e.r(a);var s=e(21),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"working-with-xml-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#working-with-xml-data"}},[t._v("#")]),t._v(" Working with XML Data")]),t._v(" "),e("h2",{attrs:{id:"objective"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#objective"}},[t._v("#")]),t._v(" Objective")]),t._v(" "),e("p",[t._v('In this chapter, you will learn how to retrieve XML data from a remote data source via the HTTPClient object. You\'ll also see how to "walk" an XML document to parse its data.')]),t._v(" "),e("h2",{attrs:{id:"contents"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),e("p",[t._v("As was stated in the "),e("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/Working_with_Remote_Data_Sources/Working_with_JSON_Data/"}},[t._v("previous chapter")]),t._v(", JSON is the preferred format for data transport in a Titanium application because it is easy to consume inside your JavaScript application and it is a very compact format. However, many existing applications maintain an XML-based interface that you must work with in your client application. Titanium provides facilities for consuming XML by providing an "),e("a",{attrs:{href:"http://www.w3.org/TR/DOM-Level-2-Core/",target:"_blank",rel:"noopener noreferrer"}},[t._v("XML DOM Level 2 implementation"),e("OutboundLink")],1),t._v(", and automatically serializing XML responses into one of our "),e("a",{attrs:{href:"http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.XML.Document-object.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("XML Document objects"),e("OutboundLink")],1),t._v(". All XML-related functionality in Titanium is contained in the "),e("code",[t._v("Titanium.XML")]),t._v(" namespace.")],1),t._v(" "),e("p",[t._v("Inside your handler function, if your response has an XML "),e("code",[t._v("Content-Type")]),t._v(" header, Titanium will automatically serialize the response text into XML for your use:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("xhr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" doc "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseXML"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//this is the XML document object")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Use the DOM API to parse the document")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" elements "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" doc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"someTag"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"parsing-xml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parsing-xml"}},[t._v("#")]),t._v(" Parsing XML")]),t._v(" "),e("p",[t._v("A full treatment of the XML DOM and related methods is beyond the scope of this tutorial. We will take a brief look at the topic nonetheless.")]),t._v(" "),e("p",[t._v("The XML DOM presents a document as a hierarchy of nodes. Some types of nodes may have child nodes, while others are leaf nodes that don't have children. For XML and HTML documents, these are some of the supported node types:")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Document – represents the entire XML document and contains a maximum of one Element node")])]),t._v(" "),e("li",[e("p",[t._v("Element – contains the remainder of the nodes in your document, this is generally the node you work with as the top-level of the hierarchy")])]),t._v(" "),e("li",[e("p",[t._v("Attr – represents a node's attributes and contains Text nodes")])]),t._v(" "),e("li",[e("p",[t._v("Text – a leaf node type with no children")])]),t._v(" "),e("li",[e("p",[t._v("CDATASection – no children")])]),t._v(" "),e("li",[e("p",[t._v("Entity – contains nodes of various types")])])]),t._v(" "),e("p",[t._v("You'll often use these methods when parsing an XML document:")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("The "),e("code",[t._v("getElementsByTagName()")]),t._v(" method, which returns an array of nodes with the given name")])]),t._v(" "),e("li",[e("p",[t._v("The "),e("code",[t._v("item()")]),t._v(" method which you use to select a specific node in an array")])]),t._v(" "),e("li",[e("p",[t._v("The "),e("code",[t._v("getAttribute()")]),t._v(" method which you use to retrieve the value of an attribute with the given name")])]),t._v(" "),e("li",[e("p",[t._v("The "),e("code",[t._v("text")]),t._v(" and "),e("code",[t._v("nodeValue")]),t._v(" properties, which retrieve the leaf node values associated with the node")])])]),t._v(" "),e("p",[t._v("Consider this code snippet, which parses RSS (XML) data retrieved from a blog:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("xhr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Data is returned from the blog, start parsing")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" xml "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseXML"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// the blog\'s title is in a node named "channel"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" channel "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" xml"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"channel"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// begin looping through blog posts")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" data "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// blog posts are in nodes named "item"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" items "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" xml"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"item"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" items"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      postTitle"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" items"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("item")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("item")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textContent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      postLink"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" items"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("item")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"link"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("item")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textContent\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fire an app-level event to notify the UI that the blog data is available")]),t._v("\n  Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("App"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("fireEvent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'net:rssDataReturned'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    blogTitle"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" channel"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("item")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("item")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textContent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    blogPosts"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" data\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("A key point to note for working with XML: you'll need to know the node hierarchy for your document in order to properly parse it. In other words, you'll need to know its DTD (document type definition). Some DTDs are standardized, such as the RSS ATOM feed XML format. Others are proprietary, defined by the companies that create them. A useful tool for viewing the XML structure of data retrieved from a web API is "),e("a",{attrs:{href:"http://apigee.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://apigee.com/"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"hands-on-practice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hands-on-practice"}},[t._v("#")]),t._v(" Hands-on Practice")]),t._v(" "),e("h4",{attrs:{id:"goal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#goal"}},[t._v("#")]),t._v(" Goal")]),t._v(" "),e("p",[t._v("In this activity, you will write the beginnings of an RSS reader. It will download an RSS feed, parse the titles of the posts in the feed, and display them in a table.")]),t._v(" "),e("h4",{attrs:{id:"steps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[t._v("#")]),t._v(" Steps")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Create a new Titanium Mobile project.")])]),t._v(" "),e("li",[e("p",[t._v("Replace the contents of app.js with code that defines a single window with a white background. To that window, add a TableView.")])]),t._v(" "),e("li",[e("p",[t._v("Declare an array to hold the data for your table.")])]),t._v(" "),e("li",[e("p",[t._v("Create an HTTPClient object that retrieves the RSS feed from "),e("a",{attrs:{href:"http://apod.nasa.gov/apod.rss",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://apod.nasa.gov/apod.rss"),e("OutboundLink")],1),t._v(" (the Astronomy Picture of the Day RSS feed).")])]),t._v(" "),e("li",[e("p",[t._v("With your browser, visit "),e("a",{attrs:{href:"http://apod.nasa.gov/apod.rss",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://apod.nasa.gov/apod.rss"),e("OutboundLink")],1),t._v(" to gain an understanding of the XML node hierarchy of the feed.")])]),t._v(" "),e("li",[e("p",[t._v("Declare an array named "),e("code",[t._v("items")]),t._v(" that stores all the nodes with a tag name of "),e("code",[t._v("item")]),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("In the "),e("code",[t._v("onload")]),t._v(" callback, loop through the "),e("code",[t._v("items")]),t._v(" array. In each iteration of the loop, create an anonymous object with a single property named "),e("code",[t._v("title")]),t._v(" whose value equals the text leaf of the "),e("code",[t._v("title")]),t._v(" node. Push that anonymous object into your data array.")])]),t._v(" "),e("li",[e("p",[t._v("Assign your data array to the table's "),e("code",[t._v("data")]),t._v(" property to populate your table's rows.")])]),t._v(" "),e("li",[e("p",[t._v("Build and test your app in the simulator/emulator. It should display the titles for each of the last seven pictures of the day.")])])]),t._v(" "),e("p",[t._v("As a challenge, improve the app by letting the user tap a row to view that day's picture.")]),t._v(" "),e("h3",{attrs:{id:"references-and-further-reading"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#references-and-further-reading"}},[t._v("#")]),t._v(" References and Further Reading")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://assets.appcelerator.com.s3.amazonaws.com/app_u/ebook/6.3_xml.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("Finished code"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"summary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),e("p",[t._v("In this chapter, you learned how to retrieve XML data from a remote data source via the HTTPClient object. You also saw how to parse an XML document.")])])}),[],!1,null,null,null);a.default=n.exports}}]);