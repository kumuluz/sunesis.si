---
layout: post
title: 'Why you need a shared platform for AI agents'
date: 2026-09-08
author: ezupancic
language: en
translationKey: shared-ai-agent-platform
categories: [AgenticAI]
tags: [AI, KumuluzAI, agents]
---

**The first AI agent in a company is a project. The tenth is an architectural decision, and you often make it without even realising it.**

Over the past year, we have seen the same pattern in companies time and again. Customer support buys an AI agent to handle requests. Procurement gets an assistant to review contracts and bids. HR brings in a helper to navigate internal policies. Each purchase makes perfect sense on its own: the solution works, the supplier is responsive, and the department is happy.

The problem does not appear with the first agent. It only becomes visible with the third.

<!--more-->

## How AI silos emerge

This is not a new story. Exactly the same thing happened with information systems in the 1990s: each department bought its own application, and IT then spent a decade solving integration challenges. With AI agents, this cycle is repeating, only much faster.

Every AI agent needs eight key building blocks to operate:

1. access to a language model,
2. access to company knowledge,
3. tools for connecting to back-end systems,
4. permissions management,
5. safety guardrails,
6. personal data protection,
7. logging and traceability,

and only then:

8. the business logic you bought it for in the first place.

Seven of these eight building blocks are universal. Only the last is specific to your use case.

![Anatomy of an AI agent, showing the shared building blocks beneath its business logic.](/assets/images/anatomijaAgenta.png)

When you buy three separate solutions, you are effectively **paying for the same infrastructure three times.** Worse still, you get three different, disconnected versions of that infrastructure. In practice, this means:

- **The same documents in three different indexes.** Each solution copies and indexes documents in its own way. When you update a policy, you have to update it in three places. If you forget, two agents will answer the same question differently, and at that moment employees will stop trusting both.
- **Three different permission models.** Each solution uses its own service account. Because it is the easiest option, that account typically has access to all data. Three such accounts create three dangerous bypasses of your security model that will be difficult to justify in an audit.
- **Three integrations with the same ERP system.** Each supplier develops its own connection, and every ERP upgrade carries the risk of breaking one of them.
- **A lack of shared traceability.** When an agent makes a mistake, as it sooner or later will, there is simply no answer to "Why did it say that?" Each solution logs events differently, and some log almost nothing.
- **Three times the work with every change.** A new language model, a new regulatory requirement or a new abuse pattern does not mean one update, but three separate changes, with three different suppliers, on three different schedules.

The biggest cost is therefore not the purchase itself. The hidden cost is that you cannot upgrade any of these solutions independently, and each one leaves you dependent on a supplier holding part of your company's valuable knowledge.

## What a shared agent platform brings

The answer is not to buy one large, monolithic system. The real alternative is to establish those seven shared building blocks just once, as a unified infrastructure layer. Agents then become what they should be: a thin layer of business logic on top of that infrastructure.

**Shared knowledge.** A document is ingested and indexed once, and any number of agents can use it. Access rights are defined at document level and automatically checked with every query. When you improve search quality, it improves for all agents at once. When certain data must be deleted, you delete it in one place, which is also the only way for the _right to be forgotten_ to work in practice.

**Shared identity.** The agent acts on behalf of the signed-in user rather than using a privileged service account. It uses the same roles and groups you already have in your company. When you revoke an employee's permission, that change applies to all AI agents at the same instant.

**Shared guardrails.** What an agent may say, which tools it may use and when it needs human approval (_human-in-the-loop_) are centrally defined in a security policy. This policy is separate from the agent's code, versioned and verifiable. A new security requirement is applied in one place and immediately protects even agents that your internal team may not have developed.

**Shared traceability.** Every run of every agent is recorded in detail: the user's question, sources used, tool calls, token usage and final cost. This is a debugging tool, a foundation for security audits and the only way to make AI costs a transparent budget item that can be planned.

**Agility and model independence.** Language models now evolve and change faster than your business processes. If model selection is handled by the overarching platform, switching models is a simple configuration change. But if a model is hard-coded into each agent, every switch becomes another expensive IT project.

**Regulatory compliance as a by-product.** The EU AI Act requires a detailed inventory of AI systems, technical documentation, audit trails and human oversight. A company with a platform has all of this organised automatically. A company building silos has to collect and assemble it manually for every solution.

Most importantly, **the marginal cost of each additional agent falls dramatically.** The first agent on a platform may cost more upfront than a siloed solution because it also includes setting up the underlying infrastructure. But the second agent is already significantly cheaper, inheriting all integrations, knowledge, permissions and guardrails. Developing the fifth agent then becomes a matter of weeks rather than months.

## Three questions before your next AI agent purchase

Before signing a contract for your next AI solution, ask three simple questions:

1. **Where will the knowledge live?** In your central knowledge base or in the supplier's closed copy?
2. **Whose permissions will the agent use to access systems?** The user's actual permissions or a privileged service account?
3. **Who will be able to explain exactly why the agent took a particular action a year from now?**

If you do not have a good answer to any of these questions, you are not really buying an agent. You are buying a silo.

---

## KumuluzAI

KumuluzAI is our advanced agent platform for secure, integrated and production-ready AI agents, assistants and process automation.

It combines a secure agent runtime, advanced semantic search and access to company knowledge (RAG), back-end integration through MCP, identity propagation and authorisation, safety guardrails, dynamic routing between language models, full traceability, cost control and centralised management.

It is built from proven open-source components and based entirely on industry standards: Kubernetes, OAuth2/OpenID Connect, Model Context Protocol and OpenTelemetry. It runs within your environment, including hybrid deployments, and all its components are interchangeable, avoiding vendor lock-in. Your agents, knowledge and security policies therefore always remain exclusively yours.

**[Explore the KumuluzAI platform →](https://kumuluz.com/en/products/kumuluz-ai/)**
