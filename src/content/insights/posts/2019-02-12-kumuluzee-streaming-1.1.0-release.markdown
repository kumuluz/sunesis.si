---
layout: post
title:  "KumuluzEE Event Streaming 1.1.0 released"
date:   2019-02-12
author: urbim
categories: [Product, Developers]
tags: [KumuluzEE Event Streaming, Kafka ]
---

We are pleased to announce the release of KumuluzEE Streaming 1.1.0. This release includes support for configuration
overrides through annotations. Kafka client has also been updated and some bugs have been fixed.

Kafka configuration properties can now be overridden by using the `@ConfigurationOverride` annotation. For example:

```java
@Inject
@StreamProducer(configOverrides = {@ConfigurationOverride(key = "bootstrap-servers", value = "localhost:9092")})
private Producer orderProducer;
```

<!--more-->

Overrides are supported in `@StreamProducer`, `@StreamListener` and `@StreamProcessor` annotations.

A bug has been fixed that acknowledged single messages incorrectly. We have also enabled injection of producers in
`@ApplicationScoped` beans.

#### Features:

- Added support for configuration overrides through annotations

#### Bugs:

- Fixed single message acknowledgements
- Enabled injection of `Producer` in `@ApplicationScoped` beans


More details about this release can be found on [GitHub](https://github.com/kumuluz/kumuluzee-streaming/releases/tag/v1.1.0).
