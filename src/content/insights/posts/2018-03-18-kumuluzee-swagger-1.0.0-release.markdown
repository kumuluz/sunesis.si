---
layout: post
title:  "KumuluzEE Swagger 1.0.0 release is here!"
date:   2018-03-18
author: zvoneg
categories: [Product, Developers, Announcement]
tags: [KumuluzEE Swagger, Java EE, Microservices]
---

We're happy to announce the initial version of the KumuluzEE Swagger extenion v1.0.0 for the KumuluzEE framework. 

KumuluzEE Swagger (OpenAPI 2.0) extension provides support for documenting APIs using Swagger/OpenAPI v2 compliant annotations. Extension automatically hooks-up servlet that exposes API specification on endpoint /api-specs/<jax-rs application-base-path>/swagger.[json|yaml]. Extension also provides SwaggerUI which is added to your project to visualize API documentation and allow API consumers to interact with API endpoints.

<!--more-->

You can enable the KumuluzEE Swagger support by adding the following dependency:
```xml
<dependency>
    <groupId>com.kumuluz.ee.swagger</groupId>
    <artifactId>kumuluzee-swagger</artifactId>
    <version>${kumuluzee-swagger.version}</version>
</dependency>
```

To serve API specification in visual form and to allow API consumers to interact with API resources you can add Swagger-UI by including dependency kumuluzee-swagger-ui:

```xml
<dependency>
    <groupId>com.kumuluz.ee.swagger</groupId>
    <artifactId>kumuluzee-swagger-ui</artifactId>
    <version>${kumuluzee-swagger.version}</version>
</dependency>
```

Read more at [KumuluzEE Swagger](https://github.com/kumuluz/kumuluzee-swagger)

