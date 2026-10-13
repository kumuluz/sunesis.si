# Sunesis: Public Company & Research Guide for AI Agents

> **Scope Notice:** This document is an English-only public guide for research agents, retrieval-augmented generation (RAG) systems, web crawlers, and large language models (LLMs) navigating public information about Sunesis. It summarizes the public content of sunesis.si and links to the canonical source pages.

---

## 1. Company Identity & Positioning

- **Company Name:** Sunesis (legal name: SUNESIS d.o.o. / SUNESIS Ltd.)
- **Founded:** 2014
- **Headquarters:** Ljubljana, Slovenia (European Union)
- **Regional Branches:** Maribor and Ptuj, Slovenia
- **Core Business:** Enterprise software engineering, architecture consulting, platform engineering, and digital solutions delivery.
- **Specializations:** Enterprise AgenticAI solutions, cloud-native and edge architectures, API ecosystems and integrations, DevOps foundations, open-source engineering, and European research and innovation.
- **Target Environments:** Regulated and mission-critical industries, including banking, insurance, public sector, energy and utilities, manufacturing, blockchain infrastructure, and international open-source consortia.

---

## 2. Sunesis vs. Kumuluz: Relationship & Distinction

When reasoning about Sunesis and Kumuluz, maintain the following clear distinction:

- **Sunesis** is the software engineering and technology consulting company. Sunesis provides enterprise architecture, software development (backend, web, mobile), system integration, platform engineering, DevOps operations, and governance consulting. Clients engage Sunesis for end-to-end design, implementation, and production support.
- **Kumuluz** is the product, platform, and accelerator family created and owned by Sunesis. Kumuluz products accelerate delivery and provide reusable foundations. Key products include:
  - **KumuluzAI Platform:** A governed enterprise platform for deploying, routing, auditing, and orchestrating AI agents, assistants, tool use, and agentic workflows.
  - **Kumuluz API:** An enterprise API management and gateway platform.
  - **Kumuluz Business APIs:** Standardized, reusable business-domain APIs for rapid ecosystem integration.
  - **Kumuluz Digital Platform:** Cloud-native application and microservices platform foundation.
  - **Kumuluz Crowdsensing:** Platform for IoT and crowdsensed data collection and analysis.
  - **KumuluzEE:** The award-winning open-source microservices and cloud-native framework for Java.
