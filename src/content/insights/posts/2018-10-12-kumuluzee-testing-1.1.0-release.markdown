---
layout: post
title:  "KumuluzEE Testing 1.1.0 released"
date:   2018-10-12
author: urbim
categories: [Product, Developers]
tags: [KumuluzEE Testing, Arquillian, jUnit, TestNG]
---

We're announcing the release of the KumuluzEE Testing 1.1.0. The KumuluzEE Arquillian Container Adapter has been updated
and delivers improved dependency handling, better exception reporting, support for Uber JAR package deployment and more.

<!--more-->

The `includeRequiredLibraries` parameter now supports another option - `fromPom`, which reads the application pom and
includes all runtime and test dependencies declared in the effective pom. This covers an important use case of KumuluzEE
Arquillian Adapter - integration testing application as a whole. Whereas before you had to specify each dependency one
by one in the `MavenDependencyAppender` service class or include them manually in each of the deployments, the KumuluzEE
Arquillian Adapter can now try to do that for you.

Another important feature in this release is proper exception reporting during deployment. Arquillian supports testing
incorrectly configured deployments by annotating the `@Deployment` method with `@ShouldThrowException` annotation.
Before this release only CDI exceptions were properly detected. With this release any exception thrown during deployment
is detected, serialized and reported by the Arquillian executor.

This release also supports packaging of test archives in Uber JAR. Uber JAR has the same structure as the one created
by _kumuluzee-maven-plugin_. If you are deploying your production application in the form of a single JAR, we definitely
recommend switching from exploded test archive deployment to the Uber JAR one. All you need to do is set the `packaging`
property in arquillian.xml to `uberJar`.

Another quality of life improvement is auto detection of KumuluzEE version from project's dependencies instead of
statically defined version. The auto-discovered version can still be overridden with the `kumuluzVersion` parameter if
tests need to be run on different version of KumuluzEE than the one defined in project's dependencies.

#### Features:

- Added support for including dependencies from effective pom.
- Added proper exception reporting.
- Added support for Uber JAR test deployments.

#### Enhancements:

- Automatic detection of KumuluzEE version from project's dependencies.


More details about this release can be found on
[GitHub](https://github.com/kumuluz/kumuluzee-testing/releases/tag/v1.1.0).
