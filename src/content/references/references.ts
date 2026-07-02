import type { LanguageCode } from '../../lib/router'
import type {
  FinalCtaBlock,
  ReferenceSlug,
  ReferencesPageContent,
} from '../../views/references/types'

const CLIENT_LOGOS = [
  '2_nlb',
  '6_otp',
  'pbs',
  '5_sava',
  '8_generali',
  'adriatic-slovenica',
  'prva',
  'ministry_justice',
  'ministry_public_admin',
  'riko',
  'vsrs',
  'zzzs',
  '4_petrol',
  'gen-i',
  'energetika_ljubljana',
  'plinovodi',
  '9_snaga',
  'cybergrid',
  'solvera_lynx',
  '3_akrapovic',
  '7_flare',
  '1_ibm',
  '9_oracle',
  'ebcont',
  'everis',
  'src',
] as const

const FINAL_CTA_EN: FinalCtaBlock = {
  type: 'finalCta',
  title:
    'Looking for a technology partner with proven enterprise and open-source experience?',
  body: [
    'Whether you are building a digital platform, introducing AgenticAI, modernizing integrations, strengthening DevOps, contributing to open-source infrastructure or exploring cloud-edge architectures, Sunesis can help you move from idea to production.',
  ],
  primaryCta: 'Talk to our experts',
  secondaryCta: 'Explore our expertise',
}

const FINAL_CTA_SL: FinalCtaBlock = {
  type: 'finalCta',
  title:
    'Iščete tehnološkega partnerja z dokazanimi enterprise in odprtokodnimi izkušnjami?',
  body: [
    'Ne glede na to, ali gradite digitalno platformo, uvajate AgenticAI, posodabljate integracije, krepite DevOps, prispevate k odprtokodni infrastrukturi ali raziskujete cloud-edge arhitekture, vam Sunesis pomaga na poti od ideje do produkcije.',
  ],
  primaryCta: 'Pogovorite se z našimi strokovnjaki',
  secondaryCta: 'Raziščite naše ekspertize',
}

const selectedWorkEn: ReferencesPageContent = {
  seo: {
    title:
      'Selected Work | Enterprise, AI, DevOps and Open-Source Projects | Sunesis',
    description:
      'Featured Sunesis projects across digital banking, AgenticAI, insurance automation, DevOps for blockchain infrastructure and open-source supply-chain and energy solutions.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Selected Work',
    title: 'Featured client and partner projects',
    body: [
      'A selection of client and partner projects where Sunesis contributes to digital platforms, AgenticAI solutions, enterprise integrations, DevOps foundations, open-source systems and business-critical software.',
      'These references reflect architecture, engineering depth, integration capability and production-ready delivery across demanding environments.',
    ],
    primaryCta: 'Talk to our experts',
  },
  sections: [
    {
      type: 'split',
      title: 'Proven delivery in demanding environments',
      body: [
        'Sunesis works on projects where technology must be secure, scalable, integrated, observable and reliable.',
        'Our clients and partners operate in environments where systems support real business processes, regulated operations, digital customer channels, critical infrastructure, open-source ecosystems and international innovation initiatives.',
        'We are trusted when projects require more than development capacity — when they require architecture, engineering depth, integration capability, DevOps maturity, platform thinking and long-term technical ownership. Together, enterprise delivery, open-source engineering and research-driven innovation make Sunesis a partner that can deliver production systems today while understanding the platforms of tomorrow.',
      ],
      quote:
        'Sunesis combines enterprise delivery, open-source engineering and research-driven innovation to build reliable digital platforms, AI solutions, integrations and production-grade software systems.',
    },
    {
      type: 'references',
      title: 'Client and partner projects',
      items: [
        {
          label: 'Digital banking platform',
          title: 'NLB Klik',
          body: [
            'Sunesis contributes to frontend and backend development for NLB Klik, supporting modern digital banking experiences and complex banking journeys for one of the leading financial institutions in the region.',
            'The work reflects Sunesis expertise in secure digital channels, enterprise backend development, integrations and production-ready financial services software.',
          ],
          expertiseTitle: 'Sunesis expertise',
          expertise: [
            'Frontend development',
            'Backend development',
            'Enterprise integrations',
            'Digital banking',
            'Secure and scalable services',
            'Business-critical delivery',
          ],
        },
        {
          label: 'AgenticAI solution',
          title: 'RikoAI',
          body: [
            'RikoAI is an AgenticAI solution designed to support intelligent assistance, knowledge-driven automation and business process optimization in an enterprise environment.',
            'The solution demonstrates how enterprise knowledge, AI assistants, controlled integrations and process context can be combined to improve user support, decision-making and operational efficiency.',
          ],
          expertiseTitle: 'Sunesis expertise',
          expertise: [
            'AgenticAI',
            'Enterprise AI assistants',
            'Knowledge-driven automation',
            'Business process support',
            'Secure AI architecture',
            'KumuluzAI-based delivery',
          ],
        },
        {
          label: 'Insurance process automation',
          title: 'AgenticAI Platform — Zavarovalniška skupina Sava',
          body: [
            'Sunesis developed an enterprise AgenticAI platform for Zavarovalniška skupina Sava, enabling intelligent process automation, secure use of organizational knowledge and integration with business systems.',
            'The project demonstrates how AI agents can support insurance processes through governed knowledge access, tool use, API integrations, enterprise controls and production-ready platform delivery.',
          ],
          expertiseTitle: 'Sunesis expertise',
          expertise: [
            'AgenticAI platform',
            'AI agents',
            'Insurance process automation',
            'Enterprise integrations',
            'Governance and secure AI',
            'KumuluzAI platform delivery',
          ],
        },
        {
          label: 'DevOps for blockchain infrastructure',
          title: 'Flare',
          body: [
            'Sunesis provides DevOps and platform engineering expertise for Flare, supporting automation, cloud-native operations and reliable delivery practices for a large-scale blockchain infrastructure environment.',
            'This reference demonstrates Sunesis capability in demanding infrastructure environments where automation, platform reliability, Kubernetes-based operations and production-grade delivery foundations are essential.',
          ],
          expertiseTitle: 'Sunesis expertise',
          expertise: [
            'DevOps engineering',
            'Platform engineering',
            'Kubernetes-based operations',
            'Automation and deployment',
            'Production-grade infrastructure',
            'Blockchain infrastructure',
            'Operational reliability',
          ],
        },
        {
          label: 'Open-source supply-chain traceability',
          title: 'INATrace',
          body: [
            'Sunesis was the main development partner for INATrace, an open-source digital traceability solution for transparent agricultural supply chains.',
            'INATrace supports end-to-end traceability, helping supply-chain actors record, manage and share traceability data from production to final product. The project has joined the Linux Foundation AgStack community, strengthening its open-source future and global collaboration potential.',
          ],
          expertiseTitle: 'Sunesis expertise',
          expertise: [
            'Main solution development',
            'Open-source engineering',
            'Supply-chain traceability',
            'Backend development',
            'Web and mobile applications',
            'Data and process workflows',
            'Linux Foundation ecosystem',
          ],
        },
        {
          label: 'Open-source energy interoperability toolkit',
          title: 'CUPID',
          body: [
            'Sunesis was a main development partner and contributing partner for CUPID, an open-source interoperability toolkit for distributed energy resource communication.',
            'CUPID is hosted at LF Energy and focuses on distributed energy resource interoperability, modern communication patterns and open-source components for scalable DER communication, with expertise in Java-based development, NATS messaging, protocol integration and edge-to-cloud deployment scenarios.',
          ],
          expertiseTitle: 'Sunesis expertise',
          expertise: [
            'Main solution development',
            'Open-source contribution',
            'Energy interoperability',
            'Java-based development',
            'NATS messaging',
            'Protocol integration',
            'Edge, on-premise and cloud',
            'Linux Foundation ecosystem',
          ],
        },
      ],
    },
    {
      type: 'projects',
      eyebrow: 'More enterprise projects',
      title: 'Digital channels, platforms and integrations',
      intro:
        'Our work covers digital channels, enterprise platforms, integrations, public sector systems, energy platforms and premium brand digital experiences.',
      columns: 4,
      items: [
        {
          label: 'Banking compliance and onboarding',
          title: 'KYC — NLB',
          text: 'Digital KYC solution and integrations supporting banking compliance, customer onboarding and regulated digital processes.',
          meta: 'Digital banking, integrations, compliance workflows, backend systems, secure processes.',
        },
        {
          label: 'Digital case-management system',
          title: 'eSpis — Supreme Court',
          text: 'Digital case-management solution supporting judicial workflows, secure document handling and court processes.',
          meta: 'Public sector systems, secure workflows, document management, enterprise backend, case management.',
        },
        {
          label: 'Court administration information system',
          title: 'IKA — Supreme Court',
          text: 'Enterprise information system supporting advanced court administration and operational processes.',
          meta: 'Public sector, enterprise applications, process support, integrations, operational systems.',
        },
        {
          label: 'Energy infrastructure platform',
          title: 'EPUS — Plinovodi',
          text: 'Business-critical enterprise platform supporting energy infrastructure and operational workflows.',
          meta: 'Energy and utilities, enterprise platforms, integrations, operational systems, business-critical delivery.',
        },
        {
          label: 'Premium brand digital presence',
          title: 'Akrapovič Website',
          text: 'High-performance website for a global premium brand, supporting digital presentation, brand experience and online engagement.',
          meta: 'Web development, performance, user experience, digital brand presence.',
        },
        {
          label: 'Enterprise business portal',
          title: 'Akrapovič Business Portal',
          text: 'Digital business portal supporting partner, customer and internal enterprise workflows.',
          meta: 'Business portals, frontend, backend, integrations, partner services.',
        },
        {
          label: 'Enterprise integration platform',
          title: 'Inorma — Zavarovalniška skupina Sava',
          text: 'Integration platform connecting systems, data flows and business processes across an insurance group.',
          meta: 'Enterprise integrations, API architecture, data flows, insurance systems, integration governance.',
        },
        {
          label: 'Digital customer engagement solution',
          title: 'Energetika Moj utrip',
          text: 'Digital solution supporting modern customer engagement and energy-related services.',
          meta: 'Customer portals, digital services, energy sector, integrations.',
        },
      ],
    },
    {
      type: 'cards',
      eyebrow: 'Expertise proven through real work',
      title: 'How our references connect to our expertise',
      intro:
        'Our references demonstrate how Sunesis expertise areas come together in real-world enterprise, open-source and innovation projects.',
      columns: 3,
      variant: 'accent',
      items: [
        {
          label: 'AgenticAI Solutions',
          title: 'Enterprise AI agents and platforms',
          text: 'RikoAI and the AgenticAI Platform for Zavarovalniška skupina Sava demonstrate our ability to build enterprise AI agents, process automation and secure AI platforms.',
        },
        {
          label: 'Digital Solutions Development',
          title: 'Full-stack delivery',
          text: 'NLB Klik, KYC, eSpis, IKA, Akrapovič Business Portal, Energetika Moj utrip and INATrace show our delivery across backend, frontend, mobile, portals, workflows and integrations.',
        },
        {
          label: 'Cloud-native & Edge Architectures',
          title: 'Distributed architecture',
          text: 'Inorma, CUPID, Kumuluz-related projects and our R&I portfolio demonstrate expertise in cloud-native systems, Kubernetes, distributed architectures, NATS, interoperability and edge-fog-cloud concepts.',
        },
        {
          label: 'API Ecosystems & Integrations',
          title: 'APIs and integration architecture',
          text: 'Inorma, KYC, NLB Klik, CUPID and Kumuluz API demonstrate our ability to design APIs, integration architectures, data flows, event-driven systems and reusable digital capabilities.',
        },
        {
          label: 'DevOps & Platform Engineering',
          title: 'Production-grade operations',
          text: 'Flare and our platform work demonstrate our ability to support demanding infrastructure, automation, Kubernetes-based operations, CI/CD and production-grade delivery foundations.',
        },
        {
          label: 'Open Source Engineering',
          title: 'Complete open-source solutions',
          text: 'INATrace and CUPID demonstrate our ability to build complete open-source solutions that become part of international foundation ecosystems.',
        },
      ],
    },
    FINAL_CTA_EN,
  ],
}