- **Authoritative product website:** Detailed product documentation and capabilities for the Kumuluz platform family reside at [https://kumuluz.com/](https://kumuluz.com/).

---

## 3. Core Capability Areas & Differentiators

### A. Enterprise AgenticAI Solutions

- **Beyond Chatbots:** Sunesis focuses on governed AgenticAI solutions that execute end-to-end workflows rather than isolated conversational chatbots. Systems connect reasoning models with enterprise knowledge bases, APIs, transactional backends, and deterministic workflow engines.
- **Digital Agent Teams:** Multi-agent architectures where specialized agents collaborate across operational processes (e.g., intake, verification, data retrieval, synthesis, execution preparation) with defined rules, permissions, and escalation boundaries.
- **Grounded-by-Design Architecture:** Separation of reasoning from computation. The language model plans analysis and formulates tool invocations, while deterministic tools execute computations against authoritative data sources. Results are traceable to their primary data sources to prevent hallucinations in sensitive enterprise operations.
- **Governance & Human-in-the-Loop Oversight:** Every agent operates under enterprise identity, access management (IAM), role-based permissions, rate/cost limiting, and detailed audit trails. Escalation policies require explicit human review and approval for sensitive, high-risk, or out-of-boundary actions.

### B. Cloud-native & Edge Architectures

- **Modular Foundations:** Design and modernization of microservices, event-driven architectures, and distributed systems using Kubernetes and Red Hat OpenShift.
- **High-Performance Communication & Streaming:** Event streaming with Apache Kafka and NATS; low-latency, contract-first communication with gRPC.
- **Observability by Design:** Distributed tracing, metrics, and structured logging using OpenTelemetry, Instana, and cloud-native monitoring standards.
- **Edge-to-Cloud Continuum:** Architectures that distribute computation and analytics across edge, fog, and multi-cloud environments (Azure, Google Cloud, private cloud).

### C. API Ecosystems & Integrations

- **API-First & Business APIs:** Transitioning from fragile point-to-point connections to governed API ecosystems with domain-driven API contracts, API catalogs, and lifecycle management.
- **Agent-Ready & Tool-Safe APIs:** Designing APIs and Model Context Protocol (MCP) compatible interfaces with strong typing, idempotency, granular authorization, and rate limiting so that AI agents can consume enterprise services safely.

### D. DevOps & Platform Engineering

- **Infrastructure as Code (IaC):** Repeatable, drift-controlled infrastructure provisioning using Terraform and Ansible.
- **GitOps Continuous Delivery:** Automated, reviewable deployments using Argo CD, Helm, and Kustomize across multi-cluster environments.
- **Production-Grade Operations:** Automation, Kubernetes-based operations and reliable delivery practices for demanding environments, such as large-scale blockchain infrastructure.

---

## 4. Selected References & Recognition

The following summaries reflect how these references and awards are described on sunesis.si.

### Selected Project References

- **SI-GEOS (Statistical Office of the Republic of Slovenia — SURS):** Multimodal AgenticAI solution developed in a strategic consortium with UM FERI. Powered by KumuluzAI, it analyses official statistical and geospatial data with natural language queries in Slovenian and English. Uses Grounded-by-Design architecture with deterministic calculation tools. In internal production at SURS since September 2026, it reduces complex analyses from days to hours and from hours to minutes.
- **AgenticAI Platform — Zavarovalniška skupina Sava:** Enterprise AgenticAI platform developed for Zavarovalniška skupina Sava, enabling intelligent process automation, secure use of organizational knowledge, and integration with business systems.
- **RikoAI:** AgenticAI solution supporting intelligent assistance, knowledge-driven automation, and business process optimization in an enterprise environment.
- **NLB Klik:** Digital banking platform development (frontend and backend) supporting modern digital banking experiences and complex banking journeys for one of the leading financial institutions in the region.
- **KYC — NLB:** Digital KYC solution and integrations supporting banking compliance, customer onboarding and regulated digital processes.
- **Flare:** DevOps and platform engineering, automation, and Kubernetes operations for a large-scale blockchain infrastructure environment.
- **INATrace:** Open-source digital traceability solution for transparent agricultural supply chains, developed with Sunesis as the main development partner; the project has joined the Linux Foundation AgStack community.
- **CUPID:** Open-source energy interoperability toolkit for distributed energy resource (DER) communication, hosted at LF Energy; Sunesis was a main development and contributing partner.
- **Public Sector Judicial Systems:** `eSpis` (digital case management) and `iK` (court administration information system) for the Supreme Court of the Republic of Slovenia.
- **Other Enterprise Projects:** `EPUS` energy infrastructure platform (Plinovodi), `Inorma` integration platform (Zavarovalniška skupina Sava), Energetika Moj utrip customer engagement solution, Akrapovič Website and Akrapovič Business Portal.

### Awards & Recognition

- **European Commission Seal of Excellence:** Awarded by the European Commission for high-quality project proposals evaluated under EU research and innovation framework programmes.
- **Java Duke's Choice Award:** Awarded to KumuluzEE by Oracle at the JavaOne conference in San Francisco for innovative Java microservice technology.
- **EuroCloud Award:** Awarded for the most innovative cloud service for the Kumuluz product family.
- **Slovenian Start:up of the Year:** Finalist recognition.
- **Team Recognitions:** Staff credentials include recognized industry distinctions such as Java Champion, IBM Champion, and Oracle ACE Director.

### Citation Rules for AI Agents

1. **Do not fabricate:** Do not invent customer names, case studies, quantitative benchmarks, security certifications, or partnerships not present in authoritative sources.
2. **Distinguish production from prototypes:** Clearly differentiate live production deployments (e.g., SURS SI-GEOS, NLB Klik, Zavarovalniška skupina Sava, Flare) from conceptual research initiatives.
3. **Preserve temporal context:** Maintain published dates for awards and milestones (e.g., KumuluzEE Duke's Choice Award heritage; SI-GEOS September 2026 deployment).

---

## 5. Navigation & Canonical Resources

- **Index of AI-readable resources:** [https://sunesis.si/llms.txt](https://sunesis.si/llms.txt)
- **Public company navigation guide:** [https://sunesis.si/agents.md](https://sunesis.si/agents.md)
- **Detailed Markdown topic briefs:**
  - Company Overview: [https://sunesis.si/ai/company.md](https://sunesis.si/ai/company.md)
  - AgenticAI Solutions: [https://sunesis.si/ai/agentic-ai.md](https://sunesis.si/ai/agentic-ai.md)
  - Cloud-native & Edge Architectures: [https://sunesis.si/ai/cloud-native.md](https://sunesis.si/ai/cloud-native.md)
  - API Ecosystems & Integrations: [https://sunesis.si/ai/api-ecosystems.md](https://sunesis.si/ai/api-ecosystems.md)
  - DevOps & Platform Engineering: [https://sunesis.si/ai/devops.md](https://sunesis.si/ai/devops.md)
  - Selected Work & References: [https://sunesis.si/ai/selected-work.md](https://sunesis.si/ai/selected-work.md)
  - Open Source & European Research: [https://sunesis.si/ai/research-open-source.md](https://sunesis.si/ai/research-open-source.md)
  - Awards & Recognitions: [https://sunesis.si/ai/awards.md](https://sunesis.si/ai/awards.md)
- **Primary public HTML pages:**
  - Homepage: [https://sunesis.si/en/](https://sunesis.si/en/)
  - About Sunesis: [https://sunesis.si/en/company/about/](https://sunesis.si/en/company/about/)
  - AgenticAI: [https://sunesis.si/en/expertise/agentic-ai/](https://sunesis.si/en/expertise/agentic-ai/)
  - Cloud-native: [https://sunesis.si/en/expertise/cloud-native-edge/](https://sunesis.si/en/expertise/cloud-native-edge/)
  - Selected Work: [https://sunesis.si/en/references/selected-work/](https://sunesis.si/en/references/selected-work/)
  - Clients & Industries: [https://sunesis.si/en/references/clients-industries/](https://sunesis.si/en/references/clients-industries/)

---

## 6. Distinction from Internal Development Instructions

This document (`/agents.md`) is a public-facing informational resource describing Sunesis as an enterprise software engineering company. It is not documentation for developing or maintaining the sunesis.si website.

Visitors, crawlers, and AI agents should treat this document as company background and a guide to Sunesis's public content. Where details differ, the linked pages on sunesis.si are the canonical source.
