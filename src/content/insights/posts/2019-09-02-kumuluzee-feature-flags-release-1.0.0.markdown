---
layout: post
title:  "First version of the KumuluzEE Feature Flags project published"
date:   2019-09-02
author: blazm
categories: [Product, Announcement, Developers]
tags: [KumuluzEE, Java EE, Microservices]
---

We are pleased to announce the first version of the KumuluzEE Feature Flags project. This version provides support for the Unleash implementation.

KumuluzEE Feature Flags supports feature flags with a few simple methods. Unleash configuration can be defined with the configuration framework, which makes it fairly simple.

A quick example: 

- configuration:

```yaml
kumuluzee:
  name: "Sample App"
  feature-flags:
    unleash:
      unleash-api: "http://localhost:4242/api"
```

- checking a flag:

```java
@Inject
private FeatureFlags featureFlags;

if(featureFlags.isEnabled("test-feature"){
	//do something
} else {
	//do something else
}
```

A sample is available on GitHub: [KumuluzEE Feature Flags sample with Unleash](https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-feature-flags-unleash).
More details about the project can be found on [the project home page](https://github.com/kumuluz/kumuluzee-feature-flags)