const openSourceEn: ReferencesPageContent = {
  seo: {
    title:
      'Open Source | Linux Foundation Projects, INATrace and CUPID | Sunesis',
    description:
      'Sunesis open-source engineering: complete production-grade solutions including INATrace (Linux Foundation AgStack) and CUPID (LF Energy) for shared digital infrastructure.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Open Source',
    title: 'Open-source engineering for shared digital infrastructure',
    body: [
      'Sunesis has a strong commitment to open-source software, open standards and reusable digital infrastructure.',
      'We help build complete open-source solutions — including projects connected to Linux Foundation ecosystems such as AgStack and LF Energy — that continue to evolve through international communities.',
    ],
    primaryCta: 'Talk to our experts',
  },
  sections: [
    {
      type: 'prose',
      title: 'Our open-source commitment',
      intro:
        'Our teams do not only use open-source technologies — we help build complete open-source solutions that continue to evolve through international communities.',
      body: [
        'Projects such as INATrace and CUPID show that Sunesis can develop production-oriented software that serves broader ecosystems beyond a single client or implementation.',
        'Open source is important because modern digital infrastructure increasingly depends on interoperability, transparency, community collaboration and long-term maintainability. Sunesis brings enterprise engineering discipline to open-source projects: architecture, security, maintainability, documentation, integration capability and production-quality implementation.',
        'This makes our open-source work especially relevant for sectors where digital infrastructure needs to be shared across organizations, communities and international ecosystems.',
      ],
    },
    {
      type: 'cards',
      title: 'What our open-source work delivers',
      columns: 3,
      variant: 'accent',
      items: [
        {
          title: 'Open digital infrastructure',
          text: 'We help develop software foundations that can be reused, extended and maintained by broader communities.',
        },
        {
          title: 'Open standards and interoperability',
          text: 'Our work supports interoperability across systems, sectors and organizations — from agricultural supply chains to distributed energy infrastructure.',
        },
        {
          title: 'Community-oriented engineering',
          text: 'We build software that is understandable, maintainable and suitable for collaborative development.',
        },
        {
          title: 'Enterprise-grade open source',
          text: 'Our open-source work is grounded in the same engineering discipline we apply to enterprise systems: architecture, reliability, security, documentation and long-term maintainability.',
        },
        {
          title: 'Linux Foundation ecosystem experience',
          text: 'INATrace and CUPID demonstrate Sunesis experience with projects connected to Linux Foundation ecosystems such as AgStack and LF Energy.',
        },
      ],
    },
    {
      type: 'references',
      eyebrow: 'Highlighted open-source projects',
      title: 'Production-grade software for open ecosystems',
      items: [
        {
          label: 'Agricultural supply-chain traceability',
          title: 'INATrace',
          body: [
            'INATrace is an open-source agricultural supply-chain traceability solution focused on transparency, fairer value chains and digital traceability from production to final product.',
            'Sunesis was the main development partner, contributing full-stack engineering, backend architecture, web and mobile development, data workflows and open-source implementation.',
          ],
          expertiseTitle: 'Key themes',
          expertise: [
            'Agricultural traceability',
            'Transparency and accountability',
            'Open-source infrastructure',
            'Web and mobile applications',
            'Data and process workflows',
            'Linux Foundation AgStack',
          ],
        },
        {
          label: 'Energy interoperability toolkit',
          title: 'CUPID',
          body: [
            'CUPID is an open-source energy interoperability toolkit hosted in the LF Energy ecosystem.',
            'Sunesis was a main development and contributing partner, supporting Java-based development, NATS messaging, interoperability patterns, protocol integration and edge/on-prem/cloud deployment scenarios.',
          ],
          expertiseTitle: 'Key themes',
          expertise: [
            'DER interoperability',
            'Open-source energy infrastructure',
            'Java-based development',
            'NATS messaging',
            'Protocol integration',
            'Edge and cloud deployment',
            'LF Energy ecosystem',
          ],
        },
      ],
    },
    FINAL_CTA_EN,
  ],
}

