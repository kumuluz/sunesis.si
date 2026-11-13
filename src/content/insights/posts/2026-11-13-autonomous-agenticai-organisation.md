---
layout: post
title: 'The autonomous AgenticAI organisation - from agentic systems to autonomous agents and digital workers'
date: 2026-11-13
author: matjaz
language: en
translationKey: autonomous-agenticai-organisation
categories: [AgenticAI, Kumuluz]
tags: [AI, KumuluzAI, agents, multi-agent systems, MCP, digital workers]
---

Most organisations gained their first experience with generative artificial intelligence through conversational assistants for summarising documents and searching internal knowledge. Connected agentic systems soon followed, with language models calling the appropriate tools or data sources and performing several consecutive steps in response to a user's request. The next phase brings a fundamentally different way of working: a shift towards autonomous agents and digital workers that do not wait for someone to ask a question in a chat before starting a process, but operate proactively and continuously in the background.

<!--more-->

With conventional AI assistants, people still serve as the link between applications. Even if an assistant produces an analysis or drafts a response in seconds, an employee still has to transfer the findings into a back-end system, check edge cases, notify colleagues and track subsequent deadlines. Autonomous agents and digital workers fill precisely this gap: within predefined rules, they independently monitor events in the business environment, coordinate steps across systems and complete recurring workflows.

## What a fully autonomous AgenticAI organisation means in practice

