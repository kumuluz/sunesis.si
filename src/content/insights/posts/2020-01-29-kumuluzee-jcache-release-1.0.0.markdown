---
layout: post
title:  "KumuluzEE JCache 1.0.0 released"
date:   2020-01-29
author: jmezna
categories: [Product, Announcement, Developers]
tags: [KumuluzEE JCache, Microservices]
---

We are releasing the first version of KumuluzEE JCache. It allows usage of JCache annotations and JCache programmatic API in your KumuluzEE applications. Currently used JCache implementation is [Caffeine](https://github.com/ben-manes/caffeine).

<!--more-->

To start using the extension, simply add the following dependency to your application:

```xml
<dependency>
    <groupId>com.kumuluz.ee.jcache</groupId>
    <artifactId>kumuluzee-jcache-caffeine</artifactId>
    <version>1.0.0</version>
</dependency>
```

A sample showcasing the provided features is available on [GitHub](https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-jcache).

We are excited to bring this extension into your hands!
