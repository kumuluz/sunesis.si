import { Bot, Boxes, Layers, Network, Radar } from 'lucide-react'
import type { LanguageCode } from '../../lib/router'
import type { KumuluzPageContent } from '../../views/kumuluz/types'

const KUMULUZ_URL = 'https://kumuluz.com'

const en: KumuluzPageContent = {
  seo: {
    title: 'Kumuluz Platforms and Accelerators | Sunesis',
    description:
      'Kumuluz is the Sunesis family of platforms and accelerators for AgenticAI, API management, Business APIs, cloud-native digital platforms and AI-enhanced crowdsensing.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Kumuluz platforms and accelerators',
    title:
      'Reusable platform foundations for AgenticAI, APIs and digital services',
    body: [
      'Kumuluz is the Sunesis family of platforms, products and accelerators that helps organizations adopt AgenticAI, API management, reusable Business APIs, cloud-native digital platforms and AI-enhanced data services faster.',
      'Built on years of enterprise engineering experience, Kumuluz provides reusable foundations for modern digital systems — reducing complexity, accelerating delivery and supporting secure, scalable and governed innovation.',
      'Sunesis develops and delivers Kumuluz in real enterprise environments, combining product capability with architecture, integration, DevOps and custom engineering expertise.',
    ],
    primaryCta: 'Explore Kumuluz products',
    secondaryCta: 'Visit kumuluz.com',
    trustLine:
      'Created by Sunesis. Proven through enterprise projects. Designed for modern digital platforms.',
  },
  sections: [
    {
      type: 'split',
      title: 'Reusable foundations for modern enterprise technology',
      body: [
        'Sunesis designs and builds complex digital solutions, AgenticAI platforms, API ecosystems, integrations, workflow automation and cloud-native systems for enterprise environments.',
        'Across these projects, many needs repeat: identity, APIs, integrations, deployment, observability, governance, reusable business capabilities, data processing, workflow execution and safe access for AI agents.',
        'Kumuluz packages these recurring patterns into reusable platforms and accelerators. It is not a single product, but a product family that supports different areas of modern enterprise transformation — from AgenticAI and AI assistants to API management, Business APIs, cloud-native digital platforms and crowdsensing.',
        'On Sunesis projects, Kumuluz helps reduce delivery risk, speed up implementation and introduce proven architectural foundations. For detailed product information, dedicated Kumuluz content is available on kumuluz.com.',
      ],
      quote:
        'Sunesis delivers enterprise solutions. Kumuluz accelerates them with reusable platform foundations.',
    },
    {
      type: 'cards',
      title: 'Why Kumuluz',
      columns: 3,
      variant: 'accent',
      body: [
        'Every enterprise technology initiative has recurring needs: integration, security, APIs, deployment, governance, reuse, scalability, observability and operational control.',
        'Building these foundations from scratch for every project creates unnecessary cost, duplication and complexity. Kumuluz packages proven platform capabilities into reusable building blocks that help organizations move faster while keeping architecture, security and maintainability under control.',
        'It helps teams avoid isolated AI pilots, duplicated APIs, repeated integrations, one-off workflow implementations and fragmented digital platform foundations.',
      ],
      items: [
        {
          title: 'Faster delivery',
          text: 'Reusable products, components and implementation patterns reduce the time needed to build modern digital and AI-enabled solutions.',
        },
        {
          title: 'Lower complexity',
          text: 'Kumuluz provides common foundations so project teams do not need to solve the same platform problems repeatedly.',
        },
        {
          title: 'Enterprise architecture alignment',
          text: 'Kumuluz supports API-first, cloud-native, integration-ready, workflow-aware and governance-oriented architectures.',
        },
        {
          title: 'Reduced delivery risk',
          text: 'Proven platform components and enterprise-tested patterns help reduce uncertainty in complex projects.',
        },
        {
          title: 'Better governance',
          text: 'Kumuluz helps centralize and standardize control over agents, APIs, tools, services, business capabilities and data flows.',
        },
        {
          title: 'Long-term maintainability',
          text: 'Reusable foundations make systems easier to evolve, extend, operate and modernize over time.',
        },
      ],
    },
    {
      type: 'products',
      eyebrow: 'Product family',
      title: 'Kumuluz product family',
      intro:
        'Kumuluz products support key areas of modern enterprise technology: AgenticAI, API management, reusable Business APIs, cloud-native digital platforms and AI-enhanced crowdsensing.',
      items: [
        {
          label: 'Governed AgenticAI platform',
          title: 'KumuluzAI Platform',
          body: [
            'KumuluzAI is the Sunesis platform for building secure, governed and production-ready AI agent solutions.',
            'It provides a common foundation for AI agents, assistants and AI applications — including agent runtime, orchestration, enterprise knowledge access, RAG, tool integration, identity propagation, safety guardrails, model routing, human approvals, auditability, cost visibility and centralized management.',
            'KumuluzAI helps organizations move beyond isolated AI experiments toward controlled, auditable and reusable agentic automation.',
          ],
          bestForTitle: 'Best for',
          bestFor: [
            'Enterprise AgenticAI initiatives',
            'AI assistants and AI agents',
            'Business process automation',
            'Enterprise knowledge access and RAG',
            'Tool use and API integration',
            'Human-in-the-loop workflows',
            'Regulated and security-sensitive environments',
          ],
          relatedTitle: 'Related Sunesis expertise',
          related: [
            'AgenticAI Solutions',
            'API Ecosystems & Integrations',
            'Cloud-native & Edge Architectures',
            'DevOps & Platform Engineering',
          ],
          cta: 'Explore KumuluzAI on kumuluz.com',
          href: KUMULUZ_URL,
        },
        {
          label: 'API management for applications, partners and AI agents',
          title: 'Kumuluz API',
          body: [
            'Kumuluz API supports API management and API economy initiatives by helping organizations expose, manage, secure and monitor APIs across digital ecosystems.',
            'It enables companies to create API catalogs, developer portals, gateway policies, access plans, sandbox environments, lifecycle governance and partner API ecosystems.',
            'Kumuluz API also supports modern AgenticAI scenarios where selected APIs need to be exposed as governed tools for AI agents, including MCP-oriented integration patterns, contextual routing, LLM routing, token usage logging and gateway-level checks.',
          ],
          bestForTitle: 'Best for',
          bestFor: [
            'API management',
            'API economy initiatives',
            'Partner and ecosystem APIs',
            'Developer portals',
            'API governance',
            'API gateway control',
            'AI-agent-ready API exposure',
            'MCP-oriented API and tool integration',
          ],
          relatedTitle: 'Related Sunesis expertise',
          related: [
            'API Ecosystems & Integrations',
            'Digital Solutions Development',
            'Cloud-native & Edge Architectures',
            'AgenticAI Solutions',
          ],
          cta: 'Explore Kumuluz API on kumuluz.com',
          href: KUMULUZ_URL,
        },
        {
          label: 'Reusable business capabilities',
          title: 'Kumuluz Business APIs',
          body: [
            'Kumuluz Business APIs provide reusable business capabilities for digital products, workflows and AI agents.',
            'They help organizations avoid repeatedly implementing the same business functions across portals, mobile apps, partner integrations, workflow automation and AgenticAI use cases.',
            'Business APIs can act as a governed capability layer between applications, workflow engines, AI agents and enterprise systems — covering capabilities such as customer data, product catalogs, orders, payments, subscriptions, invoicing, KYC and onboarding, cases and tasks, and notifications.',
          ],
          bestForTitle: 'Best for',
          bestFor: [
            'Reusable digital capabilities',
            'Digital product backends',
            'Workflow automation',
            'AI-agent-callable tools',
            'Partner integrations',
            'Legacy system abstraction',
            'Business capability standardization',
          ],
          relatedTitle: 'Related Sunesis expertise',
          related: [
            'Digital Solutions Development',
            'API Ecosystems & Integrations',
            'AgenticAI Solutions',
            'Cloud-native & Edge Architectures',
          ],
          cta: 'Explore Kumuluz Business APIs on kumuluz.com',
          href: KUMULUZ_URL,
        },
        {
          label: 'Cloud-native digital platform',
          title: 'Kumuluz Digital Platform',
          body: [
            'Kumuluz Digital Platform provides foundations for building cloud-native, microservice, API-first and AI-agent-ready digital solutions.',
            'It supports organizations that want to modernize software, introduce modular architectures, build reusable digital capabilities, create connectors, expose APIs, implement MCP-enabled tools and integrate deterministic workflows.',
            'For new Java cloud-native projects, Sunesis typically follows a Quarkus-first direction while preserving flexibility for enterprise requirements and integration realities.',
          ],
          bestForTitle: 'Best for',
          bestFor: [
            'Cloud-native digital solutions',
            'Microservice architectures',
            'API-first development',
            'Digital platform modernization',
            'Enterprise service layers',
            'Connectors and integration adapters',
            'MCP-enabled tools',
            'Workflow-ready services',
          ],
          relatedTitle: 'Related Sunesis expertise',
          related: [
            'Digital Solutions Development',
            'Cloud-native & Edge Architectures',
            'API Ecosystems & Integrations',
            'DevOps & Platform Engineering',
          ],
          cta: 'Explore Kumuluz Digital Platform on kumuluz.com',
          href: KUMULUZ_URL,
        },
        {
          label: 'AI-enhanced crowdsensing and distributed data',
          title: 'Kumuluz Crowdsensing',
          body: [
            'Kumuluz Crowdsensing enables organizations to collect, process and use distributed data from people, mobile applications, devices, sensors and environments.',
            'It supports smart digital services, monitoring, citizen engagement, field data collection, IoT-enabled data collection, privacy-aware processing and AI-enhanced analytics.',
            'The platform can support anomaly detection, pattern recognition, prediction, segmentation, recommendation support and AI-ready data services.',
          ],
          bestForTitle: 'Best for',
          bestFor: [
            'Crowdsensing initiatives',
            'Field data collection',
            'Smart city and public-sector services',
            'Environmental and infrastructure monitoring',
            'User- and device-generated data',
            'Smart communities',
            'AI-ready data services',
          ],
          relatedTitle: 'Related Sunesis expertise',
          related: [
            'Cloud-native & Edge Architectures',
            'Digital Solutions Development',
            'DevOps & Platform Engineering',
            'Research & Innovation Projects',
          ],
          cta: 'Explore Kumuluz Crowdsensing on kumuluz.com',
          href: KUMULUZ_URL,
        },
      ],
    },
    {
      type: 'cards',
      title: 'How Kumuluz strengthens Sunesis delivery',
      columns: 3,
      variant: 'accent',
      body: [
        'Kumuluz is closely connected to the way Sunesis delivers enterprise technology projects.',
        'Rather than starting from a blank slate, Sunesis teams can use Kumuluz products and platform patterns where they create value — while still tailoring the final solution to each client’s environment, systems, security requirements and business needs.',
        'Kumuluz helps Sunesis combine custom engineering with reusable platform foundations.',
      ],
      items: [
        {
          label: 'AgenticAI Solutions',
          title: 'Governed AI agents and assistants',
          text: 'KumuluzAI provides the platform foundation for secure, governed and production-ready AI agents, assistants, RAG, tool use, human approvals and auditability.',
        },
        {
          label: 'Digital Solutions Development',
          title: 'Modern digital products',
          text: 'Kumuluz Digital Platform and Kumuluz Business APIs accelerate delivery of modern digital products, portals, backend services, integrations and AI-agent-ready capabilities.',
        },
        {
          label: 'Cloud-native & Edge Architectures',
          title: 'Distributed architecture experience',
          text: 'Kumuluz reflects Sunesis’ long-standing cloud-native, microservice, API-first and distributed architecture experience.',
        },
        {
          label: 'API Ecosystems & Integrations',
          title: 'API economy and integrations',
          text: 'Kumuluz API and Kumuluz Business APIs support API management, API economy, partner APIs, workflow-ready APIs and AI-agent-ready API exposure.',
        },
        {
          label: 'DevOps & Platform Engineering',
          title: 'Run in modern platforms',
          text: 'Kumuluz products are designed to run in modern enterprise platform environments, supported by automated delivery, Kubernetes-based deployment, observability and operational readiness.',
        },
        {
          label: 'Research & Innovation',
          title: 'Advanced data and AI work',
          text: 'Kumuluz Crowdsensing and cloud-edge platform patterns connect product development with advanced work in AI, data spaces, IoT, distributed systems and smart services.',
        },
      ],
    },
    {
      type: 'kumuluz',
      title: 'How Kumuluz fits into enterprise architecture',
      body: [
        'Kumuluz products can be used independently, but their strongest value appears when they support a broader enterprise platform architecture.',
        'In such architectures, AI agents, APIs, Business APIs, services, workflows and data services work together under governance. Kumuluz helps organizations create platform foundations where capabilities are reusable, observable, secure and easier to evolve.',
      ],
      items: [
        {
          label: 'AI and agent layer',
          title: 'KumuluzAI',
          text: 'Supports AI agents, assistants, knowledge access, model routing, human approvals, tool use and auditability.',
        },
        {
          label: 'API management layer',
          title: 'Kumuluz API',
          text: 'Exposes, secures, governs and monitors APIs used by applications, partners, workflows and AI agents.',
        },
        {
          label: 'Business capability layer',
          title: 'Kumuluz Business APIs',
          text: 'Provides reusable capabilities such as customer data, onboarding, KYC, cases, payments and notifications.',
        },
        {
          label: 'Digital platform layer',
          title: 'Kumuluz Digital Platform',
          text: 'Supports services, connectors, APIs, MCP-enabled tools and workflow-ready integrations.',
        },
        {
          label: 'Data and crowdsensing layer',
          title: 'Kumuluz Crowdsensing',
          text: 'Collects and processes distributed real-world data for smart services, analytics and AI-ready data use cases.',
        },
        {
          label: 'Enterprise systems',
          title: 'Existing systems',
          text: 'Kumuluz products integrate with existing systems, identity providers, APIs, data sources, workflow engines and operational platforms.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Built on open, cloud-native and enterprise principles',
      columns: 4,
      variant: 'numbered',
      body: [
        'Kumuluz products are designed around the same principles that guide Sunesis engineering work: openness, modularity, integration readiness, security, scalability, governance and long-term maintainability.',
        'They are built to support enterprise environments where architecture, operations and control matter — not to create another closed silo.',
      ],
      items: [
        {
          title: 'Open and modular',
          text: 'Kumuluz supports modular architectures and integration with existing enterprise systems, tools and platforms.',
        },
        {
          title: 'Cloud-native',
          text: 'Kumuluz products are designed for modern deployment models, containerized environments and enterprise platform operations.',
        },
        {
          title: 'API-first',
          text: 'APIs are treated as reusable digital capabilities, not technical afterthoughts.',
        },
        {
          title: 'AgenticAI-ready',
          text: 'Kumuluz helps expose knowledge, tools, APIs, services and workflows safely to AI agents where appropriate.',
        },
        {
          title: 'Workflow-aware',
          text: 'Kumuluz supports architectures where AI can assist and reason, while workflow engines execute process-critical steps deterministically.',
        },
        {
          title: 'Enterprise-ready',
          text: 'Security, governance, identity, integration, observability and operational requirements are considered from the beginning.',
        },
        {
          title: 'Reusable',
          text: 'Kumuluz packages repeatable patterns into reusable components, products and platform foundations.',
        },
        {
          title: 'Designed for evolution',
          text: 'Kumuluz foundations help organizations build systems that can grow, change and modernize over time.',
        },
      ],
    },
    {
      type: 'split',
      title: 'A proven cloud-native heritage',
      body: [
        'The Kumuluz story started with cloud-native and microservice innovation.',
        'KumuluzEE, the open-source microservice framework developed by Sunesis, received the Java Duke’s Choice Award at JavaOne in 2015 — one of the most recognized awards for innovation in the Java ecosystem.',
        'That heritage remains important, but Kumuluz has evolved. Today’s Kumuluz product family focuses on enterprise AgenticAI, API ecosystems, reusable Business APIs, cloud-native digital platforms, workflow-ready services and AI-enhanced data solutions.',
        'Earlier Kumuluz technologies remain part of the historical Kumuluz story and are maintained where needed for existing environments, while new Kumuluz development follows modern cloud-native and AgenticAI-ready technology directions.',
      ],
      quote:
        'KumuluzEE was a foundation for the move from monoliths to microservices. KumuluzAI is a foundation for the move from isolated AI experiments to governed AgenticAI.',
    },
    {
      type: 'steps',
      title: 'Platform products, tailored delivery',
      intro:
        'Kumuluz products provide reusable foundations, but every enterprise environment is different. Sunesis combines Kumuluz with project-specific architecture, integrations, configuration, deployment and delivery services — so organizations benefit from reusable platform capabilities while still receiving a solution that fits their systems, processes, security requirements, compliance needs and operating model.',
      items: [
        {
          title: 'Reusable product foundation',
          text: 'Kumuluz provides tested platform capabilities, patterns and components.',
        },
        {
          title: 'Enterprise architecture',
          text: 'Sunesis defines how Kumuluz fits into the organization’s systems, processes, integrations and governance model.',
        },
        {
          title: 'Enterprise integration',
          text: 'Sunesis integrates Kumuluz with the client’s systems, identity providers, APIs, data sources, workflow engines and platforms.',
        },
        {
          title: 'Project-specific configuration',
          text: 'Each deployment is configured for the organization’s processes, access model, compliance needs and technical environment.',
        },
        {
          title: 'DevOps and operations',
          text: 'Sunesis supports deployment, CI/CD, observability, security, Kubernetes/OpenShift and platform operations where needed.',
        },
        {
          title: 'Long-term evolution',
          text: 'Solutions can evolve over time as new capabilities, integrations, agents, APIs and business needs emerge.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'How organizations start with Kumuluz',
      intro:
        'Organizations do not need to adopt the entire Kumuluz family at once. Most start with one concrete need and then expand toward a broader reusable platform foundation.',
      items: [
        {
          icon: Bot,
          title: 'Start with AgenticAI',
          text: 'Begin with an AI assistant or AI agent use case, then evolve toward a governed AgenticAI platform.',
          bulletsTitle: 'Typical products',
          bullets: [
            'KumuluzAI Platform',
            'Kumuluz API',
            'Kumuluz Business APIs',
          ],
        },
        {
          icon: Network,
          title: 'Start with API management',
          text: 'Create API visibility, gateway control, partner access and lifecycle governance, then prepare APIs for AI-agent use.',
          bulletsTitle: 'Typical products',
          bullets: [
            'Kumuluz API',
            'Kumuluz Business APIs',
            'Kumuluz Digital Platform',
          ],
        },
        {
          icon: Boxes,
          title: 'Start with reusable Business APIs',
          text: 'Turn repeated business functionality into reusable capabilities for portals, mobile apps, workflows and AI agents.',
          bulletsTitle: 'Typical products',
          bullets: [
            'Kumuluz Business APIs',
            'Kumuluz API',
            'Kumuluz Digital Platform',
          ],
        },
        {
          icon: Layers,
          title: 'Start with digital platform modernization',
          text: 'Build services, APIs, connectors and workflow-ready capabilities around existing systems.',
          bulletsTitle: 'Typical products',
          bullets: [
            'Kumuluz Digital Platform',
            'Kumuluz API',
            'Kumuluz Business APIs',
          ],
        },
        {
          icon: Radar,
          title: 'Start with crowdsensing or smart data services',
          text: 'Collect distributed data, apply AI-enhanced analytics and expose insights through dashboards, APIs, workflows or agents.',
          bulletsTitle: 'Typical products',
          bullets: [
            'Kumuluz Crowdsensing',
            'Kumuluz API',
            'KumuluzAI Platform',
            'Kumuluz Digital Platform',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Explore Kumuluz in more detail',
      columns: 3,
      variant: 'compact',
      body: [
        'This Sunesis page presents Kumuluz as part of our technology and delivery approach. Detailed product content, solution pages, product-specific positioning and demo-oriented materials are available on dedicated Kumuluz pages.',
      ],
      items: [
        {
          title: 'KumuluzAI Platform',
          text: 'The AgenticAI platform for secure and governed AI agents, assistants, RAG, tool use and enterprise automation.',
        },
        {
          title: 'Kumuluz API',
          text: 'API management, API economy, gateway control and AI-agent-ready API exposure.',
        },
        {
          title: 'Kumuluz Business APIs',
          text: 'Reusable business capabilities for digital products, workflows and AI agents.',
        },
        {
          title: 'Kumuluz Digital Platform',
          text: 'Cloud-native digital platform foundations for services, APIs, connectors, MCP-enabled tools and workflows.',
        },
        {
          title: 'Kumuluz Crowdsensing',
          text: 'Crowdsensing, smart communities, distributed data collection and AI-enhanced analytics.',
        },
      ],
    },
    {
      type: 'finalCta',
      title: 'Want to accelerate your next digital or AI initiative?',
      body: [
        'Whether you are exploring AgenticAI, building an API ecosystem, modernizing digital platforms, creating reusable Business APIs or introducing AI-enhanced data services, Kumuluz can help accelerate delivery — and Sunesis can help you make it work in your enterprise environment.',
        'Start with one focused initiative and evolve toward a reusable platform foundation.',
      ],
      primaryCta: 'Talk to our experts',
      secondaryCta: 'Visit kumuluz.com',
    },
  ],
}

const sl: KumuluzPageContent = {
  seo: {
    title: 'Kumuluz platforme in pospeševalci | Sunesis',
    description:
      'Kumuluz je Sunesisova družina platform in pospeševalcev za AgenticAI, upravljanje API-jev, Business API-je, cloud-native digitalne platforme in AI-podprt crowdsensing.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Kumuluz platforme in pospeševalci',
    title:
      'Ponovno uporabni platformni temelji za AgenticAI, API-je in digitalne storitve',
    body: [
      'Kumuluz je Sunesisova družina platform, produktov in pospeševalcev, ki organizacijam pomaga hitreje uvesti AgenticAI, upravljanje API-jev, ponovno uporabne Business API-je, cloud-native digitalne platforme in AI-podprte podatkovne storitve.',
      'Zgrajen na dolgoletnih izkušnjah enterprise inženiringa, Kumuluz zagotavlja ponovno uporabne temelje za sodobne digitalne sisteme — zmanjšuje kompleksnost, pospešuje dostavo ter podpira varno, skalabilno in upravljano inovacijo.',
      'Sunesis Kumuluz razvija in dostavlja v resničnih enterprise okoljih ter združuje produktne zmožnosti z arhitekturo, integracijo, DevOps in inženiringom po meri.',
    ],
    primaryCta: 'Raziščite produkte',
    secondaryCta: 'Obiščite kumuluz.com',
    trustLine:
      'Ustvaril Sunesis. Dokazano v enterprise projektih. Zasnovano za sodobne digitalne platforme.',
  },
  sections: [
    {
      type: 'split',
      title: 'Ponovno uporabni temelji za sodobno enterprise tehnologijo',
      body: [
        'Sunesis za enterprise okolja načrtuje in gradi kompleksne digitalne rešitve, AgenticAI platforme, API ekosisteme, integracije, avtomatizacijo workflowov in cloud-native sisteme.',
        'V teh projektih se mnoge potrebe ponavljajo: identiteta, API-ji, integracije, namestitev, opazljivost, upravljanje, ponovno uporabne poslovne zmožnosti, obdelava podatkov, izvajanje workflowov in varen dostop za AI agente.',
        'Kumuluz te ponavljajoče se vzorce pakira v ponovno uporabne platforme in pospeševalce. Ni en sam produkt, temveč produktna družina, ki podpira različna področja sodobne enterprise transformacije — od AgenticAI in AI asistentov do upravljanja API-jev, Business API-jev, cloud-native digitalnih platform in crowdsensinga.',
        'Na Sunesisovih projektih Kumuluz pomaga zmanjšati tveganje dostave, pospešiti implementacijo in uvesti preverjene arhitekturne temelje. Za podrobne informacije o produktih je namenska vsebina Kumuluz na voljo na kumuluz.com.',
      ],
      quote:
        'Sunesis dostavlja enterprise rešitve. Kumuluz jih pospeši s ponovno uporabnimi platformnimi temelji.',
    },
    {
      type: 'cards',
      title: 'Zakaj Kumuluz',
      columns: 3,
      variant: 'accent',
      body: [
        'Vsaka enterprise tehnološka pobuda ima ponavljajoče se potrebe: integracija, varnost, API-ji, namestitev, upravljanje, ponovna uporaba, skalabilnost, opazljivost in operativni nadzor.',
        'Gradnja teh temeljev iz nič za vsak projekt ustvarja nepotrebne stroške, podvajanje in kompleksnost. Kumuluz preverjene platformne zmožnosti pakira v ponovno uporabne gradnike, ki organizacijam pomagajo delovati hitreje, hkrati pa ohranjajo nadzor nad arhitekturo, varnostjo in vzdržljivostjo.',
        'Ekipam pomaga preprečiti izolirane AI pilote, podvojene API-je, ponavljajoče se integracije, enkratne implementacije workflowov in razdrobljene temelje digitalnih platform.',
      ],
      items: [
        {
          title: 'Hitrejša dostava',
          text: 'Ponovno uporabni produkti, komponente in implementacijski vzorci skrajšajo čas, potreben za gradnjo sodobnih digitalnih in AI rešitev.',
        },
        {
          title: 'Nižja kompleksnost',
          text: 'Kumuluz zagotavlja skupne temelje, da projektnim ekipam ni treba znova in znova reševati istih platformnih problemov.',
        },
        {
          title: 'Usklajenost z enterprise arhitekturo',
          text: 'Kumuluz podpira API-first, cloud-native, integracijsko pripravljene, workflow-zavedne in na upravljanje usmerjene arhitekture.',
        },
        {
          title: 'Manjše tveganje dostave',
          text: 'Preverjene platformne komponente in v praksi preizkušeni vzorci pomagajo zmanjšati negotovost v kompleksnih projektih.',
        },
        {
          title: 'Boljše upravljanje',
          text: 'Kumuluz pomaga centralizirati in standardizirati nadzor nad agenti, API-ji, orodji, storitvami, poslovnimi zmožnostmi in podatkovnimi tokovi.',
        },
        {
          title: 'Dolgoročna vzdržljivost',
          text: 'Ponovno uporabni temelji omogočajo lažji razvoj, razširjanje, upravljanje in posodabljanje sistemov skozi čas.',
        },
      ],
    },
    {
      type: 'products',
      eyebrow: 'Produktna družina',
      title: 'Kumuluz produktna družina',
      intro:
        'Kumuluz produkti podpirajo ključna področja sodobne enterprise tehnologije: AgenticAI, upravljanje API-jev, ponovno uporabne Business API-je, cloud-native digitalne platforme in AI-podprt crowdsensing.',
      items: [
        {
          label: 'Upravljana AgenticAI platforma',
          title: 'KumuluzAI Platform',
          body: [
            'KumuluzAI je Sunesisova platforma za gradnjo varnih, nadzorovanih in produkcijsko pripravljenih rešitev z AI agenti.',
            'Zagotavlja skupen temelj za AI agente, asistente in AI aplikacije — vključno z izvajalnim okoljem agentov, orkestracijo, dostopom do enterprise znanja, RAG, integracijo orodij, propagacijo identitete, varnostnimi ograjami, usmerjanjem modelov, človeškimi odobritvami, revizijo, vidnostjo stroškov in centralnim upravljanjem.',
            'KumuluzAI organizacijam pomaga preseči izolirane AI eksperimente in preiti k nadzorovani, sledljivi in ponovno uporabni agentni avtomatizaciji.',
          ],
          bestForTitle: 'Najprimernejše za',
          bestFor: [
            'Enterprise AgenticAI pobude',
            'AI asistente in AI agente',
            'Avtomatizacijo poslovnih procesov',
            'Dostop do enterprise znanja in RAG',
            'Uporabo orodij in integracijo API-jev',
            'Human-in-the-loop workflowe',
            'Regulirana in varnostno občutljiva okolja',
          ],
          relatedTitle: 'Povezani Sunesis stebri',
          related: [
            'AgenticAI rešitve',
            'API ekosistemi in integracije',
            'Cloud-native in edge arhitekture',
            'DevOps in platformni inženiring',
          ],
          cta: 'Raziščite KumuluzAI na kumuluz.com',
          href: KUMULUZ_URL,
        },
        {
          label: 'Upravljanje API-jev za aplikacije, partnerje in AI agente',
          title: 'Kumuluz API',
          body: [
            'Kumuluz API podpira upravljanje API-jev in pobude API ekonomije, tako da organizacijam pomaga izpostaviti, upravljati, zavarovati in spremljati API-je v digitalnih ekosistemih.',
            'Podjetjem omogoča ustvarjanje katalogov API-jev, razvijalskih portalov, politik prehoda, dostopnih načrtov, peskovniških okolij, upravljanja življenjskega cikla in partnerskih API ekosistemov.',
            'Kumuluz API podpira tudi sodobne AgenticAI scenarije, kjer je treba izbrane API-je izpostaviti kot nadzorovana orodja za AI agente, vključno z MCP integracijskimi vzorci, kontekstualnim usmerjanjem, LLM usmerjanjem, beleženjem porabe žetonov in preverjanji na ravni prehoda.',
          ],
          bestForTitle: 'Najprimernejše za',
          bestFor: [
            'Upravljanje API-jev',
            'Pobude API ekonomije',
            'Partnerske in ekosistemske API-je',
            'Razvijalske portale',
            'Upravljanje API-jev',
            'Nadzor API prehoda',
            'API-je, pripravljene za AI agente',
            'MCP integracijo API-jev in orodij',
          ],
          relatedTitle: 'Povezani Sunesis stebri',
          related: [
            'API ekosistemi in integracije',
            'Razvoj digitalnih rešitev',
            'Cloud-native in edge arhitekture',
            'AgenticAI rešitve',
          ],
          cta: 'Raziščite Kumuluz API na kumuluz.com',
          href: KUMULUZ_URL,
        },
        {
          label: 'Ponovno uporabne poslovne zmožnosti',
          title: 'Kumuluz Business API-ji',
          body: [
            'Kumuluz Business API-ji zagotavljajo ponovno uporabne poslovne zmožnosti za digitalne produkte, workflowe in AI agente.',
            'Organizacijam pomagajo, da ne implementirajo vedno znova istih poslovnih funkcij po portalih, mobilnih aplikacijah, partnerskih integracijah, avtomatizaciji workflowov in AgenticAI primerih uporabe.',
            'Business API-ji lahko delujejo kot nadzorovan sloj zmožnosti med aplikacijami, workflow pogoni, AI agenti in enterprise sistemi — pokrivajo zmožnosti, kot so podatki o strankah, katalogi izdelkov, naročila, plačila, naročnine, izdajanje računov, KYC in onboarding, primeri in naloge ter obvestila.',
          ],
          bestForTitle: 'Najprimernejše za',
          bestFor: [
            'Ponovno uporabne digitalne zmožnosti',
            'Backendi digitalnih produktov',
            'Avtomatizacijo workflowov',
            'Orodja, ki jih lahko kličejo AI agenti',
            'Partnerske integracije',
            'Abstrakcijo zapuščinskih sistemov',
            'Standardizacijo poslovnih zmožnosti',
          ],
          relatedTitle: 'Povezani Sunesis stebri',
          related: [
            'Razvoj digitalnih rešitev',
            'API ekosistemi in integracije',
            'AgenticAI rešitve',
            'Cloud-native in edge arhitekture',
          ],
          cta: 'Raziščite Kumuluz Business API-je na kumuluz.com',
          href: KUMULUZ_URL,
        },
        {
          label: 'Cloud-native digitalna platforma',
          title: 'Kumuluz Digital Platform',
          body: [
            'Kumuluz Digital Platform zagotavlja temelje za gradnjo cloud-native, mikrostoritvenih, API-first in za AI agente pripravljenih digitalnih rešitev.',
            'Podpira organizacije, ki želijo posodobiti programsko opremo, uvesti modularne arhitekture, graditi ponovno uporabne digitalne zmožnosti, ustvarjati konektorje, izpostavljati API-je, implementirati MCP orodja in integrirati deterministične workflowe.',
            'Za nove Java cloud-native projekte Sunesis običajno sledi smeri Quarkus-first, hkrati pa ohranja prožnost za enterprise zahteve in integracijsko realnost.',
          ],
          bestForTitle: 'Najprimernejše za',
          bestFor: [
            'Cloud-native digitalne rešitve',
            'Mikrostoritvene arhitekture',
            'API-first razvoj',
            'Posodobitev digitalnih platform',
            'Enterprise storitvene sloje',
            'Konektorje in integracijske adapterje',
            'MCP orodja',
            'Workflow-pripravljene storitve',
          ],
          relatedTitle: 'Povezani Sunesis stebri',
          related: [
            'Razvoj digitalnih rešitev',
            'Cloud-native in edge arhitekture',
            'API ekosistemi in integracije',
            'DevOps in platformni inženiring',
          ],
          cta: 'Raziščite Kumuluz Digital Platform na kumuluz.com',
          href: KUMULUZ_URL,
        },
        {
          label: 'AI-podprt crowdsensing in porazdeljeni podatki',
          title: 'Kumuluz Crowdsensing',
          body: [
            'Kumuluz Crowdsensing organizacijam omogoča zbiranje, obdelavo in uporabo porazdeljenih podatkov od ljudi, mobilnih aplikacij, naprav, senzorjev in okolij.',
            'Podpira pametne digitalne storitve, nadzor, vključevanje občanov, terensko zbiranje podatkov, IoT zbiranje podatkov, zasebnosti prijazno obdelavo in AI-podprto analitiko.',
            'Platforma lahko podpira zaznavanje anomalij, prepoznavanje vzorcev, napovedovanje, segmentacijo, podporo priporočilom in AI-pripravljene podatkovne storitve.',
          ],
          bestForTitle: 'Najprimernejše za',
          bestFor: [
            'Crowdsensing pobude',
            'Terensko zbiranje podatkov',
            'Pametno mesto in storitve javnega sektorja',
            'Okoljski in infrastrukturni nadzor',
            'Podatke uporabnikov in naprav',
            'Pametne skupnosti',
            'AI-pripravljene podatkovne storitve',
          ],
          relatedTitle: 'Povezani Sunesis stebri',
          related: [
            'Cloud-native in edge arhitekture',
            'Razvoj digitalnih rešitev',
            'DevOps in platformni inženiring',
            'Raziskovalni in inovacijski projekti',
          ],
          cta: 'Raziščite Kumuluz Crowdsensing na kumuluz.com',
          href: KUMULUZ_URL,
        },
      ],
    },
    {
      type: 'cards',
      title: 'Kako Kumuluz krepi Sunesisovo dostavo',
      columns: 3,
      variant: 'accent',
      body: [
        'Kumuluz je tesno povezan z načinom, kako Sunesis dostavlja enterprise tehnološke projekte.',
        'Namesto da bi začele s prazne table, lahko Sunesisove ekipe uporabijo Kumuluz produkte in platformne vzorce tam, kjer ustvarjajo vrednost — končno rešitev pa še vedno prilagodijo okolju, sistemom, varnostnim zahtevam in poslovnim potrebam vsake stranke.',
        'Kumuluz Sunesisu pomaga združiti inženiring po meri s ponovno uporabnimi platformnimi temelji.',
      ],
      items: [
        {
          label: 'AgenticAI rešitve',
          title: 'Nadzorovani AI agenti in asistenti',
          text: 'KumuluzAI zagotavlja platformni temelj za varne, nadzorovane in produkcijsko pripravljene AI agente, asistente, RAG, uporabo orodij, človeške odobritve in revizijo.',
        },
        {
          label: 'Razvoj digitalnih rešitev',
          title: 'Sodobni digitalni produkti',
          text: 'Kumuluz Digital Platform in Kumuluz Business API-ji pospešijo dostavo sodobnih digitalnih produktov, portalov, backend storitev, integracij in za AI agente pripravljenih zmožnosti.',
        },
        {
          label: 'Cloud-native in edge arhitekture',
          title: 'Izkušnje s porazdeljeno arhitekturo',
          text: 'Kumuluz odraža dolgoletne Sunesisove izkušnje s cloud-native, mikrostoritveno, API-first in porazdeljeno arhitekturo.',
        },
        {
          label: 'API ekosistemi in integracije',
          title: 'API ekonomija in integracije',
          text: 'Kumuluz API in Kumuluz Business API-ji podpirajo upravljanje API-jev, API ekonomijo, partnerske API-je, workflow-pripravljene API-je in API-je za AI agente.',
        },
        {
          label: 'DevOps in platformni inženiring',
          title: 'Delovanje v sodobnih platformah',
          text: 'Kumuluz produkti so zasnovani za delovanje v sodobnih enterprise platformnih okoljih, podprti z avtomatizirano dostavo, namestitvijo na Kubernetes, opazljivostjo in operativno pripravljenostjo.',
        },
        {
          label: 'Raziskave in inovacije',
          title: 'Napredno delo s podatki in AI',
          text: 'Kumuluz Crowdsensing in cloud-edge platformni vzorci povezujejo razvoj produktov z naprednim delom na področju AI, podatkovnih prostorov, IoT, porazdeljenih sistemov in pametnih storitev.',
        },
      ],
    },
    {
      type: 'kumuluz',
      title: 'Kako se Kumuluz umešča v enterprise arhitekturo',
      body: [
        'Kumuluz produkte je mogoče uporabljati neodvisno, a njihova največja vrednost se pokaže, ko podpirajo širšo enterprise platformno arhitekturo.',
        'V takih arhitekturah AI agenti, API-ji, Business API-ji, storitve, workflowi in podatkovne storitve delujejo skupaj pod upravljanjem. Kumuluz organizacijam pomaga ustvariti platformne temelje, kjer so zmožnosti ponovno uporabne, opazljive, varne in lažje za razvoj.',
      ],
      items: [
        {
          label: 'Sloj AI in agentov',
          title: 'KumuluzAI',
          text: 'Podpira AI agente, asistente, dostop do znanja, usmerjanje modelov, človeške odobritve, uporabo orodij in revizijo.',
        },
        {
          label: 'Sloj upravljanja API-jev',
          title: 'Kumuluz API',
          text: 'Izpostavlja, varuje, upravlja in spremlja API-je, ki jih uporabljajo aplikacije, partnerji, workflowi in AI agenti.',
        },
        {
          label: 'Sloj poslovnih zmožnosti',
          title: 'Kumuluz Business API-ji',
          text: 'Zagotavlja ponovno uporabne zmožnosti, kot so podatki o strankah, onboarding, KYC, primeri, plačila in obvestila.',
        },
        {
          label: 'Sloj digitalne platforme',
          title: 'Kumuluz Digital Platform',
          text: 'Podpira storitve, konektorje, API-je, MCP orodja in workflow-pripravljene integracije.',
        },
        {
          label: 'Sloj podatkov in crowdsensinga',
          title: 'Kumuluz Crowdsensing',
          text: 'Zbira in obdeluje porazdeljene podatke iz resničnega sveta za pametne storitve, analitiko in AI-pripravljene primere uporabe.',
        },
        {
          label: 'Enterprise sistemi',
          title: 'Obstoječi sistemi',
          text: 'Kumuluz produkti se integrirajo z obstoječimi sistemi, ponudniki identitete, API-ji, viri podatkov, workflow pogoni in operativnimi platformami.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Zgrajeno na odprtih, cloud-native in enterprise načelih',
      columns: 4,
      variant: 'numbered',
      body: [
        'Kumuluz produkti so zasnovani okoli istih načel, ki vodijo Sunesisovo inženirsko delo: odprtost, modularnost, integracijska pripravljenost, varnost, skalabilnost, upravljanje in dolgoročna vzdržljivost.',
        'Zgrajeni so za podporo enterprise okoljem, kjer so pomembni arhitektura, operacije in nadzor — ne za ustvarjanje novega zaprtega silosa.',
      ],
      items: [
        {
          title: 'Odprto in modularno',
          text: 'Kumuluz podpira modularne arhitekture in integracijo z obstoječimi enterprise sistemi, orodji in platformami.',
        },
        {
          title: 'Cloud-native',
          text: 'Kumuluz produkti so zasnovani za sodobne modele namestitve, kontejnerizirana okolja in delovanje enterprise platform.',
        },
        {
          title: 'API-first',
          text: 'API-ji so obravnavani kot ponovno uporabne digitalne zmožnosti, ne kot tehnična naknadna misel.',
        },
        {
          title: 'Pripravljeno za AgenticAI',
          text: 'Kumuluz pomaga znanje, orodja, API-je, storitve in workflowe, kjer je primerno, varno izpostaviti AI agentom.',
        },
        {
          title: 'Workflow-zavedno',
          text: 'Kumuluz podpira arhitekture, kjer AI pomaga in sklepa, workflow pogoni pa deterministično izvajajo procesno kritične korake.',
        },
        {
          title: 'Pripravljeno za enterprise',
          text: 'Varnost, upravljanje, identiteta, integracija, opazljivost in operativne zahteve so upoštevane od začetka.',
        },
        {
          title: 'Ponovno uporabno',
          text: 'Kumuluz ponavljajoče se vzorce pakira v ponovno uporabne komponente, produkte in platformne temelje.',
        },
        {
          title: 'Zasnovano za razvoj',
          text: 'Kumuluz temelji organizacijam pomagajo graditi sisteme, ki lahko rastejo, se spreminjajo in posodabljajo skozi čas.',
        },
      ],
    },
    {
      type: 'split',
      title: 'Dokazana cloud-native dediščina',
      body: [
        'Zgodba Kumuluz se je začela s cloud-native in mikrostoritveno inovacijo.',
        'KumuluzEE, odprtokodno mikrostoritveno ogrodje, ki ga je razvil Sunesis, je leta 2015 na konferenci JavaOne prejelo nagrado Java Duke’s Choice Award — eno najbolj prepoznavnih nagrad za inovacije v Java ekosistemu.',
        'Ta dediščina ostaja pomembna, a Kumuluz se je razvil. Današnja produktna družina Kumuluz se osredotoča na enterprise AgenticAI, API ekosisteme, ponovno uporabne Business API-je, cloud-native digitalne platforme, workflow-pripravljene storitve in AI-podprte podatkovne rešitve.',
        'Zgodnejše tehnologije Kumuluz ostajajo del zgodovinske zgodbe Kumuluz in se vzdržujejo, kjer je to potrebno za obstoječa okolja, medtem ko nov razvoj Kumuluz sledi sodobnim cloud-native in za AgenticAI pripravljenim tehnološkim smerem.',
      ],
      quote:
        'KumuluzEE je bil temelj za prehod od monolitov k mikrostoritvam. KumuluzAI je temelj za prehod od izoliranih AI eksperimentov k upravljanemu AgenticAI.',
    },
    {
      type: 'steps',
      title: 'Platformni produkti, dostava po meri',
      intro:
        'Kumuluz produkti zagotavljajo ponovno uporabne temelje, a vsako enterprise okolje je drugačno. Sunesis Kumuluz združuje z arhitekturo, integracijami, konfiguracijo, namestitvijo in storitvami dostave, prilagojenimi projektu — tako organizacije izkoristijo ponovno uporabne platformne zmožnosti in hkrati prejmejo rešitev, ki ustreza njihovim sistemom, procesom, varnostnim zahtevam, potrebam skladnosti in operativnemu modelu.',
      items: [
        {
          title: 'Ponovno uporabni produktni temelj',
          text: 'Kumuluz zagotavlja preizkušene platformne zmožnosti, vzorce in komponente.',
        },
        {
          title: 'Enterprise arhitektura',
          text: 'Sunesis določi, kako se Kumuluz umešča v sisteme, procese, integracije in model upravljanja organizacije.',
        },
        {
          title: 'Enterprise integracija',
          text: 'Sunesis Kumuluz integrira s sistemi stranke, ponudniki identitete, API-ji, viri podatkov, workflow pogoni in platformami.',
        },
        {
          title: 'Konfiguracija po meri projekta',
          text: 'Vsaka namestitev je konfigurirana za procese, model dostopa, potrebe skladnosti in tehnično okolje organizacije.',
        },
        {
          title: 'DevOps in operacije',
          text: 'Sunesis podpira namestitev, CI/CD, opazljivost, varnost, Kubernetes/OpenShift in platformne operacije, kjer je potrebno.',
        },
        {
          title: 'Dolgoročni razvoj',
          text: 'Rešitve se lahko razvijajo skozi čas, ko se pojavijo nove zmožnosti, integracije, agenti, API-ji in poslovne potrebe.',
        },
      ],
    },
    {
      type: 'capabilities',
      title: 'Kako organizacije začnejo s Kumuluz',
      intro:
        'Organizacijam ni treba prevzeti celotne družine Kumuluz naenkrat. Večina začne z eno konkretno potrebo in se nato razširi proti širšemu ponovno uporabnemu platformnemu temelju.',
      items: [
        {
          icon: Bot,
          title: 'Začnite z AgenticAI',
          text: 'Začnite s primerom uporabe AI asistenta ali AI agenta, nato se razvijte proti upravljani AgenticAI platformi.',
          bulletsTitle: 'Tipični produkti',
          bullets: [
            'KumuluzAI Platform',
            'Kumuluz API',
            'Kumuluz Business API-ji',
          ],
        },
        {
          icon: Network,
          title: 'Začnite z upravljanjem API-jev',
          text: 'Ustvarite vidnost API-jev, nadzor prehoda, partnerski dostop in upravljanje življenjskega cikla, nato API-je pripravite za uporabo z AI agenti.',
          bulletsTitle: 'Tipični produkti',
          bullets: [
            'Kumuluz API',
            'Kumuluz Business API-ji',
            'Kumuluz Digital Platform',
          ],
        },
        {
          icon: Boxes,
          title: 'Začnite s ponovno uporabnimi Business API-ji',
          text: 'Ponavljajočo se poslovno funkcionalnost spremenite v ponovno uporabne zmožnosti za portale, mobilne aplikacije, workflowe in AI agente.',
          bulletsTitle: 'Tipični produkti',
          bullets: [
            'Kumuluz Business API-ji',
            'Kumuluz API',
            'Kumuluz Digital Platform',
          ],
        },
        {
          icon: Layers,
          title: 'Začnite s posodobitvijo digitalne platforme',
          text: 'Zgradite storitve, API-je, konektorje in workflow-pripravljene zmožnosti okoli obstoječih sistemov.',
          bulletsTitle: 'Tipični produkti',
          bullets: [
            'Kumuluz Digital Platform',
            'Kumuluz API',
            'Kumuluz Business API-ji',
          ],
        },
        {
          icon: Radar,
          title:
            'Začnite s crowdsensingom ali pametnimi podatkovnimi storitvami',
          text: 'Zbirajte porazdeljene podatke, uporabite AI-podprto analitiko in vpoglede izpostavite prek nadzornih plošč, API-jev, workflowov ali agentov.',
          bulletsTitle: 'Tipični produkti',
          bullets: [
            'Kumuluz Crowdsensing',
            'Kumuluz API',
            'KumuluzAI Platform',
            'Kumuluz Digital Platform',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Raziščite Kumuluz podrobneje',
      columns: 3,
      variant: 'compact',
      body: [
        'Ta Sunesisova stran predstavlja Kumuluz kot del našega tehnološkega in dostavnega pristopa. Podrobne vsebine o produktih, strani rešitev, produktno specifično pozicioniranje in demo gradiva so na voljo na namenskih straneh Kumuluz.',
      ],
      items: [
        {
          title: 'KumuluzAI Platform',
          text: 'AgenticAI platforma za varne in nadzorovane AI agente, asistente, RAG, uporabo orodij in enterprise avtomatizacijo.',
        },
        {
          title: 'Kumuluz API',
          text: 'Upravljanje API-jev, API ekonomija, nadzor prehoda in API-ji za AI agente.',
        },
        {
          title: 'Kumuluz Business API-ji',
          text: 'Ponovno uporabne poslovne zmožnosti za digitalne produkte, workflowe in AI agente.',
        },
        {
          title: 'Kumuluz Digital Platform',
          text: 'Cloud-native temelji digitalne platforme za storitve, API-je, konektorje, MCP orodja in workflowe.',
        },
        {
          title: 'Kumuluz Crowdsensing',
          text: 'Crowdsensing, pametne skupnosti, porazdeljeno zbiranje podatkov in AI-podprta analitika.',
        },
      ],
    },
    {
      type: 'finalCta',
      title: 'Želite pospešiti svojo naslednjo digitalno ali AI pobudo?',
      body: [
        'Ne glede na to, ali raziskujete AgenticAI, gradite API ekosistem, posodabljate digitalne platforme, ustvarjate ponovno uporabne Business API-je ali uvajate AI-podprte podatkovne storitve, Kumuluz lahko pospeši dostavo — Sunesis pa vam pomaga, da to zaživi v vašem enterprise okolju.',
        'Začnite z eno osredotočeno pobudo in se razvijte proti ponovno uporabnemu platformnemu temelju.',
      ],
      primaryCta: 'Pogovorite se z našimi strokovnjaki',
      secondaryCta: 'Obiščite kumuluz.com',
    },
  ],
}

export const kumuluzPage: Record<LanguageCode, KumuluzPageContent> = {
  en,
  sl,
}
