---
layout: post
title:  "Release of KumuluzEE Rest Client 1.1.0"
date:   2019-01-24
author: urbim
categories: [Product, Developers]
tags: [KumuluzEE Rest Client, REST API, MicroProfile, Eclipse MicroProfile]
---

We are pleased to announce the release of KumuluzEE Rest Client 1.1.0. This release supports asynchronous requests and
client builder interceptors. KumuluzEE Rest Client 1.1.0 implements the MicroProfile Rest Client 1.1 specification.

Asynchronous requests are now possible with the updated Rest Client. To make an request asynchronous, change the return
type of the interface method to `CompletionStage`.

Example of an asynchronous request definition:

```java
@POST
CompletionStage<Void> createCustomerAsynch(Customer customer);
```

<!--more-->

The defined method can then be used to make asynchronous requests. For example:

```java
customerApi.createCustomerAsynch(c)
    .toCompletableFuture().get();
```

Implementation of interceptors fired when a new client is being built is also now supported. This includes CDI clients
that are built at the start of the application. To create an interceptor implement the `RestClientBuilderListener`
interface and register the implementing class in a service file. For example:

```java
public class BuilderListener implements RestClientBuilderListener {

    @Override
    public void onNewBuilder(RestClientBuilder builder) {
        // ...
    }
}
```

Sample showcasing asynchronous requests has been updated and is available at
[KumuluzEE Rest Client sample](https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-rest-client).

More details about this release can be found on
[GitHub](https://github.com/kumuluz/kumuluzee-rest-client/releases/tag/v1.1.0).
