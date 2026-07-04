---
layout: post
title:  "KumuluzEE MicroProfile Config 1.3.0 released"
date:   2018-11-06
author: urbim
categories: [Product, Developers]
tags: [KumuluzEE MicroProfile Config, configuration, MicroProfile, Eclipse MicroProfile]
---

We're releasing the KumuluzEE MicroProfile Config 1.3.0. This version implements the MicroProfile Config specification
1.3, which introduces a better implicit converter and removes redundant converters. This release also brings full
support for Java 9+.

<!--more-->

The implicit converter now also checks if the method `of(String)` exists. The order in which the methods are checked has
also been changed. From the specification:

> An implicit converter is automatically provided if the following conditions are met:
>
>- The target type `T` has a `public static T of(String)` method, or
>- The target type `T` has a public Constructor with a String parameter, or
>- The target type `T` has a `public static T parse(CharSequence)` method

Manual implementations of some converters that are now covered by the new implicit converter have been removed.

This release also brings support for the `ConfigBuilder`, which lets you create a custom `Config` instance composed of
configuration sources and converters of your choosing.

Note that environment variable configuration source behavior has changed as of MicroProfile 1.3 specification. For a
given property name, the configuration source now searches 3 environment variables:

- Exact match.
- Replace all characters that are not alphanumeric with `_`.
- Replace all characters that are not alphanumeric with `_` and convert to upper case.

We have already supported this change in KumuluzEE core with the release of 3.0.0. We have also made sure that backward
compatibility is preserved so none of your existing configurations will break.

#### Features

- Added lookup for the method `of(String)` in implicit converter
- Support for `ConfigBuilder`
- Support for Java 9+

#### Enhancements

- Fixed the order in which methods are checked in implicit converter

More details about this release can be found on
[GitHub](https://github.com/kumuluz/kumuluzee-config-mp/releases/tag/v1.3.0).
