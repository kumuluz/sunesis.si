---
layout: post
title:  "KumuluzEE adds the Apache CXF JAX-WS implementation"
date:   2018-05-25
author: gregorp
categories: [Product, Developers]
tags: [KumuluzEE, Java EE, JAX-WS, Microservices]
---

We are happy to announce the support for widely used CXF implementation of Java API for XML Web Services (JAX-WS). The release 3.0.0 of KumuluzEE microservice framework will bring the support for SOAP web services with context dependency injection (CDI).

<!--more-->

The JAX-WS CDI component uses the convention over configuration software design paradigm, therefore no need for any custom configuration files. It is required for the web service java implementation classes to contain a @Webservice annotation to register web service endpoints automatically.

The component supports stateless soap endpoint development with top-down (WSDL first) or bottom-up (Java code first) approach. Best practices are shown in [KumuluzEE sample](https://github.com/kumuluz/kumuluzee-samples/tree/master/jax-ws/jax-ws-cxf).

More details at [KumuluzEE JAX-WS CXF sample](https://github.com/kumuluz/kumuluzee-samples/tree/master/jax-ws/jax-ws-cxf).