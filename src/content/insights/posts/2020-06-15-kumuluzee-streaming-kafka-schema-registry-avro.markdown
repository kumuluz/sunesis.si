---
layout: post
title:  "KumuluzEE Kafka Streaming with Schema Registry"
date:   2020-06-15
author: cen1
categories: [Product, Developers]
tags: [KumuluzEE, Streaming, Kafka, Schema Registry]
---

Apache Kafka is an excellent tool enabling asynchronous architecture in the modern microservice world. While Kafka offers very high-level abstractions in the form of Producer/Consumer APIs, Streams API, and Processor APIs, there is no out of the box support for managing the schema of records. [Confluent Schema Registry](https://github.com/confluentinc/schema-registry) is a tool solving this problem. This guide will show how you can use Schema Registry with [kumuluzee-streaming](https://github.com/kumuluz/kumuluzee-streaming) and suggest a typical development flow for this setup.

<!--more-->

In a way, the problem of defining and evolving a schema of your Kafka records is very similar to REST API and JSON schema evolution. Once you deploy a REST API to production, the clients have a basic expectation of JSON payloads not changing between minor API versions. Adding optional fields is usually considered a non-breaking change while renaming or removing required fields can break the clients and requires a major API version release (which implies a completely new API URL with eventual client migration). 

In REST, you would usually use OpenAPI specification and diff tools to maintain compatibility between updates and use it as a contract between client and server. Similarly, if Kafka producer starts inserting incompatible records, these can break existing consumers which are not yet updated to use the new schema. One way to keep the record schemas compatible is by relying on developers to stick to a predefined set of rules of what changes are allowed in minor updates but since everyone makes mistakes, this might not be the most reliable option in the long term. The better way is using a Schema Registry, a tool that stores all our record schemas and does compatibility checks automatically every time we update a schema. This way we can always be sure that our schema changes are compatible. 
run
This post assumes you are already familiar with regular Kafka tooling. For regular Kafka usage with `kumuluzee-streaming` extension, check out [kumuluzee-streaming-kafka](https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-streaming-kafka) sample on GitHub.
Full code sample used in this blog post can be found at [kumuluzee-streaming-kafka-registry](https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-streaming-kafka-registry).

# Additional tooling and dependencies

In order to use Schema Registry, we need additional maven dependencies and Docker containers in our projects. 

## Docker

You can find a sample [docker-compose.yaml](https://github.com/kumuluz/kumuluzee-samples/blob/master/kumuluzee-streaming-kafka-registry/docker-compose.yaml) in the repository. It uses:

1. `confluentinc/cp-zookeeper` Official Confluent Zookeeper container.
2. `confluentinc/cp-kafka` Official Confluent Kafka container.
3. `confluentinc/cp-schema-registry` Official Confluent Schema Registry container for managing our schemas.
4. `landoop/schema-registry-ui` 3rd party UI to view (and potentially manage) the Schema Registry.
5. `obsidiandynamics/kafdrop` Kafdrop is one of the best Kafka UI tools and one of the only ones allowing us to view actual records in the UI.

The #4 and #5 are optional but good for visualization of this tutorial.

To start all the containers, simply run `docker-compose up -d` in the root folder.

## Maven Dependencies

In addition to `kumuluzee-streaming` extension dependency, we need to include Avro for the handling of serialization and deserialization from POJO to Avro data format. Avro is the primary format used by Schema Registry to define schemas, other available formats are protobufs and JSON Schema.

```xml
<dependency>
    <groupId>org.apache.avro</groupId>
    <artifactId>avro</artifactId>
</dependency>
```

We also need Kafka Avro Serializers/Deserializers to plug into Kafka Producers/Consumers:
```xml
<dependency>
    <groupId>io.confluent</groupId>
    <artifactId>kafka-avro-serializer</artifactId>
</dependency>
```
For Streams, we need Avro Serde dependency:
```xml
<dependency>
    <groupId>io.confluent</groupId>
    <artifactId>kafka-streams-avro-serde</artifactId>
</dependency>
```

To generate Java POJOs from our Avro schema files, we need `avro-maven-plugin`:

```xml
<plugin>
    <groupId>org.apache.avro</groupId>
    <artifactId>avro-maven-plugin</artifactId>
    <executions>
        <execution>
            <phase>generate-sources</phase>
            <goals>
                <goal>schema</goal>
            </goals>
            <configuration>
                <sourceDirectory>...</sourceDirectory>
                <outputDirectory>...</outputDirectory>
            </configuration>
        </execution>
    </executions>
</plugin>
```

Finally, to register and update local schemas from and to registry, we need `confluent-schema-registry-maven-plugin`:

```xml
<plugin>
    <groupId>io.confluent</groupId>
    <artifactId>kafka-schema-registry-maven-plugin</artifactId>
    <configuration>
        <schemaTypes>

        </schemaTypes>
        <subjects>
        </subjects>
        <outputDirectory>...</outputDirectory>
    </configuration>
    <goals>
        <goal>test-compatibility</goal>
    </goals>
</plugin>
```

## Additional Maven Repositories

Confluent artefacts are only available from their own repository so we need to add it either in m2 configuration or root `pom.xml`.

```xml
<pluginRepositories>
    <pluginRepository>
        <id>confluent</id>
        <name>Confluent</name>
        <url>http://packages.confluent.io/maven/</url>
    </pluginRepository>
</pluginRepositories>

<repositories>
    <repository>
        <id>confluent</id>
        <name>Confluent</name>
        <url>http://packages.confluent.io/maven/</url>
    </repository>
</repositories>
```

# Producers

Producers are the services inserting records into the topics so we start with them. Typical Producer development cycle consists of:

1. Adding the required maven dependencies to our project.
2. Writing a schema for our producing record in a `.avsc` file using the Avro Schema syntax.
3. Generating a Java POJO from the schema using the Avro Maven Plugin. This is done at compile-time with `mvn compile`.
4. Uploading the schema to the schema registry with Confluent Schema Registry Maven Plugin. 

## Writing our record schema

First we create a new schema file in `src/main/resources/schemas/avro/v1.0.0/pricing.avsc`. The exact path you decide to store your schemas is up to your personal preferences. We recommend using versioning in the file path to preserve the full history of schema evolution when new versions are added. You should configure your Avro and Confluent Schema Registry plugin paths accordingly.

An example of schema definition:
```json
{
  "namespace": "com.kumuluz.ee.samples.kafka.registry.avro.lib",
  "type": "record",
  "name": "Pricing",
  "fields": [
    {"name": "price", "type": "string"},
    {"name": "priceExTax", "type": "string"},
    {"name": "basePrice", "type": "string"},
    {"name": "taxAmount", "type": "string"},
    {"name": "description", "type": "string"}
  ]
}
```

Now that we have our schema, a `mvn compile` will generate the Java class in `src/generated/java` using the namespace from the schema as package name. Since these classes are generated at compile time, we use `src/generated` output folder as opposed to `src/main` for hand-written code. The sample project has properly configured `maven-compiler-plugin` so IDEs such as IntelliJ properly mark the folder as generated sources folder.

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-compiler-plugin</artifactId>
    <configuration>
        <generatedSourcesDirectory>src/generated/java</generatedSourcesDirectory>
    </configuration>
</plugin>
```

Another option would be to generate the classes in `target/generated-sources`.

## Producer code

We can use the generated `Pricing` class in our Kafka producer interface. For this example, we've put the producer in a JAX-RS resource to produce a record with an API call.

```java
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@Path("/produce")
@RequestScoped
public class ProducerResource {

  @Inject
  @StreamProducer(config = "producer-avro")
  private Producer producerAvro;

  @POST
  public Response produceMessage(Input msg) {

      final Pricing pricing = new Pricing(msg.getPrice(), msg.getPriceExTax(), msg.getPrice(),
          msg.getTaxAmount(), msg.getDescription());
      final ProducerRecord<String, Pricing> record =
          new ProducerRecord<>("pricing-avro", UUID.randomUUID().toString(), pricing);

      producerAvro.send(record);

      return Response.ok().build();
  }
}
```

The code is essentially the same as if we did not use Schema Registry at all. The difference is in Producer configuration where we specify the Avro serializer and URL to the Schema Registry:

```yaml
kumuluzee:
  streaming:
    kafka:
      producer-avro:
        bootstrap-servers: localhost:29092
        key-serializer: org.apache.kafka.common.serialization.StringSerializer
        value-serializer: io.confluent.kafka.serializers.KafkaAvroSerializer
        schema-registry-url: http://localhost:8081
        auto-register-schemas: false
```

We also set the property `auto-register-schemas` to `false`, so the schemas are not published automatically with code deployment. Instead, we register schemas manually with the maven plugin. In the producer module run:

```
mvn schema-registry:register
```

We can verify that schema is registered by opening the Schema Registry UI at `http://localhost:8000`.

## Producing a record

Run the producer service and produce a record with a POST request:
```
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"price":"0.00","priceExTax":"0.00","taxAmount":"0.00","basePrice":"0.00","priceAmount":"0.00","description":"Desc"}' \
  http://localhost:8080/produce
```

We can verify that a record was produced according to our schema by checking the `pricing-avro` topic in Kafdrop UI at `http://localhost:9000`.

Kafdrop has Schema Registry support so it is capable of showing us human-readable record data even though the actual data exists in Avro binary format. Regular Kafka CLI tooling does not have this capability, we would need to use the extended [Confluent CLI tools](https://github.com/confluentinc/schema-registry/tree/master/bin) to view human-readable record data from the CLI.

## Evolving a schema

There are different types of compatibilities we can set in the Schema Registry depending on our needs. By default, `BACKWARDS` rule is used. You can see all the available types [in this compatibility documentation](https://docs.confluent.io/current/schema-registry/avro.html). After we write an evolved schema and try to register it, Schema Registry will automatically reject the update if the changes do not satisfy the compatibility rule. We also have a dedicated command to check the compatibility without registration:
```
mvn schema-registry:test-compatibility
```

# Consumer

Typical developer flow for the consumer is:
1. Download the schema from Schema Registry to a local `.avsc` file.
2. Generate the Java POJO.
3. Use the class in the consumer interface.

By downloading the schema from the registry, we can use the registry as a source of truth and a central repository of our schemas.

## Consumer code

Download the schema with `mvn schema-registry:download` followed by POJO generation with `mvn compile` inside the consumer module. Now we can use the generated class in our consumer interface:
```java
@StreamListener(topics = {"pricing-avro"}, config = "consumer-avro")
public void onMessage(ConsumerRecord<String, Pricing> record) {

    log.info(String.format("Consumed message: offset = %d, key = %s, value = %s%n", record.offset(), record.key()
            , record.value().toString()));

    messages.add(record.value().toString());
}
 ```
Again, the code is essentially the same as if we didn't use Schema Registry, the difference is in configuration:

```yaml
kumuluzee:
  streaming:
    kafka:
      consumer-avro:
        bootstrap-servers: localhost:29092
        group-id: group1
        enable-auto-commit: true
        auto-commit-interval-ms: 1000
        auto-offset-reset: latest
        key-deserializer: org.apache.kafka.common.serialization.StringDeserializer
        value-deserializer: io.confluent.kafka.serializers.KafkaAvroDeserializer
        schema-registry-url: http://localhost:8081
        specific-avro-reader: true
```

We must specify the Avro deserializer, Schema Registry URL and set `specific-avro-reader` to `true`. The default behaviour of Avro deserializer is to deserialize to generic records instead of the specified class which is not what we want.

## Consuming the record

Run the consumer service (on a different port than producer) and produce another record with the producer service. You should see the record being received and logged on the consumer side.

## Evolving the schema

Let's assume we use a `FORWARD` strategy to evolve our schemas. Typical evolved deployment would then look like this:
1. Update the schema on the producer side and deploy it to production.
2. Pull down the new schema on the consumer side and rebuild the consumer, optionally develop new features that use the added fields.
3. Deploy consumer to production.

For a period of time, we have new producer(s) and old consumer(s) deployed at the same time. Other than consumers not taking advantage of the new schema, consumers run normally and don't break when reading new records.

En example of adding a "v2.0.0" schema is shown in the full example.

# Streams

Streams API allows us to consume, transform, and produce a record at the same time, perform aggregations, and much more.

In the following example, we will calculate the sum of all records in our `pricing-avro` queue. While it does not make any sense from logical perspective, just imagine these are order amounts and we are calculating a total of all orders instead. The total is sent into `sum-avro` topic each time it is recalculated.

## Streams schema

Since our streams application consumes from one topic and produces to another topic, we need to download and compile the schema for the consumer side and write the schema for the producer side (`sum-avro` topic).

Getting the `Pricing.java` class:
```
mvn schema-registry:download
mvn compile
```

Our `Sum` schema has a single field:
```json
{
  "namespace": "com.kumuluz.ee.samples.kafka.registry.avro.lib",
  "type": "record",
  "name": "Sum",
  "fields": [
    {"name": "sum", "type": "string"}
  ]
}
```

## Streams code

```java
@Inject
private GenericConfig config;

@StreamProcessor(id="price-sum", autoStart=false, config="streams-avro")
public StreamsBuilder sum() {

    StreamsBuilder builder = new StreamsBuilder();

    final Serde<String> keySerde = Serdes.String(); //string Serde for our UUID record key
    final Serde<BigDecimal> bigDecimalSerde = new BigDecimalSerde(); //BigDecimal Serde for price sum, custom implementation since it is not provided by Kafka out of the box
    final Serde<Pricing> consumeValueSerde = new SpecificAvroSerde<>(); //consumer of Avro format
    final Serde<Sum> produceValueSerde = new SpecificAvroSerde<>(); //producer of Avro format

    // config.yml only configures the default SerDes. All non-default SerDes need to be
    // configured explicitely here.
    final Map<String, String> serdeConfig = Collections.singletonMap("schema.registry.url",
        config.getSchemaRegistryUrl());
    consumeValueSerde.configure(serdeConfig, false);
    produceValueSerde.configure(serdeConfig, false);

    final String inputTopic = "pricing-avro";
    final String outputTopic = "sum-avro";

    builder.stream(inputTopic, Consumed.with(keySerde, consumeValueSerde)) //consume with Avro Serde<Pricing>
        .map((k, v) -> new KeyValue<>("total-sum", new BigDecimal(v.getPrice().toString()))) //map Pricing object to single BigDecimal value
        .groupByKey(Grouped.with(keySerde, bigDecimalSerde)) //group by static key and reduce
        .reduce(BigDecimal::add)
        .toStream()
        .map((k, v) -> new KeyValue<>(k, new Sum(v.toPlainString()))) //map to our Sum schema
        .to(outputTopic, Produced.with(keySerde, produceValueSerde)); //produce to sum-avro

    return builder;
}
```

Streams configuration:
```yaml
kumuluzee:
  streaming:
    kafka:
      streams-avro:
        bootstrap-servers: localhost:29092
        application-id: sample-price-sum
        default-key-serde: org.apache.kafka.common.serialization.Serdes$StringSerde
        default-value-serde: org.apache.kafka.common.serialization.Serdes$StringSerde
        commit-interval-ms: 500
        schema-registry-url: http://localhost:8081
        specific-avro-reader: true
        auto-register-schemas: false
```

Since Serde for streams is dynamically configured in code, we can leave the defaults as StringSerde. Other properties have already been explained in the Consumer and Producer chapters.

## Testing the Streams application

After running the Streams application, produce a value with `price` attribute > 0. For example:
```
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"price":"15.00","priceExTax":"0.00","taxAmount":"0.00","basePrice":"0.00","priceAmount":"0.00","description":"Desc"}' \
  http://localhost:8080/produce
```

In Kafdrop, you should see a new total sum being produced in the `sum-avro` topic each time a new record is created in the `pricing-avro`.

# Future work - JSON Schema

Confluent has added support for JSON Schema as an alternative to Avro format in early 2020. Performance considerations aside, we see some benefits of using JSON Schema over Avro:
- A lot of developers are already familiar with writing schemas for OpenAPI. JSON Schema 2019-09 and OpenAPI have converged and now have a very similar syntax and set of features so the developer only needs to learn one syntax for both REST and Kafka worlds.
- The data format is JSON, no need for custom consumer tools for readable records.

When testing JSON Schema support, we determined that the feature is not quite ready yet. There is no support for draft 2019-09 yet. Generated POJOs need additional annotations to link the class with the source schema. This fix is not yet released at the time of writing. There is also no support for writing JSON Schema in yaml format (which is an often-used approach in OpenAPI world). While not a deal breaker, it needs some extra tooling in order to do the conversions on the fly.

We are eagerly monitoring new releases of Schema Registry to present this guide using JSON Schema in the future.

# Conclusion

Schema Registry brings a lot of new, relatively complex tooling and new workflow in developing Kafka applications for the benefits of better schema management and a compatibility safety net.