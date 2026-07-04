---
layout: post
title:  "KumuluzEE JWT Auth 1.1.1 released"
date:   2019-01-29
author: urbim
categories: [Product, Announcement, Developers]
tags: [KumuluzEE JWT Auth, JWT, OpenID Connect, OIDC]
---

We are announcing the release of KumuluzEE JWT Auth 1.1.1. This release brings simplified configuration, as manual
import of the JWT filter and dynamic feature is no longer required and is done automatically. KumuluzEE JWT Auth now
implements the MicroProfile JWT Authentication 1.1. It also fully supports Java 9+.

<!--more-->

This release is based on the KumuluzEE core release 3.1.0, which brings configurable dependency scanning. This means
that the JWT Auth dependency is now automatically scanned and thus `JWTAuthorizationFilter` and
`JWTRolesAllowedDynamicFeature` are automatically added, removing the need to import them manually. This feature
will only work when using KumuluzEE core version 3.1.0 or above.

KumuluzEE JWT Auth now supports public keys supplied in JWK or JWKS formats, both Base64 URL encoded and in plain text.

Another added feature is the ability to disable extension simply with a configuration property. To do so, set the
`kumuluzee.jwt-auth.enabled` property to `false`. For example in _config.yml_:

```yaml
kumuluzee:
  jwt-auth:
    enabled: false
```

Full support for Java 9+ has also been added in this release.

#### Features:

- Implementation of MicroProfile JWT Authentication 1.1.1 specification.
- Scanning of the JWT Auth dependency.
- Disabling the extension through configuration.

#### Enhancements:

- Support of JWK and JWKS public key formats.
- Java 9+ support.

#### Bugs:

- Fixed null check.

More details about this release can be found on
[GitHub](https://github.com/kumuluz/kumuluzee-jwt-auth/releases/tag/v1.1.1).
