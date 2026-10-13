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
- **Infrastructure as Code (IaC):** Repeatable, drift-managed environment provisioning using Terraform, OpenTofu, and Ansible across on-premise clusters, OpenShift, and multi-cloud providers.
- **Automated Quality & Security Gates (DevSecOps):** Integrating static code analysis, dependency vulnerability scanning, container image scanning, and automated contract tests into CI pipelines before any code reaches production.
- **Zero-Downtime Releases:** Progressive delivery patterns including rolling updates, blue/green deployments, and canary rollouts managed by ingress controllers and service meshes.

---

## 2. Core Toolchain & Ecosystem

Sunesis designs, implements, and maintains robust operational pipelines using standard enterprise tooling:

| Category                   | Primary Technologies                                        |
| -------------------------- | ----------------------------------------------------------- |
| **Container Platforms**    | Red Hat OpenShift, Kubernetes (Vanilla, AKS, GKE, EKS)      |
| **GitOps & Delivery**      | Argo CD, Flux, Helm, Kustomize                              |
| **CI / CD Pipelines**      | GitLab CI, GitHub Actions, Azure DevOps, Jenkins            |
| **Infrastructure as Code** | Terraform, OpenTofu, Ansible                                |
| **Observability & SRE**    | OpenTelemetry, Prometheus, Grafana, Jaeger, Loki, ELK Stack |
| **Security & Secrets**     | HashiCorp Vault, cert-manager, Trivy, SonarQube             |

---

## 3. Production References & Case Studies

### Flare

- **Domain:** Blockchain Infrastructure & Decentralized Networks.
- **Implementation:** High-availability DevOps and platform engineering for Flare validator and node infrastructure. Sunesis automated cluster deployment, continuous health checks, node synchronization monitoring, automated failover, and metrics collection for high-throughput networks.
- **Impact:** Ensured continuous uptime, rapid recovery, and transparent operational metrics for critical blockchain node operations.
- **Reference Detail:** [https://sunesis.si/en/references/selected-work/](https://sunesis.si/en/references/selected-work/)

### Enterprise Financial & Public Platforms

- **Domain:** Banking, Insurance, and Public Sector.
- **Implementation:** Modernization of enterprise release cycles through containerization, migration to Red Hat OpenShift, declarative deployment pipelines, and integrated security compliance auditing.
- **Impact:** Decreased deployment cycle times from months to hours while maintaining strict regulatory traceability and compliance audit trails.

---

## 4. Operational Readiness for AgenticAI

Deploying autonomous AI agents requires specialized platform engineering considerations:

- **Inference Runtime Orchestration:** Scaling containerized model serving runtimes (vLLM, Ollama, Triton) with GPU-aware Kubernetes scheduling.
- **Observability for Agents:** Capturing end-to-end trace telemetry for multi-step reasoning loops, token budgets, prompt latency, and downstream tool execution errors.
- **Dynamic Secret Injection:** Safely supplying short-lived, least-privilege credentials to agents executing authorized operational tasks.
