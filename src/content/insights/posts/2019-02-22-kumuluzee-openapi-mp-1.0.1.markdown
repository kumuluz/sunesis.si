---
layout: post
title:  "Initial release of KumuluzEE OpenAPI MicroProfile is here!"
date:   2019-02-22
author: evader1337
categories: [Product, Developers]
tags: [KumuluzEE OpenAPI, Microprofile, Java EE]
---

We are releasing the first version of KumuluzEE OpenAPI MicroProfile. It implements the MicroProfile OpenAPI
specification 1.0.1. Initial version of KumuluzEE OpenAPI enables intuitive documentation of your REST resources using
the MicroProfile OpenAPI annotations.

To start using the extension, simply add the following dependency to your application:

```xml
<dependency>
    <groupId>com.kumuluz.ee.openapi</groupId>
    <artifactId>kumuluzee-openapi-mp</artifactId>
    <version>${kumuluzee-openapi-mp.version}</version>
</dependency>
```

The [sample](https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-openapi-mp) showcasing some basic
features is already available so go check it out! We will also update the sample to showcase some more advanced usages
in the upcoming days.

For more information, read the [extension documentation](https://github.com/kumuluz/kumuluzee-openapi-mp).

We are excited to bring this extension into your hands!
