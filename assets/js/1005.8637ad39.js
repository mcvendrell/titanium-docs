(window.webpackJsonp=window.webpackJsonp||[]).push([[1005],{1227:function(e,t,a){"use strict";a.r(t);var o=a(21),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"objective-c-and-objective-c-coding-standards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#objective-c-and-objective-c-coding-standards"}},[e._v("#")]),e._v(" Objective-C and Objective-C++ Coding Standards")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Contents")])]),e._v(" "),a("h2",{attrs:{id:"synopsis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synopsis"}},[e._v("#")]),e._v(" Synopsis")]),e._v(" "),a("p",[e._v("This document is for the Objective-C and Objective-C++ coding standards at Appcelerator. As with other coding standards documents, the primary goal is clean, readable code, which is comprable to common existing conventions.")]),e._v(" "),a("h2",{attrs:{id:"basis-for-this-document"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basis-for-this-document"}},[e._v("#")]),e._v(" Basis for this document")]),e._v(" "),a("p",[e._v("We attempt to follow the "),a("a",{attrs:{href:"http://google-styleguide.googlecode.com/svn/trunk/objcguide.xml",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google coding standards"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"http://developer.apple.com/library/mac/documentation/Cocoa/Conceptual/CodingGuidelines/CodingGuidelines.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple Cocoa guidelines"),a("OutboundLink")],1),e._v(". The remainder of this document reiterates information from these where appropriate, and otherwise provides exceptions to their standards.")]),e._v(" "),a("p",[e._v('We use "Modern Objective-C", the features of which are described in these documents.')]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://developer.apple.com/library/ios/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Programming with Objective-C"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://developer.apple.com/library/ios/releasenotes/ObjectiveC/ModernizationObjC/AdoptingModernObjective-C/AdoptingModernObjective-C.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Adopting Modern Objective-C"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://developer.apple.com/library/ios/releasenotes/ObjectiveC/ObjCAvailabilityIndex/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Objective-C Feature Availability Index"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://developer.apple.com/library/ios/releasenotes/ObjectiveC/RN-TransitioningToARC/Introduction/Introduction.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Transitioning to ARC Release Notes"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://developer.apple.com/library/ios/documentation/Cocoa/Conceptual/Blocks/Articles/00_Introduction.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Blocks Programming Topics"),a("OutboundLink")],1)])])]),e._v(" "),a("h2",{attrs:{id:"appcelerator-c-c-standards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#appcelerator-c-c-standards"}},[e._v("#")]),e._v(" Appcelerator C/C++ standards")]),e._v(" "),a("p",[e._v("You are expected to follow the "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/Platform_Development/Coding_Standards/C_and_C++_Coding_Standards/"}},[e._v("C/C++ coding guidelines")]),e._v(" when writing Objective-C except where explicitly specified. These standards take precedence over any generic rules listed in the style guidelines above, although we have our own exceptions.")],1),e._v(" "),a("p",[e._v("However, for consistency, any pure-C functions you write in Objective-C source files are to follow the Objective-C rules with C exceptions.")]),e._v(" "),a("h2",{attrs:{id:"standards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#standards"}},[e._v("#")]),e._v(" Standards")]),e._v(" "),a("p",[e._v("The following are the standard set of spacing, formatting, and naming conventions we expect for Objective-C(++) code.")]),e._v(" "),a("h3",{attrs:{id:"import-vs-include"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-vs-include"}},[e._v("#")]),e._v(" import vs. include")]),e._v(" "),a("p",[e._v("Always @import (not "),a("code",[e._v("#import)")]),e._v(" Objective-C headers, and "),a("code",[e._v("#include")]),e._v(" C (or C++) headers.")]),e._v(" "),a("h3",{attrs:{id:"class-naming"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-naming"}},[e._v("#")]),e._v(" Class Naming")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Objective-C classes are to be named with:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("The prefix "),a("code",[e._v("Ti")]),e._v(", or another project-appropriate prefix")])]),e._v(" "),a("li",[a("p",[e._v("Camelcase")])])])])]),e._v(" "),a("p",[a("strong",[e._v("Example")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("@interface TiExampleClass : NSObject {\n// ivars\n}\n\n// properties\n\n// methods\n")])])]),a("p",[e._v("The "),a("code",[e._v("@interface")]),e._v(" directive should not be indented, and neither should "),a("code",[e._v("@property")]),e._v(" or method declarations.")]),e._v(" "),a("h3",{attrs:{id:"protocols"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#protocols"}},[e._v("#")]),e._v(" Protocols")]),e._v(" "),a("p",[e._v("Protocols follow the same naming conventions as classes, with the following exceptions:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Protocols which reference a "),a("em",[e._v("behavior type")]),e._v(" should end with a gerund (-ing).")])]),e._v(" "),a("li",[a("p",[e._v("Protocols which describe a "),a("em",[e._v("set of actions")]),e._v(" should describe the functional property of these collective actions.")])]),e._v(" "),a("li",[a("p",[e._v("Protocols which are a "),a("em",[e._v("delegate")]),e._v(" should end with the word "),a("code",[e._v("Delegate")]),e._v(".")])])]),e._v(" "),a("p",[a("strong",[e._v("Example")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('@protocol TiScrolling; // Gerund; behavior type is "this object scrolls"\n@protocol TiFocusable; // Action set; describes actions related to "focusing" and "TiFocusing" seems inappropraite ("this object focuses" vs. "this object performs actions related to focusing")\n@protocol TiScrollViewDelegate; // Delegate\n')])])]),a("p",[e._v("Protocols must always include the "),a("code",[e._v("@required")]),e._v(" directive explicitly.")]),e._v(" "),a("h3",{attrs:{id:"category-naming"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#category-naming"}},[e._v("#")]),e._v(" Category naming")]),e._v(" "),a("p",[e._v("Header files which define an interface for a category only should be named "),a("code",[e._v("<base class>+<category>.h")]),e._v(".")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Categories on existing classes should be named appropriately, with the category describing the set of extensions.")])]),e._v(" "),a("li",[a("p",[e._v("Categories which are intended to describe a private API within an implementation file should be the empty category "),a("code",[e._v("()")]),e._v(".")])])]),e._v(" "),a("h3",{attrs:{id:"ivars"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ivars"}},[e._v("#")]),e._v(" ivars")]),e._v(" "),a("p",[e._v("Prefer private properties to ivars. If you do have a valid use case for an ivar, then declare them in the @implementation block (not the @interface block).")]),e._v(" "),a("p",[e._v("Instance variables for a class should be intended one tabstop.")]),e._v(" "),a("p",[e._v("Instance variables should be named in camelcase, and are not required to follow any other specific naming convention.")]),e._v(" "),a("h4",{attrs:{id:"public-protected-and-private"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#public-protected-and-private"}},[e._v("#")]),e._v(" @public , @protected , and @private")]),e._v(" "),a("p",[e._v("Use of access specifiers is discouraged (use publicly-declared and private-category "),a("code",[e._v("@property")]),e._v(" instead).")]),e._v(" "),a("h3",{attrs:{id:"property-and-synthesize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#property-and-synthesize"}},[e._v("#")]),e._v(" @property and @synthesize")]),e._v(" "),a("p",[e._v("Use the default synthesis property of ivars. You should rarely need @synthesize.")]),e._v(" "),a("h3",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Methods should be named in camelcase, with the first character lowercase. Method names "),a("strong",[e._v("must never")]),e._v(" begin with an underscore.")])]),e._v(" "),a("li",[a("p",[e._v("The leading method specifier ("),a("code",[e._v("+")]),e._v(" or "),a("code",[e._v("-")]),e._v(") should not be followed by a space, and neither should the return type.")])]),e._v(" "),a("li",[a("p",[e._v("Selector (and argument) names should not have a space after their "),a("code",[e._v(":")]),e._v(" character, or the type.")])]),e._v(" "),a("li",[a("p",[e._v("If method declarations, definitions, or calls are spread across multiple lines, their "),a("code",[e._v(":")]),e._v(" characters should be aligned rather than spaced on tabstops.")])]),e._v(" "),a("li",[a("p",[e._v("The opening brace of a method should be on its own line for implementations.")])])]),e._v(" "),a("p",[a("strong",[e._v("Example")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("+(void)x:(int)y\n{\n}\n\n-(void)veryLongMethodName:(NSObject*)veryLongArgumentName\n                     arg2:(NSObject*)anotherArg\n                     arg3:(NSObject*)moreArg\n{\n}\n")])])]),a("h4",{attrs:{id:"init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init"}},[e._v("#")]),e._v(" init")]),e._v(" "),a("p",[e._v("Every class must have one, and only one, designated initializer that is identified as such in a comment. The following is an example of well-written designated initializer:")]),e._v(" "),a("p",[a("strong",[e._v("Example")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Designated initializer.\n-(instancetype)init\n{\n  self = [super init];\n    if (self) {\n        // initialization code goes here...\n    }\n    return self;\n}\n")])])]),a("p",[e._v('Note the single braces. You may wish to turn off the "initializer not fully bracketed" clang warning in Xcode as a result.')]),e._v(" "),a("h3",{attrs:{id:"blocks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blocks"}},[e._v("#")]),e._v(" Blocks")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Block variables should never be a raw type; they should always have a "),a("code",[e._v("typedef")]),e._v("associated with them and that name used as the variable type.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("EXCEPTION:")]),e._v(" The "),a("code",[e._v("void (^varname)(void)")]),e._v(" block type does not require a typedef, although there are plenty of existing convenience typedefs for this block type which should be used when appropriate.")])])]),e._v(" "),a("li",[a("p",[e._v("Blocks should have their opening brace on the same line as their "),a("code",[e._v("^")]),e._v(", and their closing brace on its own line, indented with the surrounding scope.")])]),e._v(" "),a("li",[a("p",[e._v("Blocks have their contents indented one tabstop from the surrounding scope.")])]),e._v(" "),a("li",[a("p",[e._v("The "),a("code",[e._v("void ^(void)")]),e._v(" block type should always be written as "),a("code",[e._v("^{ ... }")]),e._v(".")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("__block")]),e._v(" storage specifier objects should be used with care. Remember that if a "),a("code",[e._v("__block")]),e._v(" variable goes out of scope when a block tries to access it, there can be unpredictable and bad results.")])])]),e._v(" "),a("p",[a("strong",[e._v("Example")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("typedef int ^(intBlock)(int);\n\nintBlock foo = ^(int foo) {\n    return 2*foo;\n};\n")])])]),a("h3",{attrs:{id:"fast-enumeration-for-x-in-y"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fast-enumeration-for-x-in-y"}},[e._v("#")]),e._v(" Fast enumeration ( for x in y )")]),e._v(" "),a("p",[e._v("Prefer fast enumeration loops to other looping constructs where possible. Note that if "),a("code",[e._v("y")]),e._v(" is a method call, the result of it should be pre-cached. Do not write fast enumeration loops which would modify "),a("code",[e._v("y")]),e._v(" (whether an object or a method call) as a side-effect of the loop contents.")]),e._v(" "),a("h3",{attrs:{id:"file-names"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file-names"}},[e._v("#")]),e._v(" File names")]),e._v(" "),a("p",[e._v("The following file names are acceptable for Objective-C:")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v(".h")]),e._v(" (headers)")])]),e._v(" "),a("li",[a("p",[a("code",[e._v(".m")]),e._v(" (implementation files)")])]),e._v(" "),a("li",[a("p",[a("code",[e._v(".mm")]),e._v(" (Objective-C++ - use with care, see below)")])]),e._v(" "),a("li",[a("p",[a("code",[e._v(".pch")]),e._v(" (precompiled header)")])])]),e._v(" "),a("h3",{attrs:{id:"implementation-ordering"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation-ordering"}},[e._v("#")]),e._v(" @implementation ordering")]),e._v(" "),a("p",[e._v("Methods should be ordered in "),a("code",[e._v("@implementation")]),e._v(" in the following way:")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("@synthesize")]),e._v(" directives")])]),e._v(" "),a("li",[a("p",[e._v("Designated initializer(s), ending with "),a("code",[e._v("init")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("#pragma mark Private")]),e._v(" - Only required for implementations with a private category")])]),e._v(" "),a("li",[a("p",[e._v("Methods declared in private category")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("#pragma mark Public")]),e._v(" - Only required for implementations with a private category")])]),e._v(" "),a("li",[a("p",[e._v("Methods declared in "),a("code",[e._v("@interface")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("#pragma mark Protocol @protocol-name")]),e._v(" - Only required for classes which implement a protocol")])]),e._v(" "),a("li",[a("p",[e._v("Methods for "),a("code",[e._v("@protocol")]),e._v(", "),a("code",[e._v("@required")]),e._v(" first, then "),a("code",[e._v("@optional")])])])]),e._v(" "),a("p",[e._v("The protocol implementation sections may be repeated as necessary.")]),e._v(" "),a("h3",{attrs:{id:"nil-and-null"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nil-and-null"}},[e._v("#")]),e._v(" nil and NULL")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Do not mix "),a("code",[e._v("nil")]),e._v(" and "),a("code",[e._v("NULL")]),e._v(". "),a("code",[e._v("NULL")]),e._v(" should only be used for C-style pointers, and "),a("code",[e._v("nil")]),e._v(" for all Objective-C object (and "),a("code",[e._v("id")]),e._v(") types.")])]),e._v(" "),a("li",[a("p",[e._v("It is illegal to use a statement such as "),a("code",[e._v("if (objcObject) { ... }")]),e._v(". Instead directly compare to "),a("code",[e._v("nil")]),e._v(", "),a("strong",[e._v("only where required")]),e._v(". Remember that it is actually faster to send a message to "),a("code",[e._v("nil")]),e._v(" than to perform the "),a("code",[e._v("cmp/jmp")]),e._v(" instructions from an "),a("code",[e._v("if")]),e._v(" "),a("strong",[e._v("and")]),e._v(" make a method call. This is especially true on RISC architectures like ARM.")])])]),e._v(" "),a("h3",{attrs:{id:"bool-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bool-types"}},[e._v("#")]),e._v(" BOOL types")]),e._v(" "),a("p",[a("code",[e._v("BOOL")]),e._v(" types should only be assigned to from "),a("code",[e._v("YES")]),e._v(", "),a("code",[e._v("NO")]),e._v(", or an explicit boolean operation. Do not mix "),a("code",[e._v("BOOL")]),e._v(" types with C++ "),a("code",[e._v("boolean")]),e._v(" or the C macros "),a("code",[e._v("TRUE")]),e._v(" and "),a("code",[e._v("FALSE")]),e._v(" - doing so may lead to subtle comparator errors for truth.")]),e._v(" "),a("h3",{attrs:{id:"exceptions-to-the-c-standard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exceptions-to-the-c-standard"}},[e._v("#")]),e._v(" Exceptions to the C standard")]),e._v(" "),a("p",[e._v("There are a number of exceptions to the C standard, to make our Objective-C code more compatible with existing source and follow standard conventions. Any C code which is written within an Objective-C source file ("),a("code",[e._v(".m")]),e._v(") must also follow these conventions, for readability purposes.")]),e._v(" "),a("h4",{attrs:{id:"comments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comments"}},[e._v("#")]),e._v(" Comments")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Classes, methods, and properties are to be documented as part of their "),a("code",[e._v("@interface")]),e._v(", not "),a("code",[e._v("@implementation")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Anything intended to be accessible through a public API of any kind should be tagged with comments suitable for appledoc generation; see "),a("a",{attrs:{href:"http://gentlebytes.com/appledoc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("appledoc"),a("OutboundLink")],1),e._v(" for format info. You may wish to "),a("code",[e._v("brew install appledoc")]),e._v(" as well.")])])]),e._v(" "),a("h4",{attrs:{id:"order-of-declarations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#order-of-declarations"}},[e._v("#")]),e._v(" Order of declarations")]),e._v(" "),a("p",[e._v("Rather than "),a("code",[e._v("namespace-contents")]),e._v(", the basic block for an Objective-C header is "),a("code",[e._v("objc-contents")]),e._v(":")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("@interface")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v('#pragma mark "@interface-name Properties"')]),e._v(' (or "Properties" for headers with one '),a("code",[e._v("@interface")]),e._v(")")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("@property")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v('#pragma mark "@interface-name Methods"')]),e._v(' (or "Methods" for headers with one '),a("code",[e._v("@interface")]),e._v(")")])]),e._v(" "),a("li",[a("p",[e._v("Class methods")])]),e._v(" "),a("li",[a("p",[e._v("Instance methods")])])]),e._v(" "),a("p",[e._v("The following is the order of declarations for an Objective-C or Objective-C++ header:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Copyright notice")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("#import")]),e._v(" headers (system, 3rd party, project)")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("#include")]),e._v(" headers (system, 3rd party, project)")])]),e._v(" "),a("li",[a("p",[e._v("macros")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("const")]),e._v(" variables")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("enum")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("typedef")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("@protocol")]),e._v(" declarations")])]),e._v(" "),a("li",[a("p",[e._v("C-style function declarations")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("objc-contents")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("namespace-contents")]),e._v(" (for declared namespaces in Objective-C++ headers only)")])])]),e._v(" "),a("h4",{attrs:{id:"braces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#braces"}},[e._v("#")]),e._v(" Braces")]),e._v(" "),a("p",[e._v("Rather than spacing a brace on a newline in C, in Objective-C there are some cases in which an opening brace is placed on the same line as the preceding statement, with a space before it:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Blocks (see above)")])]),e._v(" "),a("li",[a("p",[e._v("Flow control ("),a("code",[e._v("if")]),e._v("/"),a("code",[e._v("while")]),e._v("/"),a("code",[e._v("for")]),e._v("/"),a("code",[e._v("do...while")]),e._v("/"),a("code",[e._v("switch...case")]),e._v(")")])])]),e._v(" "),a("h4",{attrs:{id:"variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variables"}},[e._v("#")]),e._v(" Variables")]),e._v(" "),a("p",[e._v("All variables are named in camel-case and should not contain punctuation.")]),e._v(" "),a("h3",{attrs:{id:"exceptions-to-the-c-standard-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exceptions-to-the-c-standard-2"}},[e._v("#")]),e._v(" Exceptions to the C++ standard")]),e._v(" "),a("p",[e._v("There are no exceptions to the C++ standard at this time.")]),e._v(" "),a("h3",{attrs:{id:"other-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-rules"}},[e._v("#")]),e._v(" Other Rules")]),e._v(" "),a("h4",{attrs:{id:"_3rd-party-libraries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3rd-party-libraries"}},[e._v("#")]),e._v(" 3rd party libraries")]),e._v(" "),a("p",[e._v("As with all other source, the style in 3rd party libraries should be consistent with the style there rather than any Appcelerator coding standards. This holds true even for extensions we write to them.")]),e._v(" "),a("h4",{attrs:{id:"deprecated-classes-and-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deprecated-classes-and-methods"}},[e._v("#")]),e._v(" Deprecated classes and methods")]),e._v(" "),a("p",[e._v("Avoid the usage of deprecated methods from standard frameworks where an alternative is available, unless it breaks backwards compatibility with a version of software that we support.")]),e._v(" "),a("h4",{attrs:{id:"compatibility-alias"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compatibility-alias"}},[e._v("#")]),e._v(" @compatibility_alias")]),e._v(" "),a("p",[e._v("Do not use the "),a("code",[e._v("@compatibility_alias")]),e._v(" directive unless it is explicitly required due to a conflict between external libraries to a project, or multiple internal versions required by different 3rd party libraries.")]),e._v(" "),a("h4",{attrs:{id:"pragma-mark"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pragma-mark"}},[e._v("#")]),e._v(" pragma mark")]),e._v(" "),a("p",[e._v("Use "),a("code",[e._v("#pragma mark")]),e._v(" liberally to annotate sections of your code where necessary, in addition to the rules spelled out above.")])])}),[],!1,null,null,null);t.default=r.exports}}]);