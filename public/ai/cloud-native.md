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
- **Contract-First Communication:** Strongly typed service interfaces using OpenAPI and gRPC to prevent runtime incompatibilities.
- **Event-Driven Resilience:** Asynchronous messaging and event streaming with Apache Kafka and NATS for eventual consistency and peak load buffering.
- **Zero-Trust Security:** OAuth2 and OIDC with Keycloak and Microsoft Entra ID, identity propagation, mTLS and policy-based access between services.
- **Full-Stack Observability:** Distributed tracing, structured logging, and metrics instrumented with OpenTelemetry and monitored with Instana APM, Prometheus, Grafana, and Jaeger.

---

## 2. Cloud-native Heritage & KumuluzEE

Sunesis's cloud-native engineering builds on KumuluzEE, a foundation for the move from monoliths to microservices:

- **KumuluzEE Framework:** In 2015, Sunesis launched KumuluzEE, one of the world's first lightweight microservice frameworks for standard Java EE / Jakarta EE and Eclipse MicroProfile. KumuluzEE packaged standard enterprise APIs into minimal, container-ready executables without requiring heavyweight application servers.
- **Java Community Recognition:** KumuluzEE was awarded the prestigious **Duke's Choice Award** by Oracle at JavaOne in San Francisco (2015) for outstanding innovation in enterprise Java and cloud-native technology.
- **Microservices Innovation:** KumuluzEE introduced native extensions for service discovery (Consul, Etcd), distributed configuration, fault tolerance, circuit breakers, and metrics directly to the enterprise Java community.

---

## 3. Technology Stack & Platforms

Sunesis engineers and operates cloud-native workloads across multiple environments:

- **Container Orchestration:** Red Hat OpenShift, Kubernetes (upstream, AKS, GKE).
- **Service Communication:** gRPC, REST, GraphQL, WebSocket and HTTP/2.
- **Streaming & Messaging:** Apache Kafka, NATS, RabbitMQ.
- **Workflow Engines:** Temporal and Camunda for long-running processes, service tasks and human approval flows.
- **Identity & Observability:** Keycloak, Microsoft Entra ID, OpenTelemetry and Instana APM.
- **Data Architectures:** PostgreSQL, Redis, distributed object storage.
- **Operating Environments:** Private cloud bare-metal installations, hybrid enterprise setups, sovereign public cloud environments (Microsoft Azure, Google Cloud), and constrained edge computing nodes.

---

## 4. Edge-to-Cloud Continuum

As enterprise workloads extend beyond centralized data centers, Sunesis develops distributed architectures that bridge edge devices, local gateways, and central cloud platforms:

- **Lightweight Runtimes:** Optimizing containerized microservices and AI inference runtimes for constrained edge hardware.
- **Autonomous Local Operations:** Designing edge nodes capable of continuous local execution during network partitions, with deterministic bi-directional sync upon reconnection.
- **Research & Innovation:** Sunesis research work in cloud-edge systems includes **Headlight / NEPHELE** (AI-enabled, context-aware orchestration for the compute continuum across edge, fog and cloud), **EDGEWISE / dAIEDGE** (AI-native orchestration for trustworthy, energy-efficient IoT–Edge–Fog–Cloud environments), **AURORA / HEDGE-IoT** (intelligent IoT, edge computing and energy-aware infrastructure for distributed systems), **CHAMELEON / Resilmesh** (adaptive Kubernetes resilience and cybersecurity through a mesh-based approach) and **BONSAI / COSMIC** (advanced cloud-edge-IoT systems and intelligent infrastructure).

---

## 5. Production Reference Cases

### NLB

- **Domain:** Banking & Financial Services.
- **Implementation:** Frontend and backend development for NLB Klik, supporting modern digital banking experiences and complex banking journeys through secure digital channels, enterprise backend development and integrations.
- **Reference Detail:** [https://sunesis.si/en/references/selected-work/](https://sunesis.si/en/references/selected-work/)

### Plinovodi

- **Domain:** Energy & Utilities.
- **Implementation:** EPUS, a business-critical enterprise platform supporting energy infrastructure and operational workflows.
- **Reference Detail:** [https://sunesis.si/en/references/selected-work/](https://sunesis.si/en/references/selected-work/)

### Flare

- **Domain:** Decentralized Infrastructure & Blockchain.
- **Implementation:** DevOps and platform engineering expertise supporting automation, Kubernetes-based cloud-native operations and reliable delivery practices for a large-scale blockchain infrastructure environment.
- **Reference Detail:** [https://sunesis.si/en/references/selected-work/](https://sunesis.si/en/references/selected-work/)
