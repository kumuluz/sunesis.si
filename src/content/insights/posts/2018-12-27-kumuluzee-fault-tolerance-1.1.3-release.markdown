---
layout: post
title:  "Announcing KumuluzEE Fault Tolerance 1.1.3"
date:   2018-12-27
author: urbim
categories: [Product, Developers]
tags: [KumuluzEE Fault Tolerance, Circuit Breaker, Retry, Bulkhead, Timeout, Fallback, Microprofile Fault Tolerance]
---

We are pleased to announce the release of KumuluzEE Fault Tolerance 1.1.3. This release brings the update to the 1.1.3
version of the MicroProfile Fault Tolerance specification and Java 9+ support.

KumuluzEE Fault Tolerance is now integrated with MicroProfile Metrics and includes instrumentation of all Fault
Tolerance patterns. This enables developers and operations team to monitor critical points of the system, detect and
locate faults as soon as possible and make adjustments to the parameters of the fault tolerance patterns if needed.

<!--more-->

Some of the metrics included are:

- histogram of execution times of methods annotated with `@Timeout`
- number of times the method annotated with `@Retry` was retried
- number of calls prevented by the circuit breaker
- number of executions in queue for methods, annotated with `@Bulkhead` and `@Asynchronous`
- number of times the fallback method has been executed

And much more. For description of all metrics, check out the MicroProfile FT specification or even better, run an
application yourself. To enable Metrics integration, simply add the following dependency to the pom.xml:

```xml
<dependency>
    <groupId>com.kumuluz.ee.metrics</groupId>
    <artifactId>kumuluzee-metrics-core</artifactId>
    <version>${kumuluzee-metrics.version}</version>
</dependency>
```

Another addition in the MicroProfile FT 1.1.3 specification is the ability to get the cause of the failure in the
fallback handler method. The Exception can be accessed with the `getFailure()` method of the `ExecutionContext` class.

The standard extension disabling mechanism of KumuluzEE has also been added in this release. To disable all Fault
Tolerance patterns, simply set the `kumuluzee.fault-tolerance.enabled` configuration property to `false`.

This release also brings full support for Java 9+ and some minor bug fixes.

#### Features:

- Integration with MicroProfile Metrics.
- Added `getFailure()` implementation to the fallback `ExecutionContext`.
- Implemented extension disabling mechanism.

#### Enhancements:

- Supported Java 9+.
- Updated dependency versions.

#### Bugs:

- Added proper handling of `@Fallback` and `@Asynchronous` if on their own.
- Fixed annotation enabled configuration keys priority.
- Fixed fallback method matching algorithm for deployment validation.
- Properly unwrapped Exceptions thrown in asynchronous executions.
- Fixed circuit breaker behavior in edge cases of `successThreshold` parameter.


More details about this release can be found on
[GitHub](https://github.com/kumuluz/kumuluzee-fault-tolerance/releases/tag/v1.1.3).
