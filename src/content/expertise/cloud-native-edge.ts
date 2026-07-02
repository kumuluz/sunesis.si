import type { LanguageCode } from '../../lib/router'
import type { ExpertisePageContent } from '../../views/expertise/types'

const en: ExpertisePageContent = {
  seo: {
    title:
      'Cloud-native & Edge Architectures | Kubernetes, OpenShift, Azure, Google Cloud and Edge | Sunesis',
    description:
      'Sunesis designs cloud-native, microservice, API-first, event-driven, AI-agent-ready and edge architectures using Kubernetes, OpenShift, Azure, Google Cloud, Kafka, NATS, gRPC, OpenTelemetry and modern security patterns.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Cloud-native & Edge Architectures',
    title:
      'Design architectures that scale, integrate, evolve and operate reliably',
    body: [
      'Sunesis helps organizations design, modernize and build scalable software architectures using microservices, APIs, event-driven systems, Kubernetes, OpenShift, Microsoft Azure, Google Cloud and edge-fog-cloud concepts, combining enterprise architecture, cloud-native engineering, integration, security-by-design, observability and DevOps.',
      'Our architectures prepare digital platforms for the next generation of enterprise systems — where applications, APIs, workflows, data services and AI agents work together safely.',
    ],
    primaryCta: 'Talk to our architects',
    secondaryCta: 'Explore our expertise',
    trustLine:
      'Built for complex enterprise environments where architecture, scalability, integration, security, observability and long-term maintainability matter.',
  },
  sections: [
    {
      type: 'split',
      title: 'Architecture that lets your digital business evolve',
      body: [
        'Modern systems must change quickly, integrate with other systems, scale on demand and operate across distributed environments. Monolithic and tightly coupled architectures slow delivery, make integration painful and limit the ability to adopt new capabilities.',
        'Sunesis helps organizations move toward modular, API-driven, event-enabled, cloud-ready, observable and secure architectures — designed to evolve rather than be rebuilt.',
        'We support the full journey: from architecture assessment to a clear target architecture, and on to cloud-native delivery and edge-fog-cloud scenarios where workloads run closer to data.',
      ],
      quote:
        'Cloud-native architecture is not only about containers. It is about building secure, observable and integration-ready platforms that can support digital products, workflows, APIs and AI-enabled services.',
    },
    {
      type: 'capabilities',
      title: 'What we design and build',
      intro:
        'We help organizations modernize software, integrate systems, achieve scalability and build platforms that can evolve over time — combining enterprise architecture with hands-on cloud-native engineering.',
      items: [
        {
          title: 'Cloud-native architectures',
          text: 'Containerized, scalable and resilient architectures designed for modern platforms and continuous delivery.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Containerized workloads',
            'Kubernetes and OpenShift deployment',
            'Scalable and resilient design',
            'Observability by design',
            'API-first and event-enabled foundations',
          ],
        },
        {
          title: 'Microservices architecture',
          text: 'Well-bounded services with clear ownership, contracts and resilience, decomposed around business domains.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Service decomposition',
            'Domain-driven boundaries',
            'Data ownership patterns',
            'Resilience patterns, retries and circuit breakers',
            'APIs and events as contracts',
          ],
        },
        {
          title: 'Kubernetes and OpenShift architecture',
          text: 'Production-grade platform and application architecture on Kubernetes and OpenShift, with secure and consistent delivery.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Kubernetes and OpenShift application architecture',
            'Container orchestration',
            'Helm, GitOps and environment strategy',
            'Workload security',
            'Multi-cluster and hybrid',
          ],
        },
        {
          title: 'API-first architecture',
          text: 'APIs designed as first-class contracts that connect applications, partners, workflows and AI agents under control.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'API strategy and design',
            'REST APIs',
            'Event-driven APIs',
            'OAuth2 and OIDC access control',
            'Agent-ready and tool-safe APIs',
            'Gateway control',
          ],
        },
        {
          title: 'Event-driven and real-time architectures',
          text: 'Decoupled, scalable and traceable systems built around events, streaming and asynchronous messaging.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Kafka-based architectures',
            'NATS messaging',
            'Pub/sub and request-reply',
            'Integration decoupling',
            'Event traceability',
          ],
        },
        {
          title: 'High-performance service communication with gRPC',
          text: 'Efficient, contract-first communication between services, including streaming and edge scenarios.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'gRPC service design',
            'Contract-first communication',
            'Streaming',
            'Internal microservice communication',
            'gRPC in edge environments',
          ],
        },
        {
          title: 'Workflow-ready architectures',
          text: 'Architectures that integrate deterministic workflow engines for long-running and human-approved processes.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Temporal and Camunda integration',
            'Service tasks',
            'Long-running processes',
            'Human approval flows',
            'Business APIs as workflow capabilities',
          ],
        },
        {
          title: 'AI-agent-ready service architecture',
          text: 'Service and API architectures that allow AI agents to act safely through controlled, governed capabilities.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Tool-safe APIs',
            'MCP-oriented integration',
            'Business APIs as agent capabilities',
            'API gateway and policy control',
            'KumuluzAI integration patterns',
          ],
        },
        {
          title: 'Enterprise identity and security architecture',
          text: 'Identity, authorization and zero-trust patterns built into the architecture from the start.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'OAuth2 and OIDC',
            'Keycloak',
            'Microsoft Entra ID',
            'Identity propagation',
            'Zero-trust and mTLS',
          ],
        },
        {
          title: 'Observability and enterprise logging architecture',
          text: 'End-to-end visibility across services, APIs, events and workflows through instrumentation, tracing and audit logging.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'OpenTelemetry instrumentation',
            'Distributed tracing',
            'Metrics and monitoring',
            'Enterprise audit logging',
            'Correlation IDs',
            'Instana APM',
          ],
        },
        {
          title: 'Edge-fog-cloud continuum',
          text: 'Distributed architectures that bring processing closer to data, with low latency and edge-to-cloud communication.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Edge, fog and cloud architecture',
            'Distributed data processing',
            'Edge-to-cloud communication',
            'IoT integration',
            'Low-latency local processing',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Cloud, hybrid and multi-cloud architecture',
      body: [
        'We design architectures for major cloud platforms and for hybrid and multi-cloud environments, balancing platform capabilities with portability, neutrality and long-term flexibility.',
      ],
      columns: 2,
      variant: 'feature',
      items: [
        {
          label: 'Cloud platform',
          title: 'Microsoft Azure',
          text: 'Azure architecture, AKS, Azure DevOps, Microsoft Entra ID and hybrid patterns for enterprise workloads.',
        },
        {
          label: 'Cloud platform',
          title: 'Google Cloud',
          text: 'GCP architecture, GKE, data and integration services and cloud-native modernization.',
        },
        {
          label: 'Platform',
          title: 'Kubernetes and OpenShift platforms',
          text: 'Containerized workloads, GitOps delivery and multi-cluster operations on Kubernetes and OpenShift.',
        },
        {
          label: 'Strategy',
          title: 'Hybrid and multi-cloud',
          text: 'Workload portability, provider-neutral architecture, exit-strategy awareness and consistent identity, security and observability across providers.',
        },
      ],
    },
    {
      type: 'prose',
      title: 'Modernizing monoliths and legacy architectures',
      body: [
        'Most organizations do not need a risky rewrite. They need a gradual evolution from monolithic and legacy systems toward modular, API-enabled, event-driven, observable and cloud-ready architectures.',
        'Sunesis helps reduce risk by modernizing incrementally — preserving what works, exposing capabilities through APIs and events, and preparing systems for AI through approved, controlled capabilities.',
      ],
    },
    {
      type: 'list',
      title: 'Modernization approaches',
      items: [
        'Architecture assessment',
        'API enablement',
        'Modularization',
        'Strangler pattern',
        'Cloud-native enablement',
        'Event-driven evolution',
        'Workflow boundaries',
        'Security modernization',
        'Observability modernization',
        'AI-agent-ready exposure',
      ],
    },
    {
      type: 'list',
      title: 'Architecture built for integration',
      body: [
        'Modern architecture is integration architecture. Systems must connect data, processes, channels, partners and increasingly AI agents — securely and reliably.',
        'We design integration into the architecture so that systems communicate through clear contracts, controlled access and full visibility across distributed flows.',
      ],
      items: [
        'API-first system design',
        'Event-driven integration',
        'Kafka and event streaming',
        'NATS-based messaging',
        'gRPC for internal communication',
        'Secure integration with core systems',
        'Integration with workflow engines',
        'Business APIs and reusable capabilities',
        'Agent-ready APIs and controlled tool exposure',
        'Observability across distributed flows',
        'Identity and authorization across integration flows',
      ],
    },
    {
      type: 'cards',
      title: 'Security built into the architecture',
      body: [
        'Security is a design concern, not an add-on. We build identity, authorization, platform security and zero-trust patterns into the architecture from the start.',
      ],
      columns: 2,
      variant: 'check',
      items: [
        {
          title: 'Identity and access',
          text: 'OAuth2, OIDC, Keycloak, Microsoft Entra ID, identity propagation and RBAC across services and APIs.',
        },
        {
          title: 'API and service security',
          text: 'Authentication, authorization and policy enforcement applied consistently across APIs and service communication.',
        },
        {
          title: 'Platform security',
          text: 'Kubernetes and OpenShift security, network policies and secrets management for workloads.',
        },
        {
          title: 'Zero-trust patterns',
          text: 'Least privilege, mTLS and policy-based access between services and across distributed environments.',
        },
        {
          title: 'Workflow and automation security',
          text: 'Secure execution of workflows, service tasks and automated actions under identity and policy control.',
        },
        {
          title: 'AgenticAI security readiness',
          text: 'Controlled, tool-safe capabilities and gateway control so AI agents can act safely within the architecture.',
        },
        {
          title: 'Auditability',
          text: 'Enterprise audit logging that records what happened across services, APIs, events and workflows.',
        },
        {
          title: 'Governance',
          text: 'Policy-based access and traceability that keep distributed systems controlled and accountable.',
        },
      ],
    },
    {
      type: 'list',
      title: 'Designed for reliable and observable operation',
      body: [
        'Distributed architectures are only valuable if they can be operated reliably. We design observability, resilience and production readiness into the architecture so teams can see, understand and trust what is happening.',
      ],
      items: [
        'OpenTelemetry instrumentation',
        'Distributed tracing across services, APIs, events and workflows',
        'Metrics monitoring and alerting',
        'Enterprise audit logging',
        'Instana APM',
        'Correlation IDs and end-to-end visibility',
        'Service health and readiness',
        'Resilience patterns',
        'Rate limiting and backpressure',
        'SLO and production readiness',
        'Observability for AI-agent interactions',
      ],
    },
    {
      type: 'cards',
      title: 'Prepare cloud-native platforms for AgenticAI',
      body: [
        'Cloud-native architecture is the foundation for safe AI. We design platforms where AI agents act through controlled, governed and observable capabilities rather than direct backend access.',
      ],
      columns: 3,
      items: [
        {
          title: 'Tool-safe APIs',
          text: 'APIs designed so that AI agents can call them safely, with clear boundaries on what they can do.',
        },
        {
          title: 'MCP-oriented tools',
          text: 'Capabilities exposed as MCP-oriented tools that agents can use within a controlled integration model.',
        },
        {
          title: 'Business APIs',
          text: 'Reusable business capabilities that agents, digital products and workflows can call as governed tools.',
        },
        {
          title: 'Workflow boundaries',
          text: 'Clear separation between AI reasoning and deterministic workflow execution for process-critical steps.',
        },
        {
          title: 'Gateway control',
          text: 'API gateway and policy enforcement applied to agent requests for authentication, control and logging.',
        },
        {
          title: 'Auditability',
          text: 'Visibility and audit trails for AI-agent interactions across APIs, tools and workflows.',
        },
      ],
    },
    {
      type: 'prose',
      title: 'From cloud-native to edge-native',
      body: [
        'Intelligence is moving closer to data. Edge and fog computing enable faster response, greater resilience and new AI-enabled applications that cannot depend on a round trip to the cloud.',
        'Sunesis connects cloud, edge and IoT into a coherent edge-fog-cloud continuum, with architectures strengthened by our research in distributed and AI-native systems.',
      ],
    },
    {
      type: 'list',
      title: 'Edge architecture scenarios',
      items: [
        'IoT and sensor-based systems',
        'Distributed AI and data processing',
        'Cloud-edge orchestration',
        'Energy-aware computing',
        'Low-latency digital services',
        'Industrial and smart infrastructure',
        'Data locality and sovereignty',
        'Lightweight messaging across distributed environments',
        'Observability across edge',
        'AI-ready data processing at the edge',
      ],
    },
    {
      type: 'kumuluz',
      title: 'Accelerated by Kumuluz cloud-native foundations',
      body: [
        'Sunesis has a long history of building cloud-native, microservice and API-based systems through the Kumuluz product family, gained across demanding enterprise projects.',
        'The Kumuluz Digital Platform and its components provide proven foundations for API-first, microservice, workflow-ready and AI-agent-ready development — informing how we design open, modular, cloud-native and observable architectures for our clients.',
      ],
      items: [
        {
          label: 'Foundation',
          title: 'Kumuluz Digital Platform',
          text: 'Open, lightweight engineering foundation for cloud-native, microservice and API-based development.',
        },
        {
          label: 'API management',
          title: 'Kumuluz API',
          text: 'API management and gateway platform for exposing, securing, monitoring and governing APIs.',
        },
        {
          label: 'Capabilities',
          title: 'Kumuluz Business APIs',
          text: 'Reusable business capabilities for digital products, workflows and AI agents.',
        },
        {
          label: 'AI platform',
          title: 'KumuluzAI Platform',
          text: 'Governed AgenticAI platform for agents, assistants, tool use, model routing and auditability.',
        },
      ],
      cta: 'Explore Kumuluz platforms',
      ctaHref: 'kumuluz/',
    },
    {
      type: 'cards',
      title: 'Research-driven expertise in cloud-edge systems',
      eyebrow: 'Research & Innovation',
      columns: 3,
      cta: 'Explore Research & Innovation Projects',
      ctaHref: 'references/research-innovation/',
      variant: 'feature',
      items: [
        {
          label: 'Research & Innovation',
          title: 'Headlight / NEPHELE',
          text: 'AI-enabled, context-aware orchestration for the compute continuum across edge, fog and cloud.',
        },
        {
          label: 'Research & Innovation',
          title: 'EDGEWISE / dAIEDGE',
          text: 'AI-native orchestration for trustworthy, energy-efficient IoT–Edge–Fog–Cloud environments.',
        },
        {
          label: 'Research & Innovation',
          title: 'AURORA / HEDGE-IoT',
          text: 'Intelligent IoT, edge computing and energy-aware infrastructure for distributed systems.',
        },
        {
          label: 'Research & Innovation',
          title: 'CHAMELEON / Resilmesh',
          text: 'Adaptive Kubernetes resilience and cybersecurity through a mesh-based approach.',
        },
        {
          label: 'Research & Innovation',
          title: 'BONSAI / COSMIC',
          text: 'Advanced cloud-edge-IoT systems and intelligent infrastructure for next-generation platforms.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'How we approach architecture work',
      items: [
        {
          title: 'Understand the business and system landscape',
          text: 'We study business goals, existing systems, integrations, constraints and operational realities before proposing change.',
        },
        {
          title: 'Define the target architecture',
          text: 'We establish a clear target architecture that balances scalability, integration, security, observability and maintainability.',
        },
        {
          title: 'Identify service, API, event and workflow boundaries',
          text: 'We define how the system decomposes into services, APIs, events and deterministic workflow boundaries.',
        },
        {
          title: 'Design for security, observability and operations',
          text: 'We build identity, authorization, zero-trust, tracing and audit logging into the architecture from the start.',
        },
        {
          title: 'Prepare for AgenticAI where relevant',
          text: 'We expose tool-safe APIs, Business APIs and gateway-controlled capabilities so AI agents can act safely.',
        },
        {
          title: 'Implement iteratively',
          text: 'We deliver in controlled increments, validating value and reducing risk at each step.',
        },
        {
          title: 'Support evolution',
          text: 'We design architectures to evolve — adding services, integrations, workflows and capabilities over time.',
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
          title: 'Cloud platforms',
          text: 'Microsoft Azure, Google Cloud, hybrid and multi-cloud architecture.',
        },
        {
          title: 'Container platforms',
          text: 'Kubernetes, OpenShift, Helm and GitOps delivery.',
        },
        {
          title: 'Architecture patterns',
          text: 'Cloud-native, microservices, API-first, event-driven, cloud-edge and workflow-ready patterns.',
        },
        {
          title: 'Integration and communication',
          text: 'REST, event-driven APIs, Kafka, NATS and gRPC.',
        },
        {
          title: 'Workflow orchestration',
          text: 'Temporal, Camunda, retries and compensation patterns.',
        },
        {
          title: 'AgenticAI readiness',
          text: 'Tool-safe APIs, MCP-oriented tools, Business APIs and KumuluzAI.',
        },
        {
          title: 'Identity and security',
          text: 'OAuth2, OIDC, Keycloak, Microsoft Entra ID, mTLS and zero-trust.',
        },
        {
          title: 'Observability and operations',
          text: 'OpenTelemetry, Instana, tracing, metrics, audit logging and SLOs.',
        },
        {
          title: 'Edge and distributed systems',
          text: 'IoT, edge-fog-cloud continuum and energy-aware computing.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Cloud-native and integration architecture in practice',
      eyebrow: 'Reference',
      columns: 3,
      cta: 'Explore our references',
      ctaHref: 'references/',
      variant: 'feature',
      items: [
        {
          label: 'Reference',
          title: 'Inorma — Zavarovalniška skupina Sava',
          text: 'An enterprise integration platform connecting systems and processes across an insurance group.',
        },
        {
          label: 'Reference',
          title: 'NLB Klik',
          text: 'A digital banking solution spanning frontend and backend, built for scale, security and reliability.',
        },
        {
          label: 'Reference',
          title: 'EPUS — Plinovodi',
          text: 'A business-critical platform for energy infrastructure and operational workflows.',
        },
        {
          label: 'Reference',
          title: 'Flare',
          text: 'DevOps and platform engineering for large-scale blockchain infrastructure.',
        },
        {
          label: 'Reference',
          title: 'Kumuluz Digital Platform',
          text: 'An open, lightweight digital platform for cloud-native, microservice, API-based and workflow-ready development.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'Why Sunesis for cloud-native and edge architectures',
      items: [
        {
          title: 'Architecture and engineering in one team',
          text: 'We do not just draw diagrams — we design and build the systems we architect.',
        },
        {
          title: 'Deep integration expertise',
          text: 'We connect systems, data, processes, partners and AI through APIs, events and messaging.',
        },
        {
          title: 'Strong Kubernetes and OpenShift background',
          text: 'Production experience with containerized platforms, GitOps and multi-cluster operations.',
        },
        {
          title: 'Enterprise security awareness',
          text: 'Identity, authorization, zero-trust and auditability built into every architecture.',
        },
        {
          title: 'Production observability expertise',
          text: 'OpenTelemetry, Instana, tracing, metrics and audit logging for reliable operations.',
        },
        {
          title: 'Azure and Google Cloud knowledge',
          text: 'Hands-on architecture and delivery on Microsoft Azure and Google Cloud.',
        },
        {
          title: 'Workflow and AgenticAI readiness',
          text: 'Architectures prepared for deterministic workflows and safe AI-agent execution.',
        },
        {
          title: 'Research-backed edge expertise',
          text: 'Edge-fog-cloud and AI-native systems strengthened by active research and innovation projects.',
        },
      ],
    },
    {
      type: 'finalCta',
      title: 'Need an architecture that can evolve with your digital business?',
      body: [
        'Whether you are modernizing systems, building a cloud-native platform, introducing APIs and events, strengthening identity and security, improving observability, preparing for AgenticAI or exploring edge-fog-cloud, Sunesis can help you design and implement a scalable, secure, future-ready architecture.',
      ],
      primaryCta: 'Talk to our architects',
      secondaryCta: 'Explore our expertise',
    },
  ],
}

const sl: ExpertisePageContent = {
  seo: {
    title:
      'Cloud-native in edge arhitekture | Kubernetes, OpenShift, Azure, Google Cloud in edge | Sunesis',
    description:
      'Sunesis načrtuje cloud-native, mikrostoritvene, API-first, dogodkovne, za AI agente pripravljene in edge arhitekture z uporabo Kubernetes, OpenShift, Azure, Google Cloud, Kafka, NATS, gRPC, OpenTelemetry in sodobnih varnostnih vzorcev.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Cloud-native in edge arhitekture',
    title:
      'Načrtujte arhitekture, ki se skalirajo, povezujejo, razvijajo in zanesljivo delujejo',
    body: [
      'Sunesis organizacijam pomaga načrtovati, posodabljati in graditi skalabilne programske arhitekture z mikrostoritvami, API-ji, dogodkovnimi sistemi, Kubernetes, OpenShift, Microsoft Azure, Google Cloud in koncepti edge-fog-cloud — pri čemer združuje enterprise arhitekturo, cloud-native inženiring, integracijo, vgrajeno varnost, opazljivost sistemov in DevOps.',
      'Naše arhitekture pripravljajo digitalne platforme na naslednjo generacijo enterprise sistemov — kjer aplikacije, API-ji, workflowi, podatkovne storitve in AI agenti varno sodelujejo.',
    ],
    primaryCta: 'Pogovorite se z našimi arhitekti',
    secondaryCta: 'Raziščite naše ekspertize',
    trustLine:
      'Zgrajeno za kompleksna enterprise okolja, kjer štejejo arhitektura, skalabilnost, integracija, varnost, opazljivost sistemov in dolgoročna vzdržljivost.',
  },
  sections: [
    {
      type: 'split',
      title: 'Arhitektura, ki vašemu digitalnemu poslovanju omogoča razvoj',
      body: [
        'Sodobni sistemi se morajo hitro spreminjati, povezovati z drugimi sistemi, skalirati po potrebi in delovati v porazdeljenih okoljih. Monolitne in tesno sklopljene arhitekture upočasnjujejo dostavo, otežujejo integracijo in omejujejo uvajanje novih zmožnosti.',
        'Sunesis organizacijam pomaga preiti k modularnim, API-vodenim, dogodkovnim, za oblak pripravljenim, opazljivim in varnim arhitekturam — zasnovanim za razvoj namesto za ponovno gradnjo.',
        'Podpiramo celotno pot: od ocene arhitekture do jasne ciljne arhitekture in naprej do cloud-native dostave ter scenarijev edge-fog-cloud, kjer obremenitve tečejo bliže podatkom.',
      ],
      quote:
        'Cloud-native arhitektura ni le vprašanje kontejnerjev. Gre za gradnjo varnih, opazljivih in za integracijo pripravljenih platform, ki lahko poganjajo digitalne produkte, workflowe, API-je in AI storitve.',
    },
    {
      type: 'capabilities',
      title: 'Kaj načrtujemo in gradimo',
      intro:
        'Organizacijam pomagamo posodobiti programsko opremo, povezati sisteme, doseči skalabilnost in graditi platforme, ki se razvijajo skozi čas — pri čemer združujemo enterprise arhitekturo s praktičnim cloud-native inženiringom.',
      items: [
        {
          title: 'Cloud-native arhitekture',
          text: 'Kontejnerizirane, skalabilne in odporne arhitekture, zasnovane za sodobne platforme in neprekinjeno dostavo.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Kontejnerizirane obremenitve',
            'Namestitev na Kubernetes in OpenShift',
            'Skalabilna in odporna zasnova',
            'Vgrajena opazljivost sistemov',
            'API-first in dogodkovni temelji',
          ],
        },
        {
          title: 'Mikrostoritvena arhitektura',
          text: 'Jasno razmejene storitve z določenim lastništvom, pogodbami in odpornostjo, razčlenjene okoli poslovnih domen.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Razčlenitev storitev',
            'Domensko vodene meje',
            'Vzorci lastništva podatkov',
            'Vzorci odpornosti, ponovni poskusi in circuit breakers',
            'API-ji in dogodki kot pogodbe',
          ],
        },
        {
          title: 'Arhitektura Kubernetes in OpenShift',
          text: 'Produkcijska platformna in aplikacijska arhitektura na Kubernetes in OpenShift z varno ter dosledno dostavo.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Aplikacijska arhitektura na Kubernetes in OpenShift',
            'Orkestracija kontejnerjev',
            'Helm, GitOps in strategija okolij',
            'Varnost obremenitev',
            'Multi-cluster in hibridna okolja',
          ],
        },
        {
          title: 'API-first arhitektura',
          text: 'API-ji, zasnovani kot prvorazredne pogodbe, ki nadzorovano povezujejo aplikacije, partnerje, workflowe in AI agente.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Strategija in načrtovanje API-jev',
            'REST API-ji',
            'Dogodkovni API-ji',
            'Nadzor dostopa z OAuth2 in OIDC',
            'Za agente pripravljeni in tool-safe API-ji',
            'Nadzor na prehodu (gateway)',
          ],
        },
        {
          title: 'Dogodkovne in realnočasovne arhitekture',
          text: 'Razklopljeni, skalabilni in sledljivi sistemi, zgrajeni okoli dogodkov, pretakanja in asinhronega sporočanja.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Arhitekture na osnovi Kafka',
            'Sporočanje z NATS',
            'Pub/sub in request-reply',
            'Razklop integracij',
            'Sledljivost dogodkov',
          ],
        },
        {
          title: 'Visokozmogljiva komunikacija med storitvami z gRPC',
          text: 'Učinkovita, contract-first komunikacija med storitvami, vključno s pretakanjem in edge scenariji.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Načrtovanje gRPC storitev',
            'Contract-first komunikacija',
            'Pretakanje',
            'Interna komunikacija med mikrostoritvami',
            'gRPC v edge okoljih',
          ],
        },
        {
          title: 'Za workflowe pripravljene arhitekture',
          text: 'Arhitekture, ki vključujejo deterministične workflow pogone za dolgotrajne procese in procese s človeško odobritvijo.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Integracija Temporal in Camunda',
            'Storitvene naloge (service tasks)',
            'Dolgotrajni procesi',
            'Procesi s človeško odobritvijo',
            'Business API-ji kot zmožnosti workflowa',
          ],
        },
        {
          title: 'Za AI agente pripravljena storitvena arhitektura',
          text: 'Storitvene in API arhitekture, ki AI agentom omogočajo varno delovanje prek nadzorovanih, upravljanih zmožnosti.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Tool-safe API-ji',
            'MCP integracija',
            'Business API-ji kot zmožnosti agentov',
            'Nadzor na API prehodu in nadzor politik',
            'Vzorci integracije s KumuluzAI',
          ],
        },
        {
          title: 'Enterprise arhitektura identitete in varnosti',
          text: 'Vzorci identitete, avtorizacije in zero-trust, vgrajeni v arhitekturo že od začetka.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'OAuth2 in OIDC',
            'Keycloak',
            'Microsoft Entra ID',
            'Propagacija identitete',
            'Zero-trust in mTLS',
          ],
        },
        {
          title: 'Arhitektura opazljivosti sistemov in enterprise beleženja',
          text: 'Celovit vpogled v storitve, API-je, dogodke in workflowe prek instrumentacije, sledenja in revizijskega beleženja.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Instrumentacija z OpenTelemetry',
            'Porazdeljeno sledenje',
            'Metrike in nadzor',
            'Enterprise revizijsko beleženje',
            'Korelacijski ID-ji',
            'Instana APM',
          ],
        },
        {
          title: 'Kontinuum edge-fog-cloud',
          text: 'Porazdeljene arhitekture, ki obdelavo približajo podatkom, z nizko latenco in komunikacijo od roba do oblaka.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Arhitektura edge, fog in cloud',
            'Porazdeljena obdelava podatkov',
            'Komunikacija od roba do oblaka',
            'Integracija z IoT',
            'Lokalna obdelava z nizko latenco',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Cloud, hibridna in multi-cloud arhitektura',
      body: [
        'Načrtujemo arhitekture za vodilne oblačne platforme ter za hibridna in multi-cloud okolja, pri čemer uravnotežimo zmožnosti platform s prenosljivostjo, neodvisnostjo od ponudnika in dolgoročno prožnostjo.',
      ],
      columns: 2,
      variant: 'feature',
      items: [
        {
          label: 'Oblačna platforma',
          title: 'Microsoft Azure',
          text: 'Azure arhitektura, AKS, Azure DevOps, Microsoft Entra ID in hibridni vzorci za enterprise obremenitve.',
        },
        {
          label: 'Oblačna platforma',
          title: 'Google Cloud',
          text: 'GCP arhitektura, GKE, podatkovne in integracijske storitve ter cloud-native posodobitev.',
        },
        {
          label: 'Platforma',
          title: 'Kubernetes in OpenShift',
          text: 'Kontejnerizirane obremenitve, GitOps dostava in multi-cluster delovanje na Kubernetes in OpenShift.',
        },
        {
          label: 'Strategija',
          title: 'Hibridna in multi-cloud okolja',
          text: 'Prenosljivost obremenitev, arhitektura, neodvisna od ponudnika, premišljena izhodna strategija ter dosledna identiteta, varnost in opazljivost sistemov med ponudniki.',
        },
      ],
    },
    {
      type: 'prose',
      title: 'Posodabljanje monolitov in zapuščinskih arhitektur',
      body: [
        'Večina organizacij ne potrebuje tveganega ponovnega razvoja od začetka. Potrebujejo postopen prehod od monolitnih in zapuščinskih sistemov k modularnim, API-omogočenim, dogodkovnim, opazljivim in za oblak pripravljenim arhitekturam.',
        'Sunesis pomaga zmanjšati tveganje s postopno posodobitvijo — ohranja, kar deluje, izpostavlja zmožnosti prek API-jev in dogodkov ter pripravlja sisteme na AI prek odobrenih, nadzorovanih zmožnosti.',
      ],
    },
    {
      type: 'list',
      title: 'Pristopi k posodobitvi',
      items: [
        'Ocena arhitekture',
        'Omogočanje API-jev',
        'Modularizacija',
        'Vzorec strangler',
        'Prehod na cloud-native',
        'Dogodkovni razvoj',
        'Meje workflowov',
        'Posodobitev varnosti',
        'Posodobitev opazljivosti sistemov',
        'Izpostavitev, pripravljena za AI agente',
      ],
    },
    {
      type: 'list',
      title: 'Arhitektura, zgrajena za integracijo',
      body: [
        'Sodobna arhitektura je integracijska arhitektura. Sistemi morajo povezovati podatke, procese, kanale, partnerje in vse bolj tudi AI agente — varno in zanesljivo.',
        'Integracijo načrtujemo v arhitekturo, tako da sistemi komunicirajo prek jasnih pogodb, nadzorovanega dostopa in popolnega vpogleda v porazdeljene tokove.',
      ],
      items: [
        'API-first načrtovanje sistemov',
        'Dogodkovna integracija',
        'Kafka in pretakanje dogodkov',
        'Sporočanje na osnovi NATS',
        'gRPC za interno komunikacijo',
        'Varna integracija z jedrnimi sistemi',
        'Integracija z workflow pogoni',
        'Business API-ji in ponovno uporabne zmožnosti',
        'Za agente pripravljeni API-ji in nadzorovana izpostavitev orodij',
        'Opazljivost sistemov skozi porazdeljene tokove',
        'Identiteta in avtorizacija skozi integracijske tokove',
      ],
    },
    {
      type: 'cards',
      title: 'Varnost, vgrajena v arhitekturo',
      body: [
        'Varnost je vprašanje zasnove, ne naknadni dodatek. Vzorce identitete, avtorizacije, platformne varnosti in zero-trust vgradimo v arhitekturo že od začetka.',
      ],
      columns: 2,
      variant: 'check',
      items: [
        {
          title: 'Identiteta in dostop',
          text: 'OAuth2, OIDC, Keycloak, Microsoft Entra ID, propagacija identitete in RBAC skozi storitve in API-je.',
        },
        {
          title: 'Varnost API-jev in storitev',
          text: 'Avtentikacija, avtorizacija in uveljavljanje politik, dosledno uporabljeni v API-jih in komunikaciji med storitvami.',
        },
        {
          title: 'Platformna varnost',
          text: 'Varnost Kubernetes in OpenShift, mrežne politike in upravljanje skrivnosti za obremenitve.',
        },
        {
          title: 'Zero-trust vzorci',
          text: 'Najmanjši privilegiji, mTLS in dostop na podlagi politik med storitvami in skozi porazdeljena okolja.',
        },
        {
          title: 'Varnost workflowov in avtomatizacije',
          text: 'Varna izvedba workflowov, storitvenih nalog in avtomatiziranih dejanj pod nadzorom identitete in politik.',
        },
        {
          title: 'Pripravljenost na varnost AgenticAI',
          text: 'Nadzorovane, tool-safe zmožnosti in nadzor na prehodu, da AI agenti lahko varno delujejo znotraj arhitekture.',
        },
        {
          title: 'Revizijska sledljivost',
          text: 'Enterprise revizijsko beleženje, ki zapisuje dogajanje skozi storitve, API-je, dogodke in workflowe.',
        },
        {
          title: 'Upravljanje (governance)',
          text: 'Dostop na podlagi politik in sledljivost, ki ohranjata porazdeljene sisteme nadzorovane in odgovorne.',
        },
      ],
    },
    {
      type: 'list',
      title: 'Zasnovano za zanesljivo in opazljivo delovanje',
      body: [
        'Porazdeljene arhitekture so vredne le, če jih je mogoče zanesljivo upravljati. Opazljivost sistemov, odpornost in produkcijsko pripravljenost načrtujemo v arhitekturo, da ekipe vidijo in razumejo dogajanje ter mu zaupajo.',
      ],
      items: [
        'Instrumentacija z OpenTelemetry',
        'Porazdeljeno sledenje skozi storitve, API-je, dogodke in workflowe',
        'Nadzor metrik in opozarjanje',
        'Enterprise revizijsko beleženje',
        'Instana APM',
        'Korelacijski ID-ji in celovit vpogled',
        'Zdravje in pripravljenost storitev',
        'Vzorci odpornosti',
        'Omejevanje hitrosti in backpressure',
        'SLO in produkcijska pripravljenost',
        'Opazljivost interakcij AI agentov',
      ],
    },
    {
      type: 'cards',
      title: 'Pripravite cloud-native platforme na AgenticAI',
      body: [
        'Cloud-native arhitektura je temelj za varen AI. Načrtujemo platforme, kjer AI agenti delujejo prek nadzorovanih, upravljanih in opazljivih zmožnosti namesto z neposrednim dostopom do backendov.',
      ],
      columns: 3,
      items: [
        {
          title: 'Tool-safe API-ji',
          text: 'API-ji, zasnovani tako, da jih AI agenti lahko varno kličejo, z jasnimi mejami glede tega, kaj lahko počnejo.',
        },
        {
          title: 'MCP orodja',
          text: 'Zmožnosti, izpostavljene kot MCP orodja, ki jih agenti uporabljajo znotraj nadzorovanega integracijskega modela.',
        },
        {
          title: 'Business API-ji',
          text: 'Ponovno uporabne poslovne zmožnosti, ki jih agenti, digitalni produkti in workflowi lahko kličejo kot nadzorovana orodja.',
        },
        {
          title: 'Meje workflowov',
          text: 'Jasna ločitev med AI sklepanjem in deterministično izvedbo workflowov za procesno kritične korake.',
        },
        {
          title: 'Nadzor na prehodu',
          text: 'API prehod in uveljavljanje politik, uporabljeni na zahtevah agentov za avtentikacijo, nadzor in beleženje.',
        },
        {
          title: 'Revizijska sledljivost',
          text: 'Vpogled in revizijske sledi za interakcije AI agentov skozi API-je, orodja in workflowe.',
        },
      ],
    },
    {
      type: 'prose',
      title: 'Od cloud-native do edge-native',
      body: [
        'Inteligenca se seli bliže podatkom. Edge in fog računalništvo omogočata hitrejši odziv, večjo odpornost in nove AI aplikacije, ki ne morejo biti odvisne od poti do oblaka in nazaj.',
        'Sunesis povezuje oblak, edge in IoT v skladen kontinuum edge-fog-cloud, z arhitekturami, podprtimi z našimi raziskavami porazdeljenih in AI-native sistemov.',
      ],
    },
    {
      type: 'list',
      title: 'Scenariji edge arhitekture',
      items: [
        'IoT in senzorski sistemi',
        'Porazdeljena AI in obdelava podatkov',
        'Orkestracija cloud-edge',
        'Energijsko učinkovito računalništvo',
        'Digitalne storitve z nizko latenco',
        'Industrijska in pametna infrastruktura',
        'Lokalnost in suverenost podatkov',
        'Lahko sporočanje skozi porazdeljena okolja',
        'Opazljivost na robu',
        'Za AI pripravljena obdelava podatkov na robu',
      ],
    },
    {
      type: 'kumuluz',
      title: 'Pospešeno s cloud-native temelji Kumuluz',
      body: [
        'Sunesis ima dolgo zgodovino gradnje cloud-native, mikrostoritvenih in na API-jih temelječih sistemov z družino produktov Kumuluz, pridobljeno skozi zahtevne enterprise projekte.',
        'Kumuluz Digital Platform in njene komponente zagotavljajo preverjene temelje za API-first, mikrostoritveni ter za workflowe in AI agente pripravljen razvoj — kar usmerja, kako za naše stranke načrtujemo odprte, modularne, cloud-native in opazljive arhitekture.',
      ],
      items: [
        {
          label: 'Temelj',
          title: 'Kumuluz Digital Platform',
          text: 'Odprt, lahek inženirski temelj za cloud-native, mikrostoritveni in na API-jih temelječ razvoj.',
        },
        {
          label: 'Upravljanje API-jev',
          title: 'Kumuluz API',
          text: 'Platforma za upravljanje API-jev in API prehod za izpostavljanje, varovanje, nadzor in upravljanje API-jev.',
        },
        {
          label: 'Zmožnosti',
          title: 'Kumuluz Business API-ji',
          text: 'Ponovno uporabne poslovne zmožnosti za digitalne produkte, workflowe in AI agente.',
        },
        {
          label: 'AI platforma',
          title: 'KumuluzAI Platform',
          text: 'Nadzorovana AgenticAI platforma za agente, asistente, uporabo orodij, usmerjanje modelov in revizijo.',
        },
      ],
      cta: 'Raziščite platforme Kumuluz',
      ctaHref: 'kumuluz/',
    },
    {
      type: 'cards',
      title: 'Z raziskavami podprto znanje o cloud-edge sistemih',
      eyebrow: 'Raziskave in inovacije',
      columns: 3,
      cta: 'Raziščite raziskovalne in inovacijske projekte',
      ctaHref: 'references/research-innovation/',
      variant: 'feature',
      items: [
        {
          label: 'Raziskave in inovacije',
          title: 'Headlight / NEPHELE',
          text: 'Z AI podprta, kontekstno zavedna orkestracija za računski kontinuum skozi edge, fog in cloud.',
        },
        {
          label: 'Raziskave in inovacije',
          title: 'EDGEWISE / dAIEDGE',
          text: 'AI-native orkestracija za zaupanja vredna in energijsko učinkovita okolja IoT–Edge–Fog–Cloud.',
        },
        {
          label: 'Raziskave in inovacije',
          title: 'AURORA / HEDGE-IoT',
          text: 'Inteligentni IoT, edge računalništvo in energijsko učinkovita infrastruktura za porazdeljene sisteme.',
        },
        {
          label: 'Raziskave in inovacije',
          title: 'CHAMELEON / Resilmesh',
          text: 'Prilagodljiva odpornost Kubernetes in kibernetska varnost preko pristopa na osnovi mreže (mesh).',
        },
        {
          label: 'Raziskave in inovacije',
          title: 'BONSAI / COSMIC',
          text: 'Napredni cloud-edge-IoT sistemi in inteligentna infrastruktura za platforme naslednje generacije.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'Kako pristopamo k arhitekturnemu delu',
      items: [
        {
          title: 'Razumeti poslovno in sistemsko okolje',
          text: 'Preučimo poslovne cilje, obstoječe sisteme, integracije, omejitve in operativne danosti, preden predlagamo spremembe.',
        },
        {
          title: 'Opredeliti ciljno arhitekturo',
          text: 'Vzpostavimo jasno ciljno arhitekturo, ki uravnoteži skalabilnost, integracijo, varnost, opazljivost sistemov in vzdržljivost.',
        },
        {
          title: 'Določiti meje storitev, API-jev, dogodkov in workflowov',
          text: 'Določimo, kako se sistem razčleni na storitve, API-je, dogodke in deterministične meje workflowov.',
        },
        {
          title: 'Načrtovati za varnost, opazljivost in delovanje',
          text: 'Identiteto, avtorizacijo, zero-trust, sledenje in revizijsko beleženje vgradimo v arhitekturo že od začetka.',
        },
        {
          title: 'Pripraviti na AgenticAI, kjer je to smiselno',
          text: 'Izpostavimo tool-safe API-je, Business API-je in na prehodu nadzorovane zmožnosti, da AI agenti lahko varno delujejo.',
        },
        {
          title: 'Implementirati iterativno',
          text: 'Dostavljamo v nadzorovanih korakih ter na vsakem koraku potrjujemo vrednost in zmanjšujemo tveganje.',
        },
        {
          title: 'Podpirati razvoj',
          text: 'Arhitekture načrtujemo za razvoj — za dodajanje storitev, integracij, workflowov in zmožnosti skozi čas.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Tehnološko znanje',
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'Oblačne platforme',
          text: 'Microsoft Azure, Google Cloud, hibridna in multi-cloud arhitektura.',
        },
        {
          title: 'Platforme za kontejnerje',
          text: 'Kubernetes, OpenShift, Helm in GitOps dostava.',
        },
        {
          title: 'Arhitekturni vzorci',
          text: 'Cloud-native, mikrostoritveni, API-first, dogodkovni, cloud-edge in za workflowe pripravljeni vzorci.',
        },
        {
          title: 'Integracija in komunikacija',
          text: 'REST, dogodkovni API-ji, Kafka, NATS in gRPC.',
        },
        {
          title: 'Orkestracija workflowov',
          text: 'Temporal, Camunda, ponovni poskusi in vzorci kompenzacije.',
        },
        {
          title: 'Pripravljenost na AgenticAI',
          text: 'Tool-safe API-ji, MCP orodja, Business API-ji in KumuluzAI.',
        },
        {
          title: 'Identiteta in varnost',
          text: 'OAuth2, OIDC, Keycloak, Microsoft Entra ID, mTLS in zero-trust.',
        },
        {
          title: 'Opazljivost sistemov in delovanje',
          text: 'OpenTelemetry, Instana, sledenje, metrike, revizijsko beleženje in SLO.',
        },
        {
          title: 'Edge in porazdeljeni sistemi',
          text: 'IoT, kontinuum edge-fog-cloud in energijsko ozaveščeno računalništvo.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Cloud-native in integracijska arhitektura v praksi',
      eyebrow: 'Referenca',
      columns: 3,
      cta: 'Oglejte si reference',
      ctaHref: 'references/',
      variant: 'feature',
      items: [
        {
          label: 'Referenca',
          title: 'Inorma — Zavarovalniška skupina Sava',
          text: 'Enterprise integracijska platforma, ki povezuje sisteme in procese po zavarovalniški skupini.',
        },
        {
          label: 'Referenca',
          title: 'NLB Klik',
          text: 'Rešitev digitalnega bančništva, ki obsega frontend in backend, zgrajena za skalabilnost, varnost in zanesljivost.',
        },
        {
          label: 'Referenca',
          title: 'EPUS — Plinovodi',
          text: 'Poslovno kritična platforma za energetsko infrastrukturo in operativne workflowe.',
        },
        {
          label: 'Referenca',
          title: 'Flare',
          text: 'DevOps in platformni inženiring za obsežno blockchain infrastrukturo.',
        },
        {
          label: 'Referenca',
          title: 'Kumuluz Digital Platform',
          text: 'Odprta, lahka digitalna platforma za cloud-native, mikrostoritveni, na API-jih temelječ in za workflowe pripravljen razvoj.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'Zakaj Sunesis za cloud-native in edge arhitekture',
      items: [
        {
          title: 'Arhitektura in inženiring v eni ekipi',
          text: 'Ne le rišemo diagramov — sisteme, ki jih arhitekturno zasnujemo, tudi načrtujemo in gradimo.',
        },
        {
          title: 'Poglobljeno integracijsko znanje',
          text: 'Povezujemo sisteme, podatke, procese, partnerje in AI prek API-jev, dogodkov in sporočanja.',
        },
        {
          title: 'Močne izkušnje s Kubernetes in OpenShift',
          text: 'Produkcijske izkušnje s kontejnerskimi platformami, GitOps in multi-cluster delovanjem.',
        },
        {
          title: 'Poznavanje enterprise varnosti',
          text: 'Identiteta, avtorizacija, zero-trust in revizijska sledljivost, vgrajeni v vsako arhitekturo.',
        },
        {
          title: 'Znanje produkcijske opazljivosti sistemov',
          text: 'OpenTelemetry, Instana, sledenje, metrike in revizijsko beleženje za zanesljivo delovanje.',
        },
        {
          title: 'Znanje Azure in Google Cloud',
          text: 'Praktična arhitektura in dostava na Microsoft Azure in Google Cloud.',
        },
        {
          title: 'Pripravljenost na workflowe in AgenticAI',
          text: 'Arhitekture, pripravljene na deterministične workflowe in varno izvajanje AI agentov.',
        },
        {
          title: 'Z raziskavami podprto edge znanje',
          text: 'Edge-fog-cloud in AI-native sistemi, podprti z aktivnimi raziskovalnimi in inovacijskimi projekti.',
        },
      ],
    },
    {
      type: 'finalCta',
      title:
        'Potrebujete arhitekturo, ki se lahko razvija skupaj z vašim digitalnim poslovanjem?',
      body: [
        'Ne glede na to, ali posodabljate sisteme, gradite cloud-native platformo, uvajate API-je in dogodke, krepite identiteto in varnost, izboljšujete opazljivost sistemov, se pripravljate na AgenticAI ali raziskujete edge-fog-cloud — Sunesis vam pomaga načrtovati in implementirati skalabilno, varno in za prihodnost pripravljeno arhitekturo.',
      ],
      primaryCta: 'Pogovorite se z našimi arhitekti',
      secondaryCta: 'Raziščite naše ekspertize',
    },
  ],
}

export const cloudNativeEdgePage: Record<LanguageCode, ExpertisePageContent> = {
  en,
  sl,
}
