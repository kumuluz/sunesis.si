import type { LanguageCode } from '../../lib/router'

const enLanding = {
  hero: {
    eyebrow: 'Award-winning software solutions',
    title:
      'Enterprise AgenticAI, digital platforms and cloud-native engineering',
    body: 'We build secure, reliable digital solutions, microservices, cloud-native platforms and API integrations. With AgenticAI, we also develop digital workers and coordinated agent teams that automate complete processes — through to autonomous department and organization operations under human oversight.',
    primaryCta: 'Talk to our experts',
    secondaryCta: 'Explore our expertise',
    trustLine: 'Trusted by',
    awards: {
      label: 'Awards',
      items: [
        {
          icon: 'seal',
          title: 'Seal of Excellence',
          product: 'European Commission',
        },
        {
          icon: 'star',
          title: 'Duke’s Choice Award',
          product: 'Kumuluz',
        },
        {
          icon: 'trophy',
          title: 'AI of the Year 2026',
          product: 'RikoAI solution',
        },
        {
          icon: 'medal',
          title: 'GoDigital 2026 finalist',
          product: 'SI-GEOS AI agent',
        },
      ],
    },
  },
  intro: {
    eyebrow: 'Trusted engineering partner',
    title:
      'Senior delivery teams for complex digital initiatives and production platforms',
    cards: [
      'Build AI solutions, digital workers and AgenticAI organizations',
      'Modernize digital products with cloud-native platform foundations',
      'Connect systems, data and business processes through APIs',
      'Operate secure, scalable software with DevOps and platform engineering',
    ],
  },
  landingPageSections: {
    positioning: {
      title:
        'We build the technology foundations for intelligent, digital and cloud-native enterprises',
      body: [
        'Modern organizations need platforms that can evolve, integrate, scale and operate reliably in demanding business environments, and that prepare for a new generation of systems where AI assistants, AI agents, digital agent teams, APIs, workflows and business applications work together.',
        'Sunesis combines AgenticAI capabilities, full-stack software engineering, cloud-native architecture, DevOps, platform engineering, integration expertise and Kumuluz platforms to help enterprises move from ideas and experiments to production-ready digital solutions.',
        'For selected operational areas, we help organizations redesign work around AgenticAI principles, creating agentic operating models where AI agents handle routine, knowledge-intensive and coordination-heavy work, while people focus on oversight, approvals, exceptions and accountability.',
        'We support the full journey from strategy, architecture and development to integration, automation, deployment, governance, operation and long-term evolution.',
      ],
    },
    expertise: {
      title: 'Our expertise',
      intro:
        'We focus on the areas where deep technical expertise, enterprise experience and reliable delivery matter most.',
      items: [
        {
          slug: 'agentic-ai',
          title: 'AgenticAI Solutions',
          text: 'Enterprise AI applications and platforms connected with knowledge, APIs, tools and business systems, from assistants to multi-agent solutions.',
          capabilities: [
            'AI assistants, agents and multi-agent applications',
            'RAG, tool use and enterprise integrations',
            'Governance, human approvals and audit trails',
          ],
          cta: 'Explore AgenticAI Solutions',
        },
        {
          slug: 'agentic-organizations',
          title: 'AgenticAI Organizations & Digital Workers',
          text: 'Digital workers and coordinated agent teams that proactively carry out operational work, from a single business role to an entire organization within agreed autonomy boundaries.',
          capabilities: [
            'Digital workers and coordinated agent teams',
            'Process, department and organization automation',
            'Oversight, exception handling and performance measurement',
          ],
          cta: 'Explore AgenticAI Organizations',
        },
        {
          slug: 'digital-solutions',
          title: 'Digital Solutions Development',
          text: 'Complete digital solutions from backend systems and integrations to web, mobile and user-facing applications.',
          capabilities: [
            'Backend, frontend and mobile development',
            'Customer portals and digital platforms',
            'AI-agent-ready services and tool-safe APIs',
          ],
          cta: 'Explore Digital Solutions',
        },
        {
          slug: 'cloud-native-edge',
          title: 'Cloud-native & Edge Architectures',
          text: 'Modern architectures connecting cloud, on-premise, Kubernetes, APIs, events, identity, security and observability.',
          capabilities: [
            'Microservices, Kubernetes and OpenShift',
            'Hybrid and multi-cloud architecture',
            'Edge, fog and cloud continuum',
          ],
          cta: 'Explore Cloud-native & Edge',
        },
        {
          slug: 'api-ecosystems-integrations',
          title: 'API Ecosystems & Integrations',
          text: 'API ecosystems that connect applications, partners, business systems, workflows and AI agents.',
          capabilities: [
            'Enterprise API architecture and governance',
            'Partner APIs and developer portals',
            'Agent-ready APIs and MCP-oriented patterns',
          ],
          cta: 'Explore API Ecosystems',
        },
        {
          slug: 'devops-platform-engineering',
          title: 'DevOps & Platform Engineering',
          text: 'Secure, automated and production-ready foundations for software delivery and platform operations.',
          capabilities: [
            'CI/CD, GitOps and infrastructure as code',
            'Kubernetes, OpenShift and multi-cluster operations',
            'Observability, policy and platform reliability',
          ],
          cta: 'Explore DevOps & Platform Engineering',
        },
      ],
    },
    agenticOperations: {
      title: 'From a digital worker to an autonomous AgenticAI organization',
      intro:
        'We build digital workers that respond to events, schedules and requests, proactively carrying out work in the background. Start with one role, connect a team or redesign organization-wide operations where appropriate. People set goals, supervise outcomes and handle exceptions and required approvals.',
      primaryCta: 'Explore AgenticAI Organizations',
      secondaryCta: 'Read our approach in practice',
      articleSlug: 'autonomous-agenticai-organisation',
      cards: [
        {
          title: 'Digital worker',
          text: 'Takes on a defined business role, monitors events, performs approved actions and follows work through to completion.',
        },
        {
          title: 'Agent team',
          text: 'Coordinates specialized roles and runs a complete process, sharing context and handing exceptions to the right person.',
        },
        {
          title: 'AgenticAI organization',
          text: 'Connects processes and departments into a governed operating model with business-level oversight, measurable outcomes and continuous improvement.',
        },
      ],
    },
    kumuluz: {
      title: 'Kumuluz platforms and accelerators',
      intro:
        'Kumuluz is the Sunesis family of platforms, products and accelerators for enterprise AgenticAI, API management, reusable Business APIs, cloud-native digital platforms and AI-enhanced crowdsensing.',
      summary:
        'Built on years of enterprise engineering experience, Kumuluz provides reusable foundations for modern digital systems, reducing complexity and accelerating secure, scalable and governed innovation. Together, Kumuluz products help organizations build platform foundations where AI agents, APIs, Business APIs, workflows, digital services and data work together under governance.',
      items: [
        {
          title: 'KumuluzAI Platform',
          label: 'Governed AgenticAI platform',
          text: 'A foundation for secure AI agents, assistants and applications with orchestration, tool integration, model routing, guardrails and auditability.',
        },
        {
          title: 'Kumuluz API',
          label: 'API management',
          text: 'API catalogs, developer portals, API gateway management and governed API exposure for applications, partners and AI agents.',
        },
        {
          title: 'Kumuluz Business APIs',
          label: 'Reusable business capabilities',
          text: 'Reusable, governed and workflow-ready capabilities for domains such as customers, products, orders, payments and onboarding.',
        },
        {
          title: 'Kumuluz Digital Platform',
          label: 'Cloud-native digital platform',
          text: 'A cloud-native engineering foundation for services, APIs, connectors, MCP-enabled tools and workflow orchestrations.',
        },
        {
          title: 'Kumuluz Crowdsensing',
          label: 'AI-enhanced crowdsensing',
          text: 'Distributed data collection and AI-ready data services for smart communities, IoT environments and data-driven decisions.',
        },
      ],
    },
    selectedWork: {
      title: 'Selected Work',
      intro:
        'We work on complex digital platforms, AgenticAI solutions, integrations, open-source systems, DevOps foundations and business-critical software.',
      projects: [
        {
          title: 'NLB Klik',
          label: 'Digital banking platform',
          text: 'Frontend and backend development for modern digital banking experiences and complex banking journeys.',
          expertise:
            'Frontend development, backend development, enterprise integrations, digital banking',
        },
        {
          title: 'AgenticAI Platform - Zavarovalniska skupina Sava',
          label: 'Insurance process automation',
          text: 'Enterprise AgenticAI platform enabling intelligent process automation, governed knowledge access and integration with business systems.',
          expertise:
            'AgenticAI, insurance processes, enterprise integrations, governance, KumuluzAI',
        },
        {
          title: 'SI-GEOS — Statistical Office of the Republic of Slovenia',
          label: 'AI for statistics and geospatial data',
          text: 'An AI agent based on KumuluzAI for natural-language analysis of statistical and geospatial data, with traceable calculations, interactive maps, charts and tables.',
          expertise:
            'AgenticAI, data integration, geostatistics, multimodal visualisations, KumuluzAI',
        },
        {
          title: 'Flare',
          label: 'DevOps for blockchain infrastructure',
          text: 'DevOps and platform engineering for automation, cloud-native operations and reliable delivery in blockchain infrastructure.',
          expertise:
            'DevOps engineering, platform engineering, Kubernetes operations, automation',
        },
        {
          title: 'INATrace',
          label: 'Open-source supply-chain traceability',
          text: 'Main development partner for open-source digital traceability for transparent agricultural supply chains.',
          expertise:
            'Open-source engineering, supply-chain traceability, backend, web, mobile',
        },
        {
          title: 'CUPID',
          label: 'Open-source energy interoperability toolkit',
          text: 'Contributing development partner for distributed energy resource interoperability in the LF Energy ecosystem.',
          expertise:
            'Energy interoperability, NATS messaging, Java, edge and cloud deployment',
        },
        {
          title: 'RikoAI',
          label: 'Enterprise knowledge and process support',
          text: 'AgenticAI solution for intelligent assistance, knowledge-driven automation and business process optimization.',
          expertise:
            'AI assistants, enterprise knowledge, process support, KumuluzAI',
        },
      ],
    },
    proof: {
      title: 'Open source, research and references that prove delivery',
      text: 'Sunesis combines enterprise delivery with open-source contribution and international research work across AI, cloud-edge architectures, IoT, cybersecurity, data platforms and digital infrastructure.',
      cards: [
        {
          title: 'Open-source digital infrastructure',
          text: 'Projects such as INATrace and CUPID show production-oriented engineering for broader ecosystems.',
        },
        {
          title: 'Research & Innovation Projects',
          text: 'GreenDat.AI, Interstore, NEPHELE, dAIEDGE, Resilmesh, HEDGE-IoT and related projects keep our work close to emerging technology.',
        },
        {
          title: 'Demanding industries',
          text: 'Banking, insurance, public sector, energy, manufacturing, premium brands, blockchain and open-source ecosystems.',
        },
        {
          title: 'Long-term technical ownership',
          text: 'Architecture, integration, platform reliability, security, governance and maintainability across the full lifecycle.',
        },
      ],
    },
    why: {
      title: 'Why Sunesis?',
      intro:
        'We are a senior technology partner for organizations that need more than implementation capacity.',
      items: [
        {
          title: 'Enterprise-grade engineering',
          text: 'Systems for demanding environments where security, scalability, reliability and maintainability are essential.',
        },
        {
          title: 'AI, software engineering and DevOps in one team',
          text: 'Expertise across AgenticAI, development, integrations, cloud-native architecture, Kubernetes, OpenShift and DevOps.',
        },
        {
          title: 'Own platforms and accelerators',
          text: 'Kumuluz helps organizations adopt AgenticAI, APIs, Business APIs and cloud-native foundations faster and with more control.',
        },
        {
          title: 'Production mindset',
          text: 'Security, observability, deployment, auditability and supportability are considered from the beginning.',
        },
        {
          title: 'Agentic operations and workflow automation expertise',
          text: 'We combine AI flexibility with deterministic workflow execution using digital agent teams, APIs, Business APIs, human approvals and engines such as Temporal or Camunda, moving beyond isolated assistants toward agentic operating models.',
        },
      ],
    },
    finalCta: {
      title: 'Get in touch',
      text: 'Whether you are building AgenticAI solutions, introducing digital workers and autonomous operations, modernizing enterprise software, strengthening your API ecosystem or improving DevOps foundations, we would love to hear from you.',
      contact: {
        address: [
          'SUNESIS d.o.o.',
          'Ulica gledališča BTC 2',
          '1000 Ljubljana',
          'Slovenia',
        ],
        email: 'info@sunesis.si',
      },
      form: {
        firstNameLabel: 'First name',
        lastNameLabel: 'Last name',
        emailLabel: 'Email',
        phoneLabel: 'Phone number',
        messageLabel: 'Message',
        submitLabel: 'Send message',
        emailRequiredError: 'Please enter your email address.',
        emailInvalidError: 'Please enter a valid email address.',
        phoneInvalidError: 'Please enter a valid phone number.',
        messageRequiredError: 'Please enter a message.',
        sendingLabel: 'Sending…',
        errorMessage:
          'Something went wrong sending your message. Please try again or email us directly.',
      },
    },
  },
  thanks: {
    title: 'Thank you for reaching out',
    text: 'We have received your message and will get back to you shortly.',
    backLabel: 'Back to home',
  },
} as const

