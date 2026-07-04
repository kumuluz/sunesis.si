import type { LanguageCode } from '../../lib/router'
import type { ExpertisePageContent } from '../../views/expertise/types'

const en: ExpertisePageContent = {
  seo: {
    title:
      'API Ecosystems & Integrations | API Management, Business APIs and Enterprise Integration | Sunesis',
    description:
      'Sunesis designs and builds enterprise API ecosystems, API management platforms, Business APIs, partner integrations, event-driven architectures and AI-agent-ready API layers.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'API Ecosystems & Integrations',
    title:
      'Connect applications, partners, workflows and AI agents through governed APIs',
    body: [
      'Sunesis helps organizations design, build and govern API ecosystems that connect internal teams, digital platforms, partner systems, enterprise applications, workflow engines and AI agents, combining API architecture, API management, integration engineering, Business APIs, event-driven patterns and cloud-native delivery.',
      'We help organizations move from point-to-point integrations and fragmented APIs to governed API ecosystems that support digital products, partner collaboration, process automation and AgenticAI-ready architectures.',
    ],
    primaryCta: 'Talk to our API experts',
    secondaryCta: 'Explore our expertise',
    trustLine:
      'Built for organizations that need secure, reusable and governed APIs across complex enterprise environments.',
  },
  sections: [
    {
      type: 'split',
      title: 'APIs are the foundation of modern digital ecosystems',
      body: [
        'Organizations increasingly depend on APIs that connect web and mobile applications, internal platforms, partners, developers, workflow engines and AI agents. APIs are how systems, teams and businesses collaborate.',
        'But APIs create value only when they are designed, governed, documented, secured, monitored and reused. Without an API strategy, organizations end up with duplicated integrations, inconsistent contracts and unmanaged access.',
        'Sunesis helps organizations build reliable, secure and manageable API ecosystems — from strategy and architecture to implementation and operations.',
      ],
      quote:
        'Sunesis designs API ecosystems where APIs become reusable, governed digital capabilities — not just technical endpoints.',
    },
    {
      type: 'compare',
      title: 'From point-to-point integrations to reusable API ecosystems',
      intro:
        'Most enterprise landscapes accumulate one-off integrations over time. A governed API ecosystem replaces that complexity with reusable, managed and observable APIs.',
      columns: [
        {
          title: 'Point-to-point integration',
          bullets: [
            'Custom integrations per project',
            'Duplicated business logic',
            'Inconsistent security and access control',
            'Limited API visibility',
            'Manual partner onboarding',
            'Fragile dependencies',
            'Not suitable for governed AI-agent access',
          ],
        },
        {
          title: 'Governed API ecosystem',
          bullets: [
            'Reusable APIs and Business APIs',
            'Central API catalog and ownership',
            'API gateway and access policies',
            'Developer and partner onboarding',
            'Lifecycle management and versioning',
            'Usage visibility and monitoring',
            'APIs prepared for applications, workflows and AI agents',
          ],
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'What we build',
      intro:
        'We design and implement API ecosystems and integration architectures for organizations that need to connect complex systems, expose reusable capabilities and operate APIs securely at scale.',
      items: [
        {
          title: 'Enterprise API strategy and architecture',
          text: 'We help organizations define how APIs are designed, owned, versioned and governed, establishing an API-first foundation across teams and domains.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'API strategy',
            'API domain modeling',
            'API ownership models',
            'API-first architecture',
            'API lifecycle and versioning',
          ],
        },
        {
          title: 'API management platforms',
          wide: true,
          text: 'We deliver the platform capabilities that make APIs discoverable, consumable and manageable across internal teams, partners and external developers.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'API catalog',
            'Developer portal',
            'API gateway',
            'Access plans and subscriptions',
            'Usage analytics',
          ],
        },
        {
          title: 'API gateway and access control',
          wide: true,
          text: 'We implement the gateway layer that routes, secures and controls every API request, applying consistent policies across all consumers.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Request routing and transformation',
            'Authentication and authorization',
            'OAuth2 and OIDC integration',
            'Rate limiting and quotas',
            'Gateway-level security',
          ],
        },
        {
          title: 'Business APIs and reusable capabilities',
          text: 'We expose repeated business functionality as reusable Business APIs, creating a governed capability layer between consumers and backend systems.',
          bulletsTitle: 'Example Business API domains',
          bullets: [
            'Customer and identity',
            'Products and catalogs',
            'Orders and payments',
            'KYC and onboarding',
            'Cases, tasks and notifications',
          ],
        },
        {
          title: 'Enterprise integrations',
          text: 'We connect APIs and Business APIs to core enterprise systems, legacy platforms and external services through robust integration architecture.',
          bulletsTitle: 'Integration areas',
          bullets: [
            'ERP and CRM',
            'Core banking and insurance platforms',
            'Document and case-management systems',
            'Identity providers',
            'Legacy systems and external APIs',
          ],
        },
        {
          title: 'Event-driven integrations',
          wide: true,
          text: 'We design asynchronous, event-driven integrations that decouple systems, improve resilience and support real-time business flows.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Kafka-based integration',
            'NATS messaging patterns',
            'Pub/sub and request-reply',
            'Asynchronous processing',
            'Event traceability',
          ],
        },
        {
          title: 'Partner APIs and API economy',
          wide: true,
          text: 'We help organizations productize APIs for partners and external developers, enabling secure collaboration and new digital business models.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Partner API strategy',
            'API productization',
            'Developer portal',
            'Partner onboarding',
            'Sandbox environments and access plans',
          ],
        },
        {
          title: 'AI-agent-ready APIs',
          text: 'We design APIs that AI agents can call safely, with clear contracts, validation and control boundaries built into the architecture.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Agent-callable APIs',
            'Tool-safe API design',
            'API schemas for AI tool use',
            'Gateway checks',
            'Human approval boundaries',
          ],
        },
        {
          title: 'MCP-oriented API and tool integration',
          text: 'We expose APIs as governed tools for AI agents through MCP-oriented patterns, with policy enforcement and platform integration.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'MCP-oriented tool exposure',
            'Tool metadata and schema design',
            'API-to-tool mapping',
            'Access and policy enforcement',
            'Integration with KumuluzAI and Kumuluz API',
          ],
        },
        {
          title: 'API observability and lifecycle governance',
          wide: true,
          text: 'We make APIs observable and governable across their lifecycle, giving teams visibility into usage, performance and dependencies.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'API usage monitoring',
            'Performance metrics',
            'Audit logs',
            'Version management and deprecation',
            'Consumer dependency visibility',
          ],
        },
      ],
    },
    {
      type: 'kumuluz',
      title: 'Accelerated by Kumuluz API',
      body: [
        'Sunesis develops and delivers Kumuluz API, an API management and API economy platform that helps organizations expose, secure, monitor and govern APIs across teams, partners, applications and AI-agent-ready environments — with a catalog, developer portals, gateway, access control, sandbox, lifecycle governance and usage visibility.',
        'Kumuluz API also supports AgenticAI scenarios, including MCP server patterns, contextual routing, LLM routing and token usage logging. On Sunesis projects, Kumuluz API accelerates ecosystem development and provides a reusable governance foundation.',
      ],
      items: [
        {
          label: 'Discovery',
          title: 'API catalog',
          text: 'A central catalog where APIs and Business APIs become discoverable, documented and owned across the organization.',
        },
        {
          label: 'Developers',
          title: 'Developer portal',
          text: 'Self-service onboarding, documentation, subscriptions and access plans for internal teams, partners and external developers.',
        },
        {
          label: 'Gateway',
          title: 'API gateway',
          text: 'Routing, transformation, authentication, authorization, rate limiting and policy enforcement for every API request.',
        },
        {
          label: 'Lifecycle',
          title: 'API lifecycle management',
          text: 'Versioning, deprecation, governance and lifecycle control so APIs evolve without breaking consumers.',
        },
        {
          label: 'Partners',
          title: 'Partner onboarding',
          text: 'Sandbox environments, subscriptions and access plans that make partner and API-economy collaboration secure and manageable.',
        },
        {
          label: 'AgenticAI',
          title: 'AgenticAI-ready API exposure',
          text: 'MCP server patterns, contextual and LLM routing and token usage logging that prepare APIs for safe AI-agent consumption.',
        },
      ],
      cta: 'Explore Kumuluz API',
      ctaHref: 'https://kumuluz.com',
    },
    {
      type: 'cards',
      title:
        'Business APIs turn repeated functionality into reusable capabilities',
      body: [
        'Business APIs encapsulate common business behavior behind clean, governed contracts. Instead of rebuilding the same logic in every project, teams consume a shared capability layer that protects backend systems and standardizes behavior across the organization.',
      ],
      columns: 3,
      items: [
        {
          title: 'Build once, reuse many times',
          text: 'Common business functionality is implemented once and reused across applications, partners, workflows and AI agents.',
        },
        {
          title: 'Standardize business behavior',
          text: 'Business rules and behavior become consistent across consumers instead of being reimplemented per integration.',
        },
        {
          title: 'Protect backend systems',
          text: 'Business APIs shield core systems behind a governed contract, decoupling consumers from backend complexity.',
        },
        {
          title: 'Enable workflow automation',
          text: 'Workflow engines call Business APIs as service tasks, turning reusable capabilities into automated process steps.',
        },
        {
          title: 'Prepare for AgenticAI',
          text: 'Business APIs become safe, governed tools that AI agents can call within clear policy and approval boundaries.',
        },
        {
          title: 'Improve API governance',
          text: 'A well-defined capability layer makes ownership, versioning and access control easier to manage at scale.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Integration architecture for complex enterprise landscapes',
      body: [
        'Real enterprise environments combine modern APIs, legacy systems, events, identity providers and workflow engines. Sunesis designs integration architectures that bring these together into observable, reusable and maintainable flows.',
      ],
      columns: 4,
      variant: 'numbered',
      items: [
        {
          title: 'API-based integration',
          text: 'Synchronous integration through governed APIs and Business APIs with consistent contracts and access control.',
        },
        {
          title: 'Event-driven integration',
          text: 'Asynchronous integration through Kafka and NATS for decoupling, resilience and real-time flows.',
        },
        {
          title: 'Hybrid integration',
          text: 'A combination of synchronous APIs and event-driven patterns matched to each business flow.',
        },
        {
          title: 'Legacy system integration',
          text: 'Wrapping and exposing legacy platforms through APIs and adapters without disruptive rewrites.',
        },
        {
          title: 'Workflow integration',
          text: 'Connecting APIs and Business APIs to workflow engines such as Temporal and Camunda as service tasks.',
        },
        {
          title: 'Identity-aware integration',
          text: 'Integration flows that propagate identity, scopes and access policies across systems and consumers.',
        },
        {
          title: 'Observable integration flows',
          text: 'End-to-end visibility into integration flows through metrics, logs, traces and correlation IDs.',
        },
        {
          title: 'Reusable integration patterns',
          text: 'Standard, repeatable integration patterns that reduce duplication and accelerate delivery.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Prepare API ecosystems for AgenticAI',
      body: [
        'AI agents introduce a new class of API consumer. Sunesis designs API ecosystems where agents can call capabilities safely — through tool-safe contracts, gateway control, business-level tools and human approval boundaries.',
      ],
      columns: 4,
      items: [
        {
          title: 'Agent-callable APIs',
          text: 'APIs designed so AI agents can invoke them reliably with clear, well-documented schemas.',
        },
        {
          title: 'Tool-safe contracts',
          text: 'Contracts that constrain what an agent can do, with validation and safe defaults built in.',
        },
        {
          title: 'MCP-oriented integration',
          text: 'Exposing APIs as governed tools for agents through MCP-oriented patterns.',
        },
        {
          title: 'Gateway control',
          text: 'Routing agent calls through the API gateway for authentication, policy enforcement and logging.',
        },
        {
          title: 'Business APIs as tools',
          text: 'Reusable Business APIs that become governed, business-level tools for AI agents.',
        },
        {
          title: 'Workflow boundaries',
          text: 'Clear boundaries where agents prepare context and deterministic workflows execute process-critical steps.',
        },
        {
          title: 'Human approvals',
          text: 'Approval boundaries for sensitive or high-impact actions before they are executed.',
        },
        {
          title: 'Auditability',
          text: 'Traceability of agent API calls for operational, security and compliance purposes.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Security and governance across every API consumer',
      body: [
        'Whether an API is called by an application, a partner or an AI agent, the same governance principles apply. Sunesis builds security and governance into the API ecosystem so access, ownership and policy enforcement are consistent across all consumers.',
      ],
      columns: 4,
      variant: 'check',
      items: [
        {
          title: 'API ownership',
          text: 'Clear ownership for every API, so responsibility, lifecycle and quality are well defined.',
        },
        {
          title: 'Access control',
          text: 'Consistent access policies, scopes and subscriptions across applications, partners and agents.',
        },
        {
          title: 'OAuth2 and OpenID Connect',
          text: 'Standards-based authentication and authorization integrated across the API ecosystem.',
        },
        {
          title: 'Partner governance',
          text: 'Onboarding, subscriptions, access plans and usage visibility for partner API consumers.',
        },
        {
          title: 'Agent governance',
          text: 'Policy enforcement and control over which APIs and tools AI agents are allowed to use.',
        },
        {
          title: 'Versioning and lifecycle',
          text: 'Version management, deprecation and lifecycle governance that protect existing consumers.',
        },
        {
          title: 'Policy enforcement',
          text: 'Centralized enforcement of security, rate limiting and access policies at the gateway.',
        },
        {
          title: 'Auditability',
          text: 'Audit logs and usage records for sensitive operations across the API ecosystem.',
        },
      ],
    },
    {
      type: 'list',
      title: 'Make API and integration flows observable',
      body: [
        'You cannot govern what you cannot see. Sunesis instruments API ecosystems and integration flows so teams have full visibility into traffic, performance, usage and dependencies.',
      ],
      items: [
        'API traffic monitoring',
        'API latency and error metrics',
        'Consumer usage analytics',
        'Gateway logs',
        'Distributed tracing',
        'Correlation IDs across APIs, events and services',
        'Event flow observability',
        'Partner usage visibility',
        'Workflow-related API monitoring',
        'Agent API call tracing',
        'Audit logs for sensitive operations',
        'Operational dashboards and alerting',
      ],
    },
    {
      type: 'cards',
      title: 'Reference architecture for API ecosystems and integrations',
      body: [
        'A production API ecosystem separates API providers, integration, management, gateway, business capabilities, events, workflows and agent tools into clear layers — a more governable and maintainable architecture than direct point-to-point connections.',
      ],
      columns: 3,
      variant: 'numbered',
      items: [
        {
          title: 'API providers',
          text: 'Internal services, enterprise systems and external services that provide the underlying APIs and data.',
        },
        {
          title: 'Integration and service layer',
          text: 'Services, connectors and integration logic that connect systems and expose capabilities.',
        },
        {
          title: 'Kumuluz API management layer',
          text: 'API catalog, developer portals, access control, lifecycle governance and usage visibility.',
        },
        {
          title: 'API gateway layer',
          text: 'Routing, transformation, authentication, authorization, rate limiting and policy enforcement.',
        },
        {
          title: 'Business API layer',
          text: 'Reusable Business APIs that expose governed business capabilities to all consumers.',
        },
        {
          title: 'Event and messaging layer',
          text: 'Kafka and NATS-based event flows for asynchronous, decoupled integration.',
        },
        {
          title: 'Workflow layer',
          text: 'Temporal, Camunda or similar engines that orchestrate deterministic business processes.',
        },
        {
          title: 'MCP and agent tool layer',
          text: 'MCP-oriented tools and agent-callable APIs that expose capabilities safely to AI agents.',
        },
        {
          title: 'API consumers',
          text: 'Web and mobile applications, partners, external developers, workflows and AI agents.',
        },
        {
          title: 'Observability and governance layer',
          text: 'Metrics, logs, traces, correlation IDs, usage analytics and audit trails across the ecosystem.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Where API ecosystems and integrations create value',
      intro:
        'API ecosystems and integrations create value wherever organizations need to connect complex systems, collaborate with partners or expose reusable capabilities at scale.',
      columns: 3,
      variant: 'tag',
      items: [
        {
          title: 'Enterprise API management',
          text: 'A managed foundation for exposing, securing, monitoring and governing APIs across the organization.',
          meta: 'API catalog, developer portal, gateway, access control, API lifecycle, usage analytics',
        },
        {
          title: 'Partner API ecosystem',
          text: 'Productized partner APIs with secure onboarding, documentation and usage visibility for the API economy.',
          meta: 'Partner APIs, sandbox environments, subscriptions, API documentation, usage visibility, API economy',
        },
        {
          title: 'Reusable Business API layer',
          text: 'A governed capability layer that abstracts backends and standardizes business behavior across consumers.',
          meta: 'Business APIs, capability modeling, backend abstraction, API governance, workflow-ready APIs',
        },
        {
          title: 'Enterprise integration platform',
          text: 'An integration architecture combining APIs, events and connectors across complex enterprise landscapes.',
          meta: 'Integration architecture, APIs, event-driven integration, connectors, Kafka, NATS, observability',
        },
        {
          title: 'AI-agent-ready API layer',
          text: 'An API layer prepared for safe AI-agent consumption through tool-safe design and gateway control.',
          meta: 'Agent-callable APIs, MCP-oriented tools, gateway control, tool-safe API design, auditability',
        },
        {
          title: 'Workflow-enabled API ecosystem',
          text: 'APIs and Business APIs connected to workflow engines as service tasks with full audit trails.',
          meta: 'Temporal, Camunda, workflow APIs, Business APIs, service tasks, audit trails',
        },
        {
          title: 'Legacy API enablement',
          text: 'Wrapping legacy systems with APIs and adapters to modernize integration without disruptive rewrites.',
          meta: 'Legacy wrapping, API enablement, integration adapters, security, lifecycle management',
        },
      ],
    },
    {
      type: 'steps',
      title: 'How we deliver API ecosystems and integrations',
      items: [
        {
          title: 'Assess the API and integration landscape',
          text: 'We review existing APIs, integrations, systems and pain points to understand the current state and opportunities.',
        },
        {
          title: 'Define the API strategy and governance model',
          text: 'We define how APIs are designed, owned, versioned, secured and governed across teams and domains.',
        },
        {
          title: 'Design the target integration architecture',
          text: 'We design the target architecture across APIs, Business APIs, events, gateway, workflows and observability.',
        },
        {
          title: 'Implement API management foundation',
          text: 'We set up the API catalog, developer portal, gateway, access control and lifecycle governance.',
        },
        {
          title: 'Build APIs, Business APIs and connectors',
          text: 'We implement the APIs, reusable Business APIs and integration connectors that the ecosystem needs.',
        },
        {
          title: 'Prepare for partners, workflows and AI agents',
          text: 'We enable partner onboarding, workflow integration and AI-agent-ready API consumption.',
        },
        {
          title: 'Add observability and lifecycle governance',
          text: 'We instrument monitoring, tracing, usage analytics, versioning and audit trails across the ecosystem.',
        },
        {
          title: 'Operate, evolve and scale',
          text: 'We support operations, continuous evolution and scaling of the API ecosystem over time.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Technology expertise',
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'API architecture',
          text: 'REST, event-driven APIs, OpenAPI and API governance.',
        },
        {
          title: 'API management',
          text: 'Catalogs, developer portals, gateways, subscriptions and monitoring.',
        },
        {
          title: 'Integration',
          text: 'Enterprise integration patterns, connectors, legacy wrapping, cloud and partner integrations.',
        },
        {
          title: 'Events and messaging',
          text: 'Kafka, NATS, pub/sub, request-reply and event routing.',
        },
        {
          title: 'Service communication',
          text: 'REST, gRPC, protocol translation and gateway patterns.',
        },
        {
          title: 'Identity and security',
          text: 'OAuth2, OIDC, Keycloak, Microsoft Entra ID, scopes and policies.',
        },
        {
          title: 'Workflow integration',
          text: 'Temporal, Camunda, service tasks and process orchestration.',
        },
        {
          title: 'AgenticAI readiness',
          text: 'MCP-oriented tools, agent-callable APIs, tool-safe contracts and KumuluzAI integration.',
        },
        {
          title: 'Observability',
          text: 'Metrics, logs, traces, correlation IDs and API usage analytics.',
        },
        {
          title: 'Kumuluz platforms',
          text: 'Kumuluz API, Business APIs, Digital Platform and KumuluzAI.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'API ecosystems and integrations in practice',
      columns: 3,
      cta: 'Explore our references',
      ctaHref: 'references/',
      variant: 'feature',
      items: [
        {
          label: 'Reference',
          title: 'Inorma — Zavarovalniška skupina Sava',
          text: 'An enterprise integration platform connecting systems across an insurance group, enabling reusable integrations and governed data flows.',
        },
        {
          label: 'Reference',
          title: 'KYC — NLB',
          text: 'Digital KYC and integrations supporting compliance and customer onboarding across banking systems.',
        },
        {
          label: 'Reference',
          title: 'NLB Klik',
          text: 'A digital banking solution with frontend and backend development and integrations across core banking systems.',
        },
        {
          label: 'Reference',
          title: 'EPUS — Plinovodi',
          text: 'A business-critical platform for energy infrastructure, combining workflows and integrations across enterprise systems.',
        },
        {
          label: 'Reference',
          title: 'CUPID',
          text: 'An open-source energy interoperability toolkit at LF Energy, enabling DER interoperability through shared, governed integrations.',
        },
        {
          label: 'Reference',
          title: 'Kumuluz API',
          text: 'An API management and API economy platform for exposing, securing, monitoring and governing APIs across teams, partners, applications and AI agents.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'Why Sunesis for API ecosystems and integrations',
      items: [
        {
          title: 'We understand enterprise integration reality',
          text: 'We work with complex landscapes of modern systems, legacy platforms, partners and external services.',
        },
        {
          title: 'We combine API strategy with implementation',
          text: 'We define API strategy and governance and then build the APIs, Business APIs and integrations to realize it.',
        },
        {
          title: 'We bring API management capability',
          text: 'We deliver catalogs, developer portals, gateways, access control and lifecycle governance.',
        },
        {
          title: 'We design reusable Business APIs',
          text: 'We expose repeated business functionality as governed, reusable capabilities across the organization.',
        },
        {
          title: 'We support event-driven and API-first architectures',
          text: 'We combine synchronous APIs with Kafka and NATS event-driven patterns for resilient integration.',
        },
        {
          title: 'We prepare APIs for AgenticAI',
          text: 'We make APIs agent-callable and tool-safe, with gateway control and human approval boundaries.',
        },
        {
          title: 'We build for production',
          text: 'We deliver secure, observable and governed API ecosystems built to operate reliably at scale.',
        },
      ],
    },
    {
      type: 'finalCta',
      title: 'Need to build a governed API ecosystem?',
      body: [
        'Whether you are creating an API management foundation, exposing partner APIs, modernizing integrations, building reusable Business APIs or preparing APIs for AI agents, Sunesis can help you design, build and operate a secure and governed API ecosystem.',
        'Start with API visibility and governance, then evolve toward partner ecosystems, workflow automation and AgenticAI-ready APIs.',
      ],
      primaryCta: 'Talk to our API experts',
      secondaryCta: 'Explore our expertise',
    },
  ],
}

const sl: ExpertisePageContent = {
  seo: {
    title:
      'API ekosistemi in integracije | Upravljanje API-jev, Business API-ji in enterprise integracija | Sunesis',
    description:
      'Sunesis načrtuje in gradi enterprise API ekosisteme, platforme za upravljanje API-jev, Business API-jev, partnerske integracije, dogodkovne arhitekture in API sloje, pripravljene za AI agente.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'API ekosistemi in integracije',
    title:
      'Povežite aplikacije, partnerje, workflowe in AI agente preko nadzorovanih API-jev',
    body: [
      'Sunesis organizacijam pomaga načrtovati, graditi in upravljati API ekosisteme, ki povezujejo interne ekipe, digitalne platforme, partnerske sisteme, enterprise aplikacije, workflow pogone in AI agente, pri čemer združuje API arhitekturo, upravljanje API-jev, integracijsko inženirstvo, Business API-je, dogodkovne vzorce in cloud-native dostavo.',
      'Organizacijam pomagamo preiti od point-to-point integracij in razdrobljenih API-jev do nadzorovanih API ekosistemov, ki podpirajo digitalne produkte, partnersko sodelovanje, avtomatizacijo procesov in arhitekture, pripravljene za AgenticAI.',
    ],
    primaryCta: 'Pogovorite se z našimi API strokovnjaki',
    secondaryCta: 'Raziščite naše ekspertize',
    trustLine:
      'Zgrajeno za organizacije, ki potrebujejo varne, ponovno uporabne in nadzorovane API-je v kompleksnih enterprise okoljih.',
  },
  sections: [
    {
      type: 'split',
      title: 'API-ji so temelj sodobnih digitalnih ekosistemov',
      body: [
        'Organizacije so vse bolj odvisne od API-jev, ki povezujejo spletne in mobilne aplikacije, interne platforme, partnerje, razvijalce, workflow pogone in AI agente. Prek API-jev sistemi, ekipe in podjetja med seboj sodelujejo.',
        'A API-ji ustvarijo vrednost šele takrat, ko so dobro načrtovani, nadzorovani, dokumentirani, zavarovani, spremljani in ponovno uporabljeni. Brez API strategije organizacije obtičijo pri podvojenih integracijah, neskladnih pogodbah in nenadzorovanem dostopu.',
        'Sunesis organizacijam pomaga graditi zanesljive, varne in obvladljive API ekosisteme — od strategije in arhitekture do implementacije in obratovanja.',
      ],
      quote:
        'Sunesis načrtuje API ekosisteme, v katerih API-ji postanejo ponovno uporabne, nadzorovane digitalne zmožnosti — ne le tehnične končne točke.',
    },
    {
      type: 'compare',
      title:
        'Od point-to-point integracij do ponovno uporabnih API ekosistemov',
      intro:
        'Večina enterprise okolij sčasoma nakopiči vrsto enkratnih integracij. Nadzorovan API ekosistem to kompleksnost nadomesti s ponovno uporabnimi, upravljanimi in opazljivimi API-ji.',
      columns: [
        {
          title: 'Point-to-point integracija',
          bullets: [
            'Integracije po meri za vsak projekt',
            'Podvojena poslovna logika',
            'Neskladna varnost in nadzor dostopa',
            'Omejena preglednost API-jev',
            'Ročno vključevanje partnerjev',
            'Krhke odvisnosti',
            'Neprimerno za nadzorovan dostop AI agentov',
          ],
        },
        {
          title: 'Nadzorovan API ekosistem',
          bullets: [
            'Ponovno uporabni API-ji in Business API-ji',
            'Centralni katalog API-jev in jasno lastništvo',
            'API gateway in politike dostopa',
            'Vključevanje razvijalcev in partnerjev',
            'Upravljanje življenjskega cikla in verzioniranje',
            'Preglednost uporabe in spremljanje',
            'API-ji, pripravljeni za aplikacije, workflowe in AI agente',
          ],
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'Kaj gradimo',
      intro:
        'Načrtujemo in implementiramo API ekosisteme ter integracijske arhitekture za organizacije, ki morajo povezati kompleksne sisteme, izpostaviti ponovno uporabne zmožnosti in varno upravljati API-je v velikem obsegu.',
      items: [
        {
          title: 'Enterprise API strategija in arhitektura',
          text: 'Organizacijam pomagamo opredeliti, kako se API-ji načrtujejo, kdo jih ima v lasti ter kako se verzionirajo in nadzorujejo, in vzpostaviti API-first temelj med ekipami in domenami.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'API strategija',
            'Modeliranje API domen',
            'Modeli lastništva API-jev',
            'API-first arhitektura',
            'Življenjski cikel in verzioniranje API-jev',
          ],
        },
        {
          title: 'Platforme za upravljanje API-jev',
          wide: true,
          text: 'Dostavimo platformske zmožnosti, ki naredijo API-je odkrivljive, uporabne in obvladljive med internimi ekipami, partnerji in zunanjimi razvijalci.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Katalog API-jev',
            'Razvijalski portal',
            'API gateway',
            'Načrti dostopa in naročnine',
            'Analitika uporabe',
          ],
        },
        {
          title: 'API gateway in nadzor dostopa',
          wide: true,
          text: 'Implementiramo gateway sloj, ki usmerja, varuje in nadzoruje vsako API zahtevo ter uveljavlja dosledne politike med vsemi porabniki.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Usmerjanje in transformacija zahtev',
            'Avtentikacija in avtorizacija',
            'Integracija OAuth2 in OIDC',
            'Omejevanje hitrosti in kvote',
            'Varnost na ravni gatewaya',
          ],
        },
        {
          title: 'Business API-ji in ponovno uporabne zmožnosti',
          text: 'Ponavljajočo se poslovno funkcionalnost izpostavimo kot ponovno uporabne Business API-je, kar ustvari nadzorovan sloj zmožnosti med porabniki in backend sistemi.',
          bulletsTitle: 'Primeri domen Business API',
          bullets: [
            'Stranke in identiteta',
            'Produkti in katalogi',
            'Naročila in plačila',
            'KYC in onboarding',
            'Primeri, naloge in obvestila',
          ],
        },
        {
          title: 'Enterprise integracije',
          text: 'API-je in Business API-je prek robustne integracijske arhitekture povežemo z osrednjimi enterprise sistemi, podedovanimi platformami in zunanjimi storitvami.',
          bulletsTitle: 'Področja integracije',
          bullets: [
            'ERP in CRM',
            'Osrednji bančni in zavarovalniški sistemi',
            'Sistemi za upravljanje dokumentov in primerov',
            'Ponudniki identitete',
            'Podedovani sistemi in zunanji API-ji',
          ],
        },
        {
          title: 'Dogodkovne integracije',
          wide: true,
          text: 'Načrtujemo asinhrone, dogodkovno vodene integracije, ki razklopijo sisteme, izboljšajo odpornost in podpirajo poslovne tokove v realnem času.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Integracija na osnovi Kafke',
            'Vzorci sporočanja NATS',
            'Pub/sub in request-reply',
            'Asinhrono procesiranje',
            'Sledljivost dogodkov',
          ],
        },
        {
          title: 'Partnerski API-ji in API ekonomija',
          wide: true,
          text: 'Organizacijam pomagamo API-je za partnerje in zunanje razvijalce oblikovati kot produkte ter omogočiti varno sodelovanje in nove digitalne poslovne modele.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Strategija partnerskih API-jev',
            'Oblikovanje API-jev kot produktov',
            'Razvijalski portal',
            'Vključevanje partnerjev',
            'Sandbox okolja in načrti dostopa',
          ],
        },
        {
          title: 'API-ji, pripravljeni za AI agente',
          text: 'Načrtujemo API-je, ki jih AI agenti lahko varno kličejo — z jasnimi pogodbami, validacijo in nadzornimi mejami, vgrajenimi v arhitekturo.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Agentom dostopni API-ji',
            'Tool-safe načrtovanje API-jev',
            'API sheme za uporabo AI orodij',
            'Preverjanja na gatewayu',
            'Meje s človeško odobritvijo',
          ],
        },
        {
          title: 'MCP integracija API-jev in orodij',
          text: 'API-je prek MCP vzorcev izpostavimo kot nadzorovana orodja za AI agente, z uveljavljanjem politik in integracijo s platformami.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Izpostavljanje orodij prek MCP',
            'Načrtovanje metapodatkov in shem orodij',
            'Preslikava API-ja v orodje',
            'Uveljavljanje dostopa in politik',
            'Integracija s KumuluzAI in Kumuluz API',
          ],
        },
        {
          title: 'Opazljivost API-jev in upravljanje življenjskega cikla',
          wide: true,
          text: 'API-je naredimo opazljive in obvladljive skozi celoten življenjski cikel ter ekipam zagotovimo vpogled v uporabo, zmogljivost in odvisnosti.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Spremljanje uporabe API-jev',
            'Metrike zmogljivosti',
            'Revizijski dnevniki',
            'Upravljanje verzij in opuščanje',
            'Preglednost odvisnosti porabnikov',
          ],
        },
      ],
    },
    {
      type: 'kumuluz',
      title: 'Pospešeno s Kumuluz API',
      body: [
        'Sunesis razvija in dostavlja Kumuluz API, platformo za upravljanje API-jev in API ekonomijo, ki organizacijam pomaga izpostavljati, varovati, spremljati in nadzorovati API-je med ekipami, partnerji, aplikacijami in okolji, pripravljenimi za AI agente — s katalogom, razvijalskimi portali, gatewayem, nadzorom dostopa, sandboxom, upravljanjem življenjskega cikla in preglednostjo uporabe.',
        'Kumuluz API podpira tudi scenarije AgenticAI, vključno z vzorci MCP strežnika, kontekstualnim usmerjanjem, usmerjanjem LLM in beleženjem porabe žetonov. Na projektih Sunesis Kumuluz API pospeši razvoj ekosistema in zagotovi ponovno uporaben temelj upravljanja.',
      ],
      items: [
        {
          label: 'Odkrivanje',
          title: 'Katalog API-jev',
          text: 'Centralni katalog, v katerem API-ji in Business API-ji postanejo odkrivljivi, dokumentirani in z jasno določenim lastništvom po vsej organizaciji.',
        },
        {
          label: 'Razvijalci',
          title: 'Razvijalski portal',
          text: 'Samopostrežno vključevanje, dokumentacija, naročnine in načrti dostopa za interne ekipe, partnerje in zunanje razvijalce.',
        },
        {
          label: 'Gateway',
          title: 'API gateway',
          text: 'Usmerjanje, transformacija, avtentikacija, avtorizacija, omejevanje hitrosti in uveljavljanje politik za vsako API zahtevo.',
        },
        {
          label: 'Življenjski cikel',
          title: 'Upravljanje življenjskega cikla API-jev',
          text: 'Verzioniranje, opuščanje in nadzor življenjskega cikla, da se API-ji lahko razvijajo, ne da bi povzročili okvare pri porabnikih.',
        },
        {
          label: 'Partnerji',
          title: 'Vključevanje partnerjev',
          text: 'Sandbox okolja, naročnine in načrti dostopa, ki naredijo partnersko sodelovanje in API ekonomijo varno ter obvladljivo.',
        },
        {
          label: 'AgenticAI',
          title: 'Izpostavitev API-jev za AgenticAI',
          text: 'Vzorci MCP strežnika, kontekstualno usmerjanje in usmerjanje LLM ter beleženje porabe žetonov, ki pripravijo API-je za varno uporabo AI agentov.',
        },
      ],
      cta: 'Raziščite Kumuluz API',
      ctaHref: 'https://kumuluz.com',
    },
    {
      type: 'cards',
      title:
        'Business API-ji spremenijo ponavljajočo se funkcionalnost v ponovno uporabne zmožnosti',
      body: [
        'Business API-ji skupno poslovno vedenje skrijejo za čistimi, nadzorovanimi pogodbami. Namesto da bi v vsakem projektu znova gradile isto logiko, ekipe uporabljajo skupni sloj zmožnosti, ki ščiti backend sisteme in standardizira vedenje po vsej organizaciji.',
      ],
      columns: 3,
      items: [
        {
          title: 'Zgradite enkrat, uporabite večkrat',
          text: 'Skupno poslovno funkcionalnost implementirate enkrat in jo ponovno uporabite v aplikacijah, pri partnerjih, v workflowih in pri AI agentih.',
        },
        {
          title: 'Standardizirajte poslovno vedenje',
          text: 'Poslovna pravila in vedenje postanejo dosledni med vsemi porabniki, namesto da bi jih za vsako integracijo znova implementirali.',
        },
        {
          title: 'Zaščitite backend sisteme',
          text: 'Business API-ji ščitijo osrednje sisteme za nadzorovano pogodbo in porabnike razklopijo od kompleksnosti backenda.',
        },
        {
          title: 'Omogočite avtomatizacijo workflowov',
          text: 'Workflow pogoni kličejo Business API-je kot service taske in ponovno uporabne zmožnosti spremenijo v avtomatizirane korake procesa.',
        },
        {
          title: 'Pripravite se na AgenticAI',
          text: 'Business API-ji postanejo varna, nadzorovana orodja, ki jih AI agenti lahko kličejo znotraj jasnih politik in meja odobritev.',
        },
        {
          title: 'Izboljšajte upravljanje API-jev',
          text: 'Dobro opredeljen sloj zmožnosti olajša upravljanje lastništva, verzioniranja in nadzora dostopa v velikem obsegu.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Integracijska arhitektura za kompleksna enterprise okolja',
      body: [
        'Realna enterprise okolja združujejo sodobne API-je, podedovane sisteme, dogodke, ponudnike identitete in workflow pogone. Sunesis načrtuje integracijske arhitekture, ki vse to povežejo v opazljive, ponovno uporabne in vzdržljive tokove.',
      ],
      columns: 4,
      variant: 'numbered',
      items: [
        {
          title: 'Integracija na osnovi API-jev',
          text: 'Sinhrona integracija preko nadzorovanih API-jev in Business API-jev z doslednimi pogodbami in nadzorom dostopa.',
        },
        {
          title: 'Dogodkovna integracija',
          text: 'Asinhrona integracija prek Kafke in NATS za razklapljanje, odpornost in tokove v realnem času.',
        },
        {
          title: 'Hibridna integracija',
          text: 'Kombinacija sinhronih API-jev in dogodkovnih vzorcev, prilagojena vsakemu poslovnemu toku.',
        },
        {
          title: 'Integracija podedovanih sistemov',
          text: 'Ovijanje in izpostavljanje podedovanih platform prek API-jev in adapterjev brez motečih prepisov.',
        },
        {
          title: 'Integracija workflowov',
          text: 'Povezovanje API-jev in Business API-jev z workflow pogoni, kot sta Temporal in Camunda, kot service taski.',
        },
        {
          title: 'Integracija z upoštevanjem identitete',
          text: 'Integracijski tokovi, ki identiteto, obsege in politike dostopa razširjajo med sistemi in porabniki.',
        },
        {
          title: 'Opazljivi integracijski tokovi',
          text: 'Celovita preglednost integracijskih tokov prek metrik, dnevnikov, sledi in korelacijskih ID-jev.',
        },
        {
          title: 'Ponovno uporabni integracijski vzorci',
          text: 'Standardni, ponovljivi integracijski vzorci, ki zmanjšajo podvajanje in pospešijo dostavo.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Pripravite API ekosisteme za AgenticAI',
      body: [
        'AI agenti uvajajo nov razred porabnikov API-jev. Sunesis načrtuje API ekosisteme, v katerih agenti lahko varno kličejo zmožnosti — prek tool-safe pogodb, nadzora gatewaya, orodij na poslovni ravni in meja s človeško odobritvijo.',
      ],
      columns: 4,
      items: [
        {
          title: 'Agentom dostopni API-ji',
          text: 'API-ji, načrtovani tako, da jih AI agenti lahko zanesljivo kličejo z jasnimi, dobro dokumentiranimi shemami.',
        },
        {
          title: 'Tool-safe pogodbe',
          text: 'Pogodbe, ki omejujejo, kaj agent lahko počne, z vgrajeno validacijo in varnimi privzetimi vrednostmi.',
        },
        {
          title: 'MCP integracija',
          text: 'Izpostavljanje API-jev kot nadzorovanih orodij za agente prek MCP vzorcev.',
        },
        {
          title: 'Nadzor gatewaya',
          text: 'Usmerjanje klicev agentov skozi API gateway za potrebe avtentikacije, uveljavljanja politik in beleženja.',
        },
        {
          title: 'Business API-ji kot orodja',
          text: 'Ponovno uporabni Business API-ji, ki postanejo nadzorovana orodja na poslovni ravni za AI agente.',
        },
        {
          title: 'Meje workflowov',
          text: 'Jasne meje, kjer agenti pripravijo kontekst, deterministični workflowi pa izvedejo procesno kritične korake.',
        },
        {
          title: 'Človeške odobritve',
          text: 'Meje odobritve za občutljiva ali zelo vplivna dejanja, preden se izvedejo.',
        },
        {
          title: 'Sledljivost',
          text: 'Sledljivost API klicev agentov za operativne, varnostne in skladnostne potrebe.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Varnost in upravljanje za vsakega porabnika API-jev',
      body: [
        'Ne glede na to, ali API kliče aplikacija, partner ali AI agent, veljajo enaka načela upravljanja. Sunesis vgradi varnost in upravljanje v API ekosistem, tako da so dostop, lastništvo in uveljavljanje politik dosledni med vsemi porabniki.',
      ],
      columns: 4,
      variant: 'check',
      items: [
        {
          title: 'Lastništvo API-jev',
          text: 'Jasno določeno lastništvo vsakega API-ja, tako da so odgovornost, življenjski cikel in kakovost dobro opredeljeni.',
        },
        {
          title: 'Nadzor dostopa',
          text: 'Dosledne politike dostopa, obsegi in naročnine med aplikacijami, partnerji in agenti.',
        },
        {
          title: 'OAuth2 in OpenID Connect',
          text: 'Na standardih temelječa avtentikacija in avtorizacija, vgrajeni v API ekosistem.',
        },
        {
          title: 'Upravljanje partnerjev',
          text: 'Vključevanje, naročnine, načrti dostopa in preglednost uporabe za partnerske porabnike API-jev.',
        },
        {
          title: 'Upravljanje agentov',
          text: 'Uveljavljanje politik in nadzor nad tem, katere API-je in orodja AI agenti smejo uporabljati.',
        },
        {
          title: 'Verzioniranje in življenjski cikel',
          text: 'Upravljanje verzij, opuščanje in vodenje življenjskega cikla, ki ščitijo obstoječe porabnike.',
        },
        {
          title: 'Uveljavljanje politik',
          text: 'Centralizirano uveljavljanje varnosti, omejevanja hitrosti in politik dostopa na gatewayu.',
        },
        {
          title: 'Sledljivost',
          text: 'Revizijski dnevniki in zapisi uporabe za občutljive operacije v API ekosistemu.',
        },
      ],
    },
    {
      type: 'list',
      title: 'Naredite API in integracijske tokove opazljive',
      body: [
        'Ne morete upravljati tistega, česar ne vidite. Sunesis instrumentira API ekosisteme in integracijske tokove, tako da imajo ekipe popolno preglednost prometa, zmogljivosti, uporabe in odvisnosti.',
      ],
      items: [
        'Spremljanje API prometa',
        'Metrike zakasnitev in napak API-jev',
        'Analitika uporabe porabnikov',
        'Dnevniki gatewaya',
        'Porazdeljeno sledenje',
        'Korelacijski ID-ji med API-ji, dogodki in storitvami',
        'Opazljivost tokov dogodkov',
        'Preglednost uporabe partnerjev',
        'Spremljanje API-jev, povezanih z workflowi',
        'Sledenje API klicev agentov',
        'Revizijski dnevniki za občutljive operacije',
        'Operativne nadzorne plošče in opozarjanje',
      ],
    },
    {
      type: 'cards',
      title: 'Referenčna arhitektura za API ekosisteme in integracije',
      body: [
        'Produkcijski API ekosistem ponudnike API-jev, integracijo, upravljanje, gateway, poslovne zmožnosti, dogodke, workflowe in orodja agentov loči v jasne sloje — gre za bolj obvladljivo in vzdržljivo arhitekturo kot neposredne point-to-point povezave.',
      ],
      columns: 3,
      variant: 'numbered',
      items: [
        {
          title: 'Ponudniki API-jev',
          text: 'Interne storitve, enterprise sistemi in zunanje storitve, ki zagotavljajo temeljne API-je in podatke.',
        },
        {
          title: 'Integracijski in storitveni sloj',
          text: 'Storitve, konektorji in integracijska logika, ki povezujejo sisteme in izpostavljajo zmožnosti.',
        },
        {
          title: 'Sloj upravljanja Kumuluz API',
          text: 'Katalog API-jev, razvijalski portali, nadzor dostopa, upravljanje življenjskega cikla in preglednost uporabe.',
        },
        {
          title: 'Sloj API gatewaya',
          text: 'Usmerjanje, transformacija, avtentikacija, avtorizacija, omejevanje hitrosti in uveljavljanje politik.',
        },
        {
          title: 'Sloj Business API',
          text: 'Ponovno uporabni Business API-ji, ki izpostavljajo nadzorovane poslovne zmožnosti vsem porabnikom.',
        },
        {
          title: 'Sloj dogodkov in sporočanja',
          text: 'Tokovi dogodkov na osnovi Kafke in NATS za asinhrono in razklopljeno integracijo.',
        },
        {
          title: 'Sloj workflowov',
          text: 'Temporal, Camunda ali podobni pogoni, ki orkestrirajo deterministične poslovne procese.',
        },
        {
          title: 'Sloj MCP in orodij agentov',
          text: 'MCP orodja in agentom dostopni API-ji, ki varno izpostavljajo zmožnosti AI agentom.',
        },
        {
          title: 'Porabniki API-jev',
          text: 'Spletne in mobilne aplikacije, partnerji, zunanji razvijalci, workflowi in AI agenti.',
        },
        {
          title: 'Sloj opazljivosti sistemov in upravljanja',
          text: 'Metrike, dnevniki, sledi, korelacijski ID-ji, analitika uporabe in revizijske sledi po vsem ekosistemu.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Kje API ekosistemi in integracije ustvarjajo vrednost',
      intro:
        'API ekosistemi in integracije ustvarjajo vrednost povsod, kjer morajo organizacije povezati kompleksne sisteme, sodelovati s partnerji ali v velikem obsegu izpostaviti ponovno uporabne zmožnosti.',
      columns: 3,
      variant: 'tag',
      items: [
        {
          title: 'Enterprise upravljanje API-jev',
          text: 'Upravljan temelj za izpostavljanje, varovanje, spremljanje in nadzor API-jev po vsej organizaciji.',
          meta: 'Katalog API-jev, razvijalski portal, gateway, nadzor dostopa, življenjski cikel API-jev, analitika uporabe',
        },
        {
          title: 'Partnerski API ekosistem',
          text: 'Partnerski API-ji, oblikovani kot produkti, z varnim vključevanjem, dokumentacijo in preglednostjo uporabe za API ekonomijo.',
          meta: 'Partnerski API-ji, sandbox okolja, naročnine, dokumentacija API-jev, preglednost uporabe, API ekonomija',
        },
        {
          title: 'Ponovno uporaben sloj Business API',
          text: 'Nadzorovan sloj zmožnosti, ki abstrahira backend in standardizira poslovno vedenje med porabniki.',
          meta: 'Business API-ji, modeliranje zmožnosti, abstrakcija backenda, upravljanje API-jev, API-ji za workflowe',
        },
        {
          title: 'Enterprise integracijska platforma',
          text: 'Integracijska arhitektura, ki združuje API-je, dogodke in konektorje v kompleksnih enterprise okoljih.',
          meta: 'Integracijska arhitektura, API-ji, dogodkovna integracija, konektorji, Kafka, NATS, opazljivost sistemov',
        },
        {
          title: 'API sloj, pripravljen za AI agente',
          text: 'API sloj, pripravljen za varno uporabo AI agentov prek tool-safe načrtovanja in nadzora gatewaya.',
          meta: 'Agentom dostopni API-ji, MCP orodja, nadzor gatewaya, tool-safe načrtovanje API-jev, sledljivost',
        },
        {
          title: 'API ekosistem z workflowi',
          text: 'API-ji in Business API-ji, povezani z workflow pogoni kot service taski s polnimi revizijskimi sledmi.',
          meta: 'Temporal, Camunda, workflow API-ji, Business API-ji, service taski, revizijske sledi',
        },
        {
          title: 'Omogočanje API-jev za podedovane sisteme',
          text: 'Ovijanje podedovanih sistemov z API-ji in adapterji za modernizacijo integracije brez motečih prepisov.',
          meta: 'Ovijanje podedovanih sistemov, omogočanje API-jev, integracijski adapterji, varnost, upravljanje življenjskega cikla',
        },
      ],
    },
    {
      type: 'steps',
      title: 'Kako dostavljamo API ekosisteme in integracije',
      items: [
        {
          title: 'Ocenimo API in integracijsko okolje',
          text: 'Pregledamo obstoječe API-je, integracije, sisteme in težave, da razumemo trenutno stanje in priložnosti za izboljšave.',
        },
        {
          title: 'Opredelimo API strategijo in model upravljanja',
          text: 'Določimo, kako se API-ji načrtujejo, kdo jih ima v lasti ter kako se verzionirajo, varujejo in nadzorujejo med ekipami in domenami.',
        },
        {
          title: 'Načrtujemo ciljno integracijsko arhitekturo',
          text: 'Načrtujemo ciljno arhitekturo, ki povezuje API-je, Business API-je, dogodke, gateway, workflowe in opazljivost sistemov.',
        },
        {
          title: 'Implementiramo temelj upravljanja API-jev',
          text: 'Vzpostavimo katalog API-jev, razvijalski portal, gateway, nadzor dostopa in upravljanje življenjskega cikla.',
        },
        {
          title: 'Gradimo API-je, Business API-je in konektorje',
          text: 'Implementiramo API-je, ponovno uporabne Business API-je in integracijske konektorje, ki jih ekosistem potrebuje.',
        },
        {
          title: 'Pripravimo za partnerje, workflowe in AI agente',
          text: 'Omogočimo vključevanje partnerjev, integracijo workflowov in uporabo API-jev, pripravljeno za AI agente.',
        },
        {
          title:
            'Dodamo opazljivost sistemov in upravljanje življenjskega cikla',
          text: 'Instrumentiramo spremljanje, sledenje, analitiko uporabe, verzioniranje in revizijske sledi po vsem ekosistemu.',
        },
        {
          title: 'Upravljamo, razvijamo in skaliramo',
          text: 'Podpiramo obratovanje, nenehni razvoj in skaliranje API ekosistema skozi čas.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Tehnološka ekspertiza',
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'API arhitektura',
          text: 'REST, dogodkovni API-ji, OpenAPI in upravljanje API-jev.',
        },
        {
          title: 'Upravljanje API-jev',
          text: 'Katalogi, razvijalski portali, gatewayi, naročnine in spremljanje.',
        },
        {
          title: 'Integracija',
          text: 'Enterprise integracijski vzorci, konektorji, ovijanje podedovanih sistemov, oblačne in partnerske integracije.',
        },
        {
          title: 'Dogodki in sporočanje',
          text: 'Kafka, NATS, pub/sub, request-reply in usmerjanje dogodkov.',
        },
        {
          title: 'Komunikacija storitev',
          text: 'REST, gRPC, prevajanje protokolov in gateway vzorci.',
        },
        {
          title: 'Identiteta in varnost',
          text: 'OAuth2, OIDC, Keycloak, Microsoft Entra ID, obsegi in politike.',
        },
        {
          title: 'Integracija workflowov',
          text: 'Temporal, Camunda, service taski in orkestracija procesov.',
        },
        {
          title: 'Pripravljenost za AgenticAI',
          text: 'MCP orodja, agentom dostopni API-ji, tool-safe pogodbe in integracija s KumuluzAI.',
        },
        {
          title: 'Opazljivost sistemov',
          text: 'Metrike, dnevniki, sledi, korelacijski ID-ji in analitika uporabe API-jev.',
        },
        {
          title: 'Kumuluz platforme',
          text: 'Kumuluz API, Business API-ji, Digital Platform in KumuluzAI.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'API ekosistemi in integracije v praksi',
      columns: 3,
      cta: 'Oglejte si reference',
      ctaHref: 'references/',
      variant: 'feature',
      items: [
        {
          label: 'Referenca',
          title: 'Inorma — Zavarovalna skupina Sava',
          text: 'Enterprise integracijska platforma, ki povezuje sisteme v zavarovalni skupini ter omogoča ponovno uporabne integracije in nadzorovane tokove podatkov.',
        },
        {
          label: 'Referenca',
          title: 'KYC — NLB',
          text: 'Digitalni KYC in integracije, ki podpirajo skladnost in onboarding strank med bančnimi sistemi.',
        },
        {
          label: 'Referenca',
          title: 'NLB Klik',
          text: 'Rešitev za digitalno bančništvo z razvojem frontenda in backenda ter integracijami med osrednjimi bančnimi sistemi.',
        },
        {
          label: 'Referenca',
          title: 'EPUS — Plinovodi',
          text: 'Poslovno kritična platforma za energetsko infrastrukturo, ki povezuje workflowe in integracije med enterprise sistemi.',
        },
        {
          label: 'Referenca',
          title: 'CUPID',
          text: 'Odprtokodni nabor orodij za interoperabilnost v energetiki pri LF Energy, ki omogoča povezovanje DER prek skupnih, nadzorovanih integracij.',
        },
        {
          label: 'Referenca',
          title: 'Kumuluz API',
          text: 'Platforma za upravljanje API-jev in API ekonomijo za izpostavljanje, varovanje, spremljanje in nadzor API-jev med ekipami, partnerji, aplikacijami in AI agenti.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'Zakaj Sunesis za API ekosisteme in integracije',
      items: [
        {
          title: 'Razumemo realnost enterprise integracij',
          text: 'Delujemo v kompleksnih okoljih sodobnih sistemov, podedovanih platform, partnerjev in zunanjih storitev.',
        },
        {
          title: 'Združujemo API strategijo z implementacijo',
          text: 'Opredelimo API strategijo in upravljanje ter nato zgradimo API-je, Business API-je in integracije, ki jih udejanjijo.',
        },
        {
          title: 'Prinašamo zmožnost upravljanja API-jev',
          text: 'Dostavimo kataloge, razvijalske portale, gatewaye, nadzor dostopa in upravljanje življenjskega cikla.',
        },
        {
          title: 'Načrtujemo ponovno uporabne Business API-je',
          text: 'Ponavljajočo se poslovno funkcionalnost izpostavimo kot nadzorovane, ponovno uporabne zmožnosti po vsej organizaciji.',
        },
        {
          title: 'Podpiramo dogodkovne in API-first arhitekture',
          text: 'Sinhrone API-je združujemo z dogodkovnimi vzorci Kafke in NATS za odporno integracijo.',
        },
        {
          title: 'Pripravimo API-je za AgenticAI',
          text: 'API-je naredimo agentom dostopne in tool-safe, z nadzorom gatewaya in mejami s človeško odobritvijo.',
        },
        {
          title: 'Gradimo za produkcijo',
          text: 'Dostavimo varne, opazljive in nadzorovane API ekosisteme, zgrajene za zanesljivo delovanje v velikem obsegu.',
        },
      ],
    },
    {
      type: 'finalCta',
      title: 'Potrebujete nadzorovan API ekosistem?',
      body: [
        'Ne glede na to, ali ustvarjate temelj za upravljanje API-jev, izpostavljate partnerske API-je, modernizirate integracije, gradite ponovno uporabne Business API-je ali pripravljate API-je za AI agente, vam Sunesis pomaga načrtovati, zgraditi in upravljati varen ter nadzorovan API ekosistem.',
        'Začnite s preglednostjo in upravljanjem API-jev, nato pa se razvijajte proti partnerskim ekosistemom, avtomatizaciji workflowov in API-jem, pripravljenim za AgenticAI.',
      ],
      primaryCta: 'Pogovorite se z našimi API strokovnjaki',
      secondaryCta: 'Raziščite naše ekspertize',
    },
  ],
}

export const apiEcosystemsIntegrationsPage: Record<
  LanguageCode,
  ExpertisePageContent
> = {
  en,
  sl,
}
