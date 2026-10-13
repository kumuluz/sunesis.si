# Sunesis — Cloud-native & Edge Architectures

> **Canonical HTML Sources:**
>
> - Expertise: [https://sunesis.si/en/expertise/cloud-native-edge/](https://sunesis.si/en/expertise/cloud-native-edge/)
> - Homepage: [https://sunesis.si/en/](https://sunesis.si/en/)
> - KumuluzEE: [https://ee.kumuluz.com/](https://ee.kumuluz.com/)
>
> **AI Navigation:**
>
> - Index: [https://sunesis.si/llms.txt](https://sunesis.si/llms.txt)
> - Research Guide: [https://sunesis.si/agents.md](https://sunesis.si/agents.md)
> - Selected Work: [https://sunesis.si/ai/selected-work.md](https://sunesis.si/ai/selected-work.md)

---

## 1. Architectural Philosophy

Cloud-native engineering at Sunesis is rooted in resilient, modular, and observable systems designed for high availability, zero-downtime deployment, and elasticity. We guide organizations away from fragile monoliths into well-bounded, decoupled distributed architectures without introducing unnecessary operational complexity.

Key architectural principles:

- **Loose Coupling & High Cohesion:** Domain-Driven Design (DDD) to isolate business domains into autonomous microservices.
- **Contract-First Communication:** Strongly typed service interfaces using OpenAPI, gRPC, and Protocol Buffers to prevent runtime incompatibilities.
- **Event-Driven Resilience:** Asynchronous messaging and event streaming with Apache Kafka and NATS for eventual consistency and peak load buffering.
- **Zero-Trust Security & Service Mesh:** Mutual TLS (mTLS), fine-grained identity propagation, and declarative traffic policies using Istio / Linkerd.
- **Full-Stack Observability:** Distributed tracing, structured logging, and metrics instrumented with OpenTelemetry, Prometheus, Grafana, and Jaeger.

---

## 2. Cloud-native Heritage & KumuluzEE

Sunesis has been a pioneer in cloud-native Java and microservice architectures since the inception of containerized enterprise development:

- **KumuluzEE Framework:** In 2015, Sunesis launched KumuluzEE, one of the world's first lightweight microservice frameworks for standard Java EE / Jakarta EE and Eclipse MicroProfile. KumuluzEE packaged standard enterprise APIs into minimal, container-ready executables without requiring heavyweight application servers.
- **Java Community Recognition:** KumuluzEE was awarded the prestigious **Duke's Choice Award** by Oracle at JavaOne in San Francisco (2015) for outstanding innovation in enterprise Java and cloud-native technology.
- **Microservices Innovation:** KumuluzEE introduced native extensions for service discovery (Consul, Etcd), distributed configuration, fault tolerance, circuit breakers, and metrics directly to the enterprise Java community.

---

## 3. Technology Stack & Platforms

Sunesis engineers and operates cloud-native workloads across multiple environments:

- **Container Orchestration:** Red Hat OpenShift, Kubernetes (upstream, AKS, GKE, EKS, Tanzu).
- **Service Communication:** gRPC, REST, GraphQL, WebSocket, HTTP/2 and HTTP/3.
- **Streaming & Messaging:** Apache Kafka, NATS, RabbitMQ, MQTT.
- **Data Architectures:** PostgreSQL, MongoDB, Redis, Elasticsearch, ClickHouse, distributed object storage.
- **Operating Environments:** Private cloud bare-metal installations, hybrid enterprise setups, sovereign public cloud environments (Microsoft Azure, Google Cloud), and constrained edge computing nodes.

---

## 4. Edge-to-Cloud Continuum

As enterprise workloads extend beyond centralized data centers, Sunesis develops distributed architectures that bridge edge devices, local gateways, and central cloud platforms:

- **Lightweight Runtimes:** Optimizing containerized microservices and AI inference runtimes for constrained edge hardware.
- **Autonomous Local Operations:** Designing edge nodes capable of continuous local execution during network partitions, with deterministic bi-directional sync upon reconnection.
- **Research Consortia:** Active contributions to European projects including **NEPHELE** (dynamic edge-cloud compute continuum) and **HEDGE-IoT** (intelligent edge-fog computing for next-generation energy networks).

---

## 5. Production Reference Cases

### NLB

- **Domain:** Banking & Financial Services.
- **Implementation:** Modernization and engineering support for mission-critical digital banking platforms (NLB Klik), emphasizing microservice scalability, secure integration with core banking systems, and continuous availability.
- **Reference Detail:** [https://sunesis.si/en/references/selected-work/](https://sunesis.si/en/references/selected-work/)

### Plinovodi

- **Domain:** Critical National Energy Infrastructure.
- **Implementation:** Design and development of EPUS, the core transmission and balancing information platform for Slovenia's natural gas transmission system operator.
- **Reference Detail:** [https://sunesis.si/en/references/selected-work/](https://sunesis.si/en/references/selected-work/)

### Flare

- **Domain:** Decentralized Infrastructure & Blockchain.
- **Implementation:** High-reliability DevOps engineering, node infrastructure deployment, monitoring, and automated cluster operations for mission-critical blockchain infrastructure.
- **Reference Detail:** [https://sunesis.si/en/references/selected-work/](https://sunesis.si/en/references/selected-work/)
