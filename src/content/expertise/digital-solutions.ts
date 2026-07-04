import type { LanguageCode } from '../../lib/router'
import type { ExpertisePageContent } from '../../views/expertise/types'

const en: ExpertisePageContent = {
  seo: {
    title:
      'Digital Solutions Development | Enterprise Software, Web, Mobile, APIs and Integrations | Sunesis',
    description:
      'Sunesis designs and develops enterprise digital solutions, backend systems, web and mobile applications, APIs, integrations, workflows and AI-agent-ready digital platforms.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Digital Solutions Development',
    title: 'Build secure, scalable and integration-ready digital platforms',
    body: [
      'Sunesis designs and builds complete digital solutions — from backend systems and integrations to web, mobile and customer-facing applications — for organizations that need secure, scalable and business-critical software, combining senior engineering teams, enterprise architecture, API-first development and production delivery experience.',
      "Our digital solutions are designed not only for today's applications but for tomorrow's AI-enabled enterprise — where services, APIs, workflows and business capabilities can be safely used by users, partners, systems and AI agents.",
    ],
    primaryCta: 'Talk to our experts',
    secondaryCta: 'Explore our expertise',
    trustLine:
      'Built for banking, insurance, energy, public sector, manufacturing, premium brands and enterprise service environments.',
  },
  sections: [
    {
      type: 'split',
      title: 'From business idea to production-ready digital solution',
      body: [
        'Modern digital products no longer exist in isolation. They connect to core systems, expose APIs, integrate data, support multiple channels, enforce security and scale under real business load.',
        'Increasingly, they must also support AI assistants, AI agents, workflow automation, partner ecosystems and reusable business capabilities — without compromising security or control.',
        'Sunesis delivers complete digital solutions across the full stack, from architecture and backend to web, mobile, APIs, integrations and workflows, end to end.',
      ],
      quote:
        'Sunesis builds enterprise digital solutions that connect applications, APIs, workflows, data, business systems and AI-ready services into production-ready platforms.',
    },
    {
      type: 'capabilities',
      title: 'What we build',
      intro:
        'We develop digital solutions for organizations where reliability, security, integration capability and long-term maintainability matter.',
      items: [
        {
          title: 'Enterprise backend systems',
          text: 'Robust backend systems built in Java, .NET or Python with an API-first architecture and deep integration into enterprise environments.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Java backend development',
            '.NET backend development',
            'Python backend development',
            'API-first architecture',
            'Integration with enterprise systems',
          ],
        },
        {
          title: 'Web applications and frontend development',
          text: 'Enterprise web applications and portals built with Angular and React, with responsive, API-driven user interfaces.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Angular development',
            'React development',
            'Enterprise web applications',
            'Customer, partner and employee portals',
            'Responsive API-driven UIs',
          ],
        },
        {
          title: 'Native mobile applications',
          text: 'Secure native mobile applications for iOS and Android, integrated with backend APIs and enterprise systems.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Native iOS development',
            'Native Android development',
            'Secure mobile architecture',
            'Backend API integration',
            'Push notifications',
          ],
        },
        {
          title: 'API-first digital platforms',
          text: 'Digital platforms designed around clean, well-governed APIs that serve applications, partners, systems and AI agents.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'API design',
            'REST APIs',
            'Event-driven APIs',
            'API gateway integration',
            'Agent-ready and tool-safe API design',
          ],
        },
        {
          title: 'Enterprise integrations',
          wide: true,
          text: 'Reliable integrations that connect digital solutions with the surrounding enterprise landscape and external partners.',
          bulletsTitle: 'Integration areas',
          bullets: [
            'CRM, ERP and document systems',
            'Banking and insurance platforms',
            'Identity and access management',
            'External and partner APIs',
            'Legacy modernization layers',
          ],
        },
        {
          title: 'Event-driven architecture and Kafka',
          text: 'Event-driven solutions and asynchronous integration built on Kafka for scalable, decoupled communication.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Event-driven architecture',
            'Kafka-based integration',
            'Event streaming',
            'Asynchronous communication',
            'Event observability',
          ],
        },
        {
          title: 'Workflow-enabled digital solutions',
          text: 'Digital solutions with embedded workflow orchestration using Temporal and Camunda for long-running and process-critical operations.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Workflow integration',
            'Long-running processes',
            'Human approval steps',
            'Business APIs as workflow capabilities',
            'Workflow audit trails',
          ],
        },
        {
          title: 'AI-agent-ready digital services',
          text: 'Digital services prepared so AI agents can use approved capabilities safely, through controlled and auditable interfaces.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Tool-safe APIs',
            'MCP-oriented tool exposure',
            'Controlled backend access',
            'Integration with KumuluzAI and Kumuluz API',
            'Auditability of agent actions',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Built for business-critical environments',
      columns: 4,
      items: [
        {
          title: 'Security by design',
          text: 'Security, identity and access control built into the architecture from the start.',
        },
        {
          title: 'Scalability and performance',
          text: 'Solutions designed to scale and perform under real business load.',
        },
        {
          title: 'Maintainability',
          text: 'Clean, modular architectures built for long-term evolution and support.',
        },
        {
          title: 'Integration readiness',
          text: 'Designed to connect with surrounding enterprise systems and partners.',
        },
        {
          title: 'Operational reliability',
          text: 'Reliable, observable solutions ready for stable production operation.',
        },
        {
          title: 'API-first thinking',
          text: 'Capabilities exposed through clean, reusable and well-governed APIs.',
        },
        {
          title: 'Workflow awareness',
          text: 'Process boundaries and orchestration considered as part of the design.',
        },
        {
          title: 'User experience',
          text: 'Responsive, usable interfaces across web, mobile and customer channels.',
        },
      ],
    },
    {
      type: 'prose',
      title: 'Modernizing existing systems and digital channels',
      body: [
        'Many organizations do not need to replace their systems — they need to evolve them. Sunesis helps introduce APIs, modular architectures, new channels, integration layers, workflow boundaries and cloud-native foundations without disrupting business operations.',
        'We also help prepare existing systems for the AI-enabled enterprise, exposing approved capabilities so they can be safely used by digital products, workflows and AI agents.',
      ],
    },
    {
      type: 'list',
      title: 'Modernization focus',
      items: [
        'Replatforming applications',
        'Decomposing monoliths',
        'Introducing APIs and integration layers',
        'Building new digital channels',
        'Modernizing frontend and mobile',
        'Improving scalability',
        'Adding workflow orchestration',
        'Introducing event-driven architecture',
        'Preparing for cloud-native and DevOps',
        'Preparing capabilities for AI-agent use',
      ],
    },
    {
      type: 'cards',
      title: 'Preparing digital platforms for AI agents',
      body: [
        'Digital solutions are increasingly expected to support AI agents alongside users and systems. Sunesis designs platforms where agents access approved capabilities through controlled, governed and auditable interfaces.',
      ],
      columns: 3,
      items: [
        {
          title: 'Tool-safe APIs',
          text: 'APIs designed for safe, controlled use by AI agents and automation.',
        },
        {
          title: 'Business APIs',
          text: 'Reusable business capabilities exposed as governed agent-ready tools.',
        },
        {
          title: 'MCP-oriented tools',
          text: 'Capabilities exposed as MCP-oriented tools for controlled agent access.',
        },
        {
          title: 'Workflow execution',
          text: 'Deterministic workflow execution behind agent-initiated actions.',
        },
        {
          title: 'Gateway and policy control',
          text: 'Agent requests routed through gateways with authentication and policy enforcement.',
        },
        {
          title: 'Auditability',
          text: 'Traceable records of which capabilities agents used and when.',
        },
      ],
    },
    {
      type: 'kumuluz',
      title: 'Accelerated by Kumuluz Digital Platform',
      body: [
        'Where appropriate, Sunesis uses the Kumuluz Digital Platform and its components to accelerate cloud-native, microservice, API-based and AI-agent-ready solutions with reusable foundations and proven building blocks.',
        'On Sunesis projects Kumuluz is a practical accelerator, not a product add-on — it helps teams deliver faster while keeping solutions open, standard and maintainable.',
      ],
      items: [
        {
          title: 'Kumuluz Digital Platform',
          text: 'Foundation for cloud-native services, APIs, connectors, MCP-enabled tools and workflow integrations.',
        },
        {
          title: 'Kumuluz API',
          text: 'API management and gateway platform for exposing, securing and governing APIs.',
        },
        {
          title: 'Kumuluz Business APIs',
          text: 'Reusable business capabilities for digital products, workflows and AI agents.',
        },
        {
          title: 'KumuluzAI Platform',
          text: 'AgenticAI platform that uses approved services, APIs, tools and workflows.',
        },
      ],
      cta: 'Explore Kumuluz platforms',
      ctaHref: 'https://kumuluz.com',
    },
    {
      type: 'cards',
      title: 'Digital solutions across industries and use cases',
      columns: 3,
      variant: 'tag',
      items: [
        {
          title: 'Digital banking and financial services',
          text: 'Secure digital banking and financial applications across channels and systems.',
          meta: 'Relevant capabilities: backend, frontend, mobile, APIs, integrations, security, workflow support',
        },
        {
          title: 'Insurance digital platforms',
          text: 'Enterprise insurance applications and platforms with strong integration and AI-readiness.',
          meta: 'Relevant capabilities: enterprise applications, APIs, integrations, workflow support, secure data, AI-ready services',
        },
        {
          title: 'Public sector information systems',
          text: 'Information systems for public sector organizations with secure, auditable workflows.',
          meta: 'Relevant capabilities: case-management, secure workflows, integrations, document systems, auditability',
        },
        {
          title: 'Energy and utilities platforms',
          text: 'Enterprise platforms and customer services for energy and utilities providers.',
          meta: 'Relevant capabilities: enterprise platforms, integrations, APIs, customer portals, data-driven services',
        },
        {
          title: 'Customer and partner portals',
          text: 'Web portals for customers and partners backed by APIs and identity management.',
          meta: 'Relevant capabilities: web apps, frontend, backend, APIs, identity, workflow integration',
        },
        {
          title: 'Integration platforms and API ecosystems',
          text: 'API-first integration platforms and ecosystems connecting systems and partners.',
          meta: 'Relevant capabilities: API-first, event streaming, Kafka, API governance, partner APIs',
        },
        {
          title: 'Workflow-enabled business applications',
          text: 'Business applications with orchestrated, auditable workflows and approvals.',
          meta: 'Relevant capabilities: Temporal, Camunda, Business APIs, approvals, service tasks, audit trails',
        },
        {
          title: 'AI-enabled digital services',
          text: 'Digital services prepared for safe use by AI agents with human oversight.',
          meta: 'Relevant capabilities: AI-agent-ready APIs, KumuluzAI integration, Business APIs, human approval, auditability',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Reference architecture for enterprise digital solutions',
      body: [
        'A production digital solution separates user channels, frontend, backend, APIs, business capabilities, workflows, integrations and AI-agent access into clear layers — a more secure, scalable and maintainable architecture than tightly coupled systems.',
      ],
      columns: 3,
      variant: 'numbered',
      items: [
        {
          title: 'User channels',
          text: 'Web applications, mobile apps, portals and customer-facing digital channels.',
        },
        {
          title: 'Frontend and experience layer',
          text: 'Angular and React applications delivering responsive, API-driven experiences.',
        },
        {
          title: 'Backend and service layer',
          text: 'Java, .NET and Python services implementing business logic and operations.',
        },
        {
          title: 'API layer',
          text: 'REST and event-driven APIs exposing capabilities to applications and partners.',
        },
        {
          title: 'Business API layer',
          text: 'Reusable Business APIs that act as governed business capabilities.',
        },
        {
          title: 'Workflow layer',
          text: 'Temporal and Camunda orchestration for long-running and process-critical steps.',
        },
        {
          title: 'Integration layer',
          text: 'Connectors and integrations to enterprise systems, partners and external APIs.',
        },
        {
          title: 'AI-agent-ready layer',
          text: 'Tool-safe APIs and MCP-oriented tools for controlled access by AI agents.',
        },
        {
          title: 'Enterprise systems',
          text: 'CRM, ERP, core banking, insurance, document and case-management systems.',
        },
        {
          title: 'Operations layer',
          text: 'CI/CD, observability, monitoring and production operations across the platform.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'How we deliver digital solutions',
      numbered: true,
      items: [
        {
          title: 'Understand the business and technology context',
          text: 'We work with stakeholders to understand goals, constraints, systems and the surrounding landscape.',
        },
        {
          title: 'Define the architecture',
          text: 'We define backend, frontend, mobile, API, integration and workflow architecture aligned with business needs.',
        },
        {
          title: 'Build iteratively',
          text: 'We develop the solution in focused iterations that deliver value and reduce delivery risk.',
        },
        {
          title: 'Integrate with enterprise systems',
          text: 'We connect the solution to enterprise systems, identity providers, data sources and partner APIs.',
        },
        {
          title: 'Prepare for production',
          text: 'We address security, scalability, observability and operational readiness for stable production.',
        },
        {
          title: 'Enable workflows and automation',
          text: 'We add workflow orchestration and automation for long-running and process-critical operations.',
        },
        {
          title: 'Prepare for AI-enabled use cases',
          text: 'We expose approved capabilities through tool-safe APIs so AI agents can use them safely.',
        },
        {
          title: 'Evolve and support',
          text: 'We support, maintain and evolve the solution as business needs and technology change.',
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
          title: 'Backend',
          text: 'Java, .NET, Python, microservices and APIs.',
        },
        {
          title: 'Frontend',
          text: 'Angular, React, portals and dashboards.',
        },
        {
          title: 'Mobile',
          text: 'Native iOS and Android, secure architectures and push notifications.',
        },
        {
          title: 'APIs',
          text: 'REST, event-driven, API-first design and gateway integration.',
        },
        {
          title: 'Integrations',
          text: 'Kafka, event streaming, connectors and partner integrations.',
        },
        {
          title: 'Workflows',
          text: 'Temporal, Camunda, approvals and audit trails.',
        },
        {
          title: 'Architecture',
          text: 'Cloud-native, microservices, event-driven and AI-agent-ready architecture.',
        },
        {
          title: 'Security and identity',
          text: 'OAuth2, OIDC, Keycloak, Microsoft Entra ID and RBAC.',
        },
        {
          title: 'Delivery',
          text: 'CI/CD, DevOps, observability and production readiness.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Digital solutions in practice',
      columns: 3,
      cta: 'Explore our references',
      ctaHref: 'references/',
      variant: 'feature',
      items: [
        {
          label: 'Reference',
          title: 'NLB Klik',
          text: 'A digital banking solution delivering frontend and backend for a modern customer banking experience.',
        },
        {
          label: 'Reference',
          title: 'KYC — NLB',
          text: 'Digital KYC and integrations supporting compliance and customer onboarding in banking.',
        },
        {
          label: 'Reference',
          title: 'eSpis — Supreme Court',
          text: 'A digital case-management solution supporting judicial workflows in the public sector.',
        },
        {
          label: 'Reference',
          title: 'IKA — Supreme Court',
          text: 'An enterprise information system supporting court administration and operations.',
        },
        {
          label: 'Reference',
          title: 'Akrapovič Website',
          text: 'A high-performance website for a global premium brand with demanding quality expectations.',
        },
        {
          label: 'Reference',
          title: 'Akrapovič Business Portal',
          text: 'A business portal supporting partner, customer and internal workflows.',
        },
        {
          label: 'Reference',
          title: 'Energetika Moj utrip',
          text: 'A digital solution for customer engagement and energy services in the energy sector.',
        },
        {
          label: 'Reference',
          title: 'Inorma — Zavarovalniška skupina Sava',
          text: 'An enterprise integration platform connecting systems across an insurance group.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'Why Sunesis for digital solutions development',
      numbered: true,
      items: [
        {
          title: 'Full-stack enterprise delivery',
          text: 'We deliver complete solutions across backend, frontend, mobile, APIs, integrations and workflows.',
        },
        {
          title: 'Strong integration expertise',
          text: 'We connect digital solutions reliably with complex enterprise systems and partner ecosystems.',
        },
        {
          title: 'Senior engineering teams',
          text: 'Experienced engineers who understand enterprise architecture, security and operational constraints.',
        },
        {
          title: 'API-first and platform-oriented thinking',
          text: 'We design reusable, well-governed APIs and platforms rather than isolated applications.',
        },
        {
          title: 'Cloud-native and DevOps awareness',
          text: 'We build cloud-native solutions with CI/CD, observability and production readiness in mind.',
        },
        {
          title: 'Workflow and automation readiness',
          text: 'We embed orchestration and automation for long-running and process-critical operations.',
        },
        {
          title: 'Prepared for AgenticAI',
          text: 'We design services and APIs that AI agents can use safely under governance and oversight.',
        },
        {
          title: 'Proven enterprise references',
          text: 'A track record across banking, insurance, energy, public sector and premium brands.',
        },
      ],
    },
    {
      type: 'finalCta',
      title: 'Need to build or modernize a business-critical digital solution?',
      body: [
        'Whether you are developing a new platform, modernizing existing systems or connecting enterprise applications, Sunesis brings the team, architecture, integrations and platform thinking to deliver it reliably.',
        'We also help prepare your services for AI-enabled automation, so your digital solutions are ready for users, partners, systems and AI agents.',
      ],
      primaryCta: 'Talk to our experts',
      secondaryCta: 'Explore our expertise',
    },
  ],
}

const sl: ExpertisePageContent = {
  seo: {
    title:
      'Razvoj digitalnih rešitev | Enterprise programska oprema, splet, mobilne aplikacije, API-ji in integracije | Sunesis',
    description:
      'Sunesis načrtuje in razvija enterprise digitalne rešitve, backend sisteme, spletne in mobilne aplikacije, API-je, integracije, workflowe in digitalne platforme, pripravljene za AI agente.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Razvoj digitalnih rešitev',
    title:
      'Gradimo varne, skalabilne in integracijsko pripravljene digitalne platforme',
    body: [
      'Sunesis načrtuje in gradi celovite digitalne rešitve — od backend sistemov in integracij do spletnih, mobilnih in uporabniških aplikacij — za organizacije, ki potrebujejo varno, skalabilno in poslovno kritično programsko opremo. Pri tem združujemo izkušene razvojne ekipe, enterprise arhitekturo, API-first pristop in dolgoletne izkušnje s produkcijsko dostavo.',
      'Naše digitalne rešitve niso zasnovane le za današnje aplikacije, temveč za jutrišnje, z umetno inteligenco podprto podjetje — kjer lahko storitve, API-je, workflowe in poslovne zmožnosti varno uporabljajo uporabniki, partnerji, sistemi in AI agenti.',
    ],
    primaryCta: 'Pogovorite se z našimi strokovnjaki',
    secondaryCta: 'Raziščite naše ekspertize',
    trustLine:
      'Zgrajeno za bančništvo, zavarovalništvo, energetiko, javni sektor, proizvodnjo, premium blagovne znamke in enterprise storitvena okolja.',
  },
  sections: [
    {
      type: 'split',
      title: 'Od poslovne ideje do produkcijsko pripravljene digitalne rešitve',
      body: [
        'Sodobni digitalni produkti ne delujejo več izolirano. Povezujejo se z jedrnimi sistemi, izpostavljajo API-je, povezujejo podatke, podpirajo več kanalov, uveljavljajo varnost in se prilagajajo dejanski poslovni obremenitvi.',
        'Vse pogosteje morajo podpirati tudi AI asistente, AI agente, avtomatizacijo workflowov, partnerske ekosisteme in ponovno uporabne poslovne zmožnosti — brez ogrožanja varnosti ali nadzora.',
        'Sunesis dostavlja celovite digitalne rešitve čez celoten sklad — od arhitekture in backenda do spleta, mobilnih aplikacij, API-jev, integracij in workflowov.',
      ],
      quote:
        'Sunesis gradi enterprise digitalne rešitve, ki aplikacije, API-je, workflowe, podatke, poslovne sisteme in za AI pripravljene storitve povežejo v produkcijsko pripravljene platforme.',
    },
    {
      type: 'capabilities',
      title: 'Kaj gradimo',
      intro:
        'Digitalne rešitve razvijamo za organizacije, kjer štejejo zanesljivost, varnost, sposobnost integracije in dolgoročna vzdržljivost.',
      items: [
        {
          title: 'Enterprise backend sistemi',
          text: 'Robustni backend sistemi v jezikih Java, .NET ali Python z API-first arhitekturo in globoko integracijo v enterprise okolja.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Razvoj backenda v Javi',
            'Razvoj backenda v .NET',
            'Razvoj backenda v Pythonu',
            'API-first arhitektura',
            'Integracija z enterprise sistemi',
          ],
        },
        {
          title: 'Spletne aplikacije in razvoj frontenda',
          text: 'Enterprise spletne aplikacije in portali, zgrajeni z ogrodjema Angular in React, z odzivnimi uporabniškimi vmesniki, vodenimi prek API-jev.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Razvoj v Angularju',
            'Razvoj v Reactu',
            'Enterprise spletne aplikacije',
            'Portali za stranke, partnerje in zaposlene',
            'Odzivni vmesniki, vodeni prek API-jev',
          ],
        },
        {
          title: 'Native mobilne aplikacije',
          text: 'Varne native mobilne aplikacije za iOS in Android, povezane z backend API-ji in enterprise sistemi.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Native razvoj za iOS',
            'Native razvoj za Android',
            'Varna mobilna arhitektura',
            'Integracija z backend API-ji',
            'Potisna obvestila',
          ],
        },
        {
          title: 'API-first digitalne platforme',
          text: 'Digitalne platforme, zasnovane okoli čistih, dobro upravljanih API-jev, ki strežejo aplikacijam, partnerjem, sistemom in AI agentom.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Načrtovanje API-jev',
            'REST API-ji',
            'Dogodkovni API-ji',
            'Integracija prek API prehoda',
            'Za agente pripravljena in tool-safe zasnova API-jev',
          ],
        },
        {
          title: 'Enterprise integracije',
          wide: true,
          text: 'Zanesljive integracije, ki digitalne rešitve povežejo z okoliškim enterprise okoljem in zunanjimi partnerji.',
          bulletsTitle: 'Področja integracije',
          bullets: [
            'CRM, ERP in dokumentni sistemi',
            'Bančne in zavarovalniške platforme',
            'Upravljanje identitete in dostopa',
            'Zunanji in partnerski API-ji',
            'Sloji za modernizacijo zapuščinskih sistemov',
          ],
        },
        {
          title: 'Dogodkovna arhitektura in Kafka',
          text: 'Dogodkovne rešitve in asinhrone integracije, zgrajene na osnovi Kafke za skalabilno in rahlo sklopljeno komunikacijo.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Dogodkovna arhitektura',
            'Integracija na osnovi Kafke',
            'Pretakanje dogodkov',
            'Asinhrona komunikacija',
            'Opazljivost dogodkov',
          ],
        },
        {
          title: 'Digitalne rešitve z workflowi',
          text: 'Digitalne rešitve z vgrajeno orkestracijo workflowov z uporabo orodij Temporal in Camunda za dolgotrajne in procesno kritične operacije.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Integracija workflowov',
            'Dolgotrajni procesi',
            'Koraki s človeško odobritvijo',
            'Business API-ji kot zmožnosti workflowa',
            'Revizijske sledi workflowov',
          ],
        },
        {
          title: 'Za AI agente pripravljene digitalne storitve',
          text: 'Digitalne storitve, pripravljene tako, da lahko AI agenti odobrene zmožnosti varno uporabljajo prek nadzorovanih in revizijsko sledljivih vmesnikov.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Tool-safe API-ji',
            'Izpostavljanje orodij prek MCP',
            'Nadzorovan dostop do backenda',
            'Integracija s KumuluzAI in Kumuluz API',
            'Sledljivost dejanj agentov',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Zgrajeno za poslovno kritična okolja',
      columns: 4,
      items: [
        {
          title: 'Varnost že v zasnovi',
          text: 'Varnost, identiteta in nadzor dostopa so v arhitekturo vgrajeni že od začetka.',
        },
        {
          title: 'Skalabilnost in zmogljivost',
          text: 'Rešitve, zasnovane za skalabilnost in zmogljivost pod dejansko poslovno obremenitvijo.',
        },
        {
          title: 'Vzdržljivost',
          text: 'Čiste, modularne arhitekture, zgrajene za dolgoročni razvoj in podporo.',
        },
        {
          title: 'Integracijska pripravljenost',
          text: 'Zasnovano za povezovanje z okoliškimi enterprise sistemi in partnerji.',
        },
        {
          title: 'Operativna zanesljivost',
          text: 'Zanesljive in opazljive rešitve, pripravljene za stabilno produkcijsko delovanje.',
        },
        {
          title: 'API-first razmišljanje',
          text: 'Zmožnosti, izpostavljene prek čistih, ponovno uporabnih in dobro upravljanih API-jev.',
        },
        {
          title: 'Upoštevanje workflowov',
          text: 'Procesne meje in orkestracija so upoštevane kot del zasnove.',
        },
        {
          title: 'Uporabniška izkušnja',
          text: 'Odzivni in uporabni vmesniki čez splet, mobilne in uporabniške kanale.',
        },
      ],
    },
    {
      type: 'prose',
      title: 'Modernizacija obstoječih sistemov in digitalnih kanalov',
      body: [
        'Mnoge organizacije svojih sistemov ne potrebujejo zamenjati — potrebujejo jih razviti naprej. Sunesis pomaga uvesti API-je, modularne arhitekture, nove kanale, integracijske sloje, procesne meje in cloud-native temelje brez motenj v poslovanju.',
        'Obstoječe sisteme pomagamo pripraviti tudi za z umetno inteligenco podprto podjetje, tako da izpostavimo odobrene zmožnosti, ki jih lahko varno uporabljajo digitalni produkti, workflowi in AI agenti.',
      ],
    },
    {
      type: 'list',
      title: 'Poudarki modernizacije',
      items: [
        'Prehod aplikacij na novo platformo',
        'Razgradnja monolitov',
        'Uvajanje API-jev in integracijskih slojev',
        'Gradnja novih digitalnih kanalov',
        'Modernizacija frontenda in mobilnih aplikacij',
        'Izboljšanje skalabilnosti',
        'Dodajanje orkestracije workflowov',
        'Uvajanje dogodkovne arhitekture',
        'Priprava na cloud-native in DevOps',
        'Priprava zmožnosti za uporabo AI agentov',
      ],
    },
    {
      type: 'cards',
      title: 'Priprava digitalnih platform za AI agente',
      body: [
        'Od digitalnih rešitev se vse pogosteje pričakuje, da poleg uporabnikov in sistemov podpirajo tudi AI agente. Sunesis načrtuje platforme, kjer agenti do odobrenih zmožnosti dostopajo prek nadzorovanih, upravljanih in revizijsko sledljivih vmesnikov.',
      ],
      columns: 3,
      items: [
        {
          title: 'Tool-safe API-ji',
          text: 'API-ji, zasnovani za varno in nadzorovano uporabo s strani AI agentov in avtomatizacije.',
        },
        {
          title: 'Business API-ji',
          text: 'Ponovno uporabne poslovne zmožnosti, izpostavljene kot nadzorovana in za agente pripravljena orodja.',
        },
        {
          title: 'Orodja prek MCP',
          text: 'Zmožnosti, izpostavljene kot orodja prek MCP za nadzorovan dostop agentov.',
        },
        {
          title: 'Izvedba workflowov',
          text: 'Deterministična izvedba workflowov za dejanja, ki jih sprožijo agenti.',
        },
        {
          title: 'Nadzor prehoda in politik',
          text: 'Zahteve agentov so usmerjene skozi prehode z avtentikacijo in uveljavljanjem politik.',
        },
        {
          title: 'Sledljivost',
          text: 'Sledljivi zapisi o tem, katere zmožnosti so agenti uporabili in kdaj.',
        },
      ],
    },
    {
      type: 'kumuluz',
      title: 'Pospešeno s Kumuluz Digital Platform',
      body: [
        'Kjer je to smiselno, Sunesis uporablja Kumuluz Digital Platform in njene komponente za pospešitev cloud-native, mikrostoritvenih, na API-jih temelječih in za AI agente pripravljenih rešitev s ponovno uporabnimi temelji in preverjenimi gradniki.',
        'Na projektih Sunesis je Kumuluz praktičen pospeševalnik, ne pa dodatek k produktu — ekipam pomaga dostaviti hitreje, ob tem pa ohranjati odprte, standardne in vzdržljive rešitve.',
      ],
      items: [
        {
          title: 'Kumuluz Digital Platform',
          text: 'Temelj za cloud-native storitve, API-je, konektorje, MCP orodja in integracije workflowov.',
        },
        {
          title: 'Kumuluz API',
          text: 'Platforma za upravljanje API-jev in API prehod za izpostavljanje, varovanje in upravljanje API-jev.',
        },
        {
          title: 'Kumuluz Business API-ji',
          text: 'Ponovno uporabne poslovne zmožnosti za digitalne produkte, workflowe in AI agente.',
        },
        {
          title: 'KumuluzAI Platform',
          text: 'AgenticAI platforma, ki uporablja odobrene storitve, API-je, orodja in workflowe.',
        },
      ],
      cta: 'Raziščite platforme Kumuluz',
      ctaHref: 'https://kumuluz.com',
    },
    {
      type: 'cards',
      title: 'Digitalne rešitve po panogah in primerih uporabe',
      columns: 3,
      variant: 'tag',
      items: [
        {
          title: 'Digitalno bančništvo in finančne storitve',
          text: 'Varne digitalne bančne in finančne aplikacije čez kanale in sisteme.',
          meta: 'Relevantne zmožnosti: backend, frontend, mobilno, API-ji, integracije, varnost, podpora workflowom',
        },
        {
          title: 'Zavarovalniške digitalne platforme',
          text: 'Enterprise zavarovalniške aplikacije in platforme z močno integracijo in pripravljenostjo na umetno inteligenco.',
          meta: 'Relevantne zmožnosti: enterprise aplikacije, API-ji, integracije, podpora workflowom, varni podatki, za AI pripravljene storitve',
        },
        {
          title: 'Informacijski sistemi javnega sektorja',
          text: 'Informacijski sistemi za organizacije javnega sektorja z varnimi in revizijsko sledljivimi workflowi.',
          meta: 'Relevantne zmožnosti: upravljanje primerov, varni workflowi, integracije, dokumentni sistemi, sledljivost',
        },
        {
          title: 'Platforme za energetiko in oskrbo',
          text: 'Enterprise platforme in storitve za stranke za ponudnike energije in oskrbe.',
          meta: 'Relevantne zmožnosti: enterprise platforme, integracije, API-ji, portali za stranke, podatkovno vodene storitve',
        },
        {
          title: 'Portali za stranke in partnerje',
          text: 'Spletni portali za stranke in partnerje, podprti z API-ji in upravljanjem identitete.',
          meta: 'Relevantne zmožnosti: spletne aplikacije, frontend, backend, API-ji, identiteta, integracija workflowov',
        },
        {
          title: 'Integracijske platforme in API ekosistemi',
          text: 'API-first integracijske platforme in ekosistemi, ki povezujejo sisteme in partnerje.',
          meta: 'Relevantne zmožnosti: API-first, pretakanje dogodkov, Kafka, upravljanje API-jev, partnerski API-ji',
        },
        {
          title: 'Poslovne aplikacije z workflowi',
          text: 'Poslovne aplikacije z orkestriranimi in revizijsko sledljivimi workflowi ter odobritvami.',
          meta: 'Relevantne zmožnosti: Temporal, Camunda, Business API-ji, odobritve, storitvene naloge, revizijske sledi',
        },
        {
          title: 'Z umetno inteligenco podprte digitalne storitve',
          text: 'Digitalne storitve, pripravljene za varno uporabo s strani AI agentov pod človeškim nadzorom.',
          meta: 'Relevantne zmožnosti: za AI agente pripravljeni API-ji, integracija KumuluzAI, Business API-ji, človeška odobritev, sledljivost',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Referenčna arhitektura za enterprise digitalne rešitve',
      body: [
        'Produkcijska digitalna rešitev uporabniške kanale, frontend, backend, API-je, poslovne zmožnosti, workflowe, integracije in dostop AI agentov razdeli v jasne sloje — to je varnejša, bolj skalabilna in bolj vzdržljiva arhitektura kot tesno sklopljeni sistemi.',
      ],
      columns: 3,
      variant: 'numbered',
      items: [
        {
          title: 'Uporabniški kanali',
          text: 'Spletne aplikacije, mobilne aplikacije, portali in digitalni kanali za stranke.',
        },
        {
          title: 'Sloj frontenda in izkušnje',
          text: 'Aplikacije v Angularju in Reactu, ki zagotavljajo odzivne izkušnje, vodene prek API-jev.',
        },
        {
          title: 'Sloj backenda in storitev',
          text: 'Storitve v Javi, .NET in Pythonu, ki izvajajo poslovno logiko in operacije.',
        },
        {
          title: 'Sloj API-jev',
          text: 'REST in dogodkovni API-ji, ki zmožnosti izpostavljajo aplikacijam in partnerjem.',
        },
        {
          title: 'Sloj Business API',
          text: 'Ponovno uporabni Business API-ji, ki delujejo kot nadzorovane poslovne zmožnosti.',
        },
        {
          title: 'Sloj workflowov',
          text: 'Orkestracija z orodjema Temporal in Camunda za dolgotrajne in procesno kritične korake.',
        },
        {
          title: 'Sloj integracije',
          text: 'Konektorji in integracije z enterprise sistemi, partnerji in zunanjimi API-ji.',
        },
        {
          title: 'Za AI agente pripravljen sloj',
          text: 'Tool-safe API-ji in orodja prek MCP za nadzorovan dostop AI agentov.',
        },
        {
          title: 'Enterprise sistemi',
          text: 'CRM, ERP, jedrni bančni, zavarovalniški, dokumentni sistemi in sistemi za upravljanje primerov.',
        },
        {
          title: 'Sloj operacij',
          text: 'CI/CD, opazljivost sistemov, nadzor in produkcijske operacije čez platformo.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'Kako dostavljamo digitalne rešitve',
      numbered: true,
      items: [
        {
          title: 'Razumevanje poslovnega in tehnološkega konteksta',
          text: 'Z deležniki razumemo cilje, omejitve, sisteme in okoliško okolje.',
        },
        {
          title: 'Opredelitev arhitekture',
          text: 'Določimo arhitekturo backenda, frontenda, mobilnih aplikacij, API-jev, integracij in workflowov, usklajeno s poslovnimi potrebami.',
        },
        {
          title: 'Iterativna gradnja',
          text: 'Rešitev razvijamo v osredotočenih iteracijah, ki prinašajo vrednost in zmanjšujejo tveganje pri dostavi.',
        },
        {
          title: 'Integracija z enterprise sistemi',
          text: 'Rešitev povežemo z enterprise sistemi, ponudniki identitete, viri podatkov in partnerskimi API-ji.',
        },
        {
          title: 'Priprava na produkcijo',
          text: 'Poskrbimo za varnost, skalabilnost, opazljivost sistemov in operativno pripravljenost za stabilno produkcijo.',
        },
        {
          title: 'Omogočanje workflowov in avtomatizacije',
          text: 'Dodamo orkestracijo workflowov in avtomatizacijo za dolgotrajne in procesno kritične operacije.',
        },
        {
          title: 'Priprava na z umetno inteligenco podprte primere uporabe',
          text: 'Odobrene zmožnosti izpostavimo prek tool-safe API-jev, da jih lahko AI agenti varno uporabljajo.',
        },
        {
          title: 'Razvoj in podpora',
          text: 'Rešitev podpiramo, vzdržujemo in razvijamo, ko se poslovne potrebe in tehnologija spreminjajo.',
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
          title: 'Backend',
          text: 'Java, .NET, Python, mikrostoritve in API-ji.',
        },
        {
          title: 'Frontend',
          text: 'Angular, React, portali in nadzorne plošče.',
        },
        {
          title: 'Mobilno',
          text: 'Native iOS in Android, varne arhitekture in potisna obvestila.',
        },
        {
          title: 'API-ji',
          text: 'REST, dogodkovni API-ji, API-first zasnova in integracija prehoda.',
        },
        {
          title: 'Integracije',
          text: 'Kafka, pretakanje dogodkov, konektorji in partnerske integracije.',
        },
        {
          title: 'Workflowi',
          text: 'Temporal, Camunda, odobritve in revizijske sledi.',
        },
        {
          title: 'Arhitektura',
          text: 'Cloud-native, mikrostoritve, dogodkovna in za AI agente pripravljena arhitektura.',
        },
        {
          title: 'Varnost in identiteta',
          text: 'OAuth2, OIDC, Keycloak, Microsoft Entra ID in RBAC.',
        },
        {
          title: 'Dostava',
          text: 'CI/CD, DevOps, opazljivost sistemov in produkcijska pripravljenost.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Digitalne rešitve v praksi',
      columns: 3,
      cta: 'Oglejte si reference',
      ctaHref: 'references/',
      variant: 'feature',
      items: [
        {
          label: 'Referenca',
          title: 'NLB Klik',
          text: 'Digitalna bančna rešitev, ki zagotavlja frontend in backend za sodobno bančno izkušnjo strank.',
        },
        {
          label: 'Referenca',
          title: 'KYC — NLB',
          text: 'Digitalni KYC in integracije v podporo skladnosti in onboardingu strank v bančništvu.',
        },
        {
          label: 'Referenca',
          title: 'eSpis — Supreme Court',
          text: 'Digitalna rešitev za upravljanje primerov v podporo sodnim workflowom v javnem sektorju.',
        },
        {
          label: 'Referenca',
          title: 'IKA — Supreme Court',
          text: 'Enterprise informacijski sistem v podporo sodni upravi in njenemu delovanju.',
        },
        {
          label: 'Referenca',
          title: 'Akrapovič Website',
          text: 'Visokozmogljivo spletno mesto za globalno premium blagovno znamko z zahtevnimi pričakovanji glede kakovosti.',
        },
        {
          label: 'Referenca',
          title: 'Akrapovič Business Portal',
          text: 'Poslovni portal v podporo partnerskim, strankam namenjenim in internim workflowom.',
        },
        {
          label: 'Referenca',
          title: 'Energetika Moj utrip',
          text: 'Digitalna rešitev za vključevanje strank in energetske storitve v energetskem sektorju.',
        },
        {
          label: 'Referenca',
          title: 'Inorma — Zavarovalniška skupina Sava',
          text: 'Enterprise integracijska platforma, ki povezuje sisteme po zavarovalniški skupini.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'Zakaj Sunesis za razvoj digitalnih rešitev',
      numbered: true,
      items: [
        {
          title: 'Celovita enterprise dostava',
          text: 'Dostavljamo celovite rešitve čez backend, frontend, mobilne aplikacije, API-je, integracije in workflowe.',
        },
        {
          title: 'Močno znanje integracij',
          text: 'Digitalne rešitve zanesljivo povezujemo s kompleksnimi enterprise sistemi in partnerskimi ekosistemi.',
        },
        {
          title: 'Izkušene razvojne ekipe',
          text: 'Izkušeni inženirji, ki razumejo enterprise arhitekturo, varnost in operativne omejitve.',
        },
        {
          title: 'API-first in platformno usmerjeno razmišljanje',
          text: 'Načrtujemo ponovno uporabne in dobro upravljane API-je ter platforme namesto izoliranih aplikacij.',
        },
        {
          title: 'Poznavanje cloud-native in DevOps',
          text: 'Gradimo cloud-native rešitve z mislijo na CI/CD, opazljivost sistemov in produkcijsko pripravljenost.',
        },
        {
          title: 'Pripravljenost na workflowe in avtomatizacijo',
          text: 'Vgrajujemo orkestracijo in avtomatizacijo za dolgotrajne in procesno kritične operacije.',
        },
        {
          title: 'Pripravljeni na AgenticAI',
          text: 'Načrtujemo storitve in API-je, ki jih lahko AI agenti varno uporabljajo pod nadzorom in upravljanjem.',
        },
        {
          title: 'Preverjene enterprise reference',
          text: 'Dokazane izkušnje v bančništvu, zavarovalništvu, energetiki, javnem sektorju in pri premium blagovnih znamkah.',
        },
      ],
    },
    {
      type: 'finalCta',
      title:
        'Potrebujete gradnjo ali modernizacijo poslovno kritične digitalne rešitve?',
      body: [
        'Naj razvijate novo platformo, modernizirate obstoječe sisteme ali povezujete enterprise aplikacije — Sunesis prinaša ekipo, arhitekturo, integracije in platformno razmišljanje za zanesljivo dostavo.',
        'Vaše storitve pomagamo pripraviti tudi za z umetno inteligenco podprto avtomatizacijo, da so vaše digitalne rešitve pripravljene za uporabnike, partnerje, sisteme in AI agente.',
      ],
      primaryCta: 'Pogovorite se z našimi strokovnjaki',
      secondaryCta: 'Raziščite naše ekspertize',
    },
  ],
}

export const digitalSolutionsPage: Record<LanguageCode, ExpertisePageContent> =
  {
    en,
    sl,
  }
