---
layout: post
title:  "Introducing KumuluzEE GraphQL extension (1.0.0-SNAPSHOT)"
date:   2018-04-24
author: evader1337
categories: [Product, Developers]
tags: [KumuluzEE GraphQL, Java EE, Microservices]
---

We have released the first snapshot of **KumuluzEE GraphQL** extension. 

GraphQL is a data query language developed internally at Facebook in 2012 before being publicly released in 2015. It provides an alternative to REST and ad-hoc webservice architectures. It allows clients to define the structure of the data required, and exactly the same structure of the data is returned from the server. It is a strongly typed runtime which allows clients to dictate what data is needed. This avoids both the problems of over-fetching as well as under-fetching of data.

KumuluzEE GraphQL enables you to easily create your GraphQL endpoint or convert an exsisting REST endpoint with the use of annotations.
Learn more about [GraphQL](https://graphql.org/) or get started with a [basic sample](https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-graphql-jpa-simple).

<!--more-->

You can enable the KumuluzEE GraphQL support by adding the following dependency:
{% highlight xml %}
<dependency>
    <groupId>com.kumuluz.ee.graphql</groupId>
    <artifactId>kumuluzee-graphql</artifactId>
    <version>${kumuluzee-graphql.version}</version>
</dependency>
{% endhighlight %}

If you want to add graphical interface [GraphiQL](https://github.com/graphql/graphiql), you can include the following dependency:

{% highlight xml %}
<dependency>
    <groupId>com.kumuluz.ee.graphql</groupId>
    <artifactId>kumuluzee-graphql-ui</artifactId>
    <version>${kumuluzee-graphql.version}</version>
</dependency>
{% endhighlight %}

Read more at [KumuluzEE GraphQL](https://github.com/kumuluz/kumuluzee-graphql) or check out sample projects at [KumuluzEE samples](https://github.com/kumuluz/kumuluzee-samples).

*GraphQL definition was taken from [Wikipedia](https://en.wikipedia.org/wiki/GraphQL).*
