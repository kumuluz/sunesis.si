---
layout: post
title:  "KumuluzEE Health 2.0.1 released"
date:   2019-07-16
author: urbim
categories: [Product, Developers]
tags: [KumuluzEE Health, Microprofile-Health, HTTP health check]
---

We are happy to announce a new major version of the KumuluzEE Health. This version implements the MicroProfile Health
2.0 specification. This release contains updates which improve the compatibility of health checks with Kubernetes and
its readiness and liveness probes.

__NOTE:__ This release contains breaking changes. Upgrade with caution.

The health checks are now divided into two groups: readiness and liveness checks. In short - if a liveness check fails it
means that the service is stuck and should be restarted. If a readiness check fails it means that the service is
temporary unavailable and should not receive requests until all readiness checks succeed.

<!--more-->

Custom health checks must now be annotated with `@Liveness` or `@Readiness` (or both). These replace the `@Health`
annotation, which still works but is deprecated as of this release.

The extension now exposes two endpoints: `/health/live` and `/health/ready`. These endpoints correspond to the
above-mentioned groups of health checks. The `/health` endpoint still works (returns health checks from both groups combined)
but is deprecated as of this release. Property names in the JSON response have also been changed in this release.

The built-in health checks can now be registered in either of the above-mentioned groups by using configuration keys.
The API for programmatic registration of health checks has also been changed in order to reflect the division of health
checks into two groups.

#### Features

- Split health checks into two groups.
- Added `/health/live` and `/health/ready` endpoints.
- Updated programmatic API to reflect the division of health checks.
- Filter health check logging by type.
- Added ability to register built-in checks as a specific type.

#### Enhancements

- Upped dependency versions.
- Renamed `output` to `status` and `state` to `status` in the output JSON.


More details about this release can be found on [GitHub](https://github.com/kumuluz/kumuluzee-health/releases/tag/v2.0.1).