const clientsIndustriesEn: ReferencesPageContent = {
  seo: {
    title:
      'Clients & Industries | Banking, Insurance, Public Sector, Energy | Sunesis',
    description:
      'Industries where Sunesis delivers digital platforms, integrations, DevOps foundations, AgenticAI and business-critical software: banking, insurance, public sector, energy and more.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Clients & Industries',
    title: 'Industries where reliable software matters most',
    body: [
      'We work with organizations across industries where software reliability, security, integration capability and delivery quality are essential.',
      'Our experience spans regulated sectors, complex enterprise environments, open-source ecosystems and technology-driven organizations.',
    ],
    primaryCta: 'Talk to our experts',
  },
  sections: [
    {
      type: 'split',
      title: 'How we support our clients',
      body: [
        'Sunesis works on projects where technology must be secure, scalable, integrated, observable and reliable.',
        'We support clients and partners that need digital platforms, secure integrations, cloud-native architectures, AgenticAI automation, reliable DevOps foundations, API ecosystems and reusable digital infrastructure.',
        'Many of our engagements connect multiple systems, data flows, users, devices and channels — across regulated operations, critical infrastructure and international ecosystems.',
      ],
    },
    {
      type: 'capabilities',
      title: 'Industries we serve',
      items: [
        {
          title: 'Banking & Financial Services',
          text: 'Digital banking platforms, KYC workflows, secure customer journeys, enterprise integrations, API-based services and compliance-sensitive systems.',
          bulletsTitle: 'Example references',
          bullets: ['NLB Klik', 'KYC — NLB'],
        },
        {
          title: 'Insurance',
          text: 'AgenticAI platforms, process automation, integration platforms, knowledge-driven systems and secure digital services.',
          bulletsTitle: 'Example references',
          bullets: [
            'AgenticAI Platform — Zavarovalniška skupina Sava',
            'Inorma — Zavarovalniška skupina Sava',
          ],
        },
        {
          title: 'Public Sector',
          text: 'Case-management systems, secure workflows, digital administration, document-heavy processes and enterprise information systems.',
          bulletsTitle: 'Example references',
          bullets: ['eSpis — Supreme Court', 'IKA — Supreme Court'],
        },
        {
          title: 'Energy & Utilities',
          text: 'Operational platforms, customer engagement solutions, data exchange, DER interoperability, integrations and critical business systems.',
          bulletsTitle: 'Example references',
          bullets: ['EPUS — Plinovodi', 'Energetika Moj utrip', 'CUPID'],
        },
        {
          title: 'Agriculture & Supply Chains',
          text: 'Open-source traceability solutions, supply-chain transparency, data ownership and digital tools for agricultural value chains.',
          bulletsTitle: 'Example references',
          bullets: ['INATrace'],
        },
        {
          title: 'Manufacturing & Premium Brands',
          text: 'Digital presence, business portals, partner platforms, customer services and enterprise workflows.',
          bulletsTitle: 'Example references',
          bullets: ['Akrapovič Website', 'Akrapovič Business Portal'],
        },
        {
          title: 'Blockchain & Web3 Infrastructure',
          text: 'DevOps, platform engineering, automation and cloud-native operations for demanding blockchain infrastructure environments.',
          bulletsTitle: 'Example references',
          bullets: ['Flare'],
        },
        {
          title: 'Open Source & Linux Foundation Ecosystems',
          text: 'Development and contribution to open-source projects hosted in international foundations and communities.',
          bulletsTitle: 'Example references',
          bullets: ['INATrace', 'CUPID'],
        },
        {
          title: 'Technology & Research',
          text: 'International research and innovation projects in AI, cloud-edge systems, IoT, cybersecurity, data platforms and next-generation digital infrastructure.',
          bulletsTitle: 'Example references',
          bullets: [
            'GreenDat.AI',
            'NEPHELE',
            'dAIEDGE',
            'Resilmesh',
            'HEDGE-IoT',
          ],
        },
      ],
    },
    {
      type: 'logoWall',
      eyebrow: 'Selected clients, partners and ecosystems',
      title: 'Organizations and ecosystems we work with',
      intro:
        'We work with enterprise organizations, public-sector institutions, technology partners, open-source communities and European research consortia.',
      logos: CLIENT_LOGOS,
      folder: 'extras',
    },
    {
      type: 'cards',
      eyebrow: 'Why Sunesis',
      title: 'Why organizations choose Sunesis',
      columns: 4,
      variant: 'numbered',
      items: [
        {
          title: 'Deep technical expertise',
          text: 'Senior engineering knowledge across backend, frontend, mobile, integrations, cloud-native architecture, DevOps, Kubernetes, AI, APIs and enterprise platforms.',
        },
        {
          title: 'Enterprise delivery experience',
          text: 'We understand complex organizational environments, regulated processes, legacy systems, security requirements and long-term maintainability.',
        },
        {
          title: 'Integration capability',
          text: 'Many of our projects connect multiple systems, APIs, data flows, users, devices and channels. Integration is one of our core strengths.',
        },
        {
          title: 'Production mindset',
          text: 'We build systems that must operate reliably — with security, observability, deployment and supportability considered from the beginning.',
        },
        {
          title: 'Open-source commitment',
          text: 'Our work on INATrace and CUPID shows that we can develop solutions that create value beyond a single implementation.',
        },
        {
          title: 'Innovation track record',
          text: 'Our research and innovation projects keep us close to emerging technologies in AI, cloud-edge systems, IoT, cybersecurity and data platforms.',
        },
        {
          title: 'Platform thinking',
          text: 'Through Kumuluz and our delivery experience, we help organizations build reusable foundations instead of isolated one-off solutions.',
        },
        {
          title: 'Long-term ownership',
          text: 'Architecture, integration, platform reliability, security, governance and maintainability across the full lifecycle.',
        },
      ],
    },
    FINAL_CTA_EN,
  ],
}

