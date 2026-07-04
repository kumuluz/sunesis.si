---
layout: post
title:  "Announcing release of KumuluzEE OpenTracing 1.3.1"
date:   2019-03-18
author: urbim
categories: [Product, Developers]
tags: [KumuluzEE OpenTracing, Microprofile, Jaeger, Zipkin]
---

We are releasing KumuluzEE OpenTracing v1.3.1. It implements the MicroProfile OpenTracing specification 1.3.1. This
version brings integration with the KumuluzEE Rest Client.

Integration with Rest Client is automatically enabled when both KumuluzEE OpenTracing and KumuluzEE Rest Client versions
are present on the classpath. Note that KumuluzEE Rest Client versions 1.2.1 and above are supported.

To start using the new integration simply create a Rest Client interface. All calls made through the created interface
will automatically be traced.

<!--more-->

To disable tracing on an interface annotate it with `@Traced(false)`. To disable tracing on a single method annotate
only the method with the same annotation.

More details about this release can be found on
[GitHub](https://github.com/kumuluz/kumuluzee-opentracing/releases/tag/v1.3.1).
