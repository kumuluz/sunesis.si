---
layout: post
title:  "KumuluzEE-gRPC extension v1 released!"
date:   2018-10-11
author: primozh
categories: [Product, Announcement, Developers]
tags: [KumuluzEE, Java EE, Microservices, gRPC]
---

We are happy to announce first stable release of KumuluzEE-gRPC extension.
This extension provides an easy way to include gRPC communication protocol in your existing KumuluzEE microservices.
Define API (using Protobufs), extend generated classes, provide configuration and you are good to go!
gRPC client is also supported, basic configuration is provided automatically to you by extension.
For more advanced scenarios, you should consider using [grpc-java](https://github.com/grpc/grpc-java) library directly.
This release supports JWT token based authentication and client-server verification using asymetric crypthography.

## Features:
- Added gRPC communication protocol to KumuluzEE services
- Support for authentication using JWT and asymetric cryptography

Source code and documentation: [GitHub](https://github.com/kumuluz/kumuluzee-grpc)
Sample: [GitHub](https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-grpc)

## NOTE
JDK8 is the highest version currently supported. JDK9+ will be included in the near future.
