---
layout: post
title:  "KumuluzEE Logs now supports Fluentd"
date:   2019-07-08
author: domeng
categories: [Product, Developers]
tags: [KumuluzEE Logs,Java EE, Microservices]
---

We are pleased to announce the support for fluentd in KumuluzEE Logs. 
The module includes support for logging to Fluentd logger.
It also introduces JAX-RS filters for logging contextual data for requests. 

<!--more-->

To use KumuluzEE Logs with Fluentd, use the following dependency:

```java
<dependency>
   <artifactId>kumuluzee-logs-fluentd</artifactId>
   <groupId>com.kumuluz.ee.logs</groupId>
   <version>${kumuluzee-logs.version}</version>
</dependency>
```

We recommend you to check out the [sample](https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-logs-fluentd).


#### Features:

- Added support for logging through Fluentd logger
- Added support for registration of custom RequestContext providers


More details can be found on [GitHub](https://github.com/kumuluz/kumuluzee-logs).