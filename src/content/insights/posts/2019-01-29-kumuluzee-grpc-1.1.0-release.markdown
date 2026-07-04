---
layout: post
title:  "KumuluzEE gRPC release 1.1.0!"
date:   2019-01-29
author: primozh
categories: [Product, Announcement, Developers]
tags: [KumuluzEE gRPC, gRPC]
---

With shiny new KumuluzEE release we are bringing JDK9+ support to Kumuluzee gRPC too! Project can now be compiled and will run without errors. Though, running service on Java 11 will print some warnings to the console. These are warnings from JVM caused by some reflection lookups in the dependencies.

<!--more-->

Do not hesitate and give it a go!

[Sample](https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-grpc) will be updated soon!

#### Features:

- Added support for JDK9+.

#### Enhancements:

- Updated grpc-java to its latest version.


More details about this release can be found on [GitHub](https://github.com/kumuluz/kumuluzee-grpc/releases/tag/v1.1.0).
