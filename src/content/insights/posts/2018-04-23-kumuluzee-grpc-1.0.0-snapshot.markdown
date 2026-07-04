---
layout: post
title:  "KumuluzEE gRPC 1.0.0-SNAPSHOT released"
date:   2018-04-23
author: primozh
categories: [Product, Developers]
tags: [KumuluzEE gRPC, gRPC API]
---

We're announcing the availability of **KumuluzEE gRPC** extension (1.0.0-SNAPSHOT), first beta release, which provides
easy-to-implement gRPC based communication between microservices.

<!--more-->

This extension provides automatic gRPC server startup, annotation based service discovery and binding, helper class for client creation and basic server configuration using configuration file. Multiple clients can be configured using simple YAML syntax and accessed by name.


More details at [KumuluzEE gRPC](https://github.com/kumuluz/kumuluzee-grpc).

Also check out [KumuluzEE gRPC sample](https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-grpc).


*gRPC protocol is layered above HTTP/2 and provides statically typed requests and responses.*