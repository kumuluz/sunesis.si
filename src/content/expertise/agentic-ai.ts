import {
  Bot,
  Boxes,
  Database,
  MessageSquare,
  Network,
  Plug,
  ServerCog,
  ShieldCheck,
  UserCheck,
  Workflow,
} from 'lucide-react'
import type { LanguageCode } from '../../lib/router'
import type { ExpertisePageContent } from '../../views/expertise/types'

const en: ExpertisePageContent = {
  seo: {
    title: 'AgenticAI Solutions for Enterprise Workflow Automation | Sunesis',
    description:
      'Sunesis designs and builds governed AgenticAI solutions, AI agents and digital agent teams that automate enterprise workflows using knowledge, APIs, tools and KumuluzAI.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'AgenticAI Solutions',
    title: 'Move from AI experiments to governed agentic operations',
    body: [
      'Sunesis designs and builds enterprise-grade AgenticAI solutions that go beyond conversation — helping organizations automate complete workflows, support employees and customers, connect enterprise knowledge with business systems and operate AI safely in production.',
      'Our AgenticAI solutions combine AI agents, enterprise AI assistants, digital agent teams, RAG, tool use, APIs, Business APIs, deterministic workflows, human approvals, auditability and production-grade governance.',
      'We help organizations move beyond isolated assistants by designing AI agents and digital agent teams that can coordinate tasks across systems, automate end-to-end processes and involve people where judgment, approval or accountability is required.',
      'Most projects are accelerated by KumuluzAI, our governed AgenticAI platform for secure, integrated and production-ready AI agents, assistants and agentic process automation.',
    ],
    primaryCta: 'Talk to our AI experts',
    secondaryCta: 'Explore our expertise',
    trustLine:
      'Built for organizations that need secure, integrated and governed AI — not another isolated chatbot.',
  },
  sections: [
    {
      type: 'split',
      title: 'From AI experiments to governed agentic automation',
      body: [
        'Many organizations start their AI journey with chatbots, document search or isolated assistants. These can be useful, but they often become disconnected initiatives — each with its own model, prompts, knowledge base, integrations, permissions, monitoring, cost structure and compliance risks.',
        'Sunesis helps enterprises take the next step: building AgenticAI solutions that are integrated into real business processes and managed through a common, secure and governed foundation.',
        'We design AI agents and assistants that can understand context, access approved enterprise knowledge, use tools, call APIs, work with Business APIs, participate in workflows, involve humans when needed and support multi-step business processes — with governance, traceability and control built in from the start.',
        'For selected operational areas, we can also help organizations move toward agentic operating models, where specialized AI agents handle much of the routine, knowledge-intensive and coordination-heavy work, while people supervise, approve sensitive actions, handle exceptions and remain accountable for outcomes.',
      ],
      quote:
        'AgenticAI is not only about answering questions. It is about connecting AI reasoning with enterprise knowledge, tools, APIs, workflows and business execution — under governance.',
    },
    {
      type: 'prose',
      title: 'AgenticAI is not just another chatbot',
      body: [
        'A chatbot answers questions. An enterprise AgenticAI solution helps get work done. AgenticAI systems can reason about a task, plan steps, retrieve relevant knowledge, use approved tools, interact with enterprise systems and support the execution of business processes.',
        'In enterprise environments, this requires much more than access to a language model. It requires identity, authorization, auditability, security guardrails, integration architecture, cost control, model governance, human oversight, deterministic execution boundaries and reliable operations.',
        'This is where Sunesis brings together AI engineering, enterprise software development, cloud-native architecture, API integration, DevOps and our own KumuluzAI platform.',
      ],
    },
    {
      type: 'compare',
      title: 'From isolated assistant to enterprise AgenticAI',
      columns: [
        {
          title: 'Isolated AI assistant',
          bullets: [
            'Answers questions and searches documents',
            'Works in a narrow context',
            'Has limited integration with business systems',
            'Often uses separate security, logging and cost control',
            'Is difficult to govern when many teams build their own',
            'Usually stays separate from workflows and execution',
            'Helps individual users, but rarely transforms an operating model',
          ],
        },
        {
          title: 'Enterprise AgenticAI solution',
          bullets: [
            'Supports or automates business processes',
            'Uses enterprise knowledge and approved tools',
            'Connects to APIs, Business APIs, workflows and backends',
            'Works under identity, authorization and governance policies',
            'Includes audit trails, human oversight and safety controls',
            'Separates AI reasoning from deterministic process execution',
            'Can evolve into digital agent teams and agentic operating models',
          ],
        },
      ],
    },
    {
      type: 'split',
      title: 'From AI assistants to agentic operating models',
      body: [
        'Many organizations begin with AI assistants that answer questions or help users find information. This is a useful first step, but the real value of AgenticAI appears when AI agents can take responsibility for complete workflows.',
        'Sunesis helps organizations design agentic operating models where specialized AI agents work together as a governed digital workforce. Agents can receive requests, retrieve knowledge, classify cases, validate information, call APIs, use Business APIs, prepare decisions, trigger workflows, request approvals and monitor process progress.',
        'This does not mean removing humans from responsibility. It means redesigning work so that AI agents handle repetitive, knowledge-intensive and coordination-heavy tasks, while people focus on supervision, exception handling, expert judgment, relationship management and final accountability.',
        'With KumuluzAI, Kumuluz API, Business APIs and workflow engines such as Temporal or Camunda, Sunesis can help organizations move from isolated assistants to AI-native departments, process operations and digital agent teams.',
      ],
      quote:
        'Sunesis helps organizations build AI-native operating models where AI agents act as a governed digital workforce for entire workflows — not just as assistants for individual tasks.',
    },
    {
      type: 'cards',
      title: 'How agentic operating models work',
      columns: 3,
      variant: 'accent',
      items: [
        {
          title: 'Digital agent teams',
          text: 'Multiple specialized agents collaborate across a process, each responsible for a defined role such as intake, classification, validation, knowledge retrieval, decision support, approval preparation or execution support.',
        },
        {
          title: 'End-to-end workflow automation',
          text: 'We automate complete workflows where agents coordinate tasks, use business systems, prepare outputs and trigger deterministic workflow steps.',
        },
        {
          title: 'AI-native departments',
          text: 'For selected operational areas, we help redesign departments or business functions around AI agents, Business APIs, workflows and human oversight.',
        },
        {
          title: 'Human supervision by design',
          text: 'People remain in control where judgment, accountability, risk, customer relationship or regulatory requirements demand human involvement.',
        },
        {
          title: 'Autonomous routine operations',
          text: 'Agents can handle repetitive, rules-based, document-heavy or coordination-heavy work with minimal human intervention.',
        },
        {
          title: 'Exception-based work model',
          text: 'People can move from manual processing to exception handling, supervision, expert decisions and continuous process improvement.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'What we build',
      intro:
        'We build AgenticAI solutions for organizations that want to automate knowledge-intensive, document-heavy and process-driven work — without losing control over security, compliance or enterprise architecture.',
      items: [
        {
          icon: Bot,
          wide: true,
          title: 'AI agents for business process automation',
          text: 'Agents that gather context, retrieve knowledge, validate outputs and trigger approved actions across multi-step workflows.',
          bulletsTitle: 'Examples',
          bullets: [
            'Customer request handling',
            'Insurance and financial workflows',
            'KYC and compliance support',
            'Claims and case preparation',
            'Internal service desk and back-office processes',
          ],
        },
        {
          icon: MessageSquare,
          title: 'Enterprise AI assistants',
          text: 'Assistants for customers, employees and portals — with a path to grow into broader AgenticAI platforms.',
          bulletsTitle: 'Examples',
          bullets: [
            'Customer support assistants',
            'Employee helpdesk assistants',
            'Internal knowledge assistants',
            'Portal and service navigation assistants',
            'Policy and procedure assistants',
          ],
        },
        {
          icon: Network,
          title: 'Digital agent teams and multi-agent workflows',
          text: 'Specialized agents that collaborate, share context and play distinct roles within a controlled process — moving beyond one-off assistants toward reusable process automation patterns and digital agent teams.',
          bulletsTitle: 'Example agent roles',
          bullets: [
            'Intake and classification agents',
            'Knowledge retrieval and validation agents',
            'Decision-support and human approval preparation agents',
            'Execution support agents',
            'Monitoring, escalation and process improvement agents',
          ],
        },
        {
          icon: Database,
          title: 'Enterprise knowledge integration and RAG',
          text: 'We connect agents to approved documents, policies, knowledge bases and enterprise data so they act on controlled internal knowledge.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Retrieval from enterprise knowledge sources',
            'Document ingestion, indexing and semantic search',
            'Retrieval-augmented generation with source-aware answers',
            'Knowledge freshness monitoring',
            'Permission-aware retrieval by user, role or context',
          ],
        },
        {
          icon: Plug,
          title: 'Tool use, APIs and MCP-oriented integration',
          text: 'Agents call approved capabilities through controlled interfaces rather than backend systems directly, with MCP integration where it fits.',
          bulletsTitle: 'Integration areas',
          bullets: [
            'Internal APIs and Kumuluz API',
            'Business APIs',
            'MCP-oriented tools',
            'Enterprise service layers and backend systems',
            'Document and workflow engines',
          ],
        },
        {
          icon: Boxes,
          title: 'Business APIs as governed agent tools',
          text: 'We expose repeated business capabilities as reusable Business APIs — a governed layer between agents and enterprise systems.',
          bulletsTitle: 'Example Business API tools',
          bullets: [
            'Customer, policy or account lookup',
            'Order or request status',
            'KYC status and case creation',
            'Document submission and notifications',
            'Approval requests and workflow initiation',
          ],
        },
        {
          icon: Workflow,
          wide: true,
          title: 'Deterministic workflow integration',
          text: 'Agents prepare context and recommend next steps, while engines like Temporal or Camunda execute process-critical steps under control.',
          bulletsTitle: 'Typical workflow patterns',
          bullets: [
            'Agent prepares a case, workflow executes the process',
            'Agent retrieves context, workflow handles approvals',
            'Agent classifies a request, workflow routes it',
            'Business APIs act as workflow activities or service tasks',
          ],
        },
        {
          icon: UserCheck,
          title: 'Human-in-the-loop control',
          text: 'For high-risk actions, users review, confirm or reject what an agent proposes before anything is executed.',
          bulletsTitle: 'Examples',
          bullets: [
            'Approval before changing business data',
            'Review before sending official communication',
            'Four-eyes principle for sensitive actions',
            'Escalation to a human expert when confidence is low',
          ],
        },
        {
          icon: ShieldCheck,
          title: 'Governance, auditability and compliance',
          text: 'Logs, decision traces and access policies showing what happened, who triggered it and which tools were used — supporting DORA, the EU AI Act and GDPR.',
          bulletsTitle: 'Governance areas',
          bullets: [
            'Identity and role-based access',
            'Tool authorization and knowledge source control',
            'Prompt and policy governance',
            'Session logging and tool call audit trails',
            'Token and model usage visibility',
          ],
        },
        {
          icon: ServerCog,
          title: 'Production-ready AI architecture',
          text: 'We move organizations from prototypes to production: deployment, security, monitoring, cost control, model routing and lifecycle management.',
          bulletsTitle: 'Architecture concerns',
          bullets: [
            'Cloud, hybrid or private deployment',
            'Kubernetes-based platform delivery',
            'Enterprise identity integration',
            'Observability and model routing',
            'Security guardrails and lifecycle management',
          ],
        },
      ],
    },
    {
      type: 'steps',
      title: 'AgenticAI maturity model',
      numbered: true,
      variant: 'cards',
      intro:
        'Organizations do not need to become AI-native overnight. Most start with a focused assistant or process use case and gradually evolve — from AI assistants to tool-using agents, workflow-connected agents, digital agent teams and AI-native operating models.',
      items: [
        {
          title: 'AI assistant',
          text: 'AI assists users by answering questions, explaining procedures and helping them find information. Outcome: better self-service, faster knowledge access and reduced support workload.',
        },
        {
          title: 'Tool-using agent',
          text: 'AI agents use approved tools and APIs to retrieve data, check statuses or perform simple actions. Outcome: more useful assistants that can interact with enterprise systems under control.',
        },
        {
          title: 'Workflow-connected agent',
          text: 'Agents participate in business workflows where critical steps are executed through deterministic workflow engines and Business APIs. Outcome: AI supports real process execution while maintaining reliability, auditability and human approvals.',
        },
        {
          title: 'Digital agent team',
          text: 'Multiple specialized agents collaborate across an end-to-end process, each with a defined role and scope. Outcome: complex workflows can be coordinated by digital agent teams instead of a single assistant.',
        },
        {
          title: 'AI-native operating model',
          text: 'Selected operational functions or departments are redesigned around AI agents, Business APIs, workflows, governance and human supervision. Outcome: routine work is handled primarily by agents, while people focus on oversight, exceptions, expert judgment and accountability.',
        },
      ],
    },
    {
      type: 'kumuluz',
      title: 'Powered by KumuluzAI — our AgenticAI platform',
      body: [
        'Most enterprise AgenticAI projects need more than a custom-built agent. They need a common platform so agents, assistants and AI applications are developed, managed and controlled consistently across the organization.',
        'KumuluzAI provides the foundation for agent runtime, orchestration, enterprise knowledge access, tool integration, identity propagation, safety guardrails, model routing, auditability, cost control and centralized management — helping organizations avoid fragmented AI silos.',
      ],
      items: [
        {
          label: 'Single foundation',
          title: 'One enterprise platform',
          text: 'Agents, assistants and AI applications run on a common platform instead of each team building its own isolated stack.',
        },
        {
          label: 'Deployment',
          title: 'Single-tenant deployment',
          text: 'KumuluzAI can be deployed in the customer environment, supporting data residency, isolation and enterprise control.',
        },
        {
          label: 'Model routing',
          title: 'Hybrid model routing',
          text: 'Sensitive data can stay within the perimeter, while less sensitive workloads use external providers through a controlled gateway.',
        },
        {
          label: 'Neutral',
          title: 'Provider-neutral architecture',
          text: 'The platform abstracts model providers, helping organizations avoid lock-in and maintain an exit strategy.',
        },
        {
          label: 'Governance',
          title: 'Governance by design',
          text: 'Policies, identity, authorization, audit trails, human approvals and safety controls are part of the platform, not an afterthought.',
        },
        {
          label: 'Management',
          title: 'Central management console',
          text: 'Agents, tools, knowledge sources, policies, prompts, costs, audit trails and approvals are managed from one place.',
        },
      ],
      cta: 'Explore KumuluzAI Platform',
      ctaHref: 'https://kumuluz.com',
    },
    {
      type: 'prose',
      title: 'Do not let AI become another enterprise silo',
      body: [
        'Without a platform strategy, AI initiatives quickly fragment. One department builds a chatbot. Another connects a model to internal documents. A third introduces an assistant through an external vendor. Each has its own knowledge base, permissions, monitoring, model provider, cost structure and compliance story.',
        'A platform approach changes this. AI agents can be developed by different teams or partners, but they run on the same foundation, follow the same governance rules, use shared platform services and remain visible to the organization.',
      ],
    },
    {
      type: 'table',
      title: 'Isolated AI initiatives vs platform-based AgenticAI',
      columns: ['Area', 'Isolated AI initiatives', 'Platform-based AgenticAI'],
      rows: [
        [
          'Governance',
          'Different for every solution',
          'Unified across all agents',
        ],
        [
          'Identity & access',
          'Implemented separately',
          'Propagated across the full agent flow',
        ],
        [
          'Knowledge',
          'Duplicated and inconsistent',
          'Shared, controlled and traceable',
        ],
        [
          'Tools & APIs',
          'Rebuilt per use case',
          'Reusable governed tools and APIs',
        ],
        [
          'Costs',
          'Hard to attribute and control',
          'Centrally monitored and budgeted',
        ],
        [
          'Compliance',
          'Proven separately each time',
          'Built into the platform',
        ],
        [
          'Workflows',
          'Often disconnected',
          'Integrated with deterministic execution',
        ],
        [
          'Scalability',
          'Grows into complexity',
          'Designed for enterprise reuse',
        ],
      ],
    },
    {
      type: 'cards',
      title: 'Designed for secure and controlled execution',
      intro:
        'AgenticAI introduces new risks because agents can use tools, call systems and execute actions. Sunesis designs clear boundaries — what an agent can read, what it can do, when it needs approval and how every action is recorded — into the architecture from the beginning.',
      columns: 2,
      variant: 'check',
      items: [
        {
          title: 'Identity propagation',
          text: 'Every agent action runs in the context of a known user, role or system identity, enabling consistent access control across agents, tools, knowledge and backends.',
        },
        {
          title: 'Permission-aware knowledge access',
          text: 'Agents retrieve information only from approved sources and according to the user’s role, context and access rights.',
        },
        {
          title: 'Tool-level authorization',
          text: 'Agents can only use the tools and actions they are explicitly allowed to use, based on policies and the context of the task.',
        },
        {
          title: 'Write-action control',
          text: 'Actions that change data or trigger business effects can require additional approval and short-lived authorization before execution.',
        },
        {
          title: 'Human approval workflows',
          text: 'High-risk or sensitive actions can be routed to human reviewers, with clear context and traceability.',
        },
        {
          title: 'Guardrails and validation',
          text: 'The solution can detect unsafe prompts, protect sensitive data, validate outputs and reduce the risk of misuse or unintended behavior.',
        },
        {
          title: 'Gateway and API control',
          text: 'Agent requests can be routed through API management layers where authentication, policy enforcement, monitoring and logging are applied.',
        },
        {
          title: 'Audit trails and session reconstruction',
          text: 'Agent decisions, knowledge retrieval, tool calls, model interactions and approvals can be traced and reconstructed for operational, security and compliance purposes.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Where AgenticAI creates value',
      intro:
        'AgenticAI is especially useful where work depends on complex processes, distributed knowledge, documents, approvals and multiple enterprise systems.',
      columns: 3,
      variant: 'tag',
      items: [
        {
          title: 'Insurance process automation',
          text: 'Claims handling, policy workflows, customer requests, knowledge retrieval and document-heavy insurance processes.',
          meta: 'AgenticAI, enterprise knowledge, workflow automation, human approval, auditability',
        },
        {
          title: 'Banking and compliance workflows',
          text: 'KYC, customer onboarding, compliance checks, advisory processes and knowledge-intensive banking operations.',
          meta: 'Secure knowledge access, API integration, human-in-the-loop, regulated workflows',
        },
        {
          title: 'Enterprise knowledge and employee support',
          text: 'Helping employees find answers, understand procedures, prepare documents and access approved organizational knowledge.',
          meta: 'Knowledge retrieval, semantic search, permission-aware access, governance',
        },
        {
          title: 'Back-office automation',
          text: 'Reducing manual work in repetitive administrative, operational and support processes across documents, systems and people.',
          meta: 'Workflow orchestration, validation, system integration, escalation, Business APIs',
        },
        {
          title: 'Customer-facing digital services',
          text: 'AI agents embedded into web, mobile and other channels to guide users, collect information and execute process steps.',
          meta: 'Digital channels, secure execution, personalization, human handover',
        },
        {
          title: 'AI-assisted workflow automation',
          text: 'Agents prepare context, classify requests, summarize documents or recommend actions, while workflow engines execute business-critical steps deterministically.',
          meta: 'Temporal, Camunda, Business APIs, approvals, retries, audit trails',
        },
        {
          title: 'Regulated enterprise AI platforms',
          text: 'KumuluzAI as a common foundation for multiple assistants, agents and applications across departments under central control.',
          meta: 'Single platform, shared governance, model routing, cost control',
        },
        {
          title: 'AI-native departments and operational functions',
          text: 'AI agents handle much of the routine work, coordination and decision preparation, while people supervise, approve sensitive steps, handle exceptions and remain accountable for outcomes.',
          meta: 'Digital agent teams, agentic operating models, Business APIs, human supervision, governance',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Reference architecture for enterprise AgenticAI',
      body: [
        'A production AgenticAI solution separates AI reasoning, knowledge retrieval, tool use, workflow execution and backend operations into clear layers — a safer and more maintainable architecture than connecting agents directly to backend systems.',
      ],
      columns: 3,
      variant: 'numbered',
      items: [
        {
          title: 'User channels',
          text: 'Web applications, customer and employee portals, mobile apps, intranets, service desks and internal business applications.',
        },
        {
          title: 'KumuluzAI agent layer',
          text: 'AI agents, assistants, prompts, policies, model routing, knowledge retrieval, guardrails, human approvals and auditability.',
        },
        {
          title: 'Knowledge layer',
          text: 'Approved documents, policies, procedures, knowledge bases, intranet content, structured data and source-aware retrieval.',
        },
        {
          title: 'Tool and API layer',
          text: 'Agent-callable APIs, MCP-oriented tools, Business APIs, connectors and approved system actions.',
        },
        {
          title: 'API management layer',
          text: 'API catalog, gateway, access control, routing, monitoring and policy enforcement through platforms such as Kumuluz API.',
        },
        {
          title: 'Workflow orchestration layer',
          text: 'Temporal, Camunda or similar platforms for deterministic process execution, approvals, retries and long-running workflows.',
        },
        {
          title: 'Enterprise systems',
          text: 'CRM, ERP, core banking, insurance, document and case-management systems, databases and external services.',
        },
        {
          title: 'Governance and observability',
          text: 'Audit trails, session logs, tool call records, usage analytics, model cost visibility and compliance reporting.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'How we deliver AgenticAI solutions',
      intro:
        'We help organizations move from business opportunity to production-ready AgenticAI through a structured, pragmatic and engineering-driven approach.',
      items: [
        {
          title: 'Identify high-value use cases',
          text: 'We work with business and technology stakeholders to find processes where AgenticAI can create measurable value.',
        },
        {
          title: 'Define the platform and governance model',
          text: 'We define how agents are managed, which knowledge and systems they can access, which tools are approved and how approvals, auditability and compliance work.',
        },
        {
          title: 'Design the agentic workflow',
          text: 'We model agents, tools, prompts, knowledge retrieval, decision points, human approvals and deterministic workflow boundaries.',
        },
        {
          title: 'Build a focused MVP',
          text: 'We develop a controlled MVP that validates value, feasibility, governance and user experience before scaling.',
        },
        {
          title: 'Integrate with enterprise systems',
          text: 'We connect the solution with internal APIs, identity providers, document repositories, data sources and workflow systems.',
        },
        {
          title: 'Add governance, safety and observability',
          text: 'We implement audit trails, access policies, safety guardrails, human approval mechanisms, monitoring and cost visibility.',
        },
        {
          title: 'Deploy, operate and improve',
          text: 'We support deployment, DevOps, production monitoring, performance optimization and continuous improvement.',
        },
        {
          title: 'Scale into a platform',
          text: 'After the first use cases prove value, more agents, knowledge sources, tools, APIs and workflows are added to the same foundation.',
        },
        {
          title: 'Evolve toward agentic operations',
          text: 'For selected areas, we help organizations redesign operating models around digital agent teams, Business APIs, workflows, governance and human supervision.',
        },
      ],
    },
    {
      type: 'list',
      title: 'Built on enterprise architecture, not AI hype',
      body: [
        'AgenticAI requires more than prompt engineering. It needs robust software architecture, secure integration, reliable orchestration, identity management, observability, DevOps and operational discipline.',
        'Sunesis combines AI engineering with strong expertise in backend systems, APIs, event-driven architectures, cloud-native platforms, Kubernetes and DevOps.',
      ],
      items: [
        'Agent runtime and orchestration',
        'Digital agent teams and multi-agent workflows',
        'Enterprise knowledge and RAG pipelines',
        'Tool and API integration',
        'MCP-oriented tool exposure',
        'Business APIs and reusable capabilities',
        'Model routing and provider abstraction',
        'Identity and authorization across agent flows',
        'Safety guardrails and validation',
        'Human-in-the-loop approval',
        'Deterministic workflow orchestration',
        'Temporal and Camunda integration patterns',
        'Audit trails and compliance reporting',
        'Cost visibility and token governance',
        'Cloud, hybrid or private deployment',
        'Kubernetes-based platform delivery',
        'Observability, logging, metrics and tracing',
      ],
    },
    {
      type: 'cards',
      title: 'Why Sunesis for AgenticAI',
      columns: 2,
      variant: 'check',
      items: [
        {
          title: 'We build real enterprise systems',
          text: 'We understand complex business environments, legacy systems, integrations, security requirements and operational constraints.',
        },
        {
          title: 'We combine AI with software engineering',
          text: 'We pair AI engineering with backend and frontend development, integrations, cloud-native architecture and DevOps.',
        },
        {
          title: 'We bring our own platform',
          text: 'KumuluzAI is a reusable AgenticAI platform that accelerates delivery and avoids fragmented AI initiatives.',
        },
        {
          title: 'We design for governance and compliance',
          text: 'Identity, authorization, auditability, human oversight, data control and policy-based execution from the beginning.',
        },
        {
          title: 'We connect agents with real business capabilities',
          text: 'Through APIs, Business APIs, connectors and workflows, agents support actual business operations — not only answers.',
        },
        {
          title: 'We know where AI should stop and workflows execute',
          text: 'AI assists, reasons and prepares context, while deterministic engines execute business-critical steps.',
        },
        {
          title: 'We help redesign work around digital agent teams',
          text: 'We can help organizations move beyond individual assistants toward digital agent teams and agentic operating models for selected operational areas.',
        },
        {
          title: 'We work in regulated and complex industries',
          text: 'Banking, insurance, energy, public sector and enterprise environments where reliability and traceability matter.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'AgenticAI in practice',
      intro:
        'We are already applying AgenticAI concepts in enterprise environments, helping organizations move from experimentation to practical business value.',
      columns: 2,
      variant: 'feature',
      cta: 'Explore our references',
      ctaHref: 'references/',
      items: [
        {
          label: 'Reference',
          title: 'RikoAI',
          text: 'An AgenticAI solution supporting intelligent assistance, knowledge-driven automation and business process optimization, combining enterprise knowledge, AI assistants and controlled integrations.',
        },
        {
          label: 'Reference',
          title: 'AgenticAI Platform — Zavarovalniška skupina Sava',
          text: 'An enterprise AgenticAI platform enabling intelligent process automation, secure use of organizational knowledge and integration with business systems through governed knowledge access, tool use and API integrations.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Related Kumuluz platforms',
      intro:
        'AgenticAI solutions often combine multiple Kumuluz products depending on the use case, integration needs and governance model.',
      columns: 4,
      variant: 'compact',
      items: [
        {
          title: 'KumuluzAI Platform',
          text: 'Core platform for agents, assistants, RAG, tool use, model routing, approvals, auditability and governance.',
        },
        {
          title: 'Kumuluz API',
          text: 'API management and gateway platform for exposing, securing, monitoring and governing APIs used by applications, partners and AI agents.',
        },
        {
          title: 'Kumuluz Business APIs',
          text: 'Reusable business capabilities that can be used by AI agents, digital products and deterministic workflows.',
        },
        {
          title: 'Kumuluz Digital Platform',
          text: 'Engineering foundation for building services, APIs, connectors, MCP-enabled tools and workflow-ready integrations.',
        },
      ],
    },
    {
      type: 'finalCta',
      title: 'Ready to move from AI experiments to enterprise AgenticAI?',
      body: [
        'If your organization is exploring how AI agents can automate workflows, connect to business systems and improve operational efficiency, Sunesis can help you design, build and operate a secure, governed and production-ready solution.',
        'Start with one focused use case and evolve toward a reusable AgenticAI platform foundation — or toward broader agentic operations where digital agent teams support complete business processes.',
      ],
      primaryCta: 'Talk to our AI experts',
      secondaryCta: 'Contact us',
    },
  ],
}

const sl: ExpertisePageContent = {
  seo: {
    title: 'AgenticAI rešitve za avtomatizacijo poslovnih workflowov | Sunesis',
    description:
      'Sunesis načrtuje in gradi nadzorovane AgenticAI rešitve, AI agente in digitalne agentne ekipe, ki avtomatizirajo poslovne workflowe z znanjem, API-ji, orodji in KumuluzAI.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'AgenticAI rešitve',
    title: 'Od AI eksperimentov do nadzorovanih agentnih operacij',
    body: [
      'Sunesis načrtuje in gradi enterprise AgenticAI rešitve, ki presegajo pogovor — organizacijam pomagajo avtomatizirati celotne workflowe, podpirati zaposlene in stranke, povezati znanje s poslovnimi sistemi ter varno upravljati AI v produkciji.',
      'Naše AgenticAI rešitve združujejo AI agente, enterprise AI asistente, digitalne agentne ekipe, RAG, uporabo orodij, API-je, Business API-je, deterministične workflowe, človeške odobritve, revizijsko sled in produkcijsko upravljanje.',
      'Organizacijam pomagamo preseči izolirane asistente z načrtovanjem AI agentov in digitalnih agentnih ekip, ki lahko usklajujejo naloge med sistemi, avtomatizirajo procese od začetka do konca in vključijo ljudi tam, kjer so potrebni presoja, odobritev ali odgovornost.',
      'Večino projektov pospeši KumuluzAI, naša nadzorovana AgenticAI platforma za varne, integrirane in produkcijsko pripravljene AI agente, asistente in agentno avtomatizacijo procesov.',
    ],
    primaryCta: 'Pogovorite se z našimi AI strokovnjaki',
    secondaryCta: 'Raziščite naše ekspertize',
    trustLine:
      'Zgrajeno za organizacije, ki potrebujejo varen, integriran in nadzorovan AI — ne le še en izoliran chatbot.',
  },
  sections: [
    {
      type: 'split',
      title: 'Od AI eksperimentov do nadzorovane agentne avtomatizacije',
      body: [
        'Mnoge organizacije začnejo svojo AI pot s chatboti, iskanjem po dokumentih ali izoliranimi asistenti. Ti so lahko koristni, a pogosto postanejo nepovezane pobude — vsaka s svojim modelom, pozivi, bazo znanja, integracijami, pravicami, nadzorom, stroškovno strukturo in tveganji skladnosti.',
        'Sunesis podjetjem pomaga narediti naslednji korak: graditi AgenticAI rešitve, ki so vključene v resnične poslovne procese in upravljane preko skupnega, varnega in nadzorovanega temelja.',
        'Načrtujemo AI agente in asistente, ki razumejo kontekst, dostopajo do odobrenega znanja, uporabljajo orodja, kličejo API-je, delajo z Business API-ji, sodelujejo v workflowih, po potrebi vključijo človeka in podpirajo večstopenjske poslovne procese — z vgrajenim upravljanjem, sledljivostjo in nadzorom od začetka.',
        'Za izbrana operativna področja lahko organizacijam pomagamo tudi pri prehodu k agentnim operativnim modelom, kjer specializirani AI agenti opravljajo večino rutinskega, znanjsko intenzivnega in usklajevalnega dela, medtem ko ljudje nadzirajo, odobravajo občutljiva dejanja, obravnavajo izjeme in ostajajo odgovorni za rezultate.',
      ],
      quote:
        'AgenticAI ni le odgovarjanje na vprašanja. Gre za povezovanje AI sklepanja z znanjem, orodji, API-ji, workflowi in poslovno izvedbo — pod nadzorom.',
    },
    {
      type: 'prose',
      title: 'AgenticAI ni le še en chatbot',
      body: [
        'Chatbot odgovarja na vprašanja. Enterprise AgenticAI rešitev pomaga opraviti delo. AgenticAI sistemi lahko sklepajo o nalogi, načrtujejo korake, pridobivajo znanje, uporabljajo odobrena orodja, komunicirajo s sistemi in podpirajo izvedbo poslovnih procesov.',
        'V enterprise okoljih to zahteva veliko več kot dostop do jezikovnega modela. Zahteva identiteto, avtorizacijo, revizijsko sled, varnostne ograje, integracijsko arhitekturo, nadzor stroškov, upravljanje modelov, človeški nadzor, deterministične meje izvajanja in zanesljivo delovanje.',
        'Tukaj Sunesis združuje AI inženirstvo, razvoj enterprise programske opreme, cloud-native arhitekturo, integracijo API-jev, DevOps in lastno platformo KumuluzAI.',
      ],
    },
    {
      type: 'compare',
      title: 'Od izoliranega asistenta do enterprise AgenticAI',
      columns: [
        {
          title: 'Izoliran AI asistent',
          bullets: [
            'Odgovarja na vprašanja in išče po dokumentih',
            'Deluje v ozkem kontekstu',
            'Ima omejeno integracijo s poslovnimi sistemi',
            'Pogosto uporablja ločeno varnost, beleženje in nadzor stroškov',
            'Težko ga je nadzorovati, ko vsaka ekipa gradi svojega',
            'Običajno ostane ločen od workflowov in izvedbe',
            'Pomaga posameznim uporabnikom, a redko preoblikuje operativni model',
          ],
        },
        {
          title: 'Enterprise AgenticAI rešitev',
          bullets: [
            'Podpira ali avtomatizira poslovne procese',
            'Uporablja enterprise znanje in odobrena orodja',
            'Povezuje se z API-ji, Business API-ji, workflowi in backendi',
            'Deluje pod politikami identitete, avtorizacije in nadzora',
            'Vključuje revizijske sledi, človeški nadzor in varnostne kontrole',
            'Loči AI sklepanje od deterministične izvedbe procesov',
            'Se lahko razvije v digitalne agentne ekipe in agentne operativne modele',
          ],
        },
      ],
    },
    {
      type: 'split',
      title: 'Od AI asistentov do agentnih operativnih modelov',
      body: [
        'Mnoge organizacije začnejo z AI asistenti, ki odgovarjajo na vprašanja ali pomagajo uporabnikom najti informacije. To je koristen prvi korak, a prava vrednost AgenticAI se pokaže, ko lahko AI agenti prevzamejo odgovornost za celotne workflowe.',
        'Sunesis organizacijam pomaga načrtovati agentne operativne modele, kjer specializirani AI agenti sodelujejo kot nadzorovana digitalna delovna sila. Agenti lahko sprejemajo zahteve, pridobivajo znanje, klasificirajo primere, validirajo informacije, kličejo API-je, uporabljajo Business API-je, pripravljajo odločitve, sprožajo workflowe, zahtevajo odobritve in spremljajo napredek procesov.',
        'To ne pomeni odvzemanja odgovornosti ljudem. Pomeni preoblikovanje dela, tako da AI agenti opravljajo ponavljajoče se, znanjsko intenzivne in usklajevalne naloge, medtem ko se ljudje osredotočajo na nadzor, obravnavo izjem, strokovno presojo, upravljanje odnosov in končno odgovornost.',
        'S KumuluzAI, Kumuluz API, Business API-ji in workflow pogoni, kot sta Temporal ali Camunda, lahko Sunesis organizacijam pomaga pri prehodu od izoliranih asistentov k AI-native oddelkom, procesnim operacijam in digitalnim agentnim ekipam.',
      ],
      quote:
        'Sunesis organizacijam pomaga graditi AI-native operativne modele, kjer AI agenti delujejo kot nadzorovana digitalna delovna sila za celotne workflowe — ne le kot asistenti za posamezne naloge.',
    },
    {
      type: 'cards',
      title: 'Kako delujejo agentni operativni modeli',
      columns: 3,
      variant: 'accent',
      items: [
        {
          title: 'Digitalne agentne ekipe',
          text: 'Več specializiranih agentov sodeluje skozi proces, vsak je odgovoren za določeno vlogo, kot so sprejem, klasifikacija, validacija, pridobivanje znanja, podpora odločanju, priprava odobritev ali podpora izvedbi.',
        },
        {
          title: 'Avtomatizacija workflowov od začetka do konca',
          text: 'Avtomatiziramo celotne workflowe, kjer agenti usklajujejo naloge, uporabljajo poslovne sisteme, pripravljajo izhode in sprožajo deterministične korake workflowa.',
        },
        {
          title: 'AI-native oddelki',
          text: 'Za izbrana operativna področja pomagamo preoblikovati oddelke ali poslovne funkcije okoli AI agentov, Business API-jev, workflowov in človeškega nadzora.',
        },
        {
          title: 'Človeški nadzor po zasnovi',
          text: 'Ljudje ostanejo v nadzoru tam, kjer presoja, odgovornost, tveganje, odnos s stranko ali regulativne zahteve terjajo človeško vključenost.',
        },
        {
          title: 'Avtonomne rutinske operacije',
          text: 'Agenti lahko opravljajo ponavljajoče se, na pravilih temelječe, dokumentno ali usklajevalno intenzivno delo z minimalnim človeškim posegom.',
        },
        {
          title: 'Model dela na podlagi izjem',
          text: 'Ljudje se lahko premaknejo od ročne obdelave k obravnavi izjem, nadzoru, strokovnim odločitvam in nenehnemu izboljševanju procesov.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'Kaj gradimo',
      intro:
        'Gradimo AgenticAI rešitve za organizacije, ki želijo avtomatizirati znanjsko intenzivno, dokumentno in procesno delo — brez izgube nadzora nad varnostjo, skladnostjo ali arhitekturo.',
      items: [
        {
          icon: Bot,
          wide: true,
          title: 'AI agenti za avtomatizacijo poslovnih procesov',
          text: 'Agenti, ki zberejo kontekst, pridobijo znanje, validirajo izhode in sprožijo odobrena dejanja skozi večstopenjske workflowe.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Obravnava zahtev strank',
            'Zavarovalniški in finančni workflowi',
            'Podpora KYC in skladnosti',
            'Priprava škod in primerov',
            'Interna podpora in backend procesi',
          ],
        },
        {
          icon: MessageSquare,
          title: 'Enterprise AI asistenti',
          text: 'Asistenti za stranke, zaposlene in portale — s potjo razvoja v širše AgenticAI platforme.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Asistenti za podporo strankam',
            'Asistenti za pomoč zaposlenim',
            'Interni znanjski asistenti',
            'Portalni in navigacijski asistenti',
            'Asistenti za politike in postopke',
          ],
        },
        {
          icon: Network,
          title: 'Digitalne agentne ekipe in večagentni workflowi',
          text: 'Specializirani agenti, ki sodelujejo, si delijo kontekst in opravljajo različne vloge znotraj nadzorovanega procesa — od enkratnih asistentov k ponovno uporabnim vzorcem avtomatizacije in digitalnim agentnim ekipam.',
          bulletsTitle: 'Primeri vlog agentov',
          bullets: [
            'Agenti za sprejem in klasifikacijo',
            'Agenti za pridobivanje znanja in validacijo',
            'Agenti za podporo odločanju in pripravo odobritev',
            'Agenti za podporo izvedbi',
            'Agenti za nadzor, eskalacijo in izboljševanje procesov',
          ],
        },
        {
          icon: Database,
          title: 'Integracija enterprise znanja in RAG',
          text: 'Agente povezujemo z odobrenimi dokumenti, politikami, bazami znanja in podatki, da delujejo na nadzorovanem internem znanju.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Pridobivanje iz enterprise virov znanja',
            'Zajem, indeksiranje in semantično iskanje',
            'Retrieval-augmented generation z navedbo virov',
            'Spremljanje svežine znanja',
            'Pridobivanje glede na uporabnika, vlogo ali kontekst',
          ],
        },
        {
          icon: Plug,
          title: 'Uporaba orodij, API-ji in MCP integracija',
          text: 'Agenti kličejo odobrene zmožnosti preko nadzorovanih vmesnikov namesto neposredno do backend sistemov, z MCP integracijo, kjer je primerno.',
          bulletsTitle: 'Področja integracije',
          bullets: [
            'Interni API-ji in Kumuluz API',
            'Business API-ji',
            'MCP orodja',
            'Enterprise storitveni sloji in backend sistemi',
            'Dokumentni in workflow sistemi',
          ],
        },
        {
          icon: Boxes,
          title: 'Business API-ji kot nadzorovana orodja agentov',
          text: 'Ponavljajoče se poslovne zmožnosti izpostavimo kot ponovno uporabne Business API-je — nadzorovan sloj med agenti in sistemi.',
          bulletsTitle: 'Primeri orodij Business API',
          bullets: [
            'Iskanje strank, polic ali računov',
            'Status naročila ali zahteve',
            'Status KYC in ustvarjanje primerov',
            'Oddaja dokumentov in obvestila',
            'Zahteve za odobritev in zagon workflowa',
          ],
        },
        {
          icon: Workflow,
          wide: true,
          title: 'Integracija determinističnih workflowov',
          text: 'Agenti pripravijo kontekst in priporočijo korake, pogoni kot Temporal ali Camunda pa nadzorovano izvedejo procesno kritične korake.',
          bulletsTitle: 'Tipični vzorci workflowov',
          bullets: [
            'Agent pripravi primer, workflow izvede proces',
            'Agent pridobi kontekst, workflow obravnava odobritve',
            'Agent klasificira zahtevo, workflow jo usmeri',
            'Business API-ji delujejo kot aktivnosti workflowa',
          ],
        },
        {
          icon: UserCheck,
          title: 'Človek v zanki (human-in-the-loop)',
          text: 'Pri visoko tveganih dejanjih uporabniki pregledajo, potrdijo ali zavrnejo predlog agenta pred izvedbo.',
          bulletsTitle: 'Primeri',
          bullets: [
            'Odobritev pred spremembo poslovnih podatkov',
            'Pregled pred pošiljanjem uradne komunikacije',
            'Načelo štirih oči za občutljiva dejanja',
            'Eskalacija k strokovnjaku ob nizki zanesljivosti',
          ],
        },
        {
          icon: ShieldCheck,
          title: 'Upravljanje, revizija in skladnost',
          text: 'Dnevniki, sledi odločitev in politike dostopa kažejo, kaj se je zgodilo, kdo je sprožil in katera orodja so bila uporabljena — v podporo DORA, EU AI Act in GDPR.',
          bulletsTitle: 'Področja upravljanja',
          bullets: [
            'Identiteta in dostop na podlagi vlog',
            'Avtorizacija orodij in nadzor virov znanja',
            'Upravljanje pozivov in politik',
            'Beleženje sej in revizijske sledi klicev orodij',
            'Vidnost porabe žetonov in modelov',
          ],
        },
        {
          icon: ServerCog,
          title: 'Produkcijsko pripravljena AI arhitektura',
          text: 'Organizacije popeljemo od prototipov do produkcije: namestitev, varnost, nadzor, stroški, usmerjanje modelov in upravljanje življenjskega cikla.',
          bulletsTitle: 'Arhitekturni vidiki',
          bullets: [
            'Oblak, hibridna ali zasebna namestitev',
            'Dostava platforme na Kubernetes',
            'Integracija enterprise identitete',
            'Opazljivost in usmerjanje modelov',
            'Varnostne ograje in upravljanje življenjskega cikla',
          ],
        },
      ],
    },
    {
      type: 'steps',
      title: 'Model zrelosti AgenticAI',
      numbered: true,
      variant: 'cards',
      intro:
        'Organizacijam ni treba postati AI-native čez noč. Večina začne z osredotočenim asistentom ali primerom uporabe in se postopoma razvija — od AI asistentov k agentom z orodji, z workflowi povezanim agentom, digitalnim agentnim ekipam in AI-native operativnim modelom.',
      items: [
        {
          title: 'AI asistent',
          text: 'AI pomaga uporabnikom z odgovarjanjem na vprašanja, razlago postopkov in iskanjem informacij. Rezultat: boljša samopostrežba, hitrejši dostop do znanja in manjša obremenitev podpore.',
        },
        {
          title: 'Agent z orodji',
          text: 'AI agenti uporabljajo odobrena orodja in API-je za pridobivanje podatkov, preverjanje statusov ali enostavna dejanja. Rezultat: uporabnejši asistenti, ki lahko nadzorovano komunicirajo z enterprise sistemi.',
        },
        {
          title: 'Z workflowi povezan agent',
          text: 'Agenti sodelujejo v poslovnih workflowih, kjer se kritični koraki izvajajo prek determinističnih workflow pogonov in Business API-jev. Rezultat: AI podpira resnično izvedbo procesov ob ohranjanju zanesljivosti, revizije in človeških odobritev.',
        },
        {
          title: 'Digitalna agentna ekipa',
          text: 'Več specializiranih agentov sodeluje skozi proces od začetka do konca, vsak z določeno vlogo in obsegom. Rezultat: kompleksne workflowe lahko usklajujejo digitalne agentne ekipe namesto enega samega asistenta.',
        },
        {
          title: 'AI-native operativni model',
          text: 'Izbrane operativne funkcije ali oddelki so preoblikovani okoli AI agentov, Business API-jev, workflowov, upravljanja in človeškega nadzora. Rezultat: rutinsko delo opravljajo predvsem agenti, ljudje pa se osredotočajo na nadzor, izjeme, strokovno presojo in odgovornost.',
        },
      ],
    },
    {
      type: 'kumuluz',
      title: 'Poganja KumuluzAI — naša AgenticAI platforma',
      body: [
        'Večina enterprise AgenticAI projektov potrebuje več kot agenta po meri. Potrebujejo skupno platformo, da se agenti, asistenti in AI aplikacije razvijajo, upravljajo in nadzorujejo dosledno po vsej organizaciji.',
        'KumuluzAI zagotavlja temelj za izvajalno okolje agentov, orkestracijo, dostop do znanja, integracijo orodij, propagacijo identitete, varnostne ograje, usmerjanje modelov, revizijo, nadzor stroškov in centralno upravljanje — ter pomaga preprečiti razdrobljene AI silose.',
      ],
      items: [
        {
          label: 'Temelj',
          title: 'Ena enterprise platforma',
          text: 'Agenti, asistenti in AI aplikacije tečejo na skupni platformi namesto da vsaka ekipa gradi svoj izoliran sklad.',
        },
        {
          label: 'Namestitev',
          title: 'Single-tenant namestitev',
          text: 'KumuluzAI je mogoče namestiti v okolju stranke, kar podpira lokalno hrambo podatkov, izolacijo in enterprise nadzor.',
        },
        {
          label: 'Modeli',
          title: 'Hibridno usmerjanje modelov',
          text: 'Občutljivi podatki lahko ostanejo znotraj perimetra, manj občutljivi pa uporabljajo zunanje ponudnike preko nadzorovanega prehoda.',
        },
        {
          label: 'Nevtralnost',
          title: 'Arhitektura, neodvisna od ponudnika',
          text: 'Platforma abstrahira ponudnike modelov in pomaga preprečiti vklenjenost ter ohraniti izhodno strategijo.',
        },
        {
          label: 'Upravljanje',
          title: 'Upravljanje že v zasnovi',
          text: 'Politike, identiteta, avtorizacija, revizijske sledi, odobritve in varnostne kontrole so del platforme, ne naknadni dodatek.',
        },
        {
          label: 'Konzola',
          title: 'Centralna upravljalska konzola',
          text: 'Agenti, orodja, viri znanja, politike, pozivi, stroški, revizijske sledi in odobritve se upravljajo z enega mesta.',
        },
      ],
      cta: 'Raziščite KumuluzAI platformo',
      ctaHref: 'https://kumuluz.com',
    },
    {
      type: 'prose',
      title: 'Ne dovolite, da AI postane še en enterprise silos',
      body: [
        'Brez platformne strategije se AI pobude hitro razdrobijo. En oddelek zgradi chatbot. Drugi poveže model z internimi dokumenti. Tretji uvede asistenta preko zunanjega ponudnika. Vsak ima svojo bazo znanja, pravice, nadzor, ponudnika modela, stroške in zgodbo o skladnosti.',
        'Platformni pristop to spremeni. AI agente lahko razvijajo različne ekipe ali partnerji, a tečejo na istem temelju, sledijo istim pravilom upravljanja, uporabljajo skupne storitve in ostanejo vidni organizaciji.',
      ],
    },
    {
      type: 'table',
      title: 'Izolirane AI pobude v primerjavi s platformnim AgenticAI',
      columns: ['Področje', 'Izolirane AI pobude', 'Platformni AgenticAI'],
      rows: [
        ['Upravljanje', 'Različno za vsako rešitev', 'Poenoteno za vse agente'],
        [
          'Identiteta in dostop',
          'Implementirano ločeno',
          'Propagirano skozi celoten tok agenta',
        ],
        [
          'Znanje',
          'Podvojeno in neskladno',
          'Skupno, nadzorovano in sledljivo',
        ],
        [
          'Orodja in API-ji',
          'Znova zgrajeno za vsak primer',
          'Ponovno uporabna orodja in API-ji',
        ],
        [
          'Stroški',
          'Težko pripisljivi in nadzorljivi',
          'Centralno spremljani in načrtovani',
        ],
        ['Skladnost', 'Dokazana vsakič znova', 'Vgrajena v platformo'],
        [
          'Workflowi',
          'Pogosto nepovezani',
          'Integrirani z deterministično izvedbo',
        ],
        [
          'Skalabilnost',
          'Raste v kompleksnost',
          'Zasnovana za enterprise ponovno uporabo',
        ],
      ],
    },
    {
      type: 'cards',
      title: 'Zasnovano za varno in nadzorovano izvajanje',
      intro:
        'AgenticAI prinaša nova tveganja, ker agenti uporabljajo orodja, kličejo sisteme in izvajajo dejanja. Sunesis že od začetka v arhitekturo vgradi jasne meje — kaj agent lahko bere, kaj lahko počne, kdaj potrebuje odobritev in kako je vsako dejanje zabeleženo.',
      columns: 2,
      variant: 'check',
      items: [
        {
          title: 'Propagacija identitete',
          text: 'Vsako dejanje agenta teče v kontekstu znanega uporabnika, vloge ali sistemske identitete, kar omogoča dosleden nadzor dostopa.',
        },
        {
          title: 'Dostop do znanja glede na pravice',
          text: 'Agenti pridobivajo informacije le iz odobrenih virov in skladno z vlogo, kontekstom in pravicami uporabnika.',
        },
        {
          title: 'Avtorizacija na ravni orodij',
          text: 'Agenti lahko uporabljajo le orodja in dejanja, ki so jim izrecno dovoljena, glede na politike in kontekst naloge.',
        },
        {
          title: 'Nadzor dejanj zapisovanja',
          text: 'Dejanja, ki spremenijo podatke ali sprožijo poslovne učinke, lahko pred izvedbo zahtevajo dodatno odobritev in kratkotrajno avtorizacijo.',
        },
        {
          title: 'Workflowi za človeško odobritev',
          text: 'Visoko tvegana ali občutljiva dejanja se lahko usmerijo k človeškim pregledovalcem z jasnim kontekstom in sledljivostjo.',
        },
        {
          title: 'Ograje in validacija',
          text: 'Rešitev lahko zazna nevarne pozive, zaščiti občutljive podatke, validira izhode in zmanjša tveganje zlorabe.',
        },
        {
          title: 'Nadzor prehoda in API-jev',
          text: 'Zahteve agentov je mogoče usmerjati skozi API sloje, kjer se uveljavljajo avtentikacija, politike, nadzor in beleženje.',
        },
        {
          title: 'Revizijske sledi in rekonstrukcija sej',
          text: 'Odločitve agentov, pridobivanje znanja, klici orodij, interakcije z modeli in odobritve se lahko sledijo in rekonstruirajo.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Kje AgenticAI ustvarja vrednost',
      intro:
        'AgenticAI je še posebej koristen tam, kjer je delo odvisno od kompleksnih procesov, razpršenega znanja, dokumentov, odobritev in več enterprise sistemov.',
      columns: 3,
      variant: 'tag',
      items: [
        {
          title: 'Avtomatizacija zavarovalniških procesov',
          text: 'Obravnava škod, polični workflowi, zahteve strank, pridobivanje znanja in dokumentno intenzivni procesi.',
          meta: 'AgenticAI, znanje, avtomatizacija workflowov, človeška odobritev, revizija',
        },
        {
          title: 'Bančni in skladnostni workflowi',
          text: 'KYC, onboarding strank, preverjanja skladnosti, svetovalni procesi in znanjsko intenzivne bančne operacije.',
          meta: 'Varen dostop do znanja, integracija API-jev, človek v zanki, regulirani workflowi',
        },
        {
          title: 'Enterprise znanje in podpora zaposlenim',
          text: 'Pomoč zaposlenim pri iskanju odgovorov, razumevanju postopkov, pripravi dokumentov in dostopu do odobrenega znanja.',
          meta: 'Pridobivanje znanja, semantično iskanje, dostop glede na pravice, upravljanje',
        },
        {
          title: 'Avtomatizacija backend procesov',
          text: 'Zmanjšanje ročnega dela v ponavljajočih se administrativnih in podpornih procesih med dokumenti, sistemi in ljudmi.',
          meta: 'Orkestracija workflowov, validacija, integracija, eskalacija, Business API-ji',
        },
        {
          title: 'Digitalne storitve za stranke',
          text: 'AI agenti, vgrajeni v splet, mobilne in druge kanale, ki vodijo uporabnike, zbirajo informacije in izvajajo korake procesa.',
          meta: 'Digitalni kanali, varna izvedba, personalizacija, predaja človeku',
        },
        {
          title: 'AI-podprta avtomatizacija workflowov',
          text: 'Agenti pripravijo kontekst, klasificirajo zahteve, povzamejo dokumente ali priporočijo dejanja, workflow pogoni pa deterministično izvedejo poslovno kritične korake.',
          meta: 'Temporal, Camunda, Business API-ji, odobritve, ponovni poskusi, revizijske sledi',
        },
        {
          title: 'Regulirane enterprise AI platforme',
          text: 'KumuluzAI kot skupni temelj za več asistentov, agentov in aplikacij med oddelki pod centralnim nadzorom.',
          meta: 'Ena platforma, skupno upravljanje, usmerjanje modelov, nadzor stroškov',
        },
        {
          title: 'AI-native oddelki in operativne funkcije',
          text: 'AI agenti opravljajo večino rutinskega dela, usklajevanja in priprave odločitev, medtem ko ljudje nadzirajo, odobravajo občutljive korake, obravnavajo izjeme in ostajajo odgovorni za rezultate.',
          meta: 'Digitalne agentne ekipe, agentni operativni modeli, Business API-ji, človeški nadzor, upravljanje',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Referenčna arhitektura za enterprise AgenticAI',
      body: [
        'Produkcijska AgenticAI rešitev loči AI sklepanje, pridobivanje znanja, uporabo orodij, izvedbo workflowov in backend operacije v jasne sloje — varnejša in bolj vzdržljiva arhitektura kot neposredno povezovanje agentov z backend sistemi.',
      ],
      columns: 3,
      variant: 'numbered',
      items: [
        {
          title: 'Uporabniški kanali',
          text: 'Spletne aplikacije, portali za stranke in zaposlene, mobilne aplikacije, intraneti, podporne službe in interne aplikacije.',
        },
        {
          title: 'Sloj agentov KumuluzAI',
          text: 'AI agenti, asistenti, pozivi, politike, usmerjanje modelov, pridobivanje znanja, ograje, odobritve in revizija.',
        },
        {
          title: 'Sloj znanja',
          text: 'Odobreni dokumenti, politike, postopki, baze znanja, intranet, strukturirani podatki in pridobivanje z navedbo virov.',
        },
        {
          title: 'Sloj orodij in API-jev',
          text: 'Agentom dostopni API-ji, MCP orodja, Business API-ji, konektorji in odobrena sistemska dejanja.',
        },
        {
          title: 'Sloj upravljanja API-jev',
          text: 'Katalog API-jev, prehod, nadzor dostopa, usmerjanje, spremljanje in politike preko platform kot Kumuluz API.',
        },
        {
          title: 'Sloj orkestracije workflowov',
          text: 'Temporal, Camunda ali podobne platforme za deterministično izvedbo, odobritve, ponovne poskuse in dolgotrajne workflowe.',
        },
        {
          title: 'Enterprise sistemi',
          text: 'CRM, ERP, jedrni bančni, zavarovalniški, dokumentni sistemi in sistemi za upravljanje primerov, baze in zunanje storitve.',
        },
        {
          title: 'Upravljanje in opazljivost',
          text: 'Revizijske sledi, dnevniki sej, zapisi klicev orodij, analitika porabe, vidnost stroškov in poročanje o skladnosti.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'Kako dostavljamo AgenticAI rešitve',
      intro:
        'Organizacijam pomagamo od poslovne priložnosti do produkcijsko pripravljenega AgenticAI s strukturiranim, pragmatičnim in inženirsko vodenim pristopom.',
      items: [
        {
          title: 'Prepoznava primerov z visoko vrednostjo',
          text: 'S poslovnimi in tehnološkimi deležniki poiščemo procese, kjer AgenticAI ustvari merljivo vrednost.',
        },
        {
          title: 'Opredelitev platforme in modela upravljanja',
          text: 'Določimo, kako se agenti upravljajo, do katerega znanja in sistemov dostopajo, katera orodja so odobrena ter kako delujejo odobritve, revizija in skladnost.',
        },
        {
          title: 'Načrtovanje agentnega workflowa',
          text: 'Modeliramo agente, orodja, pozive, pridobivanje znanja, odločitvene točke, človeške odobritve in meje determinističnih workflowov.',
        },
        {
          title: 'Izgradnja osredotočenega MVP-ja',
          text: 'Razvijemo nadzorovan MVP, ki potrdi vrednost, izvedljivost, upravljanje in uporabniško izkušnjo pred širjenjem.',
        },
        {
          title: 'Integracija z enterprise sistemi',
          text: 'Rešitev povežemo z internimi API-ji, ponudniki identitete, repozitoriji dokumentov, viri podatkov in workflow sistemi.',
        },
        {
          title: 'Dodajanje upravljanja, varnosti in opazljivosti',
          text: 'Vzpostavimo revizijske sledi, politike dostopa, varnostne ograje, mehanizme odobritve, nadzor in vidnost stroškov.',
        },
        {
          title: 'Namestitev, delovanje in izboljšave',
          text: 'Podpiramo namestitev, DevOps, produkcijski nadzor, optimizacijo in nenehno izboljševanje.',
        },
        {
          title: 'Razširitev v platformo',
          text: 'Ko prvi primeri dokažejo vrednost, se na isti temelj dodajo novi agenti, viri znanja, orodja, API-ji in workflowi.',
        },
        {
          title: 'Razvoj k agentnim operacijam',
          text: 'Za izbrana področja organizacijam pomagamo preoblikovati operativne modele okoli digitalnih agentnih ekip, Business API-jev, workflowov, upravljanja in človeškega nadzora.',
        },
      ],
    },
    {
      type: 'list',
      title: 'Zgrajeno na enterprise arhitekturi, ne na AI hype',
      body: [
        'AgenticAI zahteva več kot inženiring pozivov. Potrebuje robustno arhitekturo, varno integracijo, zanesljivo orkestracijo, upravljanje identitete, opazljivost, DevOps in operativno disciplino.',
        'Sunesis združuje AI inženirstvo z močnim znanjem backend sistemov, API-jev, dogodkovnih arhitektur, cloud-native platform, Kubernetesa in DevOps.',
      ],
      items: [
        'Izvajalno okolje in orkestracija agentov',
        'Digitalne agentne ekipe in večagentni workflowi',
        'Enterprise znanje in RAG cevovodi',
        'Integracija orodij in API-jev',
        'MCP izpostavitev orodij',
        'Business API-ji in ponovno uporabne zmožnosti',
        'Usmerjanje modelov in abstrakcija ponudnikov',
        'Identiteta in avtorizacija skozi tokove agentov',
        'Varnostne ograje in validacija',
        'Človeška odobritev (human-in-the-loop)',
        'Orkestracija determinističnih workflowov',
        'Vzorci integracije Temporal in Camunda',
        'Revizijske sledi in poročanje o skladnosti',
        'Vidnost stroškov in upravljanje žetonov',
        'Oblak, hibridna ali zasebna namestitev',
        'Dostava platforme na Kubernetes',
        'Opazljivost, beleženje, metrike in sledenje',
      ],
    },
    {
      type: 'cards',
      title: 'Zakaj Sunesis za AgenticAI',
      columns: 2,
      variant: 'check',
      items: [
        {
          title: 'Gradimo resnične enterprise sisteme',
          text: 'Razumemo kompleksna poslovna okolja, zapuščinske sisteme, integracije, varnostne zahteve in operativne omejitve.',
        },
        {
          title: 'AI združujemo s programskim inženirstvom',
          text: 'AI inženirstvo združujemo z backend in frontend razvojem, integracijami, cloud-native arhitekturo in DevOps.',
        },
        {
          title: 'Prinašamo lastno platformo',
          text: 'KumuluzAI je ponovno uporabna AgenticAI platforma, ki pospeši dostavo in prepreči razdrobljene pobude.',
        },
        {
          title: 'Načrtujemo za upravljanje in skladnost',
          text: 'Identiteta, avtorizacija, revizija, človeški nadzor, nadzor podatkov in politike že od začetka.',
        },
        {
          title: 'Agente povežemo z resničnimi zmožnostmi',
          text: 'Preko API-jev, Business API-jev, konektorjev in workflowov agenti podpirajo dejanske poslovne operacije.',
        },
        {
          title: 'Vemo, kje naj AI preneha in workflow izvede',
          text: 'AI pomaga, sklepa in pripravi kontekst, deterministični pogoni pa izvedejo poslovno kritične korake.',
        },
        {
          title: 'Pomagamo preoblikovati delo okoli digitalnih agentnih ekip',
          text: 'Organizacijam lahko pomagamo preseči posamezne asistente in se usmeriti k digitalnim agentnim ekipam ter agentnim operativnim modelom za izbrana operativna področja.',
        },
        {
          title: 'Delujemo v reguliranih in kompleksnih panogah',
          text: 'Bančništvo, zavarovalništvo, energetika, javni sektor in enterprise okolja, kjer štejeta zanesljivost in sledljivost.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'AgenticAI v praksi',
      intro:
        'AgenticAI koncepte že uporabljamo v enterprise okoljih in organizacijam pomagamo od eksperimentiranja do praktične poslovne vrednosti.',
      columns: 2,
      variant: 'feature',
      cta: 'Oglejte si reference',
      ctaHref: 'references/',
      items: [
        {
          label: 'Referenca',
          title: 'RikoAI',
          text: 'AgenticAI rešitev za inteligentno pomoč, znanjsko vodeno avtomatizacijo in optimizacijo procesov, ki združuje enterprise znanje, AI asistente in nadzorovane integracije.',
        },
        {
          label: 'Referenca',
          title: 'AgenticAI platforma — Zavarovalniška skupina Sava',
          text: 'Enterprise AgenticAI platforma za inteligentno avtomatizacijo procesov, varno uporabo znanja in integracijo s poslovnimi sistemi preko nadzorovanega dostopa, orodij in API-jev.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Povezane Kumuluz platforme',
      intro:
        'AgenticAI rešitve pogosto združujejo več Kumuluz produktov glede na primer uporabe, potrebe po integraciji in model upravljanja.',
      columns: 4,
      variant: 'compact',
      items: [
        {
          title: 'Platforma KumuluzAI',
          text: 'Jedrna platforma za agente, asistente, RAG, uporabo orodij, usmerjanje modelov, odobritve, revizijo in upravljanje.',
        },
        {
          title: 'Kumuluz API',
          text: 'Platforma za upravljanje in prehod API-jev za izpostavljanje, varovanje, nadzor in upravljanje API-jev.',
        },
        {
          title: 'Kumuluz Business API-ji',
          text: 'Ponovno uporabne poslovne zmožnosti za AI agente, digitalne produkte in deterministične workflowe.',
        },
        {
          title: 'Kumuluz Digital Platform',
          text: 'Inženirski temelj za gradnjo storitev, API-jev, konektorjev, MCP orodij in workflow integracij.',
        },
      ],
    },
    {
      type: 'finalCta',
      title:
        'Pripravljeni na prehod od AI eksperimentov do enterprise AgenticAI?',
      body: [
        'Če vaša organizacija raziskuje, kako lahko AI agenti avtomatizirajo workflowe, se povežejo s sistemi in izboljšajo učinkovitost, vam Sunesis pomaga načrtovati, zgraditi in upravljati varno, nadzorovano in produkcijsko pripravljeno rešitev.',
        'Začnite z enim osredotočenim primerom in se razvijte do ponovno uporabnega AgenticAI temelja — ali k širšim agentnim operacijam, kjer digitalne agentne ekipe podpirajo celotne poslovne procese.',
      ],
      primaryCta: 'Pogovorite se z našimi AI strokovnjaki',
      secondaryCta: 'Kontaktirajte nas',
    },
  ],
}

export const agenticAiPage: Record<LanguageCode, ExpertisePageContent> = {
  en,
  sl,
}