At [Sunesis](https://sunesis.si/en/), we are currently working directly on this transition. We are participating in a project to establish a fully autonomous organisation based on AgenticAI technology. A non-disclosure agreement (NDA) prevents us from sharing details about the client or the industry, but we can describe how such an environment is designed: teams of AI agents independently and proactively carry out the organisation's entire day-to-day operations. People no longer perform routine operational tasks. Instead, they monitor the organisation as a whole and intervene only in cases that agents lack the knowledge or ability to resolve themselves, or where the system is deliberately designed to require human approval.

When autonomous agents take over day-to-day operations, the focus of engineering work quickly shifts from the quality of individual prompts to very concrete challenges in monitoring, oversight and management:

- **Detecting silent failures and establishing oversight of both business outcomes and technical operation:** When no user is following a process in a chat window, errors often do not appear as an obvious technical outage. An agent may misunderstand an edge case, overlook an important circumstance, use outdated information or get caught in a repetitive exchange with another agent, while servers and back-end services appear to be running without errors. In such environments, conventional technical monitoring of infrastructure availability and response times is no longer sufficient. A dedicated layer is needed to continuously monitor and oversee both the **substantive quality** and the **technical operation** of agents. In real time, this layer must check not only bottlenecks, failed calls and resource consumption, but also whether decisions comply with business rules and whether the resulting outcomes are sound and reliable.
- **Managing escalations without overwhelming people:** If an agent requests human intervention whenever it encounters minor uncertainty, the system loses the point of autonomy and creates bottlenecks. If the boundaries for independent action are too loose, however, business risk increases. A significant part of our work on this kind of project involves designing a clear mechanism for handing over exceptions: when a case reaches a person, they should not have to search through raw logs. They need to see a summary of the circumstances, which data the agent checked, what it has already tried and the specific decision expected of them.
- **Defining permissions and preventing cascading failures:** When several proactive agents access back-end systems at the same time, a single incorrect assumption can trigger a series of unwanted changes across connected processes. Each digital role needs precise boundaries: what it may read, which records it may change independently and which steps — such as financial transactions, contractual changes or sensitive communications — must wait for human approval.
- **Predictability under nondeterministic conditions:** Language models are inherently probabilistic, while day-to-day business requires reliability and repeatability. Continuous background operation requires limits on resource consumption per case, safeguards against infinite loops, handling of temporary external service outages and the ability to resume a process safely from its last confirmed checkpoint after an interruption.

## Measuring end-to-end process performance and continuously improving it

Monitoring individual errors and deviations is only the first part of managing an autonomous organisation. Long-term reliability also requires **monitoring the performance of agents and business processes as a whole**. In practice, this means measuring more than the success rate of individual model calls. We track end-to-end process metrics: the proportion of cases agents complete independently from start to finish, where bottlenecks arise during handovers between specialised agents, how often cases return for reprocessing, and the time and cost per business case actually completed. Only this broader view shows whether an agentic system merely speeds up individual tasks or genuinely improves the throughput of the entire operation.

Another key capability we are building in these environments is **automatic improvement of operation and continuous process optimisation**, with AI continually learning from how work actually unfolds. Each human approval, correction or resolved exception does more than close a particular case: it provides valuable feedback for the system as a whole. Based on past outcomes and execution patterns, the system can identify unnecessary process steps, overly rigid decision rules, the approach or model that delivers the best results for a particular type of task, and ways to improve context and task routing for future cases. Such learning does not mean uncontrolled changes to production: every proposed improvement to a workflow or an agent's behaviour must first be tested against historical cases and introduced under clear oversight.

## A technical perspective: separating reasoning from execution

At the architectural level, we address these requirements by strictly separating the probabilistic reasoning of language models from the deterministic execution of business logic. Long-running processes that must reliably preserve state or wait for human approval run in dedicated orchestration engines that provide retries, timeouts and compensating actions when errors occur. Agents have no direct access to back-end systems, services or databases; they communicate with internal and external systems exclusively through controlled _Business APIs_ and _Model Context Protocol_ (MCP) servers, with every call using _OAuth2/OIDC_ identity propagation and tightly scoped, single-use permissions (Mandate Sentinel). We connect the entire execution — from the model's initial reasoning and tool calls to process transitions and metrics for evaluating the quality of business outcomes — through unified tracing using the _OpenTelemetry_ standard. We maintain the quality of the AI components through evaluations and comprehensive management of AI operations throughout their lifecycle. To avoid developing these security, oversight, integration and evaluation mechanisms separately for every project, we build such solutions on our [KumuluzAI](https://kumuluz.com/en/) platform, which runs directly in the organisation's cloud or on-premises environment.

## How different levels of autonomy appear in our projects

In practice, the transition to fully autonomous digital workers is gradual. At Sunesis, we therefore develop systems with different levels of autonomy in parallel, tailored to the maturity and risks of each industry:

- For **RIKO**, we developed the **RikoAI** multi-agent system, in which a coordinated team of specialised agents analyses extensive international tender and contract documentation and flags risks. The solution received the artificial intelligence award (UI leta 2026 — AI of the Year 2026) at the CIO conference in 2026.
- For an **insurance group**, we are establishing an AgenticAI platform for governed process automation and secure integration of organisational knowledge with business systems.
- For a **banking group**, we are developing an AI assistant for a digital banking platform, with a focus on strict security and controlled integration with banking services.
- For the **Statistical Office of the Republic of Slovenia (SURS)**, in collaboration with the University of Maribor's Faculty of Electrical Engineering and Computer Science (UM FERI), we designed **SI-GEOS**, a multimodal agent that connects statistical and geospatial sources through MCP to produce automated analyses. The project was shortlisted for the GoDigital 2026 award.

Experience from these environments confirms that introducing autonomous agents and digital workers is no longer simply a matter of choosing the best language model. Well-designed back-end integrations and a reliable layer for monitoring, measuring performance and continuously improving production operation are becoming essential. Only when an organisation can clearly see what its agents are doing, why they made particular decisions, what results they achieve collectively and where they must stop for human judgement can it safely entrust them with day-to-day operations.

## From design to delivery

Our [AgenticAI Organizations & Digital Workers](/en/expertise/agentic-organizations/) offering explains how we select a first process together, define digital roles and autonomy boundaries, and expand delivery based on measurable outcomes — from an individual digital worker to connected operations across an organisation.
