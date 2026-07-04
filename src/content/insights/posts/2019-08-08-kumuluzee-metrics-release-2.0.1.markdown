---
layout: post
title:  "KumuluzEE MicroProfile Metrics 2.0.1 released"
date:   2019-08-08
author: urbim
categories: [Product, Developers]
tags: [KumuluzEE MicroProfile Metrics, KumuluzEE Metrics, Metrics, MicroProfile, Eclipse MicroProfile]
---

We are happy to announce a new major version of KumuluzEE Metrics - 2.0.1. This release implements the MicroProfile
Metrics 2.0. Programming interface and REST format include a number of breaking changes which integrate the extension
even better with popular cloud-native metric processing tools like Prometheus.

In order to avoid confusion, the `monotonic` flag has been removed from the `@Counted` annotation. All counters are now
by default monotonic (increasing only). A new metric type has been added in order to compensate for `monotonic` flag
removal - `ConcurrentGauge` (with accompanying annotation `@ConcurrentGauge`). This metric type also reports the minimum
and maximum value reached in the previous minute.

<!--more-->

The `Metadata` object used when programmatically creating metrics is now immutable and can be created by using the
builder pattern (`Metadata.builder()`).

Following the Prometheus/OpenMetrics convention, a metric is now uniquely identifiable using a combination of both its
name and tags (as opposed to just name). This combination is now represented as an `MetricID` object. Most of the
`MetricRegistry` API has been updated accordingly.

JSON output format now appends tags to the end of the metrics names, allowing metrics with the same name to be reported
at the same time. Prometheus output format was also changed in order to better respect the Prometheus best practices.

#### Features

- Implemented `ConcurrentGauge` and removed the `monotonic` flag from counters.
- Made metrics identifiable by name and tags (`MetricID`).
- Updated API for the `MetricID` change.
- Updated JSON and Prometheus serializers.

#### Enhancements

- Refactored `Metadata` usage to the immutable implementation.
- Updated Logs and Logstash reporters to use the new JSON format.
- Improved performance of the `MetricRegistry` implementation.
- Updated dependency versions.


More details about this release can be found on [GitHub](https://github.com/kumuluz/kumuluzee-metrics/releases/tag/v2.0.1).
