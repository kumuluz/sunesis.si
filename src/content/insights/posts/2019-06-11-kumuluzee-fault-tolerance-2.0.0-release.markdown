---
layout: post
title:  "Announcing KumuluzEE Fault Tolerance 2.0.0"
date:   2019-06-11
author: urbim
categories: [Product, Developers]
tags: [KumuluzEE Fault Tolerance, Circuit Breaker, Retry, Bulkhead, Timeout, Fallback, Microprofile Fault Tolerance]
---

We are happy to announce the release of KumuluzEE Fault Tolerance 2.0.0. This release brings a new implementation -
kumuluzee-fault-tolerance-smallrye.

KumuluzEE Fault Tolerance SmallRye uses the SmallRye fault-tolerance implementation which in term uses Hystrix and
adapts it to the MicroProfile specification. We decided to use this implementation instead of out own in order to
streamline the upgrade process and bring you updated versions of MicroProfile Fault Tolerance as fast as possible. It
also means our team can focus on innovation in other parts of KumuluzEE platform.

<!--more-->

Unfortunately this means that the kumuluzee-fault-tolerance-hystrix has been deprecated as of this release and will
receive only critical bug-fixes in the future. The upgrade to the new implementation should not cause many problems as
both implementations are using the MicroProfile Fault Tolerance specification. The main thing that has changed is the
configuration. The configuration keys have changed and we no longer support the group and command key configurations.
The new implementation also doesn't support watching for configuration changes as of yet.

As for the specification changes - the methods annotated with the `@Asynchronous` annotation can now return the
`CompletionStage` type. Also the invocation sequence of annotations has changed along with interaction between various
annotations.

#### Features:

- Added kumuluzee-fault-tolerance-smallrye


More details about this release can be found on
[GitHub](https://github.com/kumuluz/kumuluzee-fault-tolerance/releases/tag/v2.0.0).
