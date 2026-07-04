---
layout: post
title:  "First version of the KumuluzEE AMQP project published"
date:   2019-03-01
author: blazm
categories: [Product, Announcement, Developers]
tags: [KumuluzEE, Java EE, Microservices, Projects]
---

We are pleased to announce the first version of the KumuluzEE AMQP project. This version provides support for the RabbitMQ message broker.

KumuluzEE AMQP supports sending and receiving messages with a few simple annotations. Broker configuration can be defined with the configuration framework, which makes it fairly simple.

<!--more-->

A few quick examples: 

- configuration:

```yaml
kumuluzee:
  amqp:
    rabbitmq:
      hosts:
        - name: MQtest
          url: localhost
          queues:
            - name: testQueue
```

- producing messages:

```java
@AMQPProducer(host="MQtest", key="testQueue")
public String sendMessage(){
	return "I'm a message";
}
```

- consuming messages:

```java
@AMQPConsumer(host="MQtest", key="testQueue")
public void receiveMessage(String consumerMessage){
	System.out.println(consumerMessage);
}
```

A sample is available on GitHub: [KumuluzEE AMQP sample with RabbitMQ](https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-amqp-rabbitmq).
More details about the project can be found on [the project home page](https://github.com/kumuluz/kumuluzee-amqp).

