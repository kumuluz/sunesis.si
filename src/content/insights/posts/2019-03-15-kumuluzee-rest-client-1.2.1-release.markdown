---
layout: post
title:  "Release of KumuluzEE Rest Client 1.2.1"
date:   2019-03-15
author: urbim
categories: [Product, Developers]
tags: [KumuluzEE Rest Client, REST API, MicroProfile, Eclipse MicroProfile]
---

We are pleased to announce the release of KumuluzEE Rest Client 1.2.1. This release brings support for better header
generation and propagation of headers from incoming requests, read and connect timeouts and other enhancements.
KumuluzEE Rest Client 1.2.1 implements the MicroProfile Rest Client 1.2 specification.

Headers can now be generated using the `@ClientHeaderParam` annotation. Headers can be statically defined or dynamically
generated with a method reference. For example:

<!--more-->

```java
@Path("/somePath")
public interface MyClient {
  @POST
  @ClientHeaderParam(name="X-Http-Method-Override", value="PUT")
  Response sentPUTviaPOST(MyEntity entity);

  @POST
  @ClientHeaderParam(name="X-Request-ID", value="{generateRequestId}")
  Response postWithRequestId(MyEntity entity);

  default String generateRequestId() {
    return UUID.randomUUID().toString();
  }
}
```

Headers can also be propagated from incoming requests. To propagate a header first enable the feature by annotating the
API interface with `@RegisterClientHeaders` annotation. Then specify which headers should be propagated in the KumuluzEE
Configuration framework. For example if you wish to forward the _Authorization_ header use the following configuration
in _config.yml_ file:

```yaml
kumuluzee:
  rest-client:
    propagate-headers: Authorization
```

The `@RegisterRestClient` annotation now includes a parameter `baseUri` and allows you to specify the URI on which the
API is present. This is an alternative to specifying the base URI in configuration.

Read and connect timeouts have been added. They can be specified in the configuration or by using the methods
`readTimeout()` and `connectTimeout()` when constructing the client using `RestClientBuilder`.

Support for interceptors has also been updated in this version. To use an interceptor with the client simply annotate
the desired method/interface with an interceptor binding. Note however that KumuluzEE Fault Tolerance interceptors are
not fully supported yet. We will be issuing a patch that fixes that shortly at KumuluzEE Fault Tolerance project, so
stay tuned.

#### Features

- Added read/connect timeout
- Read URI from `@RegisterRestClient` annotation
- added removeContext() to AsyncInterceptors
- Added RestClientListener support
- `@ClientHeaderParam` support
- `ClientHeadersFactory` support
- Propagate incoming headers

#### Enhancements

- `@Consumes` and `@Produces` annotations add _Accept_ and _Content-Type_ headers.
- Use dynamic proxy instead of DeltaSpike proxy when not using CDI
- Enabled SSL hostname verification by default
- Added EE Component dependency information

#### Bugs

- Properly forward JSON parsing exceptions
- Proper integration with JSON-P

More details about this release can be found on
[GitHub](https://github.com/kumuluz/kumuluzee-rest-client/releases/tag/v1.2.1).
