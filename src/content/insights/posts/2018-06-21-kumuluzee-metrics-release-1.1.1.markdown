---
layout: post
title:  "KumuluzEE MicroProfile Metrics 1.1.1 released"
date:   2018-06-21
author: urbim
categories: [Product, Developers]
tags: [KumuluzEE MicroProfile Metrics, KumuluzEE Metrics, Metrics, MicroProfile, Eclipse MicroProfile]
---

We're happy to announce the release of KumuluzEE Metrics 1.1.1. This release implements the MicroProfile Metrics 1.1.1
specification, which brings a new `reusable` flag, integration with KumuluzEE MicroProfile Config and some general
improvements to the programmatic API.

<!--more-->

The `reusable` flags allows a metric with the same name to be used in different places. For example, to count
invocations of two different methods with a single counter, you can now annotate both methods with the annotation
`@Counted(name = "countMe", absolute = true, reusable = true)`. If the `reusable` flag in this example
was not set to `true`, the deployment would fire an `IllegalArgumentException`. This restriction is done to prevent hard
to spot copy and paste errors.

KumuluzEE Metrics is now integrated with the KumuluzEE MicroProfile Config implementation. Currently only one
configuration property is used. The `MP_METRICS_TAGS` configuration property defines the global tags that get added to
each metric's metadata.

The method `MetricRegistry.register(String name, Metric, Metadata)` has been deprecated in favour of the method
`MetricRegistry.register(Metadata, Metric)`, since metric's name is already supplied with its metadata and the parameter
`name` is not necessary.

Another major part of this release is the inclusion of MicroProfile TCK, which checks the implementation for compliance
with the MicroProfile Metrics specification.

#### Features

- `reusable` flag added to the metric's metadata

#### Enhancements

- Integration with KumuluzEE MicroProfile Config
- `MetricRegistry.register(String name, Metric, Metadata)` deprecated in favour of `MetricRegistry.register(Metadata, Metric)`
- Added MicroProfile TCK tests

More details about this release can be found on [GitHub](https://github.com/kumuluz/kumuluzee-metrics/releases/tag/v1.1.1).
