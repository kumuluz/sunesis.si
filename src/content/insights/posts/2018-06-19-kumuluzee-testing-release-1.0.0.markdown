---
layout: post
title:  "KumuluzEE Testing released"
date:   2018-06-19
author: urbim
categories: [Product, Developers]
tags: [KumuluzEE Testing, Arquillian, jUnit, TestNG]
---

We're announcing the first release of the KumuluzEE Testing tools. The first release contains the KumuluzEE Arquillian
Container Adapter, which brings the popular integration testing framework Arquillian to the KumuluzEE.

<!--more-->

KumuluzEE Arquillian Container Adapter enables tests to run in an environment closely resembling the production by
starting the KumuluzEE container and executing tests within the container. This opens up a myriad of opportunities like
testing CDI interactions, sending requests to the application endpoints testing for the correct response and testing
interactions with the KumuluzEE server core and its extensions.


More details can be found at [KumuluzEE Testing](https://github.com/kumuluz/kumuluzee-testing/blob/master/README.md)
and [KumuluzEE Arquillian Container Adapter](https://github.com/kumuluz/kumuluzee-testing/blob/master/kumuluzee-arquillian-container/README.md).