const researchInnovationEn: ReferencesPageContent = {
  seo: {
    title:
      'Research & Innovation | EU AI, Cloud-Edge, IoT and Cybersecurity Projects | Sunesis',
    description:
      'Sunesis participates in international research and innovation projects across AI, cloud-edge architectures, IoT, cybersecurity, data platforms and next-generation digital infrastructure.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Research & Innovation',
    title: 'Research-driven innovation in emerging technology',
    body: [
      'Beyond client delivery and open-source contribution, Sunesis participates in international research and innovation projects that explore the future of artificial intelligence, cloud-edge architectures, IoT, cybersecurity, data platforms and next-generation digital infrastructure.',
      'These projects strengthen our expertise in emerging technologies and help us bring research-driven insight into enterprise delivery.',
    ],
    primaryCta: 'Talk to our experts',
  },
  sections: [
    {
      type: 'projects',
      eyebrow: 'European research and innovation',
      title: 'Research & Innovation portfolio',
      intro:
        'A selection of international research and innovation projects exploring AI, cloud-edge continuum, IoT, cybersecurity and energy-aware digital infrastructure.',
      columns: 4,
      items: [
        {
          label: 'AI and data-driven digital sustainability',
          title: 'GreenDat.AI',
          text: 'Research and innovation focused on AI, data platforms and greener, more efficient digital systems.',
          meta: 'AI, data platforms, sustainability, digital infrastructure, AI-ready data services.',
        },
        {
          label: 'Future-ready energy and digital infrastructure',
          title: 'Interstore',
          text: 'Advanced digital technologies for energy, interoperability, distributed systems and intelligent digital services.',
          meta: 'Energy systems, interoperability, data-driven systems, enterprise technology.',
        },
        {
          label: 'Compute continuum orchestration',
          title: 'Headlight / NEPHELE',
          text: 'AI-enabled, context-aware orchestration for next-generation compute continuum environments.',
          meta: 'Cloud-edge continuum, orchestration, AI-enabled infrastructure, distributed systems.',
        },
        {
          label: 'Cloud-edge-IoT systems',
          title: 'BONSAI / COSMIC',
          text: 'Research and innovation in advanced cloud-edge-IoT systems and intelligent digital infrastructure.',
          meta: 'Cloud-edge systems, IoT, distributed infrastructure, intelligent services.',
        },
        {
          label: 'AI-native edge orchestration',
          title: 'EDGEWISE / dAIEDGE',
          text: 'AI-native orchestration for trustworthy and energy-efficient systems across the IoT–Edge–Fog–Cloud continuum.',
          meta: 'AI-native orchestration, edge computing, federated environments, energy efficiency.',
        },
        {
          label: 'Kubernetes resilience and cybersecurity',
          title: 'CHAMELEON / Resilmesh',
          text: 'Adaptive Kubernetes resilience and cybersecurity using lightweight mesh concepts and advanced protection mechanisms.',
          meta: 'Kubernetes, cybersecurity, resilience, mesh architectures, distributed systems.',
        },
        {
          label: 'Intelligent IoT and edge computing',
          title: 'AURORA / HEDGE-IoT',
          text: 'Innovation in intelligent IoT, edge computing and energy-aware digital infrastructure.',
          meta: 'IoT, edge computing, distributed intelligence, energy-aware systems.',
        },
      ],
    },
    {
      type: 'logoWall',
      eyebrow: 'Consortium and research partners',
      title: 'European research and innovation partners',
      intro:
        'Universities, research institutes, technology companies and industry partners we collaborate with across international research and innovation consortia.',
      folder: 'horizon',
    },
    FINAL_CTA_EN,
  ],
}

