(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{1096:function(e,t,o){"use strict";o.r(t);var r=o(21),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"modules-crypto-cryptor"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#modules-crypto-cryptor"}},[e._v("#")]),e._v(" Modules.Crypto.Cryptor")]),e._v(" "),o("TypeHeader"),e._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),o("p",[e._v("The Cryptor object provides access to both block ciphers and stream ciphers with the same API; however some options are available for block ciphers that do not apply to stream ciphers.\nThe Android version of this module only exposes block ciphers.")]),e._v(" "),o("p",[e._v("The general operation of a Cryptor is:")]),e._v(" "),o("ol",[o("li",[e._v("Initialize it with raw key data and other optional fields with "),o("code",[e._v("crypto.createCryptor()")])]),e._v(" "),o("li",[e._v("Process input data via one or more calls to "),o("code",[e._v("cryptor.update()")])]),e._v(" "),o("li",[e._v("Obtain possible remaining output data with "),o("code",[e._v("cryptor.final()")])]),e._v(" "),o("li",[e._v("The cryptor object is disposed of by setting the "),o("code",[e._v("cryptor")]),e._v(" variable to "),o("code",[e._v("null")]),e._v(". The cryptor object can be reused (with the same key data as provided to "),o("code",[e._v("crypto.createCryptor()")]),e._v(") by calling "),o("code",[e._v("cryptor.reset()")]),e._v(" or "),o("code",[e._v("cryptor.release()")]),e._v(".")])]),e._v(" "),o("p",[e._v("Alternatively, "),o("code",[e._v("cryptor.encrypt()")]),e._v(" and "),o("code",[e._v("cryptor.decrypt()")]),e._v(" methods are provided for a stateless, one-shot encrypt or decrypt operation.")]),e._v(" "),o("ApiDocs")],1)}),[],!1,null,null,null);t.default=a.exports}}]);