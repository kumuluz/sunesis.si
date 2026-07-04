---
layout: post
title:  "KumuluzEE Event Streaming 1.2.0 released"
date:   2019-06-28
author: urbim
categories: [Product, Developers]
tags: [KumuluzEE Event Streaming, Kafka ]
---

We are pleased to announce the release of KumuluzEE Streaming 1.2.0. This release includes ready-to-use JSON Serializer,
Deserializer and SerDe. Producers with generic types defined can now also be injected and listeners have been improved
with explicit parameter validation.

JSON Serializer, Deserializer and SerDe are useful when you want to transfer objects in JSON format. For example to
serialize values of a producer to JSON use the following configuration:

<!--more-->

```yml
kumuluzee:
  streaming:
    kafka:
      producer:
        bootstrap-servers: localhost:9092 # comma separated list of servers
        key-serializer: org.apache.kafka.common.serialization.StringSerializer # key serializer for records
        value-serializer: com.kumuluz.ee.streaming.kafka.serdes.JsonSerializer # value serializer for records
```

A producer can then be injected like so:

```java
@Inject
@StreamProducer
private Producer<String, Customer> customerProducer;
```

Similarly for consumers, note however that type that the record should be deserialized into needs to be defined:

```yml
kumuluzee:
  streaming:
    kafka:
      consumer:
        bootstrap-servers: localhost:9092 # comma separated list of servers
        key-deserializer: org.apache.kafka.common.serialization.StringDeserializer # key deserializer for records
        value-deserializer: com.kumuluz.ee.streaming.kafka.serdes.JsonDeserializer # value deserializer for records
        value-deserializer-type: com.kumuluz.ee.app.models.Customer # type of json deserializer
```

And the listener:

```java
@StreamListener(topics = {"customer-topic"})
public void onMessage(ConsumerRecord<String, Customer> record) {
  // process message ...
}
```

Injection mechanism have also been improved in this release. As presented earlier, producers can now be injected with
generic parameters defined, which improves your codebase and makes development easier. Generic parameters of both
producers and consumers are now validated on application startup in order to ensure they match with the configuration.
This ensures that your `config.yml` matches with the defined injection points so that the errors can be discovered right
at the application startup.

We have also supported the well-known KumuluzEE extension disabling mechanism. The streaming extension can now be
disabled through configuration.

#### Features:

- Added JSON Serializer, Deserializer and SerDe
- Added type-safe Producer injection
- Added is enabled mechanism

#### Enhancements

- Added consumer parameter type validation
- Cleaned up producer initialization logic


More details about this release can be found on [GitHub](https://github.com/kumuluz/kumuluzee-streaming/releases/tag/v1.2.0).
