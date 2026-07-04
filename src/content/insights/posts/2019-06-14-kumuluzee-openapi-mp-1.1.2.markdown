---
layout: post
title:  "KumuluzEE OpenAPI Microprofile 1.1.2 released"
date:   2019-06-14
author: urbim
categories: [Product, Developers]
tags: [KumuluzEE OpenAPI, Microprofile, Java EE]
---

We are happy to announce the release of KumuluzEE OpenAPI MicroProfile 1.1.2. It implements the updated MicroProfile OpenAPI
specification 1.1.2. It features the support for JAX-RS `PATCH` method and improves usability of various annotations.
We have also optimized the scanning process which greatly reduces the startup time. Another
addition is the inclusion of Swagger UI which can be served right from your microservice.

<!--more-->

Startup time has been greatly reduced since we are no longer scanning the entire class-path but instead only the main
archive. To scan additional archives you need to add them to the configuration. All archives containing JAX-RS resources
and entities returned by them must be included. For example to add the _models_ and _rest_ artifacts, your configuration
could look something like this:

```yaml
kumuluzee:
  dev:
    scan-libraries:
      - models
      - rest
```

You can also disable scanning optimization and debug your scanning configuration by enabling the features in the
configuration. For more information check out the README of the project.

This release also includes Swagger UI. To enable it simply add the following dependency:

```xml
<dependency>
    <groupId>com.kumuluz.ee.openapi</groupId>
    <artifactId>kumuluzee-openapi-mp-ui</artifactId>
    <version>${kumuluzee-openapi-mp.version}</version>
</dependency>
```

By default Swagger UI is accessible on `/api-specs/ui`, but you can remap it anywhere you want by setting the
`kumuluzee.openapi-mp.ui.mapping` configuration value to the desired path.

More details about this release can be found on
[GitHub](https://github.com/kumuluz/kumuluzee-openapi-mp/releases/tag/v1.1.2).
