(window.webpackJsonp=window.webpackJsonp||[]).push([[1024],{1415:function(e,t,a){"use strict";a.r(t);var i=a(21),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"six-steps-to-extensive-titanium-app-build-automation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#six-steps-to-extensive-titanium-app-build-automation"}},[e._v("#")]),e._v(" Six Steps to Extensive Titanium App Build Automation")]),e._v(" "),a("p",[e._v("Guest writer: "),a("a",{attrs:{href:"https://www.appcelerator.com/blog/author/yakup-kalin/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yakup Kalin"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"testing-and-launching-is-not-time-consuming-or-complicated"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testing-and-launching-is-not-time-consuming-or-complicated"}},[e._v("#")]),e._v(" Testing and launching is NOT time-consuming or complicated")]),e._v(" "),a("p",[e._v("Test and launch steps are extremely important but they can also be time consuming as well as complicated. Testing and launching doesn’t have to be this way. This document will provide a high-level overview of an advance mobile app build automation process examples that allows one to increase efficiency and prepare multiple tested builds created from analyzed and validated codebases.")]),e._v(" "),a("h2",{attrs:{id:"mobile-build-automation-a-high-level-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mobile-build-automation-a-high-level-overview"}},[e._v("#")]),e._v(" Mobile build automation, a high-level overview")]),e._v(" "),a("p",[e._v("Typically, a high-level view of a build automation process with Titanium apps can go like this (based on information provided by "),a("a",{attrs:{href:"https://mobile.aca-it.be/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ACA Mobile"),a("OutboundLink")],1),e._v("):")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Prepare codebase (Jenkins)")])]),e._v(" "),a("li",[a("p",[e._v("Unit testing (TiUnit)")])]),e._v(" "),a("li",[a("p",[e._v("Analyzing codebase (sonarqube)")])]),e._v(" "),a("li",[a("p",[e._v("UI testing (AWS)")])]),e._v(" "),a("li",[a("p",[e._v("Archiving and sharing artifacts (Sonatype Nexus)")])]),e._v(" "),a("li",[a("p",[e._v("Notifying people")])])]),e._v(" "),a("h2",{attrs:{id:"preparing-the-codebase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preparing-the-codebase"}},[e._v("#")]),e._v(" Preparing the codebase")]),e._v(" "),a("p",[e._v("The process starts with the build process being triggered (typically twice a day via automation) or manually by a developer. The automation server (in this case "),a("a",{attrs:{href:"https://jenkins.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jenkins"),a("OutboundLink")],1),e._v(") guides the process by triggering a Maven build. Backend Urls, app version, and analytics ID configured in the "),a("code",[e._v("config.json")]),e._v(" are examples of environment properties being injected within the Titanium codebase.")]),e._v(" "),a("h2",{attrs:{id:"unit-testing-with-tiunit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unit-testing-with-tiunit"}},[e._v("#")]),e._v(" Unit testing with TiUnit")]),e._v(" "),a("p",[e._v("Next, the unit tests are triggered and automatically executed. While this document uses the "),a("a",{attrs:{href:"https://github.com/aca-mobile/ti-unit",target:"_blank",rel:"noopener noreferrer"}},[e._v("TiUnit"),a("OutboundLink")],1),e._v(" service as a prime example for writing unit tests, you can use what serves you best. TiUnit is based on "),a("a",{attrs:{href:"https://jasmine.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jasmine"),a("OutboundLink")],1),e._v(" that quickly allows for writing and executing tests without having to depend on the Titanium runtime.")]),e._v(" "),a("h2",{attrs:{id:"analyzing-the-codebase-quality"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#analyzing-the-codebase-quality"}},[e._v("#")]),e._v(" Analyzing the codebase quality")]),e._v(" "),a("p",[e._v("Once the unit tests are complete, a code coverage report is generated, "),a("a",{attrs:{href:"https://www.sonarqube.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SonarQube"),a("OutboundLink")],1),e._v(" code quality is also performed. SonarQube is a platform for continuous inspection of code quality to perform automatic reviews with static analysis of code to detect bugs, code smells, and security vulnerabilities.")]),e._v(" "),a("h2",{attrs:{id:"ui-testing-on-real-devices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ui-testing-on-real-devices"}},[e._v("#")]),e._v(" UI testing on real devices")]),e._v(" "),a("p",[e._v("Upon the successful tests and reports generated, the build scripts are triggered for the Titanium CLI to build the app (on the platform of your choosing). Once the builds are available, they are then inspected for UI testing by being pushed into simulators and physical devices. With limitations of some simulators and emulators (for example, no iOS camera), one can integrate with "),a("a",{attrs:{href:"https://aws.amazon.com/device-farm/?sc_channel=PS&sc_campaign=acquisition_US&sc_publisher=google&sc_medium=ACQ-P%7CPS-GO%7CBrand%7CSU%7CMobile%20Services%7CDevice%20Farm%7CUS%7CEN%7CText&sc_content=device_farm_e&sc_detail=amazon%20device%20farm&sc_category=device_farm&sc_segment=278498061481&sc_matchtype=e&sc_country=US&s_kwcid=AL!4422!3!278498061481!e!!g!!amazon%20device%20farm&ef_id=W37oyAAAAKXxP6o5:20180823170304:s",target:"_blank",rel:"noopener noreferrer"}},[e._v("Amazon Device Farm"),a("OutboundLink")],1),e._v(" (ADF) to test the apps on real devices. ADF can execute UI tests and behaviour validation a wide range of Android devices (which emulators may miss).")]),e._v(" "),a("p",[e._v("For more information about AWS Device Farm integration, please visit "),a("a",{attrs:{href:"https://docs.aws.amazon.com/devicefarm/latest/developerguide/continuous-integration-jenkins-plugin.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("the AWS developer guide"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"archiving-and-sharing-the-artifacts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#archiving-and-sharing-the-artifacts"}},[e._v("#")]),e._v(" Archiving and sharing the artifacts")]),e._v(" "),a("p",[e._v("Once the ADF tests returns with all the device logs, videos, and images, Jenkins can trigger a build script again to initiate the (test) launch. Based on the configuration, development, ad hoc, or release/production, builds are generated and signed. Upon signing, the builds ("),a("code",[e._v(".ipa")]),e._v(" and/or "),a("code",[e._v(".apk")]),e._v(") files are pushed to an internal repository manager for archiving. "),a("a",{attrs:{href:"https://www.sonatype.com/nexus-repository-sonatype",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nexus Repository Manager"),a("OutboundLink")],1),e._v(" is one fine repository manager for this task.")]),e._v(" "),a("p",[e._v("Also, these builds can be automatically published to a distribution site for providing apps for users to beta test.")]),e._v(" "),a("h2",{attrs:{id:"sending-notifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sending-notifications"}},[e._v("#")]),e._v(" Sending notifications")]),e._v(" "),a("p",[e._v("With everyone done, the development team is notified via email and/or automated IMs through your service(s) of choice.")])])}),[],!1,null,null,null);t.default=n.exports}}]);