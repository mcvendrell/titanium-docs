---
title: Titanium Compatibility Matrix
weight: '70'
---

# Titanium Compatibility Matrix

## Overview

This document describes the system environments that are compatible with Titanium. Any components that fall outside of the min/max version ranges shown are considered not to be compatible.

### Supported SDK releases

Some information about legacy Titanium SDK versions is included here solely for reference. Thus, only the following releases are officially supported:

* 10.0.0 - latest

* 9.0.0 - 9.3.x

* 8.0.0 - 8.3.x

* 7.0.x - 7.4.x

### Pre-release versions

Be aware that any components notated as _Pre-release_ are not officially supported. This includes Beta, Developer Preview, and Release Candidate versions, as well as any development SDKs released via the [Continuous Builds](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Titanium_SDK_Continuous_Builds/) download site.

## Minimum system requirements

### Memory

| Product | Host Operating System | Storage |
| --- | --- | --- |
| Latest Android SDK | macOS | 1.5 GB (contiguous) |
| Latest Android SDK | Windows | 1 GB (contiguous) |

::: warning ⚠️ Warning
Minimum system memory requirements is 8GB of RAM. 16GB is highly recommended.
:::

### Operating system

Titanium is supported on the following Operating Systems:

| Operating System | Version |
| --- | --- |
| macOS | 10.11.5 (Mavericks) and later |
| Windows | Windows 7 and later(Android)  <br />Windows 8.1 and later (Windows Phone)  <br />Windows 10 and later (Windows 10 Mobile) |

::: danger ❗️ Warning
As of Titanium 9.0.0, building Windows apps is no longer supported.
:::
::: danger ❗️ Warning
Support for Windows 8.1 and Windows Phone SDKs has been deprecated as of SDK 6.3.0.GA and has be removed in SDK 7.0.0.GA.
:::

## Java Development Kit

The Java Development Kit (JDK) is required to build Titanium apps and modules for Android.

