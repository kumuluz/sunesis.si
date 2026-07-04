---
layout: post
title:  "KumuluzEE Ethereum 1.0.0-SNAPSHOT is here!"
date:   2018-04-23
author: domeng
categories: [Product, Community, Developers]
tags: [KumuluzEE Ethereum, Java EE, Microservices]
---
Pre-release version of Ethereum extension for KumuluzEE framework is now available.

Extension provides support for interacting with smart contracts on the ethereum network using [web3j](https://docs.web3j.io/). You can write your own smart contracts and deploy them on the network right from IDE.

<!--more-->

Moreover you can create your own ERC20 token and use it as a payment for your service. You can also create DAO (decentralized autonomous organization), which is run solely through rules provided in smart contracts thus eliminating the middleman altogether.

You can enable KumuluzEE Ethereum support by adding the following dependency:

{% highlight xml %}
<dependency>
    <groupId>com.kumuluz.ee.ethereum</groupId>
    <artifactId>kumuluzee-ethereum-web3j</artifactId>
    <version>${kumuluzee-ethereum.version}</version>
</dependency>
{% endhighlight %}


Read more at [KumuluzEE Ethereum](https://github.com/kumuluz/kumuluzee-ethereum)
Also check out [KumuluzEE Ethereum Sample](https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-ethereum-web3j)
