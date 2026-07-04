---
layout: post
title:  "Announcing initial release of KumuluzEE OpenTracing!"
date:   2019-02-18
author: evader1337
categories: [Product, Developers]
tags: [KumuluzEE OpenTracing, Microprofile, Jaeger, Zipkin]
---

The first version of KumuluzEE OpenTracing has been released. It implements the MicroProfile OpenTracing specification
1.2.1. Initial version of KumuluzEE OpenTracing brings full power of distributed tracing to your new/existing
microservices. From automatic tracing of incoming JAX-RS requests to tracing function calls with annotations, the
extensions has all the necessary features.

Full feature list includes:

<!--more-->

- Automatic tracing of incoming JAX-RS requests,
- Tracing outgoing JAX-RS requests by adding a single line of code,
- Manual tracing with `@Traced` annotation,
- Customized tracing by Tracer class injection,

Currently, the extensions supports two of the most popular tracing providers: [Zipkin](https://zipkin.io/) and
[Jaeger](https://www.jaegertracing.io/). Getting started is as easy as including one dependency to your project:

```xml
<dependency>
   <groupId>com.kumuluz.ee.opentracing</groupId>
   <artifactId>kumuluzee-opentracing-jaeger</artifactId>
   <version>${kumuluzee-opentracing.version}</version>
</dependency>
```

or

```xml
<dependency>
    <groupId>com.kumuluz.ee.opentracing</groupId>
    <artifactId>kumuluzee-opentracing-zipkin</artifactId>
    <version>${kumuluzee-opentracing.version}</version>
</dependency>
```

For more information, read the [extension documentation](https://github.com/kumuluz/kumuluzee-opentracing), read
[MicroProfile specification](https://github.com/eclipse/microprofile-opentracing) or check out the
[sample project](https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-opentracing) to kickstart your
tracing adventure!

We also recommend reading a more in-depth guide on how to trace microservices in the article
[Tracing KumuluzEE microservices with Jaeger](https://blog.kumuluz.com/developers/community/2019/02/11/kumuluzee-opentracing-jaeger).
