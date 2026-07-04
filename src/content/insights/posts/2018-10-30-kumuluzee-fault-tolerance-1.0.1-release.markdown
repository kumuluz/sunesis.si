---
layout: post
title:  "KumuluzEE Fault Tolerance 1.0.1 released"
date:   2018-10-30
author: urbim
categories: [Product, Developers]
tags: [KumuluzEE Fault Tolerance, Circuit Breaker, Retry, Bulkhead, Timeout, Fallback, Microprofile Fault Tolerance]
---

We are happy to announce the release of KumuluzEE Fault Tolerance 1.0.1. This release brings improved compatibility
with the MicroProfile specification.

KumuluzEE Fault Tolerance is now integrated with MicroProfile Config, which enables greater flexibility when configuring
fault tolerance mechanisms. Check out the MicroProfile specification to learn about various ways to influence fault
tolerance behavior directly from the configuration files (or other configuration sources).

We have also added another implementation of Circuit Breaker alongside existing Hystrix implementation. The main feature
of our implementation is the support for the `successThreshold` parameter and full compatibility with the MicroProfile
specification.

<!--more-->

From the README:

> The default value (`HYSTRIX`) uses the Hystrix implementation of circuit breaker, which does not support the
`successThreshold` parameter. It can also violate the `failureRatio` parameter, since it updates error percentage on a
regular interval (configurable with `metrics.health-interval`) and not on every invocation. The alternative implementation
(`SUCCESS_THRESHOLD`) supports the `successThreshold` parameter and always respects the `failureRatio` parameter since
it calculates the error percentage before every invocation. However, this calculation can be inefficient in high
throughput applications. We recommend the usage of the default value `HYSTRIX` implementation, since it offers higher
scalability. The drawbacks of `HYSTRIX` implementation can be easily mitigated by properly tuning the configuration.

The parameters of annotations are now validated on application startup. This enables easier debugging and prevents hard
to notice bugs.

Another important addition in this release is the inclusion of MicroProfile TCK, which verifies our compatibility with
the MicroProfile specification.

Note that this is a patch release even though the release contains new features. We are breaking the semantic versioning
scheme in this case because we want to keep the version aligned with the MicroProfile FT specification version.

#### Features:

- Integration with MicroProfile Config.
- Added CB implementation which honors the `successThreshold` parameter.

#### Enhancements:

- Added Microprofile TCK.
- Added validation of annotation parameters on startup.

More details about this release can be found on
[GitHub](https://github.com/kumuluz/kumuluzee-fault-tolerance/releases/tag/v1.0.1).
