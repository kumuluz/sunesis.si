---
layout: post
title:  "Initial release of KumuluzEE Rest Client is here"
date:   2018-12-28
author: urbim
categories: [Product, Developers]
tags: [KumuluzEE Rest Client, REST API, MicroProfile, Eclipse MicroProfile]
---

We're happy to announce the first release of KumuluzEE Rest Client. This release implements the MicroProfile Rest Client
1.0.1 specification.

KumuluzEE MicroProfile Rest Client supports generation of rest clients from simple definitions. APIs are defined using
interfaces and well-known JAX-RS annotations. Generated rest clients provide a type-safe way to invoke defined APIs and
support a wide variety of providers which allow fine-grained but natural configuration at various stages of requests.

<!--more-->

Example of a simple API definition:

```java
@Path("orders")
@RegisterRestClient
@Dependent
public interface SimpleApi {

	@GET
	@Path("{id}")
	Order getById(@PathParam("id") long id);

}
```

The API invoker can then be injected using CDI and used to make requests to the described API:

```java
@Inject
@RestClient
SimpleApi simpleApi;

public void processOrder() {
    Order o = simpleApi.getById(1);

    // ...
}
```

Sample showcasing various features is already available at
[KumuluzEE Rest Client sample](https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-rest-client).

We are happy to bring this extension into your hands!

More details about this release can be found on
[GitHub](https://github.com/kumuluz/kumuluzee-rest-client/releases/tag/v1.0.1).