const selectedWorkSl: ReferencesPageContent = {
  seo: {
    title:
      'Izbrani projekti | Enterprise, AI, DevOps in odprtokodni projekti | Sunesis',
    description:
      'Izpostavljeni projekti Sunesis na področju digitalnega bančništva, AgenticAI, avtomatizacije v zavarovalništvu, DevOps za blockchain infrastrukturo ter odprtokodnih rešitev za dobavne verige in energetiko.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Izbrani projekti',
    title: 'Izpostavljeni projekti strank in partnerjev',
    body: [
      'Izbor projektov strank in partnerjev, pri katerih Sunesis sodeluje pri digitalnih platformah, rešitvah AgenticAI, enterprise integracijah, temeljih DevOps, odprtokodnih sistemih in poslovno kritični programski opremi.',
      'Te reference odražajo arhitekturo, inženirsko poglobljenost, integracijske sposobnosti in produkcijsko zrelo izvedbo v zahtevnih okoljih.',
    ],
    primaryCta: 'Pogovorite se z našimi strokovnjaki',
  },
  sections: [
    {
      type: 'split',
      title: 'Dokazane izvedbe v zahtevnih okoljih',
      body: [
        'Sunesis dela na projektih, kjer mora biti tehnologija varna, skalabilna, integrirana, opazljiva in zanesljiva.',
        'Naše stranke in partnerji delujejo v okoljih, kjer sistemi podpirajo resnične poslovne procese, regulirano poslovanje, digitalne kanale do strank, kritično infrastrukturo, odprtokodne ekosisteme in mednarodne inovacijske pobude.',
        'Zaupajo nam, kadar projekti zahtevajo več kot zgolj razvojne kapacitete — kadar zahtevajo arhitekturo, inženirsko poglobljenost, integracijske sposobnosti, DevOps zrelost, platformsko razmišljanje in dolgoročno tehnično lastništvo. Enterprise izvedba, odprtokodni inženiring in z raziskavami podprte inovacije skupaj naredijo Sunesis za partnerja, ki zna danes dostaviti produkcijske sisteme in hkrati razume platforme prihodnosti.',
      ],
      quote:
        'Sunesis združuje enterprise izvedbo, odprtokodni inženiring in z raziskavami podprte inovacije za gradnjo zanesljivih digitalnih platform, rešitev AI, integracij in produkcijsko zrelih programskih sistemov.',
    },
    {
      type: 'references',
      title: 'Projekti strank in partnerjev',
      items: [
        {
          label: 'Platforma digitalnega bančništva',
          title: 'NLB Klik',
          body: [
            'Sunesis sodeluje pri razvoju frontenda in backenda za NLB Klik ter podpira sodobne digitalne bančne izkušnje in zahtevne bančne procese za eno vodilnih finančnih institucij v regiji.',
            'Delo odraža strokovnost Sunesis na področju varnih digitalnih kanalov, enterprise razvoja backenda, integracij in produkcijsko zrele programske opreme za finančne storitve.',
          ],
          expertiseTitle: 'Strokovnost Sunesis',
          expertise: [
            'Razvoj frontenda',
            'Razvoj backenda',
            'Enterprise integracije',
            'Digitalno bančništvo',
            'Varne in skalabilne storitve',
            'Poslovno kritična izvedba',
          ],
        },
        {
          label: 'AgenticAI rešitev',
          title: 'RikoAI',
          body: [
            'RikoAI je rešitev AgenticAI, zasnovana za podporo inteligentni pomoči, na znanju temelječi avtomatizaciji in optimizaciji poslovnih procesov v enterprise okolju.',
            'Rešitev prikazuje, kako je mogoče enterprise znanje, AI asistente, nadzorovane integracije in procesni kontekst združiti za boljšo podporo uporabnikom, boljše odločanje in večjo operativno učinkovitost.',
          ],
          expertiseTitle: 'Strokovnost Sunesis',
          expertise: [
            'AgenticAI',
            'Enterprise AI asistenti',
            'Na znanju temelječa avtomatizacija',
            'Podpora poslovnim procesom',
            'Varna AI arhitektura',
            'Izvedba na KumuluzAI',
          ],
        },
        {
          label: 'Avtomatizacija zavarovalniških procesov',
          title: 'AgenticAI platforma — Zavarovalniška skupina Sava',
          body: [
            'Sunesis je za Zavarovalniško skupino Sava razvil enterprise platformo AgenticAI, ki omogoča inteligentno avtomatizacijo procesov, varno uporabo organizacijskega znanja in integracijo s poslovnimi sistemi.',
            'Projekt prikazuje, kako lahko AI agenti podpirajo zavarovalniške procese prek nadzorovanega dostopa do znanja, uporabe orodij, API integracij, enterprise nadzornih mehanizmov in produkcijsko zrele platforme.',
          ],
          expertiseTitle: 'Strokovnost Sunesis',
          expertise: [
            'AgenticAI platforma',
            'AI agenti',
            'Avtomatizacija zavarovalniških procesov',
            'Enterprise integracije',
            'Upravljanje in varen AI',
            'Izvedba platforme KumuluzAI',
          ],
        },
        {
          label: 'DevOps za blockchain infrastrukturo',
          title: 'Flare',
          body: [
            'Sunesis za Flare zagotavlja strokovnost na področju DevOps in platformskega inženiringa ter podpira avtomatizacijo, cloud-native operacije in zanesljive prakse izvedbe za obsežno okolje blockchain infrastrukture.',
            'Ta referenca prikazuje sposobnosti Sunesis v zahtevnih infrastrukturnih okoljih, kjer so ključni avtomatizacija, zanesljivost platforme, operacije na osnovi Kubernetesa in produkcijsko zreli temelji izvedbe.',
          ],
          expertiseTitle: 'Strokovnost Sunesis',
          expertise: [
            'DevOps inženiring',
            'Platformski inženiring',
            'Operacije na Kubernetesu',
            'Avtomatizacija in nameščanje',
            'Produkcijsko zrela infrastruktura',
            'Blockchain infrastruktura',
            'Operativna zanesljivost',
          ],
        },
        {
          label: 'Odprtokodna sledljivost dobavnih verig',
          title: 'INATrace',
          body: [
            'Sunesis je bil glavni razvojni partner pri projektu INATrace, odprtokodni rešitvi za digitalno sledljivost transparentnih kmetijskih dobavnih verig.',
            'INATrace omogoča sledljivost od začetka do konca ter akterjem v dobavni verigi pomaga beležiti, upravljati in deliti podatke o sledljivosti od proizvodnje do končnega izdelka. Projekt se je pridružil skupnosti Linux Foundation AgStack in tako okrepil svojo odprtokodno prihodnost ter potencial za globalno sodelovanje.',
          ],
          expertiseTitle: 'Strokovnost Sunesis',
          expertise: [
            'Glavni razvoj rešitve',
            'Odprtokodni inženiring',
            'Sledljivost dobavnih verig',
            'Razvoj backenda',
            'Spletne in mobilne aplikacije',
            'Podatkovni in procesni workflowi',
            'Ekosistem Linux Foundation',
          ],
        },
        {
          label: 'Odprtokodno orodje za interoperabilnost v energetiki',
          title: 'CUPID',
          body: [
            'Sunesis je bil glavni razvojni in prispevajoči partner pri projektu CUPID, odprtokodnem orodju za interoperabilnost pri komunikaciji porazdeljenih energetskih virov.',
            'CUPID gostuje pri LF Energy in se osredotoča na interoperabilnost porazdeljenih energetskih virov, sodobne komunikacijske vzorce in odprtokodne komponente za skalabilno komunikacijo DER, s strokovnim znanjem na področju razvoja v Javi, sporočanja NATS, integracije protokolov ter namestitvenih scenarijev edge-to-cloud.',
          ],
          expertiseTitle: 'Strokovnost Sunesis',
          expertise: [
            'Glavni razvoj rešitve',
            'Prispevek k odprti kodi',
            'Interoperabilnost v energetiki',
            'Razvoj v Javi',
            'Sporočanje NATS',
            'Integracija protokolov',
            'Edge, on-premise in oblak',
            'Ekosistem Linux Foundation',
          ],
        },
      ],
    },
    {
      type: 'projects',
      eyebrow: 'Več enterprise projektov',
      title: 'Digitalni kanali, platforme in integracije',
      intro:
        'Naše delo zajema digitalne kanale, enterprise platforme, integracije, sisteme javnega sektorja, energetske platforme in digitalne izkušnje premium blagovnih znamk.',
      columns: 4,
      items: [
        {
          label: 'Bančna skladnost in onboarding',
          title: 'KYC — NLB',
          text: 'Digitalna rešitev KYC in integracije, ki podpirajo bančno skladnost, onboarding strank in regulirane digitalne procese.',
          meta: 'Digitalno bančništvo, integracije, workflowi skladnosti, backend sistemi, varni procesi.',
        },
        {
          label: 'Digitalni sistem za vodenje zadev',
          title: 'eSpis — Vrhovno sodišče',
          text: 'Digitalna rešitev za vodenje zadev, ki podpira pravosodne workflowe, varno ravnanje z dokumenti in sodne postopke.',
          meta: 'Sistemi javnega sektorja, varni workflowi, upravljanje dokumentov, enterprise backend, vodenje zadev.',
        },
        {
          label: 'Informacijski sistem sodne uprave',
          title: 'IKA — Vrhovno sodišče',
          text: 'Enterprise informacijski sistem, ki podpira napredno sodno upravo in operativne procese.',
          meta: 'Javni sektor, enterprise aplikacije, podpora procesom, integracije, operativni sistemi.',
        },
        {
          label: 'Platforma energetske infrastrukture',
          title: 'EPUS — Plinovodi',
          text: 'Poslovno kritična enterprise platforma, ki podpira energetsko infrastrukturo in operativne workflowe.',
          meta: 'Energetika in oskrbne dejavnosti, enterprise platforme, integracije, operativni sistemi, poslovno kritična izvedba.',
        },
        {
          label: 'Digitalna prisotnost premium blagovne znamke',
          title: 'Spletna stran Akrapovič',
          text: 'Visoko zmogljiva spletna stran za globalno premium blagovno znamko, ki podpira digitalno predstavitev, doživetje znamke in spletno vključevanje uporabnikov.',
          meta: 'Spletni razvoj, zmogljivost, uporabniška izkušnja, digitalna prisotnost znamke.',
        },
        {
          label: 'Enterprise poslovni portal',
          title: 'Poslovni portal Akrapovič',
          text: 'Digitalni poslovni portal, ki podpira partnerske, strankine in interne enterprise workflowe.',
          meta: 'Poslovni portali, frontend, backend, integracije, partnerske storitve.',
        },
        {
          label: 'Enterprise integracijska platforma',
          title: 'Inorma — Zavarovalniška skupina Sava',
          text: 'Integracijska platforma, ki povezuje sisteme, podatkovne tokove in poslovne procese v zavarovalniški skupini.',
          meta: 'Enterprise integracije, API arhitektura, podatkovni tokovi, zavarovalniški sistemi, upravljanje integracij.',
        },
        {
          label: 'Rešitev za digitalno vključevanje strank',
          title: 'Energetika Moj utrip',
          text: 'Digitalna rešitev, ki podpira sodobno vključevanje strank in storitve, povezane z energijo.',
          meta: 'Portali za stranke, digitalne storitve, energetski sektor, integracije.',
        },
      ],
    },
    {
      type: 'cards',
      eyebrow: 'Strokovnost, dokazana z resničnim delom',
      title: 'Kako se naše reference povezujejo z našo strokovnostjo',
      intro:
        'Naše reference prikazujejo, kako se področja strokovnosti Sunesis povezujejo v resničnih enterprise, odprtokodnih in inovacijskih projektih.',
      columns: 3,
      variant: 'accent',
      items: [
        {
          label: 'Rešitve AgenticAI',
          title: 'Enterprise AI agenti in platforme',
          text: 'RikoAI in platforma AgenticAI za Zavarovalniško skupino Sava prikazujeta našo sposobnost gradnje enterprise AI agentov, avtomatizacije procesov in varnih AI platform.',
        },
        {
          label: 'Razvoj digitalnih rešitev',
          title: 'Celovita izvedba',
          text: 'NLB Klik, KYC, eSpis, IKA, Poslovni portal Akrapovič, Energetika Moj utrip in INATrace prikazujejo našo izvedbo na področju backenda, frontenda, mobilnih aplikacij, portalov, workflowov in integracij.',
        },
        {
          label: 'Cloud-native in edge arhitekture',
          title: 'Porazdeljena arhitektura',
          text: 'Inorma, CUPID, projekti, povezani s Kumuluz, in naš R&I portfelj prikazujejo strokovnost na področju cloud-native sistemov, Kubernetesa, porazdeljenih arhitektur, NATS, interoperabilnosti in konceptov edge-fog-cloud.',
        },
        {
          label: 'API ekosistemi in integracije',
          title: 'API-ji in integracijska arhitektura',
          text: 'Inorma, KYC, NLB Klik, CUPID in Kumuluz API prikazujejo našo sposobnost načrtovanja API-jev, integracijskih arhitektur, podatkovnih tokov, dogodkovno vodenih sistemov in ponovno uporabnih digitalnih zmožnosti.',
        },
        {
          label: 'DevOps in platformski inženiring',
          title: 'Produkcijsko zrele operacije',
          text: 'Flare in naše platformsko delo prikazujeta našo sposobnost podpore zahtevni infrastrukturi, avtomatizaciji, operacijam na Kubernetesu, CI/CD in produkcijsko zrelim temeljem izvedbe.',
        },
        {
          label: 'Odprtokodni inženiring',
          title: 'Celovite odprtokodne rešitve',
          text: 'INATrace in CUPID prikazujeta našo sposobnost gradnje celovitih odprtokodnih rešitev, ki postanejo del mednarodnih ekosistemov fundacij.',
        },
      ],
    },
    FINAL_CTA_SL,
  ],
}