(Studio also requires the JDK. It's recommended that you use the 64-bit version of JDK 8 with Studio 5.1 or higher.)

| Titanium SDK version | Min JDK version | Max JDK version |
| --- | --- | --- |
| 10.1.0 - latest | 11 | 16 |
| 9.0.2 - 10.0.2 | 8 | 15 |
| 9.0.1 | 8 | 13 |
| 9.0.0 | 8 | 12 |
| 7.5.0 - 8.3.1 | 8 | 14 |
| 7.0.0 - 7.4.2 | 8 | 10 |

![download_05](/images/guide/download/attachments/29004836/download_05.png) [Download Location](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

See [Installing Oracle JDK](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Prerequisites/Installing_Oracle_JDK/) for detailed instructions.

## Studio

### Studio Node, CLI, and Titanium SDK supported versions

#### Disk space

We recommend the following as a guideline for estimating how much disk space is necessary to build applications:

| Application | Recommended disk space | Comments |
| --- | --- | --- |
| Xcode | 15 - 20GB | Xcode includes the latest iOS and related simulator(s). |
| Android Studio | 10 - 15GB | You may need to select with SDK(s), NDK(s), and emulators to use. |
| Mobile app (workspace) | 50MB - 3GB | Disk usage depends on many factors. |

#### Node

##### Versions of Node.js supported

| Studio | Version |
| --- | --- |
| 5.1.3 - latest | 8.16.0 - 10.x |
| 5.0.0 - 5.1.2 | 8.x |

::: warning ⚠️ Warning
If you use any version of Node.js beyond 8.9.x, Studio will hang at launch time.
:::

##### Not supported

| Studio | Version |
| --- | --- |
| 4.9.1 | 4.6 through but not including 6.x |
| 4.3.0 - 4.9.0 | 4.6 through but not including 6.x |
| 4.0.0, 4.1.0, and 4.2.0 | Versions prior to 6.0 |

#### CLI

##### Supported versions of CLI

| Studio | Version |
| --- | --- |
| 5.0.0 and latest | 6.2.0+ |

##### Unsupported versions of CLI

| Studio | Version |
| --- | --- |
| 4.9.1 | 6.0.0+ |
| 4.3.0 - 4.9.0 | 5.0.0+ |
| 4.0.0, 4.1.0, and 4.2.0 | 4.x |

#### Titanium SDK

##### Supported versions of SDK

| Studio | Version |
| --- | --- |
| 5.0.0 and latest | 6.2.0+ |

##### Unsupported versions of SDK

| Studio | Version |
| --- | --- |
| 4.9.1 | 6.0.0+ |
| 4.3.0 - 4.9.0 | 5.0.0+ |
| 4.0.0, 4.1.0, and 4.2.0 | 4.x |

### Java support

### Studio 5.0.0 and earlier installers

| Studio 5.0.0 and earlier | Java Version | Status |
| --- | --- | --- |
| Windows installer (32-bit) | Java 8 (32-bit) | Functional |
| Windows installer (32-bit) | Java 8 (64-bit) | Not compatible |
| MacOS installer (64-bit) | Java 8 (64-bit) | Functional |

### Studio 5.1.0+ installers

| Studio 5.1.0 installer | Java Version | Status |
| --- | --- | --- |
| Windows installer (32-bit) | Java 8 (32-bit) | Functional |
| Windows installer (32-bit) | Java 8 (64-bit) | Not compatible |
| Windows installer (32-bit) | Java 9 (32-bit) | 32-bit Java 9 is not available |
| Windows installer (32-bit) | Java 9 (64-bit) | Incompatible (32-bit installer requires 32-bit Java) |
| Windows installer (64-bit) | Java 8 (64-bit) | Functional |
| Windows installer (64-bit) | Java 8 (32-bit) | Incompatible (64-bit installer requires 64-bit Java) |
| Windows installer (64-bit) | Java 9 (64-bit) | Functional |
| Windows installer (64-bit) | Java 9 (32-bit) | 32-bit Java 9 is not available |
| MacOS installer (64-bit) | Java 8 (64-bit) | Functional |
| MacOS installer (64-bit) | Java 9 (64-bit) | Functional |

## Node.js

To run all Appcelerator components, you must have Node.js 10.13.0 or later.

On Mac OS X and Windows, if you have selected to install Titanium updates, Studio prompts you to install Node.js. On Linux, you need to manually install Node.js.

![download_05](/images/guide/download/attachments/29004836/download_05.png)

| Operating System | Min Node Version | Max Node Version | Download Location |
| --- | --- | --- | --- |
| macOS / Windows / Linux | 10.13.0 | 12.X | [Official Website](https://nodejs.org/en/download/releases/) |

See [Installing Node](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Prerequisites/Installing_Node/) for details.

## Mobile development

Titanium can provide a development environment for third-party mobile platforms where a Software Development Kit (SDK) has been made available by the platform vendor. With this in mind, development with the following combinations of Operating Systems and SDKs are possible:

| Platform | macOS | Windows | Notes |
| --- | --- | --- | --- |
| Android Development | ![check](/images/guide/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png)  <br />(tick) | ![check](/images/guide/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png)  <br />(tick) |  |
| iOS Development | ![check](/images/guide/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png)  <br />(tick) | ![error](/images/guide/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/error.png)  <br />(error) | Due to Apple's license agreement, iOS applications may only be developed on Apple hardware. |
| Windows Development | ![error](/images/guide/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/error.png)  <br />(error) | ![check](/images/guide/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png)  <br />(tick) | Windows applications may only be developed on hardware running Microsoft Windows.<br /><br />Currently, Windows development is only supported using the Titanium CLI 3.3.0 and later, Titanium SDK 3.3.0 and later, and Visual Studio 2012/2013 Pro edition or higher. |

### Android

See [Installing the Android SDK](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Platform_SDKs/Installing_the_Android_SDK/) for detailed instructions.

Titanium requires the Android SDK Tools to be installed in order to allow you to develop Android applications.

::: warning ⚠️ Warning
Remember that Oracle JDK is a prerequisite for Android development and should be installed first. You need at least JDK 8 installed. See [Installing Oracle JDK](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Prerequisites/Installing_Oracle_JDK/) for instructions.
:::

![download_02](/images/guide/download/attachments/29004851/download_02.png)

The _Android SDK Manager_ installer may be obtained from the [Android Studio and SDK tools](https://developer.android.com/studio) site.

#### Required Android Packages

As of Titanium 9.0.0, the build system will automatically download the Android SDK platforms and tools needed.

For Titanium 8.x.x, you need to installed the following packages via the Android SDK Manager yourself:

| Package | Minimum Version |
| --- | --- |
| Android SDK Tools | Rev 28 |
| Android SDK Build-tools | Rev 23 |
| Android SDK Platform (API Level) | API Level 29 for Titanium 8.3.x<br /><br />API Level 28 for Titanium version older than 8.3.0 |

::: warning ⚠️ Warning
Titanium SDK 7.0.0+ requires Android SDK Tools v25 or newer as a minimum requirement.
:::
::: warning ⚠️ Warning
Take caution before upgrading these packages, as changes to the way they work has broken the Titanium toolchain a number of times in the past. Although these problems are often beyond our control, we always do our utmost to fix them as soon as we are made aware of them.

With this in mind, it's important to only upgrade these packages _between_ major projects, so that you have time to fix any problems that may result. Always consult the Android Tools [Release Notes](http://developer.android.com/sdk/tools-notes.html) and [Known Issues](http://tools.android.com/knownissues) first, and refer to our [Installation Troubleshooting](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installation_Troubleshooting/) guide to check whether there are any further actions that need to be taken to make the Titanium and the Android SDK compatible.
:::

#### Android SDK / Target Android platform

Each Titanium SDK supports building against a specific range of Android versions, as shown in the following table, and requires at least one of these versions to be installed. If you specify a `android:targetSDKVersion` in the `tiapp.xml` file of your project, you must specify one within the target min and max values. The minimum Android/SDK version column indicates the minimum version of Android that a device can run, which a Titanium application supports.

##### Supported versions

| Titanium SDK Version | Min Target Android Version  <br />(android:targetSdkVersion) | Max Target Android Version  <br />(android:targetSdkVersion) | Min Supported Android Version  <br />(android:minSdkVersion) |
| --- | --- | --- | --- |
| 10.1.0 - latest\* | 6.0.x (API 23) | 12.0.x (API 31) | 5.0.x (API 21) |
| 10.0.0 - 10.0.2 | 6.0.x (API 23) | 11.0.x (API 30) | 5.0.x (API 21) |
| 9.3.0 - 9.3.2 | 6.0.x (API 23) | 11.0.x (API 30) | 4.4.x (API 19) |
| 8.3.0 - 9.2.2 | 6.0.x (API 23) | 10.0.x (API 29) | 4.4.x (API 19) |
| 8.0.0 - 8.2.2 | 6.0.x (API 23) | 9.0.x (API 28) | 4.4.x (API 19) |
| 7.5.0 - 7.5.1 | 6.0.x (API 23) | 9.0.x (API 28) | 4.1.x (API 16) |
| 7.3.0 - 7.4.1 | 6.0.x (API 23) | 8.1.x (API 27) | 4.1.x (API 16) |
| 7.0.0 - 7.2.0 | 6.0.x (API 23) | 7.0.x (API 25) | 4.1.x (API 16) |

::: warning ⚠️ Notes
\* As of 10.1.0, Titanium requires JDK 11 or higher to build Android projects.
:::

##### Unsupported versions

| Titanium SDK Version | Min Target Android Version  <br />(android:targetSdkVersion) | Max Target Android Version  <br />(android:targetSdkVersion) | Min Supported Android Version  <br />(android:minSdkVersion) |
| --- | --- | --- | --- |
| 6.2.0 - 6.3.0 | 7.1.x (API 25) | 6.0.x (API 23) | 4.1.x (API 16) |
| 6.0.0 - 6.1.x | 6.0.x (API 23) | 6.0.x (API 23) | 4.1.x (API 16) |
| 5.1.0 - 5.5.x | 6.0.x (API 23) | 6.0.x (API 23) | 4.0.x (API 14) |
| 5.0.0 - 5.0.x | 5.0.x (API 21) | 6.0.x (API 23) | 4.0.x (API 14) |
| 4.0.0 - 4.1.x | 5.0.x (API 21) | 5.1.x (API 22) | 4.0.x (API 14) |
| 3.4.1 - 3.5.1 | 4.0.x (API 14)\* | 5.0.x (API 21)\*\* | 2.3.x (API 10) |
| 3.3.0 - 3.4.0 | 4.0.x (API 14)\* | 4.4.x (API 19) | 2.3.x (API 10) |
| 3.2.0 - 3.2.3 | 2.3.x (API 10)\* | 4.4.x (API 19) | 2.3.x (API 10) |
| 3.1.2 - 3.1.3 | 2.3.x (API 10) | 4.3.x (API 18) | 2.3.x (API 10) |
| 3.1.1 | 2.3.x (API 10) | 4.2.x (API 17) | 2.3.x (API 10) |
| 3.1.0 | 2.2 (API 8) | 4.2.x (API 17) | 2.2 (API 8) |
| 2.1.2 - 3.0.2 | 2.2 (API 8) | 4.1.x (API 16) | 2.2 (API 8) |
| 2.0 - 2.1.1 | 2.2 (API 8) | 4.0.x (API 15) | 2.2 (API 8) |
| 1.8.x | 2.2 (API 8) | 3.x.x (API 11) | 2.2 (API 8) |
| 1.7.x | 2.1 (API 7) | 3.x.x (API 11) | 2.1 (API 7) |

::: warning ⚠️ Notes
\* If you are building an Android module, you need to have Android SDK 6.0.x (API 23) installed if using Release 6.0.0 and greater.

\*\* The Titanium SDK does not support the [Android 4.4W SDK](http://developer.android.com/wear/index.html) (API 20), also known as the Android Wear SDK.
:::

Most mobile device manufacturers have been licensed to use Google's enhanced API, which provides support for Maps and other functionality. If this is the case for your target devices, you will need to install the relevant Google packages, listed as _Google APIs by Google Inc., Android API x..._ by the **Android SDK Manager** tool. In Studio, choose the SDKs with the naming format "Google APIs x.x" to use the enhanced APIs, or those without the "Google APIs" prefix otherwise.

Android SDK packages can be installed using the **Android SDK Manager** tool. See [Installing the Android SDK](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Platform_SDKs/Installing_the_Android_SDK/) for detailed instructions.

The default Android SDK can be configured using Studio's _Preferences_, and then selected per-project using the _Run Configurations_.

#### Android Native Add-on Module Development on macOS

The Xcode command line tools are required to develop native Android add-on modules on macOS.

See [Installing the iOS SDK: Installing Command Line Tools](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Platform_SDKs/Installing_the_iOS_SDK/#InstallingCommandLineToolsandPreviousSimulators) for detailed instructions.

### iOS

See [Installing the iOS SDK](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Platform_SDKs/Installing_the_iOS_SDK/) for detailed instructions.

Titanium requires Xcode to be installed in order for you to develop iOS applications.

![download_05](/images/guide/download/attachments/29004836/download_05.png)

There are two ways to obtain Xcode, the application that installs and manages iOS SDKs:

1. Launch the _App Store_ application, found in the `Applications` folder, and search for and install "Xcode" (includes the stable iOS and watchOS SDKs).

2. Enroll with the Apple Developer website and browse the [iOS Developer Center](https://developer.apple.com/download/) page to manually download the installer application (includes all previously-released iOS SDKs and new Beta versions).

Both of the above options are free of charge, although may require credit card details to be entered. Since 2016, you can also test your apps on your device using the free Apple developer program. If you wish to deploy your applications to the App Store for production, however, you will need to become a member of the _iOS Developer Program_, by way of an annual subscription charge of $99 at the time of writing.

#### Xcode

To develop for iOS, Titanium requires Apple's Xcode suite of tools.

Each Titanium SDK supports a specific range of Xcode versions, shown in the table below.

##### Supported versions of Xcode

| Titanium SDK Version | Min Xcode Version | Max Xcode Version | Notes |
| --- | --- | --- | --- |
| 10.1.0 - latest | 11.0.0 | 13.x | Full support for iOS 15 |
| 10.0.0 - 10.0.2 | 11.0.0 | 12.x | Dropped iOS 11 support |
| 9.3.0 - 9.3.2 | 11.0.0 | 12.x |  |
| 9.2.0 - 9.2.2 | 11.0.0 | 12.x | Full support for iOS 14 and beta support for macOS via Mac Catalyst |
| 9.0.0 - 9.1.0 | 9.0.0 | 11.x | Dropped iOS 9 support |
| 8.3.0 - 8.3.1 | 8.0.0 | 11.x |  |
| 8.2.0 - 8.2.1 | 8.0.0 | 11.x | Full support for iOS 13 |
| 8.0.0 - 8.1.1 | 8.0.0 | 10.x |  |

##### Unsupported versions of Xcode

| Titanium SDK Version | Min Xcode Version | Max Xcode Version | Notes |
| --- | --- | --- | --- |
| 7.5.0 - 7.5.2 | 8.0.0 | 10.x |  |
| 7.4.0 - 7.4.2 | 8.0.x | 10.x | Full support for iOS 12 |
| 7.0.0 - 7.3.1 | 6.0.x | 9.0.x |  |
| 6.3.0 | 6.0.x | 9.0.x |  |
| 6.2.x | 6.0.x | 9.0.x | Full support for iOS 11 |
| 5.5.x - 6.1.x | 6.0.x | 8.0.x |  |
| 5.0.0 - 5.4.0 | 6.0.x | 7.0.x |  |
| 4.0.0 - 4.1.x | 6.0.x | 6.4.x |  |
| 3.4.0 - 3.5.x | 6.0.x | 6.0.x |  |

Deploying for iOS 11.x requires Xcode 9.x, and macOS 10.12.4 and later.

Deploying for iOS 12.x requires Xcode 10.x, and macOS 10.13.6 and later.

As per apple guidelines, Starting April 2020 all apps submitted to App Store must be built with iOS 13 SDK or later, included in Xcode 11 or later.

#### iOS SDK / Target iOS platform

Each Titanium SDK supports a specific range of iOS base SDKs and deployment targets. To build an application for a specific iOS target version, you must have the appropriate iOS SDK installed.

##### Supported versions of iOS SDK / Target iOS platform

| Titanium SDK version | Minimum iOS SDK version | Maximum iOS SDK version | Minimum target iOS version | Maximum target iOS version |
| --- | --- | --- | --- | --- |
| 10.1.0 - latest | 13.0.0 | 15.x | 12.0 | 15.x |
| 10.0.0 - 10.0.2 | 13.0.0 | 14.x | 12.0 | 14.x |
| 9.2.0 - 9.3.x | 13.0.0 | 14.x | 10.0 | 14.x |
| 9.0.0 - 9.1.2 | 11.0.0 | 13.x | 10.0 | 13.x |
| 8.2.0 - 8.3.1 | 10.0.0 | 13.x | 9.0 | 13.x |
| 8.0.0 - 8.1.1 | 10.0.0 | 12.x | 9.0 | 12.x |

##### Unsupported versions of iOS SDK / Target iOS platform

| Titanium SDK version | Minimum SDK version | Maximum SDK version | Minimum target iOS version | Maximum target iOS version |
| --- | --- | --- | --- | --- |
| 7.4.0 - 7.5.x | 8.0.0 | 12.x | 8.0 | 12.x |
| 7.0.0 - 7.3.x | 8.0.0 | 11.x | 8.0 | 12.x |
| 6.2.0 - 6.3.x | 8.0.x | 11.x | 8.0 | 12.x |
| 6.0.0 - 6.1.x | 8.0.x | 10.x | 8.0 | 12.x |
| 5.5.x | 8.0.x | 10.x | 7.1.x | 9.3.x |
| 5.0.0 - 5.4.x | 8.0.x | 9.3.x | 7.1.x | 9.3.x |
| 4.0.0 - 4.1.x | 8.0.x | 8.4.x | 7.1.x | 8.4.x |
| 3.4.0 - 3.5.x | 8.0.x | 8.0.x | 7.1.x | 8.0.x |
| 3.2.2 - 3.3.0 | 7.0.x | 7.1.x | 6.1.x | 7.1.x |
| 3.1.3 - 3.2.1 | 7.0.x | 7.0.x | 6.1.x | 7.0.x |
| 3.1.1 - 3.1.2 | 5.0.x | 6.1.x | 5.0.x | 6.1.x |
| 3.1.0 | 4.3.x | 6.1.x | 4.3.x | 6.1.x |
| 2.1.3 - 3.0.x | 4.0.x | 6.1.x | 4.0.x | 6.1.x |
| 2.1.0 - 2.1.2 | 4.0.x | 5.1.x | 4.0.x | 5.1.x |
| 2.0.x | 4.0.x | 5.1.x | 4.0.x | 5.1.x |
| 1.8.x | 4.0.x | 5.0.x | 4.0.x | 5.0.x |
| 1.7.1+ | 3.1.2 | 5.0.x | 3.1.2 | 5.0.x |

### Windows

::: danger ❗️ Warning
As of Titanium 9.0.0, building Windows apps is no longer supported.
:::

#### Visual Studio

##### Supported versions of VS

| Titanium SDK Version | Min Visual Studio Version | Max Visual Studio Version |
| --- | --- | --- |
| 7.0.0 - 8.3.x | Visual Studio 2015 | Visual Studio 2017 |

##### Unsupported versions of VS

| Titanium SDK Version | Min Visual Studio Version | Max Visual Studio Version |
| --- | --- | --- |
| 6.2.0 - 6.3.0 | Visual Studio 2013 | Visual Studio 2017 |
| 5.1.0 - 6.2.0 | Visual Studio 2013 | Visual Studio 2015 |

#### Supported Platforms

##### Supported platform versions

| Titanium SDK Version | Supported Mobile Platforms | Supported Desktop Platforms |
| --- | --- | --- |
| 7.0.0 - 8.3.x | Windows 10 Mobile | Windows 10 |

##### Unsupported platform versions

| Titanium SDK Version | Supported Mobile Platforms | Supported Desktop Platforms |
| --- | --- | --- |
| 5.1.0 - 6.3.0 | Windows 10 Mobile, Windows Phone | Windows 10, Windows 8.1 |

### Unified CLI compatibility matrix

#### Unified CLI Includes

The following table lists the various CLI component versions:

##### Supported versions of CLI includes

| Unified CLI | Alloy | API Builder | Cloud CLI | Titanium CLI | Appc Daemon |
| --- | --- | --- | --- | --- | --- |
| 8.1.1 | 1.15.2 | N/A | 2.1.8 | 5.2.4 | 3.2.0 |

##### Unsupported versions of CLI includes

| Unified CLI | Alloy | API Builder | Cloud CLI | Titanium CLI | Appc Daemon |
| --- | --- | --- | --- | --- | --- |
| 8.1.0 | 1.15.1 | N/A | 2.1.8 | 5.2.2 | 3.2.0 |
| 8.0.0 | 1.14.5 | N/A | 2.1.3 | 5.2.2 | 3.1.0 |
| 7.1.1 | 1.14.1 | 3.2.13 | 2.1.2 | 5.2.1 | 1.1.3 |
| 7.1.0 | 1.14.0 | 3.2.13 | 2.1.0 | 5.2.1 | 1.1.3 |
| 7.0.12 | 1.13.10 | 3.2.13 | 2.1.0 | 5.1.1 | 1.1.3 |
| 7.0.11 | 1.13.9 | 3.2.12 | 2.1.0 | 5.1.1 | 1.1.3 |
| 7.0.10 | 1.13.8 | 3.2.11 | 2.0.12 | 5.1.1 | 1.1.3 |
| 7.0.9 | 1.13.4 | 3.2.7 | 2.0.12 | 5.1.1 | 1.1.3 |
| 7.0.8 | 1.13.4 | 3.2.7 | 2.0.11 | 5.1.1 | 1.1.3 |
| 7.0.7 | 1.13.2 | 3.2.5 | 2.0.10 | 5.1.1 | 1.1.3 |
| 7.0.6 | 1.13.2 | 3.0.0 | 2.0.10 | 5.1.1 | 1.1.3 |
| 7.0.5 | 1.12.0 | 3.0.0 | 2.0.10 | 5.1.1 | 1.1.3 |
| 7.0.4 | 1.12.0 | 3.0.0 | 2.0.8 | 5.1.1 | 1.1.3 |
| 7.0.3 | 1.12.0 | 3.0.0 | 2.0.8 | 5.1.0 | N/A |
| 7.0.2 | 1.10.12 | 3.0.0 | 2.0.8 | 5.0.14 | N/A |
| 7.0.1 | 1.10.10 | 3.0.0 | 2.0.8 | 5.0.14 | N/A |
| 7.0.0 | 1.10.9 | 3.0.0-19 | 2.0.8 | 5.0.14 | N/A |
| 6.3.0 | 1.10.5 | 2.0.2 | 2.0.7 | 5.0.14 | N/A |
| 6.2.4 | 1.9.14 | 2.0.2 | 2.0.5 | 5.0.14 | N/A |
| 6.2.3 | 1.9.13 | 2.0.2 | 2.0.5 | 5.0.14 | N/A |
| 6.2.2 | 1.9.11 | 2.0.2 | 2.0.5 | 5.0.14 | N/A |
| 6.2.1 | 1.9.11 | 2.0.0 | 2.0.4 | 5.0.13 | N/A |
| 6.2.0 | 1.9.11 | 2.0.3 | 2.0.4 | 5.0.12 | N/A |
| 6.1.0 | 1.9.5 | 1.10.1 | 1.2.2 | 5.0.11 | N/A |
| 6.0.0 | 1.9.4 | 1.8.12 | 1.2.2 | 5.0.11 | N/A |
| 5.5.1 | 1.9.2 | 1.8.6 | 1.2.1 | 5.0.9 | N/A |
| 5.5.0 | 1.9.2 | 1.8.6 | 1.2.1 | 5.0.9 | N/A |
| 5.4.0 | 1.9.1 | 1.8.2 | 1.2.1 | 5.0.9 | N/A |
| 5.3.1 | 1.8.7 | 1.8.2 | 1.2.0 | 5.0.8 | N/A |
| 5.3.0 | 1.8.7 | 1.7.31 | 1.2.0 | 5.0.8 | N/A |
| 5.2.2 | 1.8.3 | 1.7.29 | 1.2.0 | 5.0.6 | N/A |
| 5.2.1 | 1.8.2 | 1.7.29 | 1.2.0 | 5.0.6 | N/A |
| 5.2.0 | 1.7.33 | 1.7.27 | 1.1.0 | 5.0.6 | N/A |
| 5.1.0 | 1.7.32 | 1.3.22 | 1.0.32 | 5.0.6 | N/A |

#### Appc NPM

##### Supported version of Appc NPM

| Unified CLI Version | Min Appc NPM Version |
| --- | --- |
| 9.0.0 - latest | 6.0.0 |
| 8.0.0 - 8.1.1 | 5.0.0 |

##### Unsupported version of Appc NPM

| Unified CLI Version | Min Appc NPM Version |
| --- | --- |
| 7.1.0 - 7.1.2 | 4.2.14 |
| 7.0.3 - 7.0.12 | 4.2.13 |
| 7.0.0 | 4.2.10 |
| 6.3.0 | 4.2.10 |
| 6.2.4 | 4.2.9 |
| 5.4.0 | 4.2.4-1 |
| 5.3.1 | 4.2.4-1 |
| 5.3.0 | 4.2.4-1 |
| 5.2.2 | 4.2.4-1 |
| 5.2.1 | 4.0.0 |
| 5.2.0 | 4.0.0 |
| 5.1.0 | 4.0.0 |

#### Node.js

To run Unified CLI, you must have Node.js 6.x or later.

##### Supported version of node.js

| Unified CLI Version | Min Node Version | Max Node Version |
| --- | --- | --- |
| 9.0.0 - latest | 12.13.0 | 15.x |
| 8.0.0 - 8.2.0 | 10.13.0 | 12.x |
| 7.1.0 - 7.1.2 | 8.x | 10.x |
| 6.2.2 - 7.0.12 | 6.x | 8.15.x |

##### Unsupported version of node.js

| Unified CLI Version | Min Node Version | Max Node Version |
| --- | --- | --- |
| 6.0.0 - 6.2.1 | 4.2.0 | 4.6.2 |
| 5.1.0 - 5.4.0 | 0.10.x | 4.2.x |

### Desktop browser

The following desktop browsers are recommended for previewing and debugging applications:

* Google Chrome

* Firefox (with Firebug extension)

#### Android emulator

Refer to the [Android requirements and instructions below](#android) for installing the Android SDK, which contains the Android emulator.

## Other useful software

The following tools are required for native add-on module development or building the Titanium SDK from source. These tools are not required for mobile application development with the Titanium SDK.

### Git

[Git](http://en.wikipedia.org/wiki/Git_%28software%29) is the optional, but **highly recommended**, way of obtaining and staying up-to-date with the latest mobile projects located in our [Github repository](https://github.com/appcelerator).

Obtain the version that pertains to your particular Operating System from the link provided:

![download_05](/images/guide/download/attachments/29004836/download_05.png)

| Operating System | Package Name | Package Version | Download Location | Notes |
| --- | --- | --- | --- | --- |
| OS X | git | Latest | [Official Website](http://git-scm.com/download) |  |
| Windows | msysgit | Latest | [Official Website](http://git-scm.com/download) | On Studio 3.2.0 and later, portablegit is installed by default if no other Git client is installed. |
| Ubuntu | git | Latest | Default Repositories |  |

See [Installing Git](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Titanium_Advanced_Tools/Installing_Git/) for detailed instructions.

### Python

Error rendering macro 'excerpt-include' : User 'doc-robot' does not have permission to view the page 'DA:Installing Python'.

See [Installing Python](#undefined) for detailed instructions.

### Required Python packages

Error rendering macro 'excerpt-include' : User 'doc-robot' does not have permission to view the page 'DA:Installing Required Python Packages'.

See [Installing Required Python Packages](#undefined) for detailed instructions.

### gperf

The GNU gperf utility is used for generating hash functions. It is used when you build the Titanium SDK from source. It is not needed for Titanium app or module builds.

The gperf tool is installed as part of the Xcode command-line tools, but you may need to install it on Windows.

gperf is not required for building, running, or distributing applications using the Titanium SDK.

Obtain the latest stable version of gperf.

![download_05](/images/guide/download/attachments/29004836/download_05.png)

| Operating System | Package Version | Download Location |
| --- | --- | --- |
| OS X | Latest Stable | Included with the Xcode developer tools. |
| Windows | Latest Stable | [gnuwin32.sourceforge.net](http://gnuwin32.sourceforge.net/packages/gperf.htm) |

See [Installing gperf](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Titanium_Advanced_Tools/Installing_gperf/) for detailed instructions.

### Ant

Error rendering macro 'excerpt-include' : User 'doc-robot' does not have permission to view the page 'DA:Installing Ant'.

See [Installing Ant](#undefined) for detailed instructions.
