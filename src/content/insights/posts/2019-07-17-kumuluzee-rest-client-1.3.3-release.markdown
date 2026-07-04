---
layout: post
title:  "KumuluzEE Rest Client 1.3.3 released"
date:   2019-07-17
author: urbim
categories: [Product, Developers]
tags: [KumuluzEE Rest Client, REST API, MicroProfile, Eclipse MicroProfile]
---

We are happy to present a new release of KumuluzEE Rest Client. This version implements the MicroProfile Rest Client
1.3.3 specification. It includes support for advanced SSL configuration, enables simpler configuration with
configuration keys and other enhancements.

The `RestClientBuilder` now supports methods for configuring SSL (`sslContext`, `trustStore`, `keyStore` and
`hostnameVerifier`). SSL can also be configured through configuration which is especially useful when constructing rest
clients using CDI.

The `@RegisterRestClient` now supports additional argument `configKey` which can replace fully qualified class name in
the configuration. It also enables sharing of the configuration across multiple rest client interfaces. For example you
could use the following definition:

<!--more-->

```java
@RegisterRestClient(configKey="test-client")
public interface TestClient {
  @GET
  Response test();
}
```

And then configure it like this (`config.yml`):

```yaml
kumuluzee:
  rest-client:
    registrations:
      - class: test-client
        url: https://my-test-service
        read-timeout: 5000
```

All constructed rest client now implement `Closeable` and `AutoCloseable` interfaces. This means that all rest clients
can now be closed and will clean up their resources when done so.

Rest clients now add a default header `Accept: application/json`. If desired this can be overridden by adding a proper
`@Produces(...)` annotation on an interface or on a method. Dependency versions have also been updated in this release.

#### Features

- Added configurable SSL support.
- Added configKey support.

#### Enhancements

- Implemented `Closeable` and `AutoCloseable` on the proxy.
- Added default `Accept: application/json` header.
- Upped dependency versions


More details about this release can be found on
[GitHub](https://github.com/kumuluz/kumuluzee-rest-client/releases/tag/v1.3.3).