const openSourceSl: ReferencesPageContent = {
  seo: {
    title:
      'Odprta koda | Projekti Linux Foundation, INATrace in CUPID | Sunesis',
    description:
      'Odprtokodni inženiring Sunesis: celovite produkcijsko zrele rešitve, vključno z INATrace (Linux Foundation AgStack) in CUPID (LF Energy) za skupno digitalno infrastrukturo.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Odprta koda',
    title: 'Odprtokodni inženiring za skupno digitalno infrastrukturo',
    body: [
      'Sunesis je močno zavezan odprtokodni programski opremi, odprtim standardom in ponovno uporabni digitalni infrastrukturi.',
      'Pomagamo graditi celovite odprtokodne rešitve — vključno s projekti, povezanimi z ekosistemi Linux Foundation, kot sta AgStack in LF Energy — ki se razvijajo prek mednarodnih skupnosti.',
    ],
    primaryCta: 'Pogovorite se z našimi strokovnjaki',
  },
  sections: [
    {
      type: 'prose',
      title: 'Naša zavezanost odprti kodi',
      intro:
        'Naše ekipe odprtokodnih tehnologij ne le uporabljajo — pomagamo graditi celovite odprtokodne rešitve, ki se razvijajo prek mednarodnih skupnosti.',
      body: [
        'Projekti, kot sta INATrace in CUPID, kažejo, da Sunesis zna razvijati produkcijsko usmerjeno programsko opremo, ki služi širšim ekosistemom onkraj ene same stranke ali implementacije.',
        'Odprta koda je pomembna, ker je sodobna digitalna infrastruktura vse bolj odvisna od interoperabilnosti, transparentnosti, sodelovanja skupnosti in dolgoročne vzdržljivosti. Sunesis v odprtokodne projekte prinaša enterprise inženirsko disciplino: arhitekturo, varnost, vzdržljivost, dokumentacijo, integracijske sposobnosti in produkcijsko kakovostno implementacijo.',
        'Zato je naše odprtokodno delo še posebej pomembno za sektorje, kjer je treba digitalno infrastrukturo deliti med organizacijami, skupnostmi in mednarodnimi ekosistemi.',
      ],
    },
    {
      type: 'cards',
      title: 'Kaj prinaša naše odprtokodno delo',
      columns: 3,
      variant: 'accent',
      items: [
        {
          title: 'Odprta digitalna infrastruktura',
          text: 'Pomagamo razvijati programske temelje, ki jih lahko širše skupnosti ponovno uporabijo, razširijo in vzdržujejo.',
        },
        {
          title: 'Odprti standardi in interoperabilnost',
          text: 'Naše delo podpira interoperabilnost med sistemi, sektorji in organizacijami — od kmetijskih dobavnih verig do porazdeljene energetske infrastrukture.',
        },
        {
          title: 'V skupnost usmerjen inženiring',
          text: 'Gradimo programsko opremo, ki je razumljiva, vzdržljiva in primerna za sodelovalni razvoj.',
        },
        {
          title: 'Enterprise odprta koda',
          text: 'Naše odprtokodno delo temelji na isti inženirski disciplini, ki jo uporabljamo za enterprise sisteme: arhitekturi, zanesljivosti, varnosti, dokumentaciji in dolgoročni vzdržljivosti.',
        },
        {
          title: 'Izkušnje z ekosistemi Linux Foundation',
          text: 'INATrace in CUPID prikazujeta izkušnje Sunesis s projekti, povezanimi z ekosistemi Linux Foundation, kot sta AgStack in LF Energy.',
        },
      ],
    },
    {
      type: 'references',
      eyebrow: 'Izpostavljeni odprtokodni projekti',
      title: 'Produkcijsko zrela programska oprema za odprte ekosisteme',
      items: [
        {
          label: 'Sledljivost kmetijskih dobavnih verig',
          title: 'INATrace',
          body: [
            'INATrace je odprtokodna rešitev za sledljivost kmetijskih dobavnih verig, osredotočena na transparentnost, pravičnejše vrednostne verige in digitalno sledljivost od proizvodnje do končnega izdelka.',
            'Sunesis je bil glavni razvojni partner ter je prispeval celovit inženiring, arhitekturo backenda, spletni in mobilni razvoj, podatkovne workflowe in odprtokodno implementacijo.',
          ],
          expertiseTitle: 'Ključne teme',
          expertise: [
            'Kmetijska sledljivost',
            'Transparentnost in odgovornost',
            'Odprtokodna infrastruktura',
            'Spletne in mobilne aplikacije',
            'Podatkovni in procesni workflowi',
            'Linux Foundation AgStack',
          ],
        },
        {
          label: 'Orodje za interoperabilnost v energetiki',
          title: 'CUPID',
          body: [
            'CUPID je odprtokodno orodje za interoperabilnost v energetiki, ki gostuje v ekosistemu LF Energy.',
            'Sunesis je bil glavni razvojni in prispevajoči partner ter podpiral razvoj v Javi, sporočanje NATS, vzorce interoperabilnosti, integracijo protokolov in namestitvene scenarije edge/on-prem/oblak.',
          ],
          expertiseTitle: 'Ključne teme',
          expertise: [
            'Interoperabilnost DER',
            'Odprtokodna energetska infrastruktura',
            'Razvoj v Javi',
            'Sporočanje NATS',
            'Integracija protokolov',
            'Namestitev edge in oblak',
            'Ekosistem LF Energy',
          ],
        },
      ],
    },
    FINAL_CTA_SL,
  ],
}

