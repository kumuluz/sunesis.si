---
layout: post
title:  "KumuluzEE MicroProfile Config 1.2.1 released"
date:   2018-06-20
author: urbim
categories: [Product, Developers]
tags: [KumuluzEE MicroProfile Config, configuration, MicroProfile, Eclipse MicroProfile]
---

We're announcing the KumuluzEE Config MicroProfile v1.2.1. This version implements the MicroProfile Config specification
v1.2.1, which introduces array converters and common sense converters.

<!--more-->

Array converters enable the use of arrays when acquiring properties from configuration. For example, the configuration
property `1,2,3` would be automatically converted to array of integers when injected into `int[] intArray`.

The common sense converters come in handy when there is no registered converter for a given class. The implementation
tries to convert `String` to the required class using the class's constructor, `valueOf(String)` method or
`parse(CharSequence)` method.

Another major part of this release is the inclusion of MicroProfile TCK, which checks the implementation for
compliance with the MicroProfile Config specification.

#### Features

- Added array converters
- Added implicit common sense converter

#### Enhancements

- Added MicroProfile TCK tests

More details about this release can be found on [GitHub](https://github.com/kumuluz/kumuluzee-config-mp/releases/tag/v1.2.1).
