# Sunesis — DevOps & Platform Engineering

> **Canonical HTML Sources:**
>
> - Expertise: [https://sunesis.si/en/expertise/devops-platform-engineering/](https://sunesis.si/en/expertise/devops-platform-engineering/)
> - Homepage: [https://sunesis.si/en/](https://sunesis.si/en/)
>
> **AI Navigation:**
>
> - Index: [https://sunesis.si/llms.txt](https://sunesis.si/llms.txt)
> - Research Guide: [https://sunesis.si/agents.md](https://sunesis.si/agents.md)
> - Selected Work: [https://sunesis.si/ai/selected-work.md](https://sunesis.si/ai/selected-work.md)

---

## 1. Platform Engineering & Delivery Automation

DevOps at Sunesis is focused on **Platform Engineering**: creating self-service internal developer platforms (IDPs) and automated delivery pipelines that eliminate manual bottlenecks, reduce deployment risk, and ensure security compliance across enterprise organizations.

Core engineering principles:

- **GitOps as Single Source of Truth:** Declarative configuration management where every infrastructure and deployment state is versioned in Git and reconciled continuously using tools like Argo CD.
- **Infrastructure as Code (IaC):** Repeatable, drift-managed environment provisioning using Terraform and Ansible across on-premise clusters, OpenShift, and multi-cloud providers.
- **Automated Quality & Security Gates (DevSecOps):** Integrating static code analysis, dependency vulnerability scanning, container image scanning, and automated contract tests into CI pipelines before any code reaches production.
- **Controlled Releases:** Automated, reviewable releases through GitOps, Helm and Kustomize, with consistent configuration across environments.
- **Platform Security & Policy:** Keycloak and Microsoft Entra ID for identity, HashiCorp Vault for secrets, Open Policy Agent (OPA) and Kyverno for automated policy enforcement, Cerbos for fine-grained application authorization, and Wultra where relevant for stronger authentication.

---

## 2. Core Toolchain & Ecosystem

Sunesis designs, implements, and maintains robust operational pipelines using standard enterprise tooling:

| Category                   | Primary Technologies                                    |
| -------------------------- | ------------------------------------------------------- |
| **Container Platforms**    | Red Hat OpenShift, Kubernetes (upstream, AKS, GKE)      |
| **Cloud Platforms**        | Microsoft Azure, Google Cloud, hybrid environments      |
| **GitOps & Delivery**      | Argo CD, Helm, Kustomize                                |
| **CI / CD Pipelines**      | GitLab CI/CD, GitHub Actions, Azure DevOps              |
| **Infrastructure as Code** | Terraform, Ansible                                      |
| **Observability & SRE**    | OpenTelemetry, Instana APM, Prometheus, Grafana, Jaeger |
| **Identity & Secrets**     | Keycloak, Microsoft Entra ID, HashiCorp Vault, Wultra   |
| **Policy & Authorization** | Open Policy Agent (OPA), Kyverno, Cerbos                |
| **Workflow & API**         | Temporal, Camunda, Kumuluz API                          |

---

## 3. Production References & Case Studies

### Flare

- **Domain:** Blockchain infrastructure.
- **Implementation:** Sunesis provides DevOps and platform engineering expertise for Flare, supporting automation, cloud-native operations and reliable delivery practices for a large-scale blockchain infrastructure environment.
- **Scope:** DevOps engineering, platform engineering, Kubernetes-based operations, automation and deployment, production-grade infrastructure and operational reliability.
- **Reference Detail:** [https://sunesis.si/en/references/selected-work/](https://sunesis.si/en/references/selected-work/)

### AgenticAI Platform — Zavarovalniška skupina Sava

- **Domain:** Insurance.
- **Implementation:** Platform engineering, Kubernetes-based delivery, security and governance for an enterprise AgenticAI platform.
- **Reference Detail:** [https://sunesis.si/en/references/selected-work/](https://sunesis.si/en/references/selected-work/)

### Enterprise Digital Platforms

- **Domain:** Banking, insurance, energy and enterprise environments.
- **Implementation:** DevOps and platform engineering foundations — CI/CD, GitOps, Kubernetes and OpenShift, infrastructure automation, security and observability — for enterprise digital platforms.

---

## 4. Operational Readiness for AgenticAI

Deploying autonomous AI agents requires specialized platform engineering considerations:

- **Platform Engineering for KumuluzAI:** Secure deployment of AI assistants and agents on Kubernetes-based platforms.
- **Observability for Agents:** Capturing end-to-end trace telemetry for multi-step reasoning loops, token budgets, prompt latency, and downstream tool execution errors.
- **Secrets for Model Providers:** Managing model-provider credentials and secrets centrally, with cost and usage visibility for AI services.