const clientsIndustriesSl: ReferencesPageContent = {
  seo: {
    title:
      'Stranke in panoge | Bančništvo, zavarovalništvo, javni sektor, energetika | Sunesis',
    description:
      'Panoge, kjer Sunesis dostavlja digitalne platforme, integracije, temelje DevOps, AgenticAI in poslovno kritično programsko opremo: bančništvo, zavarovalništvo, javni sektor, energetika in druge.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Stranke in panoge',
    title: 'Panoge, kjer je zanesljiva programska oprema najpomembnejša',
    body: [
      'Sodelujemo z organizacijami v panogah, kjer so zanesljivost programske opreme, varnost, integracijske sposobnosti in kakovost izvedbe ključnega pomena.',
      'Naše izkušnje segajo od reguliranih sektorjev in kompleksnih enterprise okolij do odprtokodnih ekosistemov in tehnološko usmerjenih organizacij.',
    ],
    primaryCta: 'Pogovorite se z našimi strokovnjaki',
  },
  sections: [
    {
      type: 'split',
      title: 'Kako podpiramo svoje stranke',
      body: [
        'Sunesis dela na projektih, kjer mora biti tehnologija varna, skalabilna, integrirana, opazljiva in zanesljiva.',
        'Podpiramo stranke in partnerje, ki potrebujejo digitalne platforme, varne integracije, cloud-native arhitekture, avtomatizacijo AgenticAI, zanesljive temelje DevOps, API ekosisteme in ponovno uporabno digitalno infrastrukturo.',
        'Mnogi naši projekti povezujejo več sistemov, podatkovnih tokov, uporabnikov, naprav in kanalov — v reguliranem poslovanju, kritični infrastrukturi in mednarodnih ekosistemih.',
      ],
    },
    {
      type: 'capabilities',
      title: 'Panoge, ki jih podpiramo',
      items: [
        {
          title: 'Bančništvo in finančne storitve',
          text: 'Platforme digitalnega bančništva, workflowi KYC, varne uporabniške poti, enterprise integracije, storitve na osnovi API-jev in sistemi, občutljivi na skladnost.',
          bulletsTitle: 'Primeri referenc',
          bullets: ['NLB Klik', 'KYC — NLB'],
        },
        {
          title: 'Zavarovalništvo',
          text: 'AgenticAI platforme, avtomatizacija procesov, integracijske platforme, na znanju temelječi sistemi in varne digitalne storitve.',
          bulletsTitle: 'Primeri referenc',
          bullets: [
            'AgenticAI platforma — Zavarovalniška skupina Sava',
            'Inorma — Zavarovalniška skupina Sava',
          ],
        },
        {
          title: 'Javni sektor',
          text: 'Sistemi za vodenje zadev, varni workflowi, digitalna uprava, dokumentno intenzivni procesi in enterprise informacijski sistemi.',
          bulletsTitle: 'Primeri referenc',
          bullets: ['eSpis — Vrhovno sodišče', 'IKA — Vrhovno sodišče'],
        },
        {
          title: 'Energetika in oskrbne dejavnosti',
          text: 'Operativne platforme, rešitve za vključevanje strank, izmenjava podatkov, interoperabilnost DER, integracije in kritični poslovni sistemi.',
          bulletsTitle: 'Primeri referenc',
          bullets: ['EPUS — Plinovodi', 'Energetika Moj utrip', 'CUPID'],
        },
        {
          title: 'Kmetijstvo in dobavne verige',
          text: 'Odprtokodne rešitve za sledljivost, transparentnost dobavnih verig, lastništvo podatkov in digitalna orodja za kmetijske vrednostne verige.',
          bulletsTitle: 'Primeri referenc',
          bullets: ['INATrace'],
        },
        {
          title: 'Proizvodnja in premium blagovne znamke',
          text: 'Digitalna prisotnost, poslovni portali, partnerske platforme, storitve za stranke in enterprise workflowi.',
          bulletsTitle: 'Primeri referenc',
          bullets: ['Spletna stran Akrapovič', 'Poslovni portal Akrapovič'],
        },
        {
          title: 'Blockchain in Web3 infrastruktura',
          text: 'DevOps, platformni inženiring, avtomatizacija in cloud-native operacije za zahtevna okolja blockchain infrastrukture.',
          bulletsTitle: 'Primeri referenc',
          bullets: ['Flare'],
        },
        {
          title: 'Odprta koda in ekosistemi Linux Foundation',
          text: 'Razvoj in prispevki k odprtokodnim projektom, ki gostujejo v mednarodnih fundacijah in skupnostih.',
          bulletsTitle: 'Primeri referenc',
          bullets: ['INATrace', 'CUPID'],
        },
        {
          title: 'Tehnologija in raziskave',
          text: 'Mednarodni raziskovalni in inovacijski projekti na področju AI, cloud-edge sistemov, IoT, kibernetske varnosti, podatkovnih platform in digitalne infrastrukture nove generacije.',
          bulletsTitle: 'Primeri referenc',
          bullets: [
            'GreenDat.AI',
            'NEPHELE',
            'dAIEDGE',
            'Resilmesh',
            'HEDGE-IoT',
          ],
        },
      ],
    },
    {
      type: 'logoWall',
      eyebrow: 'Izbrane stranke, partnerji in ekosistemi',
      title: 'Organizacije in ekosistemi, s katerimi sodelujemo',
      intro:
        'Sodelujemo z enterprise organizacijami, institucijami javnega sektorja, tehnološkimi partnerji, odprtokodnimi skupnostmi in evropskimi raziskovalnimi konzorciji.',
      logos: CLIENT_LOGOS,
      folder: 'extras',
    },
    {
      type: 'cards',
      eyebrow: 'Zakaj Sunesis',
      title: 'Zakaj organizacije izberejo Sunesis',
      columns: 4,
      variant: 'numbered',
      items: [
        {
          title: 'Globoka tehnična strokovnost',
          text: 'Senior inženirsko znanje na področju backenda, frontenda, mobilnih aplikacij, integracij, cloud-native arhitekture, DevOps, Kubernetesa, AI, API-jev in enterprise platform.',
        },
        {
          title: 'Izkušnje z enterprise izvedbo',
          text: 'Razumemo kompleksna organizacijska okolja, regulirane procese, podedovane sisteme, varnostne zahteve in dolgoročno vzdržljivost.',
        },
        {
          title: 'Integracijske sposobnosti',
          text: 'Mnogi naši projekti povezujejo več sistemov, API-jev, podatkovnih tokov, uporabnikov, naprav in kanalov. Integracija je ena naših ključnih prednosti.',
        },
        {
          title: 'Produkcijska miselnost',
          text: 'Gradimo sisteme, ki morajo delovati zanesljivo — z varnostjo, opazljivostjo, nameščanjem in podpornostjo, ki jih upoštevamo že od samega začetka.',
        },
        {
          title: 'Zavezanost odprti kodi',
          text: 'Naše delo na INATrace in CUPID kaže, da lahko razvijamo rešitve, ki ustvarjajo vrednost onkraj ene same implementacije.',
        },
        {
          title: 'Inovacijski dosežki',
          text: 'Naši raziskovalni in inovacijski projekti nas ohranjajo blizu nastajajočih tehnologij na področju AI, cloud-edge sistemov, IoT, kibernetske varnosti in podatkovnih platform.',
        },
        {
          title: 'Platformno razmišljanje',
          text: 'Prek Kumuluz in naših izkušenj z dostavo organizacijam pomagamo graditi ponovno uporabne temelje namesto izoliranih enkratnih rešitev.',
        },
        {
          title: 'Dolgoročno lastništvo',
          text: 'Arhitektura, integracija, zanesljivost platforme, varnost, upravljanje in vzdržljivost skozi celoten življenjski cikel.',
        },
      ],
    },
    FINAL_CTA_SL,
  ],
}

