---
layout: post
title:  "KumuluzEE Health 2.1.0 released"
date:   2019-11-22
author: jmezna
categories: [Product, Developers]
tags: [KumuluzEE Health, Microprofile-Health, HTTP health check]
---

We are happy to announce a new version of the KumuluzEE Health. This version implements the MicroProfile Health 2.1 specification. 

<!--more-->

#### Features
- Disabling default vendor procedures
An implementation is allowed to supply a reasonable default (out-of-the-box) procedures as defined in the Health Check Procedures section. To disable all default vendor procedures, users can specify a MicroProfile Config configuration property mp.health.disable-default-procedures to true. This allows the application to process and display only the user-defined health check procedures.

#### Bugs
- Fixed a bug in health check registration by name where name did not respect multiple lambda expressions within single bean.

More details about this release can be found on [GitHub](https://github.com/kumuluz/kumuluzee-health/releases/tag/v2.1.0).