const slLanding = {
  hero: {
    eyebrow: 'Nagrajene programske rešitve',
    title: 'Enterprise AgenticAI, digitalne platforme in cloud-native razvoj',
    body: 'Razvijamo varne in zanesljive digitalne rešitve, mikrostoritve, cloud-native platforme in API integracije. Z AgenticAI gradimo tudi digitalne delavce in povezane agentne ekipe za avtomatizacijo celotnih procesov — vse do avtonomnega operativnega delovanja oddelkov in organizacij pod človeškim nadzorom.',
    primaryCta: 'Pogovorite se z našimi strokovnjaki',
    secondaryCta: 'Raziščite naše ekspertize',
    trustLine: 'Zaupajo nam',
    awards: {
      label: 'Nagrade',
      items: [
        {
          icon: 'seal',
          title: 'Pečat odličnosti',
          product: 'Evropska komisija',
        },
        {
          icon: 'star',
          title: 'Duke’s Choice Award',
          product: 'Kumuluz',
        },
        {
          icon: 'trophy',
          title: 'UI leta 2026',
          product: 'Rešitev RikoAI',
        },
        {
          icon: 'medal',
          title: 'Finalist GoDigital 2026',
          product: 'AI agent SI-GEOS',
        },
      ],
    },
  },
  intro: {
    eyebrow: 'Zanesljiv razvojni partner',
    title:
      'Senior razvojne ekipe za kompleksne digitalne pobude in produkcijske platforme',
    cards: [
      'Gradite AI rešitve, digitalne delavce in AgenticAI organizacije',
      'Posodobite digitalne produkte s cloud-native platformnimi temelji',
      'Povežite sisteme, podatke in poslovne procese prek API-jev',
      'Upravljajte varno in skalabilno programsko opremo z DevOps in platformnim inženiringom',
    ],
  },
  landingPageSections: {
    positioning: {
      title:
        'Gradimo tehnološke temelje za inteligentna, digitalna in cloud-native podjetja',
      body: [
        'Sodobne organizacije potrebujejo platforme, ki se lahko razvijajo, povezujejo, skalirajo in zanesljivo delujejo v zahtevnih poslovnih okoljih ter se pripravljajo na novo generacijo sistemov, kjer AI asistenti, AI agenti, digitalne agentne ekipe, API-ji, workflowi in poslovne aplikacije delujejo skupaj.',
        'Sunesis združuje AgenticAI zmožnosti, full-stack razvoj, cloud-native arhitekturo, DevOps, platformni inženiring, integracijsko znanje in platforme Kumuluz za prehod od idej in eksperimentov do produkcijsko pripravljenih digitalnih rešitev.',
        'Na izbranih operativnih področjih organizacijam pomagamo preoblikovati delo okoli AgenticAI principov in vzpostaviti agentne operativne modele, kjer AI agenti prevzamejo rutinsko, znanjsko intenzivno in koordinacijsko delo, ljudje pa se osredotočajo na nadzor, odobritve, izjeme in odgovornost.',
        'Podpiramo celotno pot od strategije, arhitekture in razvoja do integracije, avtomatizacije, uvedbe, upravljanja, delovanja in dolgoročnega razvoja.',
      ],
    },
    expertise: {
      title: 'Naša področja ekspertize',
      intro:
        'Osredotočamo se na področja, kjer so najpomembnejši globoko tehnično znanje, enterprise izkušnje in zanesljiva izvedba.',
      items: [
        {
          slug: 'agentic-ai',
          title: 'AgenticAI rešitve',
          text: 'Poslovne AI aplikacije in platforme, povezane z znanjem, API-ji, orodji in poslovnimi sistemi, od asistentov do večagentnih rešitev.',
          capabilities: [
            'AI asistenti, agenti in večagentne aplikacije',
            'RAG, uporaba orodij in poslovne integracije',
            'Upravljanje, človeške odobritve in revizijske sledi',
          ],
          cta: 'Raziščite AgenticAI rešitve',
        },
        {
          slug: 'agentic-organizations',
          title: 'AgenticAI organizacije in digitalni delavci',
          text: 'Digitalni delavci in povezane agentne ekipe, ki proaktivno izvajajo operativno delo, od posamezne poslovne vloge do celotne organizacije znotraj dogovorjenih meja avtonomije.',
          capabilities: [
            'Digitalni delavci in usklajene agentne ekipe',
            'Avtomatizacija procesov, oddelkov in organizacij',
            'Nadzor, obravnava izjem in merjenje učinkovitosti',
          ],
          cta: 'Raziščite AgenticAI organizacije',
        },
        {
          slug: 'digital-solutions',
          title: 'Razvoj digitalnih rešitev',
          text: 'Celovite digitalne rešitve od zalednih sistemov in integracij do spletnih, mobilnih in uporabniških aplikacij.',
          capabilities: [
            'Backend, frontend in mobilni razvoj',
            'Uporabniški portali in digitalne platforme',
            'Storitve za AI agente in varni API-ji za orodja',
          ],
          cta: 'Raziščite digitalne rešitve',
        },
        {
          slug: 'cloud-native-edge',
          title: 'Cloud-native in edge arhitekture',
          text: 'Sodobne arhitekture, ki povezujejo oblak, lokalna okolja, Kubernetes, API-je, dogodke, identiteto, varnost in opazljivost sistemov.',
          capabilities: [
            'Mikrostoritve, Kubernetes in OpenShift',
            'Hibridne in multi-cloud arhitekture',
            'Edge, fog in cloud kontinuum',
          ],
          cta: 'Raziščite cloud-native in edge',
        },
        {
          slug: 'api-ecosystems-integrations',
          title: 'API ekosistemi in integracije',
          text: 'API ekosistemi, ki povezujejo aplikacije, partnerje, poslovne sisteme, workflowe in AI agente.',
          capabilities: [
            'Enterprise API arhitektura in governance',
            'Partnerski API-ji in developerski portali',
            'API-ji za AI agente in MCP vzorci',
          ],
          cta: 'Raziščite API ekosisteme',
        },
        {
          slug: 'devops-platform-engineering',
          title: 'DevOps in platformni inženiring',
          text: 'Varni, avtomatizirani in produkcijsko pripravljeni temelji za razvoj, dostavo ter obratovanje platform.',
          capabilities: [
            'CI/CD, GitOps in infrastruktura kot koda',
            'Kubernetes, OpenShift in multi-cluster okolja',
            'Opazljivost sistemov, politike in zanesljivost platform',
          ],
          cta: 'Raziščite DevOps in platformni inženiring',
        },
      ],
    },
    agenticOperations: {
      title: 'Od digitalnega delavca do avtonomne AgenticAI organizacije',
      intro:
        'Razvijamo digitalne delavce, ki se odzivajo na dogodke, urnike in zahteve ter proaktivno opravljajo delo v ozadju. Začnemo z eno vlogo, povežemo ekipo ali, kjer je to primerno, preoblikujemo poslovanje celotne organizacije. Ljudje določajo cilje, nadzirajo rezultate ter obravnavajo izjeme in zahtevane odobritve.',
      primaryCta: 'Raziščite AgenticAI organizacije',
      secondaryCta: 'Preberite o našem pristopu v praksi',
      articleSlug: 'avtonomna-agenticai-organizacija',
      cards: [
        {
          title: 'Digitalni delavec',
          text: 'Prevzame določeno poslovno vlogo, spremlja dogodke, izvaja dovoljena dejanja in skrbi za zaključek dela.',
        },
        {
          title: 'Agentna ekipa',
          text: 'Usklajuje specializirane vloge in izvaja celoten proces, pri tem deli kontekst in izjeme preda pravi osebi.',
        },
        {
          title: 'AgenticAI organizacija',
          text: 'Povezuje procese in oddelke v nadzorovano operativno celoto z vsebinskim nadzorom, merljivimi rezultati in nenehnim izboljševanjem.',
        },
      ],
    },
    kumuluz: {
      title: 'Kumuluz platforme in pospeševalniki',
      intro:
        'Kumuluz je družina Sunesis platform, produktov in pospeševalnikov za enterprise AgenticAI, API management, ponovno uporabne Business API-je, cloud-native digitalne platforme in AI-podprt crowdsensing.',
      summary:
        'Kumuluz temelji na letih enterprise inženirskih izkušenj ter ponuja ponovno uporabne temelje za sodobne digitalne sisteme, z manj kompleksnosti in hitrejšo uvedbo varnih, skalabilnih ter upravljanih inovacij. Produkti Kumuluz skupaj organizacijam pomagajo zgraditi platformne temelje, kjer AI agenti, API-ji, Business API-ji, workflowi, digitalne storitve in podatki delujejo skupaj pod governance nadzorom.',
      items: [
        {
          title: 'KumuluzAI Platform',
          label: 'Upravljana AgenticAI platforma',
          text: 'Gradite AI agente in asistente, ki dostopajo do enterprise znanja, uporabljajo odobrena orodja, usmerjajo zahtevke modelom, sledijo politikam, podpirajo človeške odobritve in omogočajo revizijske sledi.',
        },
        {
          title: 'Kumuluz API',
          label: 'API management',
          text: 'Izpostavljajte, upravljajte, zavarujte in spremljajte API-je med internimi ekipami, partnerji, digitalnimi ekosistemi in AgenticAI okolji, z developerskimi portali, upravljanjem gatewayev in MCP vzorci.',
        },
        {
          title: 'Kumuluz Business API-ji',
          label: 'Ponovno uporabne poslovne zmožnosti',
          text: 'Ponavljajočo se poslovno funkcionalnost spremenite v ponovno uporabne, upravljane in AgenticAI-ready zmožnosti za digitalne produkte, agente, MCP orodja in deterministične workflowe.',
        },
        {
          title: 'Kumuluz Digital Platform',
          label: 'Cloud-native digitalna platforma',
          text: 'Cloud-native, API-first in AI-agent-ready inženirski temelj za storitve, API-je, konektorje, MCP orodja in orkestracijo workflowov.',
        },
        {
          title: 'Kumuluz Crowdsensing',
          label: 'AI-podprt crowdsensing',
          text: 'Zbirajte, obdelujte in uporabljajte porazdeljene podatke iz ljudi, naprav, senzorjev in okolij, z AI-podprto analitiko in AI-ready podatkovnimi storitvami.',
        },
      ],
    },
    selectedWork: {
      title: 'Izbrani projekti',
      intro:
        'Delamo na kompleksnih digitalnih platformah, AgenticAI rešitvah, integracijah, odprtokodnih sistemih, DevOps temeljih in poslovno kritični programski opremi.',
      projects: [
        {
          title: 'NLB Klik',
          label: 'Digitalna bančna platforma',
          text: 'Frontend in backend razvoj za sodobne digitalne bančne izkušnje in kompleksne uporabniške poti v bančništvu.',
          expertise:
            'Frontend razvoj, backend razvoj, enterprise integracije, digitalno bančništvo',
        },
        {
          title: 'AgenticAI Platform - Zavarovalniška skupina Sava',
          label: 'Avtomatizacija zavarovalniških procesov',
          text: 'Enterprise AgenticAI platforma za inteligentno avtomatizacijo procesov, upravljan dostop do znanja in integracijo s poslovnimi sistemi.',
          expertise:
            'AgenticAI, zavarovalniški procesi, enterprise integracije, governance, KumuluzAI',
        },
        {
          title: 'SI-GEOS — Statistični urad RS',
          label: 'AI za statistiko in prostor',
          text: 'AI-agent na osnovi KumuluzAI za analizo statističnih in geoprostorskih podatkov v naravnem jeziku, s sledljivimi izračuni ter interaktivnimi zemljevidi, grafikoni in tabelami.',
          expertise:
            'AgenticAI, povezovanje podatkov, geostatistika, večmodalne vizualizacije, KumuluzAI',
        },
        {
          title: 'Flare',
          label: 'DevOps za blockchain infrastrukturo',
          text: 'DevOps in platformni inženiring za avtomatizacijo, cloud-native obratovanje in zanesljivo dostavo v blockchain infrastrukturi.',
          expertise:
            'DevOps inženiring, platformni inženiring, Kubernetes operacije, avtomatizacija',
        },
        {
          title: 'INATrace',
          label: 'Odprtokodna sledljivost dobavnih verig',
          text: 'Glavni razvojni partner pri odprtokodni digitalni sledljivosti za transparentne kmetijske dobavne verige.',
          expertise:
            'Odprtokodni razvoj, sledljivost dobavnih verig, backend, web, mobile',
        },
        {
          title: 'CUPID',
          label: 'Odprtokodno orodje za energetsko interoperabilnost',
          text: 'Razvojni partner pri interoperabilnosti porazdeljenih energetskih virov v ekosistemu LF Energy.',
          expertise:
            'Energetska interoperabilnost, NATS messaging, Java, edge in cloud uvedba',
        },
        {
          title: 'RikoAI',
          label: 'Enterprise znanje in procesna podpora',
          text: 'AgenticAI rešitev za inteligentno asistenco, avtomatizacijo na podlagi znanja in optimizacijo poslovnih procesov.',
          expertise:
            'AI asistenti, enterprise znanje, procesna podpora, KumuluzAI',
        },
      ],
    },
    proof: {
      title: 'Odprta koda, raziskave in reference kot dokaz izvedbe',
      text: 'Sunesis združuje enterprise izvedbo, odprtokodni prispevek in mednarodno raziskovalno delo na področjih AI, cloud-edge arhitektur, IoT, kibernetske varnosti, podatkovnih platform in digitalne infrastrukture.',
      cards: [
        {
          title: 'Odprtokodna digitalna infrastruktura',
          text: 'Projekta INATrace in CUPID kažeta produkcijsko usmerjen razvoj za širše ekosisteme.',
        },
        {
          title: 'Raziskave in inovacije',
          text: 'GreenDat.AI, Interstore, NEPHELE, dAIEDGE, Resilmesh, HEDGE-IoT in sorodni projekti nas ohranjajo blizu nastajajočim tehnologijam.',
        },
        {
          title: 'Zahtevne industrije',
          text: 'Bančništvo, zavarovalništvo, javni sektor, energetika, proizvodnja, premium znamke, blockchain in odprtokodni ekosistemi.',
        },
        {
          title: 'Dolgoročno tehnično lastništvo',
          text: 'Arhitektura, integracije, zanesljivost platform, varnost, governance in vzdrževanje skozi celoten življenjski cikel.',
        },
      ],
    },
    why: {
      title: 'Zakaj Sunesis?',
      intro:
        'Smo senior tehnološki partner za organizacije, ki potrebujejo več kot samo izvedbeno kapaciteto.',
      items: [
        {
          title: 'Enterprise-grade inženiring',
          text: 'Sistemi za zahtevna okolja, kjer so varnost, skalabilnost, zanesljivost in vzdrževanje ključni.',
        },
        {
          title: 'AI, razvoj programske opreme in DevOps v eni ekipi',
          text: 'Znanje na področjih AgenticAI, razvoja, integracij, cloud-native arhitekture, Kubernetes, OpenShift in DevOps.',
        },
        {
          title: 'Lastne platforme in pospeševalniki',
          text: 'Kumuluz organizacijam pomaga hitreje in bolj nadzorovano uvajati AgenticAI, API-je, Business API-je in cloud-native temelje.',
        },
        {
          title: 'Produkcijski način razmišljanja',
          text: 'Varnost, opazljivost, uvedba, revizijske sledi in podpora so upoštevani od začetka.',
        },
        {
          title:
            'Strokovnost za agentne operacije in avtomatizacijo workflowov',
          text: 'Združujemo prilagodljivost AI z determinističnim izvajanjem workflowov z digitalnimi agentnimi ekipami, API-ji, Business API-ji, človeškimi odobritvami in orodji, kot sta Temporal ali Camunda, ter tako presegamo izolirane asistente v smeri agentnih operativnih modelov.',
        },
      ],
    },
    finalCta: {
      title: 'Stopite v stik',
      text: 'Če gradite AgenticAI rešitve, uvajate digitalne delavce in avtonomno poslovanje, posodabljate poslovno programsko opremo, krepite API ekosistem ali izboljšujete DevOps temelje, se veselimo vašega sporočila.',
      contact: {
        address: [
          'SUNESIS d.o.o.',
          'Ulica gledališča BTC 2',
          '1000 Ljubljana',
          'Slovenija',
        ],
        email: 'info@sunesis.si',
      },
      form: {
        firstNameLabel: 'Ime',
        lastNameLabel: 'Priimek',
        emailLabel: 'E-pošta',
        phoneLabel: 'Telefonska številka',
        messageLabel: 'Sporočilo',
        submitLabel: 'Pošlji sporočilo',
        emailRequiredError: 'Vnesite svoj e-poštni naslov.',
        emailInvalidError: 'Vnesite veljaven e-poštni naslov.',
        phoneInvalidError: 'Vnesite veljavno telefonsko številko.',
        messageRequiredError: 'Vnesite sporočilo.',
        sendingLabel: 'Pošiljanje…',
        errorMessage:
          'Pri pošiljanju sporočila je prišlo do napake. Poskusite znova ali nam pišite neposredno.',
      },
    },
  },
  thanks: {
    title: 'Hvala za vaše sporočilo',
    text: 'Vaše sporočilo smo prejeli in se vam bomo kmalu oglasili.',
    backLabel: 'Nazaj na domačo stran',
  },
} as const

export const landingContent = {
  en: enLanding,
  sl: slLanding,
}

export type LandingContent = (typeof landingContent)[LanguageCode]