const researchInnovationSl: ReferencesPageContent = {
  seo: {
    title:
      'Raziskave in inovacije | EU projekti AI, cloud-edge, IoT in kibernetske varnosti | Sunesis',
    description:
      'Sunesis sodeluje v mednarodnih raziskovalnih in inovacijskih projektih na področju AI, cloud-edge arhitektur, IoT, kibernetske varnosti, podatkovnih platform in digitalne infrastrukture nove generacije.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Raziskave in inovacije',
    title: 'Z raziskavami podprte inovacije v nastajajočih tehnologijah',
    body: [
      'Poleg izvedbe projektov za stranke in prispevkov k odprti kodi Sunesis sodeluje v mednarodnih raziskovalnih in inovacijskih projektih, ki raziskujejo prihodnost umetne inteligence, cloud-edge arhitektur, IoT, kibernetske varnosti, podatkovnih platform in digitalne infrastrukture nove generacije.',
      'Ti projekti krepijo našo strokovnost na področju nastajajočih tehnologij in nam pomagajo, da z raziskavami podprt vpogled prenašamo v enterprise izvedbo.',
    ],
    primaryCta: 'Pogovorite se z našimi strokovnjaki',
  },
  sections: [
    {
      type: 'projects',
      eyebrow: 'Evropske raziskave in inovacije',
      title: 'Portfelj raziskav in inovacij',
      intro:
        'Izbor mednarodnih raziskovalnih in inovacijskih projektov, ki raziskujejo AI, cloud-edge kontinuum, IoT, kibernetsko varnost in energetsko ozaveščeno digitalno infrastrukturo.',
      columns: 4,
      items: [
        {
          label: 'AI in na podatkih temelječa digitalna trajnost',
          title: 'GreenDat.AI',
          text: 'Raziskave in inovacije, osredotočene na AI, podatkovne platforme ter bolj zelene in učinkovite digitalne sisteme.',
          meta: 'AI, podatkovne platforme, trajnost, digitalna infrastruktura, AI-pripravljene podatkovne storitve.',
        },
        {
          label:
            'Za prihodnost pripravljena energetska in digitalna infrastruktura',
          title: 'Interstore',
          text: 'Napredne digitalne tehnologije za energetiko, interoperabilnost, porazdeljene sisteme in inteligentne digitalne storitve.',
          meta: 'Energetski sistemi, interoperabilnost, na podatkih temelječi sistemi, enterprise tehnologija.',
        },
        {
          label: 'Orkestracija računskega kontinuuma',
          title: 'Headlight / NEPHELE',
          text: 'AI-podprta, kontekstno ozaveščena orkestracija za okolja računskega kontinuuma nove generacije.',
          meta: 'Cloud-edge kontinuum, orkestracija, AI-podprta infrastruktura, porazdeljeni sistemi.',
        },
        {
          label: 'Cloud-edge-IoT sistemi',
          title: 'BONSAI / COSMIC',
          text: 'Raziskave in inovacije na področju naprednih cloud-edge-IoT sistemov in inteligentne digitalne infrastrukture.',
          meta: 'Cloud-edge sistemi, IoT, porazdeljena infrastruktura, inteligentne storitve.',
        },
        {
          label: 'AI-native orkestracija na robu',
          title: 'EDGEWISE / dAIEDGE',
          text: 'AI-native orkestracija za zaupanja vredne in energetsko učinkovite sisteme po kontinuumu IoT–Edge–Fog–Cloud.',
          meta: 'AI-native orkestracija, edge computing, federirana okolja, energijska učinkovitost.',
        },
        {
          label: 'Odpornost Kubernetesa in kibernetska varnost',
          title: 'CHAMELEON / Resilmesh',
          text: 'Prilagodljiva odpornost Kubernetesa in kibernetska varnost z uporabo lahkih mesh konceptov in naprednih zaščitnih mehanizmov.',
          meta: 'Kubernetes, kibernetska varnost, odpornost, mesh arhitekture, porazdeljeni sistemi.',
        },
        {
          label: 'Inteligentni IoT in edge computing',
          title: 'AURORA / HEDGE-IoT',
          text: 'Inovacije na področju inteligentnega IoT, edge computinga in energetsko ozaveščene digitalne infrastrukture.',
          meta: 'IoT, edge computing, porazdeljena inteligenca, energetsko ozaveščeni sistemi.',
        },
      ],
    },
    {
      type: 'logoWall',
      eyebrow: 'Konzorcijski in raziskovalni partnerji',
      title: 'Evropski raziskovalni in inovacijski partnerji',
      intro:
        'Univerze, raziskovalni inštituti, tehnološka podjetja in industrijski partnerji, s katerimi sodelujemo v mednarodnih raziskovalnih in inovacijskih konzorcijih.',
      folder: 'horizon',
    },
    FINAL_CTA_SL,
  ],
}

export const referencesPages: Record<
  ReferenceSlug,
  Record<LanguageCode, ReferencesPageContent>
> = {
  'selected-work': { en: selectedWorkEn, sl: selectedWorkSl },
  'open-source': { en: openSourceEn, sl: openSourceSl },
  'clients-industries': { en: clientsIndustriesEn, sl: clientsIndustriesSl },
  'research-innovation': { en: researchInnovationEn, sl: researchInnovationSl },
}
